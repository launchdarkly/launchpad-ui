# @launchpad-ui/avatar

## 0.4.3-alpha.0

### Patch Changes

- Updated dependencies [[`aa173ae`](https://github.com/launchdarkly/launchpad-ui/commit/aa173ae6d5ede85011f7a47a0870de2e7dc527f6)]:
  - @launchpad-ui/icons@0.5.3-alpha.0

## 0.4.2

### Patch Changes

- Updated dependencies [[`9bf79e4`](https://github.com/launchdarkly/launchpad-ui/commit/9bf79e4d07192858e723900d8ab4c208872894a5)]:
  - @launchpad-ui/icons@0.5.2

## 0.4.1

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

- Updated dependencies [[`b641978`](https://github.com/launchdarkly/launchpad-ui/commit/b64197803c1ea2a38f8cc755daca4c55760718ab)]:
  - @launchpad-ui/icons@0.5.1

## 0.4.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

### Patch Changes

- Updated dependencies [[`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd)]:
  - @launchpad-ui/icons@0.5.0

## 0.3.2

### Patch Changes

- [#398](https://github.com/launchdarkly/launchpad-ui/pull/398) [`53f7908`](https://github.com/launchdarkly/launchpad-ui/commit/53f79088e0c7f0b1fd3d07cb00c1ebf92b10e5af) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Avatar] Move to CSS Modules

## 0.3.2-alpha.0

### Patch Changes

- Updated dependencies [[`e860080`](https://github.com/launchdarkly/launchpad-ui/commit/e86008076dc61cfcfc4c22317021e793d4fd59a9)]:
  - @launchpad-ui/icons@0.4.1-alpha.0

## 0.3.1

### Patch Changes

- [#338](https://github.com/launchdarkly/launchpad-ui/pull/338) [`295692f`](https://github.com/launchdarkly/launchpad-ui/commit/295692fb70f6deb1a39fbc0a6bcb92f06bb1b24c) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Avatar] Improve prop object type for Avatar component to support passing generic HTML attributes

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

### Patch Changes

- Updated dependencies [[`0ce0a50`](https://github.com/launchdarkly/launchpad-ui/commit/0ce0a50b8401ec39ef290605a2789c987c6264ce)]:
  - @launchpad-ui/icons@0.4.0

## 0.2.4

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

- Updated dependencies [[`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d), [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43)]:
  - @launchpad-ui/icons@0.3.3

## 0.2.3

### Patch Changes

- Updated dependencies [[`c5d00b2`](https://github.com/launchdarkly/launchpad-ui/commit/c5d00b204a9682a5ba3f883de4c830b67caf0c8b)]:
  - @launchpad-ui/icons@0.3.2

## 0.2.2

### Patch Changes

- [#283](https://github.com/launchdarkly/launchpad-ui/pull/283) [`2f170db`](https://github.com/launchdarkly/launchpad-ui/commit/2f170dbc653be61dd77574e13e576a18f2c7f109) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Avatar] Change avatar from flex to inline-flex

## 0.2.1

### Patch Changes

- [#280](https://github.com/launchdarkly/launchpad-ui/pull/280) [`f471218`](https://github.com/launchdarkly/launchpad-ui/commit/f4712188797cd19273ec888d1a2ff88a4d29b716) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Avatar] Add Avatar props: initials, ariaLabel, testId. Make defaultIcon prop optional.

- Updated dependencies [[`7fb3d52`](https://github.com/launchdarkly/launchpad-ui/commit/7fb3d5256821e10a4ad4892e47fa88a2a8cee94c)]:
  - @launchpad-ui/icons@0.3.1

## 0.2.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356)]:
  - @launchpad-ui/icons@0.3.0

## 0.1.3

### Patch Changes

- Updated dependencies [[`a276064`](https://github.com/launchdarkly/launchpad-ui/commit/a27606486f3aa56cd8e7772bbdda0bc0f4aa1ec6)]:
  - @launchpad-ui/icons@0.2.4

## 0.1.2

### Patch Changes

- [#240](https://github.com/launchdarkly/launchpad-ui/pull/240) [`2147008`](https://github.com/launchdarkly/launchpad-ui/commit/21470088fad06b658d2dbe44b2b10055ae56989e) Thanks [@Niznikr](https://github.com/Niznikr)! - [Avatar]: Simplify mounted hook util

## 0.1.1

### Patch Changes

- Updated dependencies [[`f567202`](https://github.com/launchdarkly/launchpad-ui/commit/f567202860088b877a2a4edbbb1c90dc0906ab3b)]:
  - @launchpad-ui/icons@0.2.3

## 0.1.0

### Minor Changes

- [#186](https://github.com/launchdarkly/launchpad-ui/pull/186) [`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4) Thanks [@Niznikr](https://github.com/Niznikr)! - Add avatar package:

  - [Icon] Add dimension enum and person icon
  - [Avatar] Add avatar code, stories, and tests

### Patch Changes

- Updated dependencies [[`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4)]:
  - @launchpad-ui/icons@0.2.2
