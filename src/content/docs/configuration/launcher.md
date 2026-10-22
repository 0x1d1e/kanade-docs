---
title: Launcher
description: Desktop actions, Kanade's own commands, and whether the Launcher opens in the Island or a window.
sidebar:
  order: 10
---

Three keys under `[launcher]` change what the search field answers and where it opens.

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `launcher.actions` | bool | `true` | An app's own actions are rows once two letters are typed |
| `launcher.commands` | bool | `true` | Kanade's own commands are rows once two letters of their name are typed; pressing one runs it |
| `launcher.style` | `island` \| `detached` | `island` | `detached` opens it in a window of its own, centred on the focused output |

```toml
[launcher]
actions = true
commands = true
style = "island"
```

A command row shows only while its Module is on, and the commands come from a closed table that takes no typed text: `caffeine`, `screenshot area`, `lock`, `dictate` and the like.

```sh
kanade launcher toggle
kanade launcher open
```

:::note
`kanade dmenu` reads lines from stdin into the Launcher and prints the one pressed; it is refused while the `launcher` Module is off, as is the Surface.
:::

## See also

[The Launcher Surface](/surfaces/launcher/), [keybinds](/getting-started/keybinds/), and [launcher gaps](/reference/known-gaps/shell/).
