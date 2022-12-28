import type { ReactNode } from 'react';
type ModalProps = {
    children: ReactNode;
    className?: string;
    cancelWithOverlayClick?: boolean;
    onReady?(): void;
    onCancel?(): void;
    status?: 'warning';
    size?: 'small' | 'normal';
    'data-test-id'?: string;
};
declare const Modal: ({ className, onCancel, cancelWithOverlayClick, children, onReady, status, size, "data-test-id": testId, }: ModalProps) => JSX.Element;
export { Modal };
export type { ModalProps };
//# sourceMappingURL=Modal.d.ts.map