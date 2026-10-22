---
title: Media and capture
description: Player transport, screenshots, the colour picker, recording and cast targets.
sidebar:
  order: 2
---

Media transport and everything that produces a picture.

| Verb | What it does |
| --- | --- |
| `media play-pause\|next\|previous` | Asks the player the island follows, the one playing or else the one shown last |
| `capture screenshot area\|window\|output` | Asks niri for a screenshot, saved under `~/Pictures/Screenshots`; prints its path |
| `capture color` | Picks a pixel with niri's picker, copies it as `#rrggbb`, shows it on the Island and prints it |
| `capture record start [screen\|area\|window] [none\|system\|mic]` | Records with `wf-recorder` to `~/Videos/Screencasts` |
| `capture record pause\|resume\|stop\|status` | Pause ends a segment and resume starts the next; `stop` joins them and prints the path |
| `capture cast window\|monitor\|clear` | Changes what a screen share with a dynamic cast target shows |
| `wallpaper set <path>\|shuffle [--output <name>\|all]\|status` | Sets the wallpaper through awww |
| `osd volume\|brightness` | Shows the OSD for the level as it is, for a keybind that changes it outside Kanade |

```sh
kanade capture screenshot area
kanade capture record start area system
kanade capture record stop
```

`media play-pause` is refused when no player is open or it says it cannot. `capture color` waits for you and exits 1 with "no color picked" if you leave the picker. `capture record start` prints the file's path once the first frame is written; with an area to draw, it prints nothing until you have drawn it.

`capture cast` maps to niri's `set-dynamic-cast-window`, `set-dynamic-cast-monitor` and `clear-dynamic-cast-target`: a window by niri id, else the focused one; an output by name, else the focused one.

:::caution
`capture cast` is refused while no running cast has a dynamic target, and by a niri without those actions. A recording you never pause is finished at that name; one you resume after a pause is the whole only after `stop`. Locking the session while recording stops and saves it, and a start or resume is refused while locked.
:::

## See also

[Capture](/surfaces/capture/), [recording configuration](/configuration/recording/), and [capture gaps](/reference/known-gaps/capture/).
