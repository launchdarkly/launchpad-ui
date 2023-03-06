---
'@launchpad-ui/progress-bubbles': minor
'@launchpad-ui/split-button': minor
'@launchpad-ui/navigation': minor
'@launchpad-ui/clipboard': minor
'@launchpad-ui/popover': minor
'@launchpad-ui/tooltip': minor
'@launchpad-ui/banner': minor
'@launchpad-ui/button': minor
'@launchpad-ui/drawer': minor
'@launchpad-ui/filter': minor
'@launchpad-ui/select': minor
'@launchpad-ui/slider': minor
'@launchpad-ui/toggle': minor
'@launchpad-ui/tokens': minor
'@launchpad-ui/alert': minor
'@launchpad-ui/modal': minor
'@launchpad-ui/table': minor
'@launchpad-ui/chip': minor
'@launchpad-ui/form': minor
'@launchpad-ui/core': minor
---

Refactor theme targeting to support nested themes

To migrate:
Add `@import '@launchpad-ui/tokens/dist/themes.css';`. If you were previously importing `@import '@launchpad-ui/tokens/dist/dark.css';`, replace with the above, or remove.

If you are modifying CSS variables based on the theme, prefer to explicitly declare the value depending on the theme. Nothing will break if you don't do this, but the code will not support nested theming if you don't explicitly set values depending on theme.

Here's an example:
**DON'T:**

```css
.selector {
  color: #000;

  [data-theme='dark'] & {
    color: #fff;
  }
}
```

**DO:**

```css
:root,
[data-theme='default'] {
  --my-component-color-text: #000;
}

[data-theme='dark'] {
  --my-component-color-text: #fff;
}

.my-component {
  color: var(--my-component-color-text);
}
```
