import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Icon } from '@launchpad-ui/icons';
import { vars } from '@launchpad-ui/vars';

import { Select, SelectValue, Label, Button, ListBox, ListBoxItem, Popover } from '../src';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'React Aria Components/Select',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__COMPONENTS,
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: vars.size[240] }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Example: Story = {
  args: {
    children: (
      <>
        <Label>Label</Label>
        <Button>
          <SelectValue />
          <Icon name="chevron-down" size="small" />
        </Button>
        <Popover>
          <ListBox>
            <ListBoxItem>Item one</ListBoxItem>
            <ListBoxItem>Item two</ListBoxItem>
            <ListBoxItem>Item three</ListBoxItem>
          </ListBox>
        </Popover>
      </>
    ),
  },
};
