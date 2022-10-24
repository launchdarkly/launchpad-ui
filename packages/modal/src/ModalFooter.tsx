import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import styles from './styles/Modal.module.css';

type ModalFooterProps = HTMLAttributes<HTMLDivElement> & { 'data-test-id'?: string };

const ModalFooter = ({
  className,
  children,
  'data-test-id': testId = 'modal-footer',
  ...rest
}: ModalFooterProps) => {
  const classes = cx(styles.modalFooter, className);

  return (
    <div data-test-id={testId} className={classes} {...rest}>
      {children}
    </div>
  );
};

export { ModalFooter };
export type { ModalFooterProps };
