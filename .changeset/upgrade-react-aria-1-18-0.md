---
"@launchpad-ui/components": patch
"@launchpad-ui/focus-trap": patch
"@launchpad-ui/navigation": patch
"@launchpad-ui/dropdown": patch
"@launchpad-ui/drawer": patch
"@launchpad-ui/filter": patch
"@launchpad-ui/modal": patch
"@launchpad-ui/form": patch
"@launchpad-ui/menu": patch
---

Upgrade `react-aria-components` to 1.18.0 along with aligned `react-aria` (3.49.0), `react-stately` (3.47.0), `@react-aria/*`, `@react-stately/*`, `@react-types/*`, and `@internationalized/*` packages.

Upstream behavior change worth noting:
- `Checkbox`, `Radio`, and `Switch` are now soft-deprecated in favor of `CheckboxField`/`RadioField`/`SwitchField` (which add `description`/`FieldError` slot support). The deprecated components still work, but they now render an additional DOM wrapper around the label element.
