import type { Ref } from 'react';
import type {
	ListBoxItemProps as AriaListBoxItemProps,
	ListBoxProps as AriaListBoxProps,
	ContextValue,
} from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import {
	ListBox as AriaListBox,
	ListBoxItem as AriaListBoxItem,
	composeRenderProps,
} from 'react-aria-components';

import { CheckboxIcon, checkboxStyles } from './Checkbox';
import styles from './styles/ListBox.module.css';
import { useLPContextProps } from './utils';

const listBoxStyles = cva(styles.box);
const listBoxItemStyles = cva(styles.item);

interface ListBoxProps<T> extends AriaListBoxProps<T> {
	ref?: Ref<HTMLDivElement>;
}
interface ListBoxItemProps<T> extends AriaListBoxItemProps<T> {
	ref?: Ref<T>;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const ListBoxContext = createContext<ContextValue<ListBoxProps<any>, HTMLDivElement>>(null);

/**
 * A listbox displays a list of options and allows a user to select one or more of them.
 *
 * https://react-spectrum.adobe.com/react-aria/ListBox.html
 */
const ListBox = <T extends object>({ ref, ...props }: ListBoxProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, ListBoxContext);
	return (
		<AriaListBox
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				listBoxStyles({ ...renderProps, className }),
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
				listBoxItemStyles({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { selectionMode, isDisabled, isSelected }) => (
				<>
					{selectionMode === 'multiple' && (
						<div
							className={checkboxStyles()}
							data-selected={isSelected || undefined}
							data-disabled={isDisabled || undefined}
						>
							<CheckboxIcon isSelected={isSelected} />
						</div>
					)}
					<span className={styles.content}>{children}</span>
					{selectionMode === 'single' && isSelected && <Icon name="check-circle" size="small" />}
				</>
			))}
		</AriaListBoxItem>
	);
};

export { ListBox, ListBoxContext, ListBoxItem, listBoxItemStyles, listBoxStyles };
export type { ListBoxProps, ListBoxItemProps };
