---
title: Appearance
description: Tone, finish, scale, motion and the wallpaper palette that themes the shell and apps.
sidebar:
  order: 1
---

Appearance decides what the Island, Dock and Banners are made of, how large everything Kanade draws is, and how it settles.

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `appearance.tone` | `dark` \| `light` | `dark` | Selects light or dark for Settings and apps; the shell follows the finish |
| `appearance.finish` | `tinted-solid` \| `paper` \| `blur` | `tinted-solid` | `blur` is the tinted solid translucent over what the compositor blurs; needs niri 26.04 |
| `appearance.sync` | bool | `false` | Writes wallpaper colors for GTK, qt5ct/qt6ct, KDE apps, niri, kitty and Pywalfox |
| `appearance.accessibility` | bool | `true` | Follows the desktop's reduced motion and higher contrast preferences |
| `appearance.motion` | `bouncy` \| `smooth` \| `snappy` \| `playful` | `bouncy` | How the Island and Dock settle |
| `appearance.font` | family | unset | Installed family for shell labels; unset uses Inter, then sans-serif |
| `appearance.scale` | % 80-200 | `100` | On top of each output's own scale; a window already open keeps its size |
| `animation.speed` | % 25-400 | `100` | Higher is faster; interaction delays and countdowns do not change |
| `reduced_motion` | bool | `false` | The fade is 80 ms at 100% speed; `KANADE_REDUCED_MOTION=1` or `0` overrides it |

```toml
[appearance]
tone = "dark"
finish = "blur"
sync = true
scale = 125

[animation]
speed = 100
```

At startup Kanade reads the wallpaper awww shows; Matugen derives its light and dark palettes from it and renders the targets configured in `~/.config/matugen/config.toml`. Matugen is optional: without it, or on failure, Kanade uses built-in colors.

:::note
`appearance.sync` restarts the GTK portals when GTK settings or colors changed, at most every 30 s; an open file dialog closes, and restarting the GNOME backend drops a running screen share. Running GTK, Qt and KDE apps keep their colors until restarted. Precedence for motion, highest first: `KANADE_REDUCED_MOTION`, `reduced_motion = true`, the portal, off.
:::

## See also

[Wallpapers](/surfaces/wallpapers/), [niri rules](/getting-started/niri-rules/) for the blur finish, and [Config defaults](/reference/config-defaults/).
