import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { ButtonProps as AriaButtonProps, ContextValue } from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { createContext, useContext } from 'react';
import {
	Button as AriaButton,
	Provider,
	TextContext,
	composeRenderProps,
} from 'react-aria-components';

import { PerceivableContext } from './Perceivable';
import { ProgressBar } from './ProgressBar';
import styles from './styles/Button.module.css';
import { useLPContextProps } from './utils';

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
	[props, ref] = useLPContextProps(props, ref, ButtonContext);
	const perceivableProps = useContext(PerceivableContext);
	const { size = 'medium', variant = 'default' } = props;

	return (
		<AriaButton
			{...props}
			{...perceivableProps}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				buttonStyles({ ...renderProps, size, variant, className }),
			)}
		>
			{composeRenderProps(props.children, (children, { isPending }) => (
				<Provider values={[[TextContext, { className: isPending ? styles.pending : undefined }]]}>
					{isPending && (
						<ProgressBar isIndeterminate aria-label="loading" className={styles.progress} />
					)}
					{children}
				</Provider>
			))}
		</AriaButton>
	);
};

export { Button, ButtonContext, buttonStyles };
export type { ButtonProps, ButtonVariants };
