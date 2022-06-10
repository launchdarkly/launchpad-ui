import type { Story } from '@storybook/react';

import { Checkbox, CheckboxProps } from '../src';

export default {
  component: Checkbox,
  title: 'Components/Form/Checkbox',
  description: 'A checkbox allows the user to toggle between checked and unchecked states.',
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

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: () => undefined,
  checked: false,
  disabled: false,
  children: 'This is the label',
};
