---
'@launchpad-ui/components': patch
---

Add a 1px border to `TagGroup` tags for better definition against the lightened feedback backgrounds. Feedback variants (`success`, `error`, `warning`, `info`, `new`) use their matching `border-feedback-*` token and the `default` variant uses `border-ui-primary`; the `beta` and `federal` variants are intentionally left borderless.
