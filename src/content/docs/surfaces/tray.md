---
title: Tray
description: A StatusNotifierItem host showing the apps' tray items and their menus.
sidebar:
  order: 13
---

Kanade hosts the apps' tray items and is their StatusNotifierWatcher unless another program already is. Hovering the Island at Rest shows them as the Tray Presentation; the Tray Surface lists them with their menus.

| Target | Action |
| --- | --- |
| A slot | Left activates it; an item that is only a menu shows its menu instead |
| The wheel | Scrolls it |
| Middle click | Its secondary activation |
| Right click | Its menu |

Keys: arrows and Tab move the ring, Enter or Space press, Right enters a submenu, Left or Escape goes back a level.

```sh
kanade tray toggle
```

A Tray item's menu is a Sub-surface, and each submenu another below it. With no `tray` Module there is no strip and no Surface.

:::note
The privacy dots show past a Tray strip's last slot, so a capture in use stays visible even with the tray raised.
:::

## See also

[CLI surfaces](/cli/surfaces/), [Surfaces](/concepts/surfaces/), and [Modules](/concepts/modules/).
