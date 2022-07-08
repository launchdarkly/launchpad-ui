---
'@launchpad-ui/modal': minor
'@launchpad-ui/notification': minor
'@launchpad-ui/popover': minor
'@launchpad-ui/core': minor
---

[Modal, Notification, Popover] Remove LazyMotion:

This requires that you wrap your app with [LazyMotion](https://www.framer.com/docs/lazy-motion/) to use these components:

```jsx
import { LazyMotion, domAnimation } from 'framer-motion';

<LazyMotion features={domAnimation}>
  <App />
</LazyMotion>;
```
