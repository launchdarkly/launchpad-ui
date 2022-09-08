import type { SnackbarRecord } from './types';

import { cx } from 'classix';
import { AnimatePresence, LazyMotion, m } from 'framer-motion';

import { Snackbar } from './Snackbar';
import './styles/SnackbarCenter.css';

const loadFeatures = () =>
  import(
    /* webpackChunkName: "lp-snackbar-framer-features" */
    /* webpackExports: "domAnimation" */
    'framer-motion'
  ).then((res) => res.domAnimation);

type SnackbarCenterProps = {
  className?: string;
  snackbars: SnackbarRecord[];
  onDismiss(snackbarId: string): void;
};

const SnackbarCenter = ({ snackbars, onDismiss, className }: SnackbarCenterProps) => {
  const classes = cx('SnackbarCenter', className);

  return (
    <LazyMotion strict features={loadFeatures}>
      <div className={classes}>
        <AnimatePresence initial={false}>
          {snackbars.map((item) => (
            <m.div
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
                onDismiss={() => onDismiss(item._id)}
              />
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export { SnackbarCenter };
export type { SnackbarCenterProps };
