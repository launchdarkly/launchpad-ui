import type { NotificationProps } from './Notification';
import type { ReactNode } from 'react';

import { cx } from 'classix';
import { AnimatePresence, LazyMotion, m } from 'framer-motion';

import { Notification } from './Notification';
import './styles/NotificationCenter.css';

const loadFeatures = () =>
  import(
    /* webpackChunkName: "lp-notification-framer-features" */
    /* webpackExports: "domAnimation" */
    'framer-motion'
  ).then((res) => res.domAnimation);

type NotificationRecord = {
  _id: string;
  level: NotificationProps['level'];
  message: ReactNode;
  details?: string;
  ttl?: number;
};

type NotificationCenterProps = {
  className?: string;
  notifications: NotificationRecord[];
  onDismiss(notificationId: string): void;
};

/**
 * @deprecated use snackbar or toast instead
 */
const NotificationCenter = ({ notifications, onDismiss, className }: NotificationCenterProps) => {
  const classes = cx('NotificationCenter', className);

  return (
    <LazyMotion strict features={loadFeatures}>
      <div className={classes}>
        <AnimatePresence initial={false}>
          {notifications.map((item) => (
            <m.div
              className="NotificationContainer"
              key={item._id}
              transition={{ type: 'spring', delay: 0.15, duration: 0.45 }}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
            >
              <Notification
                level={item.level}
                ttl={item.ttl}
                message={item.message}
                details={item.details}
                onDismiss={() => onDismiss(item._id)}
              />
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
};

export { NotificationCenter };
export type { NotificationCenterProps, NotificationRecord };
