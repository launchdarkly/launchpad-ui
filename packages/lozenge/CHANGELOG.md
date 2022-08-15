# @launchpad-ui/lozenge

## 0.3.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

## 0.2.3

### Patch Changes

- [#175](https://github.com/launchdarkly/launchpad-ui/pull/175) [`1601139`](https://github.com/launchdarkly/launchpad-ui/commit/16011393d1c9dda8ebd2647c6b9963984175dd21) Thanks [@jennifro](https://github.com/jennifro)! - [Lozenge] Update flag variant styles

## 0.2.2

### Patch Changes

- [#167](https://github.com/launchdarkly/launchpad-ui/pull/167) [`19ef59b`](https://github.com/launchdarkly/launchpad-ui/commit/19ef59bf64050529d8f6555a5bea1474988a4157) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update font sizing used with lozenge

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

- [#138](https://github.com/launchdarkly/launchpad-ui/pull/138) [`7918749`](https://github.com/launchdarkly/launchpad-ui/commit/79187498674a2218102f2835e58d7a735129d4f4) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Move stylesheets to styles folder in src for more consistency across packages

## 0.1.8

### Patch Changes

- [#109](https://github.com/launchdarkly/launchpad-ui/pull/109) [`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Migrate from classnames to clsx package

## 0.1.7

### Patch Changes

- Updated dependencies [[`64596df`](https://github.com/launchdarkly/launchpad-ui/commit/64596df8d4116e0008f135867b47a64cb175977c)]:
  - @launchpad-ui/tokens@0.1.4

## 0.1.6

### Patch Changes

- Updated dependencies [[`45e786a`](https://github.com/launchdarkly/launchpad-ui/commit/45e786a9972406fbf0f93f73aeeaa81d1fded4f8)]:
  - @launchpad-ui/tokens@0.1.3

## 0.1.5

### Patch Changes

- [#40](https://github.com/launchdarkly/launchpad-ui/pull/40) [`69c5602`](https://github.com/launchdarkly/launchpad-ui/commit/69c56021b0815e2da5861a696de0453447958cf0) Thanks [@Niznikr](https://github.com/Niznikr)! - Update unknown custom properties:

  - Add `stylelint-value-no-unknown-custom-properties` to check for unknown custom props
  - Pull in vars from all stylesheets

## 0.1.4

### Patch Changes

- [#35](https://github.com/launchdarkly/launchpad-ui/pull/35) [`ed49480`](https://github.com/launchdarkly/launchpad-ui/commit/ed494805b41e86019fb31483ef3e880313f88f4e) Thanks [@Niznikr](https://github.com/Niznikr)! - Build packages first for release

- Updated dependencies [[`ed49480`](https://github.com/launchdarkly/launchpad-ui/commit/ed494805b41e86019fb31483ef3e880313f88f4e)]:
  - @launchpad-ui/tokens@0.1.2

## 0.1.3

### Patch Changes

- [#34](https://github.com/launchdarkly/launchpad-ui/pull/34) [`f335140`](https://github.com/launchdarkly/launchpad-ui/commit/f335140f2a29b900f93f8b9c2f8df1430e373c1a) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alert package:

  - Add alert code, stories, and tests
  - Add icons `Close` and `ExpandMore`
  - Add stylelint to lint CSS
  - Use [@parcel/css](https://github.com/parcel-bundler/parcel-css) to transform and minify styles

## 0.1.2

### Patch Changes

- [#26](https://github.com/launchdarkly/launchpad-ui/pull/26) [`871c5c7`](https://github.com/launchdarkly/launchpad-ui/commit/871c5c7ed9e8910e4f17932e9e64dfd0e6b19261) Thanks [@Niznikr](https://github.com/Niznikr)! - Add React 18 support

## 0.1.1

### Patch Changes

- [#24](https://github.com/launchdarkly/launchpad-ui/pull/24) [`19c7ebe`](https://github.com/launchdarkly/launchpad-ui/commit/19c7ebef9229c1a2bdd34a2a43a0331ddeae5284) Thanks [@Niznikr](https://github.com/Niznikr)! - Add READMEs

- Updated dependencies [[`19c7ebe`](https://github.com/launchdarkly/launchpad-ui/commit/19c7ebef9229c1a2bdd34a2a43a0331ddeae5284)]:
  - @launchpad-ui/tokens@0.1.1

## 0.1.0

### Minor Changes

- [#16](https://github.com/launchdarkly/launchpad-ui/pull/16) [`f6ec504`](https://github.com/launchdarkly/launchpad-ui/commit/f6ec504ba6ce9d4cb12c82c627fbc29480d75171) Thanks [@Niznikr](https://github.com/Niznikr)! - Add lozenge package:

  - Add lozenge code, stories in [CSF 3.0](https://storybook.js.org/blog/component-story-format-3-0/) format, and tests for full coverage
  - Process CSS separately in esbuild script to [keep the import statement in the component](https://esbuild.github.io/content-types/#css-from-js)

### Patch Changes

- [#22](https://github.com/launchdarkly/launchpad-ui/pull/22) [`9add6fd`](https://github.com/launchdarkly/launchpad-ui/commit/9add6fde9c61325a34039d33e7a3e3362daaa072) Thanks [@Niznikr](https://github.com/Niznikr)! - Set tokens as direct dependency

* [#17](https://github.com/launchdarkly/launchpad-ui/pull/17) [`a11258e`](https://github.com/launchdarkly/launchpad-ui/commit/a11258ed0acdd53e74970ca0fe9c26318344271c) Thanks [@Niznikr](https://github.com/Niznikr)! - Include styles in exports

* Updated dependencies [[`e6e3f62`](https://github.com/launchdarkly/launchpad-ui/commit/e6e3f6278411792b20aaaf2d7eb0d213184ecc32), [`a11258e`](https://github.com/launchdarkly/launchpad-ui/commit/a11258ed0acdd53e74970ca0fe9c26318344271c)]:
  - @launchpad-ui/tokens@0.1.0
