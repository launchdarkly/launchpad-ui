# @launchpad-ui/notification

## 0.2.5

### Patch Changes

- Updated dependencies [[`b822656`](https://github.com/launchdarkly/launchpad-ui/commit/b82265611bbe1295cf2c4565a0ffed8e19640fd7)]:
  - @launchpad-ui/button@0.2.3
  - @launchpad-ui/clipboard@0.2.10

## 0.2.4

### Patch Changes

- [#204](https://github.com/launchdarkly/launchpad-ui/pull/204) [`1e74d18`](https://github.com/launchdarkly/launchpad-ui/commit/1e74d1803e22b675abf1195f798da85092a5d33a) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Remove disabling no-descending-specificity rules in packages:

  [Notification]: Refactored stylesheets to remove no-descending-specificity disable rules
  [Form]: Refactored stylesheets to remove no-descending-specificity disable rules
  [ProgressBubbles]: Refactored stylesheets to remove no-descending-specificity disable rules
  [Menu]: Refactored stylesheets to remove no-descending-specificity disable rules

- Updated dependencies []:
  - @launchpad-ui/clipboard@0.2.9

## 0.2.3

### Patch Changes

- Updated dependencies [[`814d444`](https://github.com/launchdarkly/launchpad-ui/commit/814d444146667c0f7f384772032a96252e0c1b57)]:
  - @launchpad-ui/clipboard@0.2.8

## 0.2.2

### Patch Changes

- [#196](https://github.com/launchdarkly/launchpad-ui/pull/196) [`fe655ed`](https://github.com/launchdarkly/launchpad-ui/commit/fe655ed4fbae593826f9f872e80dfbca5cd0baf7) Thanks [@Niznikr](https://github.com/Niznikr)! - [Notification] Increase close button specificity

- Updated dependencies [[`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4)]:
  - @launchpad-ui/icons@0.2.2
  - @launchpad-ui/clipboard@0.2.7

## 0.2.1

### Patch Changes

- [#174](https://github.com/launchdarkly/launchpad-ui/pull/174) [`3052465`](https://github.com/launchdarkly/launchpad-ui/commit/30524654c1c553623ea7633ca6d27c003acc1729) Thanks [@Niznikr](https://github.com/Niznikr)! - [Notification] Add json prop

- Updated dependencies [[`4434cca`](https://github.com/launchdarkly/launchpad-ui/commit/4434cca48c1c6025d297fb2ae5f646c726473f64)]:
  - @launchpad-ui/button@0.2.2
  - @launchpad-ui/clipboard@0.2.6

## 0.2.0

### Minor Changes

- [#166](https://github.com/launchdarkly/launchpad-ui/pull/166) [`d0cadcb`](https://github.com/launchdarkly/launchpad-ui/commit/d0cadcb6f13297e02fd7e8a0007b06a0bc1c66c6) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Remove LazyMotion:

  This requires that you wrap your app with [LazyMotion](https://www.framer.com/docs/lazy-motion/) to use these components:

  ```jsx
  import { LazyMotion, domAnimation } from 'framer-motion';

  <LazyMotion features={domAnimation}>
    <App />
  </LazyMotion>;
  ```

## 0.1.6

### Patch Changes

- [#146](https://github.com/launchdarkly/launchpad-ui/pull/146) [`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alias tokens:

  - Add alias tokens and use in component styles
  - Add dark theme custom properties and deliver as `dark.css`
  - Add theme toggle in Storybook

- Updated dependencies [[`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea), [`18e7961`](https://github.com/launchdarkly/launchpad-ui/commit/18e7961b7274ca4843a0d2f3069f79a9a18af235)]:
  - @launchpad-ui/button@0.2.1
  - @launchpad-ui/icons@0.2.1
  - @launchpad-ui/tokens@0.1.5

## 0.1.5

### Patch Changes

- [#137](https://github.com/launchdarkly/launchpad-ui/pull/137) [`735ebd5`](https://github.com/launchdarkly/launchpad-ui/commit/735ebd5ac2983af54fe1e55ced68435f432476cf) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace react-spring with framer-motion:

  - Remove `ModalTransition` and use `Modal` instead

- Updated dependencies [[`982ce37`](https://github.com/launchdarkly/launchpad-ui/commit/982ce37db3605f091a5689a245e4517f63b67524)]:
  - @launchpad-ui/icons@0.2.0

## 0.1.4

### Patch Changes

- Updated dependencies [[`c71028b`](https://github.com/launchdarkly/launchpad-ui/commit/c71028b236caa85cc38af5644104d15da55ec1f9)]:
  - @launchpad-ui/button@0.2.0

## 0.1.3

### Patch Changes

- Updated dependencies [[`c325186`](https://github.com/launchdarkly/launchpad-ui/commit/c325186e06042d5b87ec93ed2f7fb150e96c9024)]:
  - @launchpad-ui/icons@0.1.6

## 0.1.2

### Patch Changes

- [#102](https://github.com/launchdarkly/launchpad-ui/pull/102) [`a8a8b06`](https://github.com/launchdarkly/launchpad-ui/commit/a8a8b06d9f6aa83408f029742bd25ef8443721e8) Thanks [@Niznikr](https://github.com/Niznikr)! - Add menu package:

  - Add menu code, stories, and tests

* [#109](https://github.com/launchdarkly/launchpad-ui/pull/109) [`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Migrate from classnames to clsx package

* Updated dependencies [[`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28), [`015b3ed`](https://github.com/launchdarkly/launchpad-ui/commit/015b3ed8cd548266a1342055c61121a39430a402)]:
  - @launchpad-ui/button@0.1.6
  - @launchpad-ui/icons@0.1.5

## 0.1.1

### Patch Changes

- [#94](https://github.com/launchdarkly/launchpad-ui/pull/94) [`5545b66`](https://github.com/launchdarkly/launchpad-ui/commit/5545b6666d2f42c47277d927cf679ea4f98c722c) Thanks [@Niznikr](https://github.com/Niznikr)! - Use React Aria to trap focus

## 0.1.0

### Minor Changes

- [#87](https://github.com/launchdarkly/launchpad-ui/pull/87) [`64596df`](https://github.com/launchdarkly/launchpad-ui/commit/64596df8d4116e0008f135867b47a64cb175977c) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add the notification package:

  - Add notification code and tests
  - Add notification center code and tests
  - Add line-height tokens to tokens package

### Patch Changes

- Updated dependencies [[`64596df`](https://github.com/launchdarkly/launchpad-ui/commit/64596df8d4116e0008f135867b47a64cb175977c)]:
  - @launchpad-ui/tokens@0.1.4
  - @launchpad-ui/button@0.1.5
  - @launchpad-ui/icons@0.1.4
