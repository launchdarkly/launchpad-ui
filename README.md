# launchpad-ui

LaunchDarkly's design system

## Installation

[pnpm](https://pnpm.io/) is the package manager used in this monorepo.

[After installing the package manager](https://pnpm.io/installation), run the following command to install the project's dependencies:

```sh
$ pnpm install
```

## Storybook

[Storybook](https://storybook.js.org/) is used for local development of components.

Run this command to start a local instance in your browser:

```sh
$ pnpm storybook
```

## Running Tests

### Build Packages

Our unit and e2e tests are powered by [Vite](https://vitejs.dev/). To resolve imports properly, it needs the packages to be built first. The following command will build every package of the monorepo:

```sh
$ pnpm build
```

### Unit Tests

[Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) are used to unit test the code.

The following command will run unit tests in every package of the monorepo:

```sh
$ pnpm test
```

### E2E Tests

[Playwright](https://playwright.dev/) is used to run e2e browser tests to validate interactivity and accessibility features of components in real browser contexts.

The following command will run e2e tests in every package of the monorepo:

```sh
$ pnpm e2e
```

### SSR Tests

SSR support is tested using a [Remix](https://remix.run/) app [found in the monorepo](./apps/remix/README.md).

The following command will build the app, start the server, and run Playwright tests to verify the components have rendered:

```sh
$ pnpm e2e:ssr
```
