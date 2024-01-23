import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';
import { userEvent, within } from '@storybook/test';

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
  <div
    style={{
      display: 'grid',
      gridTemplateRows: '1fr',
      gridTemplateColumns: `${vars.size[128]} auto`,
      gap: vars.spacing[400],
      alignItems: 'center',
    }}
  >
    <>
      <span style={{ font: vars.body[1].semibold }}>Resting</span>
      <Button {...args} />
    </>
    <>
      <span style={{ font: vars.body[1].semibold }}>Hover</span>
      <Button {...args} />
    </>
    <>
      <span style={{ font: vars.body[1].semibold }}>Focus</span>
      <Button {...args} />
    </>
    <>
      <span style={{ font: vars.body[1].semibold }}>Active</span>
      <Button {...args} />
    </>
    <>
      <span style={{ font: vars.body[1].semibold }}>Disabled</span>
      <Button isDisabled {...args} />
    </>
  </div>
);

const states = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    const buttons = canvas.getAllByRole('button');
    await userEvent.hover(buttons[1]);
    await userEvent.pointer([{ keys: '[TouchA>]', target: buttons[3] }]);
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
  },
};

export const Default: Story = {
  render: (args) => renderStates({ children: 'Default', ...args }),
  ...states,
};

export const Primary: Story = {
  render: (args) => renderStates({ children: 'Primary', variant: 'primary', ...args }),
  ...states,
};

export const Minimal: Story = {
  render: (args) => renderStates({ children: 'Minimal', variant: 'minimal', ...args }),
  ...states,
};

export const Destructive: Story = {
  render: (args) => renderStates({ children: 'Destructive', variant: 'destructive', ...args }),
  ...states,
};

export const PrimaryFlair: Story = {
  render: (args) => renderStates({ children: 'Primary flair', variant: 'primaryFlair', ...args }),
  ...states,
};

export const DefaultFlair: Story = {
  render: (args) => renderStates({ children: 'Default flair', variant: 'defaultFlair', ...args }),
  ...states,
};

export const MinimalFlair: Story = {
  render: (args) => renderStates({ children: 'Minimal flair', variant: 'minimalFlair', ...args }),
  ...states,
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

export const Small: Story = {
  render: (args) => renderStates({ children: 'Default', size: 'small', ...args }),
  ...states,
};

export const Large: Story = {
  render: (args) => renderStates({ children: 'Default', size: 'large', ...args }),
  ...states,
};
