import type { ReactNode } from 'react';

import { Progress } from '@launchpad-ui/progress';
import { cx } from 'classix';
import { Suspense } from 'react';

import { Modal } from './Modal';
import { Portal } from './Portal';
import styles from './styles/Modal.module.css';

type ModalSheetProps = {
  className?: string;
  onCancel?(): void;
  size?: 'small' | 'medium' | 'large' | 'xLarge' | 'full';
  withCloseButton?: boolean;
  children: ReactNode;
};

const ModalSheet = ({
  size = 'small',
  children,
  withCloseButton = true,
  ...props
}: ModalSheetProps) => {
  const classes = cx(styles.modalSheet, styles[`${size}`]);

  return (
    <Portal className={classes}>
      <Modal {...props} transition="slideRight" withCloseButton={withCloseButton}>
        <Suspense fallback={<Progress />}>{children}</Suspense>
      </Modal>
    </Portal>
  );
};

export { ModalSheet };
export type { ModalSheetProps };
