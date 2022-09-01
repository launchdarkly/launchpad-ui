# @launchpad-ui/filter

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
