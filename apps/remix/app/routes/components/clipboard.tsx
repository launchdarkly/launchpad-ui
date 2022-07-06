import { CopyToClipboard, Lozenge } from '@launchpad-ui/core';

export default function Index() {
  return (
    <CopyToClipboard text="Code content">
      <Lozenge>Code content</Lozenge>
    </CopyToClipboard>
  );
}
