# @launchpad-ui/popover

## 0.10.10

### Patch Changes

- [#947](https://github.com/launchdarkly/launchpad-ui/pull/947) [`29e2b26c`](https://github.com/launchdarkly/launchpad-ui/commit/29e2b26c7f2a5496adb11a72fd79fcadd33717ff) Thanks [@Niznikr](https://github.com/Niznikr)! - Annotate pure functions

- Updated dependencies [[`29e2b26c`](https://github.com/launchdarkly/launchpad-ui/commit/29e2b26c7f2a5496adb11a72fd79fcadd33717ff)]:
  - @launchpad-ui/focus-trap@0.1.9
  - @launchpad-ui/overlay@0.3.29

## 0.10.9

### Patch Changes

- [#939](https://github.com/launchdarkly/launchpad-ui/pull/939) [`9bbdd9e2`](https://github.com/launchdarkly/launchpad-ui/commit/9bbdd9e20bcbd5af8ab60ab3c03869c8665a8962) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

## 0.10.8

### Patch Changes

- [#934](https://github.com/launchdarkly/launchpad-ui/pull/934) [`bc04510d`](https://github.com/launchdarkly/launchpad-ui/commit/bc04510d8adfeb899e25638979b5b6a6526e9986) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

## 0.10.7

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

## 0.10.6

### Patch Changes

- Updated dependencies [[`068bf1cc`](https://github.com/launchdarkly/launchpad-ui/commit/068bf1cc5418a264c5be167cd5030b4f56bef03f)]:
  - @launchpad-ui/tokens@0.5.8

## 0.10.5

### Patch Changes

- Updated dependencies [[`864b63c5`](https://github.com/launchdarkly/launchpad-ui/commit/864b63c5bdcdf0d52b322be6469b6edfedad4f31), [`4c9695e7`](https://github.com/launchdarkly/launchpad-ui/commit/4c9695e777b80c7a64d5ec6ef707acb0cce9dec0)]:
  - @launchpad-ui/tokens@0.5.7
  - @launchpad-ui/focus-trap@0.1.8

## 0.10.4

### Patch Changes

- [#881](https://github.com/launchdarkly/launchpad-ui/pull/881) [`3d3c0b5d`](https://github.com/launchdarkly/launchpad-ui/commit/3d3c0b5de4c95d4d75e97f2e3b166e36d3c32726) Thanks [@renovate](https://github.com/apps/renovate)! - [Popover] Update dependencies

- [#878](https://github.com/launchdarkly/launchpad-ui/pull/878) [`f0d6fffb`](https://github.com/launchdarkly/launchpad-ui/commit/f0d6fffb04a96184caedc5d5c95c231240c6e28f) Thanks [@renovate](https://github.com/apps/renovate)! - [Markdown, Popover] Update dependencies

## 0.10.3

### Patch Changes

- [#868](https://github.com/launchdarkly/launchpad-ui/pull/868) [`8168b7a0`](https://github.com/launchdarkly/launchpad-ui/commit/8168b7a01eb59ec1a417604ba2414b1e7420733f) Thanks [@renovate](https://github.com/apps/renovate)! - [Drawer, Modal, Popover, Snackbar, Toast] Update `framer-motion` to v10

- Updated dependencies [[`9b488612`](https://github.com/launchdarkly/launchpad-ui/commit/9b488612b0b685c6f0c1c08086c7696eb7dc3a61)]:
  - @launchpad-ui/focus-trap@0.1.7

## 0.10.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.28

## 0.10.1

### Patch Changes

- [#815](https://github.com/launchdarkly/launchpad-ui/pull/815) [`dff6096f`](https://github.com/launchdarkly/launchpad-ui/commit/dff6096f806ad84b5238fb4f2320e70c907af4dc) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Popover] Remove ref merging logic

## 0.10.0

### Minor Changes

- [#811](https://github.com/launchdarkly/launchpad-ui/pull/811) [`1314c9f0`](https://github.com/launchdarkly/launchpad-ui/commit/1314c9f0515e47d4d5cfde99e33be537b4df78c9) Thanks [@tvarney13](https://github.com/tvarney13)! - Resolve accessibility issue where popover isn't dismissible in modal or drawer.
  [Modal]: Move `keydown` event one level up to `window`, add Tooltip test
  [Popover]: Add `event.stopPropagation` on `keydown` events to prevent closing modals or drawers.
  [Drawer]: Move `keydown` event one level up to `window`, add Tooltip test

### Patch Changes

- [#811](https://github.com/launchdarkly/launchpad-ui/pull/811) [`1314c9f0`](https://github.com/launchdarkly/launchpad-ui/commit/1314c9f0515e47d4d5cfde99e33be537b4df78c9) Thanks [@tvarney13](https://github.com/tvarney13)! - Set window event only on popover

  [Popover]: Set `keydown` event listener on `window` instead of `document`.
  [Modal]: Revert last change's component changes - restored `document` event listener
  [Drawer]: Revert last change's component changes - restored `document` event listener

- [#809](https://github.com/launchdarkly/launchpad-ui/pull/809) [`35dafc44`](https://github.com/launchdarkly/launchpad-ui/commit/35dafc4417a11926f6b43815ee5856ce0e8b3fe9) Thanks [@pheggeseth](https://github.com/pheggeseth)! - [Popover] merge popover target ref with internal ref

- Updated dependencies [[`72d37d74`](https://github.com/launchdarkly/launchpad-ui/commit/72d37d74c553e2a3c5cfe0f8bc77ee3a47222d80)]:
  - @launchpad-ui/tokens@0.5.6

## 0.9.8

### Patch Changes

- Updated dependencies [[`7760fefe`](https://github.com/launchdarkly/launchpad-ui/commit/7760fefea91fddf17f15163ce05f555215dc4b90)]:
  - @launchpad-ui/tokens@0.5.5

## 0.9.7

### Patch Changes

- Updated dependencies [[`b2c0418c`](https://github.com/launchdarkly/launchpad-ui/commit/b2c0418c94e0daefdfd9a42c93bb8fdfd24cbaa7)]:
  - @launchpad-ui/focus-trap@0.1.6

## 0.9.6

### Patch Changes

- Updated dependencies [[`b6a6b17f`](https://github.com/launchdarkly/launchpad-ui/commit/b6a6b17f4635dc1c32365a81cecaf22a9c088b3b)]:
  - @launchpad-ui/focus-trap@0.1.5

## 0.9.5

### Patch Changes

- [#765](https://github.com/launchdarkly/launchpad-ui/pull/765) [`ac2cab06`](https://github.com/launchdarkly/launchpad-ui/commit/ac2cab06ac8794a84948a59417a62e13fc08dac7) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Popover]: Wrap contents in `FocusTrap` if `enforceFocus` is true.
  [ProgressBubbles]: Enforce focus when progress bubble popover is open.

## 0.9.4

### Patch Changes

- Updated dependencies [[`c120d56c`](https://github.com/launchdarkly/launchpad-ui/commit/c120d56c7b4045cefa5520954dc7683159768625)]:
  - @launchpad-ui/tokens@0.5.4

## 0.9.3

### Patch Changes

- Updated dependencies [[`d5bd5d0d`](https://github.com/launchdarkly/launchpad-ui/commit/d5bd5d0de1cedc2d341beced3ac8239167a85108)]:
  - @launchpad-ui/tokens@0.5.3

## 0.9.2

### Patch Changes

- Updated dependencies [[`152aef91`](https://github.com/launchdarkly/launchpad-ui/commit/152aef9126c5291586b09b703795030f52a01bb1)]:
  - @launchpad-ui/tokens@0.5.2

## 0.9.1

### Patch Changes

- Updated dependencies [[`909a0fde`](https://github.com/launchdarkly/launchpad-ui/commit/909a0fdebf57634d5c100626cb432c35eac1c661)]:
  - @launchpad-ui/tokens@0.5.1

## 0.9.0

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

## 0.8.37

### Patch Changes

- [#610](https://github.com/launchdarkly/launchpad-ui/pull/610) [`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10) Thanks [@renovate](https://github.com/apps/renovate)! - Update nonmajor versions across framework

- Updated dependencies [[`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10)]:
  - @launchpad-ui/tokens@0.4.10

## 0.8.36

### Patch Changes

- [#692](https://github.com/launchdarkly/launchpad-ui/pull/692) [`f0505293`](https://github.com/launchdarkly/launchpad-ui/commit/f050529389a66fec35bcd8392839e80f875f2562) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update `framer-motion` to latest version.

  [Snackbar]: Update `framer-motion` dependency from `7.6.1` to `9.0.3`
  [Popover]: Update `framer-motion` dependency from `7.6.1` to `9.0.3`
  [Drawer]: Update `framer-motion` dependency from `7.6.1` to `9.0.3`
  [Modal]: Update `framer-motion` dependency from `7.6.1` to `9.0.3`
  [Toast]: Update `framer-motion` dependency from `7.6.1` to `9.0.3`

## 0.8.35

### Patch Changes

- [#666](https://github.com/launchdarkly/launchpad-ui/pull/666) [`20439f2d`](https://github.com/launchdarkly/launchpad-ui/commit/20439f2d0533bf574b613d16d5d31eb688cb629f) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Bump z-index values

  [Drawer] Increase z-index from 300 to 400
  [Modal] Increase z-index from 400 to 500
  [Popover] Increase z-index from 500 to 600
  [Snackbar] Increase z-index from 700 to 800
  [Toast] Increase z-index from 700 to 800
  [Tooltip] Increase z-index from 600 to 700

- Updated dependencies [[`808902f7`](https://github.com/launchdarkly/launchpad-ui/commit/808902f71c0b410adf86b0ee1683a2d36c4cdb22)]:
  - @launchpad-ui/tokens@0.4.9

## 0.8.34

### Patch Changes

- [#644](https://github.com/launchdarkly/launchpad-ui/pull/644) [`ab07d28a`](https://github.com/launchdarkly/launchpad-ui/commit/ab07d28ac113d528566fd990fd8ac9a6de86bd33) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Popover] fix invalid property value

## 0.8.33

### Patch Changes

- [#642](https://github.com/launchdarkly/launchpad-ui/pull/642) [`f2ae1a80`](https://github.com/launchdarkly/launchpad-ui/commit/f2ae1a80d678a1a61dee407b8574e4c52f55299f) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Dark mode updates based on design feedback

  [Filter]: Update clearable button styles
  [Form]: Update disabled state dark mode colors and placeholder colors
  [Modal]: Update dark mode overlay and card background
  [Popover]: Update box shadow
  [Tokens]: Apply various token alias updates
  [Tooltip]: Update dark mode theming

- Updated dependencies [[`f2ae1a80`](https://github.com/launchdarkly/launchpad-ui/commit/f2ae1a80d678a1a61dee407b8574e4c52f55299f)]:
  - @launchpad-ui/tokens@0.4.8

## 0.8.32

### Patch Changes

- [#633](https://github.com/launchdarkly/launchpad-ui/pull/633) [`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update third party dependencies to pin versions to match consumer app

- Updated dependencies [[`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15)]:
  - @launchpad-ui/focus-trap@0.1.4
  - @launchpad-ui/overlay@0.3.27

## 0.8.31

### Patch Changes

- [#629](https://github.com/launchdarkly/launchpad-ui/pull/629) [`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update Vite build tool to 4.0

- Updated dependencies [[`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde), [`b744011d`](https://github.com/launchdarkly/launchpad-ui/commit/b744011dccd525faa534f8def5ee8af2e346268a), [`94fe4b9a`](https://github.com/launchdarkly/launchpad-ui/commit/94fe4b9ada726c190701555c0f5bdca3e8ec610d)]:
  - @launchpad-ui/focus-trap@0.1.3
  - @launchpad-ui/overlay@0.3.26
  - @launchpad-ui/tokens@0.4.7

## 0.8.30

### Patch Changes

- Updated dependencies [[`9064d45c`](https://github.com/launchdarkly/launchpad-ui/commit/9064d45cf157f7ded1a11a100940bd144f410fd6)]:
  - @launchpad-ui/tokens@0.4.6

## 0.8.29

### Patch Changes

- Updated dependencies [[`c48e0b4f`](https://github.com/launchdarkly/launchpad-ui/commit/c48e0b4fff3e0792b453f9173459fd197871f3d0)]:
  - @launchpad-ui/tokens@0.4.5

## 0.8.28

### Patch Changes

- Updated dependencies [[`57484ab9`](https://github.com/launchdarkly/launchpad-ui/commit/57484ab9998ef50a32ab51bb9c0286b7be84fdb2), [`4c2dc031`](https://github.com/launchdarkly/launchpad-ui/commit/4c2dc0315fe0742ad78b706552d7c7e8e87f8e0e)]:
  - @launchpad-ui/tokens@0.4.4

## 0.8.27

### Patch Changes

- Updated dependencies [[`9b37d196`](https://github.com/launchdarkly/launchpad-ui/commit/9b37d196a691fd6a4ca0f989c4121b8683d8f7cb)]:
  - @launchpad-ui/tokens@0.4.3

## 0.8.26

### Patch Changes

- Updated dependencies [[`c0840e07`](https://github.com/launchdarkly/launchpad-ui/commit/c0840e07ba5a4f3da47b792d27680bc2549169f5)]:
  - @launchpad-ui/tokens@0.4.2

## 0.8.25

### Patch Changes

- [#598](https://github.com/launchdarkly/launchpad-ui/pull/598) [`353eccef`](https://github.com/launchdarkly/launchpad-ui/commit/353eccefd155dd95c0221c7e8960ca14afb4baad) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Drawer]: Update z-index

  [Modal]: Update z-index

  [Navigation]: Update primary bottom border color

  [Notification]: Update z-index

  [Popover]: Update z-index

  [Snackbar]: Update z-index

  [SplitButton]: Improve theming for button borders

  [Table]: Improve theming for table cell head

  [Toast]: Update z-index

  [Tooltip]: Update z-index

  [Tokens]:

  - Update `lp-color-bg-interactive-disabled` dark value
  - Update `lp-color-bg-overlay-primary` dark value
  - Update `lp-color-border-interactive-secondary` dark value
  - Update `lp-color-border-interactive-disabled` dark value

  [ProgressBubbles]: Update dark mode styling

- Updated dependencies [[`353eccef`](https://github.com/launchdarkly/launchpad-ui/commit/353eccefd155dd95c0221c7e8960ca14afb4baad)]:
  - @launchpad-ui/tokens@0.4.1

## 0.8.24

### Patch Changes

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

## 0.8.23

### Patch Changes

- Updated dependencies [[`6dc1470`](https://github.com/launchdarkly/launchpad-ui/commit/6dc1470e52b9f2f1b4dae8800fa8fd6d2bc74a46)]:
  - @launchpad-ui/tokens@0.3.2

## 0.8.22

### Patch Changes

- Updated dependencies [[`6f95e6f`](https://github.com/launchdarkly/launchpad-ui/commit/6f95e6f608459ec4e812ae36e79cad0e128db377)]:
  - @launchpad-ui/focus-trap@0.1.2

## 0.8.21

### Patch Changes

- [#567](https://github.com/launchdarkly/launchpad-ui/pull/567) [`d80297f`](https://github.com/launchdarkly/launchpad-ui/commit/d80297fad893c9db566ed029e302702d5f245a98) Thanks [@Niznikr](https://github.com/Niznikr)! - [Tokens] Update bg and text tokens

- Updated dependencies [[`d80297f`](https://github.com/launchdarkly/launchpad-ui/commit/d80297fad893c9db566ed029e302702d5f245a98)]:
  - @launchpad-ui/tokens@0.3.1

## 0.8.20

### Patch Changes

- Updated dependencies [[`baeacd7`](https://github.com/launchdarkly/launchpad-ui/commit/baeacd7b80d60f36f4962f090d87a0009f28b44e)]:
  - @launchpad-ui/tokens@0.3.0

## 0.8.19

### Patch Changes

- Updated dependencies [[`5b78533`](https://github.com/launchdarkly/launchpad-ui/commit/5b78533cb4905e6a1e70ee0e232e9253e34d9e3d)]:
  - @launchpad-ui/overlay@0.3.25

## 0.8.18

### Patch Changes

- [#520](https://github.com/launchdarkly/launchpad-ui/pull/520) [`d87e683`](https://github.com/launchdarkly/launchpad-ui/commit/d87e68388354cd5318e60344f8d855bd27521d19) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add drawer package

  [Drawer] Add drawer package
  [Modal] Remove unused class, rename use of `has-modal` to `has-overlay`
  [Overlay] Rename use of `has-modal` to `has-overlay`
  [Popover] Rename use of `has-modal` to `has-overlay`
  [Dropdown] Rename use of `has-modal` to `has-overlay`

- Updated dependencies [[`d87e683`](https://github.com/launchdarkly/launchpad-ui/commit/d87e68388354cd5318e60344f8d855bd27521d19)]:
  - @launchpad-ui/overlay@0.3.24

## 0.8.17

### Patch Changes

- Updated dependencies [[`4090f93`](https://github.com/launchdarkly/launchpad-ui/commit/4090f93ba98ea6f75a7f9f7b902fafcfb9b005b3)]:
  - @launchpad-ui/tokens@0.2.0
  - @launchpad-ui/overlay@0.3.23

## 0.8.16

### Patch Changes

- Updated dependencies [[`1b6fb18`](https://github.com/launchdarkly/launchpad-ui/commit/1b6fb18babba26a96c71fe0c297a6c6c1a4ee478)]:
  - @launchpad-ui/overlay@0.3.22

## 0.8.15

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.21

## 0.8.14

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.20

## 0.8.13

### Patch Changes

- [#509](https://github.com/launchdarkly/launchpad-ui/pull/509) [`1e5796b`](https://github.com/launchdarkly/launchpad-ui/commit/1e5796b7b99a2704bba22623a518ff7e8776ebf8) Thanks [@Niznikr](https://github.com/Niznikr)! - Update dependencies

- Updated dependencies [[`1e5796b`](https://github.com/launchdarkly/launchpad-ui/commit/1e5796b7b99a2704bba22623a518ff7e8776ebf8)]:
  - @launchpad-ui/focus-trap@0.1.1
  - @launchpad-ui/overlay@0.3.19

## 0.8.12

### Patch Changes

- [#506](https://github.com/launchdarkly/launchpad-ui/pull/506) [`5e82186`](https://github.com/launchdarkly/launchpad-ui/commit/5e82186a765012cf79501dccf2a3305e66b16fc6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Alert] Remove unneeded global pseudoclasses
  [Clipboard] Remove unneeded global pseudoclasses
  [Popover] Remove unneeded global pseudoclasses
  [ProgressBubbles] Remove unneeded global pseudoclasses
  [Tooltip] Remove unneeded global pseudoclasses

## 0.8.11

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.18

## 0.8.10

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.17

## 0.8.9

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.16

## 0.8.8

### Patch Changes

- [#471](https://github.com/launchdarkly/launchpad-ui/pull/471) [`c5c07b0`](https://github.com/launchdarkly/launchpad-ui/commit/c5c07b0a47bcde0fbc7f0e6144ad8349e26b637e) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Modal] Add tabIndex to content to allow text selection
  [Popover] Add tabIndex to content to allow text selection
- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.15

## 0.8.7

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.14

## 0.8.6

### Patch Changes

- [#449](https://github.com/launchdarkly/launchpad-ui/pull/449) [`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Pin monorepo packages

- Updated dependencies [[`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa)]:
  - @launchpad-ui/overlay@0.3.13

## 0.8.5-alpha.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.12-alpha.1

## 0.8.5

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.12

## 0.8.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.11

## 0.8.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.10

## 0.8.2

### Patch Changes

- [#414](https://github.com/launchdarkly/launchpad-ui/pull/414) [`f4334d3`](https://github.com/launchdarkly/launchpad-ui/commit/f4334d3601d1f675eab6d0430354bd80d46bea01) Thanks [@Niznikr](https://github.com/Niznikr)! - [Popover, Tooltip] Update to CSS modules:

  - Replace unstyled class `Popover-target--active` with attribute `data-state` to indicate `open` or `closed` popover on target

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.9

## 0.8.1

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

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.8

## 0.8.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

## 0.7.6-alpha.0

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.7

## 0.7.6

### Patch Changes

- [#390](https://github.com/launchdarkly/launchpad-ui/pull/390) [`91d68ca`](https://github.com/launchdarkly/launchpad-ui/commit/91d68ca61f45c4f7a0f38b4e869f650a5202a74c) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover]: Add focus-trap package to toggle traps via context

- Updated dependencies [[`91d68ca`](https://github.com/launchdarkly/launchpad-ui/commit/91d68ca61f45c4f7a0f38b4e869f650a5202a74c)]:
  - @launchpad-ui/focus-trap@0.1.0
  - # @launchpad-ui/overlay@0.3.6
  - @launchpad-ui/overlay@0.3.6-alpha.0

## 0.7.5

### Patch Changes

- [#360](https://github.com/launchdarkly/launchpad-ui/pull/360) [`c392a08`](https://github.com/launchdarkly/launchpad-ui/commit/c392a08a3d83fcd3cbc0213510c5a19174f925af) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover]: Remove commandbar focus trap logic

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.5

## 0.7.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.4

## 0.7.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.3

## 0.7.2

### Patch Changes

- [#336](https://github.com/launchdarkly/launchpad-ui/pull/336) [`28ffe4d`](https://github.com/launchdarkly/launchpad-ui/commit/28ffe4dd8608c71a5ff20c8b574b1a6d0e592a11) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover]: Stop focus trap when commandbar is open

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.2

## 0.7.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.3.1

## 0.7.0

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
  - @launchpad-ui/overlay@0.3.0

## 0.6.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.2.5

## 0.6.5

### Patch Changes

- [#306](https://github.com/launchdarkly/launchpad-ui/pull/306) [`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d) Thanks [@Niznikr](https://github.com/Niznikr)! - [Filter, Icons, Menu, Popover] Create ids with useId

* [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

* Updated dependencies []:
  - @launchpad-ui/overlay@0.2.4

## 0.6.4

### Patch Changes

- [#301](https://github.com/launchdarkly/launchpad-ui/pull/301) [`534ebde`](https://github.com/launchdarkly/launchpad-ui/commit/534ebde2f8bb6abb53cb0443f4e3b2eee0a2064f) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Popover] Change popover target prop to data-test-id

## 0.6.3

### Patch Changes

- [#299](https://github.com/launchdarkly/launchpad-ui/pull/299) [`273180e`](https://github.com/launchdarkly/launchpad-ui/commit/273180e0a8d6851292a6c33bcccaadc9efe215f6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Markdown] Add testId param to component
  [Popover] Add testId param to component
  [Progress] Add testId param to component
- Updated dependencies []:
  - @launchpad-ui/overlay@0.2.3

## 0.6.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.2.2

## 0.6.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.2.1

## 0.6.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

* [#258](https://github.com/launchdarkly/launchpad-ui/pull/258) [`dfe9d18`](https://github.com/launchdarkly/launchpad-ui/commit/dfe9d1861a1b3cc3e84583539b2446f63932512e) Thanks [@renovate](https://github.com/apps/renovate)! - [Modal, Notification, Popover] Update framer-motion to v7

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356)]:
  - @launchpad-ui/overlay@0.2.0

## 0.5.7

### Patch Changes

- [#262](https://github.com/launchdarkly/launchpad-ui/pull/262) [`d8d52bc`](https://github.com/launchdarkly/launchpad-ui/commit/d8d52bca9583789c0f1cb155812585f03d682f3f) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Popover] Add condition for empty content string when deciding to render popover.

## 0.5.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.18

## 0.5.5

### Patch Changes

- [#242](https://github.com/launchdarkly/launchpad-ui/pull/242) [`532cbe4`](https://github.com/launchdarkly/launchpad-ui/commit/532cbe4ecb0a41f4eef3725a2ccfacf7d6586011) Thanks [@Niznikr](https://github.com/Niznikr)! - [Overlay, Popover] Remove lodash

* [#235](https://github.com/launchdarkly/launchpad-ui/pull/235) [`e5e01c2`](https://github.com/launchdarkly/launchpad-ui/commit/e5e01c26a4d20686489aac7d2106b939d5071037) Thanks [@Niznikr](https://github.com/Niznikr)! - [Popover] Update to functional component:

  - [Clipboard] Remove unused prop `shouldOnlyShowTooltipAfterCopy`

* Updated dependencies [[`532cbe4`](https://github.com/launchdarkly/launchpad-ui/commit/532cbe4ecb0a41f4eef3725a2ccfacf7d6586011)]:
  - @launchpad-ui/overlay@0.1.17

## 0.5.4

### Patch Changes

- [#237](https://github.com/launchdarkly/launchpad-ui/pull/237) [`d2d29a2`](https://github.com/launchdarkly/launchpad-ui/commit/d2d29a2489ab111511e98ce1036d419d97ffa0ed) Thanks [@Niznikr](https://github.com/Niznikr)! - Update `@react-aria` for smaller bundle sizes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.16

## 0.5.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.15

## 0.5.2

### Patch Changes

- [#219](https://github.com/launchdarkly/launchpad-ui/pull/219) [`b2a8ff5`](https://github.com/launchdarkly/launchpad-ui/commit/b2a8ff5f87c95be17c5749998f74f8bcedba65e8) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Add chunk names

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.14

## 0.5.1

### Patch Changes

- [#218](https://github.com/launchdarkly/launchpad-ui/pull/218) [`204e574`](https://github.com/launchdarkly/launchpad-ui/commit/204e574344367cdd653b141d067ee6dcef74c17d) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Update framer dynamic import

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.13

## 0.5.0

### Minor Changes

- [#215](https://github.com/launchdarkly/launchpad-ui/pull/215) [`1fbb858`](https://github.com/launchdarkly/launchpad-ui/commit/1fbb858c8baaaa2f7cced15c81d1c2b0d49a7836) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Add LazyMotion:

  - Add `LazyMotion` to the individual components to remove the need for consumers to wrap their app with it

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.12

## 0.4.1

### Patch Changes

- [#208](https://github.com/launchdarkly/launchpad-ui/pull/208) [`590838e`](https://github.com/launchdarkly/launchpad-ui/commit/590838e7744058324fc5223b6cb39f01a88f6e1a) Thanks [@Niznikr](https://github.com/Niznikr)! - [Popover] Apply strategy to popover position

## 0.4.0

### Minor Changes

- [#192](https://github.com/launchdarkly/launchpad-ui/pull/192) [`eb6e44c`](https://github.com/launchdarkly/launchpad-ui/commit/eb6e44c7853a7263511cdf7aeaeb0d83a83d78b9) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Change from string literal union type to `PopoverInteractionKind` enum type used across LaunchPad:

  - [Popover] Add and export `PopoverInteractionKind` type
  - [ProgressBubbles] Consume `PopoverInteractionKind`
  - [Tooltip] Consume `PopoverInteractionKind`

## 0.3.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.11

## 0.3.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.10

## 0.3.0

### Minor Changes

- [#166](https://github.com/launchdarkly/launchpad-ui/pull/166) [`d0cadcb`](https://github.com/launchdarkly/launchpad-ui/commit/d0cadcb6f13297e02fd7e8a0007b06a0bc1c66c6) Thanks [@Niznikr](https://github.com/Niznikr)! - [Modal, Notification, Popover] Remove LazyMotion:

  This requires that you wrap your app with [LazyMotion](https://www.framer.com/docs/lazy-motion/) to use these components:

  ```jsx
  import { LazyMotion, domAnimation } from 'framer-motion';

  <LazyMotion features={domAnimation}>
    <App />
  </LazyMotion>;
  ```

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.9

## 0.2.3

### Patch Changes

- [#161](https://github.com/launchdarkly/launchpad-ui/pull/161) [`cc0a367`](https://github.com/launchdarkly/launchpad-ui/commit/cc0a367f7d67f8c974b46c0b1ac743e7b020c0f2) Thanks [@Niznikr](https://github.com/Niznikr)! - [Popover] Handle pointer events

## 0.2.2

### Patch Changes

- Updated dependencies [[`5d5b5f3`](https://github.com/launchdarkly/launchpad-ui/commit/5d5b5f389e4bb541da909141710c59cd472d9b30)]:
  - @launchpad-ui/overlay@0.1.8

## 0.2.1

### Patch Changes

- [#146](https://github.com/launchdarkly/launchpad-ui/pull/146) [`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alias tokens:

  - Add alias tokens and use in component styles
  - Add dark theme custom properties and deliver as `dark.css`
  - Add theme toggle in Storybook

- Updated dependencies [[`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea)]:
  - @launchpad-ui/tokens@0.1.5
  - @launchpad-ui/overlay@0.1.7

## 0.2.0

### Minor Changes

- [#138](https://github.com/launchdarkly/launchpad-ui/pull/138) [`7918749`](https://github.com/launchdarkly/launchpad-ui/commit/79187498674a2218102f2835e58d7a735129d4f4) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Move stylesheets to styles folder in src for more consistency across packages

### Patch Changes

- [#137](https://github.com/launchdarkly/launchpad-ui/pull/137) [`735ebd5`](https://github.com/launchdarkly/launchpad-ui/commit/735ebd5ac2983af54fe1e55ced68435f432476cf) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace react-spring with framer-motion:

  - Remove `ModalTransition` and use `Modal` instead

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.6

## 0.1.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.5

## 0.1.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.4

## 0.1.2

### Patch Changes

- [#109](https://github.com/launchdarkly/launchpad-ui/pull/109) [`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Migrate from classnames to clsx package

- Updated dependencies []:
  - @launchpad-ui/overlay@0.1.3

## 0.1.1

### Patch Changes

- [#99](https://github.com/launchdarkly/launchpad-ui/pull/99) [`3ebbc38`](https://github.com/launchdarkly/launchpad-ui/commit/3ebbc38cb1dab6c1c3da1f6285fb7056a9be1d4d) Thanks [@Niznikr](https://github.com/Niznikr)! - Use lodash-es in place of per-method packages

- Updated dependencies [[`3ebbc38`](https://github.com/launchdarkly/launchpad-ui/commit/3ebbc38cb1dab6c1c3da1f6285fb7056a9be1d4d)]:
  - @launchpad-ui/overlay@0.1.2

## 0.1.0

### Minor Changes

- [#86](https://github.com/launchdarkly/launchpad-ui/pull/86) [`91bed3b`](https://github.com/launchdarkly/launchpad-ui/commit/91bed3bad3f7e0991cead2f563870b6c08edd577) Thanks [@Niznikr](https://github.com/Niznikr)! - Add popover package:

  - Add popover code, stories, and tests

### Patch Changes

- [#89](https://github.com/launchdarkly/launchpad-ui/pull/89) [`92b5291`](https://github.com/launchdarkly/launchpad-ui/commit/92b52917b4f8915bd121c885e72eefbb6875a16f) Thanks [@Niznikr](https://github.com/Niznikr)! - Add tooltip package:

  - Add tooltip code, stories, and tests

- Updated dependencies [[`64596df`](https://github.com/launchdarkly/launchpad-ui/commit/64596df8d4116e0008f135867b47a64cb175977c)]:
  - @launchpad-ui/tokens@0.1.4
  - @launchpad-ui/overlay@0.1.1
