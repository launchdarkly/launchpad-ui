/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import type { Selection as AriaSelection } from 'react-aria-components';

import { expect, userEvent, within } from '@storybook/test';
import { useState } from 'react';

import {
  Menu,
  MenuItem,
  MenuTrigger,
  Header,
  Keyboard,
  Section,
  Separator,
  Text,
  Button,
  Popover,
} from '../src';

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
      <div style={{ height: 'var(--lp-size-224)' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Menu>;

const renderMenu = (args: Story['args']) => (
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

const open = {
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
    const body = canvasElement.ownerDocument.body;
    await expect(await within(body).findByRole('menu'));
  },
};

export const Example: Story = {
  render: (args) => renderMenu(args),
  ...open,
};

export const Grouping: Story = {
  render: (args) => {
    return (
      <MenuTrigger>
        <Button>Trigger</Button>
        <Popover>
          <Menu {...args}>
            <Section>
              <Header>Group 1</Header>
              <MenuItem>Item one</MenuItem>
              <MenuItem>Item two</MenuItem>
            </Section>
            <Separator />
            <Section>
              <Header>Group 2</Header>
              <MenuItem>Item three</MenuItem>
            </Section>
          </Menu>
        </Popover>
      </MenuTrigger>
    );
  },
  ...open,
};

export const Selection: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<AriaSelection>(new Set());

    return renderMenu({
      selectedKeys: selected,
      onSelectionChange: setSelected,
      ...args,
    });
  },
  args: {
    selectionMode: 'single',
  },
  ...open,
};

export const Descriptions: Story = {
  render: (args) => {
    return (
      <MenuTrigger>
        <Button>Trigger</Button>
        <Popover>
          <Menu {...args}>
            <MenuItem>
              <Text slot="label">Copy</Text>
              <Text slot="description">Copy the selected text</Text>
              <Keyboard>⌘C</Keyboard>
            </MenuItem>
            <MenuItem>
              <Text slot="label">Paste</Text>
              <Text slot="description">Paste the copied text</Text>
              <Keyboard>⌘V</Keyboard>
            </MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    );
  },
  ...open,
};
