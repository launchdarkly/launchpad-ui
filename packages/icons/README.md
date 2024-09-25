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

### Basic

The `name` prop specifies which icon to render.

```js
import { Icon } from '@launchpad-ui/icons';

const MyIcon = () => <Icon name="info" />;
```

### CORS limitation

Unfortunately SVG sprites [cannot be accessed cross-domain](https://oreillymedia.github.io/Using_SVG/extras/ch10-cors.html). The workaround is to fetch the file and inject it into the document to access the icons directly.

Fetch and inject the sprite for `Icon` to render icons correctly:

```js
import sprite from '@launchpad-ui/icons/sprite.svg';

fetch(sprite)
  .then(async (response) => response.text())
  .then((data) => {
    const parser = new DOMParser();
    const content = parser.parseFromString(data, 'image/svg+xml').documentElement;
    content.id = 'lp-icons-sprite';
    content.style.display = 'none';
    document.body.appendChild(content);
  })
  .catch((err) => {
    console.log('Failed to fetch sprite', err);
  });
```

To minimize latency, you can preload the sprite file accordingly:

```html
<link
  rel="preload"
  href="{assets_location}/sprite.svg"
  as="fetch"
  type="image/svg+xml"
  crossorigin
/>
```
