import type { StoryObj, Decorator, StoryFn } from '@storybook/react';

import { createWithClassesDecorator, PseudoClasses } from '../../../.storybook/utils';
import { TextField } from '../src';

import './TextArea.stories.css';

const chromaticTestStyles = [PseudoClasses.HOVER, PseudoClasses.FOCUS, PseudoClasses.ACTIVE];
const withRestingAndDisabledStates: Decorator = (story, context) => {
  const { originalStoryFn, args, viewMode } = context;
  // Original typing is not entirely accurate.
  // It passes everything in the first arg as a prop
  // to the component which it not ideal
  const originalTemplate = originalStoryFn as StoryFn;

  if (viewMode === 'docs') {
    return story();
  }
  return (
    <div className="Textarea-storygroup-wrapper">
      <span className="Textarea-state-label">Resting</span>
      {story()}
      {originalTemplate && (
        <>
          <span className="Textarea-state-label">Disabled</span>
          {originalTemplate({ ...args, disabled: true, id: 'Disabled' }, context)}
          <span className="Textarea-state-label">Empty</span>
          {originalTemplate(
            { ...args, value: '', placeholder: 'Enter text here', id: 'Empty' },
            context
          )}
        </>
      )}
    </div>
  );
};

export default {
  component: TextField,
  title: 'Components/Form/TextField',
  description: 'A text field allows the user to provide values."',
  decorators: [
    createWithClassesDecorator(chromaticTestStyles, (args, storyFn, context) => {
      let stateName = args.className || '';
      stateName = stateName.replace(/pseudo-|u-w4/gi, '');

      const fieldId = stateName[0].toUpperCase() + stateName.slice(1);
      return (
        <>
          <span className="Textarea-state-label">{stateName}</span>
          {storyFn({ ...args, id: fieldId }, context)}
        </>
      );
    }),
    withRestingAndDisabledStates,
  ],
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__FORM,
    },
  },
  argTypes: {
    disabled: {
      table: {
        category: 'Presentation',
      },
    },
    tiny: {
      table: {
        category: 'Presentation',
      },
    },
    suffix: {
      table: {
        category: 'Content',
      },
    },
    id: {
      table: {
        category: 'DOM Attributes',
      },
    },
    value: {
      table: {
        category: 'DOM Attributes',
      },
    },
    onChange: {
      table: {
        category: 'Functions',
        subcategory: 'Synthetic Events',
      },
    },
  },
};

type Story = StoryObj<typeof TextField>;

export const Example: Story = {
  render: ({ id = '', ...args }) => {
    const textFieldId = `${id} Text Field`;
    return (
      <div>
        <TextField id={textFieldId} {...args} />
      </div>
    );
  },
  args: {
    tiny: false,
    disabled: false,
    value: 'I am a text field!',
    onChange: () => undefined,
    id: 'Resting',
  },
};

export const NumberWithSuffix: Story = {
  render: ({ id = '', ...args }) => {
    const numberFieldId = `${id} Number Field`;
    return (
      <div className="Textarea-number-wrapper">
        <TextField {...args} id={numberFieldId} />
      </div>
    );
  },
  args: {
    tiny: true,
    className: 'u-w4',
    type: 'number',
    id: 'Resting',
    value: 50,
    disabled: false,
    suffix: '%',
  },
};
