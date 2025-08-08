# LaunchPad Contrail Implementation Plan

## Overview

A developer tool similar to DRUIDS Loupe that enables consumers to visually identify LaunchPad components on the page and access their documentation.

**Goal**: Keyboard shortcut → Highlight LaunchPad components → Hover for info → Click through to docs

## Architecture (CSS-Only Implementation)

```
@launchpad-ui/contrail
├── LaunchPadContrail.tsx     # Minimal React wrapper for configuration
├── ContrailController.ts     # Vanilla JS controller & tooltip system
├── metadata.generated.ts     # Build-time generated component metadata
├── utils/
│   ├── attribution.ts        # Shared data attribute utilities
│   └── keyboard.ts           # Keyboard shortcut handling (legacy)
└── styles/
    └── contrail.css          # CSS-only highlighting & tooltip styles
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
- [x] Test attribution appears correctly in DOM
  - [x] Write unit test for attribution utility (100% coverage)
  - [x] Verify attributes in Storybook components

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

### Phase 5.5: Post-Testing Feedback & Fixes 🔧 IN PROGRESS
**Feedback from Storybook testing revealed several critical issues:**

- [ ] **🚨 CRITICAL: Fix overlay positioning** 
  - [ ] Overlays not aligned with actual components (positioning bug)
  - [ ] Fix `getBoundingClientRect()` + scroll offset calculation
  - [ ] Test positioning with scrolled content and viewport changes

- [ ] **🚨 CRITICAL: Change default keyboard shortcut**
  - [ ] Cmd+L conflicts with browser search bar - choose different default
  - [ ] Research options: `Alt+L`, `Ctrl+Shift+L`, `Ctrl+Alt+L`
  - [ ] Update component defaults and documentation

- [ ] **📝 Naming consistency**
  - [ ] "LaunchPadContrail" → "LaunchPad Contrail" (two words)
  - [ ] Update component names, docs, and stories

- [ ] **⚡ Explore CSS-only approach for highlighting**
  - [ ] Investigate using CSS pseudo-elements + `::before`/`::after`
  - [ ] Use CSS custom properties for component name labels
  - [ ] Compare performance: CSS-only vs current React approach
  - [ ] Consider hybrid: CSS highlighting + JS popovers

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

## Architectural Comparison: Before vs After

### 🔴 Current Problematic Approach
```typescript
// Heavy React-based implementation
<ComponentHighlighter 
  active={isActive}
  metadata={metadata}
  // Complex positioning calculations
  // DOM manipulation and event handling
  // Large bundle size
/>
```

**Problems identified:**
- ❌ **Broken positioning:** Overlays don't align with components
- ❌ **Complex calculations:** `getBoundingClientRect()` + scroll math fails
- ❌ **Performance overhead:** React re-renders for each positioning update
- ❌ **Large bundle:** Full React component for simple highlighting
- ❌ **Browser conflicts:** `cmd+l` interferes with address bar

### 🟢 New CSS-Only Approach  
```css
/* Lightweight CSS-only solution */
body.contrail-active [data-launchpad] {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
  position: relative;
}

body.contrail-active [data-launchpad]::before {
  content: attr(data-launchpad);
  position: absolute;
  top: -8px;
  left: 0;
  background: #2563eb;
  color: white;
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 3px;
  z-index: 999999;
}
```

```typescript
// Minimal JavaScript toggle
const toggle = () => document.body.classList.toggle('contrail-active');
```

**Benefits:**
- ✅ **Perfect positioning:** CSS handles layout automatically  
- ✅ **Tiny bundle:** <5KB total (vs current ~18KB)
- ✅ **Better performance:** No React re-renders or DOM calculations
- ✅ **Reliable:** Works with any scroll, viewport, or layout changes
- ✅ **Safe shortcuts:** `cmd+shift+l` avoids browser conflicts

### 💡 Lightweight Info Display Options

**Research needed:** What's the minimal way to show component metadata?

**Option 1: CSS-only tooltips**
```css
body.contrail-active [data-launchpad]:hover::after {
  content: attr(data-launchpad) " - " attr(data-description);
  position: absolute;
  background: #1f2937;
  color: white;
  padding: 8px;
  border-radius: 4px;
}
```
*Pros: Zero JavaScript, instant*  
*Cons: Limited metadata display*

**Option 2: Native browser tooltips**  
```javascript
element.title = `${componentName} - ${description}\nDocs: ${docsUrl}`;
```
*Pros: No custom styling needed*  
*Cons: Limited styling control, varies by browser*

**Option 3: Minimal JavaScript popups**
```typescript
// Ultra-lightweight popup (no React)
const showInfo = (element, metadata) => {
  const popup = document.createElement('div');
  popup.innerHTML = `<strong>${metadata.name}</strong><br/>
                     ${metadata.description}<br/>
                     <a href="${metadata.docsUrl}">Docs</a>`;
  document.body.appendChild(popup);
};
```
*Pros: Full control, rich content*  
*Cons: Slightly more JavaScript*

**Option 4: Status bar display**
Show component info in a fixed status bar at bottom of screen  
*Pros: Non-intrusive, persistent*  
*Cons: Takes up screen space*

**Recommendation:** Start with Option 1 (CSS tooltips) for simplicity, upgrade if needed.

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
        shortcut="cmd+shift+l"  // Updated: avoid browser conflicts
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
2. 🔄 **CHANGED:** Keyboard shortcut reliably toggles highlighting (now `cmd+shift+l`)
3. 🔄 **CHANGED:** Lightweight info display shows component information (replacing React popovers)
4. ✅ Links to documentation work correctly  
5. ✅ Zero performance impact when inactive
6. ✅ Works across different consumer applications
7. ✅ Comprehensive documentation and examples
8. 🆕 **NEW:** CSS-only highlighting with perfect positioning
9. 🆕 **NEW:** Minimal bundle size (<5KB total)
10. 🆕 **NEW:** No React dependencies for core highlighting functionality