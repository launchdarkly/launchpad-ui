import type { Variants } from 'framer-motion';
import type { MouseEvent, ReactNode } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { FocusTrap } from '@launchpad-ui/focus-trap';
import { Close } from '@launchpad-ui/icons';
import { usePreventScroll } from '@react-aria/overlays';
import { cx } from 'classix';
import { LazyMotion, m } from 'framer-motion';
import { useEffect, useRef } from 'react';

import styles from './styles/Modal.module.css';

const overlay: Variants = {
  visible: { opacity: 1, transition: { duration: 0.15 } },
  hidden: { opacity: 0 },
};

const content: { [name: string]: Variants } = {
  pop: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', delay: 0.1, duration: 0.15 } },
  },
  slideRight: {
    hidden: { opacity: 0, x: '25%' },
    visible: {
      opacity: 1,
      x: '0%',
      transition: { type: 'spring', delay: 0.15, duration: 0.2, bounce: 0 },
    },
  },
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
  modalLabelID?: string;
  transition: 'pop' | 'slideRight';
  onReady?(): void;
  onCancel?(): void;
  'data-test-id'?: string;
};

const Modal = ({
  className,
  withCloseButton = false,
  cancelWithOverlayClick = true,
  children,
  onReady,
  onCancel,
  modalLabelID = 'Modal-title',
  transition,
  'data-test-id': testId = 'modal',
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  usePreventScroll();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      event.stopImmediatePropagation();
      const latest = [...document.querySelectorAll(`[data-test-id="${testId}"]`)].pop();
      if (event.key === 'Escape' && latest === ref.current) {
        close();
      }
    };

    const close = () => {
      onCancel?.();
    };

    onReady?.();
    document.body.classList.add('has-modal');
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.classList.remove('has-modal');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onReady, onCancel, testId]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (cancelWithOverlayClick && event.target === event.currentTarget) {
      onCancel && onCancel();
    }
  };

  const modalClasses = cx(styles.Modal, className);

  return (
    <LazyMotion strict features={loadFeatures}>
      <div className={modalClasses} data-test-id={testId} ref={ref}>
        <m.div
          initial="hidden"
          animate="visible"
          variants={overlay}
          transition={{ duration: 0.15 }}
          role="presentation"
          className={styles['Modal-overlay']}
          onMouseDown={handleOverlayClick}
        >
          <FocusTrap autoFocus restoreFocus>
            <m.div
              initial="hidden"
              animate="visible"
              variants={content[transition]}
              role="dialog"
              aria-labelledby={modalLabelID}
              aria-modal
              className={styles['Modal-content']}
              tabIndex={-1}
            >
              {withCloseButton && (
                <IconButton
                  aria-label="close"
                  icon={<Close size="medium" />}
                  className={styles['Modal-close']}
                  onClick={onCancel}
                  data-test-id="Modal-close"
                />
              )}
              {children}
            </m.div>
          </FocusTrap>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export { Modal };
export type { ModalProps };
