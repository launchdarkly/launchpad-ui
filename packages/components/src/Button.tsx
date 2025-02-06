import type { VariantProps } from 'class-variance-authority';
import type { Ref } from 'react';
import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

import { mergeProps, mergeRefs } from '@react-aria/utils';
import { cva } from 'class-variance-authority';
import { createContext, useContext, useMemo } from 'react';
import {
	Button as AriaButton,
	Provider,
	TextContext,
	composeRenderProps,
} from 'react-aria-components';

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

const ButtonContext = createContext<ButtonProps | null>(null);

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
	const ctx = useContext(ButtonContext);
	const perceivableContext = useContext(PerceivableContext);

	const buttonRef = useMemo(() => mergeRefs(ref, ctx?.ref), [ref, ctx?.ref]);
	const buttonProps = mergeProps(ctx, props);

	return (
		<AriaButton
			{...buttonProps}
			{...perceivableContext}
			ref={buttonRef}
			className={composeRenderProps(buttonProps.className, (className, renderProps) =>
				button({ ...renderProps, size, variant, className }),
			)}
		>
			{composeRenderProps(buttonProps.children, (children, { isPending }) => (
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

export { Button, ButtonContext, button };
export type { ButtonProps, ButtonVariants };
