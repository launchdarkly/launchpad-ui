import type { FormFieldProps } from '../src/FormField';
import type { StoryObj } from '@storybook/react';

import { FormField } from '../src/FormField';
import { useNumberField } from '../src/useNumberField';

const Demo = (props: Partial<FormFieldProps> = {}) => {
  const id = 'number-field';
  const { labelProps, descriptionProps, errorMessageProps, renderNumberField } = useNumberField({
    id,
  });

  return (
    <FormField
      isRequired={false}
      name={id}
      htmlFor={id}
      LabelProps={labelProps}
      FormHintProps={descriptionProps}
      FieldErrorProps={errorMessageProps}
      label={id}
      {...props}
    >
      {renderNumberField()}
    </FormField>
  );
};

export default {
  component: Demo,
  title: 'Components/Form/useNumberField',
  description: 'A text field allows the user to provide numeric values.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__FORM,
    },
  },
  argTypes: {
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

type Story = StoryObj<typeof Demo>;

export const Default: Story = {
  args: {
    label: 'Number field',
  },
};

export const Required: Story = {
  args: {
    label: 'Number field',
    isRequired: true,
  },
};

export const WithHint: Story = {
  args: {
    hint: 'Enter a number between 1 and 10.',
    label: 'Number field',
  },
};

export const WithError: Story = {
  args: {
    errorMessage: 'that number is incorrect',
    isInvalid: true,
    label: 'Number field',
  },
};
