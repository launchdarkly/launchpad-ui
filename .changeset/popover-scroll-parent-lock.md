---
'@launchpad-ui/components': patch
---

`Popover` now also prevents scrolling of the trigger's nearest scrollable ancestor while open. React Aria's built-in scroll lock only targets `document.documentElement`, so in apps that scroll inside a nested container (e.g. an app shell with `overflow: auto` on a layout element) the page still scrolled behind an open `Popover`, `Select`, `Menu`, etc. The lock is a no-op when the document itself is the scroller and is skipped for non-modal popovers.
