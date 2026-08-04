---
"@launchpad-ui/components": minor
"@launchpad-ui/navigation": minor
---

Widen peer dependency ranges so these packages work with either React Router 7 or 8: the `react-router` peer range changes from an exact `7.15.1` to `^7.15.1 || ^8.2.0`. Consuming apps can now upgrade to React Router 8 without waiting on a major bump here, and apps still on React Router 7 continue to resolve correctly.

All other exact peer pins on these two packages (`react`, `react-dom`, and, where present, `@react-aria/*`, `react-aria`, `react-aria-components`, `react-stately`, `@react-stately/*`, `@react-types/*`, `react-hook-form`) also relax from exact versions to caret ranges, for the same reason as the sibling patch across the rest of the workspace.
