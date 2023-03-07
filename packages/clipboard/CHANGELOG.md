# @launchpad-ui/clipboard

## 0.9.1

### Patch Changes

- Updated dependencies [[`74ddde60`](https://github.com/launchdarkly/launchpad-ui/commit/74ddde60d233fd489860f89aacb908e20f525674)]:
  - @launchpad-ui/tooltip@0.7.1

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
  - @launchpad-ui/tooltip@0.7.0
  - @launchpad-ui/tokens@0.5.0
  - @launchpad-ui/icons@0.7.2

## 0.8.48

### Patch Changes

- [#717](https://github.com/launchdarkly/launchpad-ui/pull/717) [`02f5f542`](https://github.com/launchdarkly/launchpad-ui/commit/02f5f542dbfd4c4376bae718e4b38fd9f769b287) Thanks [@kwatkins-ld](https://github.com/kwatkins-ld)! - left-align CopyToClipboard text

## 0.8.47

### Patch Changes

- [#610](https://github.com/launchdarkly/launchpad-ui/pull/610) [`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10) Thanks [@renovate](https://github.com/apps/renovate)! - Update nonmajor versions across framework

- Updated dependencies [[`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10)]:
  - @launchpad-ui/tooltip@0.6.38
  - @launchpad-ui/tokens@0.4.10
  - @launchpad-ui/icons@0.7.1

## 0.8.46

### Patch Changes

- Updated dependencies [[`2b29f91e`](https://github.com/launchdarkly/launchpad-ui/commit/2b29f91e21002d352f18c2dbfd0ed807f0598da0)]:
  - @launchpad-ui/icons@0.7.0

## 0.8.45

### Patch Changes

- Updated dependencies [[`d06d6a42`](https://github.com/launchdarkly/launchpad-ui/commit/d06d6a42824309be167d754c4642ab6b97375e1f)]:
  - @launchpad-ui/icons@0.6.21

## 0.8.44

### Patch Changes

- Updated dependencies [[`3790e0d2`](https://github.com/launchdarkly/launchpad-ui/commit/3790e0d294726e6722d45a7aa66e5ce51194c464)]:
  - @launchpad-ui/icons@0.6.20

## 0.8.43

### Patch Changes

- [#692](https://github.com/launchdarkly/launchpad-ui/pull/692) [`f0505293`](https://github.com/launchdarkly/launchpad-ui/commit/f050529389a66fec35bcd8392839e80f875f2562) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update `framer-motion` to latest version.

  [Snackbar]: Update `framer-motion` dependency from `7.6.1` to `9.0.3`
  [Popover]: Update `framer-motion` dependency from `7.6.1` to `9.0.3`
  [Drawer]: Update `framer-motion` dependency from `7.6.1` to `9.0.3`
  [Modal]: Update `framer-motion` dependency from `7.6.1` to `9.0.3`
  [Toast]: Update `framer-motion` dependency from `7.6.1` to `9.0.3`

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.6.37

## 0.8.42

### Patch Changes

- [#680](https://github.com/launchdarkly/launchpad-ui/pull/680) [`148d3494`](https://github.com/launchdarkly/launchpad-ui/commit/148d34940febc0036e5046bf2bc3618d6379ba68) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [CopyToClipboard] Add type='button' to default copy code button

## 0.8.41

### Patch Changes

- Updated dependencies [[`990af4a5`](https://github.com/launchdarkly/launchpad-ui/commit/990af4a5c7490a322604272cf9edc16ce9427cf1)]:
  - @launchpad-ui/icons@0.6.19

## 0.8.40

### Patch Changes

- Updated dependencies [[`20439f2d`](https://github.com/launchdarkly/launchpad-ui/commit/20439f2d0533bf574b613d16d5d31eb688cb629f), [`808902f7`](https://github.com/launchdarkly/launchpad-ui/commit/808902f71c0b410adf86b0ee1683a2d36c4cdb22)]:
  - @launchpad-ui/tooltip@0.6.36
  - @launchpad-ui/tokens@0.4.9
  - @launchpad-ui/icons@0.6.18

## 0.8.39

### Patch Changes

- Updated dependencies [[`f873c6f3`](https://github.com/launchdarkly/launchpad-ui/commit/f873c6f3af18b55e72883464e9698ea172021c8e)]:
  - @launchpad-ui/icons@0.6.17

## 0.8.38

### Patch Changes

- Updated dependencies [[`cd1b58c5`](https://github.com/launchdarkly/launchpad-ui/commit/cd1b58c5c117d37b2939fe879606011c49b18ced)]:
  - @launchpad-ui/icons@0.6.16

## 0.8.37

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.6.35

## 0.8.36

### Patch Changes

- Updated dependencies [[`f2ae1a80`](https://github.com/launchdarkly/launchpad-ui/commit/f2ae1a80d678a1a61dee407b8574e4c52f55299f)]:
  - @launchpad-ui/tokens@0.4.8
  - @launchpad-ui/tooltip@0.6.34
  - @launchpad-ui/icons@0.6.15

## 0.8.35

### Patch Changes

- [#633](https://github.com/launchdarkly/launchpad-ui/pull/633) [`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update third party dependencies to pin versions to match consumer app

- Updated dependencies [[`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15)]:
  - @launchpad-ui/icons@0.6.14
  - @launchpad-ui/tooltip@0.6.33

## 0.8.34

### Patch Changes

- [#629](https://github.com/launchdarkly/launchpad-ui/pull/629) [`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update Vite build tool to 4.0

- Updated dependencies [[`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde), [`b744011d`](https://github.com/launchdarkly/launchpad-ui/commit/b744011dccd525faa534f8def5ee8af2e346268a), [`94fe4b9a`](https://github.com/launchdarkly/launchpad-ui/commit/94fe4b9ada726c190701555c0f5bdca3e8ec610d)]:
  - @launchpad-ui/icons@0.6.13
  - @launchpad-ui/tokens@0.4.7
  - @launchpad-ui/tooltip@0.6.32

## 0.8.33

### Patch Changes

- Updated dependencies [[`9064d45c`](https://github.com/launchdarkly/launchpad-ui/commit/9064d45cf157f7ded1a11a100940bd144f410fd6)]:
  - @launchpad-ui/tokens@0.4.6
  - @launchpad-ui/icons@0.6.12
  - @launchpad-ui/tooltip@0.6.31

## 0.8.32

### Patch Changes

- Updated dependencies [[`c48e0b4f`](https://github.com/launchdarkly/launchpad-ui/commit/c48e0b4fff3e0792b453f9173459fd197871f3d0)]:
  - @launchpad-ui/tokens@0.4.5
  - @launchpad-ui/icons@0.6.11
  - @launchpad-ui/tooltip@0.6.30

## 0.8.31

### Patch Changes

- Updated dependencies [[`57484ab9`](https://github.com/launchdarkly/launchpad-ui/commit/57484ab9998ef50a32ab51bb9c0286b7be84fdb2), [`4c2dc031`](https://github.com/launchdarkly/launchpad-ui/commit/4c2dc0315fe0742ad78b706552d7c7e8e87f8e0e)]:
  - @launchpad-ui/tokens@0.4.4
  - @launchpad-ui/icons@0.6.10
  - @launchpad-ui/tooltip@0.6.29

## 0.8.30

### Patch Changes

- Updated dependencies [[`9b37d196`](https://github.com/launchdarkly/launchpad-ui/commit/9b37d196a691fd6a4ca0f989c4121b8683d8f7cb)]:
  - @launchpad-ui/tokens@0.4.3
  - @launchpad-ui/icons@0.6.9
  - @launchpad-ui/tooltip@0.6.28

## 0.8.29

### Patch Changes

- Updated dependencies [[`c0840e07`](https://github.com/launchdarkly/launchpad-ui/commit/c0840e07ba5a4f3da47b792d27680bc2549169f5)]:
  - @launchpad-ui/tokens@0.4.2
  - @launchpad-ui/icons@0.6.8
  - @launchpad-ui/tooltip@0.6.27

## 0.8.28

### Patch Changes

- Updated dependencies [[`353eccef`](https://github.com/launchdarkly/launchpad-ui/commit/353eccefd155dd95c0221c7e8960ca14afb4baad)]:
  - @launchpad-ui/tokens@0.4.1
  - @launchpad-ui/tooltip@0.6.26
  - @launchpad-ui/icons@0.6.7

## 0.8.27

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
  - @launchpad-ui/icons@0.6.6
  - @launchpad-ui/tooltip@0.6.25

## 0.8.26

### Patch Changes

- Updated dependencies [[`6dc1470`](https://github.com/launchdarkly/launchpad-ui/commit/6dc1470e52b9f2f1b4dae8800fa8fd6d2bc74a46)]:
  - @launchpad-ui/tokens@0.3.2
  - @launchpad-ui/icons@0.6.5
  - @launchpad-ui/tooltip@0.6.24

## 0.8.25

### Patch Changes

- Updated dependencies [[`da177e9`](https://github.com/launchdarkly/launchpad-ui/commit/da177e9c71e37f0ca4de21f5ab938f29f911ddf1)]:
  - @launchpad-ui/icons@0.6.4

## 0.8.24

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.6.23

## 0.8.23

### Patch Changes

- Updated dependencies [[`3a11bcf`](https://github.com/launchdarkly/launchpad-ui/commit/3a11bcf9085da9058c716841bf5d6b03ef5459a9), [`d1526c2`](https://github.com/launchdarkly/launchpad-ui/commit/d1526c21a4d637ce67d13c65dd8d34c4797d44ec)]:
  - @launchpad-ui/icons@0.6.3

## 0.8.22

### Patch Changes

- Updated dependencies [[`d80297f`](https://github.com/launchdarkly/launchpad-ui/commit/d80297fad893c9db566ed029e302702d5f245a98)]:
  - @launchpad-ui/tokens@0.3.1
  - @launchpad-ui/tooltip@0.6.22
  - @launchpad-ui/icons@0.6.2

## 0.8.21

### Patch Changes

- Updated dependencies [[`baeacd7`](https://github.com/launchdarkly/launchpad-ui/commit/baeacd7b80d60f36f4962f090d87a0009f28b44e)]:
  - @launchpad-ui/tokens@0.3.0
  - @launchpad-ui/icons@0.6.1
  - @launchpad-ui/tooltip@0.6.21

## 0.8.20

### Patch Changes

- Updated dependencies [[`0deac4f`](https://github.com/launchdarkly/launchpad-ui/commit/0deac4f7cb58781e56d864f50b659f5c885339dc)]:
  - @launchpad-ui/icons@0.6.0
  - @launchpad-ui/tooltip@0.6.20

## 0.8.19

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.6.19

## 0.8.18

### Patch Changes

- Updated dependencies [[`4090f93`](https://github.com/launchdarkly/launchpad-ui/commit/4090f93ba98ea6f75a7f9f7b902fafcfb9b005b3)]:
  - @launchpad-ui/tokens@0.2.0
  - @launchpad-ui/icons@0.5.9
  - @launchpad-ui/tooltip@0.6.18

## 0.8.17

### Patch Changes

- [#505](https://github.com/launchdarkly/launchpad-ui/pull/505) [`66dd7a6`](https://github.com/launchdarkly/launchpad-ui/commit/66dd7a6174c95a92ed4b49fe3398c1ba5b624731) Thanks [@Niznikr](https://github.com/Niznikr)! - [Alert, Banner, Clipboard, Snackbar, Toast] Remove base classes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.6.17

## 0.8.16

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.6.16

## 0.8.15

### Patch Changes

- Updated dependencies [[`b7302a3`](https://github.com/launchdarkly/launchpad-ui/commit/b7302a3015591df0b24e19a4444029c21d0cf9de)]:
  - @launchpad-ui/icons@0.5.8
  - @launchpad-ui/tooltip@0.6.15

## 0.8.14

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.6.14

## 0.8.13

### Patch Changes

- [#506](https://github.com/launchdarkly/launchpad-ui/pull/506) [`5e82186`](https://github.com/launchdarkly/launchpad-ui/commit/5e82186a765012cf79501dccf2a3305e66b16fc6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Alert] Remove unneeded global pseudoclasses
  [Clipboard] Remove unneeded global pseudoclasses
  [Popover] Remove unneeded global pseudoclasses
  [ProgressBubbles] Remove unneeded global pseudoclasses
  [Tooltip] Remove unneeded global pseudoclasses
- Updated dependencies [[`5e82186`](https://github.com/launchdarkly/launchpad-ui/commit/5e82186a765012cf79501dccf2a3305e66b16fc6)]:
  - @launchpad-ui/tooltip@0.6.13

## 0.8.12

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.6.12

## 0.8.11

### Patch Changes

- Updated dependencies [[`6c602af`](https://github.com/launchdarkly/launchpad-ui/commit/6c602afba6b7073314b0e5592c98a616aff586c1)]:
  - @launchpad-ui/icons@0.5.7
  - @launchpad-ui/tooltip@0.6.11

## 0.8.10

### Patch Changes

- Updated dependencies [[`f67056a`](https://github.com/launchdarkly/launchpad-ui/commit/f67056ae6df4c2647833d7fe3f742af8e686824f)]:
  - @launchpad-ui/icons@0.5.6
  - @launchpad-ui/tooltip@0.6.10

## 0.8.9

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.6.9

## 0.8.8

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.6.8

## 0.8.7

### Patch Changes

- [#449](https://github.com/launchdarkly/launchpad-ui/pull/449) [`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Pin monorepo packages

- Updated dependencies [[`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa), [`760d6ff`](https://github.com/launchdarkly/launchpad-ui/commit/760d6ff4b95f6f108105295611ae7a7f2af9bfaa)]:
  - @launchpad-ui/icons@0.5.5
  - @launchpad-ui/tooltip@0.6.7

## 0.8.6-alpha.1

### Patch Changes

- Updated dependencies [[`ba1abe9`](https://github.com/launchdarkly/launchpad-ui/commit/ba1abe951c8e88a543654dada0030fdfa66627d9)]:
  - @launchpad-ui/icons@0.5.4-alpha.2
  - @launchpad-ui/tooltip@0.6.6-alpha.1

## 0.8.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.6.6

## 0.8.5

### Patch Changes

- Updated dependencies [[`519cac2`](https://github.com/launchdarkly/launchpad-ui/commit/519cac2751d8e33be95850b4671e608c55dd9e4b), [`8548b71`](https://github.com/launchdarkly/launchpad-ui/commit/8548b71cbb0dd329e64ded5568f9ee6320fc2a13)]:
  - @launchpad-ui/icons@0.5.4
  - @launchpad-ui/tooltip@0.6.5

## 0.8.4

### Patch Changes

- Updated dependencies [[`69c763b`](https://github.com/launchdarkly/launchpad-ui/commit/69c763b62431a9a647313f725c2e15a0c597014d)]:
  - @launchpad-ui/icons@0.5.3
  - @launchpad-ui/tooltip@0.6.4

## 0.8.3

### Patch Changes

- Updated dependencies [[`a7c53bc`](https://github.com/launchdarkly/launchpad-ui/commit/a7c53bcfef64a49c9e87acdd1db1bd9aac83906b)]:
  - @launchpad-ui/tooltip@0.6.3

## 0.8.2

### Patch Changes

- Updated dependencies [[`9bf79e4`](https://github.com/launchdarkly/launchpad-ui/commit/9bf79e4d07192858e723900d8ab4c208872894a5), [`f4334d3`](https://github.com/launchdarkly/launchpad-ui/commit/f4334d3601d1f675eab6d0430354bd80d46bea01)]:
  - @launchpad-ui/icons@0.5.2
  - @launchpad-ui/tooltip@0.6.2

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

- Updated dependencies [[`b641978`](https://github.com/launchdarkly/launchpad-ui/commit/b64197803c1ea2a38f8cc755daca4c55760718ab)]:
  - @launchpad-ui/icons@0.5.1
  - @launchpad-ui/tooltip@0.6.1

## 0.8.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

### Patch Changes

- Updated dependencies [[`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd)]:
  - @launchpad-ui/icons@0.5.0
  - @launchpad-ui/tooltip@0.6.0

## 0.7.0

### Minor Changes

- [#393](https://github.com/launchdarkly/launchpad-ui/pull/393) [`a7e72b1`](https://github.com/launchdarkly/launchpad-ui/commit/a7e72b1466e26a39b23b0be7518127a4b1be034e) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Clipboard] Isolate styles for CopyToClipboard component and improve handling of default trigger styles versus trigger passed asChild

## 0.6.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.5.6

## 0.6.6-alpha.0

### Patch Changes

- Updated dependencies [[`e860080`](https://github.com/launchdarkly/launchpad-ui/commit/e86008076dc61cfcfc4c22317021e793d4fd59a9)]:
  - @launchpad-ui/icons@0.4.1-alpha.0
  - @launchpad-ui/tooltip@0.5.6-alpha.0

## 0.6.5

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.5.5

## 0.6.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.5.4

## 0.6.3

### Patch Changes

- Updated dependencies [[`91fcfae`](https://github.com/launchdarkly/launchpad-ui/commit/91fcfae53d4b7c57f4d40a7d2b6a3c0bd7cb4e62)]:
  - @launchpad-ui/button@0.6.3
  - @launchpad-ui/tooltip@0.5.3

## 0.6.2

### Patch Changes

- [#343](https://github.com/launchdarkly/launchpad-ui/pull/343) [`b1f98a8`](https://github.com/launchdarkly/launchpad-ui/commit/b1f98a8a8a3c8bc4f69c0097c90304bf030115ee) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [CopyToClipboard] Enhance object prop type for CopyToClipboard component to support passing html attributes

- Updated dependencies [[`fee517a`](https://github.com/launchdarkly/launchpad-ui/commit/fee517a3ee1329d311a634ea0fad09bc37e7a33a)]:
  - @launchpad-ui/button@0.6.2
  - @launchpad-ui/tooltip@0.5.2

## 0.6.1

### Patch Changes

- Updated dependencies [[`143b8c6`](https://github.com/launchdarkly/launchpad-ui/commit/143b8c668986a88f335ffd28a4171c8bfafb1d9c)]:
  - @launchpad-ui/button@0.6.1
  - @launchpad-ui/tooltip@0.5.1

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

### Patch Changes

- Updated dependencies [[`0ce0a50`](https://github.com/launchdarkly/launchpad-ui/commit/0ce0a50b8401ec39ef290605a2789c987c6264ce)]:
  - @launchpad-ui/button@0.6.0
  - @launchpad-ui/icons@0.4.0
  - @launchpad-ui/tooltip@0.5.0

## 0.5.6

### Patch Changes

- Updated dependencies [[`4f2aac1`](https://github.com/launchdarkly/launchpad-ui/commit/4f2aac1dc6c9a9901a3b24b5922c9e299a8f9d10)]:
  - @launchpad-ui/button@0.5.0
  - @launchpad-ui/tooltip@0.4.6

## 0.5.5

### Patch Changes

- Updated dependencies [[`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d), [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43)]:
  - @launchpad-ui/icons@0.3.3
  - @launchpad-ui/button@0.4.1
  - @launchpad-ui/tooltip@0.4.5

## 0.5.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.4.4

## 0.5.3

### Patch Changes

- Updated dependencies [[`c5d00b2`](https://github.com/launchdarkly/launchpad-ui/commit/c5d00b204a9682a5ba3f883de4c830b67caf0c8b)]:
  - @launchpad-ui/icons@0.3.2
  - @launchpad-ui/tooltip@0.4.3

## 0.5.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.4.2

## 0.5.1

### Patch Changes

- Updated dependencies [[`7fb3d52`](https://github.com/launchdarkly/launchpad-ui/commit/7fb3d5256821e10a4ad4892e47fa88a2a8cee94c)]:
  - @launchpad-ui/icons@0.3.1
  - @launchpad-ui/tooltip@0.4.1

## 0.5.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356)]:
  - @launchpad-ui/button@0.4.0
  - @launchpad-ui/icons@0.3.0
  - @launchpad-ui/tooltip@0.4.0

## 0.4.3

### Patch Changes

- Updated dependencies [[`ff2e97f`](https://github.com/launchdarkly/launchpad-ui/commit/ff2e97f1675f30c95ffa0b7772477a1961d163a3)]:
  - @launchpad-ui/tooltip@0.3.10

## 0.4.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.3.9

## 0.4.1

### Patch Changes

- [#260](https://github.com/launchdarkly/launchpad-ui/pull/260) [`5e4a3bd`](https://github.com/launchdarkly/launchpad-ui/commit/5e4a3bd1c3c332cb698664a0c753485af3068a82) Thanks [@Niznikr](https://github.com/Niznikr)! - Remove use of object in prop types:

  - [Clipboard] Update `tooltipOptions` type
  - [Form] Update Radio `labelStyle` type
  - [SplitButton] Update `tooltipOptions` type

- Updated dependencies [[`a276064`](https://github.com/launchdarkly/launchpad-ui/commit/a27606486f3aa56cd8e7772bbdda0bc0f4aa1ec6), [`ffb8b91`](https://github.com/launchdarkly/launchpad-ui/commit/ffb8b91991020e15a44ded38e02947c445ca1900), [`08b8cc0`](https://github.com/launchdarkly/launchpad-ui/commit/08b8cc0f27154e4103861b0233b979e4f4c30baa), [`9ea9b63`](https://github.com/launchdarkly/launchpad-ui/commit/9ea9b63f1db11ce782d9a1e3848ec8d22c7be634)]:
  - @launchpad-ui/icons@0.2.4
  - @launchpad-ui/tooltip@0.3.8
  - @launchpad-ui/button@0.3.2

## 0.4.0

### Minor Changes

- [#248](https://github.com/launchdarkly/launchpad-ui/pull/248) [`acea794`](https://github.com/launchdarkly/launchpad-ui/commit/acea79446ead1ea50e6ae5c38c4aac1d34e86c8d) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Clipboard] Remove testId from CopyToClipboard and improve focus state styling

## 0.3.2

### Patch Changes

- [#235](https://github.com/launchdarkly/launchpad-ui/pull/235) [`e5e01c2`](https://github.com/launchdarkly/launchpad-ui/commit/e5e01c26a4d20686489aac7d2106b939d5071037) Thanks [@Niznikr](https://github.com/Niznikr)! - [Popover] Update to functional component:

  - [Clipboard] Remove unused prop `shouldOnlyShowTooltipAfterCopy`

- Updated dependencies [[`6bbb5e9`](https://github.com/launchdarkly/launchpad-ui/commit/6bbb5e9713180d76c6ff2cc6c3fd6b2c4f2a449c)]:
  - @launchpad-ui/button@0.3.1
  - @launchpad-ui/tooltip@0.3.7

## 0.3.1

### Patch Changes

- [#237](https://github.com/launchdarkly/launchpad-ui/pull/237) [`d2d29a2`](https://github.com/launchdarkly/launchpad-ui/commit/d2d29a2489ab111511e98ce1036d419d97ffa0ed) Thanks [@Niznikr](https://github.com/Niznikr)! - Update `@react-aria` for smaller bundle sizes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.3.6

## 0.3.0

### Minor Changes

- [#227](https://github.com/launchdarkly/launchpad-ui/pull/227) [`c1a926b`](https://github.com/launchdarkly/launchpad-ui/commit/c1a926bff13e33f89eaefc8eed588927333d4620) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Improve Button and Clipboard ergonomics

  - [Button] Remove component prop, assign correct roles based on anchor/button rendering
  - [Clipboard] Improve slotting capabilities, default rendering to button component
  - [Notification] Consume new CopyToClipboard updates

### Patch Changes

- Updated dependencies [[`c1a926b`](https://github.com/launchdarkly/launchpad-ui/commit/c1a926bff13e33f89eaefc8eed588927333d4620)]:
  - @launchpad-ui/button@0.3.0
  - @launchpad-ui/tooltip@0.3.5

## 0.2.13

### Patch Changes

- [#225](https://github.com/launchdarkly/launchpad-ui/pull/225) [`b1106b5`](https://github.com/launchdarkly/launchpad-ui/commit/b1106b5533953089048deffc404f59422741f9d6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Enable custom triggers when using CopyToClipboard

  - [Clipboard]: Add asChild prop to CopyToClipboard to enable consumers to use custom triggers.

## 0.2.12

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.3.4

## 0.2.11

### Patch Changes

- Updated dependencies [[`f567202`](https://github.com/launchdarkly/launchpad-ui/commit/f567202860088b877a2a4edbbb1c90dc0906ab3b)]:
  - @launchpad-ui/icons@0.2.3
  - @launchpad-ui/tooltip@0.3.3

## 0.2.10

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.3.2

## 0.2.9

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.3.1

## 0.2.8

### Patch Changes

- [#194](https://github.com/launchdarkly/launchpad-ui/pull/194) [`814d444`](https://github.com/launchdarkly/launchpad-ui/commit/814d444146667c0f7f384772032a96252e0c1b57) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Removed or moved styles for u- classes in clipboard package

  - [Clipboard] removed or moved styles for u- classes

- Updated dependencies [[`eb6e44c`](https://github.com/launchdarkly/launchpad-ui/commit/eb6e44c7853a7263511cdf7aeaeb0d83a83d78b9)]:
  - @launchpad-ui/tooltip@0.3.0

## 0.2.7

### Patch Changes

- Updated dependencies [[`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4)]:
  - @launchpad-ui/icons@0.2.2
  - @launchpad-ui/tooltip@0.2.6

## 0.2.6

### Patch Changes

- Updated dependencies [[`111376d`](https://github.com/launchdarkly/launchpad-ui/commit/111376d9e26d00f5d7757e127d539daed1e6e3ed)]:
  - @launchpad-ui/tooltip@0.2.5

## 0.2.5

### Patch Changes

- [#168](https://github.com/launchdarkly/launchpad-ui/pull/168) [`4adb50f`](https://github.com/launchdarkly/launchpad-ui/commit/4adb50f20abb36770c0f94fed68dceb80f484aa8) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Expose clipboard handle type

## 0.2.4

### Patch Changes

- [#163](https://github.com/launchdarkly/launchpad-ui/pull/163) [`c1321e9`](https://github.com/launchdarkly/launchpad-ui/commit/c1321e934e37b31b3a56ff5c8b8163c53cee2d62) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Clipboard] Expose ref to imperatively call copy function from parent

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.2.4

## 0.2.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.2.3

## 0.2.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.2.2

## 0.2.1

### Patch Changes

- [#146](https://github.com/launchdarkly/launchpad-ui/pull/146) [`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alias tokens:

  - Add alias tokens and use in component styles
  - Add dark theme custom properties and deliver as `dark.css`
  - Add theme toggle in Storybook

- Updated dependencies [[`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea)]:
  - @launchpad-ui/icons@0.2.1
  - @launchpad-ui/tokens@0.1.5
  - @launchpad-ui/tooltip@0.2.1

## 0.2.0

### Minor Changes

- [#139](https://github.com/launchdarkly/launchpad-ui/pull/139) [`982ce37`](https://github.com/launchdarkly/launchpad-ui/commit/982ce37db3605f091a5689a245e4517f63b67524) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Move stylesheets to styles folder in src for more consistency across packages

### Patch Changes

- Updated dependencies [[`982ce37`](https://github.com/launchdarkly/launchpad-ui/commit/982ce37db3605f091a5689a245e4517f63b67524)]:
  - @launchpad-ui/icons@0.2.0
  - @launchpad-ui/tooltip@0.2.0

## 0.1.3

### Patch Changes

- [#127](https://github.com/launchdarkly/launchpad-ui/pull/127) [`c50f7c1`](https://github.com/launchdarkly/launchpad-ui/commit/c50f7c1b93b96ac0c4f3d2cf0827e91ee683c137) Thanks [@Niznikr](https://github.com/Niznikr)! - Update to functional component

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.1.4

## 0.1.2

### Patch Changes

- Updated dependencies [[`c325186`](https://github.com/launchdarkly/launchpad-ui/commit/c325186e06042d5b87ec93ed2f7fb150e96c9024)]:
  - @launchpad-ui/icons@0.1.6
  - @launchpad-ui/tooltip@0.1.3

## 0.1.1

### Patch Changes

- Updated dependencies [[`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28)]:
  - @launchpad-ui/icons@0.1.5
  - @launchpad-ui/tooltip@0.1.2

## 0.1.0

### Minor Changes

- [#97](https://github.com/launchdarkly/launchpad-ui/pull/97) [`1252d02`](https://github.com/launchdarkly/launchpad-ui/commit/1252d0221679b977b87f170cd049e1f7453dde58) Thanks [@Niznikr](https://github.com/Niznikr)! - Add clipboard package:

  - Add clipboard code, stories, and tests
  - Replace deprecated `document.execCommand` with the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard)

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/tooltip@0.1.1
