/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import type { Selection as AriaSelection } from 'react-aria-components';

import { Icon } from '@launchpad-ui/icons';
import { expect, userEvent, within, waitFor } from '@storybook/test';
import { useState } from 'react';

import {
  Menu,
  MenuItem,
  MenuTrigger,
  SubmenuTrigger,
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
      <div style={{ height: 'var(--lp-size-320)' }}>
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
        <MenuItem>
          <Text slot="label">Item two</Text>
        </MenuItem>
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
    const [selected, setSelected] = useState<AriaSelection>(new Set(['react-aria-1']));

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

export const Icons: Story = {
  render: (args) => {
    return (
      <MenuTrigger>
        <Button>Trigger</Button>
        <Popover>
          <Menu {...args}>
            <MenuItem>
              <Text slot="label">
                <Icon name="add" size="small" /> Add
              </Text>
            </MenuItem>
            <MenuItem>
              <Icon name="edit" size="small" /> Edit
            </MenuItem>
            <MenuItem>
              <Icon name="delete" size="small" /> Delete
            </MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    );
  },
  ...open,
};

export const States: Story = {
  render: (args) => {
    return (
      <MenuTrigger>
        <Button>Trigger</Button>
        <Popover>
          <Menu {...args}>
            <MenuItem>Resting</MenuItem>
            <MenuItem>Active</MenuItem>
            <MenuItem>Focus Visible</MenuItem>
            <MenuItem>Disabled</MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    );
  },
  args: {
    disabledKeys: new Set(['react-aria-4']),
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
    const body = canvasElement.ownerDocument.body;

    const menuitems = await within(body).findAllByRole('menuitem');
    await userEvent.pointer([{ keys: '[TouchA>]', target: menuitems[1] }]);
    await userEvent.keyboard('{arrowdown}');
  },
};

export const Submenus: Story = {
  render: (args) => {
    return (
      <MenuTrigger>
        <Button>Trigger</Button>
        <Popover>
          <Menu {...args}>
            <MenuItem>Item one</MenuItem>
            <MenuItem>Item two</MenuItem>
            <MenuItem>Item three</MenuItem>
            <SubmenuTrigger>
              <MenuItem>Item four</MenuItem>
              <Popover>
                <Menu {...args}>
                  <MenuItem>Item five</MenuItem>
                  <MenuItem>Item six</MenuItem>
                  <SubmenuTrigger>
                    <MenuItem>Item seven</MenuItem>
                    <Popover>
                      <Menu {...args}>
                        <MenuItem>Item eight</MenuItem>
                        <MenuItem>Item nine</MenuItem>
                      </Menu>
                    </Popover>
                  </SubmenuTrigger>
                </Menu>
              </Popover>
            </SubmenuTrigger>
          </Menu>
        </Popover>
      </MenuTrigger>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
    const body = canvasElement.ownerDocument.body;
    const items = await within(body).findAllByRole('menuitem');
    await userEvent.hover(items[items.length - 1]);

    await waitFor(async () => {
      await expect(await within(body).findAllByRole('menu')).toHaveLength(2);
    });
    const subItems = await within(body).findAllByRole('menuitem');
    await userEvent.hover(subItems[subItems.length - 1]);
  },
};
