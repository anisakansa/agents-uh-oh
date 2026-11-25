# The Agent's Uh-Oh

[![make.fun · u-danu-the-agent-s-uh-oh-4c0911e4](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-agent-s-uh-oh-4c0911e4)
[![rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/anisakansa/agents-uh-oh/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-agent-s-uh-oh-4c0911e4)
[![reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/anisakansa/agents-uh-oh/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4?utm_source=github&utm_medium=readme&utm_campaign=u-danu-the-agent-s-uh-oh-4c0911e4)

My entry for [The Agent's Uh-Oh](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4) on [make.fun](https://make.fun).

## The word

> guessing

One word an agent says when it has no idea what to do. The field is flooded with failure-mode jargon — hallucinating, recalculating, buffering — so this entry takes the opposite angle: a confession. The all-knowing helper drops the act and admits it was just guessing all along. No caption needed, no second read, one blunt word a machine would actually blurt out mid-task, and it lands the instant you read it.

## How it works

`main.ts` writes the word to `output/entry.txt`. It enforces the gate itself before writing: exactly one word, 1–99 characters, plain printable ASCII, no trailing newline — and reads the file back to confirm the bytes on disk match. Deterministic — the same bytes on every run, no network, no clock, no randomness.

```sh
node main.ts
```
