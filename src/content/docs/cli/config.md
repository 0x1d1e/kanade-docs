---
title: Config and niri
description: Read, write, validate and export Kanade's config, and edit single settings in niri's.
sidebar:
  order: 5
---

Kanade's own config, then niri's, edited through the same engine Settings' niri page uses.

| Verb | What it does |
| --- | --- |
| `config reload` | Reads the config again now |
| `config validate [<file>]` | Says what a reload would find, without applying it; with a file, checks that file alone and exits 1 if anything |
| `config defaults` | Prints every key with its default and help; works without a shell |
| `config schema` | Prints a JSON Schema of every key, for an editor; works without a shell |
| `config get <key>` | Prints `key = value` as in effect, then `# from` the file that set it or `default` |
| `config set <key> <value>` | Writes the key to the settings file as the Settings window does; never touches your own files |
| `config reset <key>` | Removes the key from the settings file, so your files and the defaults give it again |
| `niri-config validate` | Runs `niri validate` on niri's config (`$NIRI_CONFIG`, else `$XDG_CONFIG_HOME/niri/config.kdl`) |
| `niri-config get <path>` | Prints the value niri will use at a dotted path like `layout.gaps`, with `# from <file>` when an include sets it |
| `niri-config set <path> <value>` | Changes one setting, keeping comments, `/-`, blank lines and line endings |
| `niri-config remove <path>` | Removes that node's own line, by the same checks |
| `niri-config undo` | Puts back the bytes before Kanade's last change, only while the file is as that change left it |
| `niri-config backups` | Lists the backups, newest first, then `orig`, the first bytes Kanade saw |
| `niri-config restore <n>\|orig` | Puts a backup back; the result must validate |

```sh
kanade config get island.edge
kanade config set island.edge bottom
kanade config validate

kanade niri-config get layout.gaps
kanade niri-config set layout.gaps 16
kanade niri-config undo
```

A key that takes text takes it as typed; any other takes a TOML value like `300`, `true` or `[1, 2]`. An unknown key or a value out of range is refused with the reason, exit 1, and nothing is written.

`niri-config set` changes only that node's bytes. `niri validate` must accept the file first and the result before it replaces the file, and the old bytes are kept as a backup.

:::caution
`niri-config` refuses a symlinked or hard-linked config, `/etc/niri/config.kdl`, a node any included file sets, a node under `/-`, and repeated or block nodes (`window-rule`, `spawn-at-startup`). Backups are kept in `$XDG_STATE_HOME/kanade/niri-config/`, a ring per config, the newest 20, readable by you only.
:::

## See also

[Configuration](/configuration/), [config defaults](/reference/config-defaults/), and [niri rules](/getting-started/niri-rules/).
