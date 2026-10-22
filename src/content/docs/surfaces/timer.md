---
title: Timer
description: Countdowns and pomodoro rounds, with pause, skip and cancel on Peek.
sidebar:
  order: 8
---

The Timer Surface starts a countdown or a pomodoro; a running timer shows its time left with Pause or Resume, Skip and Cancel. The phase and the round appear on the Island, and on Peek a Skip pill sits beside Pause and Stop.

```sh
kanade timer start 25m
kanade timer pomodoro 50m 10m 20m 3
kanade timer pause
kanade timer skip
```

| Verb | What it does |
| --- | --- |
| `timer start <duration>` | Starts the timer, like `90s`, `25m` or `1h30m`, up to 24h |
| `timer pomodoro [<focus> <break> <long-break> <rounds>]` | Focus, break, a long break after the last round, then round 1 again |
| `timer pause\|resume\|skip\|cancel` | Pauses, resumes or cancels; `skip` moves a pomodoro to its next phase at once, paused if it was |

Lengths left off `pomodoro` come from `timer.pomodoro.*`:

```toml
[timer.pomodoro]
work = 25
break = 5
long_break = 15
rounds = 4
```

A phase the timer moves on to by itself shows over Media for 6 s and collapses an open Surface.

:::note
A running timer is one of the things the Session countdown's warning lists before a restart, power off or log out. It is a warning only: nothing stops the action.
:::

## See also

[Timer configuration](/configuration/timer/), [Session](/surfaces/session/), and [system-controls CLI](/cli/system-controls/).
