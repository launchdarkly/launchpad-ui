import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type {
	SelectProps as AriaSelectProps,
	SelectValueProps as AriaSelectValueProps,
} from 'react-aria-components/Select';
import { Select as AriaSelect, SelectValue as AriaSelectValue } from 'react-aria-components/Select';
import type { ContextValue } from 'react-aria-components/slots';
import { Provider } from 'react-aria-components/slots';
import { cva, cx } from 'class-variance-authority';

import { ButtonContext } from './Button';
import { useLPContextProps } from './utils';

import baseStyles from './styles/base.module.css';
import styles from './styles/Select.module.css';

const selectStyles = cva(styles.select);
const selectValueStyles = cva(styles.value);

interface SelectProps<T extends object> extends AriaSelectProps<T> {
	ref?: Ref<HTMLDivElement>;
}

interface SelectValueProps<T extends object> extends AriaSelectValueProps<T> {
	ref?: Ref<HTMLSpanElement>;
}

// react-aria-components types this identically: `SelectContext: React.Context<ContextValue<SelectProps<any, SelectionMode>, HTMLDivElement>>`
// (react-aria-components/dist/types/src/Select.d.ts) — a context can't carry the open generic `T`, so RAC itself erases it to `any` here.
// oxlint-disable-next-line typescript/no-explicit-any -- mirrors react-aria-components' own SelectContext declaration (see comment above)
const SelectContext = createContext<ContextValue<SelectProps<any>, HTMLDivElement>>(null);
const SelectValueContext =
	// react-aria-components types this identically: `SelectValueContext: React.Context<ContextValue<SelectValueProps<any>, HTMLSpanElement>>`
	// (react-aria-components/dist/types/src/Select.d.ts) — a context can't carry the open generic `T`, so RAC itself erases it to `any` here.
	// oxlint-disable-next-line typescript/no-explicit-any -- mirrors react-aria-components' own SelectValueContext declaration (see comment above)
	createContext<ContextValue<SelectValueProps<any>, HTMLSpanElement>>(null);

/**
 * A select displays a collapsible list of options and allows a user to select one of them.
 *
 * https://react-spectrum.adobe.com/react-aria/Select.html
 */
const Select = <T extends object>({ ref, ...props }: SelectProps<T>) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, SelectContext);
	return (
		<AriaSelect
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				selectStyles({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(mergedProps.children, (children, { isInvalid }) => (
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
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, SelectValueContext);
	return (
		<AriaSelectValue
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				selectValueStyles({ ...renderProps, className }),
			)}
		/>
	);
};

export { Select, SelectContext, SelectValue, SelectValueContext, selectStyles, selectValueStyles };
export type { SelectProps, SelectValueProps };
