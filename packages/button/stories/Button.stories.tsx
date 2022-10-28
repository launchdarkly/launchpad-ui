import type { StoryObj, DecoratorFn } from '@storybook/react';

import { Fragment } from 'react';

import { Add } from '../../icons/src';
import { Button } from '../src';

import './Button.stories.css';

const buttonTemplateWithStates: DecoratorFn = (storyComponent, context) => {
  const { viewMode, args } = context;

  const storyArgs = args;
  const buttonLabel = storyArgs?.children || '';

  const ButtonLabels = ['Hover', 'Focus visible', 'Active'];
  const ButtonStates = ['pseudo-hover', 'pseudo-focus-visible', 'pseudo-active'];

  const PseudoStateButtons = ButtonStates.map((className, index) => (
    <Fragment key={`${className}_Button`}>
      <span className="Button-state-label">
        {ButtonLabels[ButtonLabels.length - 1 >= index ? index : ButtonLabels.length - 1]}
      </span>
      <div className={className}>
        <Button {...storyArgs}>{buttonLabel}</Button>
      </div>
    </Fragment>
  ));
  if (viewMode === 'docs') {
    return storyComponent();
  }
  return (
    <div className="Storygroup-wrapper">
      <span className="Button-state-label">Resting</span>
      {storyComponent()}
      {PseudoStateButtons}
      <span className="Button-state-label">Disabled</span>
      <Button {...storyArgs} disabled>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default {
  component: Button,
  title: 'Components/Button',
  description: 'Buttons trigger actions based on user interaction.',
  decorators: [buttonTemplateWithStates],
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__BUTTON,
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
    fit: {
      control: 'boolean',
      table: {
        category: 'Presentation',
      },
    },
    icon: {
      table: {
        category: 'Presentation',
        subcategory: 'Icon Button',
      },
    },
    isLoading: {
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
    renderIconFirst: {
      table: {
        category: 'Presentation',
        subcategory: 'Icon Button',
      },
    },
    size: {
      table: {
        category: 'Presentation',
      },
    },
    'aria-label': {
      table: {
        category: 'Content',
        subcategory: 'Accessibility',
      },
    },
    children: {
      table: {
        category: 'Content',
      },
    },
    loadingText: {
      table: {
        category: 'Content',
      },
    },
    id: {
      table: {
        category: 'DOM attributes',
      },
    },
    name: {
      table: {
        category: 'DOM attributes',
      },
    },
    tabIndex: {
      table: {
        category: 'DOM attributes',
        disable: true,
      },
    },
    type: {
      table: {
        category: 'DOM attributes',
      },
    },
    onClick: {
      table: {
        category: 'Functions',
        subcategory: 'Synthetic Events',
      },
    },
    onMouseEnter: {
      table: {
        category: 'Functions',
        subcategory: 'Synthetic Events',
      },
    },
    onMouseLeave: {
      table: {
        category: 'Functions',
        subcategory: 'Synthetic Events',
      },
    },
  },
};

type Story = StoryObj<typeof Button>;

export const Basic: Story = { args: { children: 'Basic' } };

export const Minimal: Story = { args: { children: 'Minimal', kind: 'minimal' } };

export const Primary: Story = { args: { children: 'Primary', kind: 'primary' } };

export const Destructive: Story = {
  args: { children: 'Destructive', kind: 'destructive' },
};

export const Link: Story = { args: { children: 'Link', kind: 'link' } };

export const AsAnchorChild: Story = {
  args: {
    children: <a href="/">Anchor tag</a>,
    asChild: true,
    icon: <Add size="medium" />,
    kind: 'destructive',
  },
};

export const WithIcon: Story = {
  args: { children: 'With icon', icon: <Add size="medium" /> },
};

export const WithIconPrimary: Story = {
  args: { children: 'With icon', icon: <Add size="medium" />, kind: 'primary' },
};

export const WithIconDestructive: Story = {
  args: {
    children: 'With icon',
    icon: <Add size="medium" />,
    kind: 'destructive',
  },
};

export const BasicTiny: Story = { args: { children: 'Example button', size: 'tiny' } };

export const BasicSmall: Story = { args: { children: 'Example button', size: 'small' } };

export const BasicBig: Story = { args: { children: 'Example button', size: 'big' } };
