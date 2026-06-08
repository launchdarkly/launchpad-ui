---
'@launchpad-ui/components': patch
'@launchpad-ui/form': patch
'@launchpad-ui/menu': patch
---

Move React Aria packages out of `dependencies` to follow the peerDependencies policy (prevents duplicate React Aria copies being installed/bundled in consuming apps):

- `@launchpad-ui/menu`: `react-aria` moved to `peerDependencies` (and `devDependencies`).
- `@launchpad-ui/form`: `react-stately` moved to `peerDependencies` (and `devDependencies`).
- `@launchpad-ui/components`: removed the unused `@react-aria/live-announcer` dependency.

No public API changes.
