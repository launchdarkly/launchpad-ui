import type { StoryObj } from '@storybook/react';

import { NumberField } from '../src/NumberField';

export default {
  component: NumberField,
  title: 'Components/Form/NumberField',
  description: 'A text field allows the user to provide numeric values.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__FORM,
    },
  },
  argTypes: {
    disabled: {
      table: {
        category: 'Presentation',
      },
    },
    id: {
      table: {
        category: 'DOM Attributes',
      },
    },
    ref: {
      table: {
        category: 'DOM Attributes',
      },
    },
    label: {
      table: {
        category: 'Content',
      },
    },
    labelClassName: {
      table: {
        category: 'Presentation',
      },
    },
    inputClassName: {
      table: {
        category: 'Presentation',
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
        subCategory: 'Synthetic Events',
      },
    },
  },
};

type Story = StoryObj<typeof NumberField>;

export const Default: Story = {
  render(props) {
    return (
      <div>
        <NumberField {...props} />
      </div>
    );
  },
  args: {
    label: 'Number field',
    defaultValue: 0,
  },
};
