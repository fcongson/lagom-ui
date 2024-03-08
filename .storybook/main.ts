import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../src/**/*.docs.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  async babel(config, { configType }) {
    return {
      ...config,
      plugins: [
        ...(config.plugins ?? []),
        [
          require.resolve("@babel/plugin-transform-react-jsx"),
          {
            runtime: "automatic",
          },
        ],
      ],
    };
  },
  async webpackFinal(config) {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...(config.module?.rules?.filter(
            ({ test }) => test?.toString() !== "/\\.mdx$/",
          ) ?? []),
          {
            test: /\.mdx$/,
            use: [require.resolve("@mdx-js/loader")],
          },
        ],
      },
    };
  },
};
export default config;
