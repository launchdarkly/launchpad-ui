import { CopyToClipboard } from '@launchpad-ui/clipboard';
import { Lozenge } from '@launchpad-ui/lozenge';

export default function Index() {
  return (
    <CopyToClipboard text="Code content">
      <Lozenge>Code content</Lozenge>
    </CopyToClipboard>
  );
}
