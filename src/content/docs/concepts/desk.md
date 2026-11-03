---
title: The Desk
description: Optional clock, weather, agenda, media and notes faces drawn on the desktop under windows.
---

The Desk draws plain text on the desktop, above the wallpaper and under normal windows, once per monitor. It is separate from the Island: a Desk face is not a Surface, Activity or Satellite. It hides while the selected compositor's overview is open, under niri and Umbriel.

Each face is off by default. Enable the ones you want in Settings' Shell page or in config:

```toml
[desk]
clock = true
weather = true
agenda = true
media = true
notes = true
clock_corner = "bottom-right"
```

| Face | Shows |
| --- | --- |
| `desk.clock` | Time and date |
| `desk.weather` | The weather Service's existing temperature and condition; needs `weather` |
| `desk.agenda` | The next event's time and how far away it is; needs `calendar` |
| `desk.media` | Previous, play/pause and next for the selected player; needs `media` |
| `desk.media_titles` | Track title and artist, separately off by default |
| `desk.notes` | The five newest notes, typed into the card |

Event titles need the separate `desk.agenda_titles` switch, also off by default. Keep the private switches off to omit that content. The Desk fetches no weather of its own; the clock and agenda share a minute tick.

## Place a face

Faces without an explicit place stack in `desk.clock_corner`. Drag a face by its small faded handle at the inner edge to move it. Release saves `desk.place` per output. Escape, losing keyboard focus, opening the overview or turning the face off cancels a drag. The face stays whole on its output and clear of the Island's current area when there is room.

Only drawn controls take pointer input: buttons that can act, the notes card and face handles. Other areas pass clicks through. White text can be difficult to read on a light wallpaper; try a different position.

## Notes and media keys

Click the notes card to start a new note. Type, press Enter for another line, Backspace to erase, and Escape to leave and save. Clicking elsewhere or leaving the output also ends editing. Existing notes are not edited in place. Notes are capped at 500 characters and written to `$XDG_STATE_HOME/kanade/desk-notes`, owner-only, about once a second while typing and immediately when leaving. This card has no input method support.

With pointer focus already on the media buttons, Left or Right reveals a ring without acting. Further Left/Right skips buttons the player cannot use; Enter or Space presses the ringed one. Escape clears the ring and drops the keyboard request. Notes and handle drags take their keys first. No keybind focuses the Desk; use `kanade media` or the Media Surface for direct keyboard access.

:::note
The media ring is implemented but live acceptance on niri and Umbriel is NOT RUN. Bottom-layer focus, returning typing to the window below, notes/drag precedence and click-through still need live checks. Handle placement has an Umbriel baseline; niri and multiple outputs remain unverified.
:::

## See also

[Media](/surfaces/media/), [keyboard](/getting-started/keybinds/), [defaults](/reference/config-defaults/), and [Desk limits](/reference/known-gaps/shell/).
