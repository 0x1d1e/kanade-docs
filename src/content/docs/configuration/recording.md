---
title: Recording
description: Quality, encoder and the DRM render node a screen recording uses.
sidebar:
  order: 9
---

`[recording]` decides how a screen recording is encoded. All three keys are read when a recording starts.

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `recording.quality` | `low` \| `medium` \| `high` \| `max` | `high` | One fixed quantizer per encoder, so a still screen costs nothing and a busy one what it needs |
| `recording.encoder` | `vaapi` \| `nvenc` \| `software` \| `auto` | `auto` | What encodes H.264; `auto` takes the first that works, in that order |
| `recording.device` | DRM node path | unset | The node VA-API encodes on, like `/dev/dri/renderD128` |

```toml
[recording]
quality = "high"
encoder = "auto"
device = "/dev/dri/renderD128"
```

NVENC is not tried while VA-API works, so an NVIDIA GPU that sleeps stays asleep. One that does not work gives way to software, which `kanade doctor` and the log say. An unset `device` finds an Intel or AMD node, the GPU that drives the display first, and never an NVIDIA one.

```sh
kanade capture record start screen system
kanade capture record stop
kanade doctor
```

:::note
Each step of `quality` changes the size of a busy picture by about a quarter. A recording needs `wf-recorder`, plus an encoder that works; the window pipeline additionally needs `gst-launch-1.0` with the PipeWire plugin and that of the chosen encoder.
:::

## See also

[The Capture Surface](/surfaces/capture/), [capture gaps](/reference/known-gaps/capture/), and [media and capture CLI](/cli/media-and-capture/).
