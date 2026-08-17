---
'@launchpad-ui/box': patch
'@launchpad-ui/components': patch
'@launchpad-ui/vars': patch
---

Broke a circular workspace dependency between these three packages. box's own story used
@launchpad-ui/components only for `Button`, which @launchpad-ui/button already exports, so
the story now imports `Button` directly and box no longer declares components as a
devDependency. vars's own stories used `ToastRegion`, `toastQueue`, `Tooltip` and
`TooltipTrigger`, which only components exports, so those three story files (and the
color-token helper one of them uses, plus that helper's test) moved into components; vars
no longer declares components as a devDependency. components now declares box and vars as
devDependencies, since its own stories use both. Story titles are unchanged, and no test
or story behaviour changed; the only visible effect is each package's published manifest.
