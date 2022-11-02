import type { HTMLAttributes } from 'react';

import { useRef } from 'react';

import styles from './styles/Modal.module.css';
import { useOverflowY } from './utils';

type ModalBodyProps = HTMLAttributes<HTMLDivElement>;

const ModalBody = ({ children }: ModalBodyProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useOverflowY(ref);

  return (
    <div ref={ref} className={styles.body} data-test-id="modal-body">
      {children}
    </div>
  );
};

export { ModalBody };
export type { ModalBodyProps };
