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
};
