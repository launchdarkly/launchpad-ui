---
'@launchpad-ui/popover': patch
'@launchpad-ui/drawer': patch
'@launchpad-ui/modal': patch
'@launchpad-ui/core': patch
---

Set window event only on popover

[Popover]: Set `keydown` event listener on `window` instead of `document`.
[Modal]: Revert last change's component changes - restored `document` event listener
[Drawer]: Revert last change's component changes - restored `document` event listener
