import type { StoryObj } from '@storybook/react';

import { Label, RequiredAsterisk, TextField, FormHint, FormGroup } from '../src';

export default {
  component: FormGroup,
  title: 'Components/Form/FormGroup',
  description: 'A group of form fields.',
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
    children: {
      table: {
        category: 'Content',
      },
    },
    isInvalid: {
      table: {
        category: 'Content',
      },
    },
    ignoreValidation: {
      table: {
        category: 'Content',
      },
    },
    name: {
      table: {
        category: 'DOM Attributes',
      },
    },
  },
};

type Story = StoryObj<typeof FormGroup>;

export const Default: Story = {
  args: {
    name: 'key',
    children: (
      <>
        <Label htmlFor="key">
          Key <RequiredAsterisk />
        </Label>
        <TextField id="key" name="key" />
        <FormHint>Use this key in your code.</FormHint>
      </>
    ),
  },
  render: () => {
    return (
      <>
        <p>
          A FormGroup is a wrapper to a form section that provides vertical spacing via top and
          bottom margin.
        </p>
        <p>Below are two fields each wrapped in a FormGroup.</p>
        <FormGroup>
          <Label htmlFor="key">
            Key <RequiredAsterisk />
          </Label>
          <TextField id="key" name="key" />
          <FormHint>Use this key in your code.</FormHint>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="key">
            Key <RequiredAsterisk />
          </Label>
          <TextField id="key" name="key" />
          <FormHint>Use this key in your code.</FormHint>
        </FormGroup>
      </>
    );
  },
};
