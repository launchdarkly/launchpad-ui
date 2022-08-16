import { CopyToClipboard, Chip } from '@launchpad-ui/core';

export default function Index() {
  return (
    <CopyToClipboard text="Code content">
      <Chip>Code content</Chip>
    </CopyToClipboard>
  );
}
