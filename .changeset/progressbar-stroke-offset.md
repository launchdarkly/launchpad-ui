---
'@launchpad-ui/components': patch
---

Fix ProgressBar stroke offset when a determinate percentage is provided; an operator-precedence bug made any truthy percentage render as if nearly complete.
