import type { ComponentStoryObj } from '@storybook/react';

import { Button, ButtonGroup } from '@launchpad-ui/button';

import { Alert } from '../src';

export default {
  component: Alert,
  title: 'Components/Alert',
  description: 'Actions trigger alerts based on user interaction.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__ALERT,
    },
  },
  argTypes: {
    testId: {
      control: 'text',
      table: {
        category: 'Testing',
        subcategory: 'Data attributes',
      },
    },
    className: {
      table: {
        category: 'Presentation',
      },
    },
    compact: {
      control: 'boolean',
      table: {
        category: 'Presentation',
        subcategory: 'Sizing',
      },
    },
    isInline: {
      control: 'boolean',
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
        subcategory: 'Sizing',
      },
    },
    wide: {
      control: 'boolean',
      table: {
        category: 'Presentation',
        subcategory: 'Sizing',
      },
    },
    dismissible: {
      control: 'boolean',
      table: {
        category: 'Presentation',
      },
    },
    onDismiss: {
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

type Story = ComponentStoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    kind: 'success',
    children: 'Success Alert',
    dismissible: false,
  },
};

export const Warning: Story = {
  args: { kind: 'warning', children: 'Warning alert', dismissible: false },
};

export const Info: Story = {
  args: { kind: 'info', children: 'Info alert', dismissible: false },
};

export const Error: Story = {
  args: { kind: 'error', children: 'Error alert', dismissible: false },
};

export const SmallInlineSuccess: Story = {
  args: {
    isInline: true,
    kind: 'success',
    size: 'small',
    children: 'Small Inline Success alert',
  },
};

export const SmallInlineWarning: Story = {
  args: {
    isInline: true,
    kind: 'warning',
    size: 'small',
    children: 'Small Inline Warning alert',
  },
};

export const SmallInlineInfo: Story = {
  args: {
    isInline: true,
    kind: 'info',
    size: 'small',
    children: 'Small Inline Info alert',
  },
};

export const SmallInlineError: Story = {
  args: {
    isInline: true,
    kind: 'error',
    size: 'small',
    children: 'Small Inline Error alert',
  },
};

export const Dismissible: Story = {
  args: { kind: 'info', children: 'Dismissible alert', dismissible: true },
};

export const WithHeader: Story = {
  args: { header: 'With Header', children: 'Warning alert', dismissible: true },
};

export const WithActions: Story = {
  args: {
    children: (
      <div>
        <div>My description</div>
        <ButtonGroup>
          <Button kind="primary">Label</Button>
          <Button>Label</Button>
        </ButtonGroup>
      </div>
    ),
    dismissible: true,
  },
};
