---
title: Keybinds
description: Compositor keybind setup, Surface navigation, and the Desk's media, notes and handle keys.
sidebar:
  order: 4
---

User-opened Surfaces have verbs you can bind in niri or Umbriel. Auth opens only for polkit. Kanade grabs no global key. The KDL examples below are for niri's `binds` block in `~/.config/niri/config.kdl`; for Umbriel bind the same commands in its `config.toml`, as in the [supplied config](https://github.com/0x1d1e/kanade/blob/main/dist/umbriel/config.toml).

```kdl
Mod+Alt+Space hotkey-overlay-title="Island: Launcher" { spawn "kanade" "launcher" "toggle"; }
Mod+Alt+N hotkey-overlay-title="Island: Notifications" { spawn "kanade" "notifications" "toggle"; }
Mod+Alt+M hotkey-overlay-title="Island: Media" { spawn "kanade" "media" "toggle"; }
Mod+Alt+C hotkey-overlay-title="Island: Controls" { spawn "kanade" "controls" "toggle"; }
Mod+Alt+T hotkey-overlay-title="Island: Tray" { spawn "kanade" "tray" "toggle"; }
Mod+Alt+V hotkey-overlay-title="Island: Clipboard" { spawn "kanade" "clipboard" "toggle"; }
Mod+Alt+D hotkey-overlay-title="Island: Calendar" { spawn "kanade" "calendar" "toggle"; }
Mod+Alt+W hotkey-overlay-title="Island: Weather" { spawn "kanade" "weather" "toggle"; }
Mod+Alt+B hotkey-overlay-title="Island: Wallpapers" { spawn "kanade" "wallpaper" "toggle"; }
Mod+Alt+Slash hotkey-overlay-title="Island: Keys" { spawn "kanade" "keys" "toggle"; }
Mod+Alt+P hotkey-overlay-title="Island: Session" { spawn "kanade" "session" "menu"; }
Mod+Alt+Escape hotkey-overlay-title="Island: Collapse" { spawn "kanade" "island" "collapse"; }
```

Capture, caffeine and locking work the same way:

```kdl
Print hotkey-overlay-title="Screenshot: Area" { spawn "kanade" "capture" "screenshot" "area"; }
Shift+Print hotkey-overlay-title="Recording: Start" { spawn "kanade" "capture" "record" "start"; }
Shift+Ctrl+Print hotkey-overlay-title="Recording: Stop" { spawn "kanade" "capture" "record" "stop"; }
Mod+Alt+K hotkey-overlay-title="Caffeine" { spawn "kanade" "caffeine" "toggle"; }
Mod+Alt+L hotkey-overlay-title="Lock" { spawn "kanade" "lock"; }
Mod+G hotkey-overlay-title="Gesture" { spawn "kanade" "gesture"; }
```

## Keys inside a Surface

| Where | Keys |
| --- | --- |
| Any Surface | Escape backs out of a Sub-surface, then collapses; Auth cancels. A pinned island gives the keyboard back, so use the `collapse` bind |
| Text fields | Arrows/Home/End move, Shift selects, Ctrl+arrows jump a word, Ctrl+A selects all, Ctrl+V pastes one line (up to 64 KiB); copy and cut are unsupported |
| Dock menu | Up/Down move, Enter or Space press, Delete or Backspace closes the window, Escape closes the menu |
| Media | Arrows/Tab ring the chips, timeline, transport and speaker; Left/Right seek 5 s and set the volume |
| Notifications | Arrows/Tab ring, Enter or Space press, Backspace dismisses the card or the whole stack |
| Launcher | Typing searches; Up/Down/Home/End move, Enter acts, Ctrl+K opens the selected answer's actions, Ctrl+1–9 press the nth |
| Clipboard | Typing searches, the ring walks entries and their pin/delete, then Clear all; clearing is a 0.7 s hold |
| Calendar | Left/Right a day, Up/Down a week, `n`/`p` a month, Home or `t` today, `a` adds, `e` edits, holding `d` removes |
| Timer, Capture | Arrows/Tab ring the tiles, Enter/Space press; recording audio cycles none, system, mic, mix |
| Window | Arrows/Tab ring column controls, widths and workspace pills; Enter/Space press |
| Strip | Arrows/Tab ring columns and stacked window tiles; Enter/Space focuses the window and collapses |
| Emoji | Typing searches, arrows/Tab ring tiles; Enter copies and closes on success, Space types |
| Screen time | Up/Down/Tab/Home/End ring today's apps and scroll to them; Module off by default |
| Files | Typing searches names and folders; arrows/Tab/Home/End select, Enter opens, Right opens the folder, Ctrl+R refreshes |
| Wallpapers | Typing searches, arrows/Tab/Home/End ring pictures and Shuffle; Enter sets one and stays open |
| Keys | Typing searches; Up/Down/Tab/Home/End move through results |
| Auth | Typing enters the password, Backspace erases, Enter submits, Escape cancels; keys stay in the prompt |
| Session | Arrows/Tab ring, Enter or Space press; a countdown keeps it open with the ring on Cancel |
| Settings | Tab/Shift+Tab ring, Enter or Space press, arrows step a value, Escape leaves a field |
| Tray | Arrows/Tab ring, Enter or Space press, Right enters a submenu, Left or Escape goes back |
| Controls | Up/Down/Tab ring, Left/Right move or adjust, Enter or Space press |

An island opened from a keybind takes the keyboard and collapses after 5 s if nothing on it is used and the pointer never comes onto it; one opened with a click gets keys after the click. A typed character collapses Media, Controls, Weather and Session so it goes to the window beneath.

:::note
Idle locking is off by default (`idle` is a Module you turn on). With it off, point an idle daemon at `kanade lock`; Kanade locks before sleep on its own, so no `before_sleep_cmd` is needed.
:::

## Desk keys

The [Desk](/concepts/desk/) has no focus keybind. With pointer focus on its media buttons, Left/Right first reveals a ring without acting. Later Left/Right skips disabled buttons; Enter/Space presses. Escape clears the ring and drops the keyboard request so typing can return below. Live media-ring acceptance on niri and Umbriel is NOT RUN.

Click the notes card to type a new note; Enter starts another line, Backspace erases, Escape leaves and saves. A face moves only by dragging its handle: Escape or losing the keyboard cancels, release saves its place. Notes and handle drags take keys before the media ring.

## See also

[Running Kanade](/getting-started/running/), [CLI surfaces](/cli/surfaces/), and the [canonical keyboard guide](https://github.com/0x1d1e/kanade/blob/main/docs/wiki/Keyboard.md) for the full key table.
