# Migration @launchpad-ui/core

## 0.12.0

### Support HTML attributes passthrough for component APIs

Replace instances of `testId` on Launchpad components with the HTML attribute `data-test-id`:

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

Due to updating to `framer-motion` v7, the minimum required version of React is v18 for Launchpad components.
