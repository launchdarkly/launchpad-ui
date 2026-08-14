---
'@launchpad-ui/popover': patch
---

Take the `OffsetOptions` type from `@floating-ui/dom` instead of `@floating-ui/core`, and drop the direct dependency on core.

`Popover` calls `offset()` from `@floating-ui/dom`, so the type that describes its argument should come from the same package. Importing it from core meant the type could come from a different copy of core than the one `@floating-ui/dom` resolved for itself, since dom asks for `^1.7.3` while popover pinned `1.7.4`. Two copies produce two structurally distinct declarations, and a consumer that compiles this package from source then fails to typecheck `Popover.tsx`. `@floating-ui/dom` re-exports the type, so nothing else changes.
