---
'@launchpad-ui/popover': minor
'@launchpad-ui/progress-bubbles': minor
'@launchpad-ui/tooltip': minor
'@launchpad-ui/core': minor
---

Change from string literal union type to `PopoverInteractionKind` enum type used across Launchpad:

- [Popover] Add and export `PopoverInteractionKind` type
- [ProgressBubbles] Consume `PopoverInteractionKind`
- [Tooltip] Consume `PopoverInteractionKind`
