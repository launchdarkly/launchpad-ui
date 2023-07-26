---
'@launchpad-ui/inline-edit': minor
'@launchpad-ui/core': patch
---

Add `inline-edit` package to display and allow inline editing of a form elements:

- Use props `defaultValue` and `onConfirm` to handle state management of the value to edit
- Have children act as the "read" view of the component
- Hide edit icon button and wrap children with a React Aria button when `hideEdit` is true
- Implement focus management to ensure focus is directed correctly when toggling between read and edit mode
- Use `renderInput` prop to allow passing a custom `TextField` or `TextArea` component
- Add handlers for edit, cancel, and confirm actions
- Use prop `isEditing` to allow full control over the read and edit modes
- Add `@vanilla-extract/css` as a peer dependency for prop `layout` variant types
