import type { ComponentStoryObj } from '@storybook/react';

import { Label, TextField } from '../src';

export default {
  component: Label,
  title: 'Components/Form/Label',
  description: 'A label describes a form field.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__FORM,
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
    optional: {
      table: {
        category: 'Presentation',
      },
    },
    style: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
    required: {
      table: {
        category: 'DOM Attributes',
      },
    },
    htmlFor: {
      table: {
        category: 'DOM Attributes',
      },
    },
  },
};

type Story = ComponentStoryObj<typeof Label>;

export const Default: Story = {
  args: {
    htmlFor: 'name',
    children: (
      <>
        Name
        <TextField id="name" />
      </>
    ),
  },
};
