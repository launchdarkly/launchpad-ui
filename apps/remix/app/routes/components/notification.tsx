import { Notification, NotificationLevel } from '@launchpad-ui/core';

export default function Index() {
  return (
    <Notification
      level={NotificationLevel.SUCCESS}
      message="This is a notification"
      onDismiss={() => undefined}
    />
  );
}
