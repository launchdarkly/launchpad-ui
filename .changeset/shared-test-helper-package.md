---
'@launchpad-ui/box': patch
'@launchpad-ui/button': patch
'@launchpad-ui/components': patch
'@launchpad-ui/drawer': patch
'@launchpad-ui/dropdown': patch
'@launchpad-ui/filter': patch
'@launchpad-ui/focus-trap': patch
'@launchpad-ui/form': patch
'@launchpad-ui/icons': patch
'@launchpad-ui/menu': patch
'@launchpad-ui/modal': patch
'@launchpad-ui/navigation': patch
'@launchpad-ui/overlay': patch
'@launchpad-ui/popover': patch
'@launchpad-ui/portal': patch
'@launchpad-ui/table': patch
'@launchpad-ui/tooltip': patch
---

Moved the shared test render helper each package's tests used into its own workspace
package, `@launchpad-ui/test-utils`, and declared it as a devDependency instead of
reaching for it by relative path. No test behaviour changed. The only visible effect
is a new devDependency entry in this package's published manifest, which is not
installed by consumers.
