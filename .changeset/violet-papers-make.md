---
"@launchpad-ui/components": minor
---

Use RAC `Toast`:

**Before**

```jsx
import { SnackbarContainer, ToastQueue, ToastContainer } from '@launchpad-ui/components';

ToastQueue.success(<span>A success toast!</span>);

<ToastContainer />
<SnackbarContainer />
```

**After**

```jsx
import { SnackbarRegion, ToastRegion, toastQueue } from '@launchpad-ui/components';

toastQueue.add({ title: 'A success toast!', status: 'success' });

<ToastRegion />
<SnackbarRegion />
```