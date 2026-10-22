---
title: Shell and Island
description: The combined shell mode, the Island's geometry and autohide, Rest's contents, the privacy dots and the OSD.
sidebar:
  order: 2
---

The `[shell]`, `[island]`, `[rest]`, `[privacy]` and `[osd]` tables place the Island, decide what it shows at Rest, and control the OSD.

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `shell.mode` | `separate` \| `combined` | `separate` | `combined` puts the Island and Dock in one shell, with apps on either side |
| `shell.edge` | `top` \| `bottom` \| `left` \| `right` | `top` | Which edge the combined shell hangs from; stored while Separate is active |
| `shell.align` | `left` \| `center` \| `right` | `center` | Where along that edge it sits |
| `island.edge` | `top` \| `bottom` \| `left` \| `right` | `top` | The edge the Island hangs from |
| `island.align` | `left` \| `center` \| `right` | `center` | Where along its edge the Island sits |
| `island.width` | px 520-800 | `520` | How wide the Surfaces with a list grow |
| `island.height` | px 330-600 | `400` | How tall they grow |
| `island.autohide` | bool | `false` | An idle Island slides past its edge, back as the pointer touches it or anything shows |
| `island.reserve` | bool | `false` | Windows keep off the Island's strip, unless it autohides |
| `island.wheel` | bool | `true` | The wheel over the Island sets the volume while it shows Media or the volume |
| `island.device_events` | bool | `true` | A Bluetooth device, charger, sound output or Wi-Fi network shows for a moment |
| `rest.clock` | bool | `true` | An idle Island shows the time; with it and the battery off, the Island hides |
| `rest.battery` | bool | `false` | An idle Island shows the battery's percent after the time |
| `rest.peek.battery` | bool | `true` | The time's Peek shows the battery beside the time |
| `rest.peek.weather` | bool | `true` | The time's Peek shows the weather beside the date |
| `rest.peek.agenda` | bool | `true` | The time's Peek shows the next event beside the date |
| `privacy.indicators` | bool | `true` | Dots at the Island's trailing end while a microphone, camera or screen cast is in use |
| `osd.layout` | bool | `true` | A keyboard layout switch shows as an OSD, with two or more layouts |

```toml
[shell]
mode = "combined"
edge = "top"

[island]
edge = "top"
autohide = true
reserve = true

[rest]
clock = true
battery = true
```

`rest.*` keys are per output: a value under `[output."eDP-1"]` wins over the same key outside it, in any file.

:::note
`privacy.indicators` is not shown over a fullscreen window. The privacy cluster is never an Activity: capturing, the Island does not hide; under a fullscreen window it does not show.
:::

## See also

[The Island](/concepts/island/), [dock configuration](/configuration/dock/), and [Modules](/concepts/modules/).
