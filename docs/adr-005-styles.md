# Use CSS modules for component styles

- Status: accepted
- Deciders: Robb Niznik and Chase Wackerfuss

## Context and Problem Statement

We want to style components in a way that allows for multiple versions of a component to exist on a page.

## Decision Drivers

- Avoid class collisions
- Works with Vite and Remix
- Good DX

## Considered Options

- [Plain CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Modules](https://github.com/css-modules/css-modules)

## Decision Outcome

Chosen option: CSS Modules, because of the class scoping and tooling compatibility.

## Pros and Cons of the Options

### Plain CSS

- Good, because it doesn't require additional tooling
- Bad, because of global scoping and class collisions

### CSS Modules

- Good, because class names get hashed based off the stylesheet content
- Good, because it's supported in Vite and [Remix](https://remix.run/docs/en/main/guides/styling#css-modules)
- Bad, because [global scoping and composition](https://github.com/css-modules/css-modules#exceptions) can be tricky/complex
