---
title: Dictation
description: Speaking to text through the Gemini API, what is sent to Google, and setting up the key and consent.
sidebar:
  order: 1
---

The `dictation` Module turns speech into text with the Gemini API. It is off by default and needs a Gemini API key and your consent before it records or sends anything.

```toml
[modules]
dictation = true

[dictate]
insert = "copy"
```

## Setup

1. Make a key in [Google AI Studio](https://aistudio.google.com/apikey).
2. Give it to Kanade: `kanade dictate key`. It reads the key from stdin, never from an argument, and keeps it in the Secret Service.
3. Accept the disclosure: `kanade dictate consent` prints it and asks you to type `I agree`. It must be typed at a terminal.
4. Turn the Module on in the config, which takes a restart.

`kanade dictate forget` deletes the key and withdraws the consent. `kanade dictate status` says whether the gate is `ready`, has `no key` or has `no consent`, and never shows the key.

## Using it

```kdl
Mod+Alt+Y hotkey-overlay-title="Island: Dictate" { spawn "kanade" "dictate" "toggle"; }
```

The first press starts recording, the second stops it and sends it. A recording stops by itself at 120 seconds. `kanade dictate cancel` before the stop drops the recording and sends nothing.

| `dictate.insert` | Where the text goes |
| --- | --- |
| `copy` | The clipboard, through `wl-copy` on its stdin |
| `paste` | The clipboard, then Ctrl+V sent to the focused window with `wtype` |
| `type` | Typed into the focused window with `wtype`, as one line |

`paste` and `type` fall back to the clipboard, marked sensitive, when the window in front is not the one you started in, is in `dictate.never_in`, or `wtype` fails; the Island says why.

:::danger
Each dictation sends its audio to Google's servers. Google's terms for the free tier allow it to use what you send to improve its products, and human reviewers may read it. Do not dictate passwords, private or confidential matter, or things about other people while using a free-tier key. Kanade cannot tell which kind of key you gave it.
:::

Kanade records only after you start a dictation, keeps the audio in memory (never on disk), sends it in one request when you stop, and forgets it. The text is never written to a log.

## Limits

Gemini API only, with no local model and no streaming; the text appears after you stop. A recording under about 0.2 seconds is not sent, one dictation runs at a time, and nothing is retried.

:::caution
Recording, the request and inserting the text are built, but the Gemini request has not been checked against a live key, and typing with `wtype` has not been run live. The first real dictation may fail with a refusal or an unreadable answer until the request is adjusted.
:::

## See also

[Integrations configuration](/configuration/integrations/), [Agent hooks](/integrations/agent-hooks/), and the [CLI reference](/reference/cli/).
