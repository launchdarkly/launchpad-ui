import type { Story } from '@storybook/react';

import { CompactTextField, CompactTextFieldProps } from '../src';

export default {
  component: CompactTextField,
  title: 'Components/Form/CompactTextField',
  description: 'A compact text field allows the user to provide values.',
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

const Template: Story<CompactTextFieldProps> = (args) => <CompactTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'Email',
  label: 'Email',
  tiny: false,
  disabled: false,
  value: 'testing@launchdarkly.com',
  onChange: () => undefined,
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  id: 'Time',
  label: 'Time',
  suffix: 'seconds',
  tiny: false,
  disabled: false,
  value: '120',
  onChange: () => undefined,
};
