import isChromatic from 'chromatic';
import React from 'react';

import '../packages/tokens/dist/index.css';
import '../packages/tokens/dist/themes.css';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
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

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: isChromatic() ? 'side-by-side' : 'default',
    toolbar: {
      icon: 'circlehollow',
      title: 'Theme',
      items: [
        { value: 'default', icon: 'circlehollow', title: 'default' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
      ],
    },
  },
};

const ThemeBlock = ({
  children,
  left,
  'data-theme': dataTheme,
}: {
  children;
  left?: boolean;
  'data-theme'?: string;
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: left ? 0 : '50vw',
        right: left ? '50vw' : 0,
        width: '50vw',
        height: '100vh',
        bottom: 0,
        overflow: 'auto',
        padding: '1rem',
      }}
      data-theme={dataTheme}
    >
      {children}
    </div>
  );
};

export const decorators = [
  (StoryFn, context) => {
    const theme = context.parameters.theme || context.globals.theme;

    switch (theme) {
      case 'side-by-side': {
        document.documentElement.setAttribute('data-theme', 'default');
        return (
          <>
            <ThemeBlock left>
              <StoryFn />
            </ThemeBlock>
            <ThemeBlock data-theme="dark">
              <StoryFn />
            </ThemeBlock>
          </>
        );
      }
      default: {
        document.documentElement.setAttribute('data-theme', theme);
        return <StoryFn />;
      }
    }
  },
];
