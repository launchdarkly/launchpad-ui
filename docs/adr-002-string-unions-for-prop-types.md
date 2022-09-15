# Use string unions for component prop types

- Status: accepted
- Date: 09/12/2022
- PR: \<TBD\>

## Context and Problem Statement

Consumers should only be able to provide type-safe and known values for many component props (for example: `<Button size="..."/>` where `size` **must** be one `"tiny"`, `"small"`, `"normal"`, or `"big"`).

Beyond our documentation, `@launchpad-ui` should support introspecting possible prop values in a capable IDE, such that the options are presented on-the-fly as a user is coding.

## Decision Drivers

- Developer experience
- Tooling support
- Architectural considerations

## Considered Options

- Enums with named keys
- String union types

## Decision Outcome

Chosen option: "String union types" because the developer experience is similar when listing options, the developer experience overall is better because there are fewer imports to manage, the public API surface area of `@launchpad-ui` gets smaller, and there is slightly less run-time code as a result.

## Pros and Cons of the Options 

### String union types

- Good, because lighter API contracts (consumers don't need to import additional types to use components)
- Good, because we'll see a very small reduction in user-facing bundle sizes (`enum`s end up in run-time code)

### Enums with named keys

- Good, because searching for `ButtonSize.SMALL` would yield more targeted matches than `"small"` which aids refactoring slightly
- Bad, because `enum`s have to be imported alongside the components that require them
