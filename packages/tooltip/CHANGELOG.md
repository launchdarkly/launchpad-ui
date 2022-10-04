# @launchpad-ui/tooltip

## 0.6.6-alpha.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.5-alpha.1

## 0.6.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.5

## 0.6.5

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.4

## 0.6.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.8.3

## 0.6.3

### Patch Changes

- [#426](https://github.com/launchdarkly/launchpad-ui/pull/426) [`a7c53bc`](https://github.com/launchdarkly/launchpad-ui/commit/a7c53bcfef64a49c9e87acdd1db1bd9aac83906b) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Tooltip]: Increase specificity for tooltip content styles

## 0.6.2

### Patch Changes

- [#414](https://github.com/launchdarkly/launchpad-ui/pull/414) [`f4334d3`](https://github.com/launchdarkly/launchpad-ui/commit/f4334d3601d1f675eab6d0430354bd80d46bea01) Thanks [@Niznikr](https://github.com/Niznikr)! - [Popover, Tooltip] Update to CSS modules:

  - Replace unstyled class `Popover-target--active` with attribute `data-state` to indicate `open` or `closed` popover on target

- Updated dependencies [[`f4334d3`](https://github.com/launchdarkly/launchpad-ui/commit/f4334d3601d1f675eab6d0430354bd80d46bea01)]:
  - @launchpad-ui/popover@0.8.2

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

- Updated dependencies [[`b641978`](https://github.com/launchdarkly/launchpad-ui/commit/b64197803c1ea2a38f8cc755daca4c55760718ab)]:
  - @launchpad-ui/popover@0.8.1

## 0.6.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

### Patch Changes

- Updated dependencies [[`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd)]:
  - @launchpad-ui/popover@0.8.0

## 0.5.6

### Patch Changes

- Updated dependencies [[`91d68ca`](https://github.com/launchdarkly/launchpad-ui/commit/91d68ca61f45c4f7a0f38b4e869f650a5202a74c)]:
  - @launchpad-ui/popover@0.7.6

## 0.5.6-alpha.0

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.7.6-alpha.0

## 0.5.5

### Patch Changes

- Updated dependencies [[`c392a08`](https://github.com/launchdarkly/launchpad-ui/commit/c392a08a3d83fcd3cbc0213510c5a19174f925af)]:
  - @launchpad-ui/popover@0.7.5

## 0.5.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.7.4

## 0.5.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.7.3

## 0.5.2

### Patch Changes

- Updated dependencies [[`28ffe4d`](https://github.com/launchdarkly/launchpad-ui/commit/28ffe4dd8608c71a5ff20c8b574b1a6d0e592a11)]:
  - @launchpad-ui/popover@0.7.2

## 0.5.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.7.1

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

### Patch Changes

- Updated dependencies [[`0ce0a50`](https://github.com/launchdarkly/launchpad-ui/commit/0ce0a50b8401ec39ef290605a2789c987c6264ce)]:
  - @launchpad-ui/popover@0.7.0

## 0.4.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.6.6

## 0.4.5

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

- Updated dependencies [[`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d), [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43)]:
  - @launchpad-ui/popover@0.6.5

## 0.4.4

### Patch Changes

- Updated dependencies [[`534ebde`](https://github.com/launchdarkly/launchpad-ui/commit/534ebde2f8bb6abb53cb0443f4e3b2eee0a2064f)]:
  - @launchpad-ui/popover@0.6.4

## 0.4.3

### Patch Changes

- Updated dependencies [[`273180e`](https://github.com/launchdarkly/launchpad-ui/commit/273180e0a8d6851292a6c33bcccaadc9efe215f6)]:
  - @launchpad-ui/popover@0.6.3

## 0.4.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.6.2

## 0.4.1

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.6.1

## 0.4.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356), [`dfe9d18`](https://github.com/launchdarkly/launchpad-ui/commit/dfe9d1861a1b3cc3e84583539b2446f63932512e)]:
  - @launchpad-ui/popover@0.6.0

## 0.3.10

### Patch Changes

- [#267](https://github.com/launchdarkly/launchpad-ui/pull/267) [`ff2e97f`](https://github.com/launchdarkly/launchpad-ui/commit/ff2e97f1675f30c95ffa0b7772477a1961d163a3) Thanks [@Niznikr](https://github.com/Niznikr)! - [Tooltip] Make children optional

## 0.3.9

### Patch Changes

- Updated dependencies [[`d8d52bc`](https://github.com/launchdarkly/launchpad-ui/commit/d8d52bca9583789c0f1cb155812585f03d682f3f)]:
  - @launchpad-ui/popover@0.5.7

## 0.3.8

### Patch Changes

- [#259](https://github.com/launchdarkly/launchpad-ui/pull/259) [`ffb8b91`](https://github.com/launchdarkly/launchpad-ui/commit/ffb8b91991020e15a44ded38e02947c445ca1900) Thanks [@Niznikr](https://github.com/Niznikr)! - [Dropdown] Update to functional component:

  - [Dropdown] Extend `Popover` props
  - [Tooltip] Extend `Popover` props

- Updated dependencies []:
  - @launchpad-ui/popover@0.5.6

## 0.3.7

### Patch Changes

- Updated dependencies [[`532cbe4`](https://github.com/launchdarkly/launchpad-ui/commit/532cbe4ecb0a41f4eef3725a2ccfacf7d6586011), [`e5e01c2`](https://github.com/launchdarkly/launchpad-ui/commit/e5e01c26a4d20686489aac7d2106b939d5071037)]:
  - @launchpad-ui/popover@0.5.5

## 0.3.6

### Patch Changes

- Updated dependencies [[`d2d29a2`](https://github.com/launchdarkly/launchpad-ui/commit/d2d29a2489ab111511e98ce1036d419d97ffa0ed)]:
  - @launchpad-ui/popover@0.5.4

## 0.3.5

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.5.3

## 0.3.4

### Patch Changes

- Updated dependencies [[`b2a8ff5`](https://github.com/launchdarkly/launchpad-ui/commit/b2a8ff5f87c95be17c5749998f74f8bcedba65e8)]:
  - @launchpad-ui/popover@0.5.2

## 0.3.3

### Patch Changes

- Updated dependencies [[`204e574`](https://github.com/launchdarkly/launchpad-ui/commit/204e574344367cdd653b141d067ee6dcef74c17d)]:
  - @launchpad-ui/popover@0.5.1

## 0.3.2

### Patch Changes

- Updated dependencies [[`1fbb858`](https://github.com/launchdarkly/launchpad-ui/commit/1fbb858c8baaaa2f7cced15c81d1c2b0d49a7836)]:
  - @launchpad-ui/popover@0.5.0

## 0.3.1

### Patch Changes

- Updated dependencies [[`590838e`](https://github.com/launchdarkly/launchpad-ui/commit/590838e7744058324fc5223b6cb39f01a88f6e1a)]:
  - @launchpad-ui/popover@0.4.1

## 0.3.0

### Minor Changes

- [#192](https://github.com/launchdarkly/launchpad-ui/pull/192) [`eb6e44c`](https://github.com/launchdarkly/launchpad-ui/commit/eb6e44c7853a7263511cdf7aeaeb0d83a83d78b9) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Change from string literal union type to `PopoverInteractionKind` enum type used across Launchpad:

  - [Popover] Add and export `PopoverInteractionKind` type
  - [ProgressBubbles] Consume `PopoverInteractionKind`
  - [Tooltip] Consume `PopoverInteractionKind`

### Patch Changes

- Updated dependencies [[`eb6e44c`](https://github.com/launchdarkly/launchpad-ui/commit/eb6e44c7853a7263511cdf7aeaeb0d83a83d78b9)]:
  - @launchpad-ui/popover@0.4.0

## 0.2.6

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.3.2

## 0.2.5

### Patch Changes

- [#178](https://github.com/launchdarkly/launchpad-ui/pull/178) [`111376d`](https://github.com/launchdarkly/launchpad-ui/commit/111376d9e26d00f5d7757e127d539daed1e6e3ed) Thanks [@Niznikr](https://github.com/Niznikr)! - [Tooltip] Expose base component

- Updated dependencies []:
  - @launchpad-ui/popover@0.3.1

## 0.2.4

### Patch Changes

- Updated dependencies [[`d0cadcb`](https://github.com/launchdarkly/launchpad-ui/commit/d0cadcb6f13297e02fd7e8a0007b06a0bc1c66c6)]:
  - @launchpad-ui/popover@0.3.0

## 0.2.3

### Patch Changes

- Updated dependencies [[`cc0a367`](https://github.com/launchdarkly/launchpad-ui/commit/cc0a367f7d67f8c974b46c0b1ac743e7b020c0f2)]:
  - @launchpad-ui/popover@0.2.3

## 0.2.2

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.2.2

## 0.2.1

### Patch Changes

- [#146](https://github.com/launchdarkly/launchpad-ui/pull/146) [`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alias tokens:

  - Add alias tokens and use in component styles
  - Add dark theme custom properties and deliver as `dark.css`
  - Add theme toggle in Storybook

- Updated dependencies [[`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea)]:
  - @launchpad-ui/popover@0.2.1
  - @launchpad-ui/tokens@0.1.5

## 0.2.0

### Minor Changes

- [#139](https://github.com/launchdarkly/launchpad-ui/pull/139) [`982ce37`](https://github.com/launchdarkly/launchpad-ui/commit/982ce37db3605f091a5689a245e4517f63b67524) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Move stylesheets to styles folder in src for more consistency across packages

### Patch Changes

- Updated dependencies [[`7918749`](https://github.com/launchdarkly/launchpad-ui/commit/79187498674a2218102f2835e58d7a735129d4f4), [`735ebd5`](https://github.com/launchdarkly/launchpad-ui/commit/735ebd5ac2983af54fe1e55ced68435f432476cf)]:
  - @launchpad-ui/popover@0.2.0

## 0.1.4

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.1.4

## 0.1.3

### Patch Changes

- Updated dependencies []:
  - @launchpad-ui/popover@0.1.3

## 0.1.2

### Patch Changes

- [#109](https://github.com/launchdarkly/launchpad-ui/pull/109) [`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Migrate from classnames to clsx package

- Updated dependencies [[`5e26ff6`](https://github.com/launchdarkly/launchpad-ui/commit/5e26ff6ed36e712fa31dcd0c4362178e0075cb28)]:
  - @launchpad-ui/popover@0.1.2

## 0.1.1

### Patch Changes

- Updated dependencies [[`3ebbc38`](https://github.com/launchdarkly/launchpad-ui/commit/3ebbc38cb1dab6c1c3da1f6285fb7056a9be1d4d)]:
  - @launchpad-ui/popover@0.1.1

## 0.1.0

### Minor Changes

- [#89](https://github.com/launchdarkly/launchpad-ui/pull/89) [`92b5291`](https://github.com/launchdarkly/launchpad-ui/commit/92b52917b4f8915bd121c885e72eefbb6875a16f) Thanks [@Niznikr](https://github.com/Niznikr)! - Add tooltip package:

  - Add tooltip code, stories, and tests

### Patch Changes

- Updated dependencies [[`92b5291`](https://github.com/launchdarkly/launchpad-ui/commit/92b52917b4f8915bd121c885e72eefbb6875a16f), [`64596df`](https://github.com/launchdarkly/launchpad-ui/commit/64596df8d4116e0008f135867b47a64cb175977c), [`91bed3b`](https://github.com/launchdarkly/launchpad-ui/commit/91bed3bad3f7e0991cead2f563870b6c08edd577)]:
  - @launchpad-ui/popover@0.1.0
  - @launchpad-ui/tokens@0.1.4
