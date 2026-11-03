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

Merge that entry with any existing commands, and ensure `~/.cargo/bin` is on the compositor's PATH. The supplied `kanade.service` is wanted by `niri.service`; it does not start automatically with Umbriel. Direct Umbriel autostart currently provides no automatic crash restart. If the shell exits, start `kanade` again from a terminal in the same session, after the previous process has ended. This recovery path has not been verified live here.

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

A Kanade started directly by Umbriel keeps running its old binary after the update. Restart that process to use the new build, retaining Umbriel autostart for future sessions and one shell per session. Running the installer again also builds from source and refreshes dependencies.

From a checkout, `cargo run` runs the shell and `scripts/dev` rebuilds and restarts it on saves. Stop the current shell before either.

The installer supplies the notification icon; for a manual install:

```sh
install -Dm644 dist/kanade.png ~/.local/share/icons/hicolor/256x256/apps/kanade.png
```

## See also

[Installation](/getting-started/installation/), [maintenance commands](/cli/maintenance/), and [compositor limitations](/reference/known-gaps/shell/).
