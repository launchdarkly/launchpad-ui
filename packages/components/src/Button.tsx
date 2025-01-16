import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { useContext } from 'react';
import {
	Button as AriaButton,
	Provider,
	SelectContext,
	SelectStateContext,
	TextContext,
	composeRenderProps,
	useSlottedContext,
} from 'react-aria-components';

import { input } from './Input';
import { PerceivableContext } from './Perceivable';
import { ProgressBar } from './ProgressBar';
import styles from './styles/Button.module.css';

const button = cva(styles.base, {
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
		},
	},
	defaultVariants: {
		size: 'medium',
		variant: 'default',
	},
});

interface ButtonVariants extends VariantProps<typeof button> {}
interface ButtonProps extends AriaButtonProps, ButtonVariants {
	ref?: Ref<HTMLButtonElement>;
}

/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 *
 * https://react-spectrum.adobe.com/react-aria/Button.html
 */
const Button = ({ size = 'medium', variant = 'default', ref, ...props }: ButtonProps) => {
	const selectContext = useSlottedContext(SelectContext);
	const state = useContext(SelectStateContext);
	const ctx = useContext(PerceivableContext);

	return (
		<AriaButton
			{...props}
			{...ctx}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				state
					? cx(input(), styles.select, selectContext?.isInvalid && styles.invalid, className)
					: button({ ...renderProps, size, variant, className }),
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

export { Button, button };
export type { ButtonProps, ButtonVariants };
