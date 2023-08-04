# @launchpad-ui/inline-edit

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
