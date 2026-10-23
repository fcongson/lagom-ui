import { Meta, StoryObj } from "@storybook/react-webpack5";
import { ImageCaption } from "./ImageCaption";

const image = (
  <img
    src="/jonatan-pie-swG0ojqS6hc-unsplash.jpg"
    alt="Arctic Fox by Jonatan Pie"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
);

const meta: Meta = {
  title: "Components/Image Caption",
  component: ImageCaption,
  args: {
    image,
    caption: "Default. Lorem ipsum dolor sit amet",
  },
};

export default meta;

type Story = StoryObj<typeof ImageCaption>;

/** An image in the content column. For most article images. */
export const Default: Story = {};

/** Wider than the text on large screens, to draw attention. */
export const Emphasized: Story = {
  args: {
    caption: "Emphasized. Lorem ipsum dolor sit amet",
    emphasized: true,
  },
};

/** Edge to edge, for the most striking images. */
export const Fullwidth: Story = {
  args: {
    caption: "Fullwidth. Lorem ipsum dolor sit amet",
    fullwidth: true,
  },
};
