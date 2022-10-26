---
'@launchpad-ui/modal': minor
'@launchpad-ui/core': minor
---

[Modal] Make the following changes:

- Simplifies css naming in Modal
- Removes `.modalSheet` classnames
- Deprecated `titleClassName` - just use h2
- Renamed “Modal-close” test-id to “modal-close-button”
- Remove `Prompt` component in favor of putting the `Portal` in `Modal`
  - Note: `Prompt` className should be refactored in consuming apps
- Modal prop changes
  - Set default `withCloseButton` to true instead of false
  - Removes `modalLabelID` - this is only used once in the app and we can safely just switch to a default constant that’s kept internally. This API was clunky anyways because you had to give the same value to both Modal and ModalHeader
  - Removes `transition` prop since we will use the same transition for all modals
- ModalHeader prop changes
  - Removes unused `closeable` prop
  - Removes `titleID` which accompanied `modalLabelID` and was removed for reasons stated above
  - Removes `titleClassName` - we can safely target the className prop with an `h2` selector.
  - Removes `onClose` since we no longer have any way to close from `ModalHeader`
