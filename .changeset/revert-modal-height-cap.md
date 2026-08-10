---
'@launchpad-ui/components': patch
---

Revert the default Modal height cap introduced in 0.23.1. Making the modal container a flex column changed layout behavior for consumers that pass custom children or style the dialog (content could shrink to fit-content width, and consumer `min-height` rules were overridden). The cap will return in a follow-up scoped so it cannot affect consumer-provided content.
