---
title: Media
description: Track metadata, artwork, seeking and synced lyrics for the player the Island follows.
sidebar:
  order: 1
---

The Media Surface is what the Media Activity expands into: track metadata, album artwork, and a timeline you can seek on. The Island follows the player that is playing, or else the one shown last.

| Part | What it does |
| --- | --- |
| Player chips | One per player; arrows and Tab ring them, Enter or Space switches |
| Timeline | Seekable only here, never in the Island's forms, and only for a player that reports `CanSeek` with a track id and a length; a seek never leaves the track |
| Transport | Play/pause, next and previous, through `kanade media play-pause\|next\|previous` |
| Speaker | Left/Right on it sets the volume, 5% a step as Controls' own bar does |
| Visualizer | `media.visualizer`: `bars`, `wave` and `dots` connect to real frequencies through `cava`, falling back to synthetic motion when cava is absent |
| Lyrics | `media.lyrics`: `off` by default; `local` reads a `.lrc` beside a local track, `lrclib` also asks LRCLIB |

```toml
[media]
visualizer = "bars"
lyrics = "off"
```

`lrclib` sends the playing track's title, artist, album and length to [LRCLIB](https://lrclib.net) over https, with a `Kanade/<version>` User-Agent and nothing else, only while a track plays and this Surface is open. Answers are cached under hashed names in `$XDG_CACHE_HOME/kanade/lyrics`.

:::note
The wheel over an Island showing Media sets the speaker's level, 5% a line, unless `island.wheel` is off. A typed character collapses an island opened from a keybind so it goes to the window beneath.
:::

## See also

[Media configuration](/configuration/media/), [media CLI](/cli/media-and-capture/), and [Controls](/surfaces/controls/).
