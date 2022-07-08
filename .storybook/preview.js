import { LazyMotion, domAnimation } from 'framer-motion';

import '../packages/tokens/dist/index.css';
import '../packages/tokens/dist/dark.css';

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
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'circlehollow',
      title: 'Theme',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
    },
  },
};

export const decorators = [
  (StoryFn, { globals, parameters }) => {
    const theme = globals.theme || parameters.theme || 'light';

    document.documentElement.setAttribute('data-theme', theme);

    return (
      <LazyMotion strict features={domAnimation}>
        <StoryFn />
      </LazyMotion>
    );
  },
];
