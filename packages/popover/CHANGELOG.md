# @launchpad-ui/popover

## 0.7.5

### Patch Changes

- [#360](https://github.com/launchdarkly/launchpad-ui/pull/360) [`c392a08`](https://github.com/launchdarkly/launchpad-ui/commit/c392a08a3d83fcd3cbc0213510c5a19174f925af) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover]: Remove commandbar focus trap logic

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.5

## 0.7.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.4

## 0.7.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.3

## 0.7.2

### Patch Changes

- [#336](https://github.com/launchdarkly/launchpad-ui/pull/336) [`28ffe4d`](https://github.com/launchdarkly/launchpad-ui/commit/28ffe4dd8608c71a5ff20c8b574b1a6d0e592a11) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover]: Stop focus trap when commandbar is open

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.2

## 0.7.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.1

## 0.7.0

### Minor Changes

- [#324](https://github.com/launchdarkly/launchpad-ui/pull/324) [`0ce0a50`](https://github.com/launchdarkly/launchpad-ui/commit/0ce0a50b8401ec39ef290605a2789c987c6264ce) Thanks [@Niznikr](https://github.com/Niznikr)! - Use vite for builds:

  Each package's styles are now located in a single `style.css` within the root:

  Before:

  ```js
  import alertStyles from '@launchpad-ui/alert/styles/Alert.css';
  ```

  After:

  ```js
  import alertStyles from '@launchpad-ui/alert/style.css';
  ```

  The `core` package no longer bundles styles. If you need to import stylesheets for the components (in a Remix app for example) simply import them from the individual packages that come included when you install the `core` package.

### Patch Changes

- Updated dependencies [[`0ce0a50`](https://github.com/launchdarkly/launchpad-ui/commit/0ce0a50b8401ec39ef290605a2789c987c6264ce)]:
  - @launchpad-ui/overlay@0.3.0

## 0.6.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.2.5

## 0.6.5

### Patch Changes

- [#306](https://github.com/launchdarkly/launchpad-ui/pull/306) [`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d) Thanks [@Niznikr](https://github.com/Niznikr)! - [Filter, Icons, Menu, Popover] Create ids with useId

* [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

* Updated dependencies []:
  - @launchpad-ui/overlay@0.2.4

## 0.6.4

### Patch Changes

- [#301](https://github.com/launchdarkly/launchpad-ui/pull/301) [`534ebde`](https://github.com/launchdarkly/launchpad-ui/commit/534ebde2f8bb6abb53cb0443f4e3b2eee0a2064f) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Popover] Change popover target prop to data-test-id

## 0.6.3

### Patch Changes

- [#299](https://github.com/launchdarkly/launchpad-ui/pull/299) [`273180e`](https://github.com/launchdarkly/launchpad-ui/commit/273180e0a8d6851292a6c33bcccaadc9efe215f6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Markdown] Add testId param to component
  [Popover] Add testId param to component
  [Progress] Add testId param to component
- Updated dependencies []:
  - @launchpad-ui/overlay@0.2.3

## 0.6.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.2.2

## 0.6.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.2.1

## 0.6.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

* [#258](https://github.com/launchdarkly/launchpad-ui/pull/258) [`dfe9d18`](https://github.com/launchdarkly/launchpad-ui/commit/dfe9d1861a1b3cc3e84583539b2446f63932512e) Thanks [@renovate](https://github.com/apps/renovate)! - [Modal, Notification, Popover] Update framer-motion to v7

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356)]:
  - @launchpad-ui/overlay@0.2.0

## 0.5.7

### Patch Changes

- [#262](https://github.com/launchdarkly/launchpad-ui/pull/262) [`d8d52bc`](https://github.com/launchdarkly/launchpad-ui/commit/d8d52bca9583789c0f1cb155812585f03d682f3f) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Popover] Add condition for empty content string when deciding to render popover.

## 0.5.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.18

## 0.5.5

### Patch Changes

- [#242](https://github.com/launchdarkly/launchpad-ui/pull/242) [`532cbe4`](https://github.com/launchdarkly/launchpad-ui/commit/532cbe4ecb0a41f4eef3725a2ccfacf7d6586011) Thanks [@Niznikr](https://github.com/Niznikr)! - [Overlay, Popover] Remove lodash

* [#235](https://github.com/launchdarkly/launchpad-ui/pull/235) [`e5e01c2`](https://github.com/launchdarkly/launchpad-ui/commit/e5e01c26a4d20686489aac7d2106b939d5071037) Thanks [@Niznikr](https://github.com/Niznikr)! - [Popover] Update to functional component:

  - [Clipboard] Remove unused prop `shouldOnlyShowTooltipAfterCopy`

* Updated dependencies [[`532cbe4`](https://github.com/launchdarkly/launchpad-ui/commit/532cbe4ecb0a41f4eef3725a2ccfacf7d6586011)]:
  - @launchpad-ui/overlay@0.1.17

## 0.5.4

### Patch Changes

- [#237](https://github.com/launchdarkly/launchpad-ui/pull/237) [`d2d29a2`](https://github.com/launchdarkly/launchpad-ui/commit/d2d29a2489ab111511e98ce1036d419d97ffa0ed) Thanks [@Niznikr](https://github.com/Niznikr)! - Update `@react-aria` for smaller bundle sizes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.16

## 0.5.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.15

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
