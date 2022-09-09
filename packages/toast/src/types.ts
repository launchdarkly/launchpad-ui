import type { ToastBaseProps } from './Toast';

enum ToastKind {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

type ToastRecord = Omit<ToastBaseProps, 'onDismiss'> & {
  _id: string;
};

export { ToastKind };
export type { ToastRecord };
