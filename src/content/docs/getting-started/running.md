---
title: Running Kanade
description: The systemd user unit, the icon, one shell per session, and recovering a shell that crashes.
sidebar:
  order: 2
---

Kanade runs as a systemd user unit wanted by `niri.service`, so it starts with niri, stops with its graphical session, and restarts after a crash. The unit runs `~/.cargo/bin/kanade`; edit its `ExecStart` for another install.

```sh
systemctl --user status kanade.service
systemctl --user restart kanade.service
journalctl --user -u kanade.service -e
```

Its own notifications show its icon from the icon theme:

```sh
install -Dm644 dist/kanade.png ~/.local/share/icons/hicolor/256x256/apps/kanade.png
```

| Rule | Why |
| --- | --- |
| One Kanade per session | A second stops at start with `failed to listen: kanade is already running` |
| Remove `spawn-at-startup "kanade"` from niri's config | The unit already starts it; a second shell would stop |
| Customise with `systemctl --user edit` | An update refreshes the unit but leaves drop-ins alone |
| Keep the icon installed | Starting early also stops D-Bus activating another notification daemon |

A shell that crashes at every start stops restarting after 5 starts in 60 s, and a locked session stays on niri's red screen. From another TTY (`Ctrl+Alt+F3`), fix the cause, then restart the unit:

```sh
systemctl --user reset-failed kanade.service
systemctl --user restart kanade.service
```

Only if that fails, end the graphical session with `loginctl terminate-session <id>` (`loginctl list-sessions` lists them). This closes every app in it and unsaved work is lost.

`kanade update` replaces the binary with the published Arch x86_64 release after checking `kanade.sha256`, refreshes the unit, and restarts the service if it runs. It compiles nothing, installs no packages and writes no niri config.

:::note
`kanade doctor` warns about a unit that is not enabled or does not run the shell. Its checks also appear in Settings' Health page.
:::

## See also

[Installation](/getting-started/installation/), [niri rules](/getting-started/niri-rules/), and [maintenance commands](/cli/maintenance/).
