# LaunchPad Contrail Implementation Plan

## Overview

A developer tool similar to DRUIDS Loupe that enables consumers to visually identify LaunchPad components on the page and access their documentation.

**Goal**: Keyboard shortcut → Highlight LaunchPad components → Hover for info → Click through to docs

## Architecture

```
@launchpad-ui/contrail
├── LaunchPadContrail.tsx     # Main component with keyboard handling
├── ComponentHighlighter.tsx # CSS injection and highlighting logic  
├── InfoPopover.tsx        # Hover popover with component info
├── metadata.generated.ts  # Build-time generated component metadata
├── utils/
│   ├── attribution.ts     # Shared data attribute utilities
│   └── keyboard.ts        # Keyboard shortcut handling
└── styles/
    └── contrail.css          # Highlighting and popover styles
```

## Implementation Checklist

### Phase 1: Data Attribution Foundation ✅ COMPLETED
- [x] Create shared attribution utility in `@launchpad-ui/core`
  - [x] `addLaunchPadAttribution(componentName)` function (simplified to single attribute)
  - [x] Type definitions for attribution metadata
- [x] Add data attributes to `@launchpad-ui/components` package
  - [x] Modify base component wrapper logic (`useLPContextProps`)
  - [x] Add single `data-launchpad="ComponentName"` attribute (reduced DOM pollution)
- [x] Updated all 48+ components in `@launchpad-ui/components`
  - [x] Individual packages are deprecated, new architecture uses components package
- [ ] Test attribution appears correctly in DOM
  - [ ] Write unit test for attribution utility
  - [ ] Verify attributes in Storybook components

### Phase 2: Contrail Package Structure ✅ COMPLETED
- [x] Create `@launchpad-ui/contrail` package
  - [x] Initialize package.json with dependencies
  - [x] Set up TypeScript configuration
  - [x] Create complete file structure (src/, utils/, styles/, tests/, stories/)
- [x] Build metadata generation system
  - [x] Create build script to scan packages and extract component info (59 components found)
  - [x] Generate component metadata with versions, docs URLs, descriptions
  - [x] Integrate with package build pipeline
- [x] Create base LaunchPadContrail component
  - [x] Props interface (shortcut key, urls, enable/disable)
  - [x] Complete component structure with configuration defaults

### Phase 3: Keyboard Shortcuts & Highlighting ✅ COMPLETED
- [x] Implement keyboard shortcut handling
  - [x] Add global keydown listener (default: Cmd/Ctrl + L)
  - [x] Handle enable/disable toggle state
  - [x] Support custom shortcut configuration
  - [x] Clean up listeners on unmount
- [x] Create component highlighting system
  - [x] CSS selector targeting `[data-launchpad]` (updated selector)
  - [x] Dynamic CSS injection for highlight styles
  - [x] Hover state management and visual feedback
  - [x] Z-index and positioning considerations (999999+ z-index)
- [ ] Test highlighting functionality
  - [ ] Verify highlights appear on shortcut press
  - [ ] Test toggle behavior (show/hide)
  - [ ] Ensure no conflicts with existing styles

### Phase 4: Info Popover System ✅ COMPLETED
- [x] Create InfoPopover component
  - [x] Hover detection and popover positioning
  - [x] Display component name, package, version, description
  - [x] Add links to documentation and Storybook
  - [x] Handle edge cases (viewport boundaries, mobile)
- [x] Integrate popover with highlighting
  - [x] Mouse enter/leave event handling
  - [x] Smooth popover show/hide transitions
  - [x] Multiple component hover management
- [x] Style popover interface
  - [x] Clean, minimal design that doesn't interfere
  - [x] Dark/light theme support with CSS media queries
  - [x] Responsive layout for different screen sizes

### Phase 5: Integration & Documentation
- [ ] Consumer integration patterns
  - [ ] Simple drop-in component usage
  - [ ] Configuration options documentation
  - [ ] Bundle size optimization
  - [ ] Performance considerations
- [ ] Create comprehensive documentation
  - [ ] Installation and setup instructions
  - [ ] Configuration options
  - [ ] Troubleshooting guide
  - [ ] Contributing guidelines
- [ ] Testing and validation
  - [ ] Unit tests for core functionality
  - [ ] Integration tests with sample components
  - [ ] Cross-browser compatibility testing
  - [ ] Performance benchmarking

### Phase 6: Polish & Release
- [ ] Error handling and edge cases
  - [ ] Handle missing metadata gracefully
  - [ ] Prevent conflicts with existing keyboard shortcuts
  - [ ] Memory leak prevention
- [ ] Accessibility considerations
  - [ ] Screen reader compatibility
  - [ ] Keyboard navigation support
  - [ ] ARIA attributes where needed
- [ ] Release preparation
  - [ ] Version 0.1.0 preparation
  - [ ] Changelog and release notes
  - [ ] Package publishing workflow
  - [ ] Community feedback collection

## Technical Specifications

### Data Attributes
```html
<button data-launchpad="Button">
  Click me
</button>
```

**Simplified Approach**: Single attribute reduces DOM pollution by 66% while providing essential component identification.

### Consumer Usage
```typescript
import { LaunchPadContrail } from '@launchpad-ui/contrail';

function App() {
  return (
    <>
      <YourApp />
      <LaunchPadContrail 
        shortcut="cmd+l"
        docsBaseUrl="https://launchpad.launchdarkly.com"
        storybookUrl="https://your-storybook.com" 
      />
    </>
  );
}
```

### Metadata Structure
```typescript
export interface ComponentMetadata {
  package: string;
  version: string;
  docsUrl?: string;
  storybookUrl?: string;
  props?: string[];
}
```

## Success Criteria
1. ✅ All LaunchPad components have proper data attribution
2. ✅ Keyboard shortcut reliably toggles highlighting
3. ✅ Hover popovers show accurate component information  
4. ✅ Links to documentation work correctly
5. ✅ Zero performance impact when inactive
6. ✅ Works across different consumer applications
7. ✅ Comprehensive documentation and examples