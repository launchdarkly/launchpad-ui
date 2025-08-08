import type { Ref } from 'react';
import type { HeadingProps as AriaHeadingProps, ContextValue } from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import { Heading as AriaHeading } from 'react-aria-components';

import styles from './styles/Heading.module.css';
import { useLPContextProps } from './utils';

const headingStyles = cva(styles.heading, {
	variants: {
		size: {
			small: styles.small,
			medium: styles.medium,
			large: styles.large,
		},
		bold: {
			true: styles.bold,
		},
	},
	defaultVariants: {
		size: 'medium',
		bold: true,
	},
});

interface HeadingProps extends Omit<AriaHeadingProps, 'className' | 'level'> {
	ref?: Ref<HTMLHeadingElement>;
	/** Heading size */
	size?: 'small' | 'medium' | 'large';
	/** Whether to use bold font weight */
	bold?: boolean;
	/** Maximum number of lines to display. Overflowing text will be truncated with an ellipsis. */
	maxLines?: number;
	/** Optional CSS class name */
	className?: AriaHeadingProps['className'];
	/** Optional HTML heading level. Defaults based on size (large=1, medium=2, small=3). */
	level?: AriaHeadingProps['level'];
}

const HeadingContext = createContext<ContextValue<HeadingProps, HTMLHeadingElement>>(null);

const getDefaultLevel = (size: 'small' | 'medium' | 'large'): AriaHeadingProps['level'] => {
	switch (size) {
		case 'large':
			return 1;
		case 'medium':
			return 2;
		case 'small':
			return 3;
	}
};

/**
 * A generic Heading component for headings.
 *
 * For other text, use `Text`, `Label`, or `Code`.
 *
 * Built on top of [React Aria `Heading` component](https://react-spectrum.adobe.com/react-spectrum/Heading.html#heading).
 */
const Heading = ({
	ref,
	size = 'medium',
	bold = true,
	maxLines,
	className,
	style,
	level,
	...props
}: HeadingProps) => {
	[props, ref] = useLPContextProps(props, ref, HeadingContext, 'Heading');

	return (
		<AriaHeading
			{...props}
			ref={ref}
			level={level || getDefaultLevel(size)}
			className={cx(headingStyles({ size, bold }), maxLines && styles.truncate, className)}
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
