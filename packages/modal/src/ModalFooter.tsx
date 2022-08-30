import type { ReactNode } from 'react';

import { cx } from 'classix';

import './styles/Modal.css';

type ModalFooterProps = {
  children: ReactNode;
  className?: string;
  testId?: string;
};

const ModalFooter = ({ className, testId, children }: ModalFooterProps) => {
  const classes = cx('Modal-footer', className);

  return (
    <div className={classes} data-test-id={testId}>
      {children}
    </div>
  );
};

export { ModalFooter };
export type { ModalFooterProps };
