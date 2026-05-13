---
"@launchpad-ui/components": patch
"@launchpad-ui/focus-trap": patch
"@launchpad-ui/navigation": patch
"@launchpad-ui/dropdown": patch
"@launchpad-ui/overlay": patch
"@launchpad-ui/popover": patch
"@launchpad-ui/tooltip": patch
"@launchpad-ui/button": patch
"@launchpad-ui/drawer": patch
"@launchpad-ui/filter": patch
"@launchpad-ui/portal": patch
"@launchpad-ui/icons": patch
"@launchpad-ui/modal": patch
"@launchpad-ui/table": patch
"@launchpad-ui/core": patch
"@launchpad-ui/form": patch
"@launchpad-ui/menu": patch
"@launchpad-ui/box": patch
---

Upgrade `react-aria-components` to 1.17.0 along with aligned `react-aria`, `react-stately`, and `@react-aria/*` packages. Imports migrated to subpath form (e.g. `react-aria-components/Menu`) via Adobe's `use-subpaths` codemod, which reduces consumer bundle size without relying on tree-shaking.

Two upstream behavior changes worth noting:
- `DateField` and `DatePicker` now constrain invalid input on blur instead of while typing (RAC 1.15).
- `Tabs` defaults `shouldSelectOnPressUp` to `true` when an item is a link (RAC 1.17).
