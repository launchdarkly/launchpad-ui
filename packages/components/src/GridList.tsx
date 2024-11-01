import type { forwardRefType } from '@react-types/shared';
import type { ForwardedRef } from 'react';
import type { GridListItemProps, GridListProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	GridList as AriaGridList,
	GridListItem as AriaGridListItem,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/GridList.module.css';

const list = cva(styles.list);
const item = cva(styles.item);

const _GridList = <T extends object>(
	props: GridListProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
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
 * A grid list displays a list of interactive items, with support for keyboard navigation, single or multiple selection, and row actions.
 *
 * https://react-spectrum.adobe.com/react-aria/GridList.html
 */
const GridList = (forwardRef as forwardRefType)(_GridList);

const _GridListItem = <T extends object>(props: GridListItemProps<T>, ref: ForwardedRef<T>) => {
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
		/>
	);
};

/**
 * A GridListItem represents an individual item in a GridList.
 *
 * https://react-spectrum.adobe.com/react-aria/GridList.html
 */
const GridListItem = (forwardRef as forwardRefType)(_GridListItem);

export { GridList, GridListItem };
export type { GridListProps, GridListItemProps };
