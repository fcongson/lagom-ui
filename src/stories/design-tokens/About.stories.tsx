import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Markdown } from "../utils/Markdown";
import AboutMdx from "./About.mdx";

/**
 * Visual reference for people. Excluded from the AI components manifest:
 * it has no component, and agents get this information from the docs pages.
 */
const meta: Meta = {
  title: "Design Tokens",
  tags: ["!manifest"],
};

export default meta;

export const About: StoryObj = {
  render: () => <Markdown Content={AboutMdx} />,
};
