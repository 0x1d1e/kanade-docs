---
title: Surfaces
description: What the Island expands into, how Surfaces open, and how a Sub-surface works.
sidebar:
  order: 2
---

Expanding the Island opens one Surface: the full interactive content of an Activity or control domain. At most one island is Expanded at a time. Which Surface opens depends on what is shown, where the pointer is and what you asked for; no last-used Surface is remembered.

| Surface | Opens from | Guide |
| --- | --- | --- |
| Media | The Media Activity or verb | [Media](/surfaces/media/) |
| Notifications | The notification list or verb | [Notifications](/surfaces/notifications/) |
| Controls | A click at Rest or verb | [Controls](/surfaces/controls/) |
| Launcher | A verb or keybind | [Launcher](/surfaces/launcher/) |
| Tray | Tray items at Rest or verb | [Tray](/surfaces/tray/) |
| Clipboard | A verb or the Launcher's `>` | [Clipboard](/surfaces/clipboard/) |
| Calendar | A Reminder or verb | [Calendar](/surfaces/calendar/) |
| Weather | A verb or Launcher destination | [Weather](/surfaces/weather/) |
| Wallpapers | A verb or the Launcher's `@` | [Wallpapers](/surfaces/wallpapers/) |
| Keys | A verb or Launcher destination | [Keys](/surfaces/keys/) |
| Session | A countdown or `session menu` | [Session](/surfaces/session/) |
| Timer | A verb or Launcher destination | [Timer](/surfaces/timer/) |
| Capture | A verb or Launcher destination | [Capture](/surfaces/capture/) |
| Window | A verb or Launcher destination | [Window](/surfaces/window/) |
| Strip | A verb or Launcher destination | [Strip](/surfaces/strip/) |
| Emoji | A verb or the Launcher's `:` | [Emoji](/surfaces/emoji/) |
| Screen time | A verb or Launcher destination, once enabled | [Screen time](/surfaces/screen-time/) |
| Files | A verb or Launcher destination | [Files](/surfaces/files/) |
| Auth | A request from polkit, never a user-open verb | [Auth](/surfaces/auth/) |

Media, Notifications and Session are also Activity Kinds. Compact and Peek are the Activity's own small forms; Expanded is its Surface. Screen time's Activity is its limit notice, not the Surface. Most other Surfaces open only by user action; Auth opens only for polkit and holds the keyboard until answered, cancelled or locked.

Each Surface belongs to a Module. If that Module is off, the Surface is withheld: a click, verb, Launcher prefix or AutoExpand cannot open it. Screen time is off by default.

## Sub-surfaces

A Sub-surface is a level inside a Surface, entered from a target and left by a back control or Escape. Controls has Wi-Fi, Bluetooth, Audio, a network's password entry and tile arrangement; a Tray item's menu and its nested menus are also Sub-surfaces. Each opening starts at the Surface's top level.

Every target in a Surface and its Sub-surfaces is a key away. On a Surface opened by pointer, the first key that would act or move reveals the hidden ring without acting. Text-search Surfaces accept typing. Escape goes back a level before collapsing the Island. The [Desk](/concepts/desk/) is separate and has its own pointer-based keyboard focus rules.

## See also

[The Island](/concepts/island/), [Modules](/concepts/modules/), [keyboard](/getting-started/keybinds/), and [CLI surfaces](/cli/surfaces/).
