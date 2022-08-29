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
- Handle button links with `asChild` instead of internally in `Button`
- Add minimal variant for both `Button` and `IconButton`
- Consume `IconButton` in downstream components

[Button]: Add new `IconButton` component, move link button implementation to asChild, and add minimal variant for both `Button` and `IconButton`
[SplitButton]: Remove `HTMLAnchorElement` type from `SplitButtonMainButton`
[Alert]: Consume `IconButton` instead of `Button`
[Banner]: Consume `IconButton` instead of `Button`
[Filter]: Consume `IconButton` instead of `Button`
[Modal]: Consume `IconButton` instead of `Button`
[Notification]: Consume `IconButton` instead of `Button`
[Pagination]: Consume `IconButton` instead of `Button`
