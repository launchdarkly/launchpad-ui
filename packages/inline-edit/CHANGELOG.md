# @launchpad-ui/inline-edit

## 0.1.10

### Patch Changes

- Updated dependencies [[`21ef85cf`](https://github.com/launchdarkly/launchpad-ui/commit/21ef85cf2d32936d7907712bf35d5f3fba29ef40)]:
  - @launchpad-ui/icons@0.12.1
  - @launchpad-ui/button@0.10.3
  - @launchpad-ui/form@0.9.11

## 0.1.9

### Patch Changes

- Updated dependencies [[`5d398d07`](https://github.com/launchdarkly/launchpad-ui/commit/5d398d071ee124e430bf127b86cfeb2af3af3989)]:
  - @launchpad-ui/icons@0.12.0
  - @launchpad-ui/button@0.10.2
  - @launchpad-ui/form@0.9.10

## 0.1.8

### Patch Changes

- Updated dependencies [[`e834a1f1`](https://github.com/launchdarkly/launchpad-ui/commit/e834a1f19a52678b79edb91db9fdd356a71dbb8d)]:
  - @launchpad-ui/icons@0.11.0
  - @launchpad-ui/button@0.10.1
  - @launchpad-ui/form@0.9.9

## 0.1.7

### Patch Changes

- Updated dependencies [[`6b94906e`](https://github.com/launchdarkly/launchpad-ui/commit/6b94906e69d9f7516388d465689f7ff2e37faf9a), [`45d511ea`](https://github.com/launchdarkly/launchpad-ui/commit/45d511ea87c176e0cb12f2cdac885ef8cec91058)]:
  - @launchpad-ui/icons@0.10.0
  - @launchpad-ui/button@0.10.0
  - @launchpad-ui/tokens@0.7.0
  - @launchpad-ui/form@0.9.8
  - @launchpad-ui/vars@0.2.1

## 0.1.6

### Patch Changes

- Updated dependencies [[`2be20b76`](https://github.com/launchdarkly/launchpad-ui/commit/2be20b76362713b2f4fe25e0e045271f2358e59e)]:
  - @launchpad-ui/icons@0.9.6
  - @launchpad-ui/button@0.9.6
  - @launchpad-ui/form@0.9.7

## 0.1.5

### Patch Changes

- Updated dependencies [[`6a034ffe`](https://github.com/launchdarkly/launchpad-ui/commit/6a034ffef935f54dd077b6cdcc5cf14c02629d6b)]:
  - @launchpad-ui/icons@0.9.5
  - @launchpad-ui/button@0.9.5
  - @launchpad-ui/form@0.9.6

## 0.1.4

### Patch Changes

- [#965](https://github.com/launchdarkly/launchpad-ui/pull/965) [`fec67a1c`](https://github.com/launchdarkly/launchpad-ui/commit/fec67a1c3713ae80295a437076f8d5ea59edcd58) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

- [#957](https://github.com/launchdarkly/launchpad-ui/pull/957) [`8595e29c`](https://github.com/launchdarkly/launchpad-ui/commit/8595e29caa3014143cde77800fbbeceb925ee1f2) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

- Updated dependencies [[`fec67a1c`](https://github.com/launchdarkly/launchpad-ui/commit/fec67a1c3713ae80295a437076f8d5ea59edcd58), [`8595e29c`](https://github.com/launchdarkly/launchpad-ui/commit/8595e29caa3014143cde77800fbbeceb925ee1f2)]:
  - @launchpad-ui/form@0.9.5

## 0.1.3

### Patch Changes

- Updated dependencies [[`5aad4986`](https://github.com/launchdarkly/launchpad-ui/commit/5aad4986acc0cf5f593247fbe041cf8938a684a3)]:
  - @launchpad-ui/icons@0.9.4
  - @launchpad-ui/button@0.9.4
  - @launchpad-ui/form@0.9.4

## 0.1.2

### Patch Changes

- [#947](https://github.com/launchdarkly/launchpad-ui/pull/947) [`29e2b26c`](https://github.com/launchdarkly/launchpad-ui/commit/29e2b26c7f2a5496adb11a72fd79fcadd33717ff) Thanks [@Niznikr](https://github.com/Niznikr)! - Annotate pure functions

- Updated dependencies [[`29e2b26c`](https://github.com/launchdarkly/launchpad-ui/commit/29e2b26c7f2a5496adb11a72fd79fcadd33717ff)]:
  - @launchpad-ui/button@0.9.3
  - @launchpad-ui/form@0.9.3
  - @launchpad-ui/icons@0.9.3

## 0.1.1

### Patch Changes

- [#946](https://github.com/launchdarkly/launchpad-ui/pull/946) [`f6ea1287`](https://github.com/launchdarkly/launchpad-ui/commit/f6ea12877132ec0a3a0d466326df77cf7d367cda) Thanks [@Niznikr](https://github.com/Niznikr)! - [InlineEdit] Forward ref and spread additional props

## 0.1.0

### Minor Changes

- [#938](https://github.com/launchdarkly/launchpad-ui/pull/938) [`db9e620b`](https://github.com/launchdarkly/launchpad-ui/commit/db9e620b578ebee1adfb14054753ffcfe76a313f) Thanks [@Niznikr](https://github.com/Niznikr)! - Add `inline-edit` package to display and allow inline editing of a form elements:

  - Use props `defaultValue` and `onConfirm` to handle state management of the value to edit
  - Have children act as the "read" view of the component
  - Hide edit icon button and wrap children with a React Aria button when `hideEdit` is true
  - Implement focus management to ensure focus is directed correctly when toggling between read and edit mode
  - Use `renderInput` prop to allow passing a custom `TextField` or `TextArea` component
  - Add handlers for edit, cancel, and confirm actions
  - Use prop `isEditing` to allow full control over the read and edit modes
  - Add `@vanilla-extract/css` as a peer dependency for prop `layout` variant types
  - Use `useFocusWithin` to cancel edit on blur
