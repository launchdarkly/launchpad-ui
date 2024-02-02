import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../src';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'React Aria Components/Checkbox',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Example: Story = {
  args: { children: 'Label' },
};

export const Indeterminate: Story = {
  args: { isIndeterminate: true, children: 'Label' },
};
