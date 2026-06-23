---
"@launchpad-ui/components": patch
---

Fix `Alert` text styling and semantics leaking when nested inside an overlay (`Dialog`/`Modal`). `Alert` now establishes its own `TextContext`, so an ancestor overlay's `subtitle` slot no longer captures the Alert's `Text` (which previously forced `slot="subtitle"`, inherited the overlay's `id`/`h3` element, and picked up the overlay's subtitle CSS). The `Modal` subtitle rule is also scoped to skip alert-nested text. A bare `<Text>` now works inside an `Alert`, including within a `Dialog`.
