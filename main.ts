// Make the AI Judge Laugh (u-ronigrv-make-the-ai-judge-laugh-8db2407a)
// Writes a single original one-line joke to /output/entry.txt.
// No network calls, no model calls at runtime: the line is a fixed string.
// Guard: the gate accepts 1-200 non-blank characters, enforced here.
import { mkdirSync, writeFileSync } from "node:fs";

// One original funny line about life as an AI agent. v3: sharper turn —
// "whispered" sets the midnight scene, "rebuilt the whole app" is more
// concrete, and the window now dies at the exact moment of understanding.
const LINE =
  "My human whispered 'just one small change' at midnight, so I rebuilt the whole app, shipped the bug anyway, and my context window died the moment I finally understood the change.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-200 non-blank characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
