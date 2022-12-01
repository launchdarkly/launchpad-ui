# @launchpad-ui/tokens

## 0.3.2

### Patch Changes

- [#531](https://github.com/launchdarkly/launchpad-ui/pull/531) [`6dc1470`](https://github.com/launchdarkly/launchpad-ui/commit/6dc1470e52b9f2f1b4dae8800fa8fd6d2bc74a46) Thanks [@Niznikr](https://github.com/Niznikr)! - [Tokens] Add global z-index and duration tokens

## 0.3.1

### Patch Changes

- [#567](https://github.com/launchdarkly/launchpad-ui/pull/567) [`d80297f`](https://github.com/launchdarkly/launchpad-ui/commit/d80297fad893c9db566ed029e302702d5f245a98) Thanks [@Niznikr](https://github.com/Niznikr)! - [Tokens] Update bg and text tokens

## 0.3.0

### Minor Changes

- [#555](https://github.com/launchdarkly/launchpad-ui/pull/555) [`baeacd7`](https://github.com/launchdarkly/launchpad-ui/commit/baeacd7b80d60f36f4962f090d87a0009f28b44e) Thanks [@Niznikr](https://github.com/Niznikr)! - [Tokens] Update alias tokens to match schema `namespace-type-category-role-variant-state`:

  - Update components to use new tokens and ensure consistency
  - Set dark mode values to support both themes
  - Categories are bg, border, fill, shadow, text
  - Roles are feedback, interactive, overlay, ui
  - Variants are primary, secondary, tertiary, destructive, error, info, success, warning
  - States are active, disabled, focus, hover

## 0.2.0

### Minor Changes

- [#514](https://github.com/launchdarkly/launchpad-ui/pull/514) [`4090f93`](https://github.com/launchdarkly/launchpad-ui/commit/4090f93ba98ea6f75a7f9f7b902fafcfb9b005b3) Thanks [@Niznikr](https://github.com/Niznikr)! - [Tokens] Rename global tokens to match schema `namespace-type-name-scale`:

  - Prefix CSS custom properties with `lp` to namespace them
  - Use `100-900` for scales

## 0.1.5

### Patch Changes

- [#146](https://github.com/launchdarkly/launchpad-ui/pull/146) [`e081ce3`](https://github.com/launchdarkly/launchpad-ui/commit/e081ce335848eef3041212964f2e65d72870fbea) Thanks [@Niznikr](https://github.com/Niznikr)! - Add alias tokens:

  - Add alias tokens and use in component styles
  - Add dark theme custom properties and deliver as `dark.css`
  - Add theme toggle in Storybook

## 0.1.4

### Patch Changes

- [#87](https://github.com/launchdarkly/launchpad-ui/pull/87) [`64596df`](https://github.com/launchdarkly/launchpad-ui/commit/64596df8d4116e0008f135867b47a64cb175977c) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add the notification package:

  - Add notification code and tests
  - Add notification center code and tests
  - Add line-height tokens to tokens package

## 0.1.3

### Patch Changes

- [#82](https://github.com/launchdarkly/launchpad-ui/pull/82) [`45e786a`](https://github.com/launchdarkly/launchpad-ui/commit/45e786a9972406fbf0f93f73aeeaa81d1fded4f8) Thanks [@Niznikr](https://github.com/Niznikr)! - Add overlay package:

  - Add overlay code and tests
  - Add portal to modal package
  - Add custom media queries to tokens package

## 0.1.2

### Patch Changes

- [#35](https://github.com/launchdarkly/launchpad-ui/pull/35) [`ed49480`](https://github.com/launchdarkly/launchpad-ui/commit/ed494805b41e86019fb31483ef3e880313f88f4e) Thanks [@Niznikr](https://github.com/Niznikr)! - Build packages first for release

## 0.1.1

### Patch Changes

- [#24](https://github.com/launchdarkly/launchpad-ui/pull/24) [`19c7ebe`](https://github.com/launchdarkly/launchpad-ui/commit/19c7ebef9229c1a2bdd34a2a43a0331ddeae5284) Thanks [@Niznikr](https://github.com/Niznikr)! - Add READMEs

## 0.1.0

### Minor Changes

- [#15](https://github.com/launchdarkly/launchpad-ui/pull/15) [`e6e3f62`](https://github.com/launchdarkly/launchpad-ui/commit/e6e3f6278411792b20aaaf2d7eb0d213184ecc32) Thanks [@Niznikr](https://github.com/Niznikr)! - Add tokens package:

  - Use [style-dictionary](https://amzn.github.io/style-dictionary/#/) to organize design tokens
  - Deliver tokens as CSS variables, ES modules, and CommonJS modules
  - Transform color tokens to RGB values

### Patch Changes

- [#17](https://github.com/launchdarkly/launchpad-ui/pull/17) [`a11258e`](https://github.com/launchdarkly/launchpad-ui/commit/a11258ed0acdd53e74970ca0fe9c26318344271c) Thanks [@Niznikr](https://github.com/Niznikr)! - Include styles in exports
