import { Meta, StoryObj } from "@storybook/react-webpack5";
import { SectionHeader } from "./SectionHeader";

const meta: Meta = {
  title: "Components/Section Header",
  component: SectionHeader,
  args: {
    children: "Lorem ipsum",
  },
};

export default meta;

type Story = StoryObj<typeof SectionHeader>;

/** Starts a section of the page. */
export const Default: Story = {};
