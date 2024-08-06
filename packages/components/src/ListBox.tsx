import type { forwardRefType } from '@react-types/shared';
import type { ForwardedRef } from 'react';
import type { ListBoxItemProps, ListBoxProps } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	ListBox as AriaListBox,
	ListBoxItem as AriaListBoxItem,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/ListBox.module.css';

const box = cva(styles.box);
const item = cva(styles.item);

const _ListBox = <T extends object>(props: ListBoxProps<T>, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<AriaListBox
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				box({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A listbox displays a list of options and allows a user to select one or more of them.
 *
 * https://react-spectrum.adobe.com/react-aria/ListBox.html
 */
const ListBox = (forwardRef as forwardRefType)(_ListBox);

const _ListBoxItem = <T extends object>(props: ListBoxItemProps<T>, ref: ForwardedRef<T>) => {
	const textValue =
		props.textValue || (typeof props.children === 'string' ? props.children : undefined);
	return (
		<AriaListBoxItem
			textValue={textValue}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				item({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isSelected }) => (
				<>
					<span className={styles.content}>{children}</span>
					{isSelected && <Icon name="check" size="medium" />}
				</>
			))}
		</AriaListBoxItem>
	);
};

/**
 * A ListBoxItem represents an individual option in a ListBox.
 *
 * https://react-spectrum.adobe.com/react-aria/ListBox.html
 */
const ListBoxItem = (forwardRef as forwardRefType)(_ListBoxItem);

export { ListBox, ListBoxItem };
export type { ListBoxProps, ListBoxItemProps };
