---
title: Wallpapers
description: A grid of the wallpaper folder, with per-monitor picks and awww transitions.
sidebar:
  order: 10
---

The Wallpapers Surface is the wallpaper folder as a grid of pictures: typing searches file names, arrows and Tab move the ring over the pictures and Shuffle, and Enter sets the one the ring is on. It stays open so you can try another.

```sh
kanade wallpaper set ~/Pictures/wallpaper.jpg
kanade wallpaper shuffle --output eDP-1
kanade wallpaper status
```

| Key | Meaning |
| --- | --- |
| `wallpaper.directory` | The folder shown and shuffled from, not its subfolders; else `~/Pictures/Wallpapers` |
| `wallpaper.per_monitor` | On: a pick applies to that monitor alone. Off: every pick sets all monitors |
| `wallpaper.transition` | `simple`, `fade`, `wipe`, `grow`, `outer`, or `random` for awww to choose each time |
| `wallpaper.transition_duration` | How long a transition other than `simple` takes, ms 1-60000 |

When the folder is missing or empty and Kanade has not filled it before, the `wallpaper` Module downloads the pictures listed in the Favorites page of [ItsTerm1n4l/Wallpapers](https://github.com/ItsTerm1n4l/Wallpapers) into it.

:::note
Kanade manages wallpaper selection and palette extraction through awww and Matugen; it does not draw desktop wallpapers itself. `kanade wallpaper set <path>` sets all monitors unless `--output NAME` says one, whatever `per_monitor` is.
:::

## See also

[Appearance configuration](/configuration/appearance/), [niri rules](/getting-started/niri-rules/) for the overview backdrop, and [the Island](/concepts/island/).
