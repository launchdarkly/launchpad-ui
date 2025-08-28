---
"@launchpad-ui/components": patch
---

Remove Tag textValue from Tag removal IconButton aria-label, as it results in the Tag textValue getting included twice in the accessible name of the removal button, such as "Remove tag-name tag-name" instead of "Remove tag-name"
