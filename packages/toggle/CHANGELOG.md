# @launchpad-ui/toggle

## 0.6.6

### Patch Changes

- [#965](https://github.com/launchdarkly/launchpad-ui/pull/965) [`fec67a1c`](https://github.com/launchdarkly/launchpad-ui/commit/fec67a1c3713ae80295a437076f8d5ea59edcd58) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

- [#957](https://github.com/launchdarkly/launchpad-ui/pull/957) [`8595e29c`](https://github.com/launchdarkly/launchpad-ui/commit/8595e29caa3014143cde77800fbbeceb925ee1f2) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

## 0.6.5

### Patch Changes

- [#922](https://github.com/launchdarkly/launchpad-ui/pull/922) [`8f489f12`](https://github.com/launchdarkly/launchpad-ui/commit/8f489f1263f8641ed6b16f21765b41e23c0e7409) Thanks [@Niznikr](https://github.com/Niznikr)! - [Tokens] Add `0` and `base` suffix to default tokens:

  Primitives:

  - `lp-color-black-0`
  - `lp-color-white-0`

  Aliases:

  - `lp-color-bg-interactive-primary-base`
  - `lp-color-bg-interactive-secondary-base`
  - `lp-color-bg-interactive-tertiary-base`
  - `lp-color-bg-interactive-destructive-base`
  - `lp-color-bg-field-base`
  - `lp-color-border-field-base`
  - `lp-color-border-interactive-primary-base`
  - `lp-color-border-interactive-secondary-base`
  - `lp-color-fill-field-base`
  - `lp-color-text-feedback-base`
  - `lp-color-text-interactive-base`
  - `lp-color-text-ui-primary-base`
  - `lp-color-text-field-base`

- Updated dependencies [[`8f489f12`](https://github.com/launchdarkly/launchpad-ui/commit/8f489f1263f8641ed6b16f21765b41e23c0e7409)]:
  - @launchpad-ui/tokens@0.6.0

## 0.6.4

### Patch Changes

- Updated dependencies [[`068bf1cc`](https://github.com/launchdarkly/launchpad-ui/commit/068bf1cc5418a264c5be167cd5030b4f56bef03f)]:
  - @launchpad-ui/tokens@0.5.8

## 0.6.3

### Patch Changes

- [#900](https://github.com/launchdarkly/launchpad-ui/pull/900) [`4c9695e7`](https://github.com/launchdarkly/launchpad-ui/commit/4c9695e777b80c7a64d5ec6ef707acb0cce9dec0) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

- Updated dependencies [[`864b63c5`](https://github.com/launchdarkly/launchpad-ui/commit/864b63c5bdcdf0d52b322be6469b6edfedad4f31)]:
  - @launchpad-ui/tokens@0.5.7

## 0.6.2

### Patch Changes

- [#863](https://github.com/launchdarkly/launchpad-ui/pull/863) [`9b488612`](https://github.com/launchdarkly/launchpad-ui/commit/9b488612b0b685c6f0c1c08086c7696eb7dc3a61) Thanks [@renovate](https://github.com/apps/renovate)! - Update React Aria to v3.25.0

## 0.6.1

### Patch Changes

- Updated dependencies [[`72d37d74`](https://github.com/launchdarkly/launchpad-ui/commit/72d37d74c553e2a3c5cfe0f8bc77ee3a47222d80)]:
  - @launchpad-ui/tokens@0.5.6

## 0.6.0

### Minor Changes

- [#798](https://github.com/launchdarkly/launchpad-ui/pull/798) [`9a8b5d6e`](https://github.com/launchdarkly/launchpad-ui/commit/9a8b5d6e6cc197da8e07b435fad664276dc9040c) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Toggle]: Rework component to use label around input checkbox toggle

### Patch Changes

- Updated dependencies [[`7760fefe`](https://github.com/launchdarkly/launchpad-ui/commit/7760fefea91fddf17f15163ce05f555215dc4b90)]:
  - @launchpad-ui/tokens@0.5.5

## 0.5.5

### Patch Changes

- [#767](https://github.com/launchdarkly/launchpad-ui/pull/767) [`b6a6b17f`](https://github.com/launchdarkly/launchpad-ui/commit/b6a6b17f4635dc1c32365a81cecaf22a9c088b3b) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Bump react-aria and react-stately versions

## 0.5.4

### Patch Changes

- Updated dependencies [[`c120d56c`](https://github.com/launchdarkly/launchpad-ui/commit/c120d56c7b4045cefa5520954dc7683159768625)]:
  - @launchpad-ui/tokens@0.5.4

## 0.5.3

### Patch Changes

- Updated dependencies [[`d5bd5d0d`](https://github.com/launchdarkly/launchpad-ui/commit/d5bd5d0de1cedc2d341beced3ac8239167a85108)]:
  - @launchpad-ui/tokens@0.5.3

## 0.5.2

### Patch Changes

- Updated dependencies [[`152aef91`](https://github.com/launchdarkly/launchpad-ui/commit/152aef9126c5291586b09b703795030f52a01bb1)]:
  - @launchpad-ui/tokens@0.5.2

## 0.5.1

### Patch Changes

- Updated dependencies [[`909a0fde`](https://github.com/launchdarkly/launchpad-ui/commit/909a0fdebf57634d5c100626cb432c35eac1c661)]:
  - @launchpad-ui/tokens@0.5.1

## 0.5.0

### Minor Changes

- [#719](https://github.com/launchdarkly/launchpad-ui/pull/719) [`3cf45ed4`](https://github.com/launchdarkly/launchpad-ui/commit/3cf45ed4df4c4472cb8dcf48ef1cd5e7916a35ad) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Refactor theme targeting to support nested themes

  To migrate:
  Add `@import '@launchpad-ui/tokens/dist/themes.css';`. If you were previously importing `@import '@launchpad-ui/tokens/dist/dark.css';`, replace with the above, or remove.

  If you are modifying CSS variables based on the theme, prefer to explicitly declare the value depending on the theme. Nothing will break if you don't do this, but the code will not support nested theming if you don't explicitly set values depending on theme.

  **Instead of this:**

  ```css
  .selector {
    color: #000;

    [data-theme='dark'] & {
      color: #fff;
    }
  }
  ```

  **Prefer this:**

  ```css
  :root,
  [data-theme='default'] {
    --my-component-color-text: #000;
  }

  [data-theme='dark'] {
    --my-component-color-text: #fff;
  }

  .my-component {
    color: var(--my-component-color-text);
  }
  ```

### Patch Changes

- Updated dependencies [[`3cf45ed4`](https://github.com/launchdarkly/launchpad-ui/commit/3cf45ed4df4c4472cb8dcf48ef1cd5e7916a35ad)]:
  - @launchpad-ui/tokens@0.5.0

## 0.4.21

### Patch Changes

- [#610](https://github.com/launchdarkly/launchpad-ui/pull/610) [`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10) Thanks [@renovate](https://github.com/apps/renovate)! - Update nonmajor versions across framework

- Updated dependencies [[`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10)]:
  - @launchpad-ui/tokens@0.4.10

## 0.4.20

### Patch Changes

- Updated dependencies [[`808902f7`](https://github.com/launchdarkly/launchpad-ui/commit/808902f71c0b410adf86b0ee1683a2d36c4cdb22)]:
  - @launchpad-ui/tokens@0.4.9

## 0.4.19

### Patch Changes

- Updated dependencies [[`f2ae1a80`](https://github.com/launchdarkly/launchpad-ui/commit/f2ae1a80d678a1a61dee407b8574e4c52f55299f)]:
  - @launchpad-ui/tokens@0.4.8

## 0.4.18

### Patch Changes

- [#633](https://github.com/launchdarkly/launchpad-ui/pull/633) [`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update third party dependencies to pin versions to match consumer app

## 0.4.17

### Patch Changes

- [#629](https://github.com/launchdarkly/launchpad-ui/pull/629) [`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update Vite build tool to 4.0

- Updated dependencies [[`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde), [`b744011d`](https://github.com/launchdarkly/launchpad-ui/commit/b744011dccd525faa534f8def5ee8af2e346268a), [`94fe4b9a`](https://github.com/launchdarkly/launchpad-ui/commit/94fe4b9ada726c190701555c0f5bdca3e8ec610d)]:
  - @launchpad-ui/tokens@0.4.7

## 0.4.16

### Patch Changes

- Updated dependencies [[`9064d45c`](https://github.com/launchdarkly/launchpad-ui/commit/9064d45cf157f7ded1a11a100940bd144f410fd6)]:
  - @launchpad-ui/tokens@0.4.6

## 0.4.15

### Patch Changes

- Updated dependencies [[`c48e0b4f`](https://github.com/launchdarkly/launchpad-ui/commit/c48e0b4fff3e0792b453f9173459fd197871f3d0)]:
  - @launchpad-ui/tokens@0.4.5

## 0.4.14

### Patch Changes

- Updated dependencies [[`57484ab9`](https://github.com/launchdarkly/launchpad-ui/commit/57484ab9998ef50a32ab51bb9c0286b7be84fdb2), [`4c2dc031`](https://github.com/launchdarkly/launchpad-ui/commit/4c2dc0315fe0742ad78b706552d7c7e8e87f8e0e)]:
  - @launchpad-ui/tokens@0.4.4

## 0.4.13

### Patch Changes

- Updated dependencies [[`9b37d196`](https://github.com/launchdarkly/launchpad-ui/commit/9b37d196a691fd6a4ca0f989c4121b8683d8f7cb)]:
  - @launchpad-ui/tokens@0.4.3

## 0.4.12

### Patch Changes

- Updated dependencies [[`c0840e07`](https://github.com/launchdarkly/launchpad-ui/commit/c0840e07ba5a4f3da47b792d27680bc2549169f5)]:
  - @launchpad-ui/tokens@0.4.2

## 0.4.11

### Patch Changes

- Updated dependencies [[`353eccef`](https://github.com/launchdarkly/launchpad-ui/commit/353eccefd155dd95c0221c7e8960ca14afb4baad)]:
  - @launchpad-ui/tokens@0.4.1

## 0.4.10

### Patch Changes

- Updated dependencies [[`71549774`](https://github.com/launchdarkly/launchpad-ui/commit/71549774aad5dcd0887379beba474e2371d320e6), [`9c9429e3`](https://github.com/launchdarkly/launchpad-ui/commit/9c9429e3707c9f229357875f9278755b3f3d7eda)]:
  - @launchpad-ui/tokens@0.4.0

## 0.4.9

### Patch Changes

- Updated dependencies [[`6dc1470`](https://github.com/launchdarkly/launchpad-ui/commit/6dc1470e52b9f2f1b4dae8800fa8fd6d2bc74a46)]:
  - @launchpad-ui/tokens@0.3.2

## 0.4.8

### Patch Changes

- [`6f95e6f`](https://github.com/launchdarkly/launchpad-ui/commit/6f95e6f608459ec4e812ae36e79cad0e128db377) Thanks [@renovate[bot]](https://github.com/renovate%5Bbot%5D)! - Update dependencies

## 0.4.7

### Patch Changes

- Updated dependencies [[`d80297f`](https://github.com/launchdarkly/launchpad-ui/commit/d80297fad893c9db566ed029e302702d5f245a98)]:
  - @launchpad-ui/tokens@0.3.1

## 0.4.6

### Patch Changes

- Updated dependencies [[`baeacd7`](https://github.com/launchdarkly/launchpad-ui/commit/baeacd7b80d60f36f4962f090d87a0009f28b44e)]:
  - @launchpad-ui/tokens@0.3.0

## 0.4.5

### Patch Changes

- Updated dependencies [[`4090f93`](https://github.com/launchdarkly/launchpad-ui/commit/4090f93ba98ea6f75a7f9f7b902fafcfb9b005b3)]:
  - @launchpad-ui/tokens@0.2.0

## 0.4.4

### Patch Changes

- [#509](https://github.com/launchdarkly/launchpad-ui/pull/509) [`1e5796b`](https://github.com/launchdarkly/launchpad-ui/commit/1e5796b7b99a2704bba22623a518ff7e8776ebf8) Thanks [@Niznikr](https://github.com/Niznikr)! - Update dependencies

## 0.4.3

### Patch Changes

- [#449](https://github.com/launchdarkly/launchpad-ui/pull/449) [`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Pin monorepo packages

## 0.4.3-alpha.0

### Patch Changes

- [#429](https://github.com/launchdarkly/launchpad-ui/pull/429) [`97eb67b`](https://github.com/launchdarkly/launchpad-ui/commit/97eb67bf95e40709084949c03248dc5673849873) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Pin monorepo packages

## 0.4.2

### Patch Changes

- [#418](https://github.com/launchdarkly/launchpad-ui/pull/418) [`eda2e2a`](https://github.com/launchdarkly/launchpad-ui/commit/eda2e2afc833896d4afec98ced054e1239f18310) Thanks [@Niznikr](https://github.com/Niznikr)! - [Toggle] Update to css modules

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

## 0.3.1

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

## 0.3.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

## 0.2.2

### Patch Changes

- [#237](https://github.com/launchdarkly/launchpad-ui/pull/237) [`d2d29a2`](https://github.com/launchdarkly/launchpad-ui/commit/d2d29a2489ab111511e98ce1036d419d97ffa0ed) Thanks [@Niznikr](https://github.com/Niznikr)! - Update `@react-aria` for smaller bundle sizes

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

## 0.1.3

### Patch Changes

- [#109](https://github.com/launchdarkly/launchpad-ui/pull/109) [`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Migrate from classnames to clsx package

## 0.1.2

### Patch Changes

- Updated dependencies [[`64596df`](https://github.com/launchdarkly/launchpad-ui/commit/64596df8d4116e0008f135867b47a64cb175977c)]:
  - @launchpad-ui/tokens@0.1.4

## 0.1.1

### Patch Changes

- Updated dependencies [[`45e786a`](https://github.com/launchdarkly/launchpad-ui/commit/45e786a9972406fbf0f93f73aeeaa81d1fded4f8)]:
  - @launchpad-ui/tokens@0.1.3

## 0.1.0

### Minor Changes

- [#38](https://github.com/launchdarkly/launchpad-ui/pull/38) [`7a77ecf`](https://github.com/launchdarkly/launchpad-ui/commit/7a77ecfeae37faafc3d3e6dcb6704690937e9362) Thanks [@Niznikr](https://github.com/Niznikr)! - Add toggle package:

  - Add toggle code, stories, and tests
  - Add Storybook utils
