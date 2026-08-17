# @launchpad-ui/portal

## 0.4.5

### Patch Changes

- [#2009](https://github.com/launchdarkly/launchpad-ui/pull/2009) [`52a9e67`](https://github.com/launchdarkly/launchpad-ui/commit/52a9e67bdd97f51792d3bc64a0d48823f7f7e497) Thanks [@apucacao](https://github.com/apucacao)! - Moved the shared test render helper each package's tests used into its own workspace
  package, `@launchpad-ui/test-utils`, and declared it as a devDependency instead of
  reaching for it by relative path. No test behaviour changed. The only visible effect
  is a new devDependency entry in this package's published manifest, which is not
  installed by consumers.

## 0.4.4

### Patch Changes

- [#1965](https://github.com/launchdarkly/launchpad-ui/pull/1965) [`a0bb548`](https://github.com/launchdarkly/launchpad-ui/commit/a0bb548a5f693c52a958b7981af537ac36df244a) Thanks [@apucacao](https://github.com/apucacao)! - Relax exact-pinned peer dependencies to caret ranges so consumers aren't forced onto a single exact React (or, where applicable, React Aria) version.

  - `react` and `react-dom` peer ranges change from an exact `19.2.6` to `^19`, matching how these packages already declare their other peers.
  - Where present, `react-aria`, `@react-aria/utils` peer pins also move from an exact version to a caret range on the same version — no functional change, just a wider accepted range for downstream apps managing their own React Aria versions.

  No runtime behavior changes; devDependencies used for local development and testing remain pinned exactly.

- [#1967](https://github.com/launchdarkly/launchpad-ui/pull/1967) [`c90b767`](https://github.com/launchdarkly/launchpad-ui/commit/c90b76725d99eef1ef42a7df738442073d77234f) Thanks [@apucacao](https://github.com/apucacao)! - Replace the `rolldown-vite` override with stock `vite`, and swap the build-time `@vitejs/plugin-react-oxc` plugin for `@vitejs/plugin-react-swc` (already used by tests). No public API changed. Build output was verified equivalent: for every published package, the emitted `.d.ts`/`.json`/`.svg` files are byte-identical, CSS output is byte-identical apart from one dropped `rolldown-vite`-specific comment marker, and JS output is semantically identical (confirmed by diffing `esbuild --minify`-normalized bundles, which strips only bundler-specific formatting).

## 0.4.3

### Patch Changes

- [#1898](https://github.com/launchdarkly/launchpad-ui/pull/1898) [`9e0dbf9`](https://github.com/launchdarkly/launchpad-ui/commit/9e0dbf944d0c976fb70bb59d2052ce8a54fd83ac) Thanks [@apucacao](https://github.com/apucacao)! - Upgrade `react-aria-components` to 1.17.0 along with aligned `react-aria`, `react-stately`, and `@react-aria/*` packages. Imports migrated to subpath form (e.g. `react-aria-components/Menu`) via Adobe's `use-subpaths` codemod, which reduces consumer bundle size without relying on tree-shaking.

  Two upstream behavior changes worth noting:

  - `DateField` and `DatePicker` now constrain invalid input on blur instead of while typing (RAC 1.15).
  - `Tabs` defaults `shouldSelectOnPressUp` to `true` when an item is a link (RAC 1.17).

## 0.4.2

### Patch Changes

- [#1792](https://github.com/launchdarkly/launchpad-ui/pull/1792) [`bd49c43`](https://github.com/launchdarkly/launchpad-ui/commit/bd49c431bf39e8a69adc95961977af21d5f36617) Thanks [@vezaynk](https://github.com/vezaynk)! - bumping dependencies: axios, react, react-dom, react-aria

## 0.4.1

### Patch Changes

- [#1767](https://github.com/launchdarkly/launchpad-ui/pull/1767) [`217b7c4`](https://github.com/launchdarkly/launchpad-ui/commit/217b7c4b47e44fd7ad7eb1b0ba8367308da596b3) Thanks [@vezaynk](https://github.com/vezaynk)! - add skipLibCheck for tsconfing.build.json

## 0.4.0

### Minor Changes

- [#1752](https://github.com/launchdarkly/launchpad-ui/pull/1752) [`a7b499e`](https://github.com/launchdarkly/launchpad-ui/commit/a7b499e6edc11ac166a75fd3cb8a72c75e956d9b) Thanks [@vezaynk](https://github.com/vezaynk)! - bump react-aria

## 0.3.0

### Minor Changes

- [#1743](https://github.com/launchdarkly/launchpad-ui/pull/1743) [`00198f0`](https://github.com/launchdarkly/launchpad-ui/commit/00198f0e3798741f45708f604380411bb2706cba) Thanks [@vezaynk](https://github.com/vezaynk)! - Bump all react-aria packages

## 0.2.0

### Minor Changes

- [#1741](https://github.com/launchdarkly/launchpad-ui/pull/1741) [`fbd9260`](https://github.com/launchdarkly/launchpad-ui/commit/fbd92603385f45426b8160e5ca05cef207a1e6b6) Thanks [@vezaynk](https://github.com/vezaynk)! - bump react version

## 0.1.6

### Patch Changes

- [#1709](https://github.com/launchdarkly/launchpad-ui/pull/1709) [`d7c78a5`](https://github.com/launchdarkly/launchpad-ui/commit/d7c78a534517e5289f744b1e0cd600c90e5ed2d7) Thanks [@nhironaka](https://github.com/nhironaka)! - chore: update storybook to 9.0.9, run renderer-to-framework migration

## 0.1.5

### Patch Changes

- [#1233](https://github.com/launchdarkly/launchpad-ui/pull/1233) [`d635813`](https://github.com/launchdarkly/launchpad-ui/commit/d63581359d661c6e8e40ce5ad2a6f2d557333db0) Thanks [@Niznikr](https://github.com/Niznikr)! - Tag deprecated components

- [#1241](https://github.com/launchdarkly/launchpad-ui/pull/1241) [`28f0708`](https://github.com/launchdarkly/launchpad-ui/commit/28f070844e7d4b35d54634fd78faf534b5f897c0) Thanks [@Niznikr](https://github.com/Niznikr)! - Add repository and license fields to package.json

## 0.1.4

### Patch Changes

- [#947](https://github.com/launchdarkly/launchpad-ui/pull/947) [`29e2b26c`](https://github.com/launchdarkly/launchpad-ui/commit/29e2b26c7f2a5496adb11a72fd79fcadd33717ff) Thanks [@Niznikr](https://github.com/Niznikr)! - Annotate pure functions

## 0.1.3

### Patch Changes

- [#851](https://github.com/launchdarkly/launchpad-ui/pull/851) [`be9448b1`](https://github.com/launchdarkly/launchpad-ui/commit/be9448b154e7ea5ff56a65448e83da2808bd1782) Thanks [@kwatkins-ld](https://github.com/kwatkins-ld)! - use ComponentProps type to simplify intrinsic element props

## 0.1.2

### Patch Changes

- [#633](https://github.com/launchdarkly/launchpad-ui/pull/633) [`4d40aa2e`](https://github.com/launchdarkly/launchpad-ui/commit/4d40aa2ee768f182ed28d13d42c93c438d446e15) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update third party dependencies to pin versions to match consumer app

## 0.1.1

### Patch Changes

- [#629](https://github.com/launchdarkly/launchpad-ui/pull/629) [`183e328e`](https://github.com/launchdarkly/launchpad-ui/commit/183e328e9f315a26c0af4de9ebba51108868bdde) Thanks [@chasedarkly](https://github.com/chasedarkly)! - Update Vite build tool to 4.0

## 0.1.0

### Minor Changes

- [#524](https://github.com/launchdarkly/launchpad-ui/pull/524) [`5b78533`](https://github.com/launchdarkly/launchpad-ui/commit/5b78533cb4905e6a1e70ee0e232e9253e34d9e3d) Thanks [@Niznikr](https://github.com/Niznikr)! - Add portal package
