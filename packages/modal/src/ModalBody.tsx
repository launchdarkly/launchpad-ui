import type { KeyboardEvent, ReactNode } from 'react';

import { cx } from 'classix';

import './styles/Modal.css';

type ModalBodyProps = {
  children: ReactNode;
  className?: string;
  onKeyDown?: (e: KeyboardEvent) => void;
};

const ModalBody = ({ className, children, ...other }: ModalBodyProps) => {
  const classes = cx('Modal-body', className);

  return (
    <div className={classes} {...other}>
      {children}
    </div>
  );
};

export { ModalBody };
export type { ModalBodyProps };
