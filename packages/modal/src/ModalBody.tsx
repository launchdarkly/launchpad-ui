import type { HTMLAttributes } from 'react';

import styles from './styles/Modal.module.css';

type ModalBodyProps = HTMLAttributes<HTMLDivElement>;

const ModalBody = ({ children }: ModalBodyProps) => (
  <div className={styles.body} data-test-id="modal-body">
    {children}
  </div>
);

export { ModalBody };
export type { ModalBodyProps };
