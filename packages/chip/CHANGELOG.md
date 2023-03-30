# @launchpad-ui/chip

## 0.7.8

### Patch Changes

- Updated dependencies [[`7760fefe`](https://github.com/launchdarkly/launchpad-ui/commit/7760fefea91fddf17f15163ce05f555215dc4b90), [`6bd95d9f`](https://github.com/launchdarkly/launchpad-ui/commit/6bd95d9f8c3911c8d53d61f59b304881043c6fd9)]:
  - @launchpad-ui/tokens@0.5.5
  - @launchpad-ui/icons@0.8.3

## 0.7.7

### Patch Changes

- [#785](https://github.com/launchdarkly/launchpad-ui/pull/785) [`e598c7c4`](https://github.com/launchdarkly/launchpad-ui/commit/e598c7c4a7e00416bf279aa2cb5e02c152c13ec7) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Chip]: Update sizing to match height-based schema, introduce icon prop
  [Tag]: Add onTagClick prop and interactive styles
  [Navigation]: Fix NavItem chip styles that were overriding defaults

## 0.7.6

### Patch Changes

- Updated dependencies [[`c120d56c`](https://github.com/launchdarkly/launchpad-ui/commit/c120d56c7b4045cefa5520954dc7683159768625)]:
  - @launchpad-ui/tokens@0.5.4

## 0.7.5

### Patch Changes

- Updated dependencies [[`d5bd5d0d`](https://github.com/launchdarkly/launchpad-ui/commit/d5bd5d0de1cedc2d341beced3ac8239167a85108)]:
  - @launchpad-ui/tokens@0.5.3

## 0.7.4

### Patch Changes

- [`152aef91`](https://github.com/launchdarkly/launchpad-ui/commit/152aef9126c5291586b09b703795030f52a01bb1) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Clipboard]: Update default button styles to match Button styling
  [Button]: Remove unused CSS variables
  [Tokens]: Add `:root` to default theme variables
  [Chip]: Update darkmode default chip color
- Updated dependencies [[`152aef91`](https://github.com/launchdarkly/launchpad-ui/commit/152aef9126c5291586b09b703795030f52a01bb1)]:
  - @launchpad-ui/tokens@0.5.2

## 0.7.3

### Patch Changes

- [#730](https://github.com/launchdarkly/launchpad-ui/pull/730) [`909a0fde`](https://github.com/launchdarkly/launchpad-ui/commit/909a0fdebf57634d5c100626cb432c35eac1c661) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Tokens] Add `lp-white-200` color
  [Chip] Modify default bg colors
- Updated dependencies [[`909a0fde`](https://github.com/launchdarkly/launchpad-ui/commit/909a0fdebf57634d5c100626cb432c35eac1c661)]:
  - @launchpad-ui/tokens@0.5.1

## 0.7.2

### Patch Changes

- [#728](https://github.com/launchdarkly/launchpad-ui/pull/728) [`7205f0ee`](https://github.com/launchdarkly/launchpad-ui/commit/7205f0ee17bed5fc7ad2920a9acd16b41e71f48b) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Chip]

  - Deprecate `label` variant
  - Remove `legacy` variant, design decided to reduce padding back to 24px total height, making legacy unnecessary.
  - Deprecate `subtle` variants
  - Update normal and small sizing

## 0.7.1

### Patch Changes

- [#724](https://github.com/launchdarkly/launchpad-ui/pull/724) [`0ed1d8ea`](https://github.com/launchdarkly/launchpad-ui/commit/0ed1d8ea0746e6721fc66ebc8bfe8109df8339ce) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Chip] Add size variants and deprecate unused variants

## 0.7.0

### Minor Changes

- [#723](https://github.com/launchdarkly/launchpad-ui/pull/723) [`a6879755`](https://github.com/launchdarkly/launchpad-ui/commit/a687975555b50b83487451ba1e1552fda41ddbb9) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Chip]: Remove `large` variant and `size` prop from component

- [#722](https://github.com/launchdarkly/launchpad-ui/pull/722) [`e267c45a`](https://github.com/launchdarkly/launchpad-ui/commit/e267c45a6b3592e6193637f5b8ddc12a09c0eb75) Thanks [@jagarnica](https://github.com/jagarnica)! - [Chip] Update all Chip styles

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

## 0.6.20

### Patch Changes

- [#610](https://github.com/launchdarkly/launchpad-ui/pull/610) [`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10) Thanks [@renovate](https://github.com/apps/renovate)! - Update nonmajor versions across framework

- Updated dependencies [[`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10)]:
  - @launchpad-ui/tokens@0.4.10

## 0.6.19

### Patch Changes

- Updated dependencies [[`808902f7`](https://github.com/launchdarkly/launchpad-ui/commit/808902f71c0b410adf86b0ee1683a2d36c4cdb22)]:
  - @launchpad-ui/tokens@0.4.9

## 0.6.18

### Patch Changes

- Updated dependencies [[`f2ae1a80`](https://github.com/launchdarkly/launchpad-ui/commit/f2ae1a80d678a1a61dee407b8574e4c52f55299f)]:
  - @launchpad-ui/tokens@0.4.8

## 0.6.17

### Patch Changes

- [#633](https://github.com/launchdarkly/launchpad-ui/pull/633) [`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update third party dependencies to pin versions to match consumer app

## 0.6.16

### Patch Changes

- [#629](https://github.com/launchdarkly/launchpad-ui/pull/629) [`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update Vite build tool to 4.0

- Updated dependencies [[`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde), [`b744011d`](https://github.com/launchdarkly/launchpad-ui/commit/b744011dccd525faa534f8def5ee8af2e346268a), [`94fe4b9a`](https://github.com/launchdarkly/launchpad-ui/commit/94fe4b9ada726c190701555c0f5bdca3e8ec610d)]:
  - @launchpad-ui/tokens@0.4.7

## 0.6.15

### Patch Changes

- Updated dependencies [[`9064d45c`](https://github.com/launchdarkly/launchpad-ui/commit/9064d45cf157f7ded1a11a100940bd144f410fd6)]:
  - @launchpad-ui/tokens@0.4.6

## 0.6.14

### Patch Changes

- Updated dependencies [[`c48e0b4f`](https://github.com/launchdarkly/launchpad-ui/commit/c48e0b4fff3e0792b453f9173459fd197871f3d0)]:
  - @launchpad-ui/tokens@0.4.5

## 0.6.13

### Patch Changes

- Updated dependencies [[`57484ab9`](https://github.com/launchdarkly/launchpad-ui/commit/57484ab9998ef50a32ab51bb9c0286b7be84fdb2), [`4c2dc031`](https://github.com/launchdarkly/launchpad-ui/commit/4c2dc0315fe0742ad78b706552d7c7e8e87f8e0e)]:
  - @launchpad-ui/tokens@0.4.4

## 0.6.12

### Patch Changes

- [#609](https://github.com/launchdarkly/launchpad-ui/pull/609) [`9b37d196`](https://github.com/launchdarkly/launchpad-ui/commit/9b37d196a691fd6a4ca0f989c4121b8683d8f7cb) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Improve themability support in alert and banner

  [Alert]: Improve themability of component
  [Banner]: Improve themability of component
  [Chip]: Move to newly named feedback token
  [Tokens]: Add feedback tokens

- Updated dependencies [[`9b37d196`](https://github.com/launchdarkly/launchpad-ui/commit/9b37d196a691fd6a4ca0f989c4121b8683d8f7cb)]:
  - @launchpad-ui/tokens@0.4.3

## 0.6.11

### Patch Changes

- [#601](https://github.com/launchdarkly/launchpad-ui/pull/601) [`98d47324`](https://github.com/launchdarkly/launchpad-ui/commit/98d4732434a2fa223736d929ca0701f4c8d59f1e) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Improve theming for chip, drawer, and navigation components

  [Chip]:

  - Deprecate `flag` and `invited` variants. `invited` is now unused, and `flag` is moved out of design system.
  - Improve darkmode theming for all variants.
  - Move `Chip--topbar` out of design system.
  - Add storybook stories for subtle variant

  [Drawer]: Improve theming for drawer shadow.

  [Navigation]:

  - Add `border-radius: 0` to items to prevent override from consumer apps.
  - Update primary navigation background color.

## 0.6.10

### Patch Changes

- Updated dependencies [[`c0840e07`](https://github.com/launchdarkly/launchpad-ui/commit/c0840e07ba5a4f3da47b792d27680bc2549169f5)]:
  - @launchpad-ui/tokens@0.4.2

## 0.6.9

### Patch Changes

- Updated dependencies [[`353eccef`](https://github.com/launchdarkly/launchpad-ui/commit/353eccefd155dd95c0221c7e8960ca14afb4baad)]:
  - @launchpad-ui/tokens@0.4.1

## 0.6.8

### Patch Changes

- [#597](https://github.com/launchdarkly/launchpad-ui/pull/597) [`71549774`](https://github.com/launchdarkly/launchpad-ui/commit/71549774aad5dcd0887379beba474e2371d320e6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update theme tokens and usage in LaunchPad

  [Tokens]:

  - Add `lp-color-border-ui-secondary` token
  - Update `lp-color-shadow-ui-primary` token value to improve design

  [Table]: Improve theming support for table header and row borders

  [TabList]: Improve theming support for TabList items

  [Counter]: Switch to `lp-color-border-ui-secondary` border style

  [Modal]: Switch to `lp-color-border-ui-secondary` border style

  [Button]: Explicitly specify a color for `close` kind buttons

  [Avatar]: Improve theming support for avatar component

  [Chip]: Improve theming support for label chip

- [#595](https://github.com/launchdarkly/launchpad-ui/pull/595) [`9c9429e3`](https://github.com/launchdarkly/launchpad-ui/commit/9c9429e3707c9f229357875f9278755b3f3d7eda) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update theme tokens

  [Tokens]:

  - Add `lp-color-shadow-ui-primary`
  - Add a dark theme value to `lp-color-border-ui-primary`
  - Rename `lp-border-radius` to `lp-border-radius-regular` and add `lp-border-radius-medium`

  [Alert]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Button]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Chip]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Alert]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Form]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Menu]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Popover]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Clipboard]: Support theming in `CopyCodeButton`

  [Filter]:

  - Rename `lp-border-radius` to `lp-border-radius-regular`
  - Support theming in filter button and applied filter button components

  [Modal]: Support theming for border and box shadow on modal

  [Notification]:

  - Rename `lp-border-radius` to `lp-border-radius-regular`
  - Improve theming for links in notifications

- Updated dependencies [[`71549774`](https://github.com/launchdarkly/launchpad-ui/commit/71549774aad5dcd0887379beba474e2371d320e6), [`9c9429e3`](https://github.com/launchdarkly/launchpad-ui/commit/9c9429e3707c9f229357875f9278755b3f3d7eda)]:
  - @launchpad-ui/tokens@0.4.0

## 0.6.7

### Patch Changes

- Updated dependencies [[`6dc1470`](https://github.com/launchdarkly/launchpad-ui/commit/6dc1470e52b9f2f1b4dae8800fa8fd6d2bc74a46)]:
  - @launchpad-ui/tokens@0.3.2

## 0.6.6

### Patch Changes

- [#567](https://github.com/launchdarkly/launchpad-ui/pull/567) [`d80297f`](https://github.com/launchdarkly/launchpad-ui/commit/d80297fad893c9db566ed029e302702d5f245a98) Thanks [@Niznikr](https://github.com/Niznikr)! - [Tokens] Update bg and text tokens

- Updated dependencies [[`d80297f`](https://github.com/launchdarkly/launchpad-ui/commit/d80297fad893c9db566ed029e302702d5f245a98)]:
  - @launchpad-ui/tokens@0.3.1

## 0.6.5

### Patch Changes

- Updated dependencies [[`baeacd7`](https://github.com/launchdarkly/launchpad-ui/commit/baeacd7b80d60f36f4962f090d87a0009f28b44e)]:
  - @launchpad-ui/tokens@0.3.0

## 0.6.4

### Patch Changes

- Updated dependencies [[`4090f93`](https://github.com/launchdarkly/launchpad-ui/commit/4090f93ba98ea6f75a7f9f7b902fafcfb9b005b3)]:
  - @launchpad-ui/tokens@0.2.0

## 0.6.3

### Patch Changes

- [#449](https://github.com/launchdarkly/launchpad-ui/pull/449) [`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Pin monorepo packages

## 0.6.3

### Patch Changes

- [#402](https://github.com/launchdarkly/launchpad-ui/pull/402) [`e5036e8`](https://github.com/launchdarkly/launchpad-ui/commit/e5036e8668f18fd4f382a911435b7523c807767f) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Navigation]: Update to CSS Modules and improve Nav Chip code
  [Chip]: Remove Nav chip styles (moved to Navigation)

## 0.6.2

### Patch Changes

- [#399](https://github.com/launchdarkly/launchpad-ui/pull/399) [`16bc395`](https://github.com/launchdarkly/launchpad-ui/commit/16bc3953f6d418575414e205339f303313c81e92) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Chip] Move to CSS Modules

## 0.6.1

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

## 0.6.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

## 0.5.1

### Patch Changes

- [#342](https://github.com/launchdarkly/launchpad-ui/pull/342) [`f2be6b7`](https://github.com/launchdarkly/launchpad-ui/commit/f2be6b78e3024c58c7e01c6b154322f3558e8032) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Chip] Improve prop object type for Chip component to pass through HTML attributes

## 0.5.0

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

## 0.4.1

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

## 0.4.0

### Minor Changes

- [#276](https://github.com/launchdarkly/launchpad-ui/pull/276) [`bdf0c5d`](https://github.com/launchdarkly/launchpad-ui/commit/bdf0c5d9a304b455e137d412734de2603808b218) Thanks [@Niznikr](https://github.com/Niznikr)! - [Lozenge, Navigation] Rename lozenge to chip

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
