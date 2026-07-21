---
'@launchpad-ui/components': minor
---

Add a `size` prop to `Input` with `small` (24px tall) and `medium` (32px tall, the default) variants, matching the corresponding `Button` sizes so inputs and buttons align when placed side by side. `small` uses 11px text to match `Button`'s small height.

Note: `size` now refers to the design-system size scale, so the rarely-used native numeric `size` HTML attribute is no longer accepted on `Input` — this is a breaking type change for any consumer that set `size={number}`.
