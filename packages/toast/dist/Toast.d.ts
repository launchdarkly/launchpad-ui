import type { HTMLAttributes, ReactNode } from 'react';
type ToastBaseProps = {
    kind: 'info' | 'success' | 'warning';
    onDismiss: () => void;
    content: ReactNode;
    'data-test-id'?: string;
};
type ToastProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & ToastBaseProps;
declare const Toast: ({ className, kind, onDismiss, content, "data-test-id": testId, ...rest }: ToastProps) => JSX.Element;
export { Toast };
export type { ToastBaseProps, ToastProps };
//# sourceMappingURL=Toast.d.ts.map