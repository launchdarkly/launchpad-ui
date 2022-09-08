import type { ToastProps } from './Toast';
import type { HTMLAttributes } from 'react';

enum ToastKind {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
}

type ToastRecord = Omit<ToastProps, keyof HTMLAttributes<HTMLDivElement>> & {
  _id: string;
};

export { ToastKind };
export type { ToastRecord };
