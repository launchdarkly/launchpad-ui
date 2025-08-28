# Contributing to LaunchPad UI

:+1::tada: First off, thanks for taking the time to read our contribution docs! :tada::+1:

The following is a set of guidelines for contributing to LaunchPad and its packages, which are hosted in the [LaunchDarkly Organization](https://github.com/launchdarkly) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

- [How Can I Contribute?](#how-can-i-contribute)
- [Code Contribution Guide](#code-contribution-guide)
- [Common Tasks](#common-tasks)
  - [Installation](#installation)
  - [Storybook](#storybook)
  - [Running Tests](#running-tests)
  - [Adding Dependencies to Packages](#adding-dependencies-to-packages)
  - [Adding Icons to LaunchPad](#adding-icons-to-launchpad)
- [Styleguides](#styleguides)


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

See our [common tasks section](#common-tasks) below for advice on how to accomplish common tasks.

For testing, you can visit the [tests section](#running-tests) to learn which test commands we have available. We have a minimum coverage score you must fulfill for unit tests, so make sure to write a few tests to cover base cases and any heavily-used interactions.

You should also consider adding `axe` accessibility tests. See other packages for examples.

### Step 3: Generate a changelog for your code

We use a tool called [changesets](https://github.com/changesets/changesets) to manage versioning and changelogs within LaunchPad. Every package change should include a changelog with a description of the changes. When new changelog files are detected in LaunchPad's `.changeset` folder, a Github action will publish or update a pull request that, when merged, will publish those changes along with the changelog to new NPM module versions for the modified packages.

To generate a changelog:

- Run `npx changeset`
- You'll see a list of packages `changesets` has determined have changed
  - Select the packages you've updated.
- `changesets` will now ask what type of version change should occur:
  - A brand new package should receive a "minor" bump, which should set it at `0.1.0`.
  - For other version bumps, refer to [the semantic versioning docs](https://semver.org/spec/v0.1.0.html).
- `changesets` will create a new `.md` file in the `.changeset` directory. Find it, and update the description to be more human readable.

Here's an example of an acceptable file in the `.changeset` folder:

```md
---
'@launchpad-ui/components': patch
'@launchpad-ui/tokens': patch
---

Add `Toast` to display brief, temporary notifications of actions, errors, or other events
```

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
feat(components): Add `Toast` component
```

### Step 5: Publish a pull request

When you're ready, you can push your feature branch to our remote repository.

There are just a few things to keep in mind:

- When titling a pull request, always use conventional commits in the same convention as in Step 4. The title is used as the commit description when a PR is squashed and merged.
- You should use our pull request template and fill it out as much as possible.
- If there are visual diffs or a11y issues between your branch and main, Chromatic will generate a list of changes that must be approved before the PR should be merged. This can be found in the Github actions list.
- The team will be automatically assigned to take a look.

Note: if you are creating a pull request from a fork, CI checks will only run when it is `ready for review`. To run Chromatic, you will need to make a build locally in the terminal using the project token found in Chromatic:

```sh
$ pnpm chromatic --project-token PROJECT_TOKEN --branch-name FORKED_BRANCH --build-script-name storybook:build --exit-once-uploaded --only-changed --externals "packages/icons/src/img/**" --externals "packages/tokens/tokens/**"
```

### Step 6: Test and verify your changes

If you updated the `components`, `icons`, or `tokens` package your PR will be decorated with preview releases ([example](https://github.com/launchdarkly/launchpad-ui/pull/1686#issuecomment-2898653450)) which will allow you to install them to your project to test/verify. This is helpful for bug fixes or ensuring no regressions result from a refactoring and/or style changes.


## Common Tasks

### Local setup

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

### Adding Dependencies to Packages

- Pin dependencies.
- Match dependency versions across packages when possible so that we can share dependency versions and reduce bundle sizes.
- If a package depends on another LaunchPad package, use the workspace syntax to use latest compatible versions:
  - Ex: `"@launchpad-ui/tokens": "workspace:~"`

### Adding Icons to LaunchPad

_Do not add icons manually to launchpad-ui. Icons are managed in Figma and synced to the `@launchpad-ui/icons` package via a script._

#### First, add your icon to the Figma library

1. Create a branch in the LaunchPad Figma library and add your icon to the [Icons](https://www.figma.com/design/98HKKXL2dTle29ikJ3tzk7/%F0%9F%9A%80-LaunchPad?m=auto&node-id=1-1483&t=YGNnNEonY474hKwo-1) page.
1. Make sure your new icon is reviewed by Design. You can always ping the `@uxteam` in #ask-launchpad-design-system if you need help making your icon or to get a review.
1. Merge the icon to the LaunchPad Figma library

#### Then, sync `@launchpad-ui/icons` package with Figma

1. Trigger the `sync-icons` workflow by going to [the actions tab](https://github.com/launchdarkly/launchpad-ui/actions/workflows/sync-icons.yml) and clicking "Run workflow". This action will generate a PR with your new icon.
1. [Open your PR](https://github.com/launchdarkly/launchpad-ui/pulls?q=is%3Apr+is%3Aopen+label%3Aicons). Make sure your icons look correct by opening the Chromatic build preview for your PR. Reviewers will be auto assigned.


## Styleguides

### Monorepo

We use a [monorepo structure](https://monorepo.tools/) to organize our code to be published to NPM.

### Versioning

We are using [major version zero (0.y.z) semantic versioning](https://semver.org/spec/v0.1.0.html) to indicate that the project is still in an "initial development" phase and anything may change at any time. When a new package is introduced, the initial version is set to `0.1.0`.

### Javascript Styleguide

All Javascript code is linted with [Biome](https://biomejs.dev/).

### CSS Styleguide

All CSS code is linted with [Biome](https://biomejs.dev/).

### Specs Styleguide

- Include thoughtfully-worded, well-structured [Vitest](https://vitest.dev/) specs in the `__tests__` folder of each package.
- Treat `describe` as a noun or situation.
- Treat `it` as a statement about state or how an operation changes state.
