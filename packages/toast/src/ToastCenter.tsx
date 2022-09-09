import type { ToastRecord } from './types';

import { cx } from 'classix';
import { AnimatePresence, LazyMotion, m } from 'framer-motion';

import { Toast } from './Toast';
import styles from './styles/ToastCenter.module.css';

const loadFeatures = () =>
  import(
    /* webpackChunkName: "lp-toast-framer-features" */
    /* webpackExports: "domAnimation" */
    'framer-motion'
  ).then((res) => res.domAnimation);

type ToastCenterProps = {
  className?: string;
  toasts: ToastRecord[];
  onDismiss(toastId: string): void;
};

const ToastCenter = ({ toasts, onDismiss, className }: ToastCenterProps) => {
  const classes = cx(styles.ToastCenter, className);

  return (
    <LazyMotion strict features={loadFeatures}>
      <div className={classes}>
        <AnimatePresence initial={false}>
          {toasts.map((item) => (
            <m.div
              className={styles['ToastCenter-item']}
              key={item._id}
              transition={{ ease: 'easeInOut' }}
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '0%' }}
            >
              <Toast
                kind={item.kind}
                content={item.content}
                onDismiss={() => onDismiss(item._id)}
              />
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export { ToastCenter };
export type { ToastCenterProps };
