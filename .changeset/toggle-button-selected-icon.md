---
'@launchpad-ui/components': minor
---

Add `icon` and `selectedIcon` props to `ToggleButton`. A selected button now shows `check-circle` by default, and selecting a button with a leading `icon` swaps that icon for the selected one rather than showing both. Pass `selectedIcon={null}` to opt out. `appearance="elevated"` shows no selected icon, since its raised surface already signals selection.
