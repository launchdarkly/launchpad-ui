import type { ComponentStoryObj } from '@storybook/react';

import { SAMPLE_MARKDOWN } from '../__tests__/constants';
import { Markdown } from '../src';

export default {
  component: Markdown,
  title: 'Components/Markdown',
  description: 'Render formatted plaintext.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__MARKDOWN,
    },
  },
  argTypes: {
    className: {
      table: {
        category: 'Presentation',
      },
    },
    source: {
      table: {
        category: 'Content',
      },
    },
    allowedTags: {
      table: {
        category: 'DOM attributes',
      },
    },
    baseUri: {
      table: {
        category: 'DOM attributes',
      },
    },
    container: {
      table: {
        category: 'DOM attributes',
      },
    },
    textRef: {
      table: {
        category: 'DOM attributes',
      },
    },
  },
};

type Story = ComponentStoryObj<typeof Markdown>;

export const Example: Story = {
  args: {
    baseUri: 'https://app.launchdarkly.com',
    source: SAMPLE_MARKDOWN,
  },
};
