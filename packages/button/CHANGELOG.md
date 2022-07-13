# @launchpad-ui/button

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
