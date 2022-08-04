# Launchpad

A modern, intuitive, and accessible design system built and used by the LaunchDarkly team.

## Resources

For a demo of all components available in Launchpad, visit [our Storybook](https://main--626696a2018c1f004a1cde86.chromatic.com/).

## Installation

Full installation instructions can be found here: https://www.npmjs.com/package/@launchpad-ui/core

---

## Running Launchpad locally

### Installation

[pnpm](https://pnpm.io/) is the package manager used in this monorepo.

[After installing the package manager](https://pnpm.io/installation), run the following command to install the project's dependencies:

```sh
$ pnpm install
```

### Storybook

[Storybook](https://storybook.js.org/) is used for local development of components.

Run this command to start a local instance in your browser:

```sh
$ pnpm storybook
```

### Running Tests

#### Unit Tests

[Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) are used to unit test the code.

The following command will run unit tests in every package of the monorepo:

```sh
$ pnpm test
```

#### E2E Tests

[Playwright](https://playwright.dev/) is used to run e2e browser tests to validate interactivity and accessibility features of components in real browser contexts.

Before running e2e tests for the first time, you will need to run the following command to install all the browsers that Playwright uses:

```sh
npx playwright install
```

The following command will run e2e tests in every package of the monorepo:

```sh
$ pnpm e2e
```

To debug a particular test, go to the package and run it in headed mode:

```sh
$ cd packages/alert
$ pnpm e2e --headed --debug
```

#### SSR Tests

SSR support is tested using a [Remix](https://remix.run/) app [found in the monorepo](./apps/remix/README.md).

The following command will build the app, start the server, and run Playwright tests to verify the components have rendered:

```sh
$ pnpm e2e:ssr
```
