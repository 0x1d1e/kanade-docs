---
title: Modules
description: What a Module is, how one is turned off, and which feature each one owns.
sidebar:
  order: 3
---

A Module is the switch that owns one feature. Turning one off starts no thread or helper process, posts nothing, and answers its verbs with `module <name> is off`. Every Module is on unless set to `false` under `[modules]`; `idle`, `dictation` and `screen-time` are off unless set to `true`.

```toml
[modules]
idle = true
dictation = false
```

A Module whose requirement is off turns off too, and stderr names why. Turning one on or off takes a restart, so `kanade status` reports it as pending.

| Group | Modules |
| --- | --- |
| The shell itself | `island` (always on), `workspace`, `windows`, `dock`, `privacy`, `battery`, `media`, `timer`, `live`, `launcher-entry` |
| Hardware and feedback | `audio`, `brightness`, `osd`, `network`, `bluetooth`, `power`, `caffeine`, `night-light`, `focus` |
| Notifications and tray | `notifications`, `banners`, `notification-surface`, `tray` |
| Clipboard | `clipboard`, `clipboard-surface` |
| Capture and wallpapers | `capture`, `capture-surface`, `wallpaper`, `wallpaper-surface` |
| Calendar and weather | `calendar`, `calendar-surface`, `calendar-reminders`, `calendar-subscriptions`, `google-calendar`, `weather`, `weather-surface` |
| Session and login | `lock`, `session`, `idle`, `sddm`, `polkit` |
| Surfaces by hand | `controls`, `launcher`, `keys-surface`, `timer-surface`, `window-surface`, `strip-surface`, `emoji-surface`, `files-surface`, `screen-time` |
| Desktop faces | `desk` (each face is separately off by default; see [Desk](/concepts/desk/)) |
| Automation and settings | `hooks`, `ui`, `settings`, `gesture`, `dictation` |

`island` cannot be turned off. `lock` shows the Session Surface's Lock control only while it is on, and `session` is what `battery.critical_action` asks to suspend, hibernate or power off.

Under Umbriel, an existing lock inherited from the surviving recovery parent is the exception to staying cold. Even with `lock` disabled, the replacement runs the connection and scenes needed to finish that lock; lock verbs and sleep handling stay off. After confirmed unlock or definite refusal/end and the parent's clear acknowledgement, the child restarts with the Module fully cold. See [recovery and its acceptance limits](/getting-started/running/#start-with-umbriel).

:::caution
Turning `privacy` off is warned about at every start: the privacy cluster is how you see the microphone, camera or screen cast in use.
:::

## See also

[Surfaces](/concepts/surfaces/), [CLI maintenance](/cli/maintenance/), and the [config defaults](/reference/config-defaults/).
