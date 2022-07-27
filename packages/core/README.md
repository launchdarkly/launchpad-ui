# @launchpad-ui/core

A modern, intuitive, and accessible design system made and used by the LaunchDarkly team. Built on React, TypeScript, and CSS.

[![See it on NPM!](https://img.shields.io/npm/v/@launchpad-ui/core?style=for-the-badge)](https://www.npmjs.com/package/@launchpad-ui/core)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@launchpad-ui/core?style=for-the-badge)](https://bundlephobia.com/result?p=@launchpad-ui/core)

## Installation

```sh
$ yarn add @launchpad-ui/core
# or
$ npm install @launchpad-ui/core
```

## Usage

First, import the CSS variable tokens into your project:

```css
@import '@launchpad-ui/core/dist/styles/tokens.css';
```

Voilà, you can now begin using any of the components available in Launchpad. For the full list, view [our Storybook](https://main--626696a2018c1f004a1cde86.chromatic.com/?path=/story/components-alert--success).

```jsx
import { Alert, AlertKind } from '@launchpad-ui/core';

...

return (
  <Alert kind={AlertKind.ERROR}>
    An unexpected error occurred.
  </Alert>
)
```

### Importing stylesheets

In some frameworks, such as Remix, adding styles via `<link rel="stylesheet">` tags is the preferred approach. In Launchpad, we expose each component's stylesheets so you can import them directly. For a Remix example, [click here](https://github.com/launchdarkly/launchpad-ui/blob/main/apps/remix/app/root.tsx#L41).

---

### Prerelease Testing

To feature flag and test a prerelease version of a component, first install the prerelease:

```sh
$ yarn add @launchpad-ui/alert@0.10.0-beta.0
```

Then import and use the prerelease version alongside the version from `core`:

```jsx
import { Alert, AlertKind } from '@launchpad-ui/core';
import { Alert as BetaAlert } from '@launchpad-ui/alert';

...

if (enableNewAlert()) {
  return (
    <BetaAlert>...</BetaAlert>
  );
}

return (
  <Alert kind={AlertKind.ERROR}>
    An unexpected error occurred.
  </Alert>
)
```
