---
title: Surfaces
description: Open, close and toggle each Surface, plus gestures and the Dock.
sidebar:
  order: 1
---

Every Surface takes the same three forms: `open` opens it on the focused output, `close` collapses it when it is open there, and `toggle` does one or the other.

```sh
kanade launcher toggle
kanade notifications open
kanade island collapse
```

| Verb | What it does |
| --- | --- |
| `launcher\|controls\|media\|notifications\|tray\|clipboard\|calendar\|weather\|wallpaper\|keys\|timer\|capture open\|close\|toggle` | Opens, collapses or toggles that Surface on the focused output |
| `island collapse` | Collapses the open island on the focused output |
| `gesture` | Opens the pointer overlay: draw one stroke, and the gesture it matches runs its verb |
| `gesture record <name>` | Draws a name three times and stores the strokes |
| `gesture forget <name>` | Removes a recorded gesture |
| `gesture list` | Prints each recorded gesture with the verb the config gives it |

`kanade dmenu` is the Launcher in choose mode; see [CLI](/cli/).

The overlay takes the pointer on the focused output: draw with the left button held, and on release the recorded gesture it matches runs the Kanade verb `gestures.<name>` maps it to. Escape, a right click, 8 seconds without a stroke or a lock closes it. A stroke that matches nothing shows "No gesture" and runs nothing.

:::note
`gestures.<name>` takes only a Kanade verb, never a shell command; to run your own command, use a [hook](/configuration/hooks/). The overlay is refused while locked, or before any gesture is recorded.
:::

## See also

[Gestures configuration](/configuration/gestures/), [keybinds](/getting-started/keybinds/), and [Surfaces](/concepts/surfaces/).
