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

Upgrade `react-aria-components` to 1.19.0 along with the aligned `react-aria` (3.50.0), `react-stately` (3.48.0), and `@react-types/shared` (3.36.0) packages from the same release. The `@react-aria/*`, `@react-stately/*`, and `@internationalized/*` sub-packages were already at the matching versions and are unchanged.

This release is additive — no breaking changes. Notable upstream additions:
- `GridList` and `Tree` support full keyboard interaction with embedded text fields and other interactive elements via the `keyboardNavigationBehavior` prop.
- `Autocomplete` and `Popover` gain inline-completion support, including a new `getTargetRect` prop on `Popover` for positioning overlays relative to arbitrary character positions.
- `Menu`'s `onAction` callback now provides both the item key and its value.
- `DragTypes.has()` accepts multiple MIME types and wildcards.
