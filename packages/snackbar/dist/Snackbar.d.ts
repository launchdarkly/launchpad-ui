import type { AnchorHTMLAttributes, HTMLAttributes, ReactElement, ReactNode } from 'react';
type SnackbarBaseProps = {
    kind: 'info' | 'error' | 'warning' | 'success';
    header?: ReactNode;
    description: ReactNode;
    cta?: ReactElement<AnchorHTMLAttributes<HTMLAnchorElement>>;
    onDismiss?: () => void;
    'data-test-id'?: string;
};
type SnackbarProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & SnackbarBaseProps;
declare const Snackbar: ({ className, kind, header, description, cta, onDismiss, "data-test-id": testId, ...rest }: SnackbarProps) => JSX.Element;
export { Snackbar };
export type { SnackbarBaseProps, SnackbarProps };
//# sourceMappingURL=Snackbar.d.ts.map