import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';

import { Button } from '../src';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'React Aria Components/Button',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Button>;

const renderStates = (args: Story['args']) => (
  <>
    <Button {...args} />
    <Button {...args} className="pseudo-hover" />
    <Button {...args} className="pseudo-focus-visible" />
    <Button {...args} className="pseudo-active" />
    <Button isDisabled {...args} />
  </>
);

export const Default: Story = {
  render: (args) => renderStates({ children: 'Default', ...args }),
};

export const Primary: Story = {
  render: (args) => renderStates({ children: 'Primary', variant: 'primary', ...args }),
};

export const Minimal: Story = {
  render: (args) => renderStates({ children: 'Minimal', variant: 'minimal', ...args }),
};

export const Destructive: Story = {
  render: (args) => renderStates({ children: 'Destructive', variant: 'destructive', ...args }),
};

export const PrimaryFlair: Story = {
  render: (args) => renderStates({ children: 'Primary flair', variant: 'primaryFlair', ...args }),
};

export const DefaultFlair: Story = {
  render: (args) => renderStates({ children: 'Default flair', variant: 'defaultFlair', ...args }),
};

export const MinimalFlair: Story = {
  render: (args) => renderStates({ children: 'Minimal flair', variant: 'minimalFlair', ...args }),
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        With icon <Icon name="add" size="small" />
      </>
    ),
  },
};
