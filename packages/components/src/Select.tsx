import type { Ref } from 'react';
import type {
	SelectProps as AriaSelectProps,
	SelectValueProps as AriaSelectValueProps,
	ContextValue,
} from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import {
	Select as AriaSelect,
	SelectValue as AriaSelectValue,
	Provider,
	composeRenderProps,
} from 'react-aria-components';

import { ButtonContext } from './Button';
import styles from './styles/Select.module.css';
import baseStyles from './styles/base.module.css';
import { useLPContextProps } from './utils';

const select = cva(styles.select);
const value = cva(styles.value);

interface SelectProps<T extends object> extends AriaSelectProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface SelectValueProps<T extends object> extends AriaSelectValueProps<T> {
	ref?: Ref<HTMLSpanElement>;
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const SelectContext = createContext<ContextValue<SelectProps<any>, HTMLDivElement>>(null);
const SelectValueContext =
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	createContext<ContextValue<SelectValueProps<any>, HTMLSpanElement>>(null);

/**
 * A select displays a collapsible list of options and allows a user to select one of them.
 *
 * https://react-spectrum.adobe.com/react-aria/Select.html
 */
const Select = <T extends object>({ ref, ...props }: SelectProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, SelectContext);
	return (
		<AriaSelect
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				select({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isInvalid }) => (
				<Provider
					values={[
						[
							ButtonContext,
							{
								className: cx(isInvalid && baseStyles.invalid),
								variant: 'picker',
								size: null,
							},
						],
					]}
				>
					{children}
				</Provider>
			))}
		</AriaSelect>
	);
};

/**
 * SelectValue renders the current value of a Select, or a placeholder if no value is selected. It is usually placed within the button element.
 *
 * https://react-spectrum.adobe.com/react-aria/Select.html
 */
const SelectValue = <T extends object>({ ref, ...props }: SelectValueProps<T>) => {
	[props, ref] = useLPContextProps(props, ref, SelectValueContext);
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

export { Select, SelectContext, SelectValue, SelectValueContext };
export type { SelectProps, SelectValueProps };
