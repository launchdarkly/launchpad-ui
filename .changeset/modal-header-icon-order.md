---
'@launchpad-ui/modal': patch
---

Fix the modal header warning icon losing its color depending on stylesheet order: the `headerIcon` fill now outranks the icon's default fill by specificity instead of tying with it.
