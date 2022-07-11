# @launchpad-ui/core

> Contains all Launchpad design system packages.

[![See it on NPM!](https://img.shields.io/npm/v/@launchpad-ui/core?style=for-the-badge)](https://www.npmjs.com/package/@launchpad-ui/core)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@launchpad-ui/core?style=for-the-badge)](https://bundlephobia.com/result?p=@launchpad-ui/core)

## Installation

```sh
$ yarn add @launchpad-ui/core
# or
$ npm install @launchpad-ui/core
```

## Usage

### Design Tokens

```css
@import '@launchpad-ui/core/dist/styles/tokens.css';
```

### Components

```jsx
import { Alert, AlertKind } from '@launchpad-ui/core';

...

return (
  <Alert kind={AlertKind.ERROR}>
    An unexpected error occurred.
  </Alert>
)
```
