# Spike: Unified LaunchPad `DataTable` (RAC + TanStack v8)

**Branch:** `spike/launchpad-datatable` (launchpad-ui)
**Status:** iteration 4 — real observability AlertsTable migrated onto `DataTable` (AlertsTableV2) and verified in gonfalon Storybook. Deferred: column reorder, size/config persistence, lazy activity loading (see §12).
**Owner:** Chris Schmitz
**Started:** 2026-07-09

> Local spike doc — not a Jira ticket. Tracks the problem, the target architecture,
> the API, and living progress. Verify every change in Storybook via Chrome.

---

## 1. Background

Discussion in `#launchpad-design-system` (2026-07-07/08) converged on a single goal:
**one high-quality, unified data table used everywhere in Gonfalon.**

- Observability shipped its own table (`@gonfalon/observability-ui/components/Table`,
  used by `AlertsTable` and other o11y surfaces). It is a `Box`/`div` compound component
  on observability-ui's own `vars` tokens — **not React Aria, not LaunchPad design tokens**
  (it does pull in a few LP icons/components). Built under Highlight's "ship fast" remit;
  not a deliberate divergence, but the last major table outside LaunchPad.
- The o11y team committed to owning table consolidation next quarter, with the unified
  LaunchPad component as a requirement.
- Design already has a **global table design system built and approved in Figma**
  (semantics/tokens ready).
- Everyone agreed the initial build is "Claude-shaped" — a timeboxed, AI-assisted spike:
  give Claude the target table as requirements + LP docs/architecture, build the component,
  prove it out by replacing the o11y table, throw it away if it doesn't hold up.

### Proposed technical shape (from the thread, Zakk V.)

> Export a `DataTable` abstraction from LP composed on the base RAC `Table`. Internally
> `DataTable` bundles **TanStack Table (v8)** as the headless provider for functionality
> beyond RAC, **defaulting to RAC's built-ins where compatibility issues could arise
> (Selection, Sorting)**. Use RAC's drag-and-drop hooks natively. Reference the RAC/TanStack
> v8 CodeSandbox + TanStack's "Copy Table Prompt" output.

## 2. Current state (verified in code)

| Piece | Where | Notes |
|-------|-------|-------|
| Legacy LP table | `@launchpad-ui/table` (`packages/table`) | Plain `TableHead/Row/Cell`. Older, non-RAC. |
| RAC base table | `@launchpad-ui/components` → `Table.tsx` | Thin wrapper over `react-aria-components@1.13.0`. Built-in **sort UI, selection, row DnD, column resize**. Uses `--lp-*` tokens + CSS modules. **No higher-level data-table abstraction.** |
| TanStack | — | Not previously a dep. Added `@tanstack/react-table@^8` to `@launchpad-ui/components` for this spike. |
| o11y one-off | `gonfalon packages/observability-ui/src/components/Table` | Div/`Box` compound on observability `vars` tokens. `AlertsTable` layers `@dnd-kit` column reorder + custom column-management popover + persisted config + search on top. |

**Gap:** LP has strong table *primitives* but no component that takes declarative
`columns` + `data` and provides freeform search, filtering, column visibility/ordering,
and grouping out of the box. That's the `DataTable` abstraction.

## 3. Goals / non-goals

**Goals (this spike)**
- Prove the RAC + TanStack v8 composition holds up as a real, ergonomic component.
- `DataTable<TData>` in `@launchpad-ui/components`: declarative `columns` (TanStack
  `ColumnDef`) + `data`, LP tokens/styling, RAC semantics + a11y.
- Core data-heavy interactions working end to end in Storybook: **global search, sorting,
  row selection, column visibility, column resize**.
- Storybook stories, verified in Chrome.

**Non-goals (defer / follow-up)**
- Full o11y `AlertsTable` migration (separate follow-up; the real proof-out).
- Virtualization, pagination, server-side data, grouping/aggregation, faceted filters.
- Retiring `@launchpad-ui/table` or the o11y table.

## 4. Target architecture — division of labor

Faithful to the thread: **RAC owns interaction/semantics; TanStack owns the data model.**

| Concern | Owner | Mechanism |
|---------|-------|-----------|
| Markup, keyboard nav, a11y | **RAC** | LP `Table/TableHeader/TableBody/Row/Cell/Column` |
| Selection | **RAC** | `selectionMode` + `selectedKeys`/`onSelectionChange` (RAC injects the checkbox column) |
| Sort *interaction/UI* | **RAC** | `<Column allowsSorting>` + `sortDescriptor`/`onSortChange` |
| Sort *model* | **TanStack** | `sorting` state → `getSortedRowModel()` (RAC descriptor ⇄ TanStack state bridge) |
| Row drag-and-drop | **RAC** | `useDragAndDrop` hooks (native) |
| Column resize | **RAC** | `ResizableTableContainer` + `ColumnResizer` |
| Freeform / global search | **TanStack** | `globalFilter` state → `getFilteredRowModel()` |
| Column filters | **TanStack** | `columnFilters` (follow-up) |
| Column visibility | **TanStack** | `columnVisibility` state + LP `Menu` (multi-select) toolbar control |
| Column ordering | **TanStack** | `columnOrder` state (UI: follow-up) |

**Bridge rules**
- RAC `Row` key = TanStack `row.id`; RAC `Column` id = TanStack `column.id`.
- Only *data* columns/cells are rendered from TanStack; RAC auto-injects the
  selection/drag columns and cells, so counts line up.
- Cell + header content rendered with TanStack `flexRender`.

## 5. Proposed API (spike)

```tsx
<DataTable
  aria-label="Alerts"
  data={rows}
  columns={columns}          // TanStack ColumnDef<TData>[]
  getRowId={(r) => r.id}
  selectionMode="multiple"   // optional, RAC
  enableGlobalFilter         // toolbar search (default on)
  enableColumnVisibility     // toolbar column menu (default on)
  enableColumnResize         // wraps in ResizableTableContainer
  onSelectionChange={...}
/>
```

- `columns`: standard TanStack `ColumnDef` (`accessorKey`/`accessorFn`, `header`, `cell`,
  `enableSorting`, `enableHiding`, `size`, `meta.isRowHeader`). Matches "Copy Table Prompt".
- Toolbar is opt-out; when both search + column-visibility are off, `DataTable` renders
  just the table.

## 6. Acceptance criteria

- [x] `DataTable` exported from `@launchpad-ui/components`, built on RAC `Table` + TanStack v8.
- [x] Declarative `columns` + `data`; LP tokens; no hardcoded colors.
- [x] Global search filters rows (TanStack). *(verified: "Traces" → 8→3 rows)*
- [x] Sorting works via RAC column UI, sorted by TanStack model. *(verified: Name asc/desc)*
- [x] Row selection via RAC (checkbox column), selection surfaced to consumer. *(verified: 9 checkboxes = 8 rows + select-all)*
- [x] Column visibility toggled from a toolbar menu (TanStack state). *(verified: hide Product → 4→3 columns, no crash)*
- [x] Column resize via RAC. *(Resizable story wraps in `ResizableTableContainer`)*
- [x] Storybook stories cover the above; verified in Chrome (screenshots in this dir).
- [x] Spike writeup (§9). Full o11y `AlertsTable` migration is the follow-up proof-out.
- [x] `pnpm typecheck` clean (whole repo); `biome check` clean on new files.

## 7. Open questions

- Column-header **reorder DnD** (o11y has it via @dnd-kit): RAC has no built-in column DnD.
  Drive via TanStack `columnOrder` + custom drag, or accept menu-based reorder? (follow-up)
- Do we fold search/column-management **into** `DataTable`, or expose headless hooks so
  product surfaces compose their own toolbars? (spike: built-in, opt-out)
- Where does this live long-term — `@launchpad-ui/components` or a dedicated `@launchpad-ui/data-table`?

## 9. Spike findings / writeup

**Does the RAC + TanStack v8 composition hold up? — Yes.** A ~230-line `DataTable`
delivers declarative columns+data with freeform search, sorting, selection, column
visibility, and resize, all on LP tokens and RAC semantics. The division of labor is
clean: TanStack owns the row model (filter/sort/visibility), RAC owns rendering,
selection, sort UI, and DnD. Full-repo `tsc` and `biome` pass; every interaction
verified headless in Chrome.

**What the build proved**
- LP already had the hard part — a RAC `Table` with sort/selection/DnD/resize built in.
  The missing piece was genuinely just the *headless data layer + toolbar*, which is
  exactly the small, well-contained thing TanStack is for.
- Sort as a **hybrid** works well: RAC renders the caret UI and emits a `SortDescriptor`;
  we translate to TanStack `sorting` state and let `getSortedRowModel()` do the ordering.
  Faithful to "prefer RAC's built-in for Sorting" while TanStack owns the model.
- Selection stays **pure RAC** (`selectionMode` → RAC injects the checkbox column). We only
  render *data* columns/cells from TanStack; RAC prepends selection/drag — counts line up.

**The one real gotcha (documented in code)**
- RAC memoizes dynamic-collection rows by stable `row.id`. Toggling column visibility
  updates the statically-mapped header but leaves *cached* cells behind → RAC throws
  `Cell count must match column count`. Fix: pass RAC's `dependencies` prop a value that
  changes with the visible columns. It must be **constant size** (RAC spreads it into a
  `useMemo` deps array), so a single joined key string (`name|status|updated`), not the id
  array itself. This is the key integration lesson for anyone extending the pattern.

**What's needed to make it *the* Gonfalon table (follow-ups)**
1. **Prove-out migration:** re-implement o11y `AlertsTable` on `DataTable` (column
   management popover → built-in visibility menu; `@dnd-kit` column reorder → TanStack
   `columnOrder`; persisted config; status sort; row actions; activity sparkline). This is
   the real test and the retirement path for `@gonfalon/observability-ui/components/Table`.
2. **Column reorder DnD:** RAC has no built-in column-header DnD. Decide: TanStack
   `columnOrder` + a custom header drag, vs. menu-based reorder.
3. **Scale:** virtualization + pagination for large datasets (o11y tables get big).
4. **Filtering beyond search:** per-column/faceted filters (`columnFilters`).
5. **API shape:** built-in toolbar vs. headless hooks so surfaces compose their own
   toolbars; and whether this lives in `@launchpad-ui/components` or a dedicated package.
6. **Design sign-off** against the approved Figma table system; Meticulous baseline.

**Recommended path:** land `DataTable` in LP behind the existing RAC `Table` primitives,
then migrate tables newest/simplest-first, o11y `AlertsTable` as the flagship. Migrations
are Claude-shaped once the component and one reference migration exist.

## 10. Figma comparison (actually checked, 2026-07-09)

Compared against the approved **"Table BETA"** page (`node-id=23034-34697`), specifically
the assembled `Table [BETA]` preset (`23047:41619`), `Header/Regular` (`23047:41302`), and
its `get_variable_defs`.

**Aligned (foundation is right):** the design's own variables ARE the LP token family my
component inherits via the RAC `Table` — `--lp-spacing-300` = 8px cell padding,
`--lp-color-border-ui-primary` #d8dde3, `--lp-color-bg-ui-secondary` #f7f9fb header fill,
`body/2/semibold` (13/20) headers, `label/1/medium` + `small/1/medium` cell text. So this is
the correct design system, not a divergent one — same conclusion the RAC primitive gave us.

**Gaps — status after iteration 2:**
1. **Density** — ✅ CLOSED. `density` prop (`default`/`compact`/`tight`) mapped to LP
   spacing tokens (8 / 4 / 0), verified across three stacked tables.
2. **Cell content types** — ✅ CLOSED (helpers in `DataTableCells.tsx`): `TwoLineCell`
   (+ optional leading media → Text/Composition), `NumericValue` (tabular),
   `DeltaValue` (signed, tabular, success/error/neutral, `invert` for lower-is-better),
   `StatusCell` (semantic dot + label → Binary/status), `TagCell` (composes the LP
   `TagGroup`/`Tag` DS primitive → References), `MonoValue` (code font → Monotype).
   Time/Currency are `TwoLineCell`/`NumericValue` usages. Remaining Figma content not yet
   built: sparkline, inline toggle, mini bar (References extras) — low priority.
3. **Header treatment** — ✅ matched to the o11y design (scoped to `.root`, no base fork):
   muted `text-ui-secondary`, **`label/1/medium`** weight (medium, not the base's semibold),
   a subtle **`bg-ui-secondary`** fill, and a **`border-ui-primary`** underline; row dividers
   also recolored to `border-ui-primary` (#d8dde3). Column-settings control is now a **`⋯`
   (more-horiz) icon button** pinned top-right. **Still divergent (inherited from base LP RAC
   `Table`, would require changing the shared `Table.tsx`):** the sort icon is `caret-up/down`
   where Figma uses a **down-arrow**, and there's no per-column dropdown menu — flagged to
   design/LP rather than forked here.
4. **Right-aligned numeric** — ✅ CLOSED. Column `meta.align: 'end'` right-aligns header +
   cells; numeric helpers use tabular figures. Verified in the NumericColumns story.
5. **Trailing actions "…" column** — ✅ demonstrated. Modeled as a normal non-sortable,
   non-hideable column with an `IconButton` (`more-horiz`) + `Menu` cell in the Overview
   story. Not special API — the standard column pattern.

**Honest verdict:** the component now realizes most of the Table BETA design — right tokens,
density, content-type cells, numeric alignment, muted headers — and is verified in Storybook
across 6 stories (Overview, WithSelection, Density, NumericColumns, Empty). The remaining
true gap is the **header sort-icon (caret vs down-arrow) + per-column menu**, which lives in
the shared LP RAC `Table` and should be a design/LP decision, not a DataTable-local fork. The
o11y `AlertsTable` migration remains the real end-to-end proof-out.

## 11. Row interaction — click-row-to-open (traces list)

The primary interaction for a data-heavy list (e.g. observability traces) is **click a row to
open its detail**. Supported two ways on `DataTable`:
- `onRowAction(id)` — RAC row activation (click / Enter); RAC suppresses it when the press
  lands on an interactive cell (checkbox, actions menu). Good for navigation.
- `selectionMode="single"` + `selectionBehavior="replace"` + controlled `selectedKeys` —
  whole-row select with a **highlight** and no checkbox; drives a list/detail layout.

`TracesList` story uses the second: left = traces list (mono trace id, service, status dot,
tabular duration, start time); right = trace detail with a **span waterfall** (bars positioned
by offset/width, colored per service, indented by depth). Clicking a row highlights it and
swaps the detail — verified headless (`v3-traces-*.png`). Also added scoped hover/selected row
backgrounds (the base LP `Table` styles only cursor + focus ring).

**✅ Reconciled against o11y "Screen designs" `2829-54659` (Spans tab).** Reworked the story
to match: columns are **Content · Service · Resource name · Span ID · Parent Span ID · Secure
Session ID · Timestamp**; Content is single-line with an **"Open" button revealed on row
hover/selection**; null cells show a muted **`Empty`** placeholder; Secure Session ID is a
chip (LP `Tag` + session icon); Span/Parent IDs are monospace; column-settings pinned
top-right. Dropped the earlier invented waterfall/status/duration columns. Verified headless
(`v4-traces-*.png`): 7 columns, `Empty` present, row click updates the opened-span banner,
zero console errors.

Header + borders now matched to the row/header tokens read from the design (header
`label/1/medium` + `bg-ui-secondary` + `border-ui-primary` underline; row dividers
`border-ui-primary`); column-settings is now a `⋯` icon button. Remaining deltas: (a) the
surrounding page chrome — query-DSL bar, histogram, Overview/Spans tabs, time picker
— is app-level and out of scope for a `DataTable` component story. **Note:** the session chip
nests an interactive `TagGroup` (role=grid) inside a cell; a static read-only badge would be
better for dense cells — LP has no non-interactive Tag/Badge today (follow-up).

## 12. Proof-out: observability AlertsTable migration (in gonfalon)

The real end-to-end test — replace the bespoke observability alerts table with `DataTable`.

**Where** (gonfalon `spike/launchpad-datatable`):
- `packages/observability/src/components/DataTable/` — the LP `DataTable` + cells **vendored**
  (imports rewired to published `@launchpad-ui/components@0.19.1` + `@tanstack/react-table@8.21.3`,
  both already gonfalon deps). Marked TEMPORARY — deleted once LP publishes `DataTable`. Placed
  in `packages/observability` (not `observability-ui`, which is maintenance-mode: no new
  components/exports, vanilla-extract only). Added a `defaultSorting` prop.
- `packages/observability/src/pages/Alerts/components/AlertsTable/AlertsTableV2.tsx` — the alerts
  table re-implemented on `DataTable`, **reusing the real cell components** (`AlertStatusBadge`,
  `AlertDestinationTags`, `AlertActivitySparkline`, `AlertActionsMenu`, adaptive-triggers tags).
  Built alongside the production `AlertsTable` (non-destructive).
- `AlertsTableV2.stories.tsx` — mock data (5 alerts, varied statuses), provider stack mirrored
  from `TracePanel.stories.tsx` (memory data router + `VegaProjectProvider` + `ObservabilityQueryProvider`).

**Covered & verified** (gonfalon Storybook `:6006`, headless Chrome — `v5-alerts-v2*.png`):
declarative columns (name/status/last-update/triggers/destinations/activity/actions); freeform
search (name); **status-priority sort** (Alerting→Error→Enabled→Disabled, on-fire first) via a
TanStack `sortingFn` + `defaultSorting`; alphabetical name sort; column show/hide via the ⋯ menu;
all the real cells render; row click-to-open. `tsc` clean for the new files (37 remaining errors
are pre-existing `*-test` files); only benign LaunchDarkly-SDK-in-Storybook console warnings.

**Column drag-reorder — ✅ DONE.** Added `enableColumnReorder` to `DataTable`: a grip handle
(revealed on header hover) drives TanStack `columnOrder` via lightweight **HTML5 drag** — no
`@dnd-kit` dependency, works identically in the LP source and the vendored copy. Headers *and*
cells reorder together; a column pins with `meta.enableReorder: false` (AlertsTableV2 pins the
actions column). Verified in gonfalon Storybook (dragging Status past Last-status-update swaps
both). RAC has no native column DnD, so this is our own layer. *Follow-up:* keyboard reorder
(the grip is `role="button"` but mouse-only today — flagged with a `biome-ignore` on the drop
zone). Also mirrored back into the canonical LP `DataTable` (+ a `defaultSorting` prop that had
drifted), so both copies are in sync.

**Deferred (documented, not yet mapped):**
- **Per-column resize + size/order/visibility persistence** (prod persists to localStorage).
- **Lazy per-row activity loading** (prod fetches sparklines only for on-screen rows via an
  intersection observer) — here activity is supplied up-front; `DataTable` needs a row-visible
  hook to preserve this.

**Takeaway:** `DataTable` hosts the real alerts table's rich cells cleanly and replaces the
bespoke `observability-ui/Table` + `@dnd-kit` + `CustomColumnPopover` stack for the core cases.
The deferred items are the concrete backlog to make it a full drop-in replacement.

## 8. References

- Slack: `#launchpad-design-system` thread (2026-07-08, ts 1783489510.817879)
- Figma: approved global table design system (node 23034-34697)
- o11y table: `gonfalon packages/observability-ui/src/components/Table/`, `.../Alerts/components/AlertsTable/`
- LP RAC table: `launchpad-ui packages/components/src/Table.tsx`
- RAC + TanStack v8 CodeSandbox (from thread); TanStack "Copy Table Prompt"

---

## Progress log

- **2026-07-10** — Added **column drag-reorder** to `DataTable` (`enableColumnReorder`): grip
  handle → TanStack `columnOrder`, dep-free HTML5 drag, `meta.enableReorder:false` to pin.
  Enabled on AlertsTableV2 (actions pinned); verified in gonfalon Storybook (headers+cells
  reorder together). Mirrored to the canonical LP source + synced a drifted `defaultSorting`
  prop; biome/tsc clean in both. Keyboard reorder is the remaining follow-up.


- **2026-07-09** — Spike kicked off. Branch created. Repo recon done (Storybook 9, pnpm+nx,
  cva + CSS modules + `--lp-*` tokens, RAC Table already ships sort/selection/DnD/resize).
  Added `@tanstack/react-table@8.21.3` to `@launchpad-ui/components`. Spec written.
- **2026-07-09** — Built `DataTable.tsx` + `DataTable.module.css` + barrel exports +
  `DataTable.stories.tsx` (Example / WithSelection / Resizable, alerts-shaped data).
  Ran Storybook, drove all 3 stories headless in Chrome. Verified initial render (8 rows),
  global search (→3), sort asc/desc, selection (checkbox column), column visibility.
  Hit + fixed the RAC dynamic-collection cache invariant via `dependencies` (see §9).
  `pnpm typecheck` (whole repo) and `biome check` both clean. Screenshots: `verify-*.png`.
- **2026-07-09** — Actually compared against Figma "Table BETA" (`23034-34697`) via the
  Figma MCP (screenshots + `get_variable_defs`). Foundation/tokens align; logged concrete
  gaps (density, cell content types, header sort-icon/color, numeric align, actions col)
  in §10. Corrected the record: this is a correct-foundation primitive, not a full
  realization of the design.
- **2026-07-09** — Iteration 2: closed most §10 gaps. Added `density` prop + `meta.align`
  right-align to `DataTable`; scoped muted header color; built `DataTableCells.tsx`
  (TwoLineCell, NumericValue, DeltaValue+invert, StatusCell, TagCell over LP `Tag`,
  MonoValue). Rewrote stories into a content-type kitchen sink + Density/Numeric/Selection/
  Empty. Fixed a real `TagList` name collision with LP's existing `TagGroup` export (renamed
  to `TagCell`, now composes the DS `Tag`). Verified all 6 stories headless in Chrome (zero
  console errors); `pnpm typecheck` + `biome` clean. Screenshots: `v2-*.png`. Remaining true
  gap: header sort-icon/per-column menu lives in the shared LP RAC `Table` → raise w/ design.
- **2026-07-09** — Iteration 3: added `onRowAction` + `selectionBehavior` passthrough and a
  scoped hover/selected row highlight; built the `TracesList` story (list/detail with a span
  waterfall) for the click-row-to-open-a-trace pattern. Verified headless in Chrome (row click
  swaps the detail; zero console errors); `pnpm typecheck` + `biome` clean (`v3-traces-*.png`).
  Blocked on reconciling visuals vs o11y "Screen designs" 2829-54659 — need it active in Figma.
- **2026-07-09** — Migrated the real observability AlertsTable onto `DataTable` in gonfalon
  (branch `spike/launchpad-datatable`): vendored DataTable+cells into `packages/observability`,
  built `AlertsTableV2` reusing the production cell components + a Storybook story. Verified in
  gonfalon Storybook `:6006` (headless): columns, name search, status-priority + name sort,
  column show/hide, all real cells render, row click-to-open. `tsc` clean for new files. See §12
  for covered vs deferred (reorder / persistence / lazy activity).
- **2026-07-09** — Pulled o11y "Screen designs" `2829-54659` (Spans tab) via Figma MCP and
  reworked `TracesList` to match: real columns, single-line Content + hover-revealed "Open",
  `Empty` placeholders, session chip, mono IDs, column-settings pinned right (new `columnMenu`
  style). Dropped the invented waterfall. Verified headless (`v4-traces-*.png`); `pnpm
  typecheck` + `biome` clean; zero console errors.
- **2026-07-09** — Matched header + borders to the o11y design (read row/header tokens from
  `2829-54705`/`54706`): header `label/1/medium` + `bg-ui-secondary` + `border-ui-primary`
  underline, row dividers `border-ui-primary`; swapped the "Columns" text button for a `⋯`
  (more-horiz) icon button (dropped the now-unused `Button` import). Scoped to `.root` — the
  shared LP `Table` is untouched. Verified traces + overview headless; typecheck + biome clean.
