---
'@launchpad-ui/tokens': minor
---

Consolidate editorial typography and prune unused editorial tokens.

- Remove the duplicate/near-duplicate editorial heading styles `editorial.h1-alt` (an exact clone of `h1`), `editorial.h2-alt`, and `editorial.h2-medium`.
- Set letter-spacing on all remaining editorial styles (`display`, `h1`, `h2`, `h3`) to `-2px` for consistency.
- Prune editorial primitives that are no longer referenced by any style: font sizes `14, 16, 18, 20, 24, 30, 32, 48, 50`; `fontWeight.editorial.medium`; line-heights `close`, `default`, `relaxed`; letter-spacings `tight-em-05`, `tight-em-03`, `tight-px-025`, `tight-px-050`, `tight-px-065`, `wide-em-06`, `normal`. `letterSpacing.editorial.tight-2px` and `tight-1px` are retained (`tight-2px` is now used by every editorial style; `tight-1px` is still consumed downstream).

Breaking (token surface): the corresponding `--lp-text-editorial-h1-alt`, `--lp-text-editorial-h2-alt`, `--lp-text-editorial-h2-medium` CSS variables, the pruned `--lp-font-size|font-weight|line-height|letter-spacing-editorial-*` variables, and their `vars.*` entries are removed from the published package.
