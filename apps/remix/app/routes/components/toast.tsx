import { Toast, ToastKind } from '@launchpad-ui/core';

export default function Index() {
  return <Toast kind={ToastKind.INFO} content="This is a toast." />;
}
