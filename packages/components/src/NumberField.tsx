import type { ForwardedRef } from 'react';
import type { NumberFieldProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { NumberField as AriaNumberField, composeRenderProps } from 'react-aria-components';

import styles from './styles/NumberField.module.css';

const number = cva(styles.number);

const _NumberField = (props: NumberFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
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

/**
 * A number field allows a user to enter a number, and increment or decrement the value using stepper buttons.
 *
 * https://react-spectrum.adobe.com/react-aria/NumberField.html
 */
const NumberField = forwardRef(_NumberField);

export { NumberField };
export type { NumberFieldProps };
