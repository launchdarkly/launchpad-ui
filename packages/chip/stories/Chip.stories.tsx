import type { StoryObj } from '@storybook/react';

import { Chip } from '../src';

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
  },
};

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { children: 'Default Chip' },
};

export const Success: Story = { args: { children: 'Success Chip', kind: 'success' } };

export const Warning: Story = { args: { children: 'Warning Chip', kind: 'warning' } };

export const Info: Story = { args: { children: 'Info Chip', kind: 'info' } };

export const Label: Story = { args: { children: 'Label Chip', kind: 'label' } };

export const New: Story = { args: { children: 'New Chip', kind: 'new' } };

export const Federal: Story = { args: { children: 'Federal Chip', kind: 'federal' } };

export const Beta: Story = { args: { children: 'Beta Chip', kind: 'beta' } };

export const Small: Story = { args: { children: 'Small Chip', size: 'small', kind: 'success' } };

export const Medium: Story = { args: { children: 'Medium Chip', size: 'medium', kind: 'success' } };

export const Interactive: Story = {
  args: {
    children: 'Interactive Chip',
    onClick: () => {
      alert('Chip clicked');
    },
  },
};

export const DefaultSubtle: Story = {
  args: { children: 'Example Chip', subtle: true },
};

export const SuccessSubtle: Story = {
  args: { children: 'Success Chip', kind: 'success', subtle: true },
};

export const WarningSubtle: Story = {
  args: { children: 'Warning Chip', kind: 'warning', subtle: true },
};
export const InfoSubtle: Story = { args: { children: 'Info Chip', kind: 'info', subtle: true } };

export const LabelSubtle: Story = { args: { children: 'Label Chip', kind: 'label', subtle: true } };

export const NewSubtle: Story = { args: { children: 'New Chip', kind: 'new', subtle: true } };

export const FederalSubtle: Story = {
  args: { children: 'Federal Chip', kind: 'federal', subtle: true },
};

export const BetaSubtle: Story = { args: { children: 'Beta Chip', kind: 'beta', subtle: true } };
