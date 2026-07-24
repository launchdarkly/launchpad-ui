import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { InputProps as AriaInputProps } from 'react-aria-components/Input';
import type { ContextValue } from 'react-aria-components/slots';

import { cva } from 'class-variance-authority';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import { Input as AriaInput } from 'react-aria-components/Input';

import styles from './styles/field.module.css';
import { useLPContextProps } from './utils';

const inputStyles = cva(styles.base, {
	variants: {
		size: {
			small: styles.small,
			medium: null,
		},
		variant: {
			default: styles._default,
			minimal: styles.minimal,
		},
	},
	defaultVariants: {
		size: 'medium',
		variant: 'default',
	},
});

interface InputVariants extends VariantProps<typeof inputStyles> {}
// `size` is omitted from the underlying React Aria props (the native numeric
// `size` HTML attribute) so it can be redefined as the design-system size scale.
interface InputProps extends Omit<AriaInputProps, 'size'>, InputVariants {
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
	// Pull the style-only variants out so they aren't forwarded to the DOM
	// `<input>` (React Aria's Input spreads unknown props through unfiltered).
	const { size = 'medium', variant = 'default', ...rest } = props;

	return (
		<AriaInput
			{...rest}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				inputStyles({ ...renderProps, size, variant, className }),
			)}
		/>
	);
};

export { Input, InputContext, inputStyles };
export type { InputProps, InputVariants };
