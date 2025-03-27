import type { Ref } from 'react';
import type {
	ListBoxItemProps as AriaListBoxItemProps,
	ListBoxProps as AriaListBoxProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import {
	ListBox as AriaListBox,
	ListBoxItem as AriaListBoxItem,
	composeRenderProps,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { CheckboxInner } from './Checkbox';
import { checkbox } from './Checkbox';
import styles from './styles/ListBox.module.css';
const box = cva(styles.box);
const item = cva(styles.item);

interface ListBoxProps<T> extends AriaListBoxProps<T> {
	ref?: Ref<HTMLDivElement>;
}
interface ListBoxItemProps<T> extends AriaListBoxItemProps<T> {
	ref?: Ref<T>;
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
			{composeRenderProps(props.children, (children, { selectionMode, isDisabled, isSelected }) => (
				<>
					{selectionMode === 'multiple' && (
						<div
							className={checkbox()}
							data-selected={isSelected || undefined}
							data-disabled={isDisabled || undefined}
						>
							<CheckboxInner isSelected={isSelected} />
						</div>
					)}
					<span className={styles.content}>{children}</span>
					{selectionMode === 'single' && isSelected && <Icon name="check-circle" size="small" />}
				</>
			))}
		</AriaListBoxItem>
	);
};

export { ListBox, ListBoxItem };
export type { ListBoxProps, ListBoxItemProps };
