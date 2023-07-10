/* eslint-disable import/namespace */
import type { Meta, ReactRenderer } from '@storybook/react';
import type { ArgsStoryFn } from '@storybook/types';

import { Icon } from '../src';
import { icons } from '../src/types';

export default {
  component: Icon,
  title: 'Components/Icon',
  description: 'Icons supplement content and represent an action or feature within LaunchDarkly.',
  parameters: {
    status: {
      type: import.meta.env.STORYBOOK_PACKAGE_STATUS__ICONS,
    },
    chromatic: { viewports: [1700] },
  },
  argTypes: {
    name: {
      table: {
        category: 'Presentation',
      },
    },
    size: {
      table: {
        category: 'Presentation',
      },
    },
    subtle: {
      table: {
        category: 'Presentation',
      },
    },
  },
} as Meta;

const render: ArgsStoryFn<ReactRenderer> = (args, { globals }) => (
  <div
    style={{
      display: 'grid',
      justifyContent: 'space-evenly',
      gridTemplateColumns: globals.theme === 'side-by-side' ? 'repeat(3, auto)' : 'repeat(4, auto)',
      rowGap: '4rem',
      marginTop: '4rem',
    }}
  >
    {icons.map((item, index) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} key={index}>
        <Icon name={item} size="medium" />
        <span>{item}</span>
      </div>
    ))}
  </div>
);

export const Default = {
  render,
};
