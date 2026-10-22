---
title: System
description: Settings' first-start notice, the semantic UI tree, window matching, brightness, battery and the Controls tiles.
sidebar:
  order: 14
---

These keys tune the parts of Kanade that talk to the machine rather than to you: the Settings window's health notice, the tree `kanade ui` reads, how a window is matched to its `.desktop` file, brightness, battery, and the Controls tiles.

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `settings.health_notice` | bool | `true` | Tells once, at the first start with checks needing attention, to open Settings' Health page |
| `ui.describe` | `structure` \| `content` \| `off` | `structure` | What `kanade ui describe` says of the windows; `off` refuses `kanade ui` |
| `windows.apps` | app id = `.desktop` file | unset | Where Kanade's guess of a window's `.desktop` file is wrong |
| `brightness.backend` | `backlight` \| `ddcci` \| `auto` | `auto` | `ddcci` needs the `i2c-dev` module and access to `/dev/i2c-*`; takes a restart |
| `battery.low` | % 5-50 | `20` | At or below, a draining battery shows on the island |
| `battery.critical` | % 2-30 | `10` | At or below, the battery interrupts and `critical_action` counts down |
| `battery.critical_action` | `none` \| `suspend` \| `hibernate` \| `poweroff` | `none` | What happens after a 60 s countdown that Cancel or a charger stops |

```toml
[windows.apps]
jetbrains-idea = "intellij-idea-ultimate-edition"

[brightness]
backend = "auto"

[battery]
low = 20
critical = 10
critical_action = "suspend"
```

`ui.describe` `structure` shows roles, names, states and places with every label and value `<redacted>`; `content` adds what notifications, the clipboard, the calendar and lyrics show, never a password, for debugging on this machine.

## Controls tiles

`controls.tiles` lists the switches the Controls Surface shows, in order, each `"name"` or `"name:size"`: `wifi`, `bluetooth`, `caffeine`, `dnd`, `night-light`, `focus`, `charge-limit` or `power-profile`, in `half` (the default), `full` or `icon` (not for `wifi` and `bluetooth`). A tile this machine cannot use is left out, and a list that needs more than three rows is refused whole.

```toml
[controls]
tiles = ["wifi", "bluetooth", "caffeine", "dnd", "night-light", "focus"]
```

:::note
`brightness.backend = "ddcci"` talks to the monitor's I2C bus, so it needs the `i2c-dev` kernel module and write access to the node. A monitor's level is read once and kept, so a change made on its own buttons is not seen, and a laptop's own panel is never written.
:::

## See also

[The Controls Surface](/surfaces/controls/), [integrations](/configuration/integrations/), and [system-controls CLI](/cli/system-controls/).
