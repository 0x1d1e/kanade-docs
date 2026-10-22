---
title: System controls
description: Wi-Fi, Bluetooth, power profile, brightness, battery limit, night light, Focus and caffeine.
sidebar:
  order: 3
---

The radios, the levels and the switches that hold the machine awake.

| Verb | What it does |
| --- | --- |
| `wifi on\|off\|toggle\|status` | Switches the Wi-Fi radio through NetworkManager; returns once NetworkManager has it as asked |
| `bluetooth on\|off\|toggle\|status` | Switches the Bluetooth adapter through BlueZ, as `wifi` does |
| `power-profile set <profile>\|cycle\|status` | `power-saver`, `balanced` or `performance`, where the machine has it; `cycle` takes the next |
| `brightness set <percent>\|up\|down\|status` | Sets the brightness 1-100, or 5 points up or down, of the backlight or the monitor under the focused output |
| `battery limit on\|off\|status` | Asks UPower 1.90 or later to stop charging short of full, or to charge it full again |
| `night-light on\|off\|toggle\|status` | Warms the screen through `wlsunset`; `on` and `off` are kept across restarts in `settings.toml` |
| `focus on\|off\|toggle\|status` | One switch for Do Not Disturb, caffeine and, if `focus.night_light` is set, the night light |
| `caffeine on\|off\|toggle [<duration>]\|status` | Keeps the session from going idle, until turned off or for a duration up to 24h |
| `osd volume\|brightness` | Shows the OSD for the level as it is |

```sh
kanade wifi toggle
kanade brightness up
kanade caffeine on 90m
kanade focus status
```

`caffeine on` returns once the inhibitor is held. `focus off` turns off only what `on` turned on and you have not changed since, so a piece that was on before stays. `night-light on` turns it back on as the config says: a schedule when one is set, else all day.

:::note
`brightness` acts on the backlight, or over DDC/CI on the monitor under the focused output, as `brightness.backend` says. `battery limit` needs a battery whose driver supports charge thresholds; elsewhere it says it is unavailable. `status` on `night-light` says the mode and why `wlsunset` is not running, if it should be.
:::

## See also

[System configuration](/configuration/system/), [The Controls Surface](/surfaces/controls/), and the [CLI reference](/reference/cli/).
