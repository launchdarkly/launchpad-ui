import type { ModalProps } from './Modal';

import { ButtonGroup } from '@launchpad-ui/button';
import cx from 'classix';
import { forwardRef } from 'react';

import styles from './styles/Modal.module.css';

type ModalFooterProps = Pick<ModalProps, 'secondaryButton' | 'primaryButton' | 'className'>;

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ secondaryButton, primaryButton, className }, ref) => (
    <div className={cx(className, styles.footer)} data-test-id="modal-footer" ref={ref}>
      <ButtonGroup className={styles.footerActions}>
        {secondaryButton}
        {primaryButton}
      </ButtonGroup>
    </div>
  )
);

ModalFooter.displayName = 'ModalFooter';

export { ModalFooter };
export type { ModalFooterProps };
