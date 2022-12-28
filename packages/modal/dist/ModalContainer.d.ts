/// <reference types="react" />
import type { ModalProps } from './Modal';
type ModalContainerProps = Pick<ModalProps, 'children' | 'cancelWithOverlayClick' | 'onCancel' | 'size' | 'className' | 'onReady' | 'data-test-id'>;
declare const ModalContainer: ({ cancelWithOverlayClick, children, onCancel, size, className, onReady, "data-test-id": testId, }: ModalContainerProps) => JSX.Element;
export { ModalContainer };
export type { ModalContainerProps };
//# sourceMappingURL=ModalContainer.d.ts.map