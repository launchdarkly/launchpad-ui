import type { Variants } from 'framer-motion';
import type { MouseEvent, ReactNode } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { FocusTrap } from '@launchpad-ui/focus-trap';
import { Close } from '@launchpad-ui/icons';
import { Portal } from '@launchpad-ui/portal';
import { usePreventScroll } from '@react-aria/overlays';
import { cx } from 'classix';
import { LazyMotion, m } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { MODAL_LABELLED_BY } from './constants';
import styles from './styles/Modal.module.css';

const overlay: Variants = {
  visible: { opacity: 1, transition: { duration: 0.15 } },
  hidden: { opacity: 0 },
};

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', delay: 0.1, duration: 0.15 } },
};

const loadFeatures = () =>
  import(
    /* webpackChunkName: "lp-modal-framer-features" */
    /* webpackExports: "domAnimation" */
    'framer-motion'
  ).then((res) => res.domAnimation);

type ModalProps = {
  children?: ReactNode;
  className?: string;
  withCloseButton?: boolean;
  cancelWithOverlayClick?: boolean;
  onReady?(): void;
  onCancel?(): void;
  'data-test-id'?: string;
};

const Modal = ({
  className,
  withCloseButton = true,
  cancelWithOverlayClick = true,
  children,
  onReady,
  onCancel,
  'data-test-id': testId = 'modal',
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  usePreventScroll();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      event.stopImmediatePropagation();
      const latest = [...document.querySelectorAll('[data-modal]')].pop();
      if (event.key === 'Escape' && latest === ref.current) {
        close();
      }
    };

    const close = () => {
      onCancel?.();
    };

    onReady?.();
    document.body.classList.add('has-overlay');
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.classList.remove('has-overlay');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onReady, onCancel, testId]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (cancelWithOverlayClick && event.target === event.currentTarget) {
      onCancel && onCancel();
    }
  };

  return (
    <Portal>
      <LazyMotion strict features={loadFeatures}>
        <div className={cx(styles.modal, className)} data-modal data-test-id={testId} ref={ref}>
          <m.div
            initial="hidden"
            animate="visible"
            variants={overlay}
            transition={{ duration: 0.15 }}
            role="presentation"
            className={styles.overlay}
            onMouseDown={handleOverlayClick}
          >
            <FocusTrap autoFocus restoreFocus>
              <m.div
                initial="hidden"
                animate="visible"
                variants={pop}
                role="dialog"
                aria-labelledby={MODAL_LABELLED_BY}
                aria-modal
                className={styles.content}
                tabIndex={-1}
              >
                {withCloseButton && (
                  <IconButton
                    aria-label="close"
                    icon={<Close size="medium" />}
                    className={styles.closeButton}
                    onClick={onCancel}
                    data-test-id="modal-close-button"
                  />
                )}
                {children}
              </m.div>
            </FocusTrap>
          </m.div>
        </div>
      </LazyMotion>
    </Portal>
  );
};

export { Modal };
export type { ModalProps };
