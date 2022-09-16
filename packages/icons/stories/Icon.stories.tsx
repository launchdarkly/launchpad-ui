/* eslint-disable import/namespace */
import type { Meta } from '@storybook/react';

import { Icon } from '../src';
import * as icons from '../src';

type IconName = Exclude<keyof typeof icons, 'Icon' | 'KindIcon'>;

export default {
  component: Icon,
  title: 'Components/Icon',
  description: 'Icons supplement content and represent an action or feature within LaunchDarkly.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__ICONS,
    },
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
        if (!['Icon', 'KindIcon', '__namedExportsOrder'].includes(key))
          return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} key={index}>
              {icons[key as IconName]({ size: 'medium' })}
              <span>{key}</span>
            </div>
          );
        return null;
      })}
    </div>
  ),
};
