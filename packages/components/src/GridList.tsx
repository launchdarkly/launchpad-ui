import type { RefObject } from 'react';
import type {
	GridListItemProps as AriaGridListItemProps,
	GridListProps as AriaGridListProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import {
	GridList as AriaGridList,
	GridListItem as AriaGridListItem,
	composeRenderProps,
} from 'react-aria-components';

import { Checkbox } from './Checkbox';
import { IconButton } from './IconButton';
import styles from './styles/GridList.module.css';

const list = cva(styles.list);
const item = cva(styles.item);

interface GridListProps<T extends object> extends AriaGridListProps<T> {
	ref?: RefObject<HTMLDivElement | null>;
}

interface GridListItemProps<T extends object> extends AriaGridListItemProps<T> {
	ref?: RefObject<T | null>;
}

/**
 * A grid list displays a list of interactive items, with support for keyboard navigation, single or multiple selection, and row actions.
 *
 * https://react-spectrum.adobe.com/react-aria/GridList.html
 */
const GridList = <T extends object>({ ref, ...props }: GridListProps<T>) => {
	return (
		<AriaGridList
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				list({ ...renderProps, className }),
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
	const textValue =
		props.textValue || (typeof props.children === 'string' ? props.children : undefined);
	return (
		<AriaGridListItem
			textValue={textValue}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				item({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(
				props.children,
				(children, { allowsDragging, selectionMode, selectionBehavior }) => (
					<>
						{allowsDragging && (
							/* @ts-expect-error RAC adds label */
							<IconButton slot="drag" icon="grip-horiz" size="small" variant="minimal" />
						)}
						{selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
							<Checkbox slot="selection" />
						)}
						{children}
					</>
				),
			)}
		</AriaGridListItem>
	);
};

export { GridList, GridListItem };
export type { GridListProps, GridListItemProps };
