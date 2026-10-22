---
title: Gestures
description: Recorded pointer strokes, and the Kanade verb each one runs.
sidebar:
  order: 11
---

`[gestures]` maps a recorded stroke to a Kanade verb. The mapping is config-file only, and the verb must act on the shell or the session's state.

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `gestures.<name>` | Kanade verb | unset | Gesture name = the verb it runs, like `"island collapse"`; file only |

```toml
[gestures]
check = "island collapse"
circle = "launcher open"
```

```sh
kanade gesture record check   # draw the stroke three times
kanade gesture list           # each recorded gesture with the verb it runs
kanade gesture forget check
```

A name is 1 to 32 letters, digits, `-` or `_`, and the strokes are stored in `$XDG_STATE_HOME/kanade/gestures.toml`.

:::caution
A gesture runs a Kanade verb, never a program. For your own command, use a [hook](/configuration/hooks/) or a verb that runs one. Verbs that wait on you (`dmenu`, `capture color`), run a program (`activity run`, `activity hook`), or end the session are refused when the config is read.
:::

Recognition uses one stroke: its start and direction matter, so a circle drawn clockwise is not one drawn counterclockwise. A stroke under 60 px long matches nothing, and a gesture of several strokes is not supported.

## See also

[Keybinds](/getting-started/keybinds/), [CLI](/cli/), and [gesture gaps](/reference/known-gaps/shell/).
