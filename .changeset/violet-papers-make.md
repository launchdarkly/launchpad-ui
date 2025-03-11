---
"@launchpad-ui/components": minor
---

Use RAC `Toast`:

**Before**

```js
ToastQueue.success(<span>A success toast!</span>)
```

**After**

```js
toastQueue.add({ title: 'A success toast!', status: 'success' })
```