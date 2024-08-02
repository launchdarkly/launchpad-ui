import type { ForwardedRef } from 'react';
import type {
	OverlayArrowProps as AriaOverlayArrowProps,
	PopoverProps as AriaPopoverProps,
} from 'react-aria-components';

import { cva } from 'class-variance-authority';
import { forwardRef, useContext } from 'react';
import {
	OverlayArrow as AriaOverlayArrow,
	Popover as AriaPopover,
	composeRenderProps,
} from 'react-aria-components';

import { PopoverContext } from './ComboBox';
import styles from './styles/Popover.module.css';

interface PopoverProps extends Omit<AriaPopoverProps, 'offset' | 'crossOffset'> {}
interface OverlayArrowProps extends Omit<AriaOverlayArrowProps, 'children'> {}

const popover = cva(styles.popover);
const arrow = cva(styles.arrow);

const _Popover = (props: PopoverProps, ref: ForwardedRef<HTMLElement>) => {
	const popoverProps = useContext(PopoverContext);

	return (
		<AriaPopover
			{...popoverProps}
			{...props}
			offset={4}
			crossOffset={0}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				popover({ ...renderProps, className }),
			)}
		/>
	);
};

/**
 * A popover is an overlay element positioned relative to a trigger.
 *
 * https://react-spectrum.adobe.com/react-aria/Popover.html
 */
const Popover = forwardRef(_Popover);

const _OverlayArrow = (props: OverlayArrowProps, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<AriaOverlayArrow
			{...props}
			ref={ref}
			className={composeRenderProps(props.className, (className, renderProps) =>
				arrow({ ...renderProps, className }),
			)}
		>
			{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
			<svg width={12} height={12} viewBox="0 0 12 12">
				<path d="M0 0 L6 6 L12 0" />
			</svg>
		</AriaOverlayArrow>
	);
};

/**
 * An OverlayArrow renders a custom arrow element relative to an overlay element such as a popover or tooltip such that it aligns with a trigger element.
 *
 * https://react-spectrum.adobe.com/react-aria/Popover.html
 */
const OverlayArrow = forwardRef(_OverlayArrow);

export { OverlayArrow, Popover };
export type { OverlayArrowProps, PopoverProps };
