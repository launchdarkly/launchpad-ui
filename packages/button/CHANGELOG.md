# @launchpad-ui/button

## 0.7.2-alpha.0

### Patch Changes

- [#429](https://github.com/launchdarkly/launchpad-ui/pull/429) [`97eb67b`](https://github.com/launchdarkly/launchpad-ui/commit/97eb67bf95e40709084949c03248dc5673849873) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Pin monorepo packages

## 0.7.1

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

## 0.7.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

## 0.6.3

### Patch Changes

- [#347](https://github.com/launchdarkly/launchpad-ui/pull/347) [`91fcfae`](https://github.com/launchdarkly/launchpad-ui/commit/91fcfae53d4b7c57f4d40a7d2b6a3c0bd7cb4e62) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Button] Change default button type from submit to button

## 0.6.2

### Patch Changes

- [#340](https://github.com/launchdarkly/launchpad-ui/pull/340) [`fee517a`](https://github.com/launchdarkly/launchpad-ui/commit/fee517a3ee1329d311a634ea0fad09bc37e7a33a) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Button] Improve prop object type for ButtonGroup and IconButton components to pass through HTML attributes

## 0.6.1

### Patch Changes

- [#334](https://github.com/launchdarkly/launchpad-ui/pull/334) [`143b8c6`](https://github.com/launchdarkly/launchpad-ui/commit/143b8c668986a88f335ffd28a4171c8bfafb1d9c) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Button] Update onSelect type for UploadButton component

## 0.6.0

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

## 0.5.0

### Minor Changes

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

## 0.4.1

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

## 0.4.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

## 0.3.2

### Patch Changes

- [#255](https://github.com/launchdarkly/launchpad-ui/pull/255) [`08b8cc0`](https://github.com/launchdarkly/launchpad-ui/commit/08b8cc0f27154e4103861b0233b979e4f4c30baa) Thanks [@chasedarkly](https://github.com/chasedarkly)! - - [Button] Add UploadButton to Button package

* [#254](https://github.com/launchdarkly/launchpad-ui/pull/254) [`9ea9b63`](https://github.com/launchdarkly/launchpad-ui/commit/9ea9b63f1db11ce782d9a1e3848ec8d22c7be634) Thanks [@chasedarkly](https://github.com/chasedarkly)! - - [Button] Add ButtonGroup component to Button package

## 0.3.1

### Patch Changes

- [#239](https://github.com/launchdarkly/launchpad-ui/pull/239) [`6bbb5e9`](https://github.com/launchdarkly/launchpad-ui/commit/6bbb5e9713180d76c6ff2cc6c3fd6b2c4f2a449c) Thanks [@Niznikr](https://github.com/Niznikr)! - [Button] Update forwarded ref type to `HTMLButtonElement | HTMLAnchorElement`

## 0.3.0

### Minor Changes

- [#227](https://github.com/launchdarkly/launchpad-ui/pull/227) [`c1a926b`](https://github.com/launchdarkly/launchpad-ui/commit/c1a926bff13e33f89eaefc8eed588927333d4620) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Improve Button and Clipboard ergonomics

  - [Button] Remove component prop, assign correct roles based on anchor/button rendering
  - [Clipboard] Improve slotting capabilities, default rendering to button component
  - [Notification] Consume new CopyToClipboard updates

## 0.2.3

### Patch Changes

- [#211](https://github.com/launchdarkly/launchpad-ui/pull/211) [`b822656`](https://github.com/launchdarkly/launchpad-ui/commit/b82265611bbe1295cf2c4565a0ffed8e19640fd7) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add slot to menu and remove dependency on RR for button & menu

  - [Menu]: Add slot package to remove React Router dependency, add MenuSize enum.
  - [Button]: Remove React Router dependency by generalizing the `to` prop. In the future, we will look into allowing slottable buttons.

## 0.2.2

### Patch Changes

- [#172](https://github.com/launchdarkly/launchpad-ui/pull/172) [`4434cca`](https://github.com/launchdarkly/launchpad-ui/commit/4434cca48c1c6025d297fb2ae5f646c726473f64) Thanks [@Niznikr](https://github.com/Niznikr)! - [Button] Update `to` type for rr6

## 0.2.1

### Patch Changes

- [#146](https://github.com/launchdarkly/launchpad-ui/pull/146) [`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alias tokens:

  - Add alias tokens and use in component styles
  - Add dark theme custom properties and deliver as `dark.css`
  - Add theme toggle in Storybook

* [#144](https://github.com/launchdarkly/launchpad-ui/pull/144) [`18e7961`](https://github.com/launchdarkly/launchpad-ui/commit/18e7961b7274ca4843a0d2f3069f79a9a18af235) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add shadow to hover state, bg color to destructive focus state

* Updated dependencies [[`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea)]:
  - @launchpad-ui/tokens@0.1.5

## 0.2.0

### Minor Changes

- [#131](https://github.com/launchdarkly/launchpad-ui/pull/131) [`c71028b`](https://github.com/launchdarkly/launchpad-ui/commit/c71028b236caa85cc38af5644104d15da55ec1f9) Thanks [@Niznikr](https://github.com/Niznikr)! - Update Button to functional component

## 0.1.6

### Patch Changes

- [#109](https://github.com/launchdarkly/launchpad-ui/pull/109) [`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Migrate from classnames to clsx package

* [#108](https://github.com/launchdarkly/launchpad-ui/pull/108) [`015b3ed`](https://github.com/launchdarkly/launchpad-ui/commit/015b3ed8cd548266a1342055c61121a39430a402) Thanks [@Niznikr](https://github.com/Niznikr)! - Remove duplicate custom properties

## 0.1.5

### Patch Changes

- Updated dependencies [[`64596df`](https://github.com/launchdarkly/launchpad-ui/commit/64596df8d4116e0008f135867b47a64cb175977c)]:
  - @launchpad-ui/tokens@0.1.4

## 0.1.4

### Patch Changes

- Updated dependencies [[`45e786a`](https://github.com/launchdarkly/launchpad-ui/commit/45e786a9972406fbf0f93f73aeeaa81d1fded4f8)]:
  - @launchpad-ui/tokens@0.1.3

## 0.1.3

### Patch Changes

- [#40](https://github.com/launchdarkly/launchpad-ui/pull/40) [`69c5602`](https://github.com/launchdarkly/launchpad-ui/commit/69c56021b0815e2da5861a696de0453447958cf0) Thanks [@Niznikr](https://github.com/Niznikr)! - Update unknown custom properties:

  - Add `stylelint-value-no-unknown-custom-properties` to check for unknown custom props
  - Pull in vars from all stylesheets

## 0.1.2

### Patch Changes

- [#35](https://github.com/launchdarkly/launchpad-ui/pull/35) [`ed49480`](https://github.com/launchdarkly/launchpad-ui/commit/ed494805b41e86019fb31483ef3e880313f88f4e) Thanks [@Niznikr](https://github.com/Niznikr)! - Build packages first for release

- Updated dependencies [[`ed49480`](https://github.com/launchdarkly/launchpad-ui/commit/ed494805b41e86019fb31483ef3e880313f88f4e)]:
  - @launchpad-ui/tokens@0.1.2

## 0.1.1

### Patch Changes

- [#31](https://github.com/launchdarkly/launchpad-ui/pull/31) [`d5b1bce`](https://github.com/launchdarkly/launchpad-ui/commit/d5b1bce95fa35f93c69da489b0fb996079ce1090) Thanks [@Niznikr](https://github.com/Niznikr)! - Add icons package:

  - Use [SVGR](https://react-svgr.com/) to generate icon components
  - Wrap components in base Icon component for styles and a11y features
  - Add story to display all icons

* [#34](https://github.com/launchdarkly/launchpad-ui/pull/34) [`f335140`](https://github.com/launchdarkly/launchpad-ui/commit/f335140f2a29b900f93f8b9c2f8df1430e373c1a) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alert package:

  - Add alert code, stories, and tests
  - Add icons `Close` and `ExpandMore`
  - Add stylelint to lint CSS
  - Use [@parcel/css](https://github.com/parcel-bundler/parcel-css) to transform and minify styles

## 0.1.0

### Minor Changes

- [#28](https://github.com/launchdarkly/launchpad-ui/pull/28) [`ae2d669`](https://github.com/launchdarkly/launchpad-ui/commit/ae2d66907b2259121c99741398e980e1384b9eaf) Thanks [@Niznikr](https://github.com/Niznikr)! - Add button package:

  - Add base button code, stories, and tests
  - Exclude tooltip props until that package is created
