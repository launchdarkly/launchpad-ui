import type { OffsetOptions } from '@floating-ui/core';
import type { ComputePositionConfig, Placement, Strategy } from '@floating-ui/dom';
import type {
	CSSProperties,
	FocusEvent,
	JSX,
	MouseEvent,
	PointerEvent,
	ReactElement,
	KeyboardEvent as ReactKeyboardEvent,
	ReactNode,
	Ref,
	RefObject,
} from 'react';

import { arrow, computePosition, flip, offset as floatOffset, shift } from '@floating-ui/dom';
import { FocusTrap } from '@launchpad-ui/focus-trap';
import { Overlay } from '@launchpad-ui/overlay';
import { cx } from 'classix';
import { LazyMotion, m } from 'framer-motion';
import {
	Children,
	cloneElement,
	createElement,
	isValidElement,
	useCallback,
	useEffect,
	useId,
	useRef,
	useState,
} from 'react';

import styles from './styles/Popover.module.css';

const loadFeatures = () =>
	import(
		/* webpackChunkName: "lp-popover-framer-features" */
		/* webpackExports: "domAnimation" */
		'framer-motion'
	).then((res) => res.domAnimation);

type Offset = OffsetOptions;

type PopoverProps = {
	allowBoundaryElementOverflow?: boolean;
	content?: string | JSX.Element | JSX.Element[];
	children: ReactNode;
	disabled?: boolean;
	disablePlacementFlip?: boolean;
	enforceFocus?: boolean;
	hoverCloseDelay?: number;
	hoverOpenDelay?: number;
	interactionKind?: 'hover' | 'hover-target-only' | 'hover-or-focus' | 'click';
	isFixed?: boolean;
	isModal?: boolean;
	isOpen?: boolean;
	offset?: Offset;
	onClick?(): void;
	onClose?(event?: Event): void;
	onInteraction?(isOpen: boolean): void;
	placement?: Placement;
	popoverClassName?: string;
	popoverContentClassName?: string;
	restrictHeight?: boolean;
	restrictWidth?: boolean;
	rootElementStyle?: CSSProperties;
	rootElementTag?: keyof JSX.IntrinsicElements;
	target?: string | JSX.Element;
	targetElementRef?: Ref<Element>;
	targetClassName?: string;
	targetTestId?: string;
	enableArrow?: boolean;
	'data-test-id'?: string;
};

type PopoverTargetProps = {
	onMouseEnter?: (event: MouseEvent) => void;
	onMouseLeave?: (event: MouseEvent) => void;
	onPointerEnter?: (event: PointerEvent) => void;
	onPointerLeave?: (event: PointerEvent) => void;
	onFocus?: (event: FocusEvent) => void;
	onBlur?: (event: FocusEvent) => void;
	onClick?: (event: MouseEvent) => void;
	ref: RefObject<HTMLElement>;
	className?: string;
	isopen?: boolean;
	'data-test-id'?: string;
	style?: CSSProperties;
};

type PopoverContentProps = {
	onMouseEnter?: (event: MouseEvent) => void;
	onMouseLeave?: (event: MouseEvent) => void;
	onPointerEnter?: (event: PointerEvent) => void;
	onPointerLeave?: (event: PointerEvent) => void;
	onClick?: (event: MouseEvent) => void;
};

const isOrContainsElement = (referenceElement: Element, element: Element) => {
	return referenceElement === element || referenceElement?.contains(element);
};

/**
 * @deprecated use `Popover` from `@launchpad-ui/components` instead
 *
 * https://launchpad.launchdarkly.com/?path=/docs/components-overlays-popover--docs
 */
const Popover = ({
	rootElementTag = 'span',
	placement = 'bottom',
	restrictHeight = true,
	restrictWidth = true,
	isModal = false,
	isFixed = false,
	interactionKind = 'click',
	hoverOpenDelay = 250,
	hoverCloseDelay = 250,
	disablePlacementFlip = false,
	allowBoundaryElementOverflow = false,
	isOpen: isOpenProp,
	enableArrow,
	enforceFocus,
	onClick,
	onInteraction,
	onClose,
	disabled,
	children,
	target: targetProp,
	content: contentProp,
	targetClassName,
	targetTestId,
	popoverClassName,
	popoverContentClassName,
	rootElementStyle,
	offset,
	targetElementRef,
	'data-test-id': testId = 'popover',
}: PopoverProps) => {
	const [isOpen, setIsOpen] = useState(isOpenProp ?? undefined);
	const [popoverElement, setPopoverElement] = useState<HTMLElement | null>();

	const targetRef = useRef<HTMLElement>(null);
	const contentRef = useCallback((node: HTMLElement | null) => {
		if (node !== null) {
			return setPopoverElement(node);
		}
		return;
	}, []);
	const arrowRef = useRef<HTMLDivElement>(null);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const optionsRef = useRef<Partial<ComputePositionConfig>>({});
	const popoverId = useRef(`popover-${useId()}`);

	const updatePosition = useCallback(async () => {
		const middleware = [];

		if (popoverElement === null || popoverElement === undefined) {
			return;
		}

		if (!allowBoundaryElementOverflow) {
			middleware.push(shift({ padding: 5 }));
		}

		if (!disablePlacementFlip && !offset) {
			middleware.push(flip({ padding: 5 }));
		}

		if (offset) {
			middleware.push(floatOffset(offset));
		}

		if (enableArrow && arrowRef.current) {
			middleware.push(arrow({ element: arrowRef.current }));
		}

		const hasModal = targetRef.current?.closest('.has-overlay');
		const strategy: Strategy = isFixed || hasModal ? 'fixed' : 'absolute';

		optionsRef.current = {
			placement,
			middleware,
			strategy,
		};

		const parentNode = targetRef.current;
		if (!parentNode || !parentNode.childNodes) {
			return;
		}

		const target = parentNode.childNodes[0] as Element;
		const {
			x,
			y,
			placement: floatPlacement,
			middlewareData,
			strategy: floatStrategy,
		} = await computePosition(target, popoverElement, optionsRef.current);

		if (popoverElement) {
			Object.assign(popoverElement.style, {
				left: `${x}px`,
				top: `${y}px`,
				position: floatStrategy,
			});

			popoverElement.dataset.popoverPlacement = floatPlacement;
		}

		if (enableArrow && arrowRef.current && middlewareData.arrow) {
			const { x: arrowX, y: arrowY } = middlewareData.arrow;

			const staticSide = {
				top: 'bottom',
				right: 'left',
				bottom: 'top',
				left: 'right',
			}[floatPlacement.split('-')[0]];

			if (staticSide) {
				Object.assign(arrowRef.current?.style, {
					left: arrowX !== null ? `${arrowX}px` : '',
					top: arrowY !== null ? `${arrowY}px` : '',
					right: '',
					bottom: '',
					[staticSide]: '5px',
				});
			}
		}
	}, [
		allowBoundaryElementOverflow,
		disablePlacementFlip,
		enableArrow,
		isFixed,
		offset,
		placement,
		popoverElement,
	]);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const updatePopover = async () => {
			if (isOpen && !(popoverElement === null || popoverElement === undefined)) {
				window.addEventListener('scroll', updatePosition, { passive: true });
				window.addEventListener('resize', updatePosition, { passive: true });
				await updatePosition();
			} else {
				window.removeEventListener('scroll', updatePosition);
				window.removeEventListener('resize', updatePosition);
			}
		};
		updatePopover();
	}, [isOpen, contentProp, popoverElement, updatePosition]);

	useEffect(() => {
		setIsOpen(isOpenProp);
	}, [isOpenProp]);

	const handleTargetClick = (event: MouseEvent) => {
		const eventTarget = event.target as Element;
		onClick?.();
		if (!disabled && targetRef.current && isOrContainsElement(targetRef.current, eventTarget)) {
			// always close the menu, and only open unless something prevented the default
			setOpenState(isOpen ? false : !event.defaultPrevented);
		}
	};

	const handleMouseEnter = () => {
		if (!disabled) {
			setOpenState(true, hoverOpenDelay);
			attachGlobalListener();
		}
	};

	const handleMouseLeave = () => {
		setOpenState(false, hoverCloseDelay);
		removeGlobalListener();
	};

	const handleFocus = () => {
		if (!disabled) {
			setOpenState(true);
			attachGlobalListener();
		}
	};

	const handleBlur = () => {
		setOpenState(false);
		removeGlobalListener();
	};

	const handlePopoverClick = (event: MouseEvent) => {
		const eventTarget = event.target as Element;
		if (eventTarget?.closest?.('.popover-dismiss')) {
			setOpenState(false);
		}
	};

	const handleOverlayClose = (event: MouseEvent | ReactKeyboardEvent) => {
		const eventTarget = event.target as Element;
		if (
			(targetRef.current && !isOrContainsElement(targetRef.current, eventTarget)) ||
			event.nativeEvent instanceof KeyboardEvent
		) {
			setOpenState(false);
		}
	};

	const setOpenState = (nextIsOpen: boolean, timeout?: number) => {
		timeoutRef.current && clearTimeout(timeoutRef.current);

		if (typeof timeout !== 'undefined' && timeout > 0) {
			timeoutRef.current = setTimeout(() => setOpenState(nextIsOpen), timeout);
		} else {
			// controlled mode
			if (isOpenProp === null || isOpenProp === undefined) {
				setIsOpen(nextIsOpen);
			} else {
				typeof onInteraction === 'function' && onInteraction(nextIsOpen);
			}

			if (!nextIsOpen) {
				typeof onClose === 'function' && onClose();
			}
		}
	};

	const parseChildren = (): {
		target: ReactNode;
		content: ReactNode;
	} => {
		const [targetChild, contentChild] = Children.toArray(children);

		return {
			target: targetChild ?? targetProp,
			content: contentChild ?? contentProp,
		};
	};

	const attachGlobalListener = () => {
		window.addEventListener('keydown', handleKeyDown, true);
	};

	const removeGlobalListener = () => {
		window.removeEventListener('keydown', handleKeyDown, true);
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			event.stopPropagation();
			setIsOpen(false);
			removeGlobalListener();
		}
	};

	const renderPopover = (content: ReactNode) => {
		const classes = cx(styles.Popover, popoverClassName);

		let handlers: PopoverContentProps = {};

		if (interactionKind === 'hover') {
			handlers = {
				onMouseEnter: handleMouseEnter,
				onMouseLeave: handleMouseLeave,
				onPointerEnter: handleMouseEnter,
				onPointerLeave: handleMouseLeave,
			};
		}

		if (interactionKind !== 'hover-target-only') {
			handlers.onClick = handlePopoverClick;
		}

		const popoverContent = (
			<LazyMotion strict features={loadFeatures}>
				<m.div
					transition={{ duration: 0.15 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					/* @ts-ignore framer */
					className={cx(
						styles['Popover-content'],
						restrictWidth && styles['Popover-content--restrictWidth'],
						popoverContentClassName,
					)}
					tabIndex={interactionKind === 'click' ? -1 : undefined}
				>
					{enableArrow && <div id="arrow" ref={arrowRef} />}
					{restrictHeight ? <div className={styles['Popover-scroller']}>{content}</div> : content}
				</m.div>
			</LazyMotion>
		);

		return (
			<div
				id={popoverId.current}
				ref={contentRef}
				className={classes}
				role="tooltip"
				data-test-id={testId}
				aria-hidden={!isOpen}
				{...handlers}
			>
				{enforceFocus || interactionKind === 'click' ? (
					<FocusTrap autoFocus>{popoverContent}</FocusTrap>
				) : (
					popoverContent
				)}
			</div>
		);
	};

	const { target, content } = parseChildren();
	const hasEmptyContent =
		content === null || content === undefined || (typeof content === 'string' && !content);
	const isTargetDisabled = isValidElement(target)
		? // biome-ignore lint/suspicious/noExplicitAny: <explanation>
			!!(target as ReactElement<any>)?.props?.disabled
		: false;

	const targetProps: PopoverTargetProps = {
		ref: targetRef as RefObject<HTMLElement>,
		className: cx(
			styles['Popover-target'],
			targetClassName,
			isTargetDisabled && styles['Popover-target--disabled'],
		),
		style: rootElementStyle,
		'data-test-id': targetTestId || 'popover-target',
	};

	if (
		interactionKind === 'hover' ||
		interactionKind === 'hover-target-only' ||
		interactionKind === 'hover-or-focus'
	) {
		targetProps.onMouseEnter = handleMouseEnter;
		targetProps.onMouseLeave = handleMouseLeave;
		targetProps.onPointerEnter = handleMouseEnter;
		targetProps.onPointerLeave = handleMouseLeave;
		if (interactionKind === 'hover-or-focus') {
			targetProps.onFocus = handleFocus;
			targetProps.onBlur = handleBlur;
		}
	} else {
		targetProps.onClick = handleTargetClick;
	}

	return createElement(
		rootElementTag,
		targetProps,
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		cloneElement(target as ReactElement<any>, {
			ref: targetElementRef,
			...(isOpen && { 'aria-describedby': popoverId.current }),
			'data-state': isOpen ? 'open' : 'closed',
		}),
		<Overlay
			isOpen={!!isOpen && !hasEmptyContent}
			canOutsideClickClose={interactionKind === 'click'}
			isModal={isModal}
			enforceFocus={enforceFocus}
			onClose={handleOverlayClose}
		>
			<div>{renderPopover(content)}</div>
		</Overlay>,
	);
};

export { Popover };
export type { Offset, PopoverProps };
