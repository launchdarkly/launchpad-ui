# @launchpad-ui/markdown

## 0.3.0

### Minor Changes

- [#324](https://github.com/launchdarkly/launchpad-ui/pull/324) [`0ce0a50`](https://github.com/launchdarkly/launchpad-ui/commit/0ce0a50b8401ec39ef290605a2789c987c6264ce) Thanks [@Niznikr](https://github.com/Niznikr)! - Use vite for builds:

  Each package's styles are now located in a single `style.css` within the root:

  Before:

  ```js
  import alertStyles from '@launchpad-ui/alert/styles/Alert.css';
  ```

  After:

  ```js
  import alertStyles from '@launchpad-ui/alert/style.css';
  ```

  The `core` package no longer bundles styles. If you need to import stylesheets for the components (in a Remix app for example) simply import them from the individual packages that come included when you install the `core` package.

## 0.2.2

### Patch Changes

- [#308](https://github.com/launchdarkly/launchpad-ui/pull/308) [`57e9aa3`](https://github.com/launchdarkly/launchpad-ui/commit/57e9aa3748b59b2601be5ede39423dcc79c0fa43) Thanks [@Niznikr](https://github.com/Niznikr)! - Replace clsx with classix for joining classNames

## 0.2.1

### Patch Changes

- [#299](https://github.com/launchdarkly/launchpad-ui/pull/299) [`273180e`](https://github.com/launchdarkly/launchpad-ui/commit/273180e0a8d6851292a6c33bcccaadc9efe215f6) Thanks [@chasedarkly](https://github.com/chasedarkly)! - [Markdown] Add testId param to component
  [Popover] Add testId param to component
  [Progress] Add testId param to component

## 0.2.0

### Minor Changes

- [#273](https://github.com/launchdarkly/launchpad-ui/pull/273) [`d74c632`](https://github.com/launchdarkly/launchpad-ui/commit/d74c6321e0359b7a328acf33eaecef6937448356) Thanks [@Niznikr](https://github.com/Niznikr)! - Set minimum React version to 18

## 0.1.1

### Patch Changes

- [#247](https://github.com/launchdarkly/launchpad-ui/pull/247) [`f7252c0`](https://github.com/launchdarkly/launchpad-ui/commit/f7252c0eccf670ba30f16dcef1e89600ab6e03e6) Thanks [@Niznikr](https://github.com/Niznikr)! - [Markdown] Add styles

## 0.1.0

### Minor Changes

- [#200](https://github.com/launchdarkly/launchpad-ui/pull/200) [`bf9d67a`](https://github.com/launchdarkly/launchpad-ui/commit/bf9d67a045d20c91f912817adf2d7af3122158f2) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Add markdown package:

  - [Markdown] Add markdown code, stories, and tests
