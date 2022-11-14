# Use Cypress component testing for browser tests

- Status: accepted
- Deciders: Robb Niznik and Chase Wackerfuss
- PR: [#422](https://github.com/launchdarkly/launchpad-ui/pull/422)

## Context and Problem Statement

We want browser tests to be easy to debug and be able to run in watch mode for better DX.

## Decision Drivers

- Fast in CI
- Easy to debug test failures and a11y violations
- Has a watch mode

## Considered Options

- [Cypress component testing](https://docs.cypress.io/guides/component-testing/react/quickstart)
- [Storybook Test Runner](https://github.com/storybookjs/test-runner)

## Decision Outcome

Chosen option: Cypress component testing, because of the familiar DX, watch mode, and ability to collect test coverage.

## Pros and Cons of the Options

### Storybook Test Runner

- Good, because it uses our stories, removing the need to re-create component states
- Good, because it has a rich feature set, including code coverage and running a11y tests via [axe-playwright](https://github.com/abhinaba-ghosh/axe-playwright)
- Bad, because it has many dependencies, including Jest, which we want to avoid
- Bad, because features such as dark mode and responsive-modes can't be tested

### Cypress component testing

- Good, because many internal contributors are familiar with using Cypress
- Good, because it has a watch mode and is easy to debug (via printing errors to the console)
- Good, because it can run via Vite's dev server
- Good, because `cypress-axe` for a11y tests has axe-core as a peer dependency
- Good, because it can collect test coverage via `@cypress/code-coverage` (can replace unit tests down the road)
- Good, because it addresses limitations with Playwright's solution: being able to pass components as props and not using Vite's production mode (slower)
- Bad, because it is not as fast as Playwright in general for browser-based tests

## Links

- Update to [ADR-0001](adr-001-automated-a11y-tests.md)
