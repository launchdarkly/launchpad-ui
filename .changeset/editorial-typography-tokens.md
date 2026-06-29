---
'@launchpad-ui/tokens': minor
'@launchpad-ui/box': patch
---

Add a Sora-based editorial typography token family for brand-themed surfaces (empty states, hero moments, announcements). Adds `fontFamily.sora` (with an Inter fallback), pixel-named `fontSize.editorial.*`, `fontWeight.editorial.*`, unitless `lineHeight.editorial.*`, a new top-level `letterSpacing.editorial.*` group, seven `text.editorial.*` compositions, and `size.30`/`size.50` primitives. All values mirror the `ai-refresh` `_typography.scss` source of truth. Existing utility `text.*` compositions are unchanged.

Box's `rainbow-sprinkles` now flattens the `fontSize`, `fontWeight`, and `lineHeight` token groups (matching how the `font` typography group is already handled) so the nested `editorial.*` sub-namespaces don't break `defineProperties`' flat-record typing.
