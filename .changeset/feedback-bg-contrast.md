---
'@launchpad-ui/tokens': patch
'@launchpad-ui/components': patch
---

Fix `feedback` color aliases that failed WCAG AA contrast (DSYS-204).

Tokens:

- Lighten `bg-feedback-*` to the `*.0` step (light) and darken to `*.950` (dark) so paired `text-feedback` content meets 4.5:1.
- Soften `border-feedback-*` to `*.100` (light) / `*.800` (dark) so the borders pair with the lighter feedback backgrounds.
- Darken `fill-feedback-warning` to the `*.600` step for legibility.
- Decouple `border-field-error` and `border-interactive-destructive` from `border-feedback-error` — they now map to `red-500` (light) / `red-400` (dark) so invalid-field and destructive borders keep their vivid state indication.

Components:

- `Alert` now sources its background and border colors from the `bg-feedback-*` / `border-feedback-*` tokens (and `bg-ui-secondary` / `border-ui-primary` for the neutral variant) instead of hardcoded primitives.
- `Toast` status icons use `text-feedback-*` for sufficient contrast against the toast surface.
