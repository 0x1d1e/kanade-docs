---
title: Notifications
description: The notification centre with app grouping, Do Not Disturb and per-app silence.
sidebar:
  order: 2
---

Kanade is the session's notification daemon, so this Surface is the history. Banners are separate: they emerge from the Island edge and go back into it, and this Surface keeps what they showed.

| Action | How |
| --- | --- |
| Open an app's stack | Click it, or Enter or Space on it; each opening of the Surface starts with every stack closed |
| Dismiss a stack | Its cross, or Backspace; dismisses everything under it |
| Silence one app | The control here, or the Silence row on the Dock menu; kept in `$XDG_STATE_HOME/kanade/notification-silence` |
| Do Not Disturb | `kanade notifications dnd on\|off\|toggle\|status`, the Controls tile, or a timed `on <duration>\|until <HH:MM>` |
| Clear everything | `kanade notifications clear` |

The history keeps the 20 newest of each app and 100 in all; an older one closes as expired. Banners are not stacked.

```sh
kanade notifications dnd on 90m
kanade notifications clear
```

:::note
A silenced app gets no Banner and no sound, Critical included, and the history keeps it. A matching `notifications.rules` entry still wins. Per-urgency and per-rule sounds are set in config files only; Settings shows the switch, the default sound and the volume.
:::

## See also

[Notification configuration](/configuration/notifications/), [Banners and silence](/reference/known-gaps/shell/), and [CLI surfaces](/cli/surfaces/).
