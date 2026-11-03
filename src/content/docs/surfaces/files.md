---
title: Files
description: Search and open the desktop's recent documents in a read-only shelf.
---

Files is a shelf of the desktop's recent documents. Open the Launcher destination or use:

```sh
kanade files toggle
```

Kanade reads `$XDG_DATA_HOME/recently-used.xbel` (default `~/.local/share/recently-used.xbel`) when the Surface opens. It lists up to 64 existing files this user can open, newest first by each file's modification time, showing its name and folder. Kanade's own config, data and state directories are excluded. File contents are never read.

| Input | Effect |
| --- | --- |
| Typing | Searches names and folders |
| Arrows, Tab, Home, End | Moves the ring and scrolls to it |
| Enter | Opens the selected file through `xdg-open` |
| Right | Opens its folder through `xdg-open` |
| Ctrl+R or Refresh | Reads the desktop's list again |
| Wheel | Scrolls the shelf |

The shelf offers no deletion, rename, move, copy, drag-out or folder browsing. Opening depends on `xdg-open` and the session's default apps. A missing, unreadable or oversized list (over 2 MiB), or one naming no existing files, produces an empty shelf. Apps that register no recent documents contribute no entries.

The `files-surface` Module gates the Surface; with it off, no list is read. Paths and file names are never logged.

## See also

[Launcher](/surfaces/launcher/), [keyboard](/getting-started/keybinds/), and [Files decision](https://github.com/0x1d1e/kanade/blob/main/docs/adr/0141-files-is-a-shelf-not-a-manager.md).
