import type { ForwardedRef } from 'react';
import type {
	OverlayArrowProps as AriaOverlayArrowProps,
	PopoverProps as AriaPopoverProps,
	DialogTriggerProps,
} from 'react-aria-components';

import { PressResponder } from '@react-aria/interactions';
import { useId, useLayoutEffect } from '@react-aria/utils';
import { cva } from 'class-variance-authority';
import { forwardRef, useCallback, useContext, useRef } from 'react';
import { useHover, useOverlayTrigger } from 'react-aria';
import {
	OverlayArrow as AriaOverlayArrow,
	Popover as AriaPopover,
	PopoverContext as AriaPopoverContext,
	DialogContext,
	OverlayTriggerStateContext,
	Provider,
	composeRenderProps,
} from 'react-aria-components';
import { useOverlayTriggerState } from 'react-stately';

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

const HoverTrigger = (props: DialogTriggerProps) => {
	const state = useOverlayTriggerState(props);

	const buttonRef = useRef<HTMLButtonElement>(null);
	const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, buttonRef);

	triggerProps.id = useId();
	// @ts-expect-error
	overlayProps['aria-labelledby'] = triggerProps.id;

	const ref = useRef<HTMLSpanElement>(null);
	const openTimeout = useRef<ReturnType<typeof setTimeout> | undefined>();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	const cancelOpenTimeout = useCallback(() => {
		if (openTimeout.current) {
			clearTimeout(openTimeout.current);
			openTimeout.current = undefined;
		}
	}, [openTimeout]);

	const onHoverChange = (isHovering: boolean) => {
		if (!openTimeout.current) {
			openTimeout.current = setTimeout(() => {
				cancelOpenTimeout();
				state.setOpen(isHovering);
			}, 250);
		} else {
			cancelOpenTimeout();
		}
	};

	const { hoverProps } = useHover({
		onHoverChange,
	});

	useLayoutEffect(() => {
		return () => {
			cancelOpenTimeout();
		};
	}, [cancelOpenTimeout]);

	const shouldCloseOnInteractOutside = (target: Element) => {
		return target !== buttonRef.current;
	};

	return (
		<Provider
			values={[
				[OverlayTriggerStateContext, state],
				[DialogContext, overlayProps],
				[
					AriaPopoverContext,
					{
						trigger: 'DialogTrigger',
						triggerRef: buttonRef,
						UNSTABLE_portalContainer: ref.current || undefined,
						shouldCloseOnInteractOutside,
					},
				],
			]}
		>
			<span className={styles.hover} ref={ref} {...hoverProps}>
				<PressResponder {...triggerProps} ref={buttonRef} isPressed={state.isOpen}>
					{props.children}
				</PressResponder>
			</span>
		</Provider>
	);
};

export { HoverTrigger, OverlayArrow, Popover };
export type { OverlayArrowProps, PopoverProps };
