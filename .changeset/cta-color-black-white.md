---
'@launchpad-ui/tokens': minor
'@launchpad-ui/components': patch
'@launchpad-ui/button': patch
---

Repoint the `bg.interactive.primary` color aliases to the brand's black/white ramps — black in light mode, white in dark mode — so primary CTAs and selection controls follow the updated brand. The blue focus ring and all destructive styling are unchanged, and the deprecated `@launchpad-ui/button` package is pinned to the previous blue. Also fixes an unreadable label on selected primary toggle buttons and improves primary button contrast in the disabled state.
