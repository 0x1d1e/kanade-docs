---
title: Integrations
description: Dictation, night light, Focus, the lock screen, the idle stages and the SDDM login theme.
sidebar:
  order: 13
---

The keys on this page wire Kanade to other programs: a dictation provider, `wlsunset`, the lock screen, the idle stages, and the login screen.

## Dictation

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `dictate.insert` | `copy` \| `paste` \| `type` | `copy` | Where the text goes; `paste` and `type` fall back to the clipboard when the window changed |
| `dictate.never_in` | list of app ids | unset | Windows that only ever get the clipboard, like a password manager |

```toml
[dictate]
insert = "copy"
never_in = ["org.keepassxc.KeepassXC"]
```

See [Dictation](/integrations/dictation/) for the key, the consent and what is sent to Google.

## Night light and Focus

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `night-light.mode` | `off` \| `on` \| `schedule` | `off` | `on` all day, or on a `schedule` from sunset to sunrise |
| `night-light.temperature` | K 1000-6500 | `4000` | Lower is warmer; 6500 is neutral |
| `night-light.sunset` | `HH:MM` | unset | When the schedule warms the screen |
| `night-light.sunrise` | `HH:MM` | unset | When it turns the screen neutral again |
| `focus.dnd` | bool | `true` | Focus turns Do Not Disturb on, and off again if it was off before |
| `focus.caffeine` | bool | `true` | Focus keeps the session awake |
| `focus.night_light` | bool | `false` | Focus warms the screen |
| `focus.auto` | list of triggers | unset | `"cast"` is a screen cast running (needs `privacy`); empty is never |

```toml
[night-light]
mode = "schedule"
temperature = 4000
sunset = "20:00"
sunrise = "07:00"

[focus]
dnd = true
caffeine = true
auto = ["cast"]
```

With `mode = "schedule"` and both times set, those are the schedule; otherwise the sun at `weather.location` is. `off` turns off each piece Focus turned on, but only while it is still as Focus left it.

## Lock and idle

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `lock.backdrop` | `blurred` \| `wallpaper` \| `dimmed` \| `solid` | `blurred` | What the lock screen shows behind the clock |
| `lock.pam_service` | PAM service name | unset | A file of that name in `/etc/pam.d`; unset uses `login` |
| `lock.grace` | s 0-30 | `0` | After an idle lock, any input unlocks without a password |
| `idle.dim` | s 0-86400 | `270` | Seconds idle before the screens fade toward dark |
| `idle.lock` | s 0-86400 | `300` | Seconds idle before the session locks |
| `idle.screen_off` | s 0-86400 | `330` | Seconds idle before niri powers the monitors off |
| `idle.suspend` | s 0-86400 | `0` | Seconds idle before the machine suspends |

```toml
[lock]
backdrop = "blurred"
grace = 0

[idle]
dim = 270
lock = 300
screen_off = 330
suspend = 0
```

Every `idle` stage is 0 for never, and no stage runs before the lock holds.

## SDDM

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `sddm.theme` | theme directory name | unset | Unset is Kanade's own, `kanade` |
| `sddm.background` | `wallpaper` \| `path` \| `none` | `wallpaper` | What the login screen shows behind the clock |
| `sddm.background_path` | image path | unset | The image for `background = "path"` |
| `sddm.surface` | `#rrggbb` | unset | The color where there is no picture; unset is the theme's own |
| `sddm.blur` | px 0-128 | `32` | How far the picture is blurred; 32 is the lock screen's |
| `sddm.dim` | % 0-100 | `33` | How dark the picture is made |
| `sddm.sync` | bool | `false` | Writes the picture again whenever the wallpaper changes |

See [SDDM](/integrations/sddm/) for the overlay and the root steps.

:::note
`lock.grace` above 0 lets anyone at the keyboard in for that many seconds after an idle lock. It never applies to `kanade lock`, a lock before sleep, or a lock asked again after a failure.
:::

## See also

[System settings](/configuration/system/), [system-controls CLI](/cli/system-controls/), and [lock and idle gaps](/reference/known-gaps/lock-and-idle/).
