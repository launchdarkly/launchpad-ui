# Bugbot Instructions — launchpad-ui

> This file is the **PR-review** rubric for Cursor Bugbot. Authoring standards (what to follow when *writing* code) live in [`AGENTS.md`](../AGENTS.md) — keep the two consistent.

LaunchDarkly's design system. Public, versioned, consumed across LaunchDarkly frontend apps. Components here have been **vetted by design** and have corresponding Figma definitions. They are foundational and reused widely.

## Repo shape

- pnpm + Nx monorepo. Component packages under `packages/*`, each published independently to npm under `@launchpad-ui/*`.
- React 19, TypeScript, React Aria Components foundation, CSS Modules + `class-variance-authority`, Biome for lint/format, Vitest + RTL for tests, Storybook + axe-core for a11y.
- Changesets manages versioning — non-trivial package changes should include a `.changeset/*.md` file.

## Scope: what belongs in LaunchPad

A component belongs in LaunchPad only if it meets the readiness rubric. Use this when reviewing **new** components or substantial expansions of existing ones:

- Has a corresponding component definition in the Figma design systems project (vetted by design).
- Accessible — passes axe, has proper ARIA + keyboard support.
- Composable with other LaunchPad components.
- Supports both light and dark themes (uses `--lp-*` tokens, no theme-specific hardcoded colors).
- Stable — rarely needs non-styling changes once landed.
- **Contains no business logic.** No product-specific copy, no domain state (flag/segment/project concepts), no app-specific data fetching, no hardcoded LaunchDarkly URLs.

If a PR introduces a new component that fails any of these criteria, flag it as **likely out-of-scope** and suggest the contributor open a discussion with maintainers (via issue or PR comment) before landing, or build it in the consuming app's own package instead. **Do not block on this alone** — it's a discussion-worthy flag, not a hard error.

### Exception: recipe contributions

Files under `packages/components/stories/recipes/` are **compositions/examples**, not components. They demonstrate how to assemble existing LaunchPad primitives into common patterns (pagination, dialog-driven combobox, etc.). For recipe-only PRs:

- The scope rubric above does **not** apply — recipes are expected to combine multiple primitives and may contain example-flavored copy/data.
- The public-API, changeset, and "low-level primitive leakage" checks do **not** apply.
- The accessibility, design token, and theme checks **still** apply — recipes are reference material and should model good practice.

## PR readiness criteria

Before reviewing code, evaluate whether the PR itself is reviewable. Flag these issues as top-level comments, not inline.

### Size

- **Ideal: ≤ 400 lines changed** (excluding `pnpm-lock.yaml`, `dist/`, `*.d.ts`, and generated icon/token files). PRs above this threshold should be flagged unless the bulk is mechanical (e.g., a rename across many files, a generated sync, or a token update cascade).
- **Single concern per PR.** Adding a component and refactoring an unrelated package are two PRs. Mixing a new component with token renaming is a flag unless the naming change is what motivated the component.
- **New component ≙ one PR per component** unless the components are compositional siblings (e.g., `RadioButton` + `RadioGroup`) that make no sense separated. Flag bundles of three or more unrelated new components.
- Flag PRs that touch `packages/tokens` or `packages/vars` *and* multiple other packages simultaneously — token changes cascade to every consumer and deserve isolated, deliberate review.

### Description quality

A reviewable PR description answers three questions. Flag as `needs-description` if any are missing or too vague to act on:

1. **What changed?** Not a restatement of the commit title — an actual summary of the diff. "Updated styles" is not sufficient. "Replaced hardcoded `16px` spacing with `var(--lp-space-400)` token across Button variants" is.
2. **Why?** The motivation: a design spec update, a bug, a new feature request, an accessibility finding. PRs from AI agents often omit this entirely — flag it.
3. **How was it verified?** Screenshots for visual changes, test IDs for behavior changes, Chromatic snapshot approval note for token/theme changes. If Storybook was used for manual verification, say so.

AI-agent-generated PRs frequently produce descriptions like *"Updated the component to improve functionality"*. Flag these explicitly: the description must be specific enough that a reviewer can understand the change without reading every line of the diff.

### Changeset accuracy

- A `patch` changeset is appropriate for bug fixes and internal refactors with no API surface change.
- A `minor` changeset is appropriate for new exported components, new props on existing components, or additive behavior changes.
- A `major` changeset is appropriate for removed exports, renamed props, changed default values, or breaking type changes. This is rare; if the diff warrants `major`, call it out even if the changeset says `patch` or `minor`.
- Flag when the changeset summary is generic boilerplate (`"Updated component"`, `"Fixed issue"`) — changelogs are consumed by engineers across the org and must be human-readable.

### Automated checks (reference)

These CI checks now run on every PR and surface results automatically:

| Check | What it catches |
|---|---|
| **PR comment bot** | Packages changed, API surface diff, token changes, story coverage gaps |
| **Story Coverage** (`verify.yml`) | New exported components without a `.stories.tsx` file |
| **Export Check** (`verify.yml`) | Broken `package.json` exports maps (`publint`) and broken TypeScript resolution (`attw`) |
| **Storybook Accessibility** | Axe violations (WCAG 2.0/2.1 A/AA) across all stories |
| **Chromatic** | Visual regression snapshots |
| **Package Size** | Bundle size diff on `dist/` artifacts |

If any of these checks are failing and the PR description doesn't acknowledge why, flag it.

---

## What to focus on

Prioritize findings in this order:

1. **Public API breakage.** Any change to an exported component's prop shape, prop name, default value, ref-forwarding, or exported type is a consumer-facing breaking change. Flag it if no `major` changeset accompanies the diff. Watch for renamed/removed exports in `packages/*/src/index.ts`.
2. **Accessibility regressions.** Removed/changed `aria-*` attributes, lost keyboard handlers, focus-management changes (focus trap, restore focus, autofocus), missing labels on interactive elements, color-contrast risks. Stories should have a `play` function or a11y test where interactive behavior changed.
3. **Business logic leaking into components.** Product-domain terms (flag, segment, project, environment, member, metric), LaunchDarkly-specific URLs/copy, app-specific fetch calls, or coupling to a consumer app's state shape. LaunchPad components must stay generic.
4. **Theme support gaps.** New styles that only work in light mode, hardcoded `white`/`black` instead of semantic tokens, or token references that don't resolve in dark mode. Every visual rule should respect `[data-theme]` via `--lp-*` tokens.
5. **Design token violations.** Hardcoded colors (`#fff`, `rgb(...)`), spacing (`16px`, `1rem`), radii, font sizes, shadows, or z-index values in `.css`/`.module.css` files. All values should reference `var(--lp-*)` tokens defined in `packages/tokens`. **Prefer semantic alias tokens over primitives** — e.g., `var(--lp-color-bg-ui-primary)` over `var(--lp-color-blue-500)`, `var(--lp-color-text-success)` over a raw palette ramp. Primitives carry no intent and bypass theming; aliases are what keep dark mode and future re-theming working. Flag any new raw value, and flag primitive-token usage in component styles unless no suitable alias exists (in which case the right fix is usually to add the alias in `packages/tokens`).
6. **Low-level primitive leakage.** When a feature could be expressed as a purpose-driven mid-level component (e.g., `Picker`, `Menu`), prefer that over re-exposing `Popover + ListBox + Input` combinations to consumers. Flag new public APIs that force consumers to re-assemble primitives — that's how UX drift happens.
7. **Default exports.** Biome enforces named exports everywhere except stories and config files. Flag new `export default` in component source.
8. **React Aria escape hatches.** Components should compose React Aria primitives rather than reimplement keyboard/ARIA behavior. Flag hand-rolled `onKeyDown` for arrow-key navigation, custom focus rings, or duplicated ARIA logic when an RAC primitive exists. RAC's architectural constraints are accepted — don't work around them with parallel implementations. For wrapping/theming patterns (most components here wrap RAC), see the [React Aria customization guide](https://react-aria.adobe.com/customization) — `defaultProps`, slots, `useContextProps`, and render-props composition are the sanctioned escape hatches.
9. **Context + prop-merging pattern.** New components that take user-overridable props should use `ComponentContext` + `useLPContextProps` (see existing components like Button, Menu). Flag missing context plumbing on new public components.
10. **Missing Storybook coverage.** New public component or new visual variant without a corresponding `*.stories.tsx`. Stories are how the component becomes discoverable and how a11y/visual regressions are caught.
11. **Test coverage gaps on new public behavior.** New exported component or new prop with no test or no story update. RTL tests should use the project's `render()` from test utils, not RTL directly.
12. **Type-only import discipline.** `import type` for type-only imports. Imports should be organized (Biome will reformat — but flag if a hand-edited PR has obvious unsorted/mixed imports that Biome didn't catch).

## What to ignore / de-prioritize

- Formatting nits — Biome and lint-staged handle this. Don't flag whitespace, quote style, or trailing commas.
- Comment style preferences, JSDoc wording, or missing JSDoc on internal (non-exported) helpers. JSDoc *is* expected on exported components and public utilities.
- `pnpm-lock.yaml`, `storybook-static/`, `coverage/`, `dist/`, generated `.d.ts`, and snapshot files. Don't review machine-generated content.
- Changeset file *content* (wording is human judgment) — only flag if a changeset is *missing* for a package source change.
- Bundle-size micro-optimizations unless the change introduces a clear large dependency.

## Conventions worth checking

- **Branch + commit + PR title:** Conventional Commits (`feat(button): ...`, `fix(menu): ...`). PR title should match.
- **String unions over enums** for prop types (`size="medium"`, not `Size.Medium`). See [adr-002](docs/adr-002-string-unions-for-prop-types.md).
- **CSS Modules with scoped class names** via `styles.foo`. See [adr-005](docs/adr-005-styles.md) and [adr-006](docs/adr-006-scoped-styles.md).
- **No cross-package relative imports.** Packages import each other via `@launchpad-ui/*` workspace specifiers, never `../../other-package/src`.
- **`peerDependencies` not `dependencies`** for React and React Aria in component packages — adding either as a regular `dependency` is almost always a mistake.

## Don't suggest

- Adding error handling, try/catch, or input validation for internal code paths. Trust internal callers.
- Defensive `?.` or fallback values where the type system already guarantees non-null.
- Renaming files, restructuring directories, or splitting components unless the diff already does so.
- Adding tests for trivial render-only components when a Storybook story + a11y check already covers them.

## Helpful references

- [AI_PROMPT_HEADER.md](AI_PROMPT_HEADER.md) — same standards, broader phrasing.
- [docs/](docs/) — ADRs covering a11y, prop types, builds, tests, styles, component foundation.
- [CONTRIBUTING.md](CONTRIBUTING.md) — branch naming, changesets, testing expectations.
- [React Aria customization](https://react-aria.adobe.com/customization) — how to wrap, theme, and extend RAC primitives without reimplementing their behavior.
