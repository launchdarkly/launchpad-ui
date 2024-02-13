import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '../src';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'React Aria Components/Link',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Example: Story = {
  args: {
    children: 'Link',
    href: '#',
  },
};
