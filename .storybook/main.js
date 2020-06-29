module.exports = {
  stories: ['../src/**/*.stories.(ts|mdx)'],
  addons: ['@storybook/addon-storysource',
           '@storybook/addon-actions', 
           '@storybook/addon-links', 
           '@storybook/addon-notes',
           '@storybook/addon-knobs',
           '@storybook/addon-viewport/register',
           '@storybook/addon-docs'],
};
