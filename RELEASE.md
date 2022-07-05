# Release Process

Releases are done via the [Changesets Action](https://github.com/changesets/action) which will open a pull request titled `chore: version packages` if changesets are found in `main` or a prerelease branch. The pull request gets automatically updated if new changesets are committed. The pull request details which packages will be released and their new versions according to the semantic ranges set in the changesets. The maintainers will review and merge the pull request when new releases are desired. Upon merging, the action will publish the newly versioned packages to npm, push up the new tags, and create GitHub releases.

## Pre-releases

1. Create a new branch off `main` in the form of `release/**` (release/button-v2 for example)
2. Run `pnpm changeset pre enter [tag]` where tag is `alpha` or `beta` depending on the state of release and commit the changes
3. Push your branch to remote
4. Branch off the release branch and create PRs with changesets (as you would normally do in `main`) with the release branch set as the base
5. Observe that the Changesets Action opens prerelease PRs and the same process as noted above takes place
6. When the release branch is finished and the package/s are stable, exit pre mode with `pnpm changeset pre exit` and open a PR from the release branch into `main`
