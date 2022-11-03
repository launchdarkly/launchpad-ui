import type { ModalProps } from './Modal';

import { ButtonGroup } from '@launchpad-ui/button';
import { useRef } from 'react';

import styles from './styles/Modal.module.css';
import { useFooterHeight } from './utils';

type ModalFooterProps = Pick<ModalProps, 'secondaryButton' | 'primaryButton'>;

const ModalFooter = ({ secondaryButton, primaryButton }: ModalFooterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useFooterHeight(ref);

  return (
    <div className={styles.footer} ref={ref} data-test-id="modal-footer">
      <ButtonGroup className={styles.footerActions}>
        {secondaryButton}
        {primaryButton}
      </ButtonGroup>
    </div>
  );
};

export { ModalFooter };
export type { ModalFooterProps };
