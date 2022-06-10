import type { Story } from '@storybook/react';

import { FormField, FormFieldProps, TextField } from '../src';

export default {
  component: FormField,
  title: 'Components/Form/FormField',
  description:
    'A FormField is an opinionated way to organize form field components like labels, errors, hints, and the field itself."',
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

const Template: Story<FormFieldProps> = (args) => <FormField {...args} />;

export const Default = Template.bind({});
Default.args = {
  isRequired: true,
  label: 'Email',
  name: 'Email',
  htmlFor: 'Email',
  children: <TextField id="Email" value="testing@launchdarkly.com" />,
};

export const WithError = Template.bind({});
WithError.args = {
  isRequired: true,
  label: 'Email',
  name: 'Email',
  htmlFor: 'Email',
  errorMessage: 'Oops, you entered an incorrect email.',
  isInvalid: true,
  children: <TextField id="Email" value="testing@launchdarkly.com" />,
};

export const WithHint = Template.bind({});
WithHint.args = {
  isRequired: true,
  label: 'Email',
  name: 'Email',
  htmlFor: 'Email',
  hint: 'Must be a valid email.',
  children: <TextField id="Email" value="testing@launchdarkly.com" />,
};
