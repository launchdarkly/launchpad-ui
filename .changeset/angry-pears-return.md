---
"@launchpad-ui/icons": minor
"@launchpad-ui/avatar": patch
"@launchpad-ui/chip": patch
"@launchpad-ui/filter": patch
"@launchpad-ui/core": patch
---

Align API with RAC components:
  - Remove `IconContext`
  - Remove outer `span`
  - Remove props `title` and `description` in favor of composition
  - Prop `subtle` -> `variant`
  - Prop `children` for custom icons
  - Consolidate sizes
