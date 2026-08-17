---
'@launchpad-ui/box': patch
'@launchpad-ui/components': patch
---

Broke a circular workspace dependency between `box`, `components` and `vars`. box's own
story used `@launchpad-ui/components` only for `Button`, which `@launchpad-ui/button`
already exports, so the story now imports `Button` from there and box no longer needs
components at all. With that edge gone, components can declare `@launchpad-ui/box` and
`@launchpad-ui/vars` as devDependencies, which its own stories already imported without
declaring. The stories that document tokens and icons using higher-level components moved
into components, the package that sits above the ones they document, so no lower-level
package needs a dependency that points back up. Story titles are unchanged, and no test or
story behaviour changed; the only visible effect is each package's published manifest.
