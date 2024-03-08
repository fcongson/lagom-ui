import { Meta, StoryObj } from "@storybook/react";
import { Markdown } from "../utils/Markdown";
import AboutMdx from "./About.mdx";

const meta: Meta = {
  title: "Design Tokens",
};

export default meta;

export const About: StoryObj = {
  render: () => <Markdown Content={AboutMdx} />,
};
