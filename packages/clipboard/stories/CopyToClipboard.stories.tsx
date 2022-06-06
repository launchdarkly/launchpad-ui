import { CopyToClipboard } from '../src';

import './CopyToClipboard.stories.css';

export default {
  component: CopyToClipboard,
  title: 'Components/CopyToClipboard',
  description: 'Clipboards copy text to the clipboard.',
  argTypes: {
    children: {
      table: {
        category: 'Content',
      },
    },
    onClick: {
      table: {
        category: 'Functions',
      },
    },
  },
};

export const Default = {
  args: { text: 'Code content', children: <code>Code content</code> },
};
