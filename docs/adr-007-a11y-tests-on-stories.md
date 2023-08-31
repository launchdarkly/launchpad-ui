# Use Playwright for a11y tests on stories

- Status: accepted
- Deciders: Robb Niznik
- PR: [#971](https://github.com/launchdarkly/launchpad-ui/pull/971)

## Context and Problem Statement

We want comprehensive a11y tests without adding too much additional work or manual test writing. By running a11y tests on our stories, we can simultaneously test light and dark mode, as well as cover other states/variants. This will replace our Cypress component testing solution.

## Decision Drivers

- Fast in CI
- Easy to debug test failures and a11y violations
- Has a watch mode

## Considered Options

- [Storybook Test Runner](https://github.com/storybookjs/test-runner)
- [Playwright](https://playwright.dev/)

## Decision Outcome

Chosen option: Playwright, because of its simplicity and official support from Deque.

## Pros and Cons of the Options

### Storybook Test Runner

- Good, because it uses our stories, removing the need to re-create component states
- Good, because it has a rich feature set, including code coverage and running a11y tests via [axe-playwright](https://github.com/abhinaba-ghosh/axe-playwright)
- Bad, because it has many dependencies, including Jest, which we want to avoid

### Playwright

- Good, because it has few dependencies
- Good, because it has [axe integration](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md) from Deque
- Good, because it supports sharding tests
- Good, because it has a [watch mode](https://playwright.dev/docs/running-tests#run-tests-in-ui-mode)
- Bad, because it requires us to maintain the logic to fetch stories and their context for the tests

## Links

- Update to [ADR-004](adr-004-component-tests.md)
