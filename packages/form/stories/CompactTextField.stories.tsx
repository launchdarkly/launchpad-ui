import type { Story } from '@storybook/react';

import { CompactTextField, CompactTextFieldProps } from '../src';

export default {
  component: CompactTextField,
  title: 'Components/Form/CompactTextField',
  description: 'A compact text field allows the user to provide values.',
  parameters: {
    storyshots: { disable: true }, // disable snapshot tests due to error with `formState`
  },
  argTypes: {
    testId: {
      control: 'text',
      table: {
        category: 'Testing',
        subcategory: 'Data attributes',
      },
    },
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

export const Example: Story<CompactTextFieldProps> = (args) => <CompactTextField {...args} />;

Example.args = {
  id: 'Email',
  label: 'Email',
  tiny: false,
  disabled: false,
  value: 'testing@launchdarkly.com',
  onChange: () => undefined,
};
