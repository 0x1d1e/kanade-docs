---
title: Auth
description: Answer polkit requests under niri; Umbriel needs an external authentication agent.
---

Auth is currently niri-only. Its placement needs niri's focused output; that state is not populated when Umbriel is selected. Under niri, Auth opens when polkit requests authentication for an action another program asks to perform. It has no Launcher destination, keybind or `open` verb. The `polkit` Module registers Kanade as the session's authentication agent.

Under Umbriel, keep an external agent such as polkit-gnome and disable Kanade's agent with `kanade module disable polkit`, then restart Kanade through your existing Umbriel startup method. Before starting Kanade, set this in its `config.toml` instead:

```toml
[modules]
polkit = false
```

The Surface shows polkit's message, the user whose password is requested, a masked field, Cancel and Authenticate. It holds the keyboard while shown so keys do not reach the window beneath.

| Key | Effect |
| --- | --- |
| Typing | Enters the password |
| Backspace | Erases a character |
| Enter | Submits to polkit's own helper |
| Escape | Cancels the request |

Kanade holds no privilege and registers no polkit action. The password is not logged, persisted or sent through Kanade's CLI socket. A failed attempt clears the field; three failed tries end the request. A session lock or 30 minutes without typing also ends it.

Under niri, only one authentication agent can own the session. To use Kanade's agent, stop a competing agent such as polkit-gnome and remove its startup entry. Kanade retries refused registration with a growing wait from 250 ms to at most 30 s between attempts, so wait for it to register; restarting Kanade is not required. A locked session, a missing polkit helper or an identity outside this session's user produces no prompt and answers as not authorized.

## See also

[Installation](/getting-started/installation/), [keyboard](/getting-started/keybinds/), and [authentication limits](/reference/known-gaps/lock-and-idle/).
