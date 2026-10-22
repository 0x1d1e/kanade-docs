---
title: Session
description: Lock, log out, suspend, restart and power off, with a countdown and what would be lost.
sidebar:
  order: 12
---

The Session Surface is where the session ends. `kanade session menu` opens it; it has no `toggle`, and Escape closes it. Lock shows only while the `lock` Module is on.

```sh
kanade session menu
kanade session logout
kanade session suspend
```

| Verb | What it does |
| --- | --- |
| `session menu` | Opens the Surface: lock, sleep, restart, power off and log out |
| `session suspend` | Asks logind to suspend at once |
| `session reboot\|poweroff\|logout` | Counts down 60 s on every island, with Cancel and a button to do it now; a newer one replaces the countdown |

The countdown lists, up to three lines, what would be lost: a running recording or timer, live Activities, and for a restart or power off the programs holding a blocking `shutdown` inhibitor with logind. It only warns and prevents nothing.

:::caution
Kanade does not let polkit ask for a password, so a request that needs one is refused — for a countdown, once it runs out. A refusal shows later on the island with its reason, and stays until dismissed.
:::

A request logind never answers may still happen: the island says so until dismissed, a countdown running is refused, and nothing more is asked until Kanade restarts.

## See also

[Session and UI CLI](/cli/session-and-ui/), [lock and idle](/configuration/integrations/), and [lock and idle gaps](/reference/known-gaps/lock-and-idle/).
