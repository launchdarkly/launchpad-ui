import type { Meta } from '@storybook/react';

import { Icon } from '../src';
import * as icons from '../src';

type IconName = Exclude<keyof typeof icons, 'Icon' | 'IconSize'>;

export default {
  component: Icon,
  title: 'Components/Icon',
  description: 'Icons supplement content and represent an action or feature within LaunchDarkly.',
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

export const Default = {
  render: () => (
    <div
      style={{
        display: 'grid',
        justifyContent: 'space-evenly',
        gridTemplateColumns: 'repeat(4, auto)',
        rowGap: '4rem',
        marginTop: '4rem',
      }}
    >
      {Object.keys(icons).map((key, index) => {
        if (!['Icon', 'IconSize', '__namedExportsOrder'].includes(key))
          return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} key={index}>
              <div style={{ height: 24, width: 24 }}>{icons[key as IconName]({})}</div>
              <span>{key}</span>
            </div>
          );
        return null;
      })}
    </div>
  ),
};
