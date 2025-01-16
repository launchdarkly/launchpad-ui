import type { Ref } from 'react';
import type { NumberFieldProps as AriaNumberFieldProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { NumberField as AriaNumberField, composeRenderProps } from 'react-aria-components';

import styles from './styles/NumberField.module.css';

const number = cva(styles.number);

interface NumberFieldProps extends AriaNumberFieldProps {
	ref?: Ref<HTMLDivElement>;
}

/**
 * A number field allows a user to enter a number, and increment or decrement the value using stepper buttons.
 *
 * https://react-spectrum.adobe.com/react-aria/NumberField.html
 */
const NumberField = ({ ref, ...props }: NumberFieldProps) => {
	return (
		<AriaNumberField
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				number({ ...renderProps, className }),
			)}
			formatOptions={{
				maximumFractionDigits: 20,
				useGrouping: false,
				...(props.formatOptions ?? {}),
			}}
		/>
	);
};

export { NumberField };
export type { NumberFieldProps };
