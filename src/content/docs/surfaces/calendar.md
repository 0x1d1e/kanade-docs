---
title: Calendar
description: A month and a day's agenda over local iCalendar files, Google accounts and webcal feeds.
sidebar:
  order: 6
---

The Calendar Surface shows a month and the agenda of a day. Left/Right moves a day, Up/Down a week, `n`/`p` a month, Home or `t` goes to today; Tab or Enter enters the agenda.

| Source | Where it comes from |
| --- | --- |
| Local calendars | `calendar.paths`: `.ics` files or directories of them, read recursively and followed as they change; read only |
| Events you added | Kept apart in `$XDG_DATA_HOME/kanade/events`, one `.ics` each; the only ones the Surface changes or removes |
| Google account | The `google-calendar` Module, synced every 15 minutes; see [Google Calendar](/integrations/google-calendar/) |
| Public feeds | `calendar.subscriptions`, read-only, fetched into `$XDG_CACHE_HOME/kanade/calendar-subscriptions` |

```toml
[calendar]
paths = ["~/.local/share/calendars", "~/Documents/holidays.ics"]
reminder = 0
subscriptions = ["https://example.org/holidays.ics"]
subscription_interval = 60
```

`reminder` gives every timed event with no reminders of its own a reminder that many minutes before it starts; `0`, the default, gives none. Feeds are `https://` or `webcal://`, up to 16, fetched every 30 to 1440 minutes.

To add an event: `a`, then type `14:30 Title`, `9:00-10:30 Title` or just a title for all day, with a date first for another day. `e` edits one you added; holding `d` for 0.7 s removes it.

:::caution
An event changed elsewhere since it showed is not written over: the field says `Changed elsewhere` and keeps its text. A removal has no undo, and there is no way to type a repeat, a place, a reminder or a time zone.
:::

## See also

[Calendar configuration](/configuration/calendar/), [Calendar and settings gaps](/reference/known-gaps/calendar-and-settings/), and [agent hooks](/integrations/agent-hooks/) for reminders as Activities.
