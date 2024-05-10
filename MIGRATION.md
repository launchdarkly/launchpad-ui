# Migration @launchpad-ui/core

## 0.49.0

### Component class name pattern changed

Class names have been updated from `[hash]_[local]_` to `[hash]_[local]`. Update selectors targeting LP class names accordingly:

```css
[class*='_Button_'] {
  ...
}
```

**After**

```css
[class*='_Button'] {
  ...
}
```

## 0.48.0

### Remove icons

Icons `pulse-active`, `verified`, and `circles` have been removed.

## 0.47.0

### Base 16 font size

The base font size for all tokens and components is now 16. Update `rem` values accordingly. https://nekocalc.com/px-to-rem-converter

## 0.46.0

### Icon refresh

See https://launchpad.launchdarkly.com/?path=/story/components-icon--default for latest set of icons.

## 0.45.0

### Remove icons

Icons `warning-circle` and `arrow-thin-right-circle` have been removed.

## 0.44.0

### Remove bar-chart icon

Icon `bar-chart` has been replaced by `experiment`.

## 0.42.0

### Use sprites for icons

**Before**

```js
import { Add } from '@launchpad-ui/icons';

const MyIcon = () => <Add size="medium" />;
```

**After**

```js
import { Icon } from '@launchpad-ui/icons';

const MyIcon = () => <Icon name="add" size="medium" />;
```

By default, the component expects `@launchpad-ui/icons/dist/sprite.svg` to be available from `APP_ROOT/static/sprite.svg` in your app. A custom path to the sprite can be set via the `IconContext` provider.

For example, if importing a static asset returns a resolved URL you can do the following in your app to load the icons:

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

## 0.41.0

### Modal size renaming

Modal size `normal` renamed to `medium`.

## 0.40.0

### TagGroup API changes

React Aria released a stable version of `TagGroup` which includes some API changes. [Follow migration guidelines here](https://react-spectrum.adobe.com/releases/2023-05-24.html#taggroup-api-update).

## 0.39.0

### Removed Tokens and Icons packages

To improve tree-shaking and support [Remix's CSS bundling](https://remix.run/docs/en/main/guides/styling#css-bundling), barrel exports have been replaced with name exports in the package's index file. As a result, the icons and tokens packages have been removed from `core` as their exports are auto-generated and would incur too high of maintenance cost to `core`'s index file. Install and import from `@launchpad-ui/icons` and `@launchpad-ui/tokens` instead:

Before:

```js
import { Add } from '@launchpad-ui/core';
```

After:

```js
import { Add } from '@launchpad-ui/icons';
```

## 0.24.0

### Tokens

If you were using alias tokens in your application, you should refactor to use primitives instead, which are listed in the [Storybook color docs](https://main--626696a2018c1f004a1cde86.chromatic.com/?path=/docs/tokens-colors--docs).

Global z-index and duration tokens are also reworked, so before upgrading to `0.24.7`, you should verify in your application that z-indexing still works as expected.

## 0.23.0

### Modal

`ModalHeader` is now a standalone component, and relevant props have been moved from `Modal` to `ModalHeader`. [See Storybook](https://main--626696a2018c1f004a1cde86.chromatic.com/?path=/docs/components-modal--docs) for props list.

## 0.22.0

### Modal

`ModalBody` and `ModalFooter` are now standalone components, and relevant props have been moved from `Modal` to their respective component. [See Storybook](- `ModalHeader` is now a standalone component, and relevant props have been moved from `Modal` to `ModalHeader`. [See Storybook](https://main--626696a2018c1f004a1cde86.chromatic.com/?path=/docs/components-modal--docs) for props list.

## 0.21.0

### Icons

`Verfied` icon renamed to `Verified` to fix typo.

### Modal

- `titleClassName` prop is no longer supported. Use an h2 selector instead if you absolutely need to restyle the title.
- rename `Modal-close` data-test-id to `modal-close-button`
- `withCloseButton` prop now defaults to true instead of false
- `modalLabelID` is deprecated, now set automatically
- `titleID` prop has been deprecated from `ModalHeader`, now set automatically

## 0.20.0

### Modal

`has-modal` class applied to body has been renamed to `has-overlay`.

## 0.19.0

### Global tokens renamed

Global design tokens now follow a schema `namespace-type-name-scale`:

Before:

```css
var(--color-blue-500)
var(--font-size-base)
var(--spacing-0)
var(--font-monospace-family)
```

After:

```css
var(--lp-color-blue-500)
var(--lp-font-size-300)
var(--lp-spacing-100)
var(--lp-font-family-monospace)
```

## 0.18.0

### Modal sheet size renamed

Size `x-large` for `ModalSheet` has been renamed to `xLarge`:

Before:

```jsx
<ModalSheet size="x-large">...</ModalSheet>
```

After:

```jsx
<ModalSheet size="xLarge">...</ModalSheet>
```

## 0.17.0

### SnackbarCenter prop renamed

The `onDismiss` prop for `SnackbarCenter` has been renamed to `dismissSnackbar`:

Before:

```jsx
<SnackbarCenter items={snackbars} onDismiss={handleDismiss} />
```

After:

```jsx
<SnackbarCenter items={snackbars} dismissSnackbar={handleDismiss} />
```

## 0.16.0

### Alerts and banners restyled

Alerts and banners have refreshed styles and now use CSS modules.

## 0.14.0

### String union types instead of enums for props

Replace all instances of enums being passed to props with the literal value instead:

Before:

```jsx
<Button kind={ButtonKind.DEFAULT} size={ButtonSize.NORMAL}>
  button
</Button>
```

After:

```jsx
<Button kind="default" size="normal">
  button
</Button>
```

## 0.13.0

### Isolate styles for CopyToClipboard

For the `clipboard` package, a new `CopyCodeButton` component is used as the default child. Update any selector's targeting `.Button` within `CopyToClipboard` to target `.CopyCodeButton` instead.

## 0.12.0

### Support HTML attributes passthrough for component APIs

Replace instances of `testId` on LaunchPad components with the HTML attribute `data-test-id`:

Before:

```jsx
<Button testId="test-button">button</Button>
```

After:

```jsx
<Button data-test-id="test-button">button</Button>
```

## 0.11.0

### Styles path

Due to the switch to Vite, each package's styles are now located in a single `style.css` within the root:

Before:

```js
import alertStyles from '@launchpad-ui/alert/styles/Alert.css';
```

After:

```js
import alertStyles from '@launchpad-ui/alert/style.css';
```

The `core` package no longer bundles styles. If you need to import stylesheets for the components (in a Remix app for example) simply import them from the individual packages that come included when you install the `core` package.

## 0.10.0

### Link button asChild

`href` and other anchor element attributes have been removed from `Button`. Instead use the `asChild` prop to render link buttons:

Before:

```jsx
<Button href="/">I am a link</Button>
```

After:

```jsx
<Button asChild>
  <a href="/">I am a link</a>
</Button>
```

As a result, the type `HTMLAnchorElement` has been removed from `SplitButtonMainButton`.

## 0.9.0

### Renamed lozenge to chip

The `lozenge` package and its components have been renamed to `chip`:

Before:

```jsx
<Lozenge size={LozengeSize.NORMAL}>Default Lozenge</Lozenge>
```

After:

```jsx
<Chip size={ChipSize.NORMAL}>Default Chip</Chip>
```

## 0.8.0

### Reworked split-button

The `split-button` package's API as been reworked for improved composition and DX:

Before:

```jsx
<SplitButton
  kind={ButtonKind.DEFAULT}
  onClickMainButton={() => undefined}
  dropButtonTooltip="Dropdown tooltip"
  mainButtonTooltip="Main tooltip"
  onSelect={handleSelect}
  name="Save changes"
  isOpen={open}
  onInteraction={() => setOpen(!open)}
  // and a bunch of other props
>
  <Menu>
    <MenuItem>Item 1</MenuItem>
    <MenuItem>Item 2</MenuItem>
  </Menu>
</SplitButton>
```

After:

```jsx
<SplitButton>
  <Tooltip content="Main tooltip">
    <SplitButtonMainButton>Save changes</SplitButtonMainButton>
  </Tooltip>
  <SplitButtonDropdown isOpen={open} onInteraction={() => setOpen(!open)} onSelect={handleSelect}>
    <Tooltip content="Dropdown tooltip">
      <SplitButtonDropdownButton />
    </Tooltip>
    <Menu>
      <MenuItem>Save changes</MenuItem>
      <MenuItem>Save with comment</MenuItem>
    </Menu>
  </SplitButtonDropdown>
</SplitButton>
```

## 0.7.0

### React 18

Due to updating to `framer-motion` v7, the minimum required version of React is v18 for LaunchPad components.
