---
title: Session and UI
description: Locking, the session menu and countdowns, and driving the shell's controls from a script.
sidebar:
  order: 6
---

Ending the session, and the semantic tree that lets a script press the shell's own controls.

| Verb | What it does |
| --- | --- |
| `lock` | Locks the session: every monitor shows the date, the time, who is signed in and a password field over its wallpaper |
| `session menu` | Opens the Session Surface: lock, sleep, restart, power off and log out |
| `session suspend` | Asks logind to suspend at once |
| `session reboot\|poweroff\|logout` | Counts down 60 s on every island first, with Cancel and a button to do it now |
| `ui describe [--window <name>]` | Prints the windows as a JSON tree of named nodes |
| `ui press\|focus <name>` | Clicks the node, or focuses a text input, by name through the shell's own input path |
| `ui type <name> <text>` | Focuses the text input and types the text as keys to its window |
| `ui key <name> <key>` | Sends one key, after any of `ctrl+`, `alt+`, `shift+`, `super+` |
| `ui scroll <name> <lines>` | Wheel lines over the node, positive down |
| `ui wait <name> [--timeout <seconds>]` | Returns 0 once the node is in the tree, 1 after 5 s (up to 600 s with `--timeout`) |

```sh
kanade lock
kanade ui describe --window kanade-dock
kanade ui press wifi
kanade ui wait launcher/result#1 --timeout 30
```

`lock` exits 0 once niri holds the lock for that call, 1 when niri refuses it, and 3 if not within 5 s or when a password typed on it is accepted or being checked.

`ui describe` prints `id`, `parent`, `role`, `bounds`, `label`, `value`, `focused`, `pressed`, `disabled`, `selected`, `checked` and `secret`, as of each window's last frame. Ids are stable paths like `dock/app` or `launcher/result#2`. `ui press` never moves your pointer or focus: it goes through the shell's own input path.

:::caution
`ui press` and `ui focus` are refused when the name fits none or several, when the node is disabled or covered, and while the session is locked. With the default `ui.describe = "structure"`, text a user or the world wrote is `<redacted>`, and a password is never given.
:::

`session reboot`, `poweroff` and `logout` only warn about what would be lost; nothing stops the action, and Kanade does not let polkit ask for a password, so a request that needs one is refused.

## See also

[The Session Surface](/surfaces/session/), [system configuration](/configuration/system/) for `ui.describe`, and [lock and idle gaps](/reference/known-gaps/lock-and-idle/).
