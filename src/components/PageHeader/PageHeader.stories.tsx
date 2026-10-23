import { Meta, StoryObj } from "@storybook/react-webpack5";
import { PageHeader } from "./PageHeader";

const meta: Meta = {
  title: "Components/Page Header",
  component: PageHeader,
  args: {
    children: "Lorem ipsum",
  },
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

/** The page title. Use exactly one per page. */
export const Default: Story = {};
