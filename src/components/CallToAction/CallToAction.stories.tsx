import { Meta, StoryObj } from "@storybook/react";
import { CallToAction } from "./CallToAction";

const meta: Meta = {
  title: "Components/Call To Action",
  component: CallToAction,
  tags: ["autodocs"],
  args: {
    header: "Lorem Ipsum.",
    text: "With Call To Action. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    actionLink: "#",
    actionText: "Lorem ipsum dolor sit amet",
  },
};

export default meta;

type Story = StoryObj<typeof CallToAction>;

export const Default: Story = {};
