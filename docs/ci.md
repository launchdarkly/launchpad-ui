# CI

## GitHub Actions

We use [GitHub Actions](https://github.com/features/actions) for its versatility, strong GitHub integration, and simplicity by avoiding to directly work with Docker images.

### Changeset Check

Checks if a changeset is required based off the changes made. The label `skip changeset` can be added on a PR to bypass the check if non-user facing changes (new tests for example) are made to a package.

### Chromatic

Runs [Chromatic](https://www.chromatic.com/) on our built Storybook to take snapshots of stories for visual regression testing and runs accessibility tests. Any new snapshots or changes must be reviewed and accepted before merging to main.

### Code Connect

Checks for updated [Figma Code Connect](https://www.figma.com/code-connect-docs/quickstart-guide/) files and publishes them to our Figma design library.

### Lint PR

Ensures that pull request titles follow the Conventional Commits spec.

### Compressed Size

Reports changes in compressed package file sizes and decorates PRs.

### Preview release

Builds preview releases for the `components`, `icons`, and `tokens` packages (if they've changed) with [pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new) and decorates the PR with instructions.

### Release

Runs on merges to main. Upon detection of commited changesets, it opens a pull request with all of the package versions and changelogs updated. It will continue to update the PR as new changesets are added to main. Once the pull request is merged, the updated packages are built and published to npm by the action.

### Release LaunchPad VS Code Extension

The VS Code extension under `apps` is treated like a package with changesets but has a separate release process to publish to the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=LaunchDarklyOfficial.launchpad-design-system).

### Sync tokens to Figma

Syncs our design tokens to Figma variables if the tokens are updated in code.

### Verify changes

Verifies code by running linting and tests on affected packages.
