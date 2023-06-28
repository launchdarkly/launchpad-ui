import { Toast } from '@launchpad-ui/core';

export default function Index() {
  return <Toast kind="info" content="This is a toast." onDismiss={() => undefined} />;
}
