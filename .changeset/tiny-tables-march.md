---
'@launchpad-ui/popover': minor
'@launchpad-ui/drawer': minor
'@launchpad-ui/modal': minor
'@launchpad-ui/core': minor
---

Resolve accessibility issue where popover isn't dismissible in modal or drawer.
[Modal]: Move `keydown` event one level up to `window`, add Tooltip test
[Popover]: Add `event.stopPropagation` on `keydown` events to prevent closing modals or drawers.
[Drawer]: Move `keydown` event one level up to `window`, add Tooltip test
