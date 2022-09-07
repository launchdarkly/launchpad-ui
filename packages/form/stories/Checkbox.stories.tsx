import type { ComponentStoryObj } from '@storybook/react';

import { Checkbox } from '../src';

export default {
  component: Checkbox,
  title: 'Components/Form/Checkbox',
  description: 'A checkbox allows the user to toggle between checked and unchecked states.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__FORM,
    },
  },
  argTypes: {
    testId: {
      control: 'text',
      table: {
        category: 'Testing',
        subcategory: 'Data attributes',
      },
    },
    checked: {
      table: {
        category: 'Presentation',
      },
    },
    disabled: {
      table: {
        category: 'Presentation',
      },
    },
    labelClassName: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
    ref: {
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

type Story = ComponentStoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    onChange: () => undefined,
    checked: false,
    disabled: false,
    children: 'This is the label',
  },
};
