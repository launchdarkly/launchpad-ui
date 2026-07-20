---
'@launchpad-ui/tokens': minor
'@launchpad-ui/components': patch
---

Remove the no-op `--lp-size-0` and `--lp-spacing-100` tokens. Both resolved to `0`, and the `spacing-100` name misleadingly implied "a small amount of spacing" when it meant "none at all". The two other tokens that referenced the `size.0` primitive (`borderWidth.100` → `--lp-border-width-100` and `viewport.mobile` → `--lp-viewport-mobile`) now use a literal `0`, so their computed values are unchanged. Consumers should use `0` directly instead of these tokens.
