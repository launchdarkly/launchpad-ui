import type { StoryObj } from '@storybook/react';

import { local, container } from './Story.css';

export default {
  title: 'Styles/Vars',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__VARS,
    },
  },
};

type Story = StoryObj;

export const Example: Story = {
  render: () => (
    <div className={container}>I&apos;m styled by Vanilla Extract using our tokens</div>
  ),
};

export const LocalScoped: Story = {
  render: () => <div className={local} />,
};
