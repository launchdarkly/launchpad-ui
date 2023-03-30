# @launchpad-ui/tokens

## 0.5.5

### Patch Changes

- [#801](https://github.com/launchdarkly/launchpad-ui/pull/801) [`7760fefe`](https://github.com/launchdarkly/launchpad-ui/commit/7760fefea91fddf17f15163ce05f555215dc4b90) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Tokens] Update pink-600 color

## 0.5.4

### Patch Changes

- [#759](https://github.com/launchdarkly/launchpad-ui/pull/759) [`c120d56c`](https://github.com/launchdarkly/launchpad-ui/commit/c120d56c7b4045cefa5520954dc7683159768625) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Tokens] Add back :root to token list

## 0.5.3

### Patch Changes

- [#735](https://github.com/launchdarkly/launchpad-ui/pull/735) [`d5bd5d0d`](https://github.com/launchdarkly/launchpad-ui/commit/d5bd5d0de1cedc2d341beced3ac8239167a85108) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Remove :root from token variables

## 0.5.2

### Patch Changes

- [`152aef91`](https://github.com/launchdarkly/launchpad-ui/commit/152aef9126c5291586b09b703795030f52a01bb1) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Clipboard]: Update default button styles to match Button styling
  [Button]: Remove unused CSS variables
  [Tokens]: Add `:root` to default theme variables
  [Chip]: Update darkmode default chip color

## 0.5.1

### Patch Changes

- [#730](https://github.com/launchdarkly/launchpad-ui/pull/730) [`909a0fde`](https://github.com/launchdarkly/launchpad-ui/commit/909a0fdebf57634d5c100626cb432c35eac1c661) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Tokens] Add `lp-white-200` color
  [Chip] Modify default bg colors

## 0.5.0

### Minor Changes

- [#719](https://github.com/launchdarkly/launchpad-ui/pull/719) [`3cf45ed4`](https://github.com/launchdarkly/launchpad-ui/commit/3cf45ed4df4c4472cb8dcf48ef1cd5e7916a35ad) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Refactor theme targeting to support nested themes

  To migrate:
  Add `@import '@launchpad-ui/tokens/dist/themes.css';`. If you were previously importing `@import '@launchpad-ui/tokens/dist/dark.css';`, replace with the above, or remove.

  If you are modifying CSS variables based on the theme, prefer to explicitly declare the value depending on the theme. Nothing will break if you don't do this, but the code will not support nested theming if you don't explicitly set values depending on theme.

  **Instead of this:**

  ```css
  .selector {
    color: #000;

    [data-theme='dark'] & {
      color: #fff;
    }
  }
  ```

  **Prefer this:**

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

## 0.4.10

### Patch Changes

- [#610](https://github.com/launchdarkly/launchpad-ui/pull/610) [`c76ec2ad`](https://github.com/launchdarkly/launchpad-ui/commit/c76ec2adf7e135faa32d6ee39b66886cbb2a1f10) Thanks [@renovate](https://github.com/apps/renovate)! - Update nonmajor versions across framework

## 0.4.9

### Patch Changes

- [#665](https://github.com/launchdarkly/launchpad-ui/pull/665) [`808902f7`](https://github.com/launchdarkly/launchpad-ui/commit/808902f71c0b410adf86b0ee1683a2d36c4cdb22) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Tokens] Add `--lp-color-gray-900` and modify `--lp-color-bg-interactive-secondary` darkmode color

## 0.4.8

### Patch Changes

- [#642](https://github.com/launchdarkly/launchpad-ui/pull/642) [`f2ae1a80`](https://github.com/launchdarkly/launchpad-ui/commit/f2ae1a80d678a1a61dee407b8574e4c52f55299f) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Dark mode updates based on design feedback

  [Filter]: Update clearable button styles
  [Form]: Update disabled state dark mode colors and placeholder colors
  [Modal]: Update dark mode overlay and card background
  [Popover]: Update box shadow
  [Tokens]: Apply various token alias updates
  [Tooltip]: Update dark mode theming

## 0.4.7

### Patch Changes

- [#629](https://github.com/launchdarkly/launchpad-ui/pull/629) [`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update Vite build tool to 4.0

- [#627](https://github.com/launchdarkly/launchpad-ui/pull/627) [`b744011d`](https://github.com/launchdarkly/launchpad-ui/commit/b744011dccd525faa534f8def5ee8af2e346268a) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Improve dark mode theme support for alerts

  [Tokens]: Update `--lp-color-bg-feedback` token values to use alpha 0.15 for backgrounds

  [Alert]: Update CSS variables to remove old `reskin` values and simplify naming

  [Banner]: Update CSS variables to remove old values and simplify naming

  [Button]: Update dark mode default button background style

- [#626](https://github.com/launchdarkly/launchpad-ui/pull/626) [`94fe4b9a`](https://github.com/launchdarkly/launchpad-ui/commit/94fe4b9ada726c190701555c0f5bdca3e8ec610d) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update tokens based on design team feedback

  [Button]: Destructive buttons in dark mode should have no background color in their default state

  [Tokens]: Update the following:

  - Tweak Gray 600 and Red 600 to comply with contrast ratio criteria
  - Update interactive secondary border color to increase contrast
  - Update link color in darkmode from Cyan 600 to 500.

## 0.4.6

### Patch Changes

- [#619](https://github.com/launchdarkly/launchpad-ui/pull/619) [`9064d45c`](https://github.com/launchdarkly/launchpad-ui/commit/9064d45cf157f7ded1a11a100940bd144f410fd6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update theme tokens for dark mode button, form, and progress-bubbles

  [Button]: Update destructive theme tokens
  [Form]: Update placeholder and border colors
  [ProgressBubbles]: Update backgrounds for dark mode
  [Tokens]: Update tokens for related component changes

## 0.4.5

### Patch Changes

- [#615](https://github.com/launchdarkly/launchpad-ui/pull/615) [`c48e0b4f`](https://github.com/launchdarkly/launchpad-ui/commit/c48e0b4fff3e0792b453f9173459fd197871f3d0) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Form] Update label text color and field error border
  [Tokens] Add form error tokens

## 0.4.4

### Patch Changes

- [#613](https://github.com/launchdarkly/launchpad-ui/pull/613) [`57484ab9`](https://github.com/launchdarkly/launchpad-ui/commit/57484ab9998ef50a32ab51bb9c0286b7be84fdb2) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Popover]: Update background color and shadow color
  [Tokens]: Update `lp-color-bg-overlay-primary` token value and darkmode shadow ui value

- [#612](https://github.com/launchdarkly/launchpad-ui/pull/612) [`4c2dc031`](https://github.com/launchdarkly/launchpad-ui/commit/4c2dc0315fe0742ad78b706552d7c7e8e87f8e0e) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Tokens]: Add `-field-` variant tokens
  [Form]: Improve theming with new field tokens

## 0.4.3

### Patch Changes

- [#609](https://github.com/launchdarkly/launchpad-ui/pull/609) [`9b37d196`](https://github.com/launchdarkly/launchpad-ui/commit/9b37d196a691fd6a4ca0f989c4121b8683d8f7cb) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Improve themability support in alert and banner

  [Alert]: Improve themability of component
  [Banner]: Improve themability of component
  [Chip]: Move to newly named feedback token
  [Tokens]: Add feedback tokens

## 0.4.2

### Patch Changes

- [`c0840e07`](https://github.com/launchdarkly/launchpad-ui/commit/c0840e07ba5a4f3da47b792d27680bc2549169f5) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add text feedback tokens for status states

## 0.4.1

### Patch Changes

- [#598](https://github.com/launchdarkly/launchpad-ui/pull/598) [`353eccef`](https://github.com/launchdarkly/launchpad-ui/commit/353eccefd155dd95c0221c7e8960ca14afb4baad) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Drawer]: Update z-index

  [Modal]: Update z-index

  [Navigation]: Update primary bottom border color

  [Notification]: Update z-index

  [Popover]: Update z-index

  [Snackbar]: Update z-index

  [SplitButton]: Improve theming for button borders

  [Table]: Improve theming for table cell head

  [Toast]: Update z-index

  [Tooltip]: Update z-index

  [Tokens]:

  - Update `lp-color-bg-interactive-disabled` dark value
  - Update `lp-color-bg-overlay-primary` dark value
  - Update `lp-color-border-interactive-secondary` dark value
  - Update `lp-color-border-interactive-disabled` dark value

  [ProgressBubbles]: Update dark mode styling

## 0.4.0

### Minor Changes

- [#595](https://github.com/launchdarkly/launchpad-ui/pull/595) [`9c9429e3`](https://github.com/launchdarkly/launchpad-ui/commit/9c9429e3707c9f229357875f9278755b3f3d7eda) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update theme tokens

  [Tokens]:

  - Add `lp-color-shadow-ui-primary`
  - Add a dark theme value to `lp-color-border-ui-primary`
  - Rename `lp-border-radius` to `lp-border-radius-regular` and add `lp-border-radius-medium`

  [Alert]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Button]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Chip]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Alert]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Form]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Menu]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Popover]: Rename `lp-border-radius` to `lp-border-radius-regular`

  [Clipboard]: Support theming in `CopyCodeButton`

  [Filter]:

  - Rename `lp-border-radius` to `lp-border-radius-regular`
  - Support theming in filter button and applied filter button components

  [Modal]: Support theming for border and box shadow on modal

  [Notification]:

  - Rename `lp-border-radius` to `lp-border-radius-regular`
  - Improve theming for links in notifications

### Patch Changes

- [#597](https://github.com/launchdarkly/launchpad-ui/pull/597) [`71549774`](https://github.com/launchdarkly/launchpad-ui/commit/71549774aad5dcd0887379beba474e2371d320e6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update theme tokens and usage in LaunchPad

  [Tokens]:

  - Add `lp-color-border-ui-secondary` token
  - Update `lp-color-shadow-ui-primary` token value to improve design

  [Table]: Improve theming support for table header and row borders

  [TabList]: Improve theming support for TabList items

  [Counter]: Switch to `lp-color-border-ui-secondary` border style

  [Modal]: Switch to `lp-color-border-ui-secondary` border style

  [Button]: Explicitly specify a color for `close` kind buttons

  [Avatar]: Improve theming support for avatar component

  [Chip]: Improve theming support for label chip

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
