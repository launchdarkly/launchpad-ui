import type { ComponentStoryObj } from '@storybook/react';

import { ButtonKind } from '@launchpad-ui/button';
import { Menu, MenuItem } from '@launchpad-ui/menu';

import { SplitButton } from '../src';

export default {
  component: SplitButton,
  title: 'Components/SplitButton',
  description:
    'An element that presents an immediate action and additional options from a dropdown.',
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__SPLIT_BUTTON,
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
    disabled: {
      control: 'boolean',
      table: {
        category: 'Presentation',
      },
    },
    isLoading: {
      control: 'boolean',
      table: {
        category: 'Presentation',
      },
    },
    isMainButtonDisabled: {
      table: {
        category: 'Presentation',
      },
    },
    isOpen: {
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
    placement: {
      table: {
        category: 'Presentation',
      },
    },
    size: {
      table: {
        category: 'Presentation',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
    dropdownAriaLabel: {
      table: {
        category: 'Content',
        subcategory: 'Accessibility',
      },
    },
    loadingText: {
      table: {
        category: 'Content',
      },
    },
    dropButtonTooltip: {
      table: {
        category: 'Content',
        subcategory: 'SplitButton with Tooltip',
      },
    },
    mainButtonTooltip: {
      table: {
        category: 'Content',
        subcategory: 'SplitButton with Tooltip',
      },
    },
    tooltipOptions: {
      table: {
        category: 'Content',
        subcategory: 'SplitButton with Tooltip',
      },
    },
    name: {
      table: {
        category: 'DOM attributes',
      },
    },
    onClickDropdownButton: {
      table: {
        category: 'Functions',
        subcategory: 'Synthetic Events',
      },
    },
    onClickMainButton: {
      table: {
        category: 'Functions',
        subcategory: 'Synthetic Events',
      },
    },
    onInteraction: {
      table: {
        category: 'Functions',
        subcategory: 'Synthetic Events',
      },
    },
    onSelect: {
      table: {
        category: 'Functions',
        subcategory: 'Synthetic Events',
      },
    },
  },
};

type Story = ComponentStoryObj<typeof SplitButton>;

const SplitButtonArgs = {
  onSelect: () => undefined,
  onClickMainButton: () => undefined,
  name: 'Save changes',
  loadingText: 'Saving',
  children: (
    <Menu>
      <MenuItem onClick={() => undefined}>Save changes</MenuItem>
      <MenuItem onClick={() => undefined}>Save with comment</MenuItem>
    </Menu>
  ),
};

export const Example: Story = {
  args: {
    ...SplitButtonArgs,
    kind: ButtonKind.DEFAULT,
  },
};
