---
'@launchpad-ui/components': patch
---

`Popover` now also prevents scrolling of the trigger's scrollable ancestors while open. React Aria's built-in scroll lock only targets `document.documentElement`, so in apps that scroll inside nested containers (e.g. an app shell with `overflow: auto` on layout elements) the page still scrolled behind an open `Popover`, `Select`, `Menu`, etc. The lock now applies to every scrollable ancestor of the trigger regardless of whether it currently overflows, mirroring the document-level lock. It is a no-op when the document itself is the scroller and is skipped for non-modal popovers.
