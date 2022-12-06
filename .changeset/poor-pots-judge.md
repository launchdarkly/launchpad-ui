---
'@launchpad-ui/chip': patch
'@launchpad-ui/drawer': patch
'@launchpad-ui/navigation': patch
'@launchpad-ui/core': patch
---

Improve theming for chip, drawer, and navigation components

[Chip]:

- Deprecate `flag` and `invited` variants. `invited` is now unused, and `flag` is moved out of design system.
- Improve darkmode theming for all variants.
- Move `Chip--topbar` out of design system.
- Add storybook stories for subtle variant

[Drawer]: Improve theming for drawer shadow.

[Navigation]:

- Add `border-radius: 0` to items to prevent override from consumer apps.
- Update primary navigation background color.
