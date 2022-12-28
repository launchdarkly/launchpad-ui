import type { OffsetOptions } from '@floating-ui/core';
import type { Placement } from '@floating-ui/dom';
import type { CSSProperties, FocusEvent, MouseEvent, PointerEvent, ReactHTML, ReactNode, Ref, RefObject } from 'react';
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
    rootElementTag?: keyof ReactHTML;
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
    'data-test-id': string;
    style?: CSSProperties;
};
/**
 * Popover component driven by floating-ui.
 *
 * If you need more control over the popover's behavior,
 * you may specify the `isOpen` prop to use the component
 * in controlled mode.
 *
 */
declare const Popover: ({ rootElementTag, placement, restrictHeight, restrictWidth, isModal, isFixed, interactionKind, hoverOpenDelay, hoverCloseDelay, disablePlacementFlip, allowBoundaryElementOverflow, isOpen: isOpenProp, enableArrow, enforceFocus, onClick, onInteraction, onClose, disabled, children, target: targetProp, content: contentProp, targetClassName, targetTestId, popoverClassName, popoverContentClassName, rootElementStyle, offset, targetElementRef, "data-test-id": testId, }: PopoverProps) => import("react").DetailedReactHTMLElement<PopoverTargetProps, HTMLElement>;
export { Popover };
export type { Offset, PopoverProps };
//# sourceMappingURL=Popover.d.ts.map