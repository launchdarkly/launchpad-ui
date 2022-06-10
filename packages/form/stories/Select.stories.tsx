import type { Story } from '@storybook/react';

import { Select, SelectProps } from '../src';

export default {
  component: Select,
  title: 'Components/Form/Select',
  description: 'A select field allows the user to select a value from a set of options."',
  argTypes: {
    testId: {
      control: 'text',
      table: {
        category: 'Testing',
        subcategory: 'Data attributes',
      },
    },
    className: {
      table: {
        category: 'Presentation',
      },
    },
    disabled: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
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

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'a',
  children: (
    <>
      <option value="a">a</option>
      <option value="b">b</option>
      <option value="c">c</option>
    </>
  ),
  onChange: () => undefined,
};
