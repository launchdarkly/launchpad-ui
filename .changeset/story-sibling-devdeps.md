---
'@launchpad-ui/box': patch
'@launchpad-ui/drawer': patch
'@launchpad-ui/dropdown': patch
'@launchpad-ui/modal': patch
'@launchpad-ui/popover': patch
'@launchpad-ui/tooltip': patch
---

Declared, as a devDependency, the sibling workspace package each of these packages'
own stories or tests already imported by specifier. No test or story behaviour
changed. The only visible effect is a new devDependency entry in each package's
published manifest, which is not installed by consumers.
