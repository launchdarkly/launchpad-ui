# Use Vite to build packages

- Status: accepted
- PR: [#324](https://github.com/launchdarkly/launchpad-ui/pull/324)

## Context and Problem Statement

We want to use a fast, reliable process for building packages that aligns with our development tooling (Storybook, Vitest, Playwright component testing).

## Decision Drivers

- Easy to tweak and configure
- Fast and consistent in CI
- Rich feature set to explore other ways to deliver components and their styles

## Considered Options

- [esbuild](https://esbuild.github.io/) + [@parcel/css](https://github.com/parcel-bundler/lightningcss)
- [Parcel](https://parceljs.org/)
- [Vite](https://vitejs.dev/)

## Decision Outcome

Chosen option: Vite, because of it's simple configuration, built in support for PostCSS, and alignment with development tools of this project.

## Pros and Cons of the Options

### esbuild + @parcel/css

- Good, because they are both fast locally and in CI
- Good, because @parcel/css has many modern CSS features
- Bad, because two sets of configurations and a [custom script](https://github.com/launchdarkly/launchpad-ui/blob/%40launchpad-ui/core%400.10.0/scripts/build.js) is required to build
- Bad, because dev tools such as Storybook and Vite require [custom plugins](https://github.com/launchdarkly/launchpad-ui/blob/%40launchpad-ui/core%400.10.0/parcel-css-plugin.ts) to use @parcel/css
- Bad, because esbuild does not support CSS modules (a feature for styles we want to explore)

### Parcel

- Good, because it's an all-in-one solution for bundling JS and CSS
- Good, because it has unique features such as [locally scoped variables in CSS modules](https://parceljs.org/languages/css/#local-css-variables)
- Bad, because configuration is quite difficult and plugin heavy
- Bad, because the transpiled JS with locally scoped variables enabled is littered with empty vars
- Bad, because they use their own transpiler for TypeScript types

### Vite

- Good, because it requires minimal configuration via [library mode](https://vitejs.dev/guide/build.html#library-mode) for building packages
- Good, because our dev tools Storybook, Vitest, and Playwright component testing all use Vite
- Good, because it has built in support for PostCSS and CSS modules
- Bad, because it uses Rollup for builds which isn't quite as fast as esbuild in CI
