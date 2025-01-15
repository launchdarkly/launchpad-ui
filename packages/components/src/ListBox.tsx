import type { RefObject } from 'react';
import type {
	ListBoxItemProps as AriaListBoxItemProps,
	ListBoxProps as AriaListBoxProps,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import {
	ListBox as AriaListBox,
	ListBoxItem as AriaListBoxItem,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/ListBox.module.css';

const box = cva(styles.box);
const item = cva(styles.item);

interface ListBoxProps<T> extends AriaListBoxProps<T> {
	ref?: RefObject<HTMLDivElement | null>;
}
interface ListBoxItemProps<T> extends AriaListBoxItemProps<T> {
	ref?: RefObject<T | null>;
}

/**
 * A listbox displays a list of options and allows a user to select one or more of them.
 *
 * https://react-spectrum.adobe.com/react-aria/ListBox.html
 */
const ListBox = <T extends object>({ ref, ...props }: ListBoxProps<T>) => {
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
 * A ListBoxItem represents an individual option in a ListBox.
 *
 * https://react-spectrum.adobe.com/react-aria/ListBox.html
 */
const ListBoxItem = <T extends object>({ ref, ...props }: ListBoxItemProps<T>) => {
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

export { ListBox, ListBoxItem };
export type { ListBoxProps, ListBoxItemProps };
