# @launchpad-ui/form

## 0.6.5-alpha.1

### Patch Changes

- Updated dependencies [[`982ef8c`](https://github.com/launchdarkly/launchpad-ui/commit/982ef8c3812412f36ea98f67659b7477dc467d46)]:
  - @launchpad-ui/icons@0.5.4-alpha.1

## 0.6.5

### Patch Changes

- Updated dependencies [[`519cac2`](https://github.com/launchdarkly/launchpad-ui/commit/519cac2751d8e33be95850b4671e608c55dd9e4b), [`8548b71`](https://github.com/launchdarkly/launchpad-ui/commit/8548b71cbb0dd329e64ded5568f9ee6320fc2a13)]:
  - @launchpad-ui/icons@0.5.4

## 0.6.4

### Patch Changes

- Updated dependencies [[`69c763b`](https://github.com/launchdarkly/launchpad-ui/commit/69c763b62431a9a647313f725c2e15a0c597014d)]:
  - @launchpad-ui/icons@0.5.3

## 0.6.3

### Patch Changes

- Updated dependencies [[`9bf79e4`](https://github.com/launchdarkly/launchpad-ui/commit/9bf79e4d07192858e723900d8ab4c208872894a5)]:
  - @launchpad-ui/icons@0.5.2

## 0.6.2

### Patch Changes

- [`aa81e52`](https://github.com/launchdarkly/launchpad-ui/commit/aa81e527b911d0ec240e5231292071aa2a4e3ccf) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Form] Pass test ID down to text field

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
  - @launchpad-ui/icons@0.5.1

## 0.6.0

### Minor Changes

- [#386](https://github.com/launchdarkly/launchpad-ui/pull/386) [`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace enums with string union types

### Patch Changes

- Updated dependencies [[`86b0120`](https://github.com/launchdarkly/launchpad-ui/commit/86b0120c548063baba69205215f644b4a2d9a7fd)]:
  - @launchpad-ui/icons@0.5.0

## 0.5.1-alpha.0

### Patch Changes

- Updated dependencies [[`e860080`](https://github.com/launchdarkly/launchpad-ui/commit/e86008076dc61cfcfc4c22317021e793d4fd59a9)]:
  - @launchpad-ui/icons@0.4.1-alpha.0

## 0.5.0

### Minor Changes

- [#353](https://github.com/launchdarkly/launchpad-ui/pull/353) [`77d3033`](https://github.com/launchdarkly/launchpad-ui/commit/77d30335d2f4e04b5775d4e3bdde7c35a176f211) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Form] Enhance component API to support HTML attribute passthrough where possible

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
  - @launchpad-ui/icons@0.4.0

## 0.3.5

### Patch Changes

- [#321](https://github.com/launchdarkly/launchpad-ui/pull/321) [`5938ae8`](https://github.com/launchdarkly/launchpad-ui/commit/5938ae86eb6c28d57a4ef185c306c8328007cfd9) Thanks [@Niznikr](https://github.com/Niznikr)! - [Form] Remove margin from `RequiredAsterisk`

## 0.3.4

### Patch Changes

- [#318](https://github.com/launchdarkly/launchpad-ui/pull/318) [`f3e9080`](https://github.com/launchdarkly/launchpad-ui/commit/f3e90806342f7faeb20936c0b25d0695e1e83c06) Thanks [@Niznikr](https://github.com/Niznikr)! - [Form] Add placeholder and onBlur to Select props

## 0.3.3

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

- Updated dependencies [[`d5272f3`](https://github.com/launchdarkly/launchpad-ui/commit/d5272f36dd1fb23443a1e831748900c21444482d), [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43)]:
  - @launchpad-ui/icons@0.3.3

## 0.3.2

### Patch Changes

- Updated dependencies [[`c5d00b2`](https://github.com/launchdarkly/launchpad-ui/commit/c5d00b204a9682a5ba3f883de4c830b67caf0c8b)]:
  - @launchpad-ui/icons@0.3.2

## 0.3.1

### Patch Changes

- Updated dependencies [[`7fb3d52`](https://github.com/launchdarkly/launchpad-ui/commit/7fb3d5256821e10a4ad4892e47fa88a2a8cee94c)]:
  - @launchpad-ui/icons@0.3.1

## 0.3.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

### Patch Changes

- Updated dependencies [[`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356)]:
  - @launchpad-ui/icons@0.3.0

## 0.2.9

### Patch Changes

- [#260](https://github.com/launchdarkly/launchpad-ui/pull/260) [`5e4a3bd`](https://github.com/launchdarkly/launchpad-ui/commit/5e4a3bd1c3c332cb698664a0c753485af3068a82) Thanks [@Niznikr](https://github.com/Niznikr)! - Remove use of object in prop types:

  - [Clipboard] Update `tooltipOptions` type
  - [Form] Update Radio `labelStyle` type
  - [SplitButton] Update `tooltipOptions` type

- Updated dependencies [[`a276064`](https://github.com/launchdarkly/launchpad-ui/commit/a27606486f3aa56cd8e7772bbdda0bc0f4aa1ec6)]:
  - @launchpad-ui/icons@0.2.4

## 0.2.8

### Patch Changes

- [#243](https://github.com/launchdarkly/launchpad-ui/pull/243) [`1835250`](https://github.com/launchdarkly/launchpad-ui/commit/1835250f2a851b6478c749ec17f5a8fbb0ac0b0c) Thanks [@Niznikr](https://github.com/Niznikr)! - [Form] Remove lodash

## 0.2.7

### Patch Changes

- [#237](https://github.com/launchdarkly/launchpad-ui/pull/237) [`d2d29a2`](https://github.com/launchdarkly/launchpad-ui/commit/d2d29a2489ab111511e98ce1036d419d97ffa0ed) Thanks [@Niznikr](https://github.com/Niznikr)! - Update `@react-aria` for smaller bundle sizes

## 0.2.6

### Patch Changes

- Updated dependencies [[`f567202`](https://github.com/launchdarkly/launchpad-ui/commit/f567202860088b877a2a4edbbb1c90dc0906ab3b)]:
  - @launchpad-ui/icons@0.2.3

## 0.2.5

### Patch Changes

- [#204](https://github.com/launchdarkly/launchpad-ui/pull/204) [`1e74d18`](https://github.com/launchdarkly/launchpad-ui/commit/1e74d1803e22b675abf1195f798da85092a5d33a) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Remove disabling no-descending-specificity rules in packages:

  [Notification]: Refactored stylesheets to remove no-descending-specificity disable rules
  [Form]: Refactored stylesheets to remove no-descending-specificity disable rules
  [ProgressBubbles]: Refactored stylesheets to remove no-descending-specificity disable rules
  [Menu]: Refactored stylesheets to remove no-descending-specificity disable rules

## 0.2.4

### Patch Changes

- [#193](https://github.com/launchdarkly/launchpad-ui/pull/193) [`ceaee6b`](https://github.com/launchdarkly/launchpad-ui/commit/ceaee6b61a1fe16dd7b4e70ab4005d40203f2ba4) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Removed or moved styles for u- classes in form package

  - [Form] removed or moved styles for u- classes

## 0.2.3

### Patch Changes

- Updated dependencies [[`dcbb98d`](https://github.com/launchdarkly/launchpad-ui/commit/dcbb98d771845740af3306c5c46774df0840deb4)]:
  - @launchpad-ui/icons@0.2.2

## 0.2.2

### Patch Changes

- [#146](https://github.com/launchdarkly/launchpad-ui/pull/146) [`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alias tokens:

  - Add alias tokens and use in component styles
  - Add dark theme custom properties and deliver as `dark.css`
  - Add theme toggle in Storybook

- Updated dependencies [[`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea)]:
  - @launchpad-ui/icons@0.2.1
  - @launchpad-ui/tokens@0.1.5

## 0.2.1

### Patch Changes

- Updated dependencies [[`982ce37`](https://github.com/launchdarkly/launchpad-ui/commit/982ce37db3605f091a5689a245e4517f63b67524)]:
  - @launchpad-ui/icons@0.2.0

## 0.2.0

### Minor Changes

- [#134](https://github.com/launchdarkly/launchpad-ui/pull/134) [`e67e23c`](https://github.com/launchdarkly/launchpad-ui/commit/e67e23c857c47bbbeb09cba81f2f9bbfcc0e2b1d) Thanks [@Niznikr](https://github.com/Niznikr)! - Update to functional components

## 0.1.1

### Patch Changes

- Updated dependencies [[`c325186`](https://github.com/launchdarkly/launchpad-ui/commit/c325186e06042d5b87ec93ed2f7fb150e96c9024)]:
  - @launchpad-ui/icons@0.1.6

## 0.1.0

### Minor Changes

- [#112](https://github.com/launchdarkly/launchpad-ui/pull/112) [`47a96d3`](https://github.com/launchdarkly/launchpad-ui/commit/47a96d3842c35db89059d12ead0374139a5b7481) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add form package:

  - Add Checkbox, CompactTextField, FieldError, FieldSet, Form, FormField, FormGroup, FormHint, IconField, InputGroup, Radio, RadioGroup, RequiredAsterisk, Select, TextArea, TextField
