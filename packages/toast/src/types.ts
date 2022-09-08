import type { ToastBaseProps } from './Toast';

enum ToastKind {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

type ToastRecord = ToastBaseProps & {
  _id: string;
};

export { ToastKind };
export type { ToastRecord };
