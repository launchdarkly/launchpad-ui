import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { expect, userEvent, within } from '@storybook/test';

import { Menu, MenuItem, MenuTrigger, Button, Popover } from '../src';

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: 'React Aria Components/Menu',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
    chromatic: { pauseAnimationAtEnd: true },
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ height: 'var(--lp-size-160)' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Example: Story = {
  render: (args) => {
    return (
      <MenuTrigger>
        <Button>Trigger</Button>
        <Popover>
          <Menu {...args}>
            <MenuItem>Item one</MenuItem>
            <MenuItem>Item two</MenuItem>
            <MenuItem>Item three</MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    );
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
    const body = canvasElement.ownerDocument.body;
    await expect(await within(body).findByRole('menu'));
  },
};
