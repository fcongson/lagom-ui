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
  typescript: {
    // react-docgen-typescript reads inline and intersection prop types that
    // the default react-docgen misses, so every prop reaches the Controls
    // table and the MCP components manifest.
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // Leave out inherited HTML attributes (from @types/react) so docs show
      // Lagom's own props.
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
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
