import type { ReactNode } from 'react';

import { ModalContainer } from './ModalContainer';
import { ModalHeader } from './ModalHeader';

type ModalProps = {
  children: ReactNode;
  className?: string;
  withCloseButton?: boolean;
  cancelWithOverlayClick?: boolean;
  onReady?(): void;
  onCancel?(): void;
  size?: 'small' | 'normal' | 'auto';
  status?: 'warning';
  hasRequiredField?: boolean;
  title: ReactNode;
  description?: ReactNode;
  primaryButton?: ReactNode;
  secondaryButton?: ReactNode;
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
  );
};

export { Modal };
export type { ModalProps };
