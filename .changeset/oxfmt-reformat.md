---
---

Reformat the entire repository with oxfmt so launchpad-ui's formatting is byte-compatible with gonfalon's ahead of the merge import, and enable `pnpm fmt:check` as a CI gate (plus oxfmt on staged files via lint-staged) so future commits stay formatted. Formatting-only change — no published package's `dependencies` or `peerDependencies` changed, so no version bump is needed.
