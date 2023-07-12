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
