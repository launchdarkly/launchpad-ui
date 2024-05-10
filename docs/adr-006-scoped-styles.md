# Scope component styles to support multiple versions

- Status: proposed
- Date: 07/06/2023

## Context and Problem Statement

We want to improve DX for styling LaunchPad components and support multiple scoped versions of themes and/or component tokens.

## Decision Drivers

- Allows scoping themes, styles and/or component tokens
- Is type‑safe for better DX and token usage
- Supports our current tool chain

## Considered Options

- [Vanilla Extract](https://vanilla-extract.style/)
- [Panda](https://panda-css.com/)

## Decision Outcome

Chosen option: Vanilla Extract, because of the improved DX and similarities to CSS modules (our current solution). To be evaluated in new components.

## Pros and Cons of the Options

### Vanilla Extract

- Good, because it's type‑safe and supports locally scoped classes, [variables](https://vanilla-extract.style/documentation/api/create-var/) and themes
- Good, because it generates static CSS files at build time
- Good, because it's supported in Vite and [Remix](https://remix.run/docs/en/main/guides/styling#vanilla-extract)
- Good, because it offers an [optional package](https://vanilla-extract.style/documentation/packages/recipes/#recipevariants) to easily style and type variants
- Bad, because it can't be linted by Stylelint

### Panda

- Good, because it supports [design tokens](https://panda-css.com/docs/theming/tokens)
- Good, because it generates atomic CSS
- Good, because it's supported in Vite and Remix
- Bad, because it is in early stages with a smaller community
- Bad, because it is [not optimized](https://panda-css.com/docs/guides/component-library) for shipping individual static CSS files
