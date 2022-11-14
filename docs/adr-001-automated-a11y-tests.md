# Use Playwright component testing to test accessibility

- Status: superseded by [ADR-0004](adr-001-automated-a11y-tests.md)
- PR: [#180](https://github.com/launchdarkly/launchpad-ui/pull/180)

## Context and Problem Statement

We want to have a consistent, automated way to test our components for WCAG 2.1 AA accessibility compliance.

## Decision Drivers

- Easy to customize
- Minimal dependencies required
- Fast and consistent in CI

## Considered Options

- [jest-axe](https://github.com/nickcolley/jest-axe)
- [Storybook Test Runner](https://github.com/storybookjs/test-runner)
- [Playwright Component Tests](https://playwright.dev/docs/test-components)

## Decision Outcome

Chosen option: Playwright Component Tests, because of it's speed locally/CI and rich customization.

## Pros and Cons of the Options

### jest-axe

- Good, because it can be used in unit tests, minimizing the number of files for a package
- Bad, because it tends to throw inconsistent errors in Vitest
- Bad, because features such as dark mode and responsive-modes can't be tested

### Storybook Test Runner

- Good, because it uses our stories, removing the need to re-create component states
- Good, because it has a rich feature set, including code coverage and running a11y tests via [axe-playwright](https://github.com/abhinaba-ghosh/axe-playwright)
- Bad, because it has many dependencies, including Jest, which we want to avoid
- Bad, because features such as dark mode and responsive-modes can't be tested

### Playwright Component Tests

- Good, because [dark mode](https://playwright.dev/docs/api/class-page#page-emulate-media) and [responsive-modes](https://playwright.dev/docs/emulation#viewport) can be tested
- Good, because it's fast by using Vite to create components
- Good, because it only has 3 dependencies
- Good, because a11y can be tested via a custom assertion [expect-axe-playwright](https://github.com/Widen/expect-axe-playwright)
- Good, because it uses Playwright directly, which we already do for SSR tests
- Bad, because dedicated `e2e` test files are needed to render components and run tests
