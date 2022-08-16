# @launchpad-ui/icons

## 0.3.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

## 0.2.4

### Patch Changes

- [#250](https://github.com/launchdarkly/launchpad-ui/pull/250) [`a276064`](https://github.com/launchdarkly/launchpad-ui/commit/a27606486f3aa56cd8e7772bbdda0bc0f4aa1ec6) Thanks [@vroske-ld](https://github.com/vroske-ld)! - Introduce Filter component and Check icon

  - [Filter] New package
  - [Icons] Add check icon

## 0.2.3

### Patch Changes

- [#216](https://github.com/launchdarkly/launchpad-ui/pull/216) [`f567202`](https://github.com/launchdarkly/launchpad-ui/commit/f567202860088b877a2a4edbbb1c90dc0906ab3b) Thanks [@Niznikr](https://github.com/Niznikr)! - [Icons] Add ChevronLeft, ChevronRight, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight

## 0.2.2

### Patch Changes

- [#186](https://github.com/launchdarkly/launchpad-ui/pull/186) [`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4) Thanks [@Niznikr](https://github.com/Niznikr)! - Add avatar package:

  - [Icon] Add dimension enum and person icon
  - [Avatar] Add avatar code, stories, and tests

## 0.2.1

### Patch Changes

- [#146](https://github.com/launchdarkly/launchpad-ui/pull/146) [`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alias tokens:

  - Add alias tokens and use in component styles
  - Add dark theme custom properties and deliver as `dark.css`
  - Add theme toggle in Storybook

- Updated dependencies [[`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea)]:
  - @launchpad-ui/tokens@0.1.5

## 0.2.0

### Minor Changes

- [#139](https://github.com/launchdarkly/launchpad-ui/pull/139) [`982ce37`](https://github.com/launchdarkly/launchpad-ui/commit/982ce37db3605f091a5689a245e4517f63b67524) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Move stylesheets to styles folder in src for more consistency across packages

## 0.1.6

### Patch Changes

- [#122](https://github.com/launchdarkly/launchpad-ui/pull/122) [`c325186`](https://github.com/launchdarkly/launchpad-ui/commit/c325186e06042d5b87ec93ed2f7fb150e96c9024) Thanks [@Niznikr](https://github.com/Niznikr)! - Update stateless components to functional components

## 0.1.5

### Patch Changes

- [#109](https://github.com/launchdarkly/launchpad-ui/pull/109) [`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Migrate from classnames to clsx package

## 0.1.4

### Patch Changes

- Updated dependencies [[`64596df`](https://github.com/launchdarkly/launchpad-ui/commit/64596df8d4116e0008f135867b47a64cb175977c)]:
  - @launchpad-ui/tokens@0.1.4

## 0.1.3

### Patch Changes

- Updated dependencies [[`45e786a`](https://github.com/launchdarkly/launchpad-ui/commit/45e786a9972406fbf0f93f73aeeaa81d1fded4f8)]:
  - @launchpad-ui/tokens@0.1.3

## 0.1.2

### Patch Changes

- [#40](https://github.com/launchdarkly/launchpad-ui/pull/40) [`69c5602`](https://github.com/launchdarkly/launchpad-ui/commit/69c56021b0815e2da5861a696de0453447958cf0) Thanks [@Niznikr](https://github.com/Niznikr)! - Update unknown custom properties:

  - Add `stylelint-value-no-unknown-custom-properties` to check for unknown custom props
  - Pull in vars from all stylesheets

## 0.1.1

### Patch Changes

- [#35](https://github.com/launchdarkly/launchpad-ui/pull/35) [`ed49480`](https://github.com/launchdarkly/launchpad-ui/commit/ed494805b41e86019fb31483ef3e880313f88f4e) Thanks [@Niznikr](https://github.com/Niznikr)! - Build packages first for release

- Updated dependencies [[`ed49480`](https://github.com/launchdarkly/launchpad-ui/commit/ed494805b41e86019fb31483ef3e880313f88f4e)]:
  - @launchpad-ui/tokens@0.1.2

## 0.1.0

### Minor Changes

- [#31](https://github.com/launchdarkly/launchpad-ui/pull/31) [`d5b1bce`](https://github.com/launchdarkly/launchpad-ui/commit/d5b1bce95fa35f93c69da489b0fb996079ce1090) Thanks [@Niznikr](https://github.com/Niznikr)! - Add icons package:

  - Use [SVGR](https://react-svgr.com/) to generate icon components
  - Wrap components in base Icon component for styles and a11y features
  - Add story to display all icons

### Patch Changes

- [#34](https://github.com/launchdarkly/launchpad-ui/pull/34) [`f335140`](https://github.com/launchdarkly/launchpad-ui/commit/f335140f2a29b900f93f8b9c2f8df1430e373c1a) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alert package:

  - Add alert code, stories, and tests
  - Add icons `Close` and `ExpandMore`
  - Add stylelint to lint CSS
  - Use [@parcel/css](https://github.com/parcel-bundler/parcel-css) to transform and minify styles
