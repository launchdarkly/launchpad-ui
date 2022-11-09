import type { ModalProps } from './Modal';
import type { Variants } from 'framer-motion';
import type { MouseEvent } from 'react';

import { FocusTrap } from '@launchpad-ui/focus-trap';
import { usePreventScroll } from '@react-aria/overlays';
import { cx } from 'classix';
import { LazyMotion, m } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { MODAL_LABELLED_BY } from './constants';
import styles from './styles/Modal.module.css';
import { useMediaQuery } from './utils';

const overlay: Variants = {
  visible: { opacity: 1, transition: { duration: 0.15 } },
  hidden: { opacity: 0 },
};

const transitions: { [key: string]: Variants } = {
  desktopPop: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', delay: 0.1, duration: 0.15 } },
  },
  mobileSlideUp: {
    hidden: { opacity: 0, y: '25%' },
    visible: {
      opacity: 1,
      y: '0%',
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

type ModalContainerProps = Pick<
  ModalProps,
  | 'children'
  | 'cancelWithOverlayClick'
  | 'onCancel'
  | 'size'
  | 'className'
  | 'onReady'
  | 'data-test-id'
>;

const ModalContainer = ({
  cancelWithOverlayClick = true,
  children,
  onCancel,
  size = 'normal',
  className,
  onReady,
  'data-test-id': testId,
}: ModalContainerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  usePreventScroll();

  const isDesktopViewport = useMediaQuery('(min-width: 430px)');

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (cancelWithOverlayClick && event.target === event.currentTarget) {
      onCancel && onCancel();
    }
  };

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
  }, [onReady, onCancel]);

  return (
    <LazyMotion strict features={loadFeatures}>
      <div
        className={styles.overlayContainer}
        data-modal
        data-test-id="modal-overlay-container"
        ref={ref}
      >
        <m.div
          initial="hidden"
          animate="visible"
          variants={overlay}
          transition={{ duration: 0.15 }}
          role="presentation"
          className={styles.overlay}
          data-test-id="modal-overlay"
          onMouseDown={handleOverlayClick}
        >
          <FocusTrap autoFocus restoreFocus>
            <m.div
              initial="hidden"
              animate="visible"
              variants={isDesktopViewport ? transitions.desktopPop : transitions.mobileSlideUp}
              role="dialog"
              aria-labelledby={MODAL_LABELLED_BY}
              aria-modal
              data-test-id={testId}
              className={cx(styles.modal, styles[size], className)}
              tabIndex={-1}
            >
              {children}
            </m.div>
          </FocusTrap>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export { ModalContainer };
export type { ModalContainerProps };
