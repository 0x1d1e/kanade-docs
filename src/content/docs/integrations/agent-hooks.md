---
title: Agent hooks
description: Showing a Claude Code session as a Live Activity, and adapting another agent.
sidebar:
  order: 3
---

A coding agent can show a session as a Live Activity on the Island: it starts with your prompt, shows the tool it runs, says when it waits for you, and ends when the turn does. It is the `live` Module's `kanade activity`, fed by the agent's own hooks.

## Claude Code

Add this to `~/.claude/settings.json`, or a project's `.claude/settings.json`, merging with any `hooks` you have:

```json
{
  "hooks": {
    "UserPromptSubmit": [{ "hooks": [{ "type": "command", "command": "kanade activity hook claude", "timeout": 5 }] }],
    "PreToolUse": [{ "hooks": [{ "type": "command", "command": "kanade activity hook claude", "async": true }] }],
    "PermissionRequest": [{ "hooks": [{ "type": "command", "command": "kanade activity hook claude", "timeout": 5 }] }],
    "Stop": [{ "hooks": [{ "type": "command", "command": "kanade activity hook claude", "timeout": 5 }] }]
  }
}
```

`kanade` must be on the `PATH` Claude Code runs with. Each hook reads its event from stdin, so there is nothing else to configure; use as few of the events as you like.

| Claude Code event | The Activity |
| --- | --- |
| `UserPromptSubmit` | Starts, titled `Claude Code: <project folder>`, afresh if it was live |
| `PreToolUse` | Detail line: the tool's name, like `Bash` or `Edit` |
| `PermissionRequest`, `Notification` | Detail line: `Waiting for you` |
| `Stop`, `SessionEnd` | Ends as done, shown for 10 s on the focused output |
| `StopFailure` | Ends as failed, with the error type as the line |

One Activity per Claude Code session, with the id `claude-` and the session's id. Nothing of the document is used but the event, the session's id, the folder name, the tool's name, the notification type and the error type: your prompt, tool input and Claude's replies are read past and never shown or logged.

:::note
`PreToolUse` fires before every tool call, so `"async": true` keeps a busy turn from waiting on it; the hook bounds itself to 2 s. Events can then arrive out of order, and a late one never brings an ended session back. Restarting Kanade mid-turn loses the Activity until your next prompt.
:::

## Other agents

`kanade activity` has no agent in it: any agent or script that can run a command on its events can use the same verbs.

```sh
kanade activity start agent-1 "My agent"
kanade activity detail agent-1 "Running tests"
kanade activity progress agent-1 40%
kanade activity end agent-1
```

An agent can also ask on the Island and hear the answer: it sets up to 3 buttons and reads the press back with `kanade activity pressed` or `wait`. Kanade runs nothing for a press, so the agent does the work for the key it reads.

## See also

[Activity CLI](/cli/activity/), [hooks configuration](/configuration/hooks/), and the [CLI reference](/reference/cli/).
