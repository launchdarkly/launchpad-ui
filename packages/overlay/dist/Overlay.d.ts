import type { KeyboardEvent, MouseEvent as ReactMouseEvent, ReactNode } from 'react';
type OverlayProps = {
    isOpen: boolean;
    isModal?: boolean;
    canEscapeKeyClose?: boolean;
    canOutsideClickClose?: boolean;
    enforceFocus?: boolean;
    lazy?: boolean;
    onClose: (event: ReactMouseEvent | KeyboardEvent) => void;
    children?: ReactNode;
};
declare const Overlay: ({ isOpen, lazy, enforceFocus, isModal, canOutsideClickClose, canEscapeKeyClose, onClose, children, }: OverlayProps) => JSX.Element | null;
export { Overlay };
export type { OverlayProps };
//# sourceMappingURL=Overlay.d.ts.map