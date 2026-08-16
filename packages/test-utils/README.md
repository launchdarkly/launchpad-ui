# @launchpad-ui/test-utils

> Shared render helper for LaunchPad component tests.

This package is private. It is not published to npm and carries no version guarantees
outside this workspace. Packages in this repo take it as a `devDependency` with the
`workspace:` protocol.

It re-exports `@testing-library/react`, adds `userEvent` from `@testing-library/user-event`,
and overrides `render` with a wrapper that cleans up after each test.

It must never depend on another `@launchpad-ui/*` package. Every package in the workspace
may depend on it, so a dependency in the other direction would create a cycle.
