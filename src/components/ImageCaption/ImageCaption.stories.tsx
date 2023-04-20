import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ImageCaption } from "./ImageCaption";

const imageSrc_White = "/jonatan-pie-d7ZBAPEuXGc-unsplash.jpg";
const imageSrc_Grey = "/jonatan-pie-RMAKCQmu-gI-unsplash.jpg";
const imageSrc_Brown = "/jonatan-pie-swG0ojqS6hc-unsplash.jpg";
const imageSrc = imageSrc_Brown;
const alt = "Arctic Fox by Jonatan Pie";
const image = (
  <img
    src={imageSrc}
    alt={alt}
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
