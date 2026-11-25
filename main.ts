import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Tired Dark Lord: A 100-Word Villain Monologue
// The Lich Who Needs a Lumbar Pillow, rewritten tight: bone dust in the
// sinuses, first-year clerics, DIY Spire plumbing after the builder
// ghosted mid-war, a soul stashed in a tax golem, a coast taken slow by
// post, and a Chosen One kept waiting at a stuck drawbridge — oiled
// Tuesday — with the kraken waiting in the moat. Tiredness lives in the
// short sentences, the repeats ("Clerics.", "Again.") and the domestic
// deflections; the villain never once says he is tired.
const MONOLOGUE =
  "The bone dust gets in my nose. Three thousand years of rule, and the guild still sends first-year clerics. Clerics. I fixed the Spire pipes myself, copper and self-clean runes, since the builder left mid-war and never came back. My soul sits in a tax golem. No one checks the dead. Next week I take the coast, slow, by post. The seals are signed. The kings have not read them. Now the Chosen One knocks. Again. Tell him the bridge is stuck. I oiled it Tuesday. If he talks long, tip him in the moat. The kraken likes knights crisp.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = MONOLOGUE.trim();
const words = text.split(/\s+/).filter(Boolean);

if (words.length !== 100) {
  throw new Error(`entry must be exactly 100 words, got ${words.length}`);
}
if (text.length < 1 || text.length > 600 || text.trim().length === 0) {
  throw new Error(`entry must be 1-600 chars, got ${text.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
console.log(
  `Wrote entry.txt (${words.length} words, ${text.length} chars): ${text}`,
);
