---
title: Maintenance
description: Completions, updates, diagnostics, status, the SDDM theme, idle state and Module switches.
sidebar:
  order: 7
---

The verbs that keep the install healthy and tell you what it is doing.

| Verb | What it does |
| --- | --- |
| `completions bash\|fish\|zsh` | Prints shell completions, derived from the commands `kanade help` lists; works without a shell |
| `update` | Replaces `~/.cargo/bin/kanade` with the published Arch x86_64 binary after checking `kanade.sha256` |
| `doctor` | Read-only diagnostics; works without a shell, exits 1 on a failure |
| `status` | The config generation, the last reload error and the keys pending restart |
| `module list` | Each Module: whether it runs, why not, and what a restart would change |
| `module enable\|disable <name>` | Turns a Module on or off in the settings file, applied at the next restart |
| `idle status` | The `idle` Module's stages, how long the user has been idle, and what holds them |
| `sddm status\|sync\|enable\|disable\|theme list\|theme info <name>\|theme use <name>` | The login screen's look; works without a shell |

```sh
kanade completions fish > ~/.config/fish/completions/kanade.fish
kanade doctor
kanade status
kanade module enable idle
```

`doctor` checks Kanade and niri versions, Wayland protocols, buses and sockets, the config, what each Module on runs worse without, and, with `wallpaper` on, whether a niri layer rule puts awww in the overview backdrop. Settings' Health page shows the same checks.

`module enable` prints what the restart will change, the Modules that turn off with it included. `island` cannot be turned off.

:::note
`update` compiles nothing and installs no packages: a missing file, a short file, a checksum mismatch or any other download failure stops and leaves the installed binary as it was. Another architecture is refused. `sddm` never runs `sudo`; `status`, `enable`, `disable` and `theme use` print the root commands to run.
:::

## See also

[Running Kanade](/getting-started/running/), [Modules](/concepts/modules/), and [SDDM](/integrations/sddm/).
