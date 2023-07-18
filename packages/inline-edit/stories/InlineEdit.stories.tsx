import type { StoryObj } from '@storybook/react';

import { InlineEdit } from '../src';

export default {
  component: InlineEdit,
  title: 'Components/InlineEdit',
  description: 'An element used to display and allow inline editing of a form element value.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__INLINE_EDIT,
    },
  },
};

type Story = StoryObj<typeof InlineEdit>;

export const Example: Story = {
  args: {},
};
