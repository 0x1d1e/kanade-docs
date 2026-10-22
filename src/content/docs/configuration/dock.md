---
title: Dock
description: Pinned apps, edge and alignment, magnification, and how the Dock joins the Island.
sidebar:
  order: 3
---

The Dock is a per-monitor strip of pinned and running applications. Its `[dock]` keys place it, size it, and decide how it joins the Island where they share an edge.

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `dock.pinned` | list of `.desktop` ids | unset | The apps the Dock keeps, left to right; a later file's list replaces the one below |
| `dock.edge` | `top` \| `bottom` \| `left` \| `right` | `bottom` | Beside the Island, it sits further in than the Island |
| `dock.align` | `left` \| `center` \| `right` | `center` | Where along its edge the Dock sits |
| `dock.autohide` | bool | `false` | Hides until the pointer touches the edge; beside the Island it always shows |
| `dock.reserve` | bool | `true` | Windows keep off the Dock's strip, unless it autohides |
| `dock.magnification` | `classic` \| `subtle` \| `large` \| `off` | `classic` | How much an icon grows under the pointer, its neighbors less |
| `dock.size` | `medium` \| `small` \| `large` | `medium` | How big the icons are at rest |
| `dock.merge` | `crown` \| `keystone` \| `fold` \| `off` | `crown` | How the Dock and the Island join where they share an edge and a side |

```toml
[dock]
pinned = ["firefox", "kitty"]
edge = "bottom"
size = "medium"
merge = "crown"
```

The merge modes, along a top or bottom edge: `crown` raises the Island from the Dock's middle, `keystone` makes the Island the Dock's middle piece, `fold` unfolds the Dock out of the Island under the pointer, and `off` leaves the Dock beside the Island, further in.

A left click launches an app without windows as its `.desktop` file says, focuses its window, or the next one if it is focused already; a middle click starts a new instance even while it runs; a right click opens its menu — pin or unpin, its windows, its `.desktop` actions.

:::note
A pinned id no `.desktop` file has, as of an app uninstalled or renamed, shows as a `?` the Dock's right-click menu unpins, and `kanade status` names it. Files dropped on an icon start the app with them only when its `Exec` has a `%f`, `%F`, `%u` or `%U` argument and no `Path`.
:::

## See also

[Shell and Island](/configuration/shell/), [Surfaces](/concepts/surfaces/), and [shell gaps](/reference/known-gaps/shell/).
