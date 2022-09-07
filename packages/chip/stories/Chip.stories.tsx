import type { ComponentStoryObj } from '@storybook/react';

import { Chip, ChipKind, ChipSize } from '../src';

export default {
  component: Chip,
  title: 'Components/Chip',
  description: 'Chips can be used as visual indicators for tags.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__CHIP,
    },
  },
  argTypes: {
    className: {
      table: {
        category: 'Presentation',
      },
    },
    kind: {
      table: {
        category: 'Presentation',
      },
    },
    size: {
      table: {
        category: 'Presentation',
      },
    },
    subtle: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
    onClick: {
      table: {
        category: 'Functions',
      },
    },
    onKeyDown: {
      table: {
        category: 'Functions',
      },
    },
  },
};

type Story = ComponentStoryObj<typeof Chip>;

export const Default: Story = { args: { children: 'Example Chip', kind: ChipKind.DEFAULT } };

export const Success: Story = { args: { children: 'Success Chip', kind: ChipKind.SUCCESS } };

export const Warning: Story = { args: { children: 'Warning Chip', kind: ChipKind.WARNING } };

export const Inactive: Story = {
  args: { children: 'Inactive Chip', kind: ChipKind.INACTIVE },
};

export const Info: Story = { args: { children: 'Info Chip', kind: ChipKind.INFO } };

export const Label: Story = { args: { children: 'Label Chip', kind: ChipKind.LABEL } };

export const Large: Story = { args: { children: 'Large Chip', size: ChipSize.LARGE } };

export const New: Story = { args: { children: 'New Chip', kind: ChipKind.NEW } };

export const Flag: Story = { args: { children: 'Flag', kind: ChipKind.FLAG } };

export const FlagOn: Story = {
  args: { children: 'ON', kind: ChipKind.FLAG, className: 'Chip--flagOn' },
};

export const FlagOff: Story = {
  args: { children: 'OFF', kind: ChipKind.FLAG, className: 'Chip--flagOff' },
};

export const Federal: Story = { args: { children: 'Federal Chip', kind: ChipKind.FEDERAL } };

export const Beta: Story = { args: { children: 'Beta Chip', kind: ChipKind.BETA } };
