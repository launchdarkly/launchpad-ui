import type { HTMLAttributes, ReactNode } from 'react';

import { ButtonGroup } from '@launchpad-ui/button';
import cx from 'classix';
import { forwardRef } from 'react';

import styles from './styles/Modal.module.css';

type ModalFooterProps = HTMLAttributes<HTMLDivElement> & {
  primaryButton?: ReactNode;
  secondaryButton?: ReactNode;
  'data-test-id'?: string;
};

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  (
    { secondaryButton, primaryButton, className, 'data-test-id': testId = 'modal-footer', ...rest },
    ref
  ) => (
    <div {...rest} className={cx(className, styles.footer)} data-test-id={testId} ref={ref}>
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
