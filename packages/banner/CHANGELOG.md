# @launchpad-ui/banner

## 0.5.0-alpha.0

### Minor Changes

- [#368](https://github.com/launchdarkly/launchpad-ui/pull/368) [`1216745`](https://github.com/launchdarkly/launchpad-ui/commit/12167451d680618008ee9a0957062f2bf33b57a9) Thanks [@Niznikr](https://github.com/Niznikr)! - [Banner]: Use BannerKind and remove success kind:

  - Replace usage of `AlertKind` for banner kinds with `BannerKind`

* [#316](https://github.com/launchdarkly/launchpad-ui/pull/316) [`47cd7ca`](https://github.com/launchdarkly/launchpad-ui/commit/47cd7ca3c49e0585b9b80ac9a2986701dff586de) Thanks [@github-actions](https://github.com/apps/github-actions)! - [Banner]: Update styles for system message redesign project

### Patch Changes

- [#316](https://github.com/launchdarkly/launchpad-ui/pull/316) [`db79758`](https://github.com/launchdarkly/launchpad-ui/commit/db79758ae6ff29282b85a1897aec577821b8247f) Thanks [@github-actions](https://github.com/apps/github-actions)! - Integrates IconButton component into new system notification designs

  [Alert]: Update styles to accommodate new IconButton
  [Banner]: Update styles to accommodate new IconButton

* [#366](https://github.com/launchdarkly/launchpad-ui/pull/366) [`247d6bb`](https://github.com/launchdarkly/launchpad-ui/commit/247d6bb833353f8fdc8275e33e7b82f86848c3b5) Thanks [@Niznikr](https://github.com/Niznikr)! - [Banner] Update to use CSS modules

* Updated dependencies [[`e860080`](https://github.com/launchdarkly/launchpad-ui/commit/e86008076dc61cfcfc4c22317021e793d4fd59a9)]:
  - @launchpad-ui/icons@0.4.1-alpha.0

## 0.4.3

### Patch Changes

- Updated dependencies [[`91fcfae`](https://github.com/launchdarkly/launchpad-ui/commit/91fcfae53d4b7c57f4d40a7d2b6a3c0bd7cb4e62)]:
  - @launchpad-ui/button@0.6.3
  - @launchpad-ui/alert@0.3.3

## 0.4.2

### Patch Changes

- [#341](https://github.com/launchdarkly/launchpad-ui/pull/341) [`b9ce34a`](https://github.com/launchdarkly/launchpad-ui/commit/b9ce34a7393d32e9657ddd921532b3ab3a7e597b) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Banner] Improve prop object type for Banner component to support passing in generic HTML attributes

- Updated dependencies [[`0ce7371`](https://github.com/launchdarkly/launchpad-ui/commit/0ce7371aac311cf9db707381e2988bebc5873538), [`fee517a`](https://github.com/launchdarkly/launchpad-ui/commit/fee517a3ee1329d311a634ea0fad09bc37e7a33a)]:
  - @launchpad-ui/alert@0.3.2
  - @launchpad-ui/button@0.6.2

## 0.4.1

### Patch Changes

- Updated dependencies [[`143b8c6`](https://github.com/launchdarkly/launchpad-ui/commit/143b8c668986a88f335ffd28a4171c8bfafb1d9c)]:
  - @launchpad-ui/button@0.6.1
  - @launchpad-ui/alert@0.3.1

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

### Patch Changes

- Updated dependencies [[`0ce0a50`](https://github.com/launchdarkly/launchpad-ui/commit/0ce0a50b8401ec39ef290605a2789c987c6264ce)]:
  - @launchpad-ui/alert@0.3.0
  - @launchpad-ui/button@0.6.0
  - @launchpad-ui/icons@0.4.0

## 0.3.4

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
  - @launchpad-ui/alert@0.2.4

## 0.3.3

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

- Updated dependencies [[`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d), [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43)]:
  - @launchpad-ui/icons@0.3.3
  - @launchpad-ui/alert@0.2.3
  - @launchpad-ui/button@0.4.1

## 0.3.2

### Patch Changes

- Updated dependencies [[`c5d00b2`](https://github.com/launchdarkly/launchpad-ui/commit/c5d00b204a9682a5ba3f883de4c830b67caf0c8b)]:
  - @launchpad-ui/icons@0.3.2
  - @launchpad-ui/alert@0.2.2

## 0.3.1

### Patch Changes

- Updated dependencies [[`7fb3d52`](https://github.com/launchdarkly/launchpad-ui/commit/7fb3d5256821e10a4ad4892e47fa88a2a8cee94c)]:
  - @launchpad-ui/icons@0.3.1
  - @launchpad-ui/alert@0.2.1

## 0.3.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356)]:
  - @launchpad-ui/alert@0.2.0
  - @launchpad-ui/button@0.4.0
  - @launchpad-ui/icons@0.3.0

## 0.2.9

### Patch Changes

- Updated dependencies [[`a276064`](https://github.com/launchdarkly/launchpad-ui/commit/a27606486f3aa56cd8e7772bbdda0bc0f4aa1ec6), [`08b8cc0`](https://github.com/launchdarkly/launchpad-ui/commit/08b8cc0f27154e4103861b0233b979e4f4c30baa), [`9ea9b63`](https://github.com/launchdarkly/launchpad-ui/commit/9ea9b63f1db11ce782d9a1e3848ec8d22c7be634)]:
  - @launchpad-ui/icons@0.2.4
  - @launchpad-ui/button@0.3.2
  - @launchpad-ui/alert@0.1.17

## 0.2.8

### Patch Changes

- Updated dependencies [[`6bbb5e9`](https://github.com/launchdarkly/launchpad-ui/commit/6bbb5e9713180d76c6ff2cc6c3fd6b2c4f2a449c)]:
  - @launchpad-ui/button@0.3.1
  - @launchpad-ui/alert@0.1.16

## 0.2.7

### Patch Changes

- Updated dependencies [[`c1a926b`](https://github.com/launchdarkly/launchpad-ui/commit/c1a926bff13e33f89eaefc8eed588927333d4620)]:
  - @launchpad-ui/button@0.3.0
  - @launchpad-ui/alert@0.1.15

## 0.2.6

### Patch Changes

- Updated dependencies [[`f567202`](https://github.com/launchdarkly/launchpad-ui/commit/f567202860088b877a2a4edbbb1c90dc0906ab3b)]:
  - @launchpad-ui/icons@0.2.3
  - @launchpad-ui/alert@0.1.14

## 0.2.5

### Patch Changes

- Updated dependencies [[`b822656`](https://github.com/launchdarkly/launchpad-ui/commit/b82265611bbe1295cf2c4565a0ffed8e19640fd7)]:
  - @launchpad-ui/button@0.2.3
  - @launchpad-ui/alert@0.1.13

## 0.2.4

### Patch Changes

- Updated dependencies [[`6836a14`](https://github.com/launchdarkly/launchpad-ui/commit/6836a148988c7e0907920ecdcfaf4c4d8da086f8)]:
  - @launchpad-ui/alert@0.1.12

## 0.2.3

### Patch Changes

- Updated dependencies [[`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4)]:
  - @launchpad-ui/icons@0.2.2
  - @launchpad-ui/alert@0.1.11

## 0.2.2

### Patch Changes

- Updated dependencies [[`4434cca`](https://github.com/launchdarkly/launchpad-ui/commit/4434cca48c1c6025d297fb2ae5f646c726473f64), [`63ebd7e`](https://github.com/launchdarkly/launchpad-ui/commit/63ebd7ef0f7e490bec8852a71f30ee2eb5fb7ba6)]:
  - @launchpad-ui/button@0.2.2
  - @launchpad-ui/alert@0.1.10

## 0.2.1

### Patch Changes

- [#146](https://github.com/launchdarkly/launchpad-ui/pull/146) [`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alias tokens:

  - Add alias tokens and use in component styles
  - Add dark theme custom properties and deliver as `dark.css`
  - Add theme toggle in Storybook

- Updated dependencies [[`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea), [`18e7961`](https://github.com/launchdarkly/launchpad-ui/commit/18e7961b7274ca4843a0d2f3069f79a9a18af235)]:
  - @launchpad-ui/alert@0.1.9
  - @launchpad-ui/button@0.2.1
  - @launchpad-ui/icons@0.2.1
  - @launchpad-ui/tokens@0.1.5

## 0.2.0

### Minor Changes

- [#138](https://github.com/launchdarkly/launchpad-ui/pull/138) [`7918749`](https://github.com/launchdarkly/launchpad-ui/commit/79187498674a2218102f2835e58d7a735129d4f4) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Move stylesheets to styles folder in src for more consistency across packages

### Patch Changes

- Updated dependencies [[`982ce37`](https://github.com/launchdarkly/launchpad-ui/commit/982ce37db3605f091a5689a245e4517f63b67524)]:
  - @launchpad-ui/icons@0.2.0
  - @launchpad-ui/alert@0.1.8

## 0.1.3

### Patch Changes

- Updated dependencies [[`c71028b`](https://github.com/launchdarkly/launchpad-ui/commit/c71028b236caa85cc38af5644104d15da55ec1f9)]:
  - @launchpad-ui/button@0.2.0
  - @launchpad-ui/alert@0.1.7

## 0.1.2

### Patch Changes

- Updated dependencies [[`c325186`](https://github.com/launchdarkly/launchpad-ui/commit/c325186e06042d5b87ec93ed2f7fb150e96c9024)]:
  - @launchpad-ui/icons@0.1.6
  - @launchpad-ui/alert@0.1.6

## 0.1.1

### Patch Changes

- [#109](https://github.com/launchdarkly/launchpad-ui/pull/109) [`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Migrate from classnames to clsx package

- Updated dependencies [[`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28), [`015b3ed`](https://github.com/launchdarkly/launchpad-ui/commit/015b3ed8cd548266a1342055c61121a39430a402)]:
  - @launchpad-ui/alert@0.1.5
  - @launchpad-ui/button@0.1.6
  - @launchpad-ui/icons@0.1.5

## 0.1.0

### Minor Changes

- [#96](https://github.com/launchdarkly/launchpad-ui/pull/96) [`8169010`](https://github.com/launchdarkly/launchpad-ui/commit/8169010c2361ad98b75e110b34189456eac4e82d) Thanks [@Niznikr](https://github.com/Niznikr)! - Add banner package:

  - Add banner code, stories, and tests
