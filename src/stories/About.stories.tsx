import { Meta, StoryObj } from "@storybook/react";
import AboutMdx from "./About.mdx";
import { Markdown } from "./utils/Markdown";

const meta: Meta = {
  title: "About",
};

export default meta;

export const About: StoryObj = {
  render: () => <Markdown Content={AboutMdx} />,
};
