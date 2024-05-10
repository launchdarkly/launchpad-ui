# CI

## GitHub Actions

We use [GitHub Actions](https://github.com/features/actions) for its versatility, strong GitHub integration, and simplicity by avoiding to directly work with Docker images.

### Chromatic

Runs [Chromatic](https://www.chromatic.com/) on our built Storybook to take snapshots of stories for visual regression testing. Any new snapshots or changes must be reviewed and accepted before merging to main.

### Lint PR

Ensures that pull request titles follow the Conventional Commits spec.

### Compressed Size

Reports changes in compressed package file sizes.

### Release

Runs on merges to main. Upon detection of commited changesets, it opens a pull request with all of the package versions and changelogs updated. It will continue to update the PR as new changesets are added to main. Once the pull request is merged, the updated packages are built and published to npm by the action.

### Verify changes

Verifies code by running linting, unit tests, e2e tests, and SSR tests on affected packages.
