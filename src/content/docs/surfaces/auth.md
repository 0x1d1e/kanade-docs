---
title: Auth
description: Answer polkit requests on the focused output under niri and Umbriel.
---

Auth opens on the selected compositor's focused output when polkit requests authentication for an action another program asks to perform, under niri and Umbriel. It has no Launcher destination, keybind or `open` verb. The `polkit` Module registers Kanade as the session's authentication agent.

A never-shown request waits without taking input while focus is missing or overview is active, then retries when the Island changes. Subprocess regressions cover placement, retries and cancellation with synthetic requests and helper sockets. Live Umbriel registration, prompt visibility, keyboard delivery and authentication remain **NOT RUN**.

If you previously disabled the Module under Umbriel, run `kanade module enable polkit` and restart through Umbriel. To retain an external agent instead, keep Kanade's `polkit` Module off.

The Surface shows polkit's message, the user whose password is requested, a masked field, Cancel and Authenticate. It holds the keyboard while shown so keys do not reach the window beneath.

| Key | Effect |
| --- | --- |
| Typing | Enters the password |
| Backspace | Erases a character |
| Enter | Submits to polkit's own helper |
| Escape | Cancels the request |

Kanade holds no privilege and registers no polkit action. The password is not logged, persisted or sent through Kanade's CLI socket. A failed attempt clears the field; three failed tries end the request. Cancel or Escape shuts down the active helper and clears the password. Pending or held session lock cancels all requests and prevents a late prompt. Thirty minutes without typing also ends a request.

Only one authentication agent can own the session. To use Kanade's agent, stop a competing agent such as polkit-gnome and remove its startup entry. Kanade retries refused registration with a growing wait from 250 ms to at most 30 s between attempts, so wait for it to register; restarting Kanade is not required. Successful registration logs `kanade: polkit agent registered for this session` once per new bus generation or polkitd owner. A locked session, a missing polkit helper or an identity outside this session's user produces no prompt and answers as not authorized.

## See also

[Installation](/getting-started/installation/), [keyboard](/getting-started/keybinds/), and [authentication limits](/reference/known-gaps/lock-and-idle/).
