# LaunchPad

A modern, intuitive, and accessible design system built and used by the LaunchDarkly team.

## Resources

For a demo of all components available in LaunchPad, visit [our Storybook](https://main--626696a2018c1f004a1cde86.chromatic.com/).

## Installation

Full installation instructions can be found here: https://www.npmjs.com/package/@launchpad-ui/core

---

## Running LaunchPad locally

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

#### Component Tests

[Cypress component testing](https://docs.cypress.io/guides/component-testing/quickstart-react) is used to run browser tests to validate interactivity and accessibility features of components in real browser contexts.

The following command will run Cypress tests for every package of the monorepo and report code coverage:

```sh
$ pnpm cypress:component
```

To run in watch mode or debug a particular test, run the following command:

```sh
$ pnpm cypress:open
```

#### SSR Tests

SSR support is tested using a [Remix](https://remix.run/) app [found in the monorepo](./apps/remix/README.md).

The following command will build the app, start the server, and run Cypress tests to verify the components have rendered:

```sh
$ pnpm e2e:ssr
```

## LaunchPad Architecture

LaunchPad is set up as a monorepo where each component package is bundled and delivered as its own NPM package. While you can technically import each component package separately, we do recommend using the "bundled" version of LaunchPad at `@launchpad-ui/core`. The team chose to treat each component as a separate package internally for improved testing, version management, and isolation guarantees.

At the time of writing this, we are using the [pnpm package manager](https://pnpm.io/) for its workspace feature and the [Nx build system](https://nx.dev/) for monorepo support. Each component is defined as a directory under the `packages` directory. It's advised to understand generally how these works when contributing.

### The `packages` Directory

When we talk about "components" in LaunchPad, we're talking about a UI component library implemented as a package in our monorepo. It is a standalone library that can be imported and used by other JS applications.

While all LaunchPad UI components are packages, not all packages are necessarily "components." A package can be defined to store utilities such as tokens used by other packages, shared helper functions, etc.

LaunchPad libraries may depend on one another, as in the case of our modal library depending on the button library. This dependency, just like with shared utility libraries, is simply represented as a package.json import.

### The `apps` Directory

The apps directory is essentially a standalone project that has easy access to our workspace packages. Currently, we have a Remix application that we use for SSR testing, but you could build other apps such as a docs website or another testing playground.

### Versioning

We are using [major version zero (0.y.z) semantic versioning](https://semver.org/spec/v0.1.0.html) to indicate that the project is still in an "initial development" phase and anything may change at any time. When a new package is introduced, the initial version is set to `0.1.0`.

As mentioned above, single components are deployed as versioned NPM packages, and `@launchpad-ui/core` is versioned too.

When a component package version changes, this will create a version bump in `@launchpad-ui/core` as well according to this strategy:

- `core` receives a version bump whenever one of its dependencies (e.g. button, modal) is updated.
- The `core` version bump is equivalent to the highest semver version bump of an underlying dependency in the release.
  - For example, if `core` were at `0.1.0`, and then the `button` package gets bumped from `0.2.1` to `0.3.0` (minor) and the `alert` package gets bumped from `0.5.1` to `0.5.2` (patch), `core` package will get bumped to `0.2.0`. (minor)

---

## Questions?

- LaunchDarkly employees can reach out with questions or comments in [our Slack channel, #ask-launchpad-design-system](https://launchdarkly.slack.com/channels/CDXEFNMLP)
- You can also [open an issue](https://github.com/launchdarkly/launchpad-ui/issues/new) in the LaunchPad repository to ask a question!
