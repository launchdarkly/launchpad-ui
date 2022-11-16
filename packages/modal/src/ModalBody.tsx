import type { HTMLAttributes } from 'react';

import cx from 'classix';
import { useRef } from 'react';

import styles from './styles/Modal.module.css';
import { useOverflowY } from './utils';

type ModalBodyProps = HTMLAttributes<HTMLDivElement> & {
  'data-test-id'?: string;
};

const ModalBody = ({
  children,
  className,
  'data-test-id': testId = 'modal-body',
  ...rest
}: ModalBodyProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useOverflowY(ref);

  return (
    <div {...rest} ref={ref} className={cx(styles.body, className)} data-test-id={testId}>
      {children}
    </div>
  );
};

export { ModalBody };
export type { ModalBodyProps };
