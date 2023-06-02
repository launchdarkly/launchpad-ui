import type { StoryObj } from '@storybook/react';

import { CompactTextField } from '../src';

export default {
  component: CompactTextField,
  title: 'Components/Form/CompactTextField',
  description: 'A compact text field allows the user to provide values.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__FORM,
    },
  },
  argTypes: {
    disabled: {
      table: {
        category: 'Presentation',
      },
    },
    tiny: {
      table: {
        category: 'Presentation',
      },
    },
    label: {
      table: {
        category: 'Content',
      },
    },
    placeholder: {
      table: {
        category: 'Content',
      },
    },
    suffix: {
      table: {
        category: 'Content',
      },
    },
    id: {
      table: {
        category: 'DOM Attributes',
      },
    },
    name: {
      table: {
        category: 'DOM Attributes',
      },
    },
    ref: {
      table: {
        category: 'DOM Attributes',
      },
    },
    value: {
      table: {
        category: 'DOM Attributes',
      },
    },
    onChange: {
      table: {
        category: 'Functions',
        subcategory: 'Synthetic Events',
      },
    },
  },
};

type Story = StoryObj<typeof CompactTextField>;

export const Default: Story = {
  args: {
    id: 'Email',
    label: 'Email',
    tiny: false,
    disabled: false,
    value: 'testing@launchdarkly.com',
    onChange: () => undefined,
  },
};

export const WithSuffix: Story = {
  args: {
    id: 'Time',
    label: 'Time',
    suffix: 'seconds',
    tiny: false,
    disabled: false,
    value: '120',
    onChange: () => undefined,
  },
};
