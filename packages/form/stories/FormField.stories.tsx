import type { ComponentStoryObj } from '@storybook/react';

import { FormField, TextField } from '../src';

export default {
  component: FormField,
  title: 'Components/Form/FormField',
  description:
    'A FormField is an opinionated way to organize form field components like labels, errors, hints, and the field itself."',
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

type Story = ComponentStoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    isRequired: true,
    label: 'Email',
    name: 'Email',
    htmlFor: 'Email',
    children: <TextField id="Email" value="testing@launchdarkly.com" />,
  },
};

export const WithError: Story = {
  args: {
    isRequired: true,
    label: 'Email',
    name: 'Email',
    htmlFor: 'Email',
    errorMessage: 'Oops, you entered an incorrect email.',
    isInvalid: true,
    children: <TextField id="Email" value="testing@launchdarkly.com" />,
  },
};

export const WithHint: Story = {
  args: {
    isRequired: true,
    label: 'Email',
    name: 'Email',
    htmlFor: 'Email',
    hint: 'Must be a valid email.',
    children: <TextField id="Email" value="testing@launchdarkly.com" />,
  },
};
