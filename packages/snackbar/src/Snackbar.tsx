import type { ReactNode } from 'react';

import { cx } from 'classix';

import './styles/Snackbar.css';

type SnackbarProps = {
  className?: string;
  children: ReactNode;
};

const Snackbar = ({ children, className }: SnackbarProps) => {
  return (
    <div className={cx('Snackbar', className)}>
      <span>{children}</span>
    </div>
  );
};

export { Snackbar };
export type { SnackbarProps };
