---
title: Window
description: Column widths, window actions and workspace moves for the focused niri or Umbriel window.
---

Window puts the focused window's column controls and workspaces on the Island. Open it from the Launcher destination or a compositor keybind:

```sh
kanade window toggle
```

| Target | Effect |
| --- | --- |
| Consume right | Joins a neighboring window into the column |
| Expel bottom (niri) | Expels the column's bottom tile, not necessarily the focused window; disabled with one tile |
| Join / split (Umbriel) | Uses Umbriel's consume-or-expel action, available even with one tile |
| Maximize, Float | Toggles the compositor's corresponding state |
| ⅓, ½, ⅔ | Sets a proportional column width |
| Preset | Cycles the compositor's configured widths |
| Workspace pill | Moves the window to that workspace on its output |

Arrows and Tab move the ring; Enter or Space presses the selected control. Escape collapses the Island. The header keeps the remembered focused window available while the Island has the keyboard. State follows compositor events without polling.

With no focused window available, the Surface says so. The `window-surface` Module gates the Surface; turn it off and its verb and Launcher destination cannot open it.

## See also

[Strip](/surfaces/strip/), [keyboard](/getting-started/keybinds/), and [compositor limits](/reference/known-gaps/shell/).
