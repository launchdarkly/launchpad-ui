# @launchpad-ui/progress-bubbles

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

- [#192](https://github.com/launchdarkly/launchpad-ui/pull/192) [`eb6e44c`](https://github.com/launchdarkly/launchpad-ui/commit/eb6e44c7853a7263511cdf7aeaeb0d83a83d78b9) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Change from string literal union type to `PopoverInteractionKind` enum type used across Launchpad:

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
