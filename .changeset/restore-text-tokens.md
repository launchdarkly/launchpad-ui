---
'@launchpad-ui/components': patch
'@launchpad-ui/menu': patch
---

Fix `Header` and the menu section-header label (`Menu-item--header`) rendering with an unresolved (browser-default) text color: `--lp-color-text-ui-tertiary`, referenced by both, was dropped from `@launchpad-ui/tokens` during a past color refresh without updating these consumers. Restored using `--lp-color-text-ui-secondary`, which now carries tertiary's former value. Also fixes `Tree`'s item description text, which referenced a token that never existed (`--lp-color-text-ui-secondary-base`) instead of `--lp-color-text-ui-secondary`.
