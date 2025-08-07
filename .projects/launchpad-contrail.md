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

### Phase 1: Data Attribution Foundation
- [ ] Create shared attribution utility in `@launchpad-ui/core`
  - [ ] `addLaunchPadAttribution(componentName, packageName, version)` function
  - [ ] Type definitions for attribution metadata
- [ ] Add data attributes to `@launchpad-ui/components` package
  - [ ] Modify base component wrapper logic
  - [ ] Add `data-launchpad-component`, `data-launchpad-package`, `data-launchpad-version`
- [ ] Add data attributes to individual packages (`@launchpad-ui/button`, etc.)
  - [ ] Update Button component attribution
  - [ ] Update IconButton component attribution
  - [ ] Update remaining 18 individual packages
- [ ] Test attribution appears correctly in DOM
  - [ ] Write unit test for attribution utility
  - [ ] Verify attributes in Storybook components

### Phase 2: Contrail Package Structure  
- [ ] Create `@launchpad-ui/contrail` package
  - [ ] Initialize package.json with dependencies
  - [ ] Set up TypeScript configuration
  - [ ] Create basic file structure
- [ ] Build metadata generation system
  - [ ] Create build script to scan packages and extract component info
  - [ ] Generate component metadata with versions, docs URLs, prop info
  - [ ] Integrate with existing NX build pipeline
  - [ ] Hook into changeset version updates
- [ ] Create base LaunchPadContrail component
  - [ ] Props interface (shortcut key, urls, enable/disable)
  - [ ] Basic component structure and context

### Phase 3: Keyboard Shortcuts & Highlighting
- [ ] Implement keyboard shortcut handling
  - [ ] Add global keydown listener (default: Cmd/Ctrl + L)
  - [ ] Handle enable/disable toggle state
  - [ ] Support custom shortcut configuration
  - [ ] Clean up listeners on unmount
- [ ] Create component highlighting system
  - [ ] CSS selector targeting `[data-launchpad-component]`
  - [ ] Dynamic CSS injection for highlight styles
  - [ ] Hover state management and visual feedback
  - [ ] Z-index and positioning considerations
- [ ] Test highlighting functionality
  - [ ] Verify highlights appear on shortcut press
  - [ ] Test toggle behavior (show/hide)
  - [ ] Ensure no conflicts with existing styles

### Phase 4: Info Popover System
- [ ] Create InfoPopover component
  - [ ] Hover detection and popover positioning
  - [ ] Display component name, package, version
  - [ ] Add links to documentation and Storybook
  - [ ] Handle edge cases (viewport boundaries, mobile)
- [ ] Integrate popover with highlighting
  - [ ] Mouse enter/leave event handling
  - [ ] Smooth popover show/hide transitions
  - [ ] Multiple component hover management
- [ ] Style popover interface
  - [ ] Clean, minimal design that doesn't interfere
  - [ ] Dark/light theme support
  - [ ] Responsive layout for different screen sizes

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
<button 
  data-launchpad-component="Button"
  data-launchpad-package="@launchpad-ui/button" 
  data-launchpad-version="0.12.61"
>
```

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