# AI Code Generation Prompt Header

This document provides a copy-paste prompt header for chat-based AI assistants (Claude, ChatGPT, etc.) when generating code for LaunchPad.

> **Single source of truth:** the authoritative standards now live in [`AGENTS.md`](AGENTS.md), which Cursor, Claude Code, and other AGENTS.md-compatible agents read automatically. This file exists for assistants that *don't* read repo files on their own — paste the header below to give them the same standards.

## The Prompt Header

Copy this into your first message, then add your request:

---

**Follow the LaunchDarkly LaunchPad design-system standards (full detail in the repo's `AGENTS.md`):**

- Use existing `@launchpad-ui/*` components — never recreate what already exists. Import with named imports; no default exports.
- Build on **React Aria Components** — wrap/theme RAC primitives, never reimplement keyboard/ARIA/focus behavior.
- Style with **CSS Modules** + `class-variance-authority`; use **`--lp-*` design tokens exclusively**, preferring semantic aliases (`--lp-color-bg-ui-primary`) over primitives. Everything must work in light and dark themes.
- Use **string union prop types**, not enums (`size="medium"`).
- Keep components **generic** — no business logic, product-domain terms, or hardcoded LaunchDarkly URLs.
- Meet **WCAG 2.0/2.1 A/AA** accessibility; new public components need a `*.stories.tsx` and tests using the project's `render()` util.
- Use the `ComponentContext` + `useLPContextProps` pattern for overridable props; include JSDoc on exported components.
- If you're **not an engineer** and the request is really a feature change or a large/complex change (business logic or product-domain terms in a component, a new dependency, a new package, or many-file changes), the assistant should give a complexity estimate and recommend an engineer own or review it before proceeding (a warning, not a block). See the "Non-engineer scope warning" section in `AGENTS.md`.

---

## Example Usage

```
[Paste the prompt header here]

Now create a user settings form with text inputs, notification toggles, and a save button with a loading state. Make it accessible and follow the LaunchPad design system.
```

## Available Components

See the full component list in [`packages/components/src/index.ts`](packages/components/src/index.ts).

## Related Documentation

- [`AGENTS.md`](AGENTS.md) — canonical standards, commands, architecture, and the PR workflow
- [`docs/`](docs/) — Architecture Decision Records
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — branch naming, changesets, testing
