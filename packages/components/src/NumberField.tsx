import type { Ref } from 'react';
import type { NumberFieldProps as AriaNumberFieldProps } from 'react-aria-components/NumberField';
import type { ContextValue } from 'react-aria-components/slots';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { NumberField as AriaNumberField } from 'react-aria-components/NumberField';

import { type FieldHelperProps, renderFieldHelpers } from './fieldHelpers';
import styles from './styles/NumberField.module.css';
import { useLPContextProps } from './utils';

const numberFieldStyles = cva(styles.number);

interface NumberFieldProps extends AriaNumberFieldProps, FieldHelperProps {
	ref?: Ref<HTMLDivElement>;
}

const NumberFieldContext = createContext<ContextValue<NumberFieldProps, HTMLDivElement>>(null);

/**
 * A number field allows a user to enter a number, and increment or decrement the value using stepper buttons.
 *
 * https://react-spectrum.adobe.com/react-aria/NumberField.html
 */
const NumberField = ({ ref, description, errorMessage, ...props }: NumberFieldProps) => {
	[props, ref] = useLPContextProps(props, ref, NumberFieldContext);
	const {
		formatOptions = {
			maximumFractionDigits: 20,
			useGrouping: false,
		},
	} = props;

	return (
		<AriaNumberField
			formatOptions={formatOptions}
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				numberFieldStyles({ ...renderProps, className }),
			)}
		>
			{composeRenderProps(props.children, (children) =>
				renderFieldHelpers(children, { description, errorMessage }),
			)}
		</AriaNumberField>
	);
};

export { NumberField, NumberFieldContext, numberFieldStyles };
export type { NumberFieldProps };
