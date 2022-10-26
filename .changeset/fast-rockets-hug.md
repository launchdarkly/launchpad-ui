---
'@launchpad-ui/modal': minor
'@launchpad-ui/core': minor
---

[Modal] Make the following changes:

- Simplify css naming in Modal
- Remove `.modalSheet` classnames
- Deprecate `titleClassName` - just use h2
- Rename “Modal-close” test-id to “modal-close-button”
- Remove `Prompt` component in favor of putting the `Portal` in `Modal`
  - Note: `Prompt` className should be refactored in consuming apps
- Change `Modal` props:
  - Set default `withCloseButton` to true instead of false
  - Remove `modalLabelID` - this is only used once in the app and we can safely just switch to a default constant that’s kept internally. This API was clunky anyways because you had to give the same value to both Modal and ModalHeader
  - Remove `transition` prop since we will use the same transition for all modals
- Change `ModalHeader` props:
  - Remove unused `closeable` prop
  - Remove `titleID` which accompanied `modalLabelID` and was removed for reasons stated above
  - Remove `titleClassName` - we can safely target the className prop with an `h2` selector.
  - Remove `onClose` since we no longer have any way to close from `ModalHeader`
