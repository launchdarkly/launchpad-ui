# @launchpad-ui/filter

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
  - @launchpad-ui/button@0.7.1
  - @launchpad-ui/dropdown@0.5.1
  - @launchpad-ui/icons@0.5.1
  - @launchpad-ui/menu@0.6.1
  - @launchpad-ui/tooltip@0.6.1

## 0.4.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

### Patch Changes

- Updated dependencies [[`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd)]:
  - @launchpad-ui/button@0.7.0
  - @launchpad-ui/dropdown@0.5.0
  - @launchpad-ui/icons@0.5.0
  - @launchpad-ui/menu@0.6.0
  - @launchpad-ui/tooltip@0.6.0

## 0.3.8

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.4.7
  - @launchpad-ui/menu@0.5.7
  - @launchpad-ui/tooltip@0.5.6

## 0.3.7

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.4.6
  - @launchpad-ui/menu@0.5.6
  - @launchpad-ui/tooltip@0.5.5

## 0.3.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/menu@0.5.5

## 0.3.5

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.4.5
  - @launchpad-ui/menu@0.5.4
  - @launchpad-ui/tooltip@0.5.4

## 0.3.4

### Patch Changes

- Updated dependencies [[`91fcfae`](https://github.com/launchdarkly/launchpad-ui/commit/91fcfae53d4b7c57f4d40a7d2b6a3c0bd7cb4e62)]:
  - @launchpad-ui/button@0.6.3
  - @launchpad-ui/dropdown@0.4.4
  - @launchpad-ui/menu@0.5.3
  - @launchpad-ui/tooltip@0.5.3

## 0.3.3

### Patch Changes

- Updated dependencies [[`fee517a`](https://github.com/launchdarkly/launchpad-ui/commit/fee517a3ee1329d311a634ea0fad09bc37e7a33a)]:
  - @launchpad-ui/button@0.6.2
  - @launchpad-ui/dropdown@0.4.3
  - @launchpad-ui/menu@0.5.2
  - @launchpad-ui/tooltip@0.5.2

## 0.3.2

### Patch Changes

- Updated dependencies [[`143b8c6`](https://github.com/launchdarkly/launchpad-ui/commit/143b8c668986a88f335ffd28a4171c8bfafb1d9c)]:
  - @launchpad-ui/button@0.6.1
  - @launchpad-ui/dropdown@0.4.2
  - @launchpad-ui/menu@0.5.1
  - @launchpad-ui/tooltip@0.5.1

## 0.3.1

### Patch Changes

- Updated dependencies [[`f440fa1`](https://github.com/launchdarkly/launchpad-ui/commit/f440fa17747771566dcc58db873f7167093df921)]:
  - @launchpad-ui/dropdown@0.4.1

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
  - @launchpad-ui/button@0.6.0
  - @launchpad-ui/dropdown@0.4.0
  - @launchpad-ui/icons@0.4.0
  - @launchpad-ui/menu@0.5.0
  - @launchpad-ui/tooltip@0.5.0

## 0.2.9

### Patch Changes

- [#317](https://github.com/launchdarkly/launchpad-ui/pull/317) [`4f2aac1`](https://github.com/launchdarkly/launchpad-ui/commit/4f2aac1dc6c9a9901a3b24b5922c9e299a8f9d10) Thanks [@chasedarkly](https://github.com/chasedarkly)! - - Add new `IconButton` component

  - Handle button links with `asChild` instead of internally in `Button`
  - Add minimal variant for both `Button` and `IconButton`
  - Add close variant for `IconButton`
  - Consume `IconButton` in downstream components

  [Button]: Add new `IconButton` component, move link button implementation to asChild, and add minimal and close variants
  [SplitButton]: Remove `HTMLAnchorElement` type from `SplitButtonMainButton`
  [Alert]: Consume `IconButton` instead of `Button`
  [Banner]: Consume `IconButton` instead of `Button`
  [Filter]: Consume `IconButton` instead of `Button`
  [Modal]: Consume `IconButton` instead of `Button`
  [Notification]: Consume `IconButton` instead of `Button`
  [Pagination]: Consume `IconButton` instead of `Button`

- Updated dependencies [[`4f2aac1`](https://github.com/launchdarkly/launchpad-ui/commit/4f2aac1dc6c9a9901a3b24b5922c9e299a8f9d10)]:
  - @launchpad-ui/button@0.5.0
  - @launchpad-ui/dropdown@0.3.7
  - @launchpad-ui/menu@0.4.8
  - @launchpad-ui/tooltip@0.4.6

## 0.2.8

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/menu@0.4.7

## 0.2.7

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/menu@0.4.6

## 0.2.6

### Patch Changes

- [#306](https://github.com/launchdarkly/launchpad-ui/pull/306) [`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d) Thanks [@Niznikr](https://github.com/Niznikr)! - [Filter, Icons, Menu, Popover] Create ids with useId

* [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

* Updated dependencies [[`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d), [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43)]:
  - @launchpad-ui/icons@0.3.3
  - @launchpad-ui/menu@0.4.5
  - @launchpad-ui/button@0.4.1
  - @launchpad-ui/dropdown@0.3.6
  - @launchpad-ui/tooltip@0.4.5

## 0.2.5

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.3.5
  - @launchpad-ui/menu@0.4.4
  - @launchpad-ui/tooltip@0.4.4

## 0.2.4

### Patch Changes

- Updated dependencies [[`c5d00b2`](https://github.com/launchdarkly/launchpad-ui/commit/c5d00b204a9682a5ba3f883de4c830b67caf0c8b)]:
  - @launchpad-ui/icons@0.3.2
  - @launchpad-ui/dropdown@0.3.4
  - @launchpad-ui/menu@0.4.3
  - @launchpad-ui/tooltip@0.4.3

## 0.2.3

### Patch Changes

- Updated dependencies [[`b89ace7`](https://github.com/launchdarkly/launchpad-ui/commit/b89ace7f4715c9ee27b076ec3b8390c8bf0a29af)]:
  - @launchpad-ui/dropdown@0.3.3

## 0.2.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.3.2
  - @launchpad-ui/menu@0.4.2
  - @launchpad-ui/tooltip@0.4.2

## 0.2.1

### Patch Changes

- Updated dependencies [[`7fb3d52`](https://github.com/launchdarkly/launchpad-ui/commit/7fb3d5256821e10a4ad4892e47fa88a2a8cee94c)]:
  - @launchpad-ui/icons@0.3.1
  - @launchpad-ui/dropdown@0.3.1
  - @launchpad-ui/menu@0.4.1
  - @launchpad-ui/tooltip@0.4.1

## 0.2.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356)]:
  - @launchpad-ui/button@0.4.0
  - @launchpad-ui/dropdown@0.3.0
  - @launchpad-ui/icons@0.3.0
  - @launchpad-ui/menu@0.4.0
  - @launchpad-ui/tooltip@0.4.0

## 0.1.2

### Patch Changes

- Updated dependencies [[`ff2e97f`](https://github.com/launchdarkly/launchpad-ui/commit/ff2e97f1675f30c95ffa0b7772477a1961d163a3)]:
  - @launchpad-ui/tooltip@0.3.10
  - @launchpad-ui/menu@0.3.8

## 0.1.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/dropdown@0.2.9
  - @launchpad-ui/menu@0.3.7
  - @launchpad-ui/tooltip@0.3.9

## 0.1.0

### Minor Changes

- [#250](https://github.com/launchdarkly/launchpad-ui/pull/250) [`a276064`](https://github.com/launchdarkly/launchpad-ui/commit/a27606486f3aa56cd8e7772bbdda0bc0f4aa1ec6) Thanks [@vroske-ld](https://github.com/vroske-ld)! - Introduce Filter component and Check icon

  - [Filter] New package
  - [Icons] Add check icon

### Patch Changes

- [#259](https://github.com/launchdarkly/launchpad-ui/pull/259) [`ffb8b91`](https://github.com/launchdarkly/launchpad-ui/commit/ffb8b91991020e15a44ded38e02947c445ca1900) Thanks [@Niznikr](https://github.com/Niznikr)! - [Dropdown] Update to functional component:

  - [Dropdown] Extend `Popover` props
  - [Tooltip] Extend `Popover` props

* [#252](https://github.com/launchdarkly/launchpad-ui/pull/252) [`f717441`](https://github.com/launchdarkly/launchpad-ui/commit/f717441bb18e168053a920e7bc0a88402465a1eb) Thanks [@vroske-ld](https://github.com/vroske-ld)! - [Filter] name prop in AppliedFilterButton is now explicitly optional; minor refactoring

- [#256](https://github.com/launchdarkly/launchpad-ui/pull/256) [`36ad0da`](https://github.com/launchdarkly/launchpad-ui/commit/36ad0dafa1bb25f68401221df0a221c2924bc163) Thanks [@vroske-ld](https://github.com/vroske-ld)! - Updating styles for Filter components

  - [Filter] Minor updates to styles
  - [Menu] Use TextField in MenuSearch rather than raw input; minor updates to styles

- Updated dependencies [[`a276064`](https://github.com/launchdarkly/launchpad-ui/commit/a27606486f3aa56cd8e7772bbdda0bc0f4aa1ec6), [`ffb8b91`](https://github.com/launchdarkly/launchpad-ui/commit/ffb8b91991020e15a44ded38e02947c445ca1900), [`78813c2`](https://github.com/launchdarkly/launchpad-ui/commit/78813c22f8f9f2ab68d47db53135f384407329b2), [`08b8cc0`](https://github.com/launchdarkly/launchpad-ui/commit/08b8cc0f27154e4103861b0233b979e4f4c30baa), [`9ea9b63`](https://github.com/launchdarkly/launchpad-ui/commit/9ea9b63f1db11ce782d9a1e3848ec8d22c7be634), [`36ad0da`](https://github.com/launchdarkly/launchpad-ui/commit/36ad0dafa1bb25f68401221df0a221c2924bc163)]:
  - @launchpad-ui/icons@0.2.4
  - @launchpad-ui/dropdown@0.2.8
  - @launchpad-ui/tooltip@0.3.8
  - @launchpad-ui/button@0.3.2
  - @launchpad-ui/menu@0.3.6
