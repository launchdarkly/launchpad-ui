import type { Args, Decorator, ReactRenderer } from '@storybook/react';
import type { JSX } from 'react';
import type { AnnotatedStoryFn, StoryContext } from 'storybook/internal/types';

import merge from 'deepmerge';
import { Fragment } from 'react';

/**
 * Creates a decorator function that returns a new component with that class name added.
 * You may also pass in a render function that takes in the props with a modified class name. The original story function
 * is also passed in if you want modify the story output (ex: Adding labels or a wrapper)
 */
export const createWithClassesDecorator = (
	classes: string[] = [],
	renderFunc?: (
		props: Args & { className?: string },
		originalStoryFn: AnnotatedStoryFn<ReactRenderer>,
		context: StoryContext<ReactRenderer>,
	) => JSX.Element,
): Decorator => {
	// Create a function of type Decorator
	const withStateDecorator: Decorator = (storyFn, Context) => {
		const pseudoStates = classes || [];
		const { viewMode, args, name, component } = Context;
		// This decorator is explicitly made for react
		const originalStoryFn = Context.originalStoryFn as AnnotatedStoryFn<ReactRenderer>;
		// Just render the component without decoration if viewing the docs
		if (viewMode === 'docs') {
			return storyFn();
		}

		const decoratedComponents = pseudoStates.map((state) => {
			// Don't throw away the original class name prop
			const classWithState = `${state} ${args.className || ''}`;
			const componentKey = `${name} with ${state}`;
			// We don't want to modify the original props
			const modifiedProps = merge(args, {});
			const DecoratedComponent = component || Fragment;
			modifiedProps.className = classWithState;
			if (renderFunc) {
				if (!originalStoryFn) {
					throw new Error('No story was exported. Please export one when using this decorator.');
				}
				return (
					<Fragment key={componentKey}>
						{renderFunc(modifiedProps, originalStoryFn, Context)}
					</Fragment>
				);
			}
			return <DecoratedComponent key={componentKey} {...modifiedProps} />;
		});

		return (
			<>
				{storyFn()}
				{decoratedComponents}
			</>
		);
	};
	return withStateDecorator;
};

export enum PseudoClasses {
	FOCUS = 'pseudo-focus',
	HOVER = 'pseudo-hover',
	FOCUS_VISIBLE = 'pseudo-focus-visible',
	ACTIVE = 'pseudo-active',
}

export const sleep = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const REACT_NODE_TYPE_DOCS = {
	summary: 'ReactNode',
	detail:
		"While these docs only allow you to pass a string that is rendered into a button's text, you can pass the prop any ReactNode.",
};
