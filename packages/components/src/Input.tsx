import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { InputProps as AriaInputProps } from 'react-aria-components/Input';
import type { ContextValue } from 'react-aria-components/slots';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { Input as AriaInput } from 'react-aria-components/Input';

import styles from './styles/Input.module.css';
import { useLPContextProps } from './utils';

const inputStyles = cva(styles.base, {
	variants: {
		variant: {
			default: styles._default,
			minimal: styles.minimal,
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

interface InputVariants extends VariantProps<typeof inputStyles> {}
interface InputProps extends AriaInputProps, InputVariants {
	ref?: Ref<HTMLInputElement>;
}

const InputContext = createContext<ContextValue<InputProps, HTMLInputElement>>(null);

/**
 * An input allows a user to input text.
 *
 * https://react-spectrum.adobe.com/react-aria/TextField.html
 */
const Input = ({ ref, ...props }: InputProps) => {
	[props, ref] = useLPContextProps(props, ref, InputContext);
	const { variant = 'default' } = props;

	return (
		<AriaInput
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				inputStyles({ ...renderProps, variant, className }),
			)}
		/>
	);
};

export { Input, InputContext, inputStyles };
export type { InputProps, InputVariants };
