---
title: niri rules
description: The layer rules Kanade needs for the overview backdrop, the blur finish and hiding Banners from screencasts.
sidebar:
  order: 3
---

Kanade changes niri's config only when you ask it to (`kanade niri-config`), so these three layer rules are yours to add. The installer's default config has the first two and leaves the third commented out.

## Wallpaper in the overview

awww draws on a Background layer named `awww-daemon`. niri shows such a layer in the overview and between workspaces only with `place-within-backdrop` (niri 25.05 or later); without it the overview shows niri's background color.

```kdl
layer-rule {
    match namespace="^awww-daemon"
    place-within-backdrop true
}
```

## Blur behind panes

The `blur` finish asks niri to blur what lies behind the Island, Dock and Banners, which needs niri 26.04 or later. niri blurs a layer's request as xray — the wallpaper only — so windows behind a pane would show through sharp. This turns xray off for Kanade's layers.

```kdl
layer-rule {
    match namespace="^kanade(-dock|-banners)?$"

    background-effect {
        xray false
    }
}
```

niri marks non-xray effects experimental and recomputes them whenever what lies behind changes, so they cost more GPU than xray.

## Banners out of screencasts

A Banner shows a notification's text, and a screencast (a browser share, OBS) shows the Banner too. Use `"screencast"`, not `"screen-capture"`, which would also blank Kanade's privacy indicators. Leave the `kanade` namespace alone: the Island draws the privacy dots, which must stay visible.

```kdl
layer-rule {
    match namespace="^kanade-banners$"

    block-out-from "screencast"
}
```

It is off by default, because a viewer then never sees a Banner you wanted to show.

:::note
`kanade doctor` warns while the `wallpaper` Module is on and no rule places `awww-daemon` in the backdrop, and while the finish is `blur` and no rule sets `xray false`. It never warns about the Banner rule. A pattern it cannot read as plain text counts as matching, so it never warns wrongly.
:::

## See also

[Installation](/getting-started/installation/), [appearance configuration](/configuration/appearance/), and the [niri config CLI](/cli/config/).
