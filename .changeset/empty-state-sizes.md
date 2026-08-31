---
'@launchpad-ui/components': minor
'@launchpad-ui/icons': minor
---

Add `medium` and `small` sizes to `EmptyState`. `EmptyState` now scales its `BadgeIcon`, heading, description, and buttons together, so set `size` on `EmptyState` rather than on the children. Spacing is the same at every size; only the type scale and the control sizes change. Use `large` for full-page and main-content empty states, `medium` inside cards, panels, and table bodies, and `small` in dense containers. Only `large` has padding of its own; `medium` and `small` leave it to the surrounding container. `BadgeIcon` gains a `BadgeIconContext` so a composing component can drive its size.
