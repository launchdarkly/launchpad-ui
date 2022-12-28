/// <reference types="react" />
import type { ToastBaseProps } from './Toast';
type ToastRecord = Omit<ToastBaseProps, 'onDismiss'> & {
    _id: string;
};
type ToastCenterProps = {
    className?: string;
    toasts: ToastRecord[];
    onDismiss(toastId: string): void;
};
declare const ToastCenter: ({ toasts, onDismiss, className }: ToastCenterProps) => JSX.Element;
export { ToastCenter };
export type { ToastCenterProps, ToastRecord };
//# sourceMappingURL=ToastCenter.d.ts.map