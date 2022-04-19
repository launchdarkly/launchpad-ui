module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
};
