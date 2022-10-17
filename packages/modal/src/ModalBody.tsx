import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Modal.module.css';

type ModalBodyProps = HTMLAttributes<HTMLDivElement>;

const ModalBody = ({ className, children, ...rest }: ModalBodyProps) => {
  const classes = cx(styles['Modal-body'], className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export { ModalBody };
export type { ModalBodyProps };
