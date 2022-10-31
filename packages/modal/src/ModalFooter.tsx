import type { ModalProps } from './Modal';

import { ButtonGroup } from '@launchpad-ui/button';

import styles from './styles/Modal.module.css';

type ModalFooterProps = Pick<ModalProps, 'secondaryButton' | 'primaryButton'>;

const ModalFooter = ({ secondaryButton, primaryButton }: ModalFooterProps) => (
  <div className={styles.footer} data-test-id="modal-footer">
    <ButtonGroup className={styles.footerActions}>
      {secondaryButton}
      {primaryButton}
    </ButtonGroup>
  </div>
);

export { ModalFooter };
export type { ModalFooterProps };
