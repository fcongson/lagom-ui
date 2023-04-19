const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "storybook-addon-themes",
    {
      name: "@storybook/addon-essentials",
      options: {
        controls: false,
      },
    },
    "@storybook/addon-a11y",
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    return config;
  },
};
