import { Fragment } from 'react';
import type { DecoratorFn, Meta } from '@storybook/react';

import { Button, ButtonKind, ButtonSize } from '../src';
import './Button.stories.css';

import { Add } from '../../icon/src';
import { IconSize } from '../../icon/src/types';

const buttonTemplateWithStates: DecoratorFn = (storyComponent, context) => {
  const { viewMode, parameters } = context;

  const storyArgs = parameters.args;
  const buttonLabel = storyArgs?.children || '';

  const ButtonLabels = ['Hover', 'Focus', 'Active'];
  const ButtonStates = ['pseudo-hover', 'pseudo-focus', 'pseudo-active'];

  const PseudoStateButtons = ButtonStates.map((className, index) => (
    <Fragment key={`${className}_Button`}>
      <span className="button-state-label">
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
    <div className="storygroup-wrapper">
      <span className="button-state-label">Resting</span>
      {storyComponent()}
      {PseudoStateButtons}
      <span className="button-state-label">Disabled</span>
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
    outlined: {
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
    component: {
      table: {
        category: 'Content',
      },
    },
    href: {
      table: {
        category: 'Content',
        subcategory: 'Link Button',
      },
    },
    label: {
      table: {
        category: 'Content',
      },
    },
    loadingText: {
      table: {
        category: 'Content',
      },
    },
    rel: {
      table: {
        category: 'Content',
        subcategory: 'Link Button',
      },
    },
    target: {
      table: {
        category: 'Content',
        subcategory: 'Link Button',
      },
    },
    to: {
      table: {
        category: 'Content',
        subcategory: 'Link Button',
      },
    },
    /* tooltip: {
      table: {
        category: 'Content',
        subcategory: 'Button with Tooltip',
      },
    },
    tooltipOptions: {
      table: {
        category: 'Content',
        subcategory: 'Button with Tooltip',
      },
    }, */
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
} as Meta;

export const Basic = { args: { children: 'Basic' } };

export const Primary = { args: { children: 'Primary', kind: ButtonKind.PRIMARY } };

export const Destructive = { args: { children: 'Destructive', kind: ButtonKind.DESTRUCTIVE } };

export const Link = { args: { children: 'Link', kind: ButtonKind.LINK } };

export const BasicTiny = { args: { children: 'Example button', size: ButtonSize.TINY } };

export const BasicSmall = { args: { children: 'Example button', size: ButtonSize.SMALL } };

export const BasicBig = { args: { children: 'Example button', size: ButtonSize.BIG } };

export const WithIcon = {
  args: { children: 'With icon', icon: <Add size={IconSize.MEDIUM} /> },
};
