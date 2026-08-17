---
'@launchpad-ui/drawer': patch
'@launchpad-ui/navigation': patch
---

Drop the dependencies on `@launchpad-ui/progress` and `@launchpad-ui/chip`. Both packages are
deprecated and are no longer part of this workspace, so they resolved from the registry and
pulled in their own older copies of `@launchpad-ui/icons` and `@launchpad-ui/tokens`. The
spinner the drawer shows while suspended content loads, and the status label a navigation item
renders, are now source files in the packages that use them, with the same markup and the same
styles. Only the parts these two packages render are kept: the spinner has no value, size or
delay variants, and the status label has no icon and no click handling. `NavItemProps['status']`
accepts the same union of values as before, and the styles it needs now ship in
`@launchpad-ui/navigation/style.css` and `@launchpad-ui/drawer/style.css` rather than in the
stylesheets of the two deprecated packages.
