---
title: Controls
description: Quick toggles, the Wi-Fi, Bluetooth and audio sub-surfaces, and the privacy cluster's Stop sharing.
sidebar:
  order: 3
---

Controls is the quick-toggle Surface, and the one a click at Rest opens. Its tiles are arranged by `controls.tiles`, in order, and the pencil in the header edits them.

| Tile | What it switches |
| --- | --- |
| `wifi` | The Wi-Fi radio through NetworkManager; its chevron opens the network list |
| `bluetooth` | The Bluetooth adapter through BlueZ; its chevron opens pairing |
| `caffeine` | Holds a logind idle inhibitor while on |
| `dnd` | Do Not Disturb |
| `night-light` | Warms the screen through `wlsunset` |
| `focus` | Do Not Disturb, caffeine and the night light together, as `focus.*` says |
| `charge-limit` | Asks UPower 1.90 or later to stop charging short of full |
| `power-profile` | Takes the next profile the machine has |

```toml
[controls]
tiles = ["wifi", "bluetooth", "caffeine", "dnd", "night-light", "focus"]
```

Each entry is `"name"` or `"name:size"`, in `half` (the default), `full` or `icon`; `wifi` and `bluetooth` have no `icon`. A list that needs more than three rows is refused whole, and a tile this machine cannot use is left out.

## Sub-surfaces

Wi-Fi, Bluetooth and Audio are Sub-surfaces, reached from their tiles' chevrons; Audio shows the speaker level and a Route row for an app that plays, when there are two outputs. The privacy cluster rides the Island: Stop sharing and the pencil that arranges the tiles are the first targets, above the tiles.

:::note
Stop sharing ends only a PipeWire screen cast, through niri's `stop-cast`, so it needs a niri that has it. A `wlr-screencopy` cast, like a recording's, has no button.
:::

## See also

[System configuration](/configuration/system/) for the tiles, [system-controls CLI](/cli/system-controls/), and [privacy and clipboard gaps](/reference/known-gaps/clipboard-and-privacy/).
