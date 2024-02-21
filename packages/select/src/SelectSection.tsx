import type { PartialNode } from '@react-stately/collections';
import type { SectionProps } from '@react-types/shared';

import { Children } from 'react';

type SelectSectionProps<T extends object> = SectionProps<T>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Section = <T extends object>(_: SelectSectionProps<T>) => {
	return null;
};

Section.getCollectionNode = function* getCollectionNode<T>(
	props: SectionProps<T>,
): Generator<PartialNode<T>> {
	const { children, title, items } = props;
	yield {
		type: 'section',
		props: props,
		hasChildNodes: true,
		rendered: title,
		'aria-label': props['aria-label'],
		*childNodes() {
			if (typeof children === 'function') {
				if (!items) {
					throw new Error('props.children was a function but props.items is missing');
				}

				for (const item of items) {
					yield {
						type: 'item',
						value: item,
						renderer: children,
					};
				}
			} else {
				const items: PartialNode<T>[] = [];
				Children.forEach(children, (child) => {
					items.push({
						type: 'item',
						element: child,
					});
				});

				yield* items;
			}
		},
	};
};

// We don't want getCollectionNode to show up in the type definition
const _Section = Section as <T extends object>(props: SelectSectionProps<T>) => JSX.Element | null;
export { _Section as SelectSection };
export type { SelectSectionProps };
