---
title: Google Calendar
description: Signing in with your own OAuth client, and what Kanade syncs.
sidebar:
  order: 2
---

The `google-calendar` Module shows a Google account's calendars on the Calendar Surface beside the local ones. Kanade signs in with your own OAuth client, so you make one once.

1. In [Google Cloud](https://console.cloud.google.com/), create a project and enable the Google Calendar API in it.
2. Under Google Auth Platform, set up the consent screen as External and add yourself as a test user.
3. Create an OAuth client of type Desktop app and download its JSON file.
4. Run the sign-in with that file and allow read access in the browser that opens.

```sh
kanade google-calendar sign-in ~/Downloads/client_secret_....json
kanade google-calendar sync
kanade google-calendar status
kanade google-calendar sign-out
```

| Verb | What it does |
| --- | --- |
| `sign-in <client.json>` | Signs in through the browser with a Desktop app OAuth client's JSON file |
| `sign-out` | Revokes access, and deletes the credentials and the synced events |
| `sync` | Syncs now |
| `status` | Says how the account stands |

The client and the refresh token go to the Secret Service, never to the config or a log, so the downloaded file can be deleted afterwards. Kanade syncs at start, every 15 minutes and on `kanade google-calendar sync`, into `~/.cache/kanade/google-calendar/`, readable only by you.

:::caution
While the consent screen is in Testing, Google ends the sign-in after 7 days and the Surface asks you to sign in again; publishing it to production avoids that. A problem, like access revoked or no network, shows under the agenda and in `kanade google-calendar status`; the events synced before stay, and the local calendars are not affected.
:::

The Module requires `calendar`, and it is idle until signed in.

## See also

[The Calendar Surface](/surfaces/calendar/), [calendar configuration](/configuration/calendar/), and the [CLI reference](/reference/cli/).
