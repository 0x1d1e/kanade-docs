---
title: Configuration
description: Where Kanade reads config from, how the layers merge, and how to read, write or validate a key.
sidebar:
  order: 0
---

Kanade reads its config at start and again whenever one of its files changes, in layers, each over the ones before it: the defaults, then every `*.toml` in the config directory in alphabetical order, then the settings file only the Settings window and `kanade module` write.

| Layer | Path | Written by |
| --- | --- | --- |
| Defaults | — | `kanade config defaults` prints them |
| Your files | `$XDG_CONFIG_HOME/kanade/`, else `~/.config/kanade/` | You |
| Settings | `$XDG_STATE_HOME/kanade/settings.toml`, else `~/.local/state/kanade/settings.toml` | The Settings window and `kanade module` |

```toml
# ~/.config/kanade/config.toml
[appearance]
tone = "dark"
finish = "tinted-solid"

[island]
edge = "top"
```

Tables merge key by key, so a later file only changes the keys it sets; any other value, a list too, replaces the one below. Hidden files are skipped, and Kanade never writes your files. The settings file holds just what it changed from the layers below: a value set back to theirs removes the key.

## Reading and writing a key

```sh
kanade config get island.edge        # the value in effect, and the file that set it
kanade config set island.edge bottom # writes the settings file, as Settings would
kanade config reset island.edge      # removes it, so your files and the defaults give it again
kanade config validate               # what a reload would find, without applying it
kanade config schema > kanade.json   # a JSON Schema of every key, for an editor
```

`config get` prints `key = value` then `# from` the file that set it, or `default`. `config set` refuses an unknown key or an out-of-range value with the reason and exit 1, and writes nothing.

## Reloading

A change while running applies without a restart, except `modules`, which stays as it started and is reported pending restart. A change with any problem applies nothing: the config in effect stays whole, and stderr and `kanade status` report why. A file that is not valid TOML is skipped whole.

:::note
`theme.palette` is retained so older files still load, but it is ignored and no longer changes the shell theme. `schema_version` names the layout a file is written in; when a release changes the layout, Kanade migrates older files in memory as it reads them and leaves them on disk as they are.
:::

## See also

[Config defaults](/reference/config-defaults/) for every key verbatim, [CLI config](/cli/config/), and the per-area pages in this section.
