# @launchpad-ui/progress-bubbles

## 0.6.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.9.4

## 0.6.3

### Patch Changes

- Updated dependencies [[`d5bd5d0d`](https://github.com/launchdarkly/launchpad-ui/commit/d5bd5d0de1cedc2d341beced3ac8239167a85108)]:
  - @launchpad-ui/tokens@0.5.3
  - @launchpad-ui/popover@0.9.3

## 0.6.2

### Patch Changes

- Updated dependencies [[`152aef91`](https://github.com/launchdarkly/launchpad-ui/commit/152aef9126c5291586b09b703795030f52a01bb1)]:
  - @launchpad-ui/tokens@0.5.2
  - @launchpad-ui/popover@0.9.2

## 0.6.1

### Patch Changes

- Updated dependencies [[`909a0fde`](https://github.com/launchdarkly/launchpad-ui/commit/909a0fdebf57634d5c100626cb432c35eac1c661)]:
  - @launchpad-ui/tokens@0.5.1
  - @launchpad-ui/popover@0.9.1

## 0.6.0

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
  - @launchpad-ui/popover@0.9.0
  - @launchpad-ui/tokens@0.5.0

## 0.5.39

### Patch Changes

- [#610](https://github.com/launchdarkly/launchpad-ui/pull/610) [`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10) Thanks [@renovate](https://github.com/apps/renovate)! - Update nonmajor versions across framework

- Updated dependencies [[`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10)]:
  - @launchpad-ui/popover@0.8.37
  - @launchpad-ui/tokens@0.4.10

## 0.5.38

### Patch Changes

- Updated dependencies [[`f0505293`](https://github.com/launchdarkly/launchpad-ui/commit/f050529389a66fec35bcd8392839e80f875f2562)]:
  - @launchpad-ui/popover@0.8.36

## 0.5.37

### Patch Changes

- Updated dependencies [[`20439f2d`](https://github.com/launchdarkly/launchpad-ui/commit/20439f2d0533bf574b613d16d5d31eb688cb629f), [`808902f7`](https://github.com/launchdarkly/launchpad-ui/commit/808902f71c0b410adf86b0ee1683a2d36c4cdb22)]:
  - @launchpad-ui/popover@0.8.35
  - @launchpad-ui/tokens@0.4.9

## 0.5.36

### Patch Changes

- Updated dependencies [[`ab07d28a`](https://github.com/launchdarkly/launchpad-ui/commit/ab07d28ac113d528566fd990fd8ac9a6de86bd33)]:
  - @launchpad-ui/popover@0.8.34

## 0.5.35

### Patch Changes

- Updated dependencies [[`f2ae1a80`](https://github.com/launchdarkly/launchpad-ui/commit/f2ae1a80d678a1a61dee407b8574e4c52f55299f)]:
  - @launchpad-ui/popover@0.8.33
  - @launchpad-ui/tokens@0.4.8

## 0.5.34

### Patch Changes

- [#633](https://github.com/launchdarkly/launchpad-ui/pull/633) [`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update third party dependencies to pin versions to match consumer app

- Updated dependencies [[`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15)]:
  - @launchpad-ui/popover@0.8.32

## 0.5.33

### Patch Changes

- [#629](https://github.com/launchdarkly/launchpad-ui/pull/629) [`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update Vite build tool to 4.0

- Updated dependencies [[`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde), [`b744011d`](https://github.com/launchdarkly/launchpad-ui/commit/b744011dccd525faa534f8def5ee8af2e346268a), [`94fe4b9a`](https://github.com/launchdarkly/launchpad-ui/commit/94fe4b9ada726c190701555c0f5bdca3e8ec610d)]:
  - @launchpad-ui/popover@0.8.31
  - @launchpad-ui/tokens@0.4.7

## 0.5.32

### Patch Changes

- [#619](https://github.com/launchdarkly/launchpad-ui/pull/619) [`9064d45c`](https://github.com/launchdarkly/launchpad-ui/commit/9064d45cf157f7ded1a11a100940bd144f410fd6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update theme tokens for dark mode button, form, and progress-bubbles

  [Button]: Update destructive theme tokens
  [Form]: Update placeholder and border colors
  [ProgressBubbles]: Update backgrounds for dark mode
  [Tokens]: Update tokens for related component changes

- Updated dependencies [[`9064d45c`](https://github.com/launchdarkly/launchpad-ui/commit/9064d45cf157f7ded1a11a100940bd144f410fd6)]:
  - @launchpad-ui/tokens@0.4.6
  - @launchpad-ui/popover@0.8.30

## 0.5.31

### Patch Changes

- Updated dependencies [[`c48e0b4f`](https://github.com/launchdarkly/launchpad-ui/commit/c48e0b4fff3e0792b453f9173459fd197871f3d0)]:
  - @launchpad-ui/tokens@0.4.5
  - @launchpad-ui/popover@0.8.29

## 0.5.30

### Patch Changes

- Updated dependencies [[`57484ab9`](https://github.com/launchdarkly/launchpad-ui/commit/57484ab9998ef50a32ab51bb9c0286b7be84fdb2), [`4c2dc031`](https://github.com/launchdarkly/launchpad-ui/commit/4c2dc0315fe0742ad78b706552d7c7e8e87f8e0e)]:
  - @launchpad-ui/tokens@0.4.4
  - @launchpad-ui/popover@0.8.28

## 0.5.29

### Patch Changes

- Updated dependencies [[`9b37d196`](https://github.com/launchdarkly/launchpad-ui/commit/9b37d196a691fd6a4ca0f989c4121b8683d8f7cb)]:
  - @launchpad-ui/tokens@0.4.3
  - @launchpad-ui/popover@0.8.27

## 0.5.28

### Patch Changes

- Updated dependencies [[`c0840e07`](https://github.com/launchdarkly/launchpad-ui/commit/c0840e07ba5a4f3da47b792d27680bc2549169f5)]:
  - @launchpad-ui/tokens@0.4.2
  - @launchpad-ui/popover@0.8.26

## 0.5.27

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
  - @launchpad-ui/popover@0.8.25
  - @launchpad-ui/tokens@0.4.1

## 0.5.26

### Patch Changes

- Updated dependencies [[`71549774`](https://github.com/launchdarkly/launchpad-ui/commit/71549774aad5dcd0887379beba474e2371d320e6), [`9c9429e3`](https://github.com/launchdarkly/launchpad-ui/commit/9c9429e3707c9f229357875f9278755b3f3d7eda)]:
  - @launchpad-ui/tokens@0.4.0
  - @launchpad-ui/popover@0.8.24

## 0.5.25

### Patch Changes

- Updated dependencies [[`6dc1470`](https://github.com/launchdarkly/launchpad-ui/commit/6dc1470e52b9f2f1b4dae8800fa8fd6d2bc74a46)]:
  - @launchpad-ui/tokens@0.3.2
  - @launchpad-ui/popover@0.8.23

## 0.5.24

### Patch Changes

- [#586](https://github.com/launchdarkly/launchpad-ui/pull/586) [`2d72cc9`](https://github.com/launchdarkly/launchpad-ui/commit/2d72cc93be4ec3029ac37acbaed7f00cefed1cac) Thanks [@hisuida](https://github.com/hisuida)! - [ProgressBubbles]: Set current bubble background to white

## 0.5.23

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.22

## 0.5.22

### Patch Changes

- Updated dependencies [[`d80297f`](https://github.com/launchdarkly/launchpad-ui/commit/d80297fad893c9db566ed029e302702d5f245a98)]:
  - @launchpad-ui/popover@0.8.21
  - @launchpad-ui/tokens@0.3.1

## 0.5.21

### Patch Changes

- Updated dependencies [[`baeacd7`](https://github.com/launchdarkly/launchpad-ui/commit/baeacd7b80d60f36f4962f090d87a0009f28b44e)]:
  - @launchpad-ui/tokens@0.3.0
  - @launchpad-ui/popover@0.8.20

## 0.5.20

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.19

## 0.5.19

### Patch Changes

- Updated dependencies [[`d87e683`](https://github.com/launchdarkly/launchpad-ui/commit/d87e68388354cd5318e60344f8d855bd27521d19)]:
  - @launchpad-ui/popover@0.8.18

## 0.5.18

### Patch Changes

- Updated dependencies [[`4090f93`](https://github.com/launchdarkly/launchpad-ui/commit/4090f93ba98ea6f75a7f9f7b902fafcfb9b005b3)]:
  - @launchpad-ui/tokens@0.2.0
  - @launchpad-ui/popover@0.8.17

## 0.5.17

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.16

## 0.5.16

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.15

## 0.5.15

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.14

## 0.5.14

### Patch Changes

- Updated dependencies [[`1e5796b`](https://github.com/launchdarkly/launchpad-ui/commit/1e5796b7b99a2704bba22623a518ff7e8776ebf8)]:
  - @launchpad-ui/popover@0.8.13

## 0.5.13

### Patch Changes

- [#506](https://github.com/launchdarkly/launchpad-ui/pull/506) [`5e82186`](https://github.com/launchdarkly/launchpad-ui/commit/5e82186a765012cf79501dccf2a3305e66b16fc6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Alert] Remove unneeded global pseudoclasses
  [Clipboard] Remove unneeded global pseudoclasses
  [Popover] Remove unneeded global pseudoclasses
  [ProgressBubbles] Remove unneeded global pseudoclasses
  [Tooltip] Remove unneeded global pseudoclasses
- Updated dependencies [[`5e82186`](https://github.com/launchdarkly/launchpad-ui/commit/5e82186a765012cf79501dccf2a3305e66b16fc6)]:
  - @launchpad-ui/popover@0.8.12

## 0.5.12

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.11

## 0.5.11

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.10

## 0.5.10

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.9

## 0.5.9

### Patch Changes

- Updated dependencies [[`c5c07b0`](https://github.com/launchdarkly/launchpad-ui/commit/c5c07b0a47bcde0fbc7f0e6144ad8349e26b637e)]:
  - @launchpad-ui/popover@0.8.8

## 0.5.8

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.7

## 0.5.7

### Patch Changes

- [#449](https://github.com/launchdarkly/launchpad-ui/pull/449) [`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Pin monorepo packages

- Updated dependencies [[`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa)]:
  - @launchpad-ui/popover@0.8.6

## 0.5.6-alpha.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.5-alpha.1

## 0.5.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.5

## 0.5.5

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.4

## 0.5.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.3

## 0.5.3

### Patch Changes

- Updated dependencies [[`f4334d3`](https://github.com/launchdarkly/launchpad-ui/commit/f4334d3601d1f675eab6d0430354bd80d46bea01)]:
  - @launchpad-ui/popover@0.8.2

## 0.5.2

### Patch Changes

- [#401](https://github.com/launchdarkly/launchpad-ui/pull/401) [`719fdea`](https://github.com/launchdarkly/launchpad-ui/commit/719fdea3353f798ea01390ba26b6d879be34c815) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [ProgressBubbles] Move to CSS Modules, fix issue with display box

## 0.5.1

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

- Updated dependencies [[`b641978`](https://github.com/launchdarkly/launchpad-ui/commit/b64197803c1ea2a38f8cc755daca4c55760718ab)]:
  - @launchpad-ui/popover@0.8.1

## 0.5.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

### Patch Changes

- Updated dependencies [[`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd)]:
  - @launchpad-ui/popover@0.8.0

## 0.4.6

### Patch Changes

- Updated dependencies [[`91d68ca`](https://github.com/launchdarkly/launchpad-ui/commit/91d68ca61f45c4f7a0f38b4e869f650a5202a74c)]:
  - @launchpad-ui/popover@0.7.6

## 0.4.6-alpha.0

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.7.6-alpha.0

## 0.4.5

### Patch Changes

- Updated dependencies [[`c392a08`](https://github.com/launchdarkly/launchpad-ui/commit/c392a08a3d83fcd3cbc0213510c5a19174f925af)]:
  - @launchpad-ui/popover@0.7.5

## 0.4.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.7.4

## 0.4.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.7.3

## 0.4.2

### Patch Changes

- Updated dependencies [[`28ffe4d`](https://github.com/launchdarkly/launchpad-ui/commit/28ffe4dd8608c71a5ff20c8b574b1a6d0e592a11)]:
  - @launchpad-ui/popover@0.7.2

## 0.4.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.7.1

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
  - @launchpad-ui/popover@0.7.0

## 0.3.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.6.6

## 0.3.5

### Patch Changes

- [#310](https://github.com/launchdarkly/launchpad-ui/pull/310) [`f60754c`](https://github.com/launchdarkly/launchpad-ui/commit/f60754c7d96c4c40e11a707ff06b78b86f8513a7) Thanks [@jagarnica](https://github.com/jagarnica)! - [ProgressBubbles] Change background color of progress bubbles in "Current State" to green

* [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

* Updated dependencies [[`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d), [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43)]:
  - @launchpad-ui/popover@0.6.5

## 0.3.4

### Patch Changes

- Updated dependencies [[`534ebde`](https://github.com/launchdarkly/launchpad-ui/commit/534ebde2f8bb6abb53cb0443f4e3b2eee0a2064f)]:
  - @launchpad-ui/popover@0.6.4

## 0.3.3

### Patch Changes

- Updated dependencies [[`273180e`](https://github.com/launchdarkly/launchpad-ui/commit/273180e0a8d6851292a6c33bcccaadc9efe215f6)]:
  - @launchpad-ui/popover@0.6.3

## 0.3.2

### Patch Changes

- [#291](https://github.com/launchdarkly/launchpad-ui/pull/291) [`315a528`](https://github.com/launchdarkly/launchpad-ui/commit/315a528ce6db2a84fbc161ad202e9235b5046bf8) Thanks [@Niznikr](https://github.com/Niznikr)! - [ProgressBubbles] Up icon class specificity

- Updated dependencies []:
  - @launchpad-ui/popover@0.6.2

## 0.3.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.6.1

## 0.3.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356), [`dfe9d18`](https://github.com/launchdarkly/launchpad-ui/commit/dfe9d1861a1b3cc3e84583539b2446f63932512e)]:
  - @launchpad-ui/popover@0.6.0

## 0.2.9

### Patch Changes

- Updated dependencies [[`d8d52bc`](https://github.com/launchdarkly/launchpad-ui/commit/d8d52bca9583789c0f1cb155812585f03d682f3f)]:
  - @launchpad-ui/popover@0.5.7

## 0.2.8

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.5.6

## 0.2.7

### Patch Changes

- Updated dependencies [[`532cbe4`](https://github.com/launchdarkly/launchpad-ui/commit/532cbe4ecb0a41f4eef3725a2ccfacf7d6586011), [`e5e01c2`](https://github.com/launchdarkly/launchpad-ui/commit/e5e01c26a4d20686489aac7d2106b939d5071037)]:
  - @launchpad-ui/popover@0.5.5

## 0.2.6

### Patch Changes

- Updated dependencies [[`d2d29a2`](https://github.com/launchdarkly/launchpad-ui/commit/d2d29a2489ab111511e98ce1036d419d97ffa0ed)]:
  - @launchpad-ui/popover@0.5.4

## 0.2.5

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.5.3

## 0.2.4

### Patch Changes

- Updated dependencies [[`b2a8ff5`](https://github.com/launchdarkly/launchpad-ui/commit/b2a8ff5f87c95be17c5749998f74f8bcedba65e8)]:
  - @launchpad-ui/popover@0.5.2

## 0.2.3

### Patch Changes

- Updated dependencies [[`204e574`](https://github.com/launchdarkly/launchpad-ui/commit/204e574344367cdd653b141d067ee6dcef74c17d)]:
  - @launchpad-ui/popover@0.5.1

## 0.2.2

### Patch Changes

- Updated dependencies [[`1fbb858`](https://github.com/launchdarkly/launchpad-ui/commit/1fbb858c8baaaa2f7cced15c81d1c2b0d49a7836)]:
  - @launchpad-ui/popover@0.5.0

## 0.2.1

### Patch Changes

- [#204](https://github.com/launchdarkly/launchpad-ui/pull/204) [`1e74d18`](https://github.com/launchdarkly/launchpad-ui/commit/1e74d1803e22b675abf1195f798da85092a5d33a) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Remove disabling no-descending-specificity rules in packages:

  [Notification]: Refactored stylesheets to remove no-descending-specificity disable rules
  [Form]: Refactored stylesheets to remove no-descending-specificity disable rules
  [ProgressBubbles]: Refactored stylesheets to remove no-descending-specificity disable rules
  [Menu]: Refactored stylesheets to remove no-descending-specificity disable rules

- Updated dependencies [[`590838e`](https://github.com/launchdarkly/launchpad-ui/commit/590838e7744058324fc5223b6cb39f01a88f6e1a)]:
  - @launchpad-ui/popover@0.4.1

## 0.2.0

### Minor Changes

- [#192](https://github.com/launchdarkly/launchpad-ui/pull/192) [`eb6e44c`](https://github.com/launchdarkly/launchpad-ui/commit/eb6e44c7853a7263511cdf7aeaeb0d83a83d78b9) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Change from string literal union type to `PopoverInteractionKind` enum type used across LaunchPad:

  - [Popover] Add and export `PopoverInteractionKind` type
  - [ProgressBubbles] Consume `PopoverInteractionKind`
  - [Tooltip] Consume `PopoverInteractionKind`

### Patch Changes

- Updated dependencies [[`eb6e44c`](https://github.com/launchdarkly/launchpad-ui/commit/eb6e44c7853a7263511cdf7aeaeb0d83a83d78b9)]:
  - @launchpad-ui/popover@0.4.0

## 0.1.0

### Minor Changes

- [#190](https://github.com/launchdarkly/launchpad-ui/pull/190) [`e267bae`](https://github.com/launchdarkly/launchpad-ui/commit/e267baef8266ecc163866b3ac9e03abed4aef9e7) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add progress-bubbles package:

  - [ProgressBubbles] Add ProgressBubbles code, stories, and tests

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.3.2
