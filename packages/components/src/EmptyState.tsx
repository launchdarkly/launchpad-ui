import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes, Ref } from 'react';

import { BadgeIconContext } from '@launchpad-ui/icons';
import { cva } from 'class-variance-authority';
import { HeadingContext } from 'react-aria-components/Heading';
import { Provider } from 'react-aria-components/slots';
import { TextContext } from 'react-aria-components/Text';

import { ButtonContext } from './Button';
import { ButtonGroupContext } from './ButtonGroup';
import styles from './styles/EmptyState.module.css';

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
 * Follows the React Spectrum IllustratedMessage composition pattern: BadgeIcon (illustration),
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
			<BadgeIconContext.Provider value={{ className: styles.illustration }}>
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
			</BadgeIconContext.Provider>
		</div>
	);
};

export { EmptyState, emptyStateStyles };
export type { EmptyStateProps };
