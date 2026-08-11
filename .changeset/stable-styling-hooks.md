---
'@launchpad-ui/components': minor
---

Expose stable public `data-variant` attributes on `Button`, `IconButton`, `ToggleButton`, `ToggleIconButton`, `LinkButton`, `LinkIconButton`, `RadioButton`, and `RadioIconButton`, and `data-indicator` attributes (`"checkbox"` / `"radio"`) on the `Checkbox` and `Radio` indicator elements. These attributes let consumers and tests target components by a documented contract instead of compiled CSS Module class names, following the same pattern already used by the `data-icon` attribute.
