import type { Ref } from 'react';
import type { TextProps as AriaTextProps, ContextValue } from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import { Text as AriaText } from 'react-aria-components';

import styles from './styles/Text.module.css';
import { useLPContextProps } from './utils';

const textStyles = cva(styles.text, {
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
		bold: false,
	},
});

interface TextProps extends Omit<AriaTextProps, 'className' | 'elementType'> {
	ref?: Ref<HTMLElement>;
	/** Text size */
	size?: 'small' | 'medium' | 'large';
	/** Whether to use bold font weight */
	bold?: boolean;
	/** Maximum number of lines to display. Overflowing text will be truncated with an ellipsis. */
	maxLines?: number;
	/** Optional HTML element type such as `span`, `label`, `small`, `code`, `p`, etc. Defaults to `p` for medium/large, `small` for small size. */
	elementType?: AriaTextProps['elementType'];
	/** Optional CSS class name */
	className?: AriaTextProps['className'];
}

const TextContext = createContext<ContextValue<TextProps, HTMLElement>>(null);

const getDefaultElementType = (size: 'small' | 'medium' | 'large'): string => {
	if (size === 'small') {
		return 'small';
	}
	return 'span';
};

/**
 * A generic Text component for body text.
 *
 * For headings, use [Heading](/docs/components-content-heading--docs)
 *
 * Built on top of [React Aria `Text` component](https://react-spectrum.adobe.com/react-spectrum/Text.html#text).
 */
const Text = ({
	ref,
	size = 'medium',
	bold = false,
	maxLines,
	elementType,
	className,
	style,
	...props
}: TextProps) => {
	[props, ref] = useLPContextProps(props, ref, TextContext);

	return (
		<AriaText
			{...props}
			ref={ref}
			elementType={elementType || getDefaultElementType(size)}
			className={cx(textStyles({ size, bold }), maxLines && styles.truncate, className)}
			style={{
				...style,
				...(maxLines && {
					WebkitLineClamp: maxLines,
				}),
			}}
		>
			{props.children}
		</AriaText>
	);
};

export { Text, TextContext, textStyles };
export type { TextProps };
