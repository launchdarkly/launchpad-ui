# @launchpad-ui/modal

## 0.5.4

### Patch Changes

- [#237](https://github.com/launchdarkly/launchpad-ui/pull/237) [`d2d29a2`](https://github.com/launchdarkly/launchpad-ui/commit/d2d29a2489ab111511e98ce1036d419d97ffa0ed) Thanks [@Niznikr](https://github.com/Niznikr)! - Update `@react-aria` for smaller bundle sizes

## 0.5.3

### Patch Changes

- Updated dependencies [[`c1a926b`](https://github.com/launchdarkly/launchpad-ui/commit/c1a926bff13e33f89eaefc8eed588927333d4620)]:
  - @launchpad-ui/button@0.3.0

## 0.5.2

### Patch Changes

- [#219](https://github.com/launchdarkly/launchpad-ui/pull/219) [`b2a8ff5`](https://github.com/launchdarkly/launchpad-ui/commit/b2a8ff5f87c95be17c5749998f74f8bcedba65e8) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Add chunk names

## 0.5.1

### Patch Changes

- [#218](https://github.com/launchdarkly/launchpad-ui/pull/218) [`204e574`](https://github.com/launchdarkly/launchpad-ui/commit/204e574344367cdd653b141d067ee6dcef74c17d) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Update framer dynamic import

- Updated dependencies [[`f567202`](https://github.com/launchdarkly/launchpad-ui/commit/f567202860088b877a2a4edbbb1c90dc0906ab3b)]:
  - @launchpad-ui/icons@0.2.3

## 0.5.0

### Minor Changes

- [#215](https://github.com/launchdarkly/launchpad-ui/pull/215) [`1fbb858`](https://github.com/launchdarkly/launchpad-ui/commit/1fbb858c8baaaa2f7cced15c81d1c2b0d49a7836) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Add LazyMotion:

  - Add `LazyMotion` to the individual components to remove the need for consumers to wrap their app with it

### Patch Changes

- Updated dependencies [[`b822656`](https://github.com/launchdarkly/launchpad-ui/commit/b82265611bbe1295cf2c4565a0ffed8e19640fd7)]:
  - @launchpad-ui/button@0.2.3

## 0.4.2

### Patch Changes

- Updated dependencies [[`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4)]:
  - @launchpad-ui/icons@0.2.2

## 0.4.1

### Patch Changes

- [#176](https://github.com/launchdarkly/launchpad-ui/pull/176) [`8314a19`](https://github.com/launchdarkly/launchpad-ui/commit/8314a19fbaa532e296b7fcfe5b05b0a1da70447f) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal] Stop escape propagation

- Updated dependencies [[`4434cca`](https://github.com/launchdarkly/launchpad-ui/commit/4434cca48c1c6025d297fb2ae5f646c726473f64)]:
  - @launchpad-ui/button@0.2.2

## 0.4.0

### Minor Changes

- [#166](https://github.com/launchdarkly/launchpad-ui/pull/166) [`d0cadcb`](https://github.com/launchdarkly/launchpad-ui/commit/d0cadcb6f13297e02fd7e8a0007b06a0bc1c66c6) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Remove LazyMotion:

  This requires that you wrap your app with [LazyMotion](https://www.framer.com/docs/lazy-motion/) to use these components:

  ```jsx
  import { LazyMotion, domAnimation } from 'framer-motion';

  <LazyMotion features={domAnimation}>
    <App />
  </LazyMotion>;
  ```

### Patch Changes

- [#164](https://github.com/launchdarkly/launchpad-ui/pull/164) [`e711a77`](https://github.com/launchdarkly/launchpad-ui/commit/e711a7753aedad207d0f8328e34dd8b5471096ae) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal] Add class to body when open

## 0.3.0

### Minor Changes

- [#148](https://github.com/launchdarkly/launchpad-ui/pull/148) [`11953df`](https://github.com/launchdarkly/launchpad-ui/commit/11953dff46822400fbb218d5a6b09ee539f43ec5) Thanks [@Niznikr](https://github.com/Niznikr)! - Update to functional component

## 0.2.1

### Patch Changes

- [#146](https://github.com/launchdarkly/launchpad-ui/pull/146) [`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alias tokens:

  - Add alias tokens and use in component styles
  - Add dark theme custom properties and deliver as `dark.css`
  - Add theme toggle in Storybook

- Updated dependencies [[`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea), [`18e7961`](https://github.com/launchdarkly/launchpad-ui/commit/18e7961b7274ca4843a0d2f3069f79a9a18af235)]:
  - @launchpad-ui/button@0.2.1
  - @launchpad-ui/icons@0.2.1
  - @launchpad-ui/tokens@0.1.5
  - @launchpad-ui/progress@0.2.1

## 0.2.0

### Minor Changes

- [#137](https://github.com/launchdarkly/launchpad-ui/pull/137) [`735ebd5`](https://github.com/launchdarkly/launchpad-ui/commit/735ebd5ac2983af54fe1e55ced68435f432476cf) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace react-spring with framer-motion:

  - Remove `ModalTransition` and use `Modal` instead

### Patch Changes

- Updated dependencies [[`7918749`](https://github.com/launchdarkly/launchpad-ui/commit/79187498674a2218102f2835e58d7a735129d4f4), [`982ce37`](https://github.com/launchdarkly/launchpad-ui/commit/982ce37db3605f091a5689a245e4517f63b67524)]:
  - @launchpad-ui/progress@0.2.0
  - @launchpad-ui/icons@0.2.0

## 0.1.5

### Patch Changes

- Updated dependencies [[`805d629`](https://github.com/launchdarkly/launchpad-ui/commit/805d629a5f09b5a16db121aedf165feff74dbde9), [`c71028b`](https://github.com/launchdarkly/launchpad-ui/commit/c71028b236caa85cc38af5644104d15da55ec1f9)]:
  - @launchpad-ui/progress@0.1.6
  - @launchpad-ui/button@0.2.0

## 0.1.4

### Patch Changes

- [#122](https://github.com/launchdarkly/launchpad-ui/pull/122) [`c325186`](https://github.com/launchdarkly/launchpad-ui/commit/c325186e06042d5b87ec93ed2f7fb150e96c9024) Thanks [@Niznikr](https://github.com/Niznikr)! - Update stateless components to functional components

- Updated dependencies [[`c325186`](https://github.com/launchdarkly/launchpad-ui/commit/c325186e06042d5b87ec93ed2f7fb150e96c9024)]:
  - @launchpad-ui/icons@0.1.6
  - @launchpad-ui/progress@0.1.5

## 0.1.3

### Patch Changes

- [#109](https://github.com/launchdarkly/launchpad-ui/pull/109) [`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Migrate from classnames to clsx package

- Updated dependencies [[`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28), [`015b3ed`](https://github.com/launchdarkly/launchpad-ui/commit/015b3ed8cd548266a1342055c61121a39430a402)]:
  - @launchpad-ui/button@0.1.6
  - @launchpad-ui/icons@0.1.5
  - @launchpad-ui/progress@0.1.4

## 0.1.2

### Patch Changes

- [#99](https://github.com/launchdarkly/launchpad-ui/pull/99) [`3ebbc38`](https://github.com/launchdarkly/launchpad-ui/commit/3ebbc38cb1dab6c1c3da1f6285fb7056a9be1d4d) Thanks [@Niznikr](https://github.com/Niznikr)! - Use lodash-es in place of per-method packages

- Updated dependencies [[`3ebbc38`](https://github.com/launchdarkly/launchpad-ui/commit/3ebbc38cb1dab6c1c3da1f6285fb7056a9be1d4d)]:
  - @launchpad-ui/progress@0.1.3

## 0.1.1

### Patch Changes

- Updated dependencies [[`64596df`](https://github.com/launchdarkly/launchpad-ui/commit/64596df8d4116e0008f135867b47a64cb175977c)]:
  - @launchpad-ui/tokens@0.1.4
  - @launchpad-ui/button@0.1.5
  - @launchpad-ui/icons@0.1.4
  - @launchpad-ui/progress@0.1.2

## 0.1.0

### Minor Changes

- [#84](https://github.com/launchdarkly/launchpad-ui/pull/84) [`7426c33`](https://github.com/launchdarkly/launchpad-ui/commit/7426c33a0df4e1080b3d49039446baf81ebe2f50) Thanks [@Niznikr](https://github.com/Niznikr)! - Add modal package:

  - Add modal code, stories, and tests
  - Update `Portal` to be SSR compatible

### Patch Changes

- Updated dependencies [[`45e786a`](https://github.com/launchdarkly/launchpad-ui/commit/45e786a9972406fbf0f93f73aeeaa81d1fded4f8)]:
  - @launchpad-ui/tokens@0.1.3
  - @launchpad-ui/button@0.1.4
  - @launchpad-ui/icons@0.1.3
  - @launchpad-ui/progress@0.1.1
