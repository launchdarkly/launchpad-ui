import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Modal.module.css';

type ModalFooterProps = HTMLAttributes<HTMLDivElement>;

const ModalFooter = ({ className, children, ...rest }: ModalFooterProps) => {
  const classes = cx(styles.modalFooter, className);

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  );
};

export { ModalFooter };
export type { ModalFooterProps };
