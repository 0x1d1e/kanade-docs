---
title: Screen time
description: Today's focused time per app, an optional daily notice, and private title tracking.
---

Screen time lists today's focused time per app, ordered by time. Its Module is off by default. Enable it, restart Kanade through your existing startup method, then open the Surface:

```sh
kanade module enable screen-time
# after restarting Kanade
kanade screen-time open
```

The current collector subscribes to niri's existing window and focus events. Umbriel integration for the Window and Strip Surfaces does not supply this collector's events; focused-time collection under Umbriel is not implemented by this path.

| Setting | Effect |
| --- | --- |
| `screen-time.titles = false` | Keeps window titles out of the state file and Surface |
| `screen-time.limit = 0` | No limit notice; a positive number is minutes |

A configured limit posts one Transient the first time today's total crosses it. The notice names no app and does not block use. The local day boundary resets the daily total. State keeps seven days, up to 48 apps per day, in `$XDG_STATE_HOME/kanade/screen-time`, owner-only. Turning title tracking on also stores window titles there.

Up, Down, Tab, Home and End move the ring through today's apps and scroll to it; the wheel scrolls. The Surface does not tick every second. With the Module off, it reads no focus stream and its Surface is withheld.

## See also

[Modules](/concepts/modules/), [defaults](/reference/config-defaults/), and [keybinds](/getting-started/keybinds/).
