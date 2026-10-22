---
title: Activity
description: Posting a Live Activity from a script, reading button presses back, and the Claude Code hook.
sidebar:
  order: 4
---

A Live Activity is how a script, a build or a download shows on the Island: a title, a pulse or how far along it is, and a Satellite beside a higher one.

```sh
kanade activity start build-1 "Building"
kanade activity progress build-1 40%
kanade activity detail build-1 "Compiling kanade"
kanade activity end build-1
```

| Verb | What it does |
| --- | --- |
| `activity start <id> <title>` | Shows a live Activity on every island; starting a live id again starts it afresh |
| `activity progress <id> <amount>` | A percent (`40`, `40%`) or a fraction (`0.4`); a bar shows it |
| `activity detail <id> [<text>]` | A line under the title, cut to 160 characters; none clears it |
| `activity end\|fail <id> [<text>]` | Ends it as done or failed, shown for 10 s, with the text or its last detail |
| `activity touch <id>` | Says it still runs, so it is not withdrawn after `live.stale` without a word |
| `activity list` | Each live one: id, how far along (`-` when it does not say) and title, tab-separated |
| `activity actions <id> [<key>=<label>]...` | Up to 3 buttons, replacing those it had; none clears them |
| `activity pressed <id>` | Takes the oldest press waiting, prints its key and exits 0; exits 1 with none |
| `activity wait <id> [--timeout <seconds>]` | Asks every 250 ms until there is a press, prints its key and exits 0 |
| `activity run <id> <title> [--action <key>=<label>]... -- <command>...` | Runs the command with a Live Activity for it |
| `activity hook claude` | Reads one Claude Code hook event as JSON on stdin |

An id is 1 to 64 letters, digits, `.`, `_` or `-`, and does not begin with `notification.`, which Kanade keeps for a notification's progress. At most 8 are live at once, and notifications take at most 3 of them.

```sh
key=$(kanade activity wait agent-1 --timeout 60)
kanade activity actions agent-1 allow=Allow deny=Deny
```

`activity run` ends the Activity as done on exit status 0 and failed otherwise, and exits as the command did (127 when it cannot start, 128 + the signal when one ended it). With `--action cancel=<label>`, pressing it sends SIGTERM to the command itself, not its process group.

:::caution
A button press runs nothing: Kanade queues the key for you to read with `pressed` or `wait`. Labels are cut to 24 characters and are never `Cancel`, `Now`, `Dismiss`, `Stop` or `Confirm`. The buttons show on Peek only and answer to the pointer.
:::

## See also

[Agent hooks](/integrations/agent-hooks/), [The Island](/concepts/island/), and [config defaults](/reference/config-defaults/) for `live.stale`.
