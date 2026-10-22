---
title: Launcher
description: Fuzzy app search, calculator, units, emoji, clipboard, windows and Kanade's own commands.
sidebar:
  order: 4
---

The Launcher is one search field over every provider: apps, an app's own Desktop Actions, open windows, the calculator, emoji, destinations and Kanade's own commands. Typing a character returns to the ranked search; with nothing typed it lists sections instead.

| Query | Answers |
| --- | --- |
| A name | Apps; among alike matches the ones you start most come first |
| `private` | A browser's New Private Window, from two letters, while `launcher.actions` is on |
| `2+2*3` | A sum. `20% of 50`, `0xff`, `255 to hex`, `10 cm to in`, `60 mph to km/h` |
| `:smile` | Emoji, from a color emoji font that holds them as pictures |
| `>invoice` | What you copied, pinned entries first, with the `clipboard` Module on |
| `wifi`, `dock settings` | A destination: a Surface, Settings, or a setting |
| `caffeine`, `screenshot area` | One of Kanade's own commands, while its Module is on and `launcher.commands` is set |

```toml
[launcher]
actions = true
commands = true
style = "island"
```

`style = "detached"` opens it in a window of its own, centred on the focused output. Ctrl+K opens the selected answer's actions: press it, its app's Desktop Actions, copy the path or id, pin it to the Dock. Ctrl+1 through Ctrl+9 press the nth answer.

A query nothing answers offers `Search Google for <query>` and `Open <query>` in the browser, through `xdg-open`; without `xdg-open` neither row shows.

:::caution
A Launcher command takes no typed text and waits for its answer, up to 6 seconds. A refusal shows as `Not run: <why>`; an unclear or late answer shows `Not confirmed, may have run: <why>`, so check before pressing again.
:::

## See also

[Launcher configuration](/configuration/launcher/), [surfaces CLI](/cli/surfaces/), and [keys](/surfaces/keys/).
