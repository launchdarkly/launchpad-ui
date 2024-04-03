import type { ForwardedRef } from 'react';
import type { ComboBoxProps } from 'react-aria-components';
import type { IconButtonProps } from './IconButton';
import type { forwardRefType } from './utils';

import { cva } from 'class-variance-authority';
import { forwardRef, useContext } from 'react';
import {
	ComboBox as AriaComboBox,
	ComboBoxStateContext,
	composeRenderProps,
} from 'react-aria-components';

import { IconButton } from './IconButton';
import styles from './styles/ComboBox.module.css';

const box = cva(styles.box);

const _ComboBox = <T extends object>(
	props: ComboBoxProps<T>,
	ref: ForwardedRef<HTMLDivElement>,
) => {
	return (
		<AriaComboBox
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				box({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * https://react-spectrum.adobe.com/react-aria/ComboBox.html
 */
const ComboBox = (forwardRef as forwardRefType)(_ComboBox);

const _ComboBoxClearButton = (
	props: Partial<IconButtonProps>,
	ref: ForwardedRef<HTMLButtonElement>,
) => {
	const state = useContext(ComboBoxStateContext);
	return (
		<IconButton
			aria-label="Clear"
			icon="cancel-circle-outline"
			size="small"
			variant="minimal"
			{...props}
			ref={ref}
			slot={null}
			onPress={() => state?.setSelectedKey(null)}
		/>
	);
};

const ComboBoxClearButton = forwardRef(_ComboBoxClearButton);

export { ComboBox, ComboBoxClearButton };
export type { ComboBoxProps };
