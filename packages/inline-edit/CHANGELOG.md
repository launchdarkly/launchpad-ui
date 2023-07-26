# @launchpad-ui/inline-edit

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
