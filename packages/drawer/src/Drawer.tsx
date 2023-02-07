import type { Variants } from 'framer-motion';
import type { MouseEvent, ReactNode } from 'react';

import { IconButton } from '@launchpad-ui/button';
import { FocusTrap } from '@launchpad-ui/focus-trap';
import { Close } from '@launchpad-ui/icons';
import { Portal } from '@launchpad-ui/portal';
import { Progress } from '@launchpad-ui/progress';
import { usePreventScroll } from '@react-aria/overlays';
import { cx } from 'classix';
import { LazyMotion, m } from 'framer-motion';
import { Suspense, useEffect, useRef } from 'react';

import { DRAWER_LABELLED_BY } from './constants';
import styles from './styles/Drawer.module.css';

const overlay: Variants = {
  visible: { opacity: 1, transition: { duration: 0.15 } },
  hidden: { opacity: 0 },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: '25%' },
  visible: {
    opacity: 1,
    x: '0%',
    transition: { type: 'spring', delay: 0.15, duration: 0.2, bounce: 0 },
  },
};

const loadFeatures = () =>
  import(
    /* webpackChunkName: "lp-drawer-framer-features" */
    /* webpackExports: "domAnimation" */
    'framer-motion'
  ).then((res) => res.domAnimation);

type DrawerProps = {
  children?: ReactNode;
  className?: string;
  onCancel?(): void;
  'data-test-id'?: string;
  size?: 'small' | 'medium' | 'large' | 'xLarge' | 'full';
  hideCancel?: boolean;
};

const Drawer = ({
  className,
  children,
  onCancel,
  size = 'small',
  'data-test-id': testId = 'drawer',
  hideCancel = false,
}: DrawerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  usePreventScroll();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      event.stopImmediatePropagation();
      const latest = [...document.querySelectorAll('[data-drawer]')].pop();
      if (event.key === 'Escape' && latest === ref.current) {
        close();
      }
    };

    const close = () => {
      onCancel?.();
    };

    document.body.classList.add('has-overlay');
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.classList.remove('has-overlay');
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onCancel, testId]);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCancel && onCancel();
    }
  };

  return (
    <Portal>
      <LazyMotion strict features={loadFeatures}>
        <div
          className={cx(styles.drawer, styles[size], className)}
          data-drawer
          data-test-id={testId}
          ref={ref}
        >
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
                variants={slideRight}
                role="dialog"
                aria-labelledby={DRAWER_LABELLED_BY}
                aria-modal
                className={styles.content}
                tabIndex={-1}
              >
                {!hideCancel && (
                  <IconButton
                    aria-label="close"
                    icon={<Close size="medium" />}
                    className={styles.closeButton}
                    onClick={onCancel}
                    data-test-id="drawer-close-button"
                  />
                )}
                <Suspense fallback={<Progress />}>{children}</Suspense>
              </m.div>
            </FocusTrap>
          </m.div>
        </div>
      </LazyMotion>
    </Portal>
  );
};

export { Drawer };
export type { DrawerProps };
