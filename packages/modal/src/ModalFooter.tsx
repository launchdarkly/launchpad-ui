import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Modal.css';

type ModalFooterProps = HTMLAttributes<HTMLDivElement>;

const ModalFooter = ({ className, children, ...rest }: ModalFooterProps) => {
  const classes = cx('Modal-footer', className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export { ModalFooter };
export type { ModalFooterProps };
