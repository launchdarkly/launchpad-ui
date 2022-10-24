import type { SnackbarBaseProps } from './Snackbar';

import { cx } from 'classix';
import { AnimatePresence, LazyMotion, m } from 'framer-motion';

import { Snackbar } from './Snackbar';
import styles from './styles/SnackbarCenter.module.css';

const loadFeatures = () =>
  import(
    /* webpackChunkName: "lp-snackbar-framer-features" */
    /* webpackExports: "domAnimation" */
    'framer-motion'
  ).then((res) => res.domAnimation);

type SnackbarRecord = SnackbarBaseProps & {
  _id: string;
};

type SnackbarCenterProps = {
  className?: string;
  snackbars: SnackbarRecord[];
  dismissSnackbar(snackbarId: string): void;
};

const SnackbarCenter = ({ snackbars, dismissSnackbar, className }: SnackbarCenterProps) => {
  const classes = cx(styles.SnackbarCenter, className);

  const handleDismiss = (item: SnackbarRecord) => {
    item.onDismiss?.();
    dismissSnackbar(item._id);
  };

  return (
    <LazyMotion strict features={loadFeatures}>
      <div className={classes}>
        <AnimatePresence initial={false}>
          {snackbars.map((item) => (
            <m.div
              className={styles['SnackbarCenter-item']}
              key={item._id}
              transition={{ ease: 'easeInOut' }}
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
            >
              <Snackbar
                kind={item.kind}
                description={item.description}
                header={item.header}
                cta={item.cta}
                onDismiss={() => handleDismiss(item)}
              />
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export { SnackbarCenter };
export type { SnackbarCenterProps, SnackbarRecord };
