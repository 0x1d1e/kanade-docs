---
title: Installation
description: Package requirements, the install script, a manual build, and what to disable first.
sidebar:
  order: 1
---

Kanade installs on Arch Linux x86_64 from a script, or builds from source anywhere the libraries exist. The scripted binary is dynamically linked to Arch's PulseAudio, so it is not portable.

```sh
curl -fsSL https://raw.githubusercontent.com/0x1d1e/kanade/main/scripts/install | sh
```

Options go after `sh -s --`. A piped run with a terminal opens a short TUI unless `--yes` is passed.

| Option | Effect |
| --- | --- |
| `--shell-only` | No desktop packages and no niri config, for an existing niri setup |
| `--niri` | Installs the niri package without the rest of the desktop packages |
| `--no-niri` | Skips the niri package and writes no niri config |
| `--sddm` | Installs `sddm`, `qt6-declarative`, `qt6-5compat`, and the login theme overlay |
| `--sddm-greeter keep\|niri` | Chooses that login screen; `--sddm` alone picks per machine |
| `--optional` | Adds optional packages and enables bluetooth, upower and power-profiles-daemon |
| `--ref REF` | Compiles that branch or tag instead of downloading `install-0.1` |
| `--yes` | Skips the TUI |
| `--uninstall` | Removes the binary, completions, unit, icon and build tree |

## Manual build

```sh
cargo install --locked --path .
mkdir -p ~/.config/systemd/user
cp dist/kanade.service ~/.config/systemd/user/
systemctl --user daemon-reload
systemctl --user enable --now kanade.service
```

Required libraries: a C compiler, pkg-config, wayland, libxkbcommon, fontconfig, freetype, expat, vulkan-loader, libpulseaudio and linux-pam, plus a Vulkan driver matching your GPU. niri must run as a systemd graphical session.

:::caution
Kanade must be the only notification daemon in the session. Disable mako, dunst or any other one (`systemctl --user disable --now mako`) before starting Kanade, or no notification reaches the Island.
:::

## See also

[Running](/getting-started/running/) for the systemd unit and crash recovery, [niri rules](/getting-started/niri-rules/) for the layer rules Kanade needs, and [known gaps](/reference/known-gaps/shell/) for what runs worse without an optional tool.
