import type { ComponentStoryObj } from '@storybook/react';

import { Lozenge, LozengeKind, LozengeSize } from '../src';

export default {
  component: Lozenge,
  title: 'Components/Lozenge',
  description: 'Lozenges can be used as visual indicators for tags.',
  argTypes: {
    className: {
      table: {
        category: 'Presentation',
      },
    },
    isClickable: {
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
    handleClick: {
      table: {
        category: 'Functions',
      },
    },
    handleKeyPress: {
      table: {
        category: 'Functions',
      },
    },
    ariaDisabled: {
      table: {
        category: 'Accessibility',
      },
    },
  },
};

type Story = ComponentStoryObj<typeof Lozenge>;

export const Default: Story = { args: { children: 'Example Lozenge', kind: LozengeKind.DEFAULT } };

export const Success: Story = { args: { children: 'Success Lozenge', kind: LozengeKind.SUCCESS } };

export const Warning: Story = { args: { children: 'Warning Lozenge', kind: LozengeKind.WARNING } };

export const Inactive: Story = {
  args: { children: 'Inactive Lozenge', kind: LozengeKind.INACTIVE },
};

export const Info: Story = { args: { children: 'Info Lozenge', kind: LozengeKind.INFO } };

export const Label: Story = { args: { children: 'Label Lozenge', kind: LozengeKind.LABEL } };

export const Large: Story = { args: { children: 'Large Lozenge', size: LozengeSize.LARGE } };

export const New: Story = { args: { children: 'New Lozenge', kind: LozengeKind.NEW } };

export const Flag: Story = { args: { children: 'Flag', kind: LozengeKind.FLAG } };

export const FlagOn: Story = {
  args: { children: 'ON', kind: LozengeKind.FLAG, className: 'Lozenge--flagOn' },
};

export const FlagOff: Story = {
  args: { children: 'OFF', kind: LozengeKind.FLAG, className: 'Lozenge--flagOff' },
};

export const Federal: Story = { args: { children: 'Federal Lozenge', kind: LozengeKind.FEDERAL } };

export const Beta: Story = { args: { children: 'Beta Lozenge', kind: LozengeKind.BETA } };
