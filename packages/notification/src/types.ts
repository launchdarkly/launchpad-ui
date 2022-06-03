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
  message: ReactNode;
  details?: string;
  ttl?: number;
};

export { NotificationLevel };
export type { NotificationRecord };
