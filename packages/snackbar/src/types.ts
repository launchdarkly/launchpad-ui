import type { SnackbarProps } from './Snackbar';
import type { HTMLAttributes } from 'react';

enum SnackbarKind {
  INFO = 'info',
  ERROR = 'error',
  WARNING = 'warning',
}

type SnackbarRecord = Omit<SnackbarProps, keyof HTMLAttributes<HTMLDivElement>> & {
  _id: string;
};

export { SnackbarKind };
export type { SnackbarRecord };
