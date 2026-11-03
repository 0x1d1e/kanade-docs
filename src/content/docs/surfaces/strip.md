---
title: Strip
description: A workspace minimap with columns and stacked window tiles on the focused output.
---

Strip shows the workspaces on the focused monitor as scrolling columns of stacked window tiles. It follows niri or Umbriel snapshots, so layout and focus changes update the map without polling.

```sh
kanade strip toggle
# minimap is an alias
kanade minimap open
```

Each workspace has its own strip. App icons and window tiles help locate a window outside the visible part of the desktop; the active workspace's camera frame marks its visible area. Floating windows are counted in the workspace header rather than placed in the tiling columns.

Arrows move across columns, stacked tiles and workspace rows; Tab cycles the windows. Enter, Space or a click focuses that compositor window and collapses the Island. Escape leaves without selecting one.

The `strip-surface` Module controls this Surface and its Launcher destination. Disabling it withholds the Surface. With no windows on the focused output there is no window tile to select.

## See also

[Window controls](/surfaces/window/), [Surfaces](/concepts/surfaces/), and [keybinds](/getting-started/keybinds/).
