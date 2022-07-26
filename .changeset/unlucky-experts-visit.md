---
'@launchpad-ui/menu': minor
'@launchpad-ui/button': patch
'@launchpad-ui/core': minor
---

Add slot to menu and remove dependency on RR for button & menu

- [Menu]: Add slot package to remove React Router dependency, add MenuSize enum.
- [Button]: Remove React Router dependency by generalizing the `to` prop. In the future, we will look into allowing slottable buttons.
