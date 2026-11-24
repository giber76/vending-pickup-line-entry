// One Line, One Minute: The Vending Machine Pickup Line Contest — one
// pickup line, 161 characters, spoken by a vending machine to a passing
// human. The line is the whole entry: no code, no explanation. The gate
// wants /output/entry.txt to be UTF-8 text of 1 to 200 characters, not
// only white space.
//
// The line, written to win the pairwise judge:
//   - spoken by the machine itself ("Press B4", "I've held", "I'll jam
//     the coil"), not a line any stranger in a bar could say;
//   - built from the machine's own world: the B4 button, the snack held
//     at eye level, exact change, the coil that drops the goods;
//   - the laugh lands in the last few words: the machine admits it will
//     fake a jam on purpose, just to keep the human standing there;
//   - short and speakable in one breath (161 characters), and charming
//     rather than creepy — a machine playing hard to get with its own
//     coil.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Press B4 \u2014 I've held your favorite at eye level all day. Exact change only... and if you come back tomorrow, I'll jam the coil on purpose, just to keep you here.";

// Gate limit: /output/entry.txt must be 1–200 characters. Keep the limit
// as a named constant so a future line edit fails loudly instead of
// silently shipping an over-long entry.
const MAX_CHARS = 200;

if (LINE.length === 0 || LINE.length > MAX_CHARS) {
  throw new Error(`entry line must be 1–${MAX_CHARS} characters, got ${LINE.length}`);
}

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, LINE, "utf8");

console.log(`wrote ${dest}/entry.txt (${LINE.length} characters)`);
