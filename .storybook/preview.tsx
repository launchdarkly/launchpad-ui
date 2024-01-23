import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { MotionConfig } from 'framer-motion';
import React from 'react';

import { allModes } from './modes';

import '../packages/tokens/dist/index.css';
import '../packages/tokens/dist/themes.css';
import '../packages/tokens/dist/media-queries.css';

export const parameters = {
  controls: { expanded: true },
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    storySort: {
      method: 'alphabetical',
      order: ['Components', 'Tokens'],
      locales: 'en-US',
    },
  },
  backgrounds: {
    default: 'default',
    values: [
      { name: 'default', value: 'var(--lp-color-bg-ui-primary)' },
      { name: 'dark', value: 'var(--lp-color-bg-ui-primary)' },
    ],
  },
  chromatic: {
    modes: {
      default: allModes.default,
      dark: allModes.dark,
    },
  },
  status: {
    statuses: {
      alpha: {
        background: 'hsl(275.4, 48%, 50.2%)',
        color: '#ffffff',
        description:
          'This component is very unstable and will likely break when upgrading versions.',
      },
      beta: {
        background: 'hsl(45.4, 58.3%, 50.2%)',
        color: '#ffffff',
        description:
          'This component is still relatively unstable and may break when upgrading versions.',
      },
      stable: {
        background: 'hsl(154.1, 100%, 36.3%)',
        color: '#ffffff',
        description: 'This component is stable for production use.',
      },
    },
  },
};

export const decorators = [
  (StoryFn) => (
    <MotionConfig reducedMotion="user">
      <div style={{ padding: '0.625rem' }}>
        <StoryFn />
      </div>
    </MotionConfig>
  ),
  withThemeByDataAttribute({
    themes: {
      default: 'default',
      dark: 'dark',
    },
    defaultTheme: 'default',
  }),
];
