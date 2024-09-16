# Tech Stack

## Design Tokens

Design tokens are platform-agnostic design decisions that encapsulate our brand. They are the foundation to building user interfaces and new experiences. We write tokens in the [DTCG format](https://tr.designtokens.org/format/).

### Transforms

We use [Style Dictionary](https://amzn.github.io/style-dictionary/#/) to transform tokens into CSS custom properties, ES modules, and CommonJS modules.

## Icons

Our icons are delivered as a SVG sprite that is then referenced in a React wrapper component.

## Components

Our components are built using [React](https://beta.reactjs.org/). React is simple to use and has strong TypeScript support, making it easy to encapsulate state and expose functionality through properties for components. We use [TypeScript](https://www.typescriptlang.org/) to write cleaner code and provide strong editor integration for consumers of our components. Our styles are written in CSS and live alongside components. Plain CSS offers the best long-term caching and its latest features help address many of the issues CSS frameworks seek to solve, without a cost to performance.

## Package Manager

We use [pnpm](https://pnpm.io/) as our package manager for its speed, space efficiency, and strong monorepo support.

## Development

We use [Storybook](https://storybook.js.org/) to build and test our components in isolation. It also provides us a means to document and communicate component API to engineers through story examples and args tables.

## Build

Our packages are built using [Vite](https://vitejs.dev/) for its speed, rich features, and ease to customize. Packages are built in ESM and CJS formats. Type declarations are emitted using the TypeScript compiler.

[Nx](https://nx.dev/) is used to run lint, test, and build scripts on only the packages affected by code changes. Its speed, caching abilities, and project graph features make it ideal for our project.

## Test

We use [Vitest](https://vitest.dev/) to run our unit tests as it is Jest compatible, supports ESM and TypeScript by default, generates [c8](https://github.com/bcoe/c8) code coverage, and provides an instant watch mode. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) is used to test our React components and write tests that closely resemble how a user would interact with our components.

To test accessibility we use [Playwright](https://playwright.dev/) with [@axe-core/playwright](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md) to run checks on Storybook stories.

## Code Style

We use [Biome](https://biomejs.dev/) to highlight problems in our code and [Biome](https://biomejs.dev/) to format it to be consistent across the repo.

## Git

Commits, branch names, and pull request titles follow the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/) to create an explicit commit history and communicate intent/scope of changes to consumers.

## Version and Release

We use [Changesets](https://github.com/changesets/changesets) for versioning and releasing our packages. It empowers contributors to declare how their changes should be released via a `changeset`, a markdown file containing semver bump types with a summary of the changes made. The tool is able to process these changesets to update package versions and changelogs.
