# Contributing to LaunchPad UI

:+1::tada: First off, thanks for taking the time to read our contribution docs! :tada::+1:

The following is a set of guidelines for contributing to LaunchPad and its packages, which are hosted in the [LaunchDarkly Organization](https://github.com/launchdarkly) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

- [How Can I Contribute?](#how-can-i-contribute)
- [Code Contribution Guide](#code-contribution-guide)
- [Common Tasks](#common-tasks)
- [Styleguides](#styleguides)

---

## How Can I Contribute?

The LaunchPad maintainers monitor the [issue tracker](https://github.com/launchdarkly/launchpad-ui/issues) in the repository. Bug reports and feature requests should be filed in this issue tracker. The maintainers will respond to all newly filed issues within two business days.

### Reporting Bugs

When reporting a bug, help maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

- Determine which package the issue should be reported in.
- Perform a cursory search in our [bug issues](https://github.com/launchdarkly/launchpad-ui/issues?q=label%3Abug+) to see if the problem has already been reported. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.
- [File a bug issue](https://github.com/launchdarkly/launchpad-ui/issues/new?assignees=&labels=&template=bug_report.md&title=) and describe in detail how to reproduce the issue. Screenshots or video are always a big help!

### Suggesting Enhancements

We're always open to enhancement suggestions! When assessing an enhancement, we must consider how it will affect other teams, how it will function with other UI/UX patterns in LaunchPad, and more.

- Perform a cursory search in our [enhancement issues](https://github.com/launchdarkly/launchpad-ui/issues?q=label%3Aenhancement+) to see if the feature has already been suggested. If it has and the issue is still open, add a comment to the existing issue instead of opening a new one.
- [File a feature request](https://github.com/launchdarkly/launchpad-ui/issues/new?assignees=&labels=&template=feature_request.md&title=) and describe in detail what you're suggesting.

### Contributing Code

If you'd like to help by writing code and filing a pull request for a feature enhancement or bugfix, we welcome all contributions, but here are a few things to note:

- For new features: reach out to someone on the team to discuss the design system contribution process.
- For feature enhancements: if it's a small tweak, feel free to submit a PR for the team to review.
- For bugfixes: we welcome all bugfix PR submissions.

To learn how to contribute code in LaunchPad, follow the guide below.

---

## Code Contribution Guide

If you're contributing code to LaunchPad, follow this guide to make sure that once you publish your pull request, the team has everything we need to review your code.

### Step 1: Create a feature branch off `main`

We follow a branch naming convention inspired by [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary), which looks like so:

```
{your name}/{tag}/{description of change}
```

So if I'm publishing a fix to some CSS issues, it might look like this:

```
tealydan/fix/update-alert-max-width
```

### Step 2: Write and test your code

See our [Guides](#guides) below for advice on how to accomplish common tasks.

For testing, you can visit the [README.md](./README.md) to learn which test commands we have available. We have a minimum coverage score you must fulfill for unit tests, so make sure to write a few tests to cover base cases and any heavily-used interactions.

You should also consider adding `axe` accessibility tests. See other packages for examples.

### Step 3: Generate a changelog for your code

We use a tool called [changesets](https://github.com/changesets/changesets) to manage versioning and changelogs within LaunchPad. Every package change should include a changelog with a description of the changes. When new changelog files are detected in LaunchPad's `.changeset` folder, a Github action will publish or update a pull request that, when merged, will publish those changes along with the changelog to new NPM module versions for the modified packages.

To generate a changelog:

- Run `npx changeset`
- You'll see a list of packages `changesets` has determined have changed
  - Select the packages you've updated. **Note: you should always include `core` as well, even if you haven't directly modified it.** This is because core imports all other packages, so it should always be released alongside individual package releases. [More on this here.](#how-does-versioning-work-in-launchpad).
- `changesets` will now ask what type of version change should occur:
  - A brand new package should receive a "minor" bump, which should set it at `0.1.0`.
  - For other version bumps, refer to [the semantic versioning docs](https://semver.org/spec/v0.1.0.html).
  - `core` should always receive the highest bump you gave an individual package.
- `changesets` will create a new `.md` file in the `.changeset` directory. Find it, and update the description to be more human readable.

Here's an example of an acceptable file in the `.changeset` folder:

```md
---
'@launchpad-ui/banner': patch
'@launchpad-ui/alert': patch
'@launchpad-ui/core': patch
---

[Banner]: Update banner font size
[Alert]: Add max width to container
```

_Note that you don't have to leave a line item for core._

Note: if you aren't updating packages that are released as NPM modules, you don't have to generate a changeset.

### Step 4: Commit your code

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) approach to commit messages, branch naming, and pull request titles. Not only does this make it easier for us developers to grok, search, and organize code changes, it also lets us do some fun automation.

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Start the commit message with a [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) tag, such as:
  - `fix`
  - `feat`
  - `build`
  - `chore`
- Add a scope where relevant.

Here's an example of an acceptable commit message:

```
feat(notification): Add notification package
```

### Step 5: Publish a pull request

When you're ready, you can push your feature branch to our remote repository.

There are just a few things to keep in mind:

- When titling a pull request, always use conventional commits in the same convention as in Step 4. The title is used as the commit description when a PR is squashed and merged.
- You should use our pull request template and fill it out as much as possible.
- If there are visual diffs between your branch and main, Chromatic will generate a list of changes that must be approved before the PR should be merged. This can be found in the Github actions list.
- The team will be automatically assigned to take a look.

Note: if you are creating a pull request from a fork, CI checks will only run when it is `ready for review`. To run Chromatic, you will need to make a build locally in the terminal using the project token found in Chromatic:

```sh
$ pnpm chromatic --project-token PROJECT_TOKEN --branch-name FORKED_BRANCH --build-script-name storybook:build --exit-once-uploaded --only-changed --externals "packages/icons/src/img/**" --externals "packages/tokens/src/**"
```

---

## Common Tasks

### Generating New Packages With Plop

With the help of [plop](https://plopjs.com), we can quickly scaffold new component files in a consistent and opinionated way.

Simply run `pnpm generate component` and follow the prompts, and you'll be well on your way to adding a new component package to LaunchPad.

### Adding Dependencies to Packages

- Don't pin dependencies, use caret ranges.
- Match dependency versions across packages when possible so that we can share dependency versions and reduce bundle sizes.
- If a package depends on another LaunchPad package, use the workspace syntax to use latest compatible versions:
  - Ex: `"@launchpad-ui/tokens": "workspace:~"`

### Adding Icons to LaunchPad

- Add the SVG body content into a new symbol entry with id `lp-icon-{name}` in the `/src/image/sprite.svg` file in the `@launchpad/icons` package.
- Run `pnpm icons:build` to add its `id` (minus prefix `lp-icon`) to the icons array in `/src/types.ts`.
- Run `pnpm storybook` and visit the "Icons" page to ensure your icon was generated properly.

---

## Styleguides

### Javascript Styleguide

All Javascript code is linted with [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/).

### CSS Styleguide

All CSS code is linted with [Stylelint](https://stylelint.io/).

### Specs Styleguide

- Include thoughtfully-worded, well-structured [Vitest](https://vitest.dev/) specs in the `__test__` folder of each package.
- Treat `describe` as a noun or situation.
- Treat `it` as a statement about state or how an operation changes state.
