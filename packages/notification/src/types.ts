import type { ReactNode } from 'react';

enum NotificationLevel {
  ERROR = 'error',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
}

type NotificationRecord = {
  _id: string;
  level: NotificationLevel;
  ttl: number;
  message: ReactNode;
  details: string;
};

export { NotificationLevel };
export type { NotificationRecord };
