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

By default, the `Icon` component expects the package's provided `sprite.svg` file to be located in `/static/sprite.svg` of your app. The `name` prop specifies which icon to render.

```js
import { Icon } from '@launchpad-ui/icons';

const MyIcon = () => <Icon name="info" />;
```

### Custom static location

A custom path to the sprite can be set via the `IconContext` provider. For example, if importing a static asset returns a resolved URL ([like in Vite](https://vitejs.dev/guide/assets.html#importing-asset-as-url) or [Remix](https://remix.run/docs/en/1.18.1/other-api/asset-imports#asset-url-imports)) you can do the following in your app to load the icons:

```js
import { IconContext } from '@launchpad-ui/icons';
import icons from '@launchpad-ui/icons/sprite.svg';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <IconContext.Provider value={{ path: icons }}>
    <App />
  </IconContext.Provider>
);
```

### CORS limitation

Unfortunately SVG sprites [cannot be accessed cross-domain](https://oreillymedia.github.io/Using_SVG/extras/ch10-cors.html). If you are hosting the sprite file in a CDN or different domain you will have to fetch the file and inject it into the document to access the icons directly.

First set the `Icon` context path to an empty string to indicate the symbols are available in the DOM:

```js
import { IconContext } from '@launchpad-ui/icons';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <IconContext.Provider value={{ path: '' }}>
    <App />
  </IconContext.Provider>
);
```

Then fetch and inject the sprite for `Icon` to render icons correctly:

```js
fetch('https://cdn.example.com/sprite.svg')
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
  href="https://cdn.example.com/sprite.svg"
  as="fetch"
  type="image/svg+xml"
  crossorigin
/>
```
