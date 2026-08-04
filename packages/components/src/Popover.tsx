import type { Ref } from 'react';
import { createContext } from 'react';
import { composeRenderProps } from 'react-aria-components/composeRenderProps';
import type {
	OverlayArrowProps as AriaOverlayArrowProps,
	PopoverProps as AriaPopoverProps,
} from 'react-aria-components/Popover';
import { OverlayArrow as AriaOverlayArrow, Popover as AriaPopover } from 'react-aria-components/Popover';
import type { ContextValue } from 'react-aria-components/slots';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { useLPContextProps } from './utils';

import styles from './styles/Popover.module.css';

interface PopoverProps extends AriaPopoverProps, VariantProps<typeof popoverStyles> {
	ref?: Ref<HTMLElement>;
}
interface OverlayArrowProps extends Omit<AriaOverlayArrowProps, 'children'> {
	ref?: Ref<HTMLDivElement>;
}

const PopoverContext = createContext<ContextValue<PopoverProps, HTMLElement>>(null);

const popoverStyles = cva(styles.popover, {
	variants: {
		width: {
			default: styles.default,
			fit: styles.fit,
			trigger: styles.trigger,
		},
	},
	defaultVariants: {
		width: 'default',
	},
});
const overlayArrowStyles = cva(styles.arrow);

/**
 * A popover is an overlay element positioned relative to a trigger.
 *
 * https://react-spectrum.adobe.com/react-aria/Popover.html
 */
const Popover = ({ ref, ...props }: PopoverProps) => {
	const [mergedProps, mergedRef] = useLPContextProps(props, ref, PopoverContext);
	const { offset = 4, crossOffset = 0, width = 'default' } = mergedProps;

	return (
		<AriaPopover
			offset={offset}
			crossOffset={crossOffset}
			{...mergedProps}
			ref={mergedRef}
			className={composeRenderProps(mergedProps.className, (className, renderProps) =>
				popoverStyles({ ...renderProps, width, className }),
			)}
		/>
	);
};

/**
 * An OverlayArrow renders a custom arrow element relative to an overlay element such as a popover or tooltip such that it aligns with a trigger element.
 *
 * https://react-spectrum.adobe.com/react-aria/Popover.html
 */
const OverlayArrow = ({ ref, ...props }: OverlayArrowProps) => {
	return (
		<AriaOverlayArrow
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				overlayArrowStyles({ ...renderProps, className }),
			)}
		>
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: ignore */}
			<svg width={12} height={12} viewBox="0 0 12 12">
				<path d="M0 0 L6 6 L12 0" />
			</svg>
		</AriaOverlayArrow>
	);
};

export { OverlayArrow, Popover, PopoverContext, overlayArrowStyles, popoverStyles };
export type { OverlayArrowProps, PopoverProps };
