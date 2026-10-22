---
title: Capture
description: Screenshots, the screen color picker, and screen or window recording.
sidebar:
  order: 9
---

The Capture Surface has tiles for a screenshot of an area, a window or the screen, and the screen recording with Stop while it runs. The audio choice below the tiles cycles none, system and mic.

```sh
kanade capture screenshot area
kanade capture color
kanade capture record start screen system
kanade capture record stop
```

| Verb | What it does |
| --- | --- |
| `capture screenshot area\|window\|output` | Asks niri for a screenshot, saved under `~/Pictures/Screenshots`; prints its path |
| `capture color` | Picks a pixel with niri's picker, copies it as `#rrggbb`, shows it on the Island and prints it |
| `capture record start [screen\|area\|window] [none\|system\|mic]` | Records with `wf-recorder` to `~/Videos/Screencasts` |
| `capture record pause\|resume\|stop\|status` | Pause needs `ffmpeg`; `stop` joins the segments and prints the path |
| `capture cast window\|monitor\|clear` | Changes what a screen share with a dynamic cast target shows |

Recording quality and encoder come from `[recording]`: `quality` is `low`, `medium`, `high` or `max`, and `encoder` is `vaapi`, `nvenc`, `software` or `auto`, which takes the first that works.

:::caution
A recording is written from the first frame, so one you never pause is finished at that name. Paused segments go in a hidden `.parts` folder beside the file and are joined on stop; a long join can take over 5 seconds, so `stop` may say it is unknown while the file still lands.
:::

## See also

[Recording configuration](/configuration/recording/), [media and capture CLI](/cli/media-and-capture/), and [capture gaps](/reference/known-gaps/capture/).
