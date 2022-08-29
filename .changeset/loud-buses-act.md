---
'@launchpad-ui/button': minor
'@launchpad-ui/split-button': minor
'@launchpad-ui/core': minor
'@launchpad-ui/alert': patch
'@launchpad-ui/banner': patch
'@launchpad-ui/filter': patch
'@launchpad-ui/modal': patch
'@launchpad-ui/notification': patch
'@launchpad-ui/pagination': patch
---

- Add new `IconButton` component
- Abstract shared logic into `BaseButton` and improve types via `PolymorphicButtonProps` type
- Add minimal variant for both `Button` and `IconButton`
- Consume `IconButton` in downstream components

[Button]: Add new `IconButton` component, abstract shared logic into `BaseButton` and improve types via `PolymorphicButtonProps` type, and add minimal variant for both `Button` and `IconButton`
[SplitButton]: Consume `PolymorphicButtonProps`
[Alert]: Consume `IconButton` instead of `Button`
[Banner]: Consume `IconButton` instead of `Button`
[Filter]: Consume `IconButton` instead of `Button`
[Modal]: Consume `IconButton` instead of `Button`
[Notification]: Consume `IconButton` instead of `Button`
[Pagination]: Consume `IconButton` instead of `Button`
