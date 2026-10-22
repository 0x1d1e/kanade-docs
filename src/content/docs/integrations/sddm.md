---
title: SDDM
description: The login screen theme kanade sddm writes, the overlay it needs, and the two root steps.
sidebar:
  order: 4
---

Kanade ships a login screen theme for [SDDM](https://github.com/sddm/sddm), drawn like the lock screen, and `kanade sddm` writes what SDDM reads for it. It does not replace SDDM or any greeter: SDDM stays your login manager, and Kanade only writes a theme and a picture. Nothing here needs the shell to run.

```sh
kanade sddm enable    # writes the theme and picture, then prints the root commands
# run the commands it prints as root, once
kanade sddm status    # what is written, what SDDM reads, anything still missing
```

| Command | Does |
| --- | --- |
| `kanade sddm status` | What is written, what SDDM reads, and the root commands still missing |
| `kanade sddm setup` | Run as root; stages and atomically installs the built-in executable theme |
| `kanade sddm sync` | Writes only the mutable backdrop data from the `sddm.*` keys |
| `kanade sddm enable` | `sync`, then the root commands that make SDDM read the overlay |
| `kanade sddm disable` | Removes the picture, stops following the wallpaper, prints the root commands that undo `enable` |
| `kanade sddm theme list\|info <name>\|use <name>` | The installed themes, what Kanade finds in one, or sets `sddm.theme` |

Kanade never runs `sudo` and never writes `/etc` or `/usr`; it prints the root steps for you to run. `enable` prints the setup needed, then refreshes the mutable picture data.

## The picture

`sddm.background` says what shows behind the clock: the wallpaper, an image from `sddm.background_path`, the solid color `sddm.surface`, or `none`. The picture is blurred by `sddm.blur` and darkened by `sddm.dim` as the lock screen does, sized to the largest output, and re-encoded so it holds none of the original's metadata.

:::caution
The picture is readable by the `sddm` user and by anyone who can read `/usr/local/share/kanade-sddm-data/`, so it holds a picture of your desktop. That is why `sddm.sync` is off by default. A picture you set by hand in the overlay's `theme.conf.user` is not checked by Kanade, and a Qt 5 greeter decodes it whatever its size, which can stall or crash the greeter.
:::

## When it breaks

If the login screen is already broken, from a text console (`Ctrl+Alt+F3`) log in and run:

```sh
sudo rm /etc/sddm.conf.d/zz-kanade.conf
sudo systemctl restart sddm
```

That puts SDDM back on its own theme. The file is named `zz-` so SDDM reads it after any other there; a file read later (`/etc/sddm.conf`, or a `zzz-` name) wins, and `status` and `kanade doctor` name it.

## See also

[SDDM configuration](/configuration/integrations/), [maintenance CLI](/cli/maintenance/), and [lock and idle gaps](/reference/known-gaps/lock-and-idle/).
