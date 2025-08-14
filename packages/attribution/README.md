# @launchpad-ui/attribution

Attribution utilities for LaunchPad components that provide data attributes for component identification.

## Installation

```bash
npm install @launchpad-ui/attribution
```

## Usage

```typescript
import { addLaunchPadAttribution } from '@launchpad-ui/attribution';

// In your component
const Button = (props) => {
  return (
    <button {...addLaunchPadAttribution('Button')} {...props}>
      {children}
    </button>
  );
};

// Renders: <button data-launchpad="Button">Click me</button>
```

## API

### `addLaunchPadAttribution(componentName: string)`

Generates a minimal data attribute for LaunchPad component identification.

**Parameters:**
- `componentName` (string): Name of the component (e.g., 'Button', 'Modal', 'Drawer')

**Returns:**
- Object containing `data-launchpad` attribute with the component name

## Purpose

These data attributes enable developer tools like `@launchpad-ui/afterburn` to:
- Visually identify LaunchPad components on the page
- Provide rich tooltips with component information
- Link to relevant documentation and examples

The attribution system is designed to be:
- **Minimal**: Single data attribute to reduce DOM pollution
- **Zero-impact**: No performance cost when developer tools are inactive
- **Universal**: Works across all LaunchPad components and consumer applications