---
'@launchpad-ui/alert': minor
'@launchpad-ui/avatar': minor
'@launchpad-ui/banner': minor
'@launchpad-ui/button': minor
'@launchpad-ui/chip': minor
'@launchpad-ui/clipboard': minor
'@launchpad-ui/core': minor
'@launchpad-ui/counter': minor
'@launchpad-ui/dropdown': minor
'@launchpad-ui/filter': minor
'@launchpad-ui/form': minor
'@launchpad-ui/icons': minor
'@launchpad-ui/markdown': minor
'@launchpad-ui/menu': minor
'@launchpad-ui/modal': minor
'@launchpad-ui/navigation': minor
'@launchpad-ui/notification': minor
'@launchpad-ui/overlay': minor
'@launchpad-ui/pagination': minor
'@launchpad-ui/popover': minor
'@launchpad-ui/progress': minor
'@launchpad-ui/progress-bubbles': minor
'@launchpad-ui/slider': minor
'@launchpad-ui/split-button': minor
'@launchpad-ui/tab-list': minor
'@launchpad-ui/table': minor
'@launchpad-ui/toggle': minor
'@launchpad-ui/tooltip': minor
---

Use vite for builds:

Each package's styles are now located in a single `style.css` within the root:

Before:

```js
import alertStyles from '@launchpad-ui/alert/styles/Alert.css';
```

After:

```js
import alertStyles from '@launchpad-ui/alert/style.css';
```

The `core` package no longer bundles styles. If you need to import stylesheets for the components (in a Remix app for example) simply import them from the individual packages that come included when you install the `core` package.
