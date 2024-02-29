import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  stories: ["../src/**/*.docs.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-babel",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
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
};
export default config;
