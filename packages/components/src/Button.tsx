import type { Ref } from 'react';
import { createContext, useContext } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components/Button';
import { Button as AriaButton } from 'react-aria-components/Button';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type { ContextValue } from 'react-aria-components/slots';
import { Provider } from 'react-aria-components/slots';
import { TextContext } from 'react-aria-components/Text';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { PerceivableContext } from './Perceivable';
import { ProgressBar } from './ProgressBar';
import { Text } from './Text';
import { useLPContextProps } from './utils';

import styles from './styles/Button.module.css';

const buttonStyles = cva(styles.base, {
	variants: {
		size: {
			small: styles.small,
			medium: styles.medium,
			large: styles.large,
		},
		variant: {
			default: styles.default,
			primary: styles.primary,
			destructive: styles.destructive,
			minimal: styles.minimal,
			picker: styles.picker,
		},
	},
	defaultVariants: {
		size: 'medium',
		variant: 'default',
	},
});

interface ButtonVariants extends VariantProps<typeof buttonStyles> {}
interface ButtonProps extends AriaButtonProps, ButtonVariants {
	ref?: Ref<HTMLButtonElement>;
}
interface ButtonContextValue extends ButtonProps {
	isPressed?: boolean;
}

const ButtonContext = createContext<ContextValue<ButtonContextValue, HTMLButtonElement>>(null);

/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 *
 * https://react-spectrum.adobe.com/react-aria/Button.html
 */
const Button = ({ ref, ...props }: ButtonProps) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, ButtonContext);
	const perceivableProps = useContext(PerceivableContext);
	const { size = 'medium', variant = 'default' } = mergedProps;

	return (
		<AriaButton
			{...mergedProps}
			{...perceivableProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				buttonStyles({ ...renderProps, size, variant, className }),
			)}
		>
			{composeRenderProps(mergedProps.children, (children, { isPending }) => (
				<Provider values={[[TextContext, { className: isPending ? styles.pending : undefined }]]}>
					{isPending && <ProgressBar isIndeterminate aria-label="loading" className={styles.progress} />}
					{typeof children === 'string' ? (
						<Text size={size as 'small' | 'medium' | 'large'}>{children}</Text>
					) : (
						children
					)}
				</Provider>
			))}
		</AriaButton>
	);
};

export { Button, ButtonContext, buttonStyles };
export type { ButtonProps, ButtonVariants };
