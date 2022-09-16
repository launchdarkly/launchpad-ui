import type { ComponentStoryObj } from '@storybook/react';

import { Button, ButtonGroup, ButtonKind } from '@launchpad-ui/button';

import { Alert, AlertKind, AlertSize } from '../src';

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
    kind: AlertKind.SUCCESS,
    children: 'Success Alert',
    dismissible: false,
  },
};

export const Warning: Story = {
  args: { kind: AlertKind.WARNING, children: 'Warning alert', dismissible: false },
};

export const Info: Story = {
  args: { kind: AlertKind.INFO, children: 'Info alert', dismissible: false },
};

export const Error: Story = {
  args: { kind: AlertKind.ERROR, children: 'Error alert', dismissible: false },
};

export const SmallInlineSuccess: Story = {
  args: {
    isInline: true,
    kind: AlertKind.SUCCESS,
    size: AlertSize.SMALL,
    children: 'Small Inline Success alert',
  },
};

export const SmallInlineWarning: Story = {
  args: {
    isInline: true,
    kind: AlertKind.WARNING,
    size: AlertSize.SMALL,
    children: 'Small Inline Warning alert',
  },
};

export const SmallInlineInfo: Story = {
  args: {
    isInline: true,
    kind: AlertKind.INFO,
    size: AlertSize.SMALL,
    children: 'Small Inline Info alert',
  },
};

export const SmallInlineError: Story = {
  args: {
    isInline: true,
    kind: AlertKind.ERROR,
    size: AlertSize.SMALL,
    children: 'Small Inline Error alert',
  },
};

export const Dismissible: Story = {
  args: { kind: AlertKind.INFO, children: 'Dismissible alert', dismissible: true },
};

export const WithHeader: Story = {
  args: { header: 'With Header', children: 'Warning alert', dismissible: true },
};

export const WithActions: Story = {
  args: {
    children: (
      <div>
        My description
        <ButtonGroup>
          <Button>Label</Button>
          <Button kind={ButtonKind.MINIMAL}>Label</Button>
        </ButtonGroup>
      </div>
    ),
    dismissible: true,
  },
};

export const WithContent: Story = {
  args: {
    children: (
      <>
        <p>My description</p>
        <ul>
          <li>This is item one of a list</li>
          <li>This is item two of a list</li>
        </ul>
        <ButtonGroup>
          <Button kind={ButtonKind.DEFAULT}>Label</Button>
          <Button kind={ButtonKind.MINIMAL}>Label</Button>
        </ButtonGroup>
      </>
    ),
    header: 'My title',
    dismissible: true,
  },
};
