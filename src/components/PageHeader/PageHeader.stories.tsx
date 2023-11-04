import { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "./PageHeader.js";

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
