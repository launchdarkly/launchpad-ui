import { Chip, CopyToClipboard } from '@launchpad-ui/core';

export default function Index() {
  return (
    <CopyToClipboard text="Code content">
      <Chip>Code content</Chip>
    </CopyToClipboard>
  );
}
