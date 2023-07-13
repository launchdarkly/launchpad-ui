---
'@launchpad-ui/avatar': minor
'@launchpad-ui/button': minor
'@launchpad-ui/chip': minor
'@launchpad-ui/form': minor
'@launchpad-ui/icons': minor
'@launchpad-ui/menu': minor
'@launchpad-ui/split-button': minor
'@launchpad-ui/core': minor
---

[Icons] Use sprites for icons instead of individual components

**Before**

```js
import { Add } from '@launchpad-ui/icons';

const MyIcon = () => <Add size="medium" />;
```

**After**

```js
import { Icon } from '@launchpad-ui/icons';

const MyIcon = () => <Icon name="add" size="medium" />;
```

By default, the component expects `@launchpad-ui/icons/dist/sprite.svg` to be available from `APP_ROOT/static/sprite.svg` in your app. A custom path to the sprite can be set via the `IconContext` provider.

For example, if importing a static asset returns a resolved URL you can do the following in your app to load the icons:

```js
import { IconContext } from '@launchpad-ui/icons';
import icons from '@launchpad-ui/icons/sprite.svg';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <IconContext.Provider value={{ path: icons }}>
    <App />
  </IconContext.Provider>
);
```
