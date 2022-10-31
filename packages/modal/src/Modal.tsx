import type { ReactNode } from 'react';

import { ModalBody } from './ModalBody';
import { ModalContainer } from './ModalContainer';
import { ModalFooter } from './ModalFooter';
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
  primaryButton,
  secondaryButton,
  description,
  'data-test-id': testId = 'modal',
}: ModalProps) => {
  const hasFooter = !!(primaryButton || secondaryButton);

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

      <ModalBody>{children}</ModalBody>

      {hasFooter && <ModalFooter secondaryButton={secondaryButton} primaryButton={primaryButton} />}
    </ModalContainer>
  );
};

export { Modal };
export type { ModalProps };
