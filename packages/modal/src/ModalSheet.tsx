import { Progress } from '@launchpad-ui/progress';
import { cx } from 'classix';
import { Suspense } from 'react';

import { Modal } from './Modal';
import { Portal } from './Portal';
import './styles/Modal.css';

type ModalSheetProps = {
  className?: string;
  onCancel?(): void;
  size?: 'small' | 'medium' | 'large' | 'x-large' | 'full';
  withCloseButton?: boolean;
  children: React.ReactNode;
};

const ModalSheet = ({
  size = 'small',
  children,
  withCloseButton = true,
  ...props
}: ModalSheetProps) => {
  const classes = cx('ModalSheet', `ModalSheet--${size}`);

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
