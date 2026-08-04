import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type {
	GridListItemProps as AriaGridListItemProps,
	GridListProps as AriaGridListProps,
} from 'react-aria-components/GridList';
import { GridList as AriaGridList, GridListItem as AriaGridListItem } from 'react-aria-components/GridList';
import type { ContextValue } from 'react-aria-components/slots';
import { cva } from 'class-variance-authority';

import { Checkbox } from './Checkbox';
import { IconButton } from './IconButton';
import { useLPContextProps } from './utils';

import styles from './styles/GridList.module.css';

const gridListStyles = cva(styles.list);
const gridListItemStyles = cva(styles.item);

interface GridListProps<T extends object> extends AriaGridListProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface GridListItemProps<T extends object> extends AriaGridListItemProps<T> {
	ref?: Ref<HTMLDivElement>;
}

// biome-ignore lint/suspicious/noExplicitAny: ignore
// oxlint-disable-next-line typescript/no-explicit-any -- Context objects can't carry an open generic; matches existing biome-ignore precedent
const GridListContext = createContext<ContextValue<GridListProps<any>, HTMLDivElement>>(null);

/**
 * A grid list displays a list of interactive items, with support for keyboard navigation, single or multiple selection, and row actions.
 *
 * https://react-spectrum.adobe.com/react-aria/GridList.html
 */
const GridList = <T extends object>({ ref, ...props }: GridListProps<T>) => {
	// oxlint-disable-next-line no-param-reassign -- sanctioned useLPContextProps merge pattern (see AGENTS.md context+prop-merging convention)
	[props, ref] = useLPContextProps(props, ref, GridListContext);
	return (
		<AriaGridList
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				gridListStyles({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A GridListItem represents an individual item in a GridList.
 *
 * https://react-spectrum.adobe.com/react-aria/GridList.html
 */
const GridListItem = <T extends object>({ ref, ...props }: GridListItemProps<T>) => {
	const textValue = props.textValue || (typeof props.children === 'string' ? props.children : undefined);
	return (
		<AriaGridListItem
			textValue={textValue}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				gridListItemStyles({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { allowsDragging, selectionMode, selectionBehavior }) => (
				<>
					{allowsDragging && (
						/* @ts-expect-error RAC adds label */
						<IconButton slot="drag" icon="grip-horiz" size="small" variant="minimal" />
					)}
					{selectionMode === 'multiple' && selectionBehavior === 'toggle' && <Checkbox slot="selection" />}
					{children}
				</>
			))}
		</AriaGridListItem>
	);
};

export { GridList, GridListContext, GridListItem, gridListItemStyles, gridListStyles };
export type { GridListProps, GridListItemProps };
