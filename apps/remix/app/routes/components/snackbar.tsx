import { Snackbar, SnackbarKind } from '@launchpad-ui/core';

export default function Index() {
  return <Snackbar kind={SnackbarKind.INFO} description="This is a snackbar." />;
}
