# AGENTS.md

Canonical guidance for AI agents and assistants working in this repository — Cursor, Claude Code, and any AGENTS.md-compatible tool. This is the single source of truth for LaunchPad's standards; other guidance files point here.

## What this is

LaunchPad is LaunchDarkly's design system: a pnpm + Nx monorepo of independently-versioned packages published to npm under `@launchpad-ui/*`. Components are vetted by design, have corresponding Figma definitions, and are consumed across LaunchDarkly's frontend apps.

Components **must stay generic** — no business logic, no product-domain terms (flag/segment/project/environment/member/metric), no app-specific data fetching, and no hardcoded LaunchDarkly URLs or copy. If a feature needs any of that, it belongs in the consuming app, not here. (Exception: files under `packages/components/stories/recipes/` are example compositions, not components — they may combine primitives and use example copy, but accessibility, token, and theme rules still apply.)

Node `>=22.14.0` (see `.nvmrc`), pnpm `11.0.1`. Run `pnpm install` to set up.

## Commands

```sh
pnpm storybook          # local component development (Storybook on :3000)
pnpm test               # all unit tests with coverage (builds tokens first)
pnpm test:watch         # vitest watch mode
pnpm test:ui            # vitest UI
pnpm test:packages      # test only Nx-affected packages
pnpm typecheck          # tsc --noEmit across the repo (builds tokens first)
pnpm check              # biome check . --write (lint + format + organize imports)
pnpm build              # build all packages (nx run-many)
pnpm build:packages     # build only Nx-affected packages
pnpm build:transform    # build @launchpad-ui/tokens only (prerequisite for many tasks)
```

**Run a single test file:** `pnpm vitest run packages/components/__tests__/Button.spec.tsx`
**Run a single test by name:** `pnpm vitest run -t "renders disabled"`
Tests live in each package's `__tests__/*.spec.{ts,tsx}` folder (the only glob Vitest includes). Vitest config is centralized in `vite.config.mts` at the repo root, not per-package.

**Important:** tokens must be built before tests, typecheck, and Storybook will work — `pnpm build:transform` does this and is already prepended to the `test`, `typecheck`, and `storybook` scripts. If you run `vitest` directly, run `pnpm build:transform` first.

**Coverage thresholds** (enforced, in `vite.config.mts`): lines 85%, statements 85%, functions 70%, branches 70%.

## Architecture

### Build & tooling
- **Vite + Rolldown** (`vite: npm:rolldown-vite`) builds each package in ESM + CJS via library mode; a single shared `vite.config.mts` is referenced by every package's `build` script (`vite build -c ../../vite.config.mts && tsc`). Type declarations come from `tsc`.
- **Nx** runs build/test/typecheck only on affected packages and caches results. `build` depends on `^build` (upstream packages build first).
- **Lightning CSS** transforms CSS Modules (class pattern `[hash]_[local]`) and handles browserslist targeting.
- **Biome** is the single tool for lint + format + import organization (100-char line width, single quotes for JS / double for JSX, type imports grouped first). It replaces ESLint/Prettier/Stylelint. `dist/` and other generated dirs are excluded.
- **Vanilla Extract** is wired into the build and being evaluated for new components (see `docs/adr-006-scoped-styles.md`), but most existing components use CSS Modules.

### Packages (`packages/*`)
The primary published packages are `components`, `icons`, and `tokens`. Others (`button`, `modal`, `menu`, `popover`, `core`, `vars`, etc.) are older/standalone packages. **New component work generally goes into `@launchpad-ui/components`.**

A package's typical shape: `src/` (one `.tsx` per component, plus `index.ts` barrel), `__tests__/`, `stories/`, `figma/` (Code Connect mappings), `dist/` (generated).

### Tokens & icons
- **Tokens** are authored in DTCG format and transformed by **Style Dictionary** into CSS custom properties + ES/CJS modules (`packages/tokens`).
- **Icons** are an SVG sprite referenced by a React wrapper. **Do not add icons manually** — they live in Figma and are synced to `@launchpad-ui/icons` via the `sync-icons` GitHub Action.

## Component standards

Follow these when writing or changing component code:

- **Use existing LaunchPad components and packages** (`@launchpad-ui/components`, `@launchpad-ui/icons`, etc.). Never create a custom component when a LaunchPad equivalent exists.
- **React Aria Components is the foundation.** Wrap and theme RAC primitives; do not reimplement keyboard/ARIA/focus behavior. The sanctioned escape hatches are `defaultProps`, slots, `useContextProps`, and render-props composition — see https://react-aria.adobe.com/customization. (`docs/adr-008-component-foundation.md`)
- **Named exports only.** `export default` is reserved for stories and config files (Biome-enforced).
- **Named imports** following `import { Button, Alert } from '@launchpad-ui/components'` and `import { Icon } from '@launchpad-ui/icons'`.
- **String union prop types, never enums** (`size="medium"`, not `Size.Medium`). (`docs/adr-002-string-unions-for-prop-types.md`)
- **Design tokens exclusively** via `--lp-*` CSS variables. Never hardcode colors/spacing/radii/shadows/z-index. **Prefer semantic alias tokens** (`var(--lp-color-bg-ui-primary)`) over primitives (`var(--lp-color-blue-500)`). If no suitable alias exists, the right fix is usually to add one in `packages/tokens`. All styles must work in both light and dark themes via `[data-theme]`.
- **CSS Modules** with scoped class names (`styles.foo`); `class-variance-authority` (cva) for variants (base + variants + defaultVariants). (`docs/adr-005-styles.md`, `docs/adr-006-scoped-styles.md`)
- **Context + prop merging:** public components with overridable props use a `ComponentContext` + `useLPContextProps` pattern (see Button, Menu). Export both component and context.
- **Prefer mid-level purpose-driven components** (`Picker`, `Menu`) over re-exposing raw `Popover + ListBox + Input` combinations to consumers.
- **No cross-package relative imports** — packages reference each other via `@launchpad-ui/*` workspace specifiers, never `../../other-package/src`.
- **React and React Aria belong in `peerDependencies`**, not `dependencies`, in component packages.
- **JSDoc** is expected on exported components and public utilities (describe props, usage, and link relevant React Aria docs). Not required on internal helpers.
- **Accessibility is a hard requirement** — components must pass axe (WCAG 2.0/2.1 A/AA), have proper ARIA + keyboard support, and manage focus correctly. (`docs/adr-001-automated-a11y-tests.md`, `docs/adr-007-a11y-tests-on-stories.md`)
- **Stories are required** for new public components/variants (`*.stories.tsx`) — they drive discoverability plus Chromatic visual regression and axe a11y checks in CI.
- **Tests:** RTL tests must use `render()` from the project's test utils (`test/setup.ts`), not directly from `@testing-library/react`. (`docs/adr-004-component-tests.md`)

The full component list lives in `packages/components/src/index.ts`.

## Non-engineer scope warning (warn, don't block)

Some requests come from people who are **not engineers** (designers, PMs, CX/revenue teammates) and are framed as a "small tweak" but actually ask for a feature change or a large/complex change. When that happens, give an honest heads-up *before* writing code — say how big it looks and recommend an engineer own or review it — **then proceed if they still want to.** This is a *warning*, not a gate: it never blocks anyone, and engineers never see it. Run this check at the **start** of an implementation request.

### 1. Determine the requester's role

You know the requester's GitHub username from the session/request context. Resolve role by checking membership in the **engineer allowlist** of `launchdarkly` org teams — in **any** of these → engineer; otherwise → non-engineer:

```
role-product-engineers   role-infrastructure-administrators
div-product-engineering  div-platform-engineering  div-release-engineering
div-core-engineering     div-measure-engineering   div-service-platform-engineering
```

```sh
# org-team API needs the `launchdarkly` org token (default gh token 404s on launchdarkly/*)
gh api "/orgs/launchdarkly/teams/<team>/memberships/<username>" --jq '.state'   # "active" == member
```

- **Engineer → no warning, proceed normally.**
- **Fail-open:** if the lookup errors (API/token/unknown user), treat as engineer and proceed — never block a real engineer on an API hiccup.

### 2. Estimate complexity and detect out-of-scope signals (non-engineers only)

Size buckets (from the real distribution of merged LaunchPad PRs — typical PR ≈ 4 files / <60 lines): **Small** ≤3 files & presentation-only; **Medium** 4–7 files; **Large** 8–15 files or ~250–700 lines or any signal below; **X-large** >15 files or >~700 lines or a new dependency.

Out-of-scope signals (any one bumps the work to at least Large — LaunchPad components must stay generic):

- **Business logic, product-domain terms** (flag/segment/project/environment/member/metric), **app-specific data fetching**, or **hardcoded LaunchDarkly URLs/copy** in a component — these belong in the consuming app, not here.
- A **new package**, a **new public component/variant** with non-trivial behavior, or a change to a broadly-consumed component (imported in **≥10 files or ≥3 packages** — estimate with `grep -rl "<ComponentName>" packages | wc -l`).
- **New dependency:** adding/bumping a dependency in any `package.json` or lockfile — **always flag** (X-large signal on its own); new deps carry security/supply-chain, bundle-size, and licensing implications a non-engineer can't vet.
- Changes spanning **many files** or **more than one package**.

### 3. Warn (don't block)

For a non-engineer + Large/X-large/out-of-scope signal, before writing code say plainly, e.g.:

> Heads-up: this looks like a **{Large/X-large}** change — {concrete reason, e.g. "it adds product-specific logic to a generic component" / "it adds a new dependency (`foo`)" / "it touches ~9 files across 2 packages"}. That's **feature / engineering-scope work an engineer usually owns**, not a small design-system tweak. I'd recommend looping in an engineer or opening it for engineering review. I can still proceed if you'd like — want me to, or scope it down first?

Then recommend an engineer own it / open it for engineering review (or ask clarifying questions), and **proceed if they still want to**. Keep components generic even when you proceed.

### 4. If a warned requester proceeds anyway, flag it on the PR

If you gave the heads-up and the non-engineer chose to proceed, make that **visible to engineers on the resulting PR** so it gets the right review scrutiny — an overridden warning must not disappear into a normal-looking PR. When you open (or update) the PR, add a clearly-marked callout at the top of the description, e.g.:

> ⚠️ **Scope note (non-engineer request):** This change was flagged as a **{Large/X-large}** / feature-scope change and was requested by a non-engineer (@{requester}). They were given a heads-up recommending engineer involvement and chose to proceed. **Please review accordingly** — {concrete reason}.

If the repo has a suitable label (e.g. `needs-engineer-review`), apply it too. Don't invent a required label or block the merge — this is a heads-up for reviewers, not a gate. Keep it factual and neutral. If the requester scoped the work back down to something small/presentation-only, no PR note is needed.

## Opening a pull request

Follow this flow end to end. The repo's PR gates are strict — a missing changeset or a non-conventional title will block the merge.

1. **Branch off `main`** using `{name}/{type}/{description}`, e.g. `cwinters/feat/add-empty-state`.
2. **Make your changes** following the standards above.
3. **Add a changeset — REQUIRED.** Run `npx changeset` (or hand-author `.changeset/<slug>.md`). Format:
   ```md
   ---
   '@launchpad-ui/components': minor
   ---

   Add `EmptyState` to display empty content views with an illustration, heading, and optional action.
   ```
   Bump rules: `patch` = bugfix/internal refactor (no API change); `minor` = new exported component, new prop, additive behavior; `major` = removed/renamed export, changed default, breaking type. The summary is consumed in changelogs org-wide — make it specific and human-readable, not boilerplate. `changeset-check.yml` **blocks merge** if no changeset is present.
4. **Commit** with Conventional Commits (`feat(components): add EmptyState`) — enforced by commitlint via the `commit-msg` git hook. The `pre-commit` hook auto-runs Biome + syncpack, so let it format your staged files.
5. **Push** the branch.
6. **Open a draft PR:**
   ```sh
   gh pr create --draft \
     --title "feat(components): add EmptyState" \
     --body "$(cat <<'EOF'
   ## Summary
   <what changed and why — specific. "Replaced hardcoded 16px with var(--lp-spacing-400)", not "updated styles">

   ## Screenshots (if appropriate)
   <before/after for visual changes>

   ## Testing approaches
   <tests added, Storybook verification, Chromatic note>
   EOF
   )"
   ```
   The PR title must be a valid Conventional Commit — `lint-pr-title.yml` validates it (the title becomes the squash-merge commit). The body fills the three-section template in `.github/pull_request_template.md`.
7. **A human reviews and marks the PR ready.** Draft is intentional: a design system warrants a human gate before review and Chromatic sign-off. Do not flip it to ready yourself.
8. **CI checks to expect:** `verify.yml` (test / typecheck / Biome), `changeset-check.yml`, Chromatic visual snapshots (**visual diffs require human approval**), `package-size.yml`, `dependency-scan.yml`, plus the PR-comment bot (API-surface diff, story-coverage gaps). New public components need a `*.stories.tsx` or Story Coverage will flag them.

Note: the Claude Code harness auto-appends `Co-Authored-By` trailers to commits and PR bodies — don't add them by hand.

## Reference

- `docs/` — ADRs covering a11y, prop types, builds, tests, styles, and component foundation; plus `tech-stack.md` and `ci.md`.
- `CONTRIBUTING.md` — branch naming, changesets, testing expectations, the icon-sync workflow.
- `.cursor/BUGBOT.md` — Cursor's automated PR-review bot rubric (review-time, complements the authoring standards here).
