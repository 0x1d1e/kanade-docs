---
title: Notifications
description: Banner entrance, sound layers, per-app rules and fullscreen silence.
sidebar:
  order: 4
---

The `[notifications]` and `[banners]` tables decide how a Banner arrives, whether it plays a sound, and what a rule does to one app's notifications.

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `banners.entrance` | `morph` \| `drop` \| `fade` | `morph` | `morph` out from under the Island, `drop` from the edge, `fade` in place |
| `notifications.sound` | bool | `false` | A notification new to the list plays a sound, through `pw-play` or `canberra-gtk-play` |
| `notifications.sound_file` | path or sound name | unset | The default sound; unset plays `message-new-instant` |
| `notifications.sound_volume` | % 0-100 | `100` | The sound's own stream, never the system volume; `0` plays none |
| `notifications.sound_low` | file, sound name or `off` | unset | A Low notification whose sender names none; unset follows `sound_file` |
| `notifications.sound_normal` | file, sound name or `off` | unset | As above, for Normal |
| `notifications.sound_critical` | file, sound name or `off` | unset | As above, for Critical; still silent under Do Not Disturb |
| `notifications.fullscreen_silence` | bool | `true` | A non-Critical Banner waits while a fullscreen window covers the focused output |
| `notifications.rules` | list of tables | unset | Per-app behaviour: `banner`, `history`, `sound`, `volume`, `bypass_dnd`, `timeout`, `urgency` |

```toml
[banners]
entrance = "morph"

[notifications]
sound = true
sound_volume = 60
fullscreen_silence = true

[[notifications.rules]]
app = "Slack"
banner = false

[[notifications.rules]]
bypass_dnd = true
summary = "battery"
```

A rule matches by any of `app`, `desktop_entry`, `category` and `summary`, ignoring case; every one given must match, at least one is needed, and the first rule that matches wins. Sounds are chosen in layers: the rule's own `sound`, then the sender's hint, then the urgency's key, then `sound_file`, then `message-new-instant`.

:::note
`rules` and the per-urgency sounds are set in config files only; Settings shows the switch, the default sound and the volume. A notification's `value` hint also shows as a Live Activity while it is under 100, and at most 3 of the 8 live ones are a notification's.
:::

## See also

[The Notifications Surface](/surfaces/notifications/), [Modules](/concepts/modules/), and [Config defaults](/reference/config-defaults/).
