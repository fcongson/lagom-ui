import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  // tags: ["autodocs"],
  args: {
    onClick: action("clicked"),
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

export const WithExperimentalIcon: Story = {
  ...Primary,
  args: {
    primary: false,
    children: "With icon",
    icon: "🚀",
  },
};
