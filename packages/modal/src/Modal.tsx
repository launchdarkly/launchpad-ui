import type { Variants } from 'framer-motion';
import type { MouseEvent, ReactNode } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { Close } from '@launchpad-ui/icons';
import { FocusScope } from '@react-aria/focus';
import { usePreventScroll } from '@react-aria/overlays';
import { cx } from 'classix';
import { LazyMotion, m } from 'framer-motion';
import { useEffect, useRef } from 'react';

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
};

const Modal = ({
  className,
  withCloseButton = false,
  cancelWithOverlayClick = true,
  children,
  onReady = () => undefined,
  onCancel = () => undefined,
  modalLabelID = 'Modal-title',
  transition,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  usePreventScroll();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      event.stopImmediatePropagation();
      const latest = [...document.querySelectorAll('.Modal')].pop();
      if (event.key === 'Escape' && latest === ref.current) {
        close();
      }
    };

    const close = () => {
      onCancel && onCancel();
    };

    onReady && onReady();
    document.body.classList.add('has-modal');
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.classList.remove('has-modal');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onReady, onCancel]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (cancelWithOverlayClick && event.target === event.currentTarget) {
      onCancel && onCancel();
    }
  };

  const modalClasses = cx('Modal', className);

  return (
    <LazyMotion strict features={loadFeatures}>
      <div className={modalClasses} ref={ref}>
        <m.div
          initial="hidden"
          animate="visible"
          variants={overlay}
          transition={{ duration: 0.15 }}
          role="presentation"
          className="Modal-overlay"
          onMouseDown={handleOverlayClick}
        >
          <FocusScope autoFocus restoreFocus contain>
            <m.div
              initial="hidden"
              animate="visible"
              variants={content[transition]}
              role="dialog"
              aria-labelledby={modalLabelID}
              aria-modal
              className="Modal-content"
            >
              {withCloseButton && (
                <IconButton
                  aria-label="close"
                  icon={<Close size="medium" />}
                  className="Modal-close"
                  onClick={onCancel}
                  data-test-id="Modal-close"
                />
              )}
              {children}
            </m.div>
          </FocusScope>
        </m.div>
      </div>
    </LazyMotion>
  );
};

export { Modal };
export type { ModalProps };
