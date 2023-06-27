import type { ReactNode } from 'react';

import { Portal } from '@launchpad-ui/portal';

import { ModalContainer } from './ModalContainer';
import { ModalContext } from './context';

type ModalProps = {
  children: ReactNode;
  className?: string;
  cancelWithOverlayClick?: boolean;
  onReady?(): void;
  onCancel?(): void;
  status?: 'warning';
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  theme?: 'dark' | 'default';
  'data-test-id'?: string;
};

const Modal = ({
  className,
  onCancel,
  cancelWithOverlayClick = true,
  children,
  onReady,
  status,
  size,
  theme,
  'data-test-id': testId = 'modal',
}: ModalProps) => {
  return (
    <Portal>
      <ModalContext.Provider value={{ onCancel, status }}>
        <ModalContainer
          onCancel={onCancel}
          onReady={onReady}
          cancelWithOverlayClick={cancelWithOverlayClick}
          size={size}
          className={className}
          theme={theme}
          data-test-id={testId}
        >
          {children}
        </ModalContainer>
      </ModalContext.Provider>
    </Portal>
  );
};

export { Modal };
export type { ModalProps };
