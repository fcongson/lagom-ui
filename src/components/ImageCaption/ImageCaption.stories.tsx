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
  tags: ["autodocs"],
  args: {
    image,
    caption: "Default. Lorem ipsum dolor sit amet",
  },
};

export default meta;

type Story = StoryObj<typeof ImageCaption>;

export const Default: Story = {};

export const Emphasized: Story = {
  args: {
    caption: "Emphasized. Lorem ipsum dolor sit amet",
    emphasized: true,
  },
};

export const Fullwidth: Story = {
  args: {
    caption: "Fullwidth. Lorem ipsum dolor sit amet",
    fullwidth: true,
  },
};
