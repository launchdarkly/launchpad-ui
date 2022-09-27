# @launchpad-ui/clipboard

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
