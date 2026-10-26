import { Meta, StoryObj } from "@storybook/react-webpack5";
import { keyModes } from "../../stories/utils/modes";
import { LinkButton } from "../LinkButton";
import { PageHeader } from "../PageHeader";
import { Hero } from "./Hero";

const meta: Meta = {
  title: "Components/Hero",
  component: Hero,
  args: {
    image: (
      <img
        src="/jonatan-pie-swG0ojqS6hc-unsplash.jpg"
        alt="Arctic Fox by Jonatan Pie"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

/** An image-only opener, with no overlay. */
export const Default: Story = {};

/** The usual opener: the page title centred over the image. */
export const WithHeader: Story = {
  render: (args) => (
    <Hero {...args}>
      <PageHeader>Arctic Fox</PageHeader>
    </Hero>
  ),
};

/**
 * Keyboard focus over an image: the three-band ring. A visual test,
 * snapshotted in every brand, mode, and contrast.
 */
export const FocusOverImage: Story = {
  tags: ["!manifest"],
  render: (args) => (
    <div style={{ "--hero-height": "60vh" } as React.CSSProperties}>
      <Hero {...args}>
        <PageHeader>Arctic Fox</PageHeader>
        <LinkButton to="#" primary>
          Read the story
        </LinkButton>
      </Hero>
    </div>
  ),
  play: async ({ canvasElement }) => {
    canvasElement.querySelector("a")?.focus();
  },
  parameters: { chromatic: { modes: keyModes } },
};
