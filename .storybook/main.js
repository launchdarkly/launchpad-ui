module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', 'storybook-addon-pseudo-states'],
  framework: '@storybook/react',
  features: {
    storyStoreV7: true,
  },
};
