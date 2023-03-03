import type { StoryObj } from '@storybook/react';

import { Chip } from '../src';

export default {
  component: Chip,
  title: 'Components/Chip (Alpha)',
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

type Story = StoryObj<typeof Chip>;

export const Default: Story = { args: { children: 'Example', kind: 'default' } };

export const Success: Story = { args: { children: 'Success', kind: 'success' } };

export const Warning: Story = { args: { children: 'Warning', kind: 'warning' } };

export const Inactive: Story = {
  args: { children: 'Inactive', kind: 'inactive' },
};

export const Info: Story = { args: { children: 'Info', kind: 'info' } };

export const Label: Story = { args: { children: 'Label', kind: 'label' } };

export const Large: Story = { args: { children: 'Large', size: 'large' } };

export const New: Story = { args: { children: 'New', kind: 'new' } };

export const Federal: Story = { args: { children: 'Federal', kind: 'federal' } };

export const Beta: Story = { args: { children: 'Beta', kind: 'beta' } };

export const DefaultSubtle: Story = {
  args: { children: 'Example', kind: 'default', subtle: true },
};

export const SuccessSubtle: Story = {
  args: { children: 'Success', kind: 'success', subtle: true },
};

export const WarningSubtle: Story = {
  args: { children: 'Warning', kind: 'warning', subtle: true },
};
export const InfoSubtle: Story = { args: { children: 'Info', kind: 'info', subtle: true } };

export const LabelSubtle: Story = { args: { children: 'Label', kind: 'label', subtle: true } };

export const LargeLabel: Story = { args: { children: 'Large', size: 'large' } };

export const LargeSubtle: Story = { args: { children: 'Large', size: 'large', subtle: true } };

export const NewSubtle: Story = { args: { children: 'New', kind: 'new', subtle: true } };

export const FederalSubtle: Story = {
  args: { children: 'Federal', kind: 'federal', subtle: true },
};

export const BetaSubtle: Story = { args: { children: 'Beta', kind: 'beta', subtle: true } };
