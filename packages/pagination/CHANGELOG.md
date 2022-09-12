# @launchpad-ui/pagination

## 0.3.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

### Patch Changes

- Updated dependencies [[`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd)]:
  - @launchpad-ui/button@0.7.0
  - @launchpad-ui/icons@0.5.0
  - @launchpad-ui/progress@0.5.0

## 0.2.5-alpha.0

### Patch Changes

- Updated dependencies [[`e860080`](https://github.com/launchdarkly/launchpad-ui/commit/e86008076dc61cfcfc4c22317021e793d4fd59a9)]:
  - @launchpad-ui/icons@0.4.1-alpha.0

## 0.2.4

### Patch Changes

- [`f44797d`](https://github.com/launchdarkly/launchpad-ui/commit/f44797df5c09a9125de600de5112557b399a3542) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Pagination] Enhance component prop API to allow HTML attribute passthrough

## 0.2.3

### Patch Changes

- Updated dependencies [[`91fcfae`](https://github.com/launchdarkly/launchpad-ui/commit/91fcfae53d4b7c57f4d40a7d2b6a3c0bd7cb4e62)]:
  - @launchpad-ui/button@0.6.3

## 0.2.2

### Patch Changes

- Updated dependencies [[`fee517a`](https://github.com/launchdarkly/launchpad-ui/commit/fee517a3ee1329d311a634ea0fad09bc37e7a33a)]:
  - @launchpad-ui/button@0.6.2

## 0.2.1

### Patch Changes

- Updated dependencies [[`143b8c6`](https://github.com/launchdarkly/launchpad-ui/commit/143b8c668986a88f335ffd28a4171c8bfafb1d9c)]:
  - @launchpad-ui/button@0.6.1

## 0.2.0

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
  - @launchpad-ui/icons@0.4.0
  - @launchpad-ui/progress@0.4.0

## 0.1.4

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

## 0.1.3

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

- Updated dependencies [[`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d), [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43)]:
  - @launchpad-ui/icons@0.3.3
  - @launchpad-ui/button@0.4.1
  - @launchpad-ui/progress@0.3.2

## 0.1.2

### Patch Changes

- Updated dependencies [[`273180e`](https://github.com/launchdarkly/launchpad-ui/commit/273180e0a8d6851292a6c33bcccaadc9efe215f6), [`c5d00b2`](https://github.com/launchdarkly/launchpad-ui/commit/c5d00b204a9682a5ba3f883de4c830b67caf0c8b)]:
  - @launchpad-ui/progress@0.3.1
  - @launchpad-ui/icons@0.3.2

## 0.1.1

### Patch Changes

- Updated dependencies [[`7fb3d52`](https://github.com/launchdarkly/launchpad-ui/commit/7fb3d5256821e10a4ad4892e47fa88a2a8cee94c)]:
  - @launchpad-ui/icons@0.3.1

## 0.1.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356)]:
  - @launchpad-ui/button@0.4.0
  - @launchpad-ui/icons@0.3.0
  - @launchpad-ui/progress@0.3.0

## 0.0.7

### Patch Changes

- Updated dependencies [[`a276064`](https://github.com/launchdarkly/launchpad-ui/commit/a27606486f3aa56cd8e7772bbdda0bc0f4aa1ec6), [`08b8cc0`](https://github.com/launchdarkly/launchpad-ui/commit/08b8cc0f27154e4103861b0233b979e4f4c30baa), [`9ea9b63`](https://github.com/launchdarkly/launchpad-ui/commit/9ea9b63f1db11ce782d9a1e3848ec8d22c7be634)]:
  - @launchpad-ui/icons@0.2.4
  - @launchpad-ui/button@0.3.2

## 0.0.6

### Patch Changes

- Updated dependencies [[`6bbb5e9`](https://github.com/launchdarkly/launchpad-ui/commit/6bbb5e9713180d76c6ff2cc6c3fd6b2c4f2a449c), [`3d1d8c8`](https://github.com/launchdarkly/launchpad-ui/commit/3d1d8c8ebb855c1263f4ffd5b766fda9aa134ddc)]:
  - @launchpad-ui/button@0.3.1
  - @launchpad-ui/progress@0.2.2

## 0.0.5

### Patch Changes

- [#237](https://github.com/launchdarkly/launchpad-ui/pull/237) [`d2d29a2`](https://github.com/launchdarkly/launchpad-ui/commit/d2d29a2489ab111511e98ce1036d419d97ffa0ed) Thanks [@Niznikr](https://github.com/Niznikr)! - Update `@react-aria` for smaller bundle sizes

## 0.0.4

### Patch Changes

- Updated dependencies [[`c1a926b`](https://github.com/launchdarkly/launchpad-ui/commit/c1a926bff13e33f89eaefc8eed588927333d4620)]:
  - @launchpad-ui/button@0.3.0

## 0.0.3

### Patch Changes

- Updated dependencies [[`f567202`](https://github.com/launchdarkly/launchpad-ui/commit/f567202860088b877a2a4edbbb1c90dc0906ab3b)]:
  - @launchpad-ui/icons@0.2.3

## 0.0.2

### Patch Changes

- Updated dependencies [[`b822656`](https://github.com/launchdarkly/launchpad-ui/commit/b82265611bbe1295cf2c4565a0ffed8e19640fd7)]:
  - @launchpad-ui/button@0.2.3
