---
title: Hooks
description: Commands Kanade runs on a closed set of events, as an argv list with no shell.
sidebar:
  order: 12
---

A hook is a command you list in config, as an argv list with no shell, that Kanade runs on one of a closed set of events. Hooks are set in files only: `kanade config set` and Settings do not touch them.

| Key | Event |
| --- | --- |
| `hooks.lock` | niri holds the lock |
| `hooks.unlock` | The lock ends |
| `hooks.wallpaper` | A wallpaper is set or shown; its path is in `KANADE_WALLPAPER` |
| `hooks.tone` | `appearance.tone` changes; `dark` or `light` in `KANADE_TONE` |
| `hooks.charger` | The charger goes in or out; `plugged` or `unplugged` in `KANADE_CHARGER` |
| `hooks.suspend` | The machine goes to sleep; sleep waits for the command, up to logind's delay |
| `hooks.resume` | The machine wakes, or a sleep failed |
| `hooks.started` | The shell has started, once every Module that is on has |
| `hooks.dnd` | Do Not Disturb goes on or off; `on` or `off` in `KANADE_DND` |
| `hooks.power_profile` | The power profile changes; its name in `KANADE_POWER_PROFILE` |
| `hooks.logout`, `hooks.reboot`, `hooks.poweroff` | Before logind is asked, after the countdown or at once |
| `hooks.timeout` | A command still running after this is killed; s 1-300, default `10` |

```toml
[hooks]
lock = ["notify-send", "Kanade", "hook"]
charger = ["notify-send", "Kanade", "hook"]
timeout = 10
```

The command gets `KANADE_HOOK` (the event) and the variable its event carries, no stdin, and runs as your user. Use `["sh", "-c", "..."]` for a shell; `exec` the last command there so nothing is left behind.

:::note
One run of an event at a time; a fire meanwhile is dropped. A failure shows in `kanade status` and once on stderr, never on the island. A Module that is off, `hooks` included, fires nothing.
:::

## See also

[Agent hooks](/integrations/agent-hooks/) for a coding session as a Live Activity, and [CLI maintenance](/cli/maintenance/) for `kanade status`.
