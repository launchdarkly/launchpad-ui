import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type {
	ListBoxItemProps as AriaListBoxItemProps,
	ListBoxProps as AriaListBoxProps,
} from 'react-aria-components/ListBox';
import { ListBox as AriaListBox, ListBoxItem as AriaListBoxItem } from 'react-aria-components/ListBox';
import type { ContextValue } from 'react-aria-components/slots';
import { cva } from 'class-variance-authority';

import { Icon } from '@launchpad-ui/icons';

import { CheckboxIcon, checkboxStyles } from './Checkbox';
import { useLPContextProps } from './utils';

import styles from './styles/ListBox.module.css';

const listBoxStyles = cva(styles.box);
const listBoxItemStyles = cva(styles.item);

interface ListBoxProps<T> extends AriaListBoxProps<T> {
	ref?: Ref<HTMLDivElement>;
}
interface ListBoxItemProps<T> extends AriaListBoxItemProps<T> {
	ref?: Ref<HTMLDivElement>;
}

// react-aria-components types this identically: `ListBoxContext: React.Context<ContextValue<ListBoxProps<any>, HTMLDivElement>>`
// (react-aria-components/dist/types/src/ListBox.d.ts) — a context can't carry the open generic `T`, so RAC itself erases it to `any` here.
// oxlint-disable-next-line typescript/no-explicit-any -- mirrors react-aria-components' own ListBoxContext declaration (see comment above)
const ListBoxContext = createContext<ContextValue<ListBoxProps<any>, HTMLDivElement>>(null);

/**
 * A listbox displays a list of options and allows a user to select one or more of them.
 *
 * https://react-spectrum.adobe.com/react-aria/ListBox.html
 */
const ListBox = <T extends object>({ ref, ...props }: ListBoxProps<T>) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, ListBoxContext);
	return (
		<AriaListBox
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
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
	const textValue = props.textValue || (typeof props.children === 'string' ? props.children : undefined);
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
