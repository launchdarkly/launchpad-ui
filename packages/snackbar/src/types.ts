import type { SnackbarBaseProps } from './Snackbar';

enum SnackbarKind {
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
}

type SnackbarRecord = SnackbarBaseProps & {
  _id: string;
};

export { SnackbarKind };
export type { SnackbarRecord };
