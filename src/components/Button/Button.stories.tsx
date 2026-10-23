import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button } from "./Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  // tags: ["autodocs"],
  args: {
    primary: true,
    children: "Button primary",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  ...Primary,
  args: {
    primary: false,
    children: "Button secondary",
  },
};

export const Custom: Story = {
  ...Primary,
  args: {
    primary: false,
    style: {
      backgroundColor: "var(--lagom-core-colors-olive-base)",
      borderColor: "var(--lagom-core-colors-olive-base)",
      color: "var(--lagom-core-colors-white)",
      borderRadius: 4,
      fontFamily: "monospace",
    },
    children: "Button custom",
  },
};

/**
 * The `icon` prop is behind the `icon-button` GrowthBook flag and isn't
 * stable API, so this story is left out of the AI manifest.
 */
export const WithExperimentalIcon: Story = {
  ...Primary,
  tags: ["!manifest"],
  args: {
    primary: false,
    children: "With icon",
    icon: "🚀",
  },
};
