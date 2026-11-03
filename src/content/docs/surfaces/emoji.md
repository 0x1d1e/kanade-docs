---
title: Emoji
description: Browse Unicode groups, search names and shortcodes, and copy an emoji with recents.
---

Emoji is one scrolling grid with headings for Unicode groups and a Recent row above them. Open it directly, or type a lone `:` in the Launcher:

```sh
kanade emoji toggle
```

Typing searches names and shortcodes. Arrows and Tab move the ring and scroll the selected tile into view. Enter copies it through `wl-copy` and collapses the Island once the copy succeeds. Space types a search character. A failed copy says `Not copied` and keeps the Surface open.

Up to 24 emoji copied here are kept newest first in `$XDG_STATE_HOME/kanade/emoji-recents`, readable only by you. This list is separate from clipboard history.

Pictures need a color emoji font with CBDT or sbix images, such as Noto Color Emoji or Twemoji. COLR and SVG emoji fonts do not supply pictures to this renderer; copying still works.

The `emoji-surface` Module gates both the verb and the Launcher's `:` handoff. With it off, `:` is ordinary Launcher search text. A pasted prefix also remains search text.

## See also

[Launcher](/surfaces/launcher/), [Clipboard](/surfaces/clipboard/), and [shell gaps](/reference/known-gaps/shell/).
