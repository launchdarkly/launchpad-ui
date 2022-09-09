import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import './styles/Modal.css';

type ModalBodyProps = HTMLAttributes<HTMLDivElement>;

const ModalBody = ({ className, children, ...rest }: ModalBodyProps) => {
  const classes = cx('Modal-body', className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export { ModalBody };
export type { ModalBodyProps };
