import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps, HTMLAttributes, Ref } from 'react';

import { cva } from 'class-variance-authority';
import { HeadingContext } from 'react-aria-components/Heading';
import { Provider } from 'react-aria-components/slots';
import { TextContext } from 'react-aria-components/Text';

import { ButtonContext } from './Button';
import { ButtonGroupContext } from './ButtonGroup';
import styles from './styles/EmptyState.module.css';

interface EmptyStateIllustrationProps extends ComponentProps<'div'> {
	ref?: Ref<HTMLDivElement>;
}

/**
 * EmptyStateIllustration wraps the illustration slot within an EmptyState.
 */
const EmptyStateIllustration = ({ className, ref, ...props }: EmptyStateIllustrationProps) => {
	return (
		<div ref={ref} className={`${styles.illustration} ${className ?? ''}`.trim()} {...props} />
	);
};

const emptyStateStyles = cva(styles.base, {
	variants: {
		size: {
			large: styles.large,
		},
		hasBorder: {
			true: styles.bordered,
			false: null,
		},
	},
	defaultVariants: {
		size: 'large',
		hasBorder: false,
	},
});

interface EmptyStateVariants extends VariantProps<typeof emptyStateStyles> {}

interface EmptyStateProps extends HTMLAttributes<HTMLDivElement>, EmptyStateVariants {
	ref?: Ref<HTMLDivElement>;
}

/**
 * An empty state displays an illustration and a message, usually when there is no content to show.
 *
 * Follows the React Spectrum IllustratedMessage composition pattern: EmptyStateIllustration,
 * Heading, Text, and optional Button (action).
 *
 * https://react-spectrum.adobe.com/v3/IllustratedMessage.html
 */
const EmptyState = ({
	className,
	children,
	size = 'large',
	hasBorder = false,
	ref,
	...props
}: EmptyStateProps) => {
	return (
		<div ref={ref} {...props} className={emptyStateStyles({ size, hasBorder, className })}>
			<Provider
				values={[
					[HeadingContext, { className: styles.heading }],
					[TextContext, { className: styles.description }],
					[
						ButtonContext,
						{
							size: size === 'large' ? 'large' : 'medium',
							className: styles.actions,
						},
					],
					[ButtonGroupContext, { className: styles.actions }],
				]}
			>
				{children}
			</Provider>
		</div>
	);
};

export { EmptyState, EmptyStateIllustration, emptyStateStyles };
export type { EmptyStateIllustrationProps, EmptyStateProps };
