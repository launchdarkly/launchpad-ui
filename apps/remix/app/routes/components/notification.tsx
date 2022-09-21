import { Notification } from '@launchpad-ui/core';

export default function Index() {
  return (
    <Notification level="success" message="This is a notification" onDismiss={() => undefined} />
  );
}
