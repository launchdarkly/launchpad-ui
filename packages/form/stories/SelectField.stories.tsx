import type { StoryObj } from '@storybook/react';

import { SelectField } from '../src';

export default {
  component: SelectField,
  title: 'Components/Form/SelectField',
  description: 'A select field allows the user to select a value from a set of options."',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__FORM,
    },
  },
  argTypes: {
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

type Story = StoryObj<typeof SelectField>;

export const Default: Story = {
  args: {
    value: 'a',
    name: 'select',
    'aria-label': 'select',
    children: (
      <>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </>
    ),
    onChange: () => undefined,
  },
};
