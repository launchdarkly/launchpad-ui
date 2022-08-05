import type { ComponentStoryObj, DecoratorFn } from '@storybook/react';

import { Fragment } from 'react';

import { Button, ButtonGroupSpacing, ButtonKind } from '../src';
import { ButtonGroup } from '../src/ButtonGroup';

import './Button.stories.css';

const buttonTemplateWithStates: DecoratorFn = (storyComponent, context) => {
  const { viewMode, args } = context;

  const storyArgs = args;

  const ButtonLabels = ['Resting', 'Hover', 'Focus', 'Active'];
  const ButtonStates = ['', 'pseudo-hover', 'pseudo-focus', 'pseudo-active'];

  const PseudoStateButtons = ButtonStates.map((className, index) => (
    <Fragment key={`${className}_Button`}>
      <span className="Button-state-label">
        {ButtonLabels[ButtonLabels.length - 1 >= index ? index : ButtonLabels.length - 1]}
      </span>
      <ButtonGroup {...storyArgs}>
        <Button kind={ButtonKind.DEFAULT} className={className}>
          First
        </Button>
        <Button kind={ButtonKind.PRIMARY}>Second</Button>
      </ButtonGroup>
    </Fragment>
  ));
  if (viewMode === 'docs') {
    return storyComponent();
  }
  return (
    <div className="Storygroup-wrapper">
      {PseudoStateButtons}
      <span className="Button-state-label">Disabled</span>
      <ButtonGroup {...storyArgs}>
        <Button kind={ButtonKind.DEFAULT} disabled>
          First
        </Button>
        <Button kind={ButtonKind.PRIMARY}>Second</Button>
      </ButtonGroup>
    </div>
  );
};

export default {
  component: ButtonGroup,
  title: 'Components/Button/ButtonGroup',
  description: 'ButtonGroups group related actions and trigger them based on user interaction.',
  decorators: [buttonTemplateWithStates],
  parameters: {
    status: {
      type: process.env.PACKAGE_STATUS__BUTTON,
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
    spacing: {
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

type Story = ComponentStoryObj<typeof ButtonGroup>;

export const Basic: Story = {};

export const Compact: Story = {
  args: {
    spacing: ButtonGroupSpacing.COMPACT,
  },
};

export const Large: Story = {
  args: {
    spacing: ButtonGroupSpacing.LARGE,
  },
};
