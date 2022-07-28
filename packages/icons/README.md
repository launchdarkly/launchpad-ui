# @launchpad-ui/icons

> An element that supplements content and represents an action or feature within LaunchDarkly.

[![See it on NPM!](https://img.shields.io/npm/v/@launchpad-ui/icons?style=for-the-badge)](https://www.npmjs.com/package/@launchpad-ui/icons)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@launchpad-ui/icons?style=for-the-badge)](https://bundlephobia.com/result?p=@launchpad-ui/icons)

## Installation

```sh
$ yarn add @launchpad-ui/icons
# or
$ npm install @launchpad-ui/icons
```

## Usage

```js
import { Add } from '@launchpad-ui/icons';
```

## Contributing
To add an icon to our library, drop the SVG inside of `/icons` and run one of the below scripts to generate the component for it. It's intended that consumers will utilize the icon components rather than the raw SVGs.

From the root of launchpad-ui (preferred):
```js
pnpm build:transform
```

OR, from within the root of the icons package:
```js
pnpm build
```