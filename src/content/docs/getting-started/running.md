---
title: Running Kanade
description: niri's systemd unit, Umbriel autostart, source updates and current crash recovery limits.
sidebar:
  order: 2
---

Run one Kanade per session. A second stops with `failed to listen: kanade is already running`. Kanade selects reachable Umbriel IPC first, then niri, and follows only that compositor's events.

## Start with Umbriel

Keep Kanade in Umbriel's `[general]` autostart list, as in the supplied `dist/umbriel/config.toml`:

```toml
[general]
autostart = ["kanade"]
```

Merge that entry with any existing commands, and ensure `~/.cargo/bin` is on the compositor's PATH. Bare `kanade` starts a non-rendering parent named `kanade-recover`, which owns one rendering child and restarts it after any exit. Duplicate starts are refused. The supplied `kanade.service` stays tied to `niri.service`; Umbriel needs no different unit.

`kanade status` reports the parent's PID; `kanade doctor` checks that parent. `pgrep -x kanade` identifies the rendering child. To stop recovery intentionally while unlocked, send SIGTERM to the parent PID reported by status. Stopping only the child restarts it. Compositor exit stops both; the parent allows up to 6 s for child cleanup, then kills and reaps it. `scripts/dev` controls the parent too.

Restart delay grows from 250 ms to at most 8 s, resetting after a 30 s run. Before a lock request reaches Umbriel, the parent acknowledges and retains lock intent in memory. A replacement relocks from that intent even without logind's `LockedHint`; Umbriel's source keeps a failed locker blank and locked until replacement. Intent clears only after a confirmed lock end. No password or disk lock-state marker is retained.

A persisted disable of the `lock` Module cannot discard an inherited lock. The replacement restores that lock with new lock controls, sleep handling and lock/unlock hooks off. `kanade lock status` also refuses with `module lock is off`: it remains a verb of the disabled Module and cannot diagnose the inherited lock. After confirmed unlock or definite refusal/end and the parent's clear acknowledgement, the child exits. The next child leaves the disabled Module fully cold.

The parent itself is not restarted: abrupt parent death kills its child and loses intent. A hung child is not detected. An ambiguous crash after unlocking but before confirmation can conservatively relock. Do not stop the parent while locked expecting a new one to restore the UI. If it dies while locked, use another TTY and a compatible replacement locker; ending the graphical session is a last resort that loses unsaved work.

Two live Umbriel runs observed locked renderer-crash recovery and replacement-lock authentication on candidate `6ad11434ca099666dddf13ea32a519864503437d`, binary SHA-256 `43e16923ee0834fa297dfec0f4aa7862912e1747bd7522cb140c77bd77f22e2b`:

- Enabled lock Module: renderer SIGKILL produced a replacement lock under the same parent and compositor despite logind's `LockedHint` remaining `no`. A screenshot showed the lock, UI requests refused while locked, and authentication succeeded.
- Persisted disable: the replacement restored the inherited lock despite `lock status` refusing. Authentication started another child with the Module fully off and UI responsive. Replacement lock/unlock hooks added nothing to the single pre-crash marker.

Both runs restored the exact original shell after unlocking; real settings mtime stayed unchanged. Neither captured frames during the subsecond replacement gap: continuous privacy and no-desktop-flash remain unobserved. Live logout/compositor shutdown and niri acceptance remain **NOT RUN**; process-lifetime fixtures are automated evidence only. [ADR 0149](https://github.com/0x1d1e/kanade/blob/main/docs/adr/0149-umbriel-starts-a-shell-recovery-parent.md) records the run evidence and earlier unlocked smoke.

The supplied config includes Umbriel's `blur-kanade` layer rule. For an existing config, Settings' Compositor page or `kanade umbriel-config rules apply blur-kanade` adds it on request. The [niri rules](/getting-started/niri-rules/) use a different format and apply only to niri.

## Start with niri

The installer enables a systemd user unit wanted by `niri.service`. It starts with niri, stops with its graphical session, and restarts after a crash. For a manual source install:

```sh
mkdir -p ~/.config/systemd/user
cp dist/kanade.service ~/.config/systemd/user/
systemctl --user daemon-reload
systemctl --user enable --now kanade.service
```

The unit runs `~/.cargo/bin/kanade`. Remove `spawn-at-startup "kanade"` from niri's config so only the unit starts it. Customize through `systemctl --user edit kanade.service`; updates preserve drop-ins and save a differing old unit as `kanade.service.bak.DATE`.

```sh
systemctl --user status kanade.service
journalctl --user -u kanade.service -e
```

A shell that crashes at every start stops restarting after five starts in 60 seconds. If locked, niri stays on its red lock screen. From another TTY (`Ctrl+Alt+F3`), fix the cause, then:

```sh
systemctl --user reset-failed kanade.service
systemctl --user restart kanade.service
```

The restarted shell locks again. Only if recovery fails, `loginctl terminate-session <id>` ends the graphical session and closes every app, losing unsaved work; `loginctl list-sessions` lists the IDs.

## Update from source

`kanade update` builds `main` with Cargo into `~/.cargo/bin/kanade`, refreshes the user unit and restarts it if active. It installs no packages and writes no compositor config. A failed build leaves the installed binary as it was.

The running Umbriel parent and child keep their loaded code after an update. While unlocked, stop the parent as above, wait for both processes to exit, then start the installed `kanade` from the same session to replace both. Keep Umbriel autostart for future sessions. Stopping only the child leaves the old parent running. Running the installer again also builds from source and refreshes dependencies.

From a checkout, `cargo run` runs the shell and `scripts/dev` rebuilds and restarts it on saves. Stop the current shell before either.

The installer supplies the notification icon; for a manual install:

```sh
install -Dm644 dist/kanade.png ~/.local/share/icons/hicolor/256x256/apps/kanade.png
```

## See also

[Installation](/getting-started/installation/), [maintenance commands](/cli/maintenance/), and [compositor limitations](/reference/known-gaps/shell/).
