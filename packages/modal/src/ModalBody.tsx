import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Modal.module.css';

type ModalBodyProps = HTMLAttributes<HTMLDivElement>;

const ModalBody = ({ className, children, ...rest }: ModalBodyProps) => {
  const classes = cx(styles.modalBody, className);

  return (
    <section {...rest} className={classes}>
      {children}
    </section>
  );
};

export { ModalBody };
export type { ModalBodyProps };
