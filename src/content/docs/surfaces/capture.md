---
title: Capture
description: Screenshots, the screen color picker, and screen or window recording.
sidebar:
  order: 9
---

Capture offers screenshots and recording, with Pause/Resume and Stop while a recording runs. Recording audio cycles none, system, mic and mix; microphone choices are forgotten on restart.

Under Umbriel, area screenshots need `slurp` and `grim`, output screenshots need `grim`, and copying needs `wl-copy`. A copy failure keeps the saved PNG. Window screenshots, color picking and niri's cast controls are unavailable. Screen and window recording require niri IPC; area recording under Umbriel is unverified.

```sh
kanade capture screenshot area
kanade capture color
kanade capture record start screen system
kanade capture record stop
```

| Verb | What it does |
| --- | --- |
| `capture screenshot area\|window\|output` | Saves under `~/Pictures/Screenshots` and prints the path; niri captures all three, Umbriel supports area and output |
| `capture color` | Picks a pixel with niri's picker, copies it as `#rrggbb`, shows it on the Island and prints it |
| `capture record start [screen\|area\|window] [none\|system\|mic\|mix]` | Records to `~/Videos/Screencasts`; window recording uses GStreamer and ffmpeg |
| `capture record pause\|resume\|stop\|status` | Pause needs `ffmpeg`; `stop` joins the segments and prints the path |
| `capture cast window\|monitor\|clear` | Changes what a screen share with a dynamic cast target shows |

With `capture.annotate = true`, a screenshot saved by Kanade opens an editor: drag rectangles or arrows, Undo or Ctrl+Z removes the last shape, Save writes `<stem>-annotated.png`, and Escape closes without writing. Annotation is off by default; it has no text, crop or layer tools.

Recording quality and encoder come from `[recording]`: `quality` is `low`, `medium`, `high` or `max`, and `encoder` is `vaapi`, `nvenc`, `software` or `auto`, which takes the first that works.

:::caution
A recording is written from the first frame, so one you never pause is finished at that name. Paused segments go in a hidden `.parts` folder beside the file and are joined on stop; a long join can take over 5 seconds, so `stop` may say it is unknown while the file still lands.
:::

## See also

[Recording configuration](/configuration/recording/), [media and capture CLI](/cli/media-and-capture/), and [capture gaps](/reference/known-gaps/capture/).
