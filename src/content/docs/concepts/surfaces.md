---
title: Surfaces
description: The thirteen things the Island expands into, how they open, and how a Sub-surface works.
sidebar:
  order: 2
---

Expanding the Island opens one Surface: the full interactive content of that Activity or control domain. At most one island is Expanded at a time, and which Surface opens is a pure function of what is shown, where the pointer is, and what you asked for — never a remembered last-used one.

| Surface | Opens from | Covered on |
| --- | --- | --- |
| Media | The Media Activity, or the verb | [Media](/surfaces/media/) |
| Notifications | The notification list | [Notifications](/surfaces/notifications/) |
| Controls | A click at Rest, or the verb | [Controls](/surfaces/controls/) |
| Launcher | The verb or a keybind | [Launcher](/surfaces/launcher/) |
| Tray | The tray items at Rest | [Tray](/surfaces/tray/) |
| Clipboard | The clipboard history | [Clipboard](/surfaces/clipboard/) |
| Calendar | A Reminder, or the verb | [Calendar](/surfaces/calendar/) |
| Weather | The verb | [Weather](/surfaces/weather/) |
| Wallpapers | The verb | [Wallpapers](/surfaces/wallpapers/) |
| Keys | The verb | [Keys](/surfaces/keys/) |
| Session | A countdown, or the verb | [Session](/surfaces/session/) |
| Timer | The verb | [Timer](/surfaces/timer/) |
| Capture | The verb | [Capture](/surfaces/capture/) |

Media, Notifications and Session are also Activity Kinds: Compact and Peek are the Activity's own small form, and Expanded is its Surface. The other ten have no Activity of their own and open only by user action.

## Sub-surfaces

A Sub-surface is a level inside a Surface, entered from one of its targets and left by a back control or Escape. Controls has five — Wi-Fi, Bluetooth, Audio, a network's password entry, and the arrangement of its tiles — and a Tray item's menu is one. A Sub-surface lasts one opening of its Surface, which always opens at its top level.

:::note
Every target in a Surface and its Sub-surfaces is a key away. A Surface opened by pointer has a hidden ring, shown by the first key that would act or move; any other key does nothing.
:::

## See also

[The Island](/concepts/island/), [Modules](/concepts/modules/), and [CLI surfaces](/cli/surfaces/).
