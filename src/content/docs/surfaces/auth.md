---
title: Auth
description: Answer polkit authentication requests on the Island while the session is unlocked.
---

Auth opens when polkit requests authentication for an action another program asks to perform. It is not opened by a Launcher destination, keybind or `open` verb. The `polkit` Module makes Kanade the session's authentication agent.

The Surface shows polkit's message, the user whose password is requested, a masked field, Cancel and Authenticate. It holds the keyboard while shown so keys do not reach the window beneath.

| Key | Effect |
| --- | --- |
| Typing | Enters the password |
| Backspace | Erases a character |
| Enter | Submits to polkit's own helper |
| Escape | Cancels the request |

Kanade holds no privilege and registers no polkit action. The password is not logged, persisted or sent through Kanade's CLI socket. A failed attempt clears the field; three failed tries end the request. A session lock or 30 minutes without typing also ends it.

Only one authentication agent can own the session. Stop another agent such as polkit-gnome and remove its startup entry, then restart Kanade if registration was refused. A locked session, a missing polkit helper or an identity outside this session's user produces no prompt and answers as not authorized.

## See also

[Installation](/getting-started/installation/), [keyboard](/getting-started/keybinds/), and [authentication limits](/reference/known-gaps/lock-and-idle/).
