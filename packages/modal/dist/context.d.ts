/// <reference types="react" />
import type { ModalProps } from './Modal';
type ModalContextState = {
    onCancel: ModalProps['onCancel'];
    status: ModalProps['status'];
};
declare const ModalContext: import("react").Context<ModalContextState>;
declare const useModalContext: () => ModalContextState;
export { ModalContext, useModalContext };
export type { ModalContextState };
//# sourceMappingURL=context.d.ts.map