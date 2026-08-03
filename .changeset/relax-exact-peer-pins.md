---
"@launchpad-ui/box": patch
"@launchpad-ui/button": patch
"@launchpad-ui/core": patch
"@launchpad-ui/drawer": patch
"@launchpad-ui/dropdown": patch
"@launchpad-ui/filter": patch
"@launchpad-ui/focus-trap": patch
"@launchpad-ui/form": patch
"@launchpad-ui/icons": patch
"@launchpad-ui/menu": patch
"@launchpad-ui/modal": patch
"@launchpad-ui/overlay": patch
"@launchpad-ui/popover": patch
"@launchpad-ui/portal": patch
"@launchpad-ui/table": patch
"@launchpad-ui/tooltip": patch
---

Relax exact-pinned peer dependencies to caret ranges so consumers aren't forced onto a single exact React (or, where applicable, React Aria) version.

- `react` and `react-dom` peer ranges change from an exact `19.2.6` to `^19`, matching how these packages already declare their other peers.
- Where present, `react-aria`, `@react-aria/utils` peer pins also move from an exact version to a caret range on the same version — no functional change, just a wider accepted range for downstream apps managing their own React Aria versions.

No runtime behavior changes; devDependencies used for local development and testing remain pinned exactly.
