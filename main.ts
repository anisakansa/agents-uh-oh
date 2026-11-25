// The Agent's Uh-Oh — make.fun entry (u-danu-the-agent-s-uh-oh-4c0911e4).
//
// One word an agent says when it has no idea what to do: "guessing".
// The all-knowing helper drops the act and confesses the truth — it was
// never sure, it was just guessing. That confession is the joke: no
// failure-mode jargon, no caption needed, one blunt word a machine would
// actually blurt out mid-task, and it lands the instant you read it.
//
// The program is fully deterministic: the word is a fixed constant, there
// is no clock, no randomness, no network and no input. Every run writes
// exactly the same bytes.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The word. Eight letters, one word, no spaces, no punctuation.
const WORD = "guessing";

// The gate, enforced here before anything is written: the entry must be
// UTF-8 text of 1 to 99 characters, not only white space, and this bounty
// asks for exactly one word, so it must hold no whitespace at all.
if (WORD.length < 1 || WORD.length > 99) {
  throw new Error("word breaks the 1-99 character gate");
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word");
}
if (!/^[\x20-\x7e]+$/.test(WORD)) {
  throw new Error("entry must be plain printable ASCII");
}

// Write to "output/entry.txt", relative to the working directory, so the
// grader's sandbox finds it wherever the program is run from.
mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", WORD, "utf8");

// Read the file back and confirm the bytes on disk are exactly the word.
const written = readFileSync("output/entry.txt", "utf8");
if (written !== WORD) {
  throw new Error("output/entry.txt does not match the word");
}
