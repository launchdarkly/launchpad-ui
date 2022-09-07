import type { ComponentStoryObj, StoryFn } from '@storybook/react';

import { Slider } from '../src';

export default {
  component: Slider,
  title: 'Components/Slider',
  description: 'An element used to set a value within a range.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__SLIDER,
    },
  },
  decorators: [
    (StoryFn: StoryFn) => (
      <div
        style={{
          height: '100px',
          padding: '1rem 0',
        }}
      >
        <StoryFn />
      </div>
    ),
  ],
};

type Story = ComponentStoryObj<typeof Slider>;

export const Example: Story = {
  args: {
    value: 25,
    onChange: () => undefined,
    min: 0,
    max: 0,
    step: 1,
    readOnly: false,
    disabled: false,
    hideTrack: false,
  },
};
