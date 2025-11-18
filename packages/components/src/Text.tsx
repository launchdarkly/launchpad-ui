import type { ReactNode, Ref } from 'react';
import type { TextProps as AriaTextProps, ContextValue } from 'react-aria-components';
import type { TooltipProps } from './Tooltip';

import { cva, cx } from 'class-variance-authority';
import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { useFocus, useFocusVisible, useHover } from 'react-aria';
import { Text as AriaText } from 'react-aria-components';

import { Focusable } from './Focusable';
import styles from './styles/Text.module.css';
import { Tooltip, TooltipTrigger } from './Tooltip';
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
	/** Enable tooltip on text overflow */
	showTooltipOnOverflow?: boolean;
	/** Custom tooltip content. If not provided, uses the text children as tooltip content */
	tooltipContent?: ReactNode;
	/** Tooltip placement */
	tooltipPlacement?: TooltipProps['placement'];
	/** Additional CSS class name for the tooltip */
	tooltipClassName?: string;
}

const TextContext = createContext<ContextValue<TextProps, HTMLElement>>(null);

const getDefaultElementType = (size: 'small' | 'medium' | 'large'): string => {
	if (size === 'small') {
		return 'small';
	}
	return 'span';
};

/**
 * Custom hook to detect text overflow
 */
const useTextOverflow = () => {
	const ref = useRef<HTMLElement>(null);
	const [hasOverflow, setHasOverflow] = useState(false);

	const checkOverflow = useCallback(() => {
		if (!ref.current) return;

		const element = ref.current;
		const isOverflowing =
			element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;

		setHasOverflow(isOverflowing);
	}, []);

	useEffect(() => {
		checkOverflow();

		// Recheck on window resize
		const resizeObserver = new ResizeObserver(checkOverflow);
		if (ref.current) {
			resizeObserver.observe(ref.current);
		}

		return () => resizeObserver.disconnect();
	}, [checkOverflow]);

	return { ref, hasOverflow };
};

/**
 * A generic Text component for body text.
 *
 * For headings, use [Heading](/docs/components-content-heading--docs)
 *
 * Built on top of [React Aria `Text` component](https://react-spectrum.adobe.com/react-spectrum/Text.html#text).
 */
const Text = ({
	ref: externalRef,
	size = 'medium',
	bold = false,
	maxLines,
	elementType,
	className,
	style,
	showTooltipOnOverflow = false,
	tooltipContent,
	tooltipPlacement = 'top',
	tooltipClassName,
	...props
}: TextProps) => {
	[props, externalRef] = useLPContextProps(props, externalRef, TextContext);

	const { ref: overflowRef, hasOverflow } = useTextOverflow();
	const { hoverProps, isHovered } = useHover({});
	const [isFocused, setFocused] = useState(false);
	const { focusProps } = useFocus({
		onFocus: () => setFocused(true),
		onBlur: () => setFocused(false),
	});
	const { isFocusVisible } = useFocusVisible();

	// Merge refs
	const mergedRef = useCallback(
		(element: HTMLElement | null) => {
			overflowRef.current = element;

			if (typeof externalRef === 'function') {
				externalRef(element);
			} else if (externalRef && 'current' in externalRef) {
				externalRef.current = element;
			}
		},
		[externalRef, overflowRef],
	);

	const textElement = (
		<AriaText
			{...props}
			{...(showTooltipOnOverflow ? { ...hoverProps, ...focusProps } : {})}
			ref={mergedRef}
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

	if (!showTooltipOnOverflow) {
		return textElement;
	}

	return (
		<TooltipTrigger
			isDisabled={!hasOverflow}
			isOpen={hasOverflow && (isHovered || (isFocusVisible && isFocused))}
		>
			<Focusable>{textElement}</Focusable>
			<Tooltip placement={tooltipPlacement} className={tooltipClassName}>
				{tooltipContent ?? props.children}
			</Tooltip>
		</TooltipTrigger>
	);
};

export { Text, TextContext, textStyles };
export type { TextProps };
