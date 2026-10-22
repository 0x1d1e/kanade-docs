---
title: CLI
description: How kanade <verb> reaches the running shell, what the exit codes mean, and how dmenu works.
sidebar:
  order: 0
---

`kanade` with no verb runs the shell. `kanade <verb> [args]` asks the running one over its socket, so a niri keybind, a script and a hook all reach the same code path.

```sh
kanade launcher toggle
kanade volume-up
kanade session lock
```

| Exit | Meaning |
| --- | --- |
| `0` | Done |
| `1` | Refused, no shell running, or a failed write to stdout (not a pipe its reader closed, as `head` does) |
| `2` | Not a verb, or not its arguments |
| `3` | Not known whether it was done: the shell, or niri for a screenshot, got the call but did not answer in time |

Exit 3 is not worth repeating blindly: the call may still be done. A verb of a Module turned off in the config answers `module <name> is off`. With no shell running, a verb says so.

`kanade help` lists every verb with a line on what it does; `kanade help <verb>` or `kanade <verb> --help` gives the forms it takes. `kanade --version` prints the version, and output is bold on a terminal unless `NO_COLOR` is set.

## dmenu

`kanade dmenu [--prompt <text>]` opens the Launcher with only the lines read from stdin, searched as it searches apps.

```sh
printf 'one\ntwo\nthree\n' | kanade dmenu --prompt "Pick one"
```

It prints the line pressed, exactly as read, and exits 0; Escape, a collapse or another Surface exits 1 with nothing printed. Empty lines are skipped, and it takes at most 5000 lines of up to 1000 characters. It holds the keyboard until answered: unlike other verbs, it never collapses on its own after 5 s or when the pointer leaves.

:::note
One `dmenu` at a time: a second replaces the first, which exits 1, while a Launcher you are typing in refuses it. It is part of the `launcher` Module, so it is refused with that off.
:::

## Pages

[Surfaces](/cli/surfaces/), [media and capture](/cli/media-and-capture/), [system controls](/cli/system-controls/), [activity](/cli/activity/), [config](/cli/config/), [session and UI](/cli/session-and-ui/), [maintenance](/cli/maintenance/). The [CLI reference](/reference/cli/) has every verb verbatim.
