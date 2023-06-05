---
'@launchpad-ui/core': minor
---

[Core] Replace barrel exports with named exports and remove icons+tokens packages to improve tree-shaking and support [Remix's CSS bundling](https://remix.run/docs/en/main/guides/styling#css-bundling).

As a result, the icons and tokens packages have been removed from `core` as their exports are auto-generated and would incur too high of maintenance cost to `core`'s index file.

Install and import from `@launchpad-ui/icons` and `@launchpad-ui/tokens` instead:

Before:

```js
import { Add } from '@launchpad-ui/core';
```

After:

```js
import { Add } from '@launchpad-ui/icons';
```
