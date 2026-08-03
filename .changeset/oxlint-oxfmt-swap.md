---
---

Replace Biome with oxlint (lint) and oxfmt (format) to match the tooling gonfalon uses, ahead of launchpad-ui merging into that monorepo. This level swaps the tooling only — no repo-wide reformat yet (that lands as the next stacked level so its every-file diff stays isolated). No published package's `dependencies` or `peerDependencies` changed, so no version bump is needed.
