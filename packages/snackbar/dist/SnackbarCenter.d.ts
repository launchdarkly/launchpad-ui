/// <reference types="react" />
import type { SnackbarBaseProps } from './Snackbar';
type SnackbarRecord = SnackbarBaseProps & {
    _id: string;
};
type SnackbarCenterProps = {
    className?: string;
    snackbars: SnackbarRecord[];
    dismissSnackbar(snackbarId: string): void;
};
declare const SnackbarCenter: ({ snackbars, dismissSnackbar, className }: SnackbarCenterProps) => JSX.Element;
export { SnackbarCenter };
export type { SnackbarCenterProps, SnackbarRecord };
//# sourceMappingURL=SnackbarCenter.d.ts.map