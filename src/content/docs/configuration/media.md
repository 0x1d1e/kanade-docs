---
title: Media
description: The visualizer and the synced-lyrics source for the Media Surface.
sidebar:
  order: 5
---

Two keys under `[media]` change what the Media Surface draws beside a playing track.

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `media.visualizer` | `bars` \| `wave` \| `dots` \| `audio` \| `off` | `bars` | `audio` follows what the default sink plays, read through `cava`; `off` draws nothing |
| `media.lyrics` | `off` \| `local` \| `lrclib` | `off` | `local` reads a `.lrc` beside a local track; `lrclib` also asks LRCLIB |

```toml
[media]
visualizer = "audio"
lyrics = "lrclib"
```

`bars`, `wave` and `dots` connect to real audio frequencies through `cava` when it is available, falling back to synthetic motion when cava is absent or initializing. Cava reads the sink's monitor, never a microphone, so the privacy indicator does not light; Kanade gives it its own config, so `~/.config/cava/config` never applies.

`lrclib` sends the playing track's title, artist, album and length to [LRCLIB](https://lrclib.net) over https with a `Kanade/<version>` User-Agent and nothing else, only while a track plays and the Media Surface is open. Answers are cached under hashed names in `$XDG_CACHE_HOME/kanade/lyrics`, at most 200, and a miss is believed for 2 hours.

:::note
Synced lyrics show on the Media Surface only, not on the Island's Peek. A streaming player gives no file, so only `lrclib` can serve it, and only when it reports an album and a length.
:::

## See also

[The Media Surface](/surfaces/media/), [CLI media and capture](/cli/media-and-capture/), and [Media and UI](/reference/known-gaps/shell/).
