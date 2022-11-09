import type { ReactNode } from 'react';

import { Portal } from '@launchpad-ui/portal';

import { ModalContainer } from './ModalContainer';
import { ModalHeader } from './ModalHeader';

type ModalProps = {
  children: ReactNode;
  className?: string;
  withCloseButton?: boolean;
  cancelWithOverlayClick?: boolean;
  onReady?(): void;
  onCancel?(): void;
  size?: 'small' | 'normal';
  status?: 'warning';
  hasRequiredField?: boolean;
  title: ReactNode;
  description?: ReactNode;
  'data-test-id'?: string;
};

const Modal = ({
  className,
  withCloseButton = true,
  cancelWithOverlayClick = true,
  children,
  onReady,
  onCancel,
  size,
  status,
  title,
  hasRequiredField,
  description,
  'data-test-id': testId = 'modal',
}: ModalProps) => {
  return (
    <Portal>
      <ModalContainer
        onCancel={onCancel}
        onReady={onReady}
        cancelWithOverlayClick={cancelWithOverlayClick}
        size={size}
        className={className}
        data-test-id={testId}
      >
        <ModalHeader
          {...{ withCloseButton, title, status, onCancel, description, hasRequiredField }}
        />

        {children}
      </ModalContainer>
    </Portal>
  );
};

export { Modal };
export type { ModalProps };
