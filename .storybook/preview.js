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

    return <StoryFn />;
  },
];
