---
title: Auth
description: Answer polkit requests on the focused output under niri and Umbriel.
---

Auth opens on the selected compositor's focused output when polkit requests authentication for an action another program asks to perform, under niri and Umbriel. It has no Launcher destination, keybind or `open` verb. The `polkit` Module registers Kanade as the session's authentication agent.

A never-shown request waits without taking input while confirmed focus is missing or overview is active, then retries when the Island changes. Remembered navigation focus cannot place Auth, and Umbriel's focused output must still be present. All 27 subprocess scenarios passed, covering real compositor events reaching Auth, retries, lock cleanup and input serialization, including actual password writes to a fake helper.

Live Umbriel checks on implementation `cc0ea5c` observed successful registration, visible Auth on focused output `eDP-1` with exclusive keyboard ownership and an empty password field. Cancel and Escape each ended their request with `pkcheck` exit 1. During overview, a request stayed pending with Auth absent and no Island keyboard interactivity or focus; closing overview showed Auth, then Cancel ended the request with exit 1.

A separate check on the same binary returned `pkcheck` exit 0 without an observed prompt or password entry. This establishes authorization only; password delivery and PAM success remain unverified, and the cause is undetermined. No policy or authorization cache was modified. Both runs restored the exact original shell with normal environment and unchanged real settings; focus was restored and the pointer untouched. [ADR 0147](https://github.com/0x1d1e/kanade/blob/main/docs/adr/0147-umbriel-compositor-support-and-config-editor.md#auth-extends-adr-0146) records the exact binary and local evidence references.

Live password/PAM authentication, lock cancellation/password clearing, missing or stale focus, and niri acceptance remain **NOT RUN**. The subprocess checks above provide automated evidence separately.

If you previously disabled the Module under Umbriel, run `kanade module enable polkit` and restart through Umbriel. To retain an external agent instead, keep Kanade's `polkit` Module off.

The Surface shows polkit's message, the user whose password is requested, a masked field, Cancel and Authenticate. It holds the keyboard while shown so keys do not reach the window beneath.

| Key | Effect |
| --- | --- |
| Typing | Enters the password |
| Backspace | Erases a character |
| Enter | Submits to polkit's own helper |
| Escape | Cancels the request |

Kanade holds no privilege and registers no polkit action. The password is not logged, persisted or sent through Kanade's CLI socket. A failed attempt clears the field; three failed tries end the request. Cancel or Escape shuts down the active helper and clears the password. Lock onset synchronously cancels all requests, shuts down the helper and clears the field before asking the compositor to lock. Input and helper password writes share that cancellation guard; a pending or held lock prevents a late prompt. Thirty minutes without typing also ends a request.

Only one authentication agent can own the session. To use Kanade's agent, stop a competing agent such as polkit-gnome and remove its startup entry. Kanade retries refused registration with a growing wait from 250 ms to at most 30 s between attempts, so wait for it to register; restarting Kanade is not required. Successful registration logs `kanade: polkit agent registered for this session` once per new bus generation or polkitd owner. A locked session, a missing polkit helper or an identity outside this session's user produces no prompt and answers as not authorized.

## See also

[Installation](/getting-started/installation/), [keyboard](/getting-started/keybinds/), and [authentication limits](/reference/known-gaps/lock-and-idle/).
