# @launchpad-ui/counter

## 0.3.3

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

## 0.3.2

### Patch Changes

- [#352](https://github.com/launchdarkly/launchpad-ui/pull/352) [`406b42f`](https://github.com/launchdarkly/launchpad-ui/commit/406b42f3e96fff9784b622f2597485413ade2638) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Counter] Add type to disallow children

## 0.3.1

### Patch Changes

- [#344](https://github.com/launchdarkly/launchpad-ui/pull/344) [`a11629f`](https://github.com/launchdarkly/launchpad-ui/commit/a11629fa23c8e4e9d9c353f7eb00cdbaf3e4f8e4) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Counter] Enhance object prop type for Counter so HTML attributes can be passed

## 0.3.0

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

## 0.2.1

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

## 0.2.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

## 0.1.0

### Minor Changes

- [#199](https://github.com/launchdarkly/launchpad-ui/pull/199) [`aa5e5d5`](https://github.com/launchdarkly/launchpad-ui/commit/aa5e5d5af054186cbfae08e5cbbf09beb112c46f) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add counter package:

  - [Counter] Add counter code, stories, and tests
