import type { HTMLAttributes } from 'react';

import { Close } from '@launchpad-ui/icons';
import { cx } from 'classix';

import styles from './styles/Modal.module.css';

type ModalHeaderProps = HTMLAttributes<HTMLDivElement> & {
  closeable?: boolean;
  titleID?: string;
  titleClassName?: string;
  onClose?(): void;
  'data-test-id'?: string;
};

const ModalHeader = ({
  className,
  closeable = false,
  onClose = () => undefined,
  children,
  titleID,
  titleClassName,
  'data-test-id': testId = 'modal-header',
  ...rest
}: ModalHeaderProps) => {
  const classes = cx(styles.modalHeader, className);

  return (
    <div data-test-id={testId} className={classes} {...rest}>
      <h2 id={titleID || 'Modal-title'} className={cx(styles.modalTitle, titleClassName)}>
        {children}
      </h2>
      {closeable && <Close className={styles.modalClose} onClick={onClose} size="tiny" />}
    </div>
  );
};

export { ModalHeader };
export type { ModalHeaderProps };
