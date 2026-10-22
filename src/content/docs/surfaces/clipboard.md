---
title: Clipboard
description: Searchable history for text and images, with pins that survive restarts.
sidebar:
  order: 5
---

The clipboard history keeps copied text and images in memory, through `wl-paste` and `wl-copy`. Pins are the exception: they persist across restarts, as plaintext in `$XDG_STATE_HOME/kanade/clipboard-pins`.

| Target | Enter |
| --- | --- |
| An entry | Puts it back on the clipboard |
| Its pin | Pins or unpins it; a pinned entry stays first |
| Its delete | Removes that entry |
| Clear all | Empties the history but the pins, held 0.7 s while it fills; an early release does nothing |

The ring walks the entries, their pins and deletes, then Clear all. A picture shows as a thumbnail.

```sh
kanade clipboard clear   # keeps the pins, says how many: "kept 3 pinned"
```

The history's bounds are 50 entries and 64 MiB, and a pinned entry is skipped when they drop the oldest — pins count in those bounds and are held to 20 and 16 MiB. A copy its app marks sensitive with `x-kde-passwordManagerHint`, as `wl-copy --sensitive` does, is never read.

:::caution
Pins sit on disk unencrypted until you unpin or remove them, a password included; Kanade does not filter a pin. Everything else in the history lives only in memory, so restarting Kanade forgets it. There are no snippets, placeholders or sync.
:::

## See also

[Clipboard and privacy gaps](/reference/known-gaps/clipboard-and-privacy/), [Launcher](/surfaces/launcher/) (which searches it after `>`), and the [CLI reference](/reference/cli/).
