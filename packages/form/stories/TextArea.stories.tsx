import type { ComponentStoryObj, DecoratorFn, StoryFn } from '@storybook/react';

import { createWithClassesDecorator, PseudoClasses } from '../../../.storybook/utils';
import { Label, TextArea } from '../src';

import './TextArea.stories.css';

const testingChromaticClassNames = [PseudoClasses.HOVER, PseudoClasses.FOCUS, PseudoClasses.ACTIVE];
const withRestingAndDisabledStates: DecoratorFn = (story, context) => {
  const { args, viewMode, originalStoryFn } = context;
  // The type provided don't seem to be correct,
  // componentId for example is required but it is
  // being passed as a prop to the component causing
  // errors to be shown the in console.
  const originalTemplate = originalStoryFn as StoryFn;
  if (viewMode === 'docs') {
    return story();
  }
  const finalArgs = {
    ...args,
    id: 'Disabled',
    disabled: true,
  };
  return (
    <div className="Textarea-storygroup-wrapper">
      <span className="Textarea-state-label">Resting</span>
      {story()}
      {originalTemplate && (
        <>
          <span className="Textarea-state-label">Disabled</span>
          {originalTemplate(finalArgs, context)}
        </>
      )}
    </div>
  );
};

export default {
  component: TextArea,
  title: 'Components/Form/TextArea',
  description: 'A styled form textarea component',
  decorators: [
    createWithClassesDecorator(testingChromaticClassNames, (args, originalStory, context) => {
      let textFieldId = args.className?.replace('pseudo-', '') || '';
      // capitalize first letter for formatting
      textFieldId = textFieldId[0].toUpperCase() + textFieldId.slice(1);
      return (
        <>
          <span className="Textarea-state-label">{`${
            args.className?.replace('pseudo-', '') || ''
          }`}</span>
          {originalStory({ ...args, id: textFieldId }, context)}
        </>
      );
    }),
    withRestingAndDisabledStates,
  ],
  argTypes: {
    disabled: {
      table: {
        category: 'Presentation',
      },
    },
    rows: {
      table: {
        category: 'Presentation',
      },
    },
    id: {
      table: {
        category: 'DOM Attributes',
      },
    },
    name: {
      table: {
        category: 'DOM Attributes',
      },
    },
    value: {
      table: {
        category: 'DOM Attributes',
      },
    },
  },
};

type StoryType = ComponentStoryObj<typeof TextArea>;

export const Example: StoryType = {
  render: ({ id = '', ...args }) => {
    const textAreaId = `${id} Textarea`;
    return (
      <div>
        <Label htmlFor={textAreaId}>{textAreaId}</Label>
        <TextArea {...args} id={textAreaId} />
      </div>
    );
  },
  args: {
    name: 'Text Area',
    rows: 10,
    id: 'Resting',
    value: 'I am a text area!!',
    disabled: false,
  },
};
