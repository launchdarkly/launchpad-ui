import type { Story } from '@storybook/react';

import { Label, LabelProps, TextField } from '../src';

export default {
  component: Label,
  title: 'Components/Form/Label',
  description: 'A label describes a form field.',
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

export const Example: Story<LabelProps> = (args) => <Label {...args} />;
Example.args = {
  htmlFor: 'name',
  children: (
    <>
      Name
      <TextField id="name" />
    </>
  ),
};
