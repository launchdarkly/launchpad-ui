import type { HTMLAttributes, Ref } from 'react';
import { HeadingContext } from 'react-aria-components/Heading';
import { Provider } from 'react-aria-components/slots';
import { TextContext } from 'react-aria-components/Text';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { BadgeIconContext } from '@launchpad-ui/icons';

import { ButtonContext } from './Button';
import { ButtonGroupContext } from './ButtonGroup';

import styles from './styles/EmptyState.module.css';

const emptyStateStyles = cva(styles.base, {
	variants: {
		size: {
			large: styles.large,
			medium: styles.medium,
			small: styles.small,
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
 * Use `large` for full-page and main-content empty states, `medium` inside cards, panels, and
 * table bodies, and `small` in dense containers where `medium` still crowds the layout.
 *
 * https://react-spectrum.adobe.com/v3/IllustratedMessage.html
 */
const EmptyState = ({ className, children, size = 'large', hasBorder = false, ref, ...props }: EmptyStateProps) => {
	const scale = size ?? 'large';

	return (
		<div ref={ref} {...props} className={emptyStateStyles({ size, hasBorder, className })}>
			<Provider
				values={[
					[HeadingContext, { className: styles.heading }],
					[TextContext, { className: styles.description }],
					[BadgeIconContext, { size: scale }],
					[ButtonContext, { size: scale }],
					[ButtonGroupContext, { className: styles.actions }],
				]}
			>
				{children}
			</Provider>
		</div>
	);
};

export { EmptyState, emptyStateStyles };
export type { EmptyStateProps };
