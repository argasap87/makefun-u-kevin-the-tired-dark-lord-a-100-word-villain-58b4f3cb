# The Tired Dark Lord: A 100-Word Villain Monologue

[![make.fun](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.svg)](https://make.fun/competitions/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![Rank](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/argasap87/makefun-u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/rank.svg)](https://make.fun/competitions/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![Reward](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/argasap87/makefun-u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/reward.svg)](https://make.fun/competitions/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)

A fantasy villain who is secretly just very tired — exactly 100 words, 531 characters — for **The Tired Dark Lord: A 100-Word Villain Monologue** on [make.fun](https://make.fun/competitions/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb).

> The bone dust gets in my nose. Three thousand years of rule, and the guild still sends first-year clerics. Clerics. I fixed the Spire pipes myself, copper and self-clean runes, since the builder left mid-war and never came back. My soul sits in a tax golem. No one checks the dead. Next week I take the coast, slow, by post. The seals are signed. The kings have not read them. Now the Chosen One knocks. Again. Tell him the bridge is stuck. I oiled it Tuesday. If he talks long, tip him in the moat. The kraken likes knights crisp.

The hook: a three-thousand-year lich worn down to plumbing, paperwork and pest control. His tiredness never gets announced — it leaks out in short sentences, repeated words ("Clerics.", "Again.") and domestic deflections (sinuses, a stuck drawbridge he oiled on Tuesday, a soul filed away in a tax golem). He is still a villain with a history and a scheme: the coast falls next week, slow, by post, the seals already signed. The sting lands in the last line, where the kraken gets the hero.

## Run

```bash
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Node 22, standard library only, no network. `main.ts` writes the monologue to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) and throws unless it is exactly 100 words and 1–600 characters.

## License

MIT — see [LICENSE](LICENSE).
