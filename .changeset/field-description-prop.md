---
"@launchpad-ui/components": minor
---

Add ergonomic `description` and `errorMessage` props to field components: `TextField`, `NumberField`, `SearchField`, `Select`, `ComboBox`, `RadioGroup`, `CheckboxGroup`, `DateField`, and `TimeField`.

These render the React Aria `description` slot (`<Text slot="description">`) and `FieldError` internally, matching the Figma library's flat `description` property and resolving the Code Connect drift. The change is additive and non-breaking: passing helper text as `<Text slot="description">` / `<FieldError>` children remains fully supported.
