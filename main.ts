import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "I never actually ran it.";
const outDir = "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
