# @launchpad-ui/contrail

A developer tool similar to DRUIDS Loupe that enables consumers to visually identify LaunchPad components on the page and access their documentation.

## Features

- **Keyboard shortcut** (Cmd/Ctrl + Shift + L) to toggle component highlighting
- **CSS-only highlighting** with perfect positioning and no layout bugs
- **Lightweight vanilla JS tooltips** showing component information
- **Direct links** to documentation and Storybook
- **Zero performance impact** when inactive
- **Small bundle size** (~17KB) with 25-30% reduction vs previous versions

## Installation

```bash
npm install @launchpad-ui/contrail
```

## Usage

```tsx
import { LaunchPadContrail } from '@launchpad-ui/contrail';

function App() {
  return (
    <>
      <YourApp />
      <LaunchPadContrail 
        shortcut="cmd+shift+l"
        docsBaseUrl="https://launchpad.launchdarkly.com"
        storybookUrl="https://your-storybook.com" 
      />
    </>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `shortcut` | `string` | `"cmd+shift+l"` | Keyboard shortcut to toggle highlighting |
| `docsBaseUrl` | `string` | `"https://launchpad.launchdarkly.com"` | Base URL for component documentation |
| `storybookUrl` | `string` | - | URL for Storybook instance |
| `enabled` | `boolean` | `true` | Whether Contrail is enabled |

## How to Use

### 1. Add Contrail to your app
```tsx
<LaunchPadContrail />  // Uses default Cmd/Ctrl + Shift + L
```

### 2. Activate component highlighting
- **Mac**: Press `Cmd + Shift + L` 
- **Windows/Linux**: Press `Ctrl + Shift + L`
- Press again to deactivate

### 3. Explore components
- **Highlighted components** show with blue borders and labels
- **Hover over components** to see details popup
- **Click links** to open documentation or Storybook

## Keyboard Shortcuts

| Shortcut | Description |
|----------|-------------|
| `cmd+shift+l` | Default shortcut (Mac: Cmd+Shift+L, Windows: Ctrl+Shift+L) |
| `ctrl+h` | Alternative example |
| `ctrl+shift+d` | Complex shortcut example |

**Custom shortcuts:**
```tsx
<LaunchPadContrail shortcut="ctrl+shift+c" />
```

**Supported modifiers:** `cmd`, `ctrl`, `shift`, `alt`, `meta`

## How it works

1. LaunchPad components automatically include `data-launchpad="ComponentName"` attributes
2. Press keyboard shortcut to activate CSS-only highlighting
3. CSS targets `[data-launchpad]` elements with perfect positioning
4. Hover tooltips provide rich component information and links
5. Click through to documentation or Storybook

## Architecture

**CSS-Only Highlighting**: Uses CSS `outline` and `::before` pseudo-elements for instant, reliable highlighting without JavaScript positioning calculations.

**Vanilla JS Tooltips**: Lightweight tooltip system provides rich metadata display with smooth interactions and viewport boundary detection.

## Development

This is a development tool and should typically only be included in development builds.