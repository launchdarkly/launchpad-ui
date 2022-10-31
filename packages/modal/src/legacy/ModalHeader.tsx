import type { HTMLAttributes } from 'react';

import { cx } from 'classix';

import { MODAL_LABELLED_BY } from '../constants';
import styles from '../styles/LegacyModal.module.css';

type ModalHeaderProps = HTMLAttributes<HTMLDivElement> & {
  'data-test-id'?: string;
};

const ModalHeader = ({
  className,
  children,
  'data-test-id': testId = 'modal-header',
  ...rest
}: ModalHeaderProps) => {
  const classes = cx(styles.header, className);

  return (
    <div data-test-id={testId} className={classes} {...rest}>
      <h2 id={MODAL_LABELLED_BY} className={styles.title}>
        {children}
      </h2>
    </div>
  );
};

export { ModalHeader };
export type { ModalHeaderProps };
