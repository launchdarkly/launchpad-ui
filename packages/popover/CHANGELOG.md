# @launchpad-ui/popover

## 0.5.2

### Patch Changes

- [#219](https://github.com/launchdarkly/launchpad-ui/pull/219) [`b2a8ff5`](https://github.com/launchdarkly/launchpad-ui/commit/b2a8ff5f87c95be17c5749998f74f8bcedba65e8) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Add chunk names

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.14

## 0.5.1

### Patch Changes

- [#218](https://github.com/launchdarkly/launchpad-ui/pull/218) [`204e574`](https://github.com/launchdarkly/launchpad-ui/commit/204e574344367cdd653b141d067ee6dcef74c17d) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Update framer dynamic import

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.13

## 0.5.0

### Minor Changes

- [#215](https://github.com/launchdarkly/launchpad-ui/pull/215) [`1fbb858`](https://github.com/launchdarkly/launchpad-ui/commit/1fbb858c8baaaa2f7cced15c81d1c2b0d49a7836) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Add LazyMotion:

  - Add `LazyMotion` to the individual components to remove the need for consumers to wrap their app with it

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.12

## 0.4.1

### Patch Changes

- [#208](https://github.com/launchdarkly/launchpad-ui/pull/208) [`590838e`](https://github.com/launchdarkly/launchpad-ui/commit/590838e7744058324fc5223b6cb39f01a88f6e1a) Thanks [@Niznikr](https://github.com/Niznikr)! - [Popover] Apply strategy to popover position

## 0.4.0

### Minor Changes

- [#192](https://github.com/launchdarkly/launchpad-ui/pull/192) [`eb6e44c`](https://github.com/launchdarkly/launchpad-ui/commit/eb6e44c7853a7263511cdf7aeaeb0d83a83d78b9) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Change from string literal union type to `PopoverInteractionKind` enum type used across Launchpad:

  - [Popover] Add and export `PopoverInteractionKind` type
  - [ProgressBubbles] Consume `PopoverInteractionKind`
  - [Tooltip] Consume `PopoverInteractionKind`

## 0.3.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.11

## 0.3.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.10

## 0.3.0

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

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.9

## 0.2.3

### Patch Changes

- [#161](https://github.com/launchdarkly/launchpad-ui/pull/161) [`cc0a367`](https://github.com/launchdarkly/launchpad-ui/commit/cc0a367f7d67f8c974b46c0b1ac743e7b020c0f2) Thanks [@Niznikr](https://github.com/Niznikr)! - [Popover] Handle pointer events

## 0.2.2

### Patch Changes

- Updated dependencies [[`5d5b5f3`](https://github.com/launchdarkly/launchpad-ui/commit/5d5b5f389e4bb541da909141710c59cd472d9b30)]:
  - @launchpad-ui/overlay@0.1.8

## 0.2.1

### Patch Changes

- [#146](https://github.com/launchdarkly/launchpad-ui/pull/146) [`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alias tokens:

  - Add alias tokens and use in component styles
  - Add dark theme custom properties and deliver as `dark.css`
  - Add theme toggle in Storybook

- Updated dependencies [[`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea)]:
  - @launchpad-ui/tokens@0.1.5
  - @launchpad-ui/overlay@0.1.7

## 0.2.0

### Minor Changes

- [#138](https://github.com/launchdarkly/launchpad-ui/pull/138) [`7918749`](https://github.com/launchdarkly/launchpad-ui/commit/79187498674a2218102f2835e58d7a735129d4f4) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Move stylesheets to styles folder in src for more consistency across packages

### Patch Changes

- [#137](https://github.com/launchdarkly/launchpad-ui/pull/137) [`735ebd5`](https://github.com/launchdarkly/launchpad-ui/commit/735ebd5ac2983af54fe1e55ced68435f432476cf) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace react-spring with framer-motion:

  - Remove `ModalTransition` and use `Modal` instead

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.6

## 0.1.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.5

## 0.1.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.4

## 0.1.2

### Patch Changes

- [#109](https://github.com/launchdarkly/launchpad-ui/pull/109) [`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Migrate from classnames to clsx package

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.3

## 0.1.1

### Patch Changes

- [#99](https://github.com/launchdarkly/launchpad-ui/pull/99) [`3ebbc38`](https://github.com/launchdarkly/launchpad-ui/commit/3ebbc38cb1dab6c1c3da1f6285fb7056a9be1d4d) Thanks [@Niznikr](https://github.com/Niznikr)! - Use lodash-es in place of per-method packages

- Updated dependencies [[`3ebbc38`](https://github.com/launchdarkly/launchpad-ui/commit/3ebbc38cb1dab6c1c3da1f6285fb7056a9be1d4d)]:
  - @launchpad-ui/overlay@0.1.2

## 0.1.0

### Minor Changes

- [#86](https://github.com/launchdarkly/launchpad-ui/pull/86) [`91bed3b`](https://github.com/launchdarkly/launchpad-ui/commit/91bed3bad3f7e0991cead2f563870b6c08edd577) Thanks [@Niznikr](https://github.com/Niznikr)! - Add popover package:

  - Add popover code, stories, and tests

### Patch Changes

- [#89](https://github.com/launchdarkly/launchpad-ui/pull/89) [`92b5291`](https://github.com/launchdarkly/launchpad-ui/commit/92b52917b4f8915bd121c885e72eefbb6875a16f) Thanks [@Niznikr](https://github.com/Niznikr)! - Add tooltip package:

  - Add tooltip code, stories, and tests

- Updated dependencies [[`64596df`](https://github.com/launchdarkly/launchpad-ui/commit/64596df8d4116e0008f135867b47a64cb175977c)]:
  - @launchpad-ui/tokens@0.1.4
  - @launchpad-ui/overlay@0.1.1
