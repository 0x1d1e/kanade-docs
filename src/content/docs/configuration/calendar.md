---
title: Calendar
description: Local iCalendar paths, reminders, and public webcal subscriptions.
sidebar:
  order: 7
---

`[calendar]` names the local calendars, the reminder that fills in for an event with none of its own, and the public feeds fetched into read-only calendars.

| Key | Type | Default | Notes |
| --- | --- | --- | --- |
| `calendar.paths` | list of paths | `$XDG_DATA_HOME/calendars` | `.ics` files or directories of them, read recursively and followed as they change; read only |
| `calendar.reminder` | min 0-10080 | `0` | Minutes before a timed event with no reminders of its own; `0` gives none |
| `calendar.subscriptions` | list of URLs | unset | Up to 16 `https://` or `webcal://` feeds; `http://` is refused |
| `calendar.subscription_interval` | min 30-1440 | `60` | Minutes between fetches of each subscription |

```toml
[calendar]
paths = ["~/.local/share/calendars", "~/Documents/holidays.ics"]
reminder = 10
subscriptions = ["https://example.org/holidays.ics", "webcal://example.org/team.ics"]
subscription_interval = 60
```

The local calendars are read only: the calendar fetches nothing from them. A Google account syncs through `google-calendar`, and public feeds through `calendar-subscriptions`. Events you add on the Surface are kept apart in `$XDG_DATA_HOME/kanade/events`, one `.ics` each, always read, and the only ones the Surface changes or removes.

Each feed is fetched at start, every `subscription_interval` minutes, on `kanade calendar-subscriptions sync` and when the list changes, asking only for a change. A feed that fails is tried again after 5 minutes, doubling up to the interval, and keeps its last good copy.

:::caution
An address may hold a secret token, so it is in no log, no `kanade status` and no error: a feed is named by its place in the list. The address is in your config file and the Settings window as you wrote it, so keep that file private when it holds a token.
:::

## See also

[The Calendar Surface](/surfaces/calendar/), [Google Calendar](/integrations/google-calendar/), and [calendar and settings gaps](/reference/known-gaps/calendar-and-settings/).
