import type { NotificationRecord } from './types';

import { animated, useTransition } from '@react-spring/web';
import classNames from 'classnames';

import { Notification } from './Notification';
import './styles/NotificationCenter.css';

type NotificationCenterProps = {
  className?: string;
  notifications: NotificationRecord[];
  onDismiss(notificationId: string): void;
};

const NotificationCenter = ({ notifications, onDismiss, className }: NotificationCenterProps) => {
  const notificationTransitions = {
    from: { transform: 'translate3d(100%,0,0)', opacity: 0 },
    enter: { transform: 'translate3d(0%,0,0)', opacity: 1 },
    leave: { transform: 'translate3d(100%,0,0)', opacity: 0 },
    config: {
      tension: 270,
    },
  };

  const transitions = useTransition(notifications, {
    keys: (item) => item._id,
    ...notificationTransitions,
  });

  const classes = classNames('NotificationCenter', className);

  return (
    <div className={classes}>
      {transitions((style, item) => (
        <animated.div className="NotificationAnimatedDiv" style={style}>
          <Notification
            level={item.level}
            ttl={item.ttl}
            message={item.message}
            details={item.details}
            onDismiss={() => onDismiss(item._id)}
          />
        </animated.div>
      ))}
    </div>
  );
};

export { NotificationCenter };
export type { NotificationCenterProps };
