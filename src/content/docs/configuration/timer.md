---
title: Timer
description: The pomodoro defaults, and where a timer's lengths come from.
sidebar:
  order: 6
---

`[timer.pomodoro]` holds the lengths a `kanade timer pomodoro` run falls back to. A phase shows on the Island with its round, and on Peek a Skip pill beside Pause and Stop.

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `timer.pomodoro.work` | min 1-180 | `25` | How long a focus lasts, unless `kanade timer pomodoro` says |
| `timer.pomodoro.break` | min 1-180 | `5` | How long the break after a focus lasts |
| `timer.pomodoro.long_break` | min 1-180 | `15` | How long the break after the last round's focus lasts |
| `timer.pomodoro.rounds` | rounds 1-12 | `4` | How many focus rounds come before a long break |

```toml
[timer.pomodoro]
work = 25
break = 5
long_break = 15
rounds = 4
```

```sh
kanade timer pomodoro              # 25m, 5m, 15m, 4 rounds
kanade timer pomodoro 50m 10m 20m 3
```

A pomodoro runs a focus, then a break, a long break after the last round's focus, then round 1 again. Lengths left off the verb come from these keys.

:::note
A phase the timer moves on to by itself shows over Media for 6 s and collapses an open Surface, so a pomodoro does not sit behind another Surface unnoticed.
:::

## See also

[The Timer Surface](/surfaces/timer/), [system-controls CLI](/cli/system-controls/), and [Config defaults](/reference/config-defaults/).
