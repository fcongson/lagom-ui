module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        controls: false,
      },
    },
    "storybook-addon-themes",
  ],
};
