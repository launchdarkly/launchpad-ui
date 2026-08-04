---
---

Move root `devDependencies` that are only used by specific packages down into those packages' own `package.json` (`@vanilla-extract/css` for `box`, `tsx` for `icons`/`tokens`, `@testing-library/react` for `tokens`), and drop the unused root `axe-core` devDependency. No published package's `dependencies` or `peerDependencies` changed, so no version bump is needed.
