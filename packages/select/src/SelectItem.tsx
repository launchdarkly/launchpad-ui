import type { ItemProps } from '@react-types/shared';
import type { ComponentPropsWithoutRef, ElementType } from 'react';
import type { SharedSelectState } from './types';

type SelectItemProps<T extends object, P extends ElementType> = ItemProps<T> & {
	as?: P;
	onClick?: (_e: MouseEvent, state: SharedSelectState) => void;
};

const SelectItem = <T extends object, P extends ElementType = 'div'>(
	_props: SelectItemProps<T, P> & Omit<ComponentPropsWithoutRef<P>, keyof SelectItemProps<T, P>>,
) => {
	return null;
};

SelectItem.getCollectionNode = function* getCollectionNode<T extends object>(
	props: ItemProps<T>,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	context: any,
) {
	const rendered = props.title || props.children;
	const textValue =
		props.textValue || (typeof rendered === 'string' ? rendered : '') || props['aria-label'] || '';

	// suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
	if (!textValue && !context?.suppressTextValueWarning) {
		console.warn(
			'<SelectItem> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.',
		);
	}

	yield {
		type: 'item',
		props: props,
		rendered,
		textValue,
		'aria-label': props['aria-label'],
		hasChildNodes: false,
	};
};

export { SelectItem };
export type { SelectItemProps };
