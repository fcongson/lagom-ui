// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import type { StorybookConfig } from "@storybook/react-webpack5";
const require = createRequire(import.meta.url);
const config: StorybookConfig = {
  stories: ["../src/**/*.docs.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-webpack5-compiler-babel",
    "@storybook/addon-docs",
    // Serves an MCP endpoint at /mcp (locally and on Chromatic builds) so AI
    // agents can look up components, docs, and stories.
    "@storybook/addon-mcp",
  ],
  features: {
    // Generates the components manifest the MCP docs tools read from.
    componentsManifest: true,
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  async babel(config, { configType: _configType }) {
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
