import type { ReactNode } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Close, Warning } from '@launchpad-ui/icons';
import { cx } from 'classix';

import { MODAL_LABELLED_BY } from './constants';
import { useModalContext } from './context';
import styles from './styles/Modal.module.css';

type ModalHeaderProps = {
  className?: string;
  withCloseButton?: boolean;
  hasRequiredField?: boolean;
  title: ReactNode;
  description?: ReactNode;
  'data-test-id'?: string;
};

const ModalHeader = ({
  withCloseButton = true,
  title,
  hasRequiredField,
  description,
  className,
  'data-test-id': testId = 'modal-header',
}: ModalHeaderProps) => {
  const { onCancel, status } = useModalContext();

  return (
    <div className={cx(styles.header, className)} data-test-id={testId}>
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
            size="small"
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
};

export { ModalHeader };
export type { ModalHeaderProps };
