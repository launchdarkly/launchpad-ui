---
---

Drop `baseUrl` from `tsconfig.json` and `packages/tokens/tsconfig.json`, and enable oxlint's type-aware lane (`pnpm oxlint:js:full`, now also run in CI) ahead of launchpad-ui merging into gonfalon, whose oxlint-tsgolint type-aware lane hard-rejects any tsconfig containing `baseUrl` (tsgolint#351). Both files used `baseUrl: "."`, so `paths` already resolved correctly relative to each tsconfig and needed no changes. Fixed the real findings the type-aware lane surfaced on its first run (unawaited promises, awaiting non-promise values, async functions with no `await`, and two class fields that should be `readonly`) — tooling/config plus internal correctness fixes only, no published package's public API or behavior changed, so no version bump is needed.
