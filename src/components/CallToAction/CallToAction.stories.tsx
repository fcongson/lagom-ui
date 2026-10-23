import { Meta, StoryObj } from "@storybook/react-webpack5";
import { CallToAction } from "./CallToAction";

const meta: Meta = {
  title: "Components/Call To Action",
  component: CallToAction,
  args: {
    header: "Lorem Ipsum.",
    text: "With Call To Action. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    actionLink: "#",
    actionText: "Lorem ipsum dolor sit amet",
  },
};

export default meta;

type Story = StoryObj<typeof CallToAction>;

/** Prompts one next step, with a heading, text, and a link. */
export const Default: Story = {};
