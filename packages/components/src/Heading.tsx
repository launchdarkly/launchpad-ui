import type { Ref } from 'react';
import type { HeadingProps as AriaHeadingProps, ContextValue } from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import { Heading as AriaHeading } from 'react-aria-components';

import styles from './styles/Heading.module.css';
import { useLPContextProps } from './utils';

/** variant names are based on Figma's naming convention */
export type HeadingVariant =
	| 'display1'
	| 'heading1Medium'
	| 'heading1Semibold'
	| 'heading1ExtraBold'
	| 'heading2Medium'
	| 'heading2Semibold'
	| 'heading2ExtraBold'
	| 'heading3Regular'
	| 'heading3Semibold'
	| 'heading3ExtraBold';

const headingStyles = cva(styles.heading, {
	variants: {
		variant: {
			display1: styles.display1,
			heading1Medium: styles.heading1Medium,
			heading1Semibold: styles.heading1Semibold,
			heading1ExtraBold: styles.heading1ExtraBold,
			heading2Medium: styles.heading2Medium,
			heading2Semibold: styles.heading2Semibold,
			heading2ExtraBold: styles.heading2ExtraBold,
			heading3Regular: styles.heading3Regular,
			heading3Semibold: styles.heading3Semibold,
			heading3ExtraBold: styles.heading3ExtraBold,
		},
		align: {
			left: styles.left,
			center: styles.center,
			right: styles.right,
		},
	},
	defaultVariants: {
		variant: 'heading1Medium',
		align: 'left',
	},
});

interface HeadingProps extends Omit<AriaHeadingProps, 'className' | 'level'> {
	ref?: Ref<HTMLHeadingElement>;
	/** Typography variant following LaunchPad design system typography tokens. */
	variant?: HeadingVariant;
	/** Text alignment */
	align?: 'left' | 'center' | 'right';
	/** Maximum number of lines to display. Overflowing text will be truncated with an ellipsis. */
	maxLines?: number;
	/** Optional CSS class name */
	className?: AriaHeadingProps['className'];
	/** Optional HTML heading level. Defaults to variant level. */
	level?: AriaHeadingProps['level'];
}

const HeadingContext = createContext<ContextValue<HeadingProps, HTMLHeadingElement>>(null);

const getDefaultLevel = (variant: HeadingVariant): AriaHeadingProps['level'] => {
	switch (variant) {
		case 'display1':
		case 'heading1Medium':
		case 'heading1Semibold':
		case 'heading1ExtraBold':
			return 1;
		case 'heading2Medium':
		case 'heading2Semibold':
		case 'heading2ExtraBold':
			return 2;
		default:
			return 3;
	}
};

/**
 * A generic Heading component for headings and display text.
 *
 * For body text, use `Text`
 *
 * Built on top of [React Aria `Heading` component](https://react-spectrum.adobe.com/react-spectrum/Heading.html#heading).
 */
const Heading = ({
	ref,
	variant = 'heading3Regular',
	align = 'left',
	maxLines,
	className,
	style,
	level,
	...props
}: HeadingProps) => {
	[props, ref] = useLPContextProps(props, ref, HeadingContext);

	return (
		<AriaHeading
			{...props}
			ref={ref}
			level={level || getDefaultLevel(variant)}
			className={cx(headingStyles({ variant, align }), maxLines && styles.truncate, className)}
			style={{
				...style,
				...(maxLines && {
					WebkitLineClamp: maxLines,
				}),
			}}
		>
			{props.children}
		</AriaHeading>
	);
};

export { Heading, HeadingContext, headingStyles };
export type { HeadingProps };
