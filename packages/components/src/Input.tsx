import type { VariantProps } from 'class-variance-authority';
import type { ForwardedRef } from 'react';
import type { InputProps as AriaInputProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Input as AriaInput, composeRenderProps } from 'react-aria-components';

import styles from './styles/Input.module.css';

const input = cva(styles.base, {
	variants: {
		variant: {
			default: styles.default,
			minimal: styles.minimal,
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface InputVariants extends VariantProps<typeof input> {}
interface InputProps extends AriaInputProps, InputVariants {}

const _Input = (
	{ variant = 'default', ...props }: InputProps,
	ref: ForwardedRef<HTMLInputElement>,
) => {
	return (
		<AriaInput
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				input({ ...renderProps, variant, className }),
			)}
		/>
	);
};

/**
 * An input allows a user to input text.
 *
 * https://react-spectrum.adobe.com/react-aria/TextField.html
 */
const Input = forwardRef(_Input);

export { Input, input };
export type { InputProps, InputVariants };
