import { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";

const meta: Meta = {
  title: "Components/Section Header",
  component: SectionHeader,
  tags: ["autodocs"],
  args: {
    children: "Lorem ipsum",
  },
};

export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {};
