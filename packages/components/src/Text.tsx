import type { Ref } from 'react';
import type { TextProps as AriaTextProps, ContextValue } from 'react-aria-components';

import { cva, cx } from 'class-variance-authority';
import { createContext } from 'react';
import { Text as AriaText } from 'react-aria-components';

import styles from './styles/Text.module.css';
import { useLPContextProps } from './utils';

/** variant names are based on Figma's naming convention */
export type TextVariant =
	| 'body1Regular'
	| 'body1Semibold'
	| 'body1ExtraBold'
	| 'body2Regular'
	| 'body2Semibold'
	| 'body2ExtraBold'
	| 'small1Regular'
	| 'small1Medium'
	| 'small1Semibold';

const textStyles = cva(styles.text, {
	variants: {
		variant: {
			body1Regular: styles.body1Regular,
			body1Semibold: styles.body1Semibold,
			body1ExtraBold: styles.body1ExtraBold,
			body2Regular: styles.body2Regular,
			body2Semibold: styles.body2Semibold,
			body2ExtraBold: styles.body2ExtraBold,
			small1Regular: styles.small1Regular,
			small1Medium: styles.small1Medium,
			small1Semibold: styles.small1Semibold,
		},
	},
});

interface TextProps extends Omit<AriaTextProps, 'className' | 'elementType'> {
	ref?: Ref<HTMLElement>;
	/** Typography variant following LaunchPad design system Typography tokens. */
	variant?: TextVariant;
	/** Maximum number of lines to display. Overflowing text will be truncated with an ellipsis. */
	maxLines?: number;
	/** Optional HTML element type such as `span`, `label`, `small`, `code`, `p`, etc. Defaults to the appropriate semantic element based on the variant. */
	elementType?: AriaTextProps['elementType'];
	/** Optional CSS class name */
	className?: AriaTextProps['className'];
}

const TextContext = createContext<ContextValue<TextProps, HTMLElement>>(null);

const getDefaultElementType = (variant: TextVariant): string => {
	if (variant.startsWith('small')) {
		return 'small';
	}
	return 'p';
};

/**
 * A generic Text component for body text.
 *
 * For headings, use [Heading](/docs/components-content-heading--docs)
 *
 * Built on top of [React Aria `Text` component](https://react-spectrum.adobe.com/react-spectrum/Text.html#text).
 */
const Text = ({ ref, variant, maxLines, elementType, className, style, ...props }: TextProps) => {
	[props, ref] = useLPContextProps(props, ref, TextContext);

	return (
		<AriaText
			{...props}
			ref={ref}
			elementType={elementType || (variant ? getDefaultElementType(variant) : undefined)}
			className={cx(textStyles({ variant }), maxLines && styles.truncate, className)}
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
