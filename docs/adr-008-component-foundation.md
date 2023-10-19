# Use React Aria Components as our foundation for components

- Status: proposed
- Date: 10/19/2023

## Context and Problem Statement

We want to improve the accessibility, DX, and composition of our components so that they are cohesive.

## Decision Drivers

- Is well maintained and has a clear roadmap
- Not opinionated regarding styling
- Prioritizes accessibility
- Component offerings capture a majority of our needs
- Offers a way to build/customize our own components

## Considered Options

- [React Aria Hooks](https://react-spectrum.adobe.com/react-aria/index.html)
- [React Aria Components](https://react-spectrum.adobe.com/react-aria/react-aria-components.html)
- [Radix UI](https://www.radix-ui.com/primitives)
- [Ark UI](https://ark-ui.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Decision Outcome

Chosen option: React Aria Components, because it offers the best tradeoffs and best odds for longevity. It also allows us to continue to leverage their hooks when further customization is needed.

## Pros and Cons of the Options

### React Aria Hooks

- 38 hooks
- Good, because [releases are regular](https://react-spectrum.adobe.com/releases/index.html)
- Good, because it is backed by Adobe, ensuring longevity
- Good, because it has a [public roadmap](https://github.com/orgs/adobe/projects/19)
- Good, because it has a page on [accessibility](https://react-spectrum.adobe.com/react-aria/accessibility.html)
- Good, because it offers [utilities](https://react-spectrum.adobe.com/react-aria/VisuallyHidden.html) for customizing UX and [a11y features](https://react-spectrum.adobe.com/react-aria/useFocus.html)
- Bad, because it proves hard to build, maintain, and debug components by [requiring involved composition](https://github.com/adobe/react-spectrum/discussions/2368)

### React Aria Components

- 35 components
- Good, because it offers the same benefits as hooks with [less piping required](https://react-spectrum.adobe.com/react-aria/react-aria-components.html#implementing-a-component)
- Good, because it is [compatible with any styling solution](https://react-spectrum.adobe.com/react-aria/styling.html)
- Good, because it offers [context, slots, and dropping down to hooks](https://react-spectrum.adobe.com/react-aria/advanced.html) if further customization is needed
- Good because it offers less common components such as DatePicker, Drag and Drop, and ListBox
- Good, because gaps in component offerings can be created with their hooks (like our `InlineEdit`)
- Bad, because it is [in beta](https://react-spectrum.adobe.com/react-aria/react-aria-components.html#status) so it may have some bugs
- Bad, because it does not offer an `asChild` prop

### Radix UI

- 28 components
- Good, because it offers the [asChild prop](https://www.radix-ui.com/primitives/docs/guides/composition#composing-multiple-primitives) for intuitive composition
- Good, because it is [compatible with any styling solution](https://www.radix-ui.com/primitives/docs/guides/styling)
- Good, because it has a page on [accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)
- Bad, because [releases are irregular](https://www.radix-ui.com/primitives/docs/overview/releases)
- Bad, because it's [unclear how maintained it will be](https://github.com/radix-ui/primitives/discussions/2305) moving forward (backed by WorkOS a startup)
- Bad, because there is no roadmap available

### Ark UI

- 29 components
- Good, because it offers the [asChild prop](https://ark-ui.com/docs/overview/as-child-prop) for intuitive composition
- Good, because it is [compatible with any styling solution](https://ark-ui.com/docs/overview/styling)
- Good, because it has a [public roadmap](https://ark-ui.canny.io/)
- Good, because it is backed by the folks who built Chakra
- Bad, because it is not mature quite yet and has a smaller community
- Bad, because it does not offer docs on accessibility

### shadcn-ui

- 40 components
- Bad, because it's built [using Radix](https://ui.shadcn.com/docs) so same tradeoffs apply
- https://github.com/shadcn-ui/ui/issues/1622
