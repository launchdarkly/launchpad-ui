import '../packages/tokens/dist/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: { expanded: true },
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    storySort: {
      order: ['Components', 'Tokens'],
      locales: 'en-US',
    },
  },
};
