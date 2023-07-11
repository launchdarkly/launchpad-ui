---
'@launchpad-ui/icons': minor
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
