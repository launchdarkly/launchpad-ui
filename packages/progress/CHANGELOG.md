# @launchpad-ui/progress

## 0.5.2

### Patch Changes

- [#449](https://github.com/launchdarkly/launchpad-ui/pull/449) [`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Pin monorepo packages

## 0.5.2

### Patch Changes

- [#441](https://github.com/launchdarkly/launchpad-ui/pull/441) [`e48eb1a`](https://github.com/launchdarkly/launchpad-ui/commit/e48eb1a8b2f914fe701c345089793c1d43cae1af) Thanks [@Niznikr](https://github.com/Niznikr)! - [Progress] Update to css modules

## 0.5.1

### Patch Changes

- [#409](https://github.com/launchdarkly/launchpad-ui/pull/409) [`b641978`](https://github.com/launchdarkly/launchpad-ui/commit/b64197803c1ea2a38f8cc755daca4c55760718ab) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Added explicit `data-test-id` properties to components and reworked e2e test to use them instead of classname, in preparation for removal of stable class names

  [Alert] Add `data-test-id` with default value to components
  [Avatar] Add `data-test-id` with default value to components
  [Banner] Add `data-test-id` with default value to components
  [Button] Add `data-test-id` with default value to components
  [Chip] Add `data-test-id` with default value to components
  [Clipboard] Add `data-test-id` with default value to components
  [Counter] Add `data-test-id` with default value to components
  [Dropdown] Add `data-test-id` with default value to components
  [Filter] Add `data-test-id` with default value to components
  [Form] Add `data-test-id` with default value to components
  [Icons] Add `data-test-id` with default value to components
  [Markdown] Add `data-test-id` with default value to components
  [Menu] Add `data-test-id` with default value to components
  [Modal] Add `data-test-id` with default value to components
  [Navigation] Add `data-test-id` with default value to components
  [Notification] Add `data-test-id` with default value to components
  [Pagination] Add `data-test-id` with default value to components
  [Popover] Add `data-test-id` with default value to components
  [Progress] Add `data-test-id` with default value to components
  [Progress] Add `data-test-id` with default value to components
  [Slider] Add `data-test-id` with default value to components
  [Split] Add `data-test-id` with default value to components
  [Tab] Add `data-test-id` with default value to components
  [Table] Add `data-test-id` with default value to components
  [Toggle] Add `data-test-id` with default value to components
  [Tooltip] Add `data-test-id` with default value to components

## 0.5.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

## 0.4.0

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

## 0.3.2

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

## 0.3.1

### Patch Changes

- [#299](https://github.com/launchdarkly/launchpad-ui/pull/299) [`273180e`](https://github.com/launchdarkly/launchpad-ui/commit/273180e0a8d6851292a6c33bcccaadc9efe215f6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Markdown] Add testId param to component
  [Popover] Add testId param to component
  [Progress] Add testId param to component

## 0.3.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

## 0.2.2

### Patch Changes

- [#246](https://github.com/launchdarkly/launchpad-ui/pull/246) [`3d1d8c8`](https://github.com/launchdarkly/launchpad-ui/commit/3d1d8c8ebb855c1263f4ffd5b766fda9aa134ddc) Thanks [@Niznikr](https://github.com/Niznikr)! - [Progress] Remove lodash

## 0.2.1

### Patch Changes

- Updated dependencies [[`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea)]:
  - @launchpad-ui/tokens@0.1.5

## 0.2.0

### Minor Changes

- [#138](https://github.com/launchdarkly/launchpad-ui/pull/138) [`7918749`](https://github.com/launchdarkly/launchpad-ui/commit/79187498674a2218102f2835e58d7a735129d4f4) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Move stylesheets to styles folder in src for more consistency across packages

## 0.1.6

### Patch Changes

- [#130](https://github.com/launchdarkly/launchpad-ui/pull/130) [`805d629`](https://github.com/launchdarkly/launchpad-ui/commit/805d629a5f09b5a16db121aedf165feff74dbde9) Thanks [@Niznikr](https://github.com/Niznikr)! - Update `DelayedIndicator` to functional component

## 0.1.5

### Patch Changes

- [#122](https://github.com/launchdarkly/launchpad-ui/pull/122) [`c325186`](https://github.com/launchdarkly/launchpad-ui/commit/c325186e06042d5b87ec93ed2f7fb150e96c9024) Thanks [@Niznikr](https://github.com/Niznikr)! - Update stateless components to functional components

## 0.1.4

### Patch Changes

- [#109](https://github.com/launchdarkly/launchpad-ui/pull/109) [`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Migrate from classnames to clsx package

## 0.1.3

### Patch Changes

- [#99](https://github.com/launchdarkly/launchpad-ui/pull/99) [`3ebbc38`](https://github.com/launchdarkly/launchpad-ui/commit/3ebbc38cb1dab6c1c3da1f6285fb7056a9be1d4d) Thanks [@Niznikr](https://github.com/Niznikr)! - Use lodash-es in place of per-method packages

## 0.1.2

### Patch Changes

- Updated dependencies [[`64596df`](https://github.com/launchdarkly/launchpad-ui/commit/64596df8d4116e0008f135867b47a64cb175977c)]:
  - @launchpad-ui/tokens@0.1.4

## 0.1.1

### Patch Changes

- Updated dependencies [[`45e786a`](https://github.com/launchdarkly/launchpad-ui/commit/45e786a9972406fbf0f93f73aeeaa81d1fded4f8)]:
  - @launchpad-ui/tokens@0.1.3

## 0.1.0

### Minor Changes

- [#56](https://github.com/launchdarkly/launchpad-ui/pull/56) [`73deeea`](https://github.com/launchdarkly/launchpad-ui/commit/73deeea5a760cf66046dce595aee40c7041fbafd) Thanks [@Niznikr](https://github.com/Niznikr)! - Add progress package:

  - Add progress code, stories, and tests
