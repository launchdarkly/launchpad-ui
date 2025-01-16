import type { Ref } from 'react';
import type {
	SelectProps as AriaSelectProps,
	SelectValueProps as AriaSelectValueProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import {
	Select as AriaSelect,
	SelectValue as AriaSelectValue,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Select.module.css';

const select = cva(styles.select);
const value = cva(styles.value);

interface SelectProps<T extends object> extends AriaSelectProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface SelectValueProps<T extends object> extends AriaSelectValueProps<T> {
	ref?: Ref<HTMLSpanElement>;
}

/**
 * A select displays a collapsible list of options and allows a user to select one of them.
 *
 * https://react-spectrum.adobe.com/react-aria/Select.html
 */
const Select = <T extends object>({ ref, ...props }: SelectProps<T>) => {
	return (
		<AriaSelect
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				select({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * SelectValue renders the current value of a Select, or a placeholder if no value is selected. It is usually placed within the button element.
 *
 * https://react-spectrum.adobe.com/react-aria/Select.html
 */
const SelectValue = <T extends object>({ ref, ...props }: SelectValueProps<T>) => {
	return (
		<AriaSelectValue
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				value({ ...renderProps, className }),
			)}
		/>
	);
};

export { Select, SelectValue };
export type { SelectProps, SelectValueProps };
