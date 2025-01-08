import type { VariantProps } from 'class-variance-authority';
import type { RefObject } from 'react';
import type { InputProps as AriaInputProps } from 'react-aria-components';

import { cva } from 'class-variance-authority';
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
interface InputProps extends AriaInputProps, InputVariants {
	ref?: RefObject<HTMLInputElement | null>;
}

/**
 * An input allows a user to input text.
 *
 * https://react-spectrum.adobe.com/react-aria/TextField.html
 */
const Input = ({ variant = 'default', ref, ...props }: InputProps) => {
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

export { Input, input };
export type { InputProps, InputVariants };
