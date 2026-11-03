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
| `update` | Builds `main` with Cargo into `~/.cargo/bin/kanade`, refreshes the user unit, and restarts it if active |
| `doctor` | Read-only diagnostics; works without a shell, exits 1 on a failure |
| `status` | The config generation, last reload error, keys pending restart and Umbriel recovery parent's PID |
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

`doctor` checks Kanade and compositor versions, Wayland protocols, buses and sockets, the config and what each Module on runs worse without. Under Umbriel it checks the shell's recovery parent; under niri it checks the user unit and, with `wallpaper` on, whether a layer rule puts awww in the overview backdrop. Settings' Health page shows the same checks.

`module enable` prints what the restart will change, the Modules that turn off with it included. `island` cannot be turned off.

:::note
`update` needs Rust and the build libraries. It installs no packages and writes no compositor config; a failed build leaves the installed binary as it was. Under Umbriel, the running parent and child keep their loaded code. To replace both while unlocked, follow [Running Kanade](/getting-started/running/#update-from-source); stopping only the child leaves the old parent running. `sddm` never runs `sudo`; `status`, `enable`, `disable` and `theme use` print the root commands to run.
:::

## See also

[Running Kanade](/getting-started/running/), [Modules](/concepts/modules/), and [SDDM](/integrations/sddm/).
