import { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "./PageHeader";

const meta: Meta = {
  title: "Components/Page Header",
  component: PageHeader,
  tags: ["autodocs"],
  args: {
    children: "Lorem ipsum",
  },
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {};
