import { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "./LinkButton";

const meta: Meta = {
  title: "Components/Link Button",
  component: LinkButton,
  tags: ["autodocs"],
  args: {
    to: "#",
  },
};

export default meta;

type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    primary: true,
    children: "Link button primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Link button secondary",
  },
};

export const Custom: Story = {
  args: {
    backgroundColor: "olive",
    borderColor: "olive",
    color: "white",
    borderRadius: 4,
    fontFamily: "monospace",
    children: "Link button custom",
  },
};
