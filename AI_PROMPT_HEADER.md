# AI Code Generation Prompt Header

This document contains a standardized prompt header to use when working with AI assistants (Claude, ChatGPT, etc.) to generate code for the LaunchDarkly LaunchPad UI project. This ensures consistent, high-quality code that follows our established patterns and standards.

## The Prompt Header

Copy and paste this entire section at the beginning of any AI conversation when generating code:

---

**Always follow these LaunchDarkly LaunchPad UI standards:**

- **Use only approved LaunchPad components** from `@launchpad-ui/components`, `@launchpad-ui/icons`, and other LaunchPad packages. Never create custom components when LaunchPad equivalents exist.

- **Import components using named imports** following the pattern: `import { Button, Alert, Icon } from '@launchpad-ui/components'` and `import { Icon, StatusIcon } from '@launchpad-ui/icons'`. Never use default exports (enforced by Biome linting).

- **Use design tokens exclusively** with CSS variables prefixed `--lp-` for colors, spacing, typography, borders, and shadows. Examples: `var(--lp-color-bg-ui-primary)`, `var(--lp-spacing-400)`, `var(--lp-border-radius-medium)`. Never hardcode values.

- **Follow React Aria Components foundation** - all components extend React Aria Components with additional LaunchPad styling and tokens. Use proper ARIA attributes and semantic HTML for accessibility compliance.

- **Use string union types for props** instead of enums (e.g., `size="medium"`, `variant="primary"`, `status="error"`). This reduces bundle size and improves DX without requiring additional imports.

- **Apply CSS Modules for styling** with scoped class names using the pattern `styles.className`. Use `class-variance-authority` (cva) for component variants with the structure: base styles + variants + defaultVariants.

- **Include comprehensive JSDoc comments** for all components and exported functions, especially describing props, usage examples, and referencing React Aria documentation URLs.

- **Follow Biome code formatting rules** - single quotes for strings, double quotes for JSX attributes, 100 character line width, organized imports with type imports first, and no default exports except for stories/config files.

- **Ensure accessibility compliance** - components must pass automated a11y tests using Playwright and axe-core. Include proper ARIA labels, focus management, and keyboard navigation support.

- **Use Context patterns for component composition** - create `ComponentContext` for shared state and `useLPContextProps` utility for prop merging. Export both component and context for advanced use cases.

- **Test components using React Testing Library** with `@testing-library/react` utilities, focusing on user interactions and accessibility. Use `render()` from the project's test utils, not directly from RTL.

---

## How to Use

### 1. Copy the Header
Copy the entire prompt header section above (everything between the horizontal rules).

### 2. Start Your AI Conversation
Paste the header at the beginning of your first message to the AI, then add your specific code generation request.

### 3. Example Usage

```
[Paste the prompt header here]

Now please create a React component for a user settings form that includes:
- Text inputs for name and email
- Toggle switches for notifications
- A save button with loading state
- Proper validation and error handling

Make it accessible and follow the LaunchPad design system.
```

## What This Ensures

Using this prompt header guarantees that AI-generated code will:
- Use existing LaunchPad components instead of creating new ones
- Follow design token system for consistent styling
- Meet accessibility standards (WCAG 2.1 AA)
- Use correct TypeScript patterns and import conventions
- Pass Biome linting rules
- Follow React Aria Components foundation
- Include proper JSDoc documentation
- Use established testing patterns

## Available Components

Key components available in `@launchpad-ui/components`:
- **Buttons**: `Button`, `IconButton`, `LinkButton`, `ToggleButton`
- **Forms**: `TextField`, `TextArea`, `Checkbox`, `Radio`, `Select`, `Switch`
- **Feedback**: `Alert`, `Toast`, `ProgressBar`, `Meter`
- **Layout**: `Modal`, `Popover`, `Drawer`, `Tabs`, `Disclosure`
- **Data**: `Table`, `ListBox`, `GridList`, `Menu`, `ComboBox`
- **Typography**: `Text`, `Heading`, `Label`, `Code`
- **Navigation**: `Link`, `Breadcrumbs`, `Navigation`

And many more! See the [full component list](packages/components/src/index.ts).

## Team Guidelines

- **Always use this header** when working with AI assistants for code generation
- **Share this document** with new team members during onboarding
- **Update the header** as our component library and standards evolve
- **Report issues** if AI-generated code doesn't follow these standards despite using the header

## Related Documentation

- [Component Architecture Decision Records](docs/)
- [Accessibility Testing Guidelines](docs/adr-007-a11y-tests-on-stories.md)
- [Styling Conventions](docs/adr-005-styles.md)
- [Component Foundation](docs/adr-008-component-foundation.md) 