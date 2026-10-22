---
title: The Island
description: One body per monitor, its Presentations from Rest to Expanded, and what makes it move.
sidebar:
  order: 1
---

There is no status bar. Each monitor hosts one Island, at the top centre by default. At Rest it shows the clock and battery, drawing one frame a minute; an Activity takes it over, and it returns to Rest when that finishes.

```toml
[island]
edge = "top"
align = "center"
width = 520
height = 400
autohide = false
```

## Presentations

| Presentation | What it is |
| --- | --- |
| Rest | The baseline: the local time and, if set, the battery's percent. With both off, the Island hides as it does with autohide |
| Compact | The primary Activity in a compact pill: concise glyphs, progress meters, track titles |
| Split | A secondary Satellite joins, and the Island divides into two connected segments |
| Peek | The pointer resting on it shows richer detail and inline controls without expanding |
| Tray | Rest's own small form: the time's Peek, then the apps' tray items, raised by the hover delay |
| Expanded | A click or shortcut opens one full Surface for that Activity or control domain |

Secondary ongoing Activities stay visible beside the body as Satellites. Dots nested in the trailing end report the microphone, camera and screen cast — the privacy cluster.

## Moving and settling

`timings` sets how long each move takes: `hover` (120 ms), `expand` (144), `surface_change` (176), `collapse` (144), `grace` (250) and `osd` (1200). `appearance.motion` picks how the Island and Dock settle — `bouncy`, `smooth`, `snappy` or `playful` — and `animation.speed` scales every transition from 25% to 400%.

:::note
A body is never larger than `island.width` by `island.height`, made smaller on an output with no room. The canvas never resizes during a morph, so the space the Island takes does not depend on what it shows.
:::

## See also

[Surfaces](/concepts/surfaces/), [Modules](/concepts/modules/), and [shell configuration](/configuration/shell/).
