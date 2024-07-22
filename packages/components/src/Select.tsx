import type { forwardRefType } from '@react-types/shared';
import type { ForwardedRef } from 'react';
import type { SelectProps, SelectValueProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import {
	Select as AriaSelect,
	SelectValue as AriaSelectValue,
	composeRenderProps,
} from 'react-aria-components';

import styles from './styles/Select.module.css';

const select = cva(styles.select);
const value = cva(styles.value);

const _Select = <T extends object>(props: SelectProps<T>, ref: ForwardedRef<HTMLDivElement>) => {
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
 * A select displays a collapsible list of options and allows a user to select one of them.
 *
 * https://react-spectrum.adobe.com/react-aria/Select.html
 */
const Select = (forwardRef as forwardRefType)(_Select);

const _SelectValue = <T extends object>(
	props: SelectValueProps<T>,
	ref: ForwardedRef<HTMLSpanElement>,
) => {
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

/**
 * SelectValue renders the current value of a Select, or a placeholder if no value is selected. It is usually placed within the button element.
 *
 * https://react-spectrum.adobe.com/react-aria/Select.html
 */
const SelectValue = (forwardRef as forwardRefType)(_SelectValue);

export { Select, SelectValue };
export type { SelectProps, SelectValueProps };
