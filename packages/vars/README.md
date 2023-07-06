# @launchpad-ui/vars

> Vanilla Extract design token references for LaunchPad styles.

[![See it on NPM!](https://img.shields.io/npm/v/@launchpad-ui/vars?style=for-the-badge)](https://www.npmjs.com/package/@launchpad-ui/vars)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@launchpad-ui/vars?style=for-the-badge)](https://bundlephobia.com/result?p=@launchpad-ui/vars)

## Installation

```sh
$ yarn add @launchpad-ui/vars
# or
$ npm install @launchpad-ui/vars
```

## Usage

### Vanilla Extract styles

```js
import { vars } from '@launchpad-ui/vars';
import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: vars.color.bg.ui.secondary,
  color: vars.color.text.ui.secondary,
  padding: vars.spacing[500],
  border: `${vars.border.width[300]} solid ${vars.color.border.ui.primary}`,
  fontSize: vars.font.size[300],
});
```

**Note**

The [@launchpad-ui/tokens](../tokens/README.md) package must be installed and its tokens imported to ensure styles are applied.
