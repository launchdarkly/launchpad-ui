import type { ModalProps } from './Modal';

import { IconButton } from '@launchpad-ui/button';
import { Close, Warning } from '@launchpad-ui/icons';

import { MODAL_LABELLED_BY } from './constants';
import styles from './styles/Modal.module.css';

type ModalHeaderProps = Pick<
  ModalProps,
  'withCloseButton' | 'onCancel' | 'status' | 'hasRequiredField' | 'title' | 'description'
>;

const ModalHeader = ({
  withCloseButton = true,
  onCancel,
  status,
  title,
  hasRequiredField,
  description,
}: ModalHeaderProps) => (
  <div className={styles.header}>
    <div className={styles.headerMain}>
      {status === 'warning' && (
        <Warning data-test-id="modal-header-icon" size="medium" className={styles.headerIcon} />
      )}
      <h2 id={MODAL_LABELLED_BY} data-test-id="modal-title" className={styles.title}>
        {title}
      </h2>
      {withCloseButton && (
        <IconButton
          aria-label="close"
          icon={<Close size="medium" />}
          className={styles.closeButton}
          onClick={onCancel}
          data-test-id="modal-close-button"
        />
      )}
    </div>
    {description && (
      <p className={styles.headerDescription} data-test-id="modal-description">
        {description}
      </p>
    )}
    {hasRequiredField && (
      <div className={styles.headerRequiredFields} data-test-id="modal-required-field">
        <span className={styles.requiredAsterisk}>*</span> Required field
      </div>
    )}
  </div>
);

export { ModalHeader };
export type { ModalHeaderProps };
