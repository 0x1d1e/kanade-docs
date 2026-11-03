---
title: Installation
description: Build Kanade with the installer or Cargo, select desktop packages, and prepare niri or Umbriel.
sidebar:
  order: 1
---

On Arch Linux and derivatives, the installer installs build dependencies, clones `main` into `~/.local/share/kanade/src`, and builds against your system libraries with `cargo install --locked --root "$HOME/.cargo" --path .`. Run it again to update. From a checkout, `scripts/install` builds that tree instead.

```sh
curl -fsSL https://raw.githubusercontent.com/0x1d1e/kanade/main/scripts/install | sh
```

Packages use `paru` if available, otherwise an existing `yay`, with `--needed --noconfirm`. If neither exists, the script tries `sudo pacman -S --needed paru` and stops if that fails. It does not build an AUR helper itself.

A standard desktop install adds niri and its portal, a Vulkan driver, audio, fonts, kitty, qt6ct and awww. It installs the user unit, icon and completions, and copies the default compositor configs only when missing. For niri, start the session with `niri-session` from a TTY. For Umbriel, use the startup path below.

## Installer options

Options go after `sh -s --`:

```sh
curl -fsSL https://raw.githubusercontent.com/0x1d1e/kanade/main/scripts/install | sh -s -- --shell-only
```

| Option | Effect |
| --- | --- |
| `--shell-only` | Omits desktop packages. A missing niri config is installed only with `--niri` or `--sddm`; those selections also include awww |
| `--niri` | Installs niri without the rest of the desktop packages; with shell-only, also installs its config when missing |
| `--no-niri` | Skips niri and writes no niri config; `--sddm` still installs niri |
| `--sddm` | Installs SDDM, Qt dependencies and niri, sets up the theme overlay, and enables SDDM for the next boot without starting it |
| `--sddm-greeter keep\|niri` | Chooses that login screen with `--sddm`; default is niri on hybrid NVIDIA, keep otherwise |
| `--optional` | Adds optional packages and enables bluetooth, upower and power-profiles-daemon; NetworkManager is left for you to enable |
| `--ref REF` | Builds that branch or tag instead of `main`; refused from a checkout |
| `--yes` | Accepted for compatibility |
| `--uninstall` | Removes the binary, completions, unit, icon, build checkout and owned SDDM files; keeps configs, packages and unit backups |

SDDM setup can disable another enabled display manager when SDDM is not already enabled. See the [canonical installation guide](https://github.com/0x1d1e/kanade/blob/main/docs/wiki/Installation.md) for the exact files and service steps.

## Umbriel

Install Umbriel separately. Use `--shell-only` for an existing desktop, or `--no-niri` to keep desktop packages while skipping niri. Even shell-only copies `dist/umbriel/config.toml` when yours is missing, under `$XDG_CONFIG_HOME/umbriel/config.toml` (default `~/.config/umbriel/config.toml`). Existing configs stay intact.

Keep Kanade started by Umbriel: the supplied config has `[general] autostart = ["kanade"]`. Add `kanade` once to an existing autostart list and put `~/.cargo/bin` on Umbriel's PATH. The unit is tied to `niri.service` and does not start with Umbriel automatically. Direct autostart currently has no automatic crash restart. Use one startup method per session.

## Manual build

From a source checkout:

```sh
cargo install --locked --root "$HOME/.cargo" --path .
```

Required: Rust, a C compiler, pkg-config, wayland, libxkbcommon, fontconfig, freetype, expat, vulkan-loader, libpulseaudio and linux-pam headers, plus a Vulkan driver matching your GPU. Run niri or Umbriel; Kanade prefers reachable Umbriel IPC, then niri.

For niri, install and enable the unit as described in [Running Kanade](/getting-started/running/). For Umbriel, retain compositor autostart as above.

:::caution
Kanade must be the session's only notification daemon and polkit agent. Stop conflicting daemons such as mako, dunst or polkit-gnome and remove their startup entries before starting Kanade. Restart Kanade after resolving an ownership conflict.
:::

## See also

[Running and updating](/getting-started/running/), [niri rules](/getting-started/niri-rules/), [SDDM](/integrations/sddm/), and [known gaps](/reference/known-gaps/).
