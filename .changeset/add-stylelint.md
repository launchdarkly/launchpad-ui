---
'@launchpad-ui/button': patch
'@launchpad-ui/components': patch
'@launchpad-ui/menu': patch
---

Cosmetic CSS cleanups from adding stylelint (blank-line spacing before declarations/comments, shorthand hex color notation, a redundant duplicate selector removed, and `0` used instead of the deprecated `--lp-spacing-100`/`--lp-size-0` tokens, which both resolve to `0`). No computed styles changed.
