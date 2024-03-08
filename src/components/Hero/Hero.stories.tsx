import { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "../..";
import { Hero } from "./Hero";

const imageSrc_White = "/jonatan-pie-d7ZBAPEuXGc-unsplash.jpg";
const imageSrc_Grey = "/jonatan-pie-RMAKCQmu-gI-unsplash.jpg";
const imageSrc_Brown = "/jonatan-pie-swG0ojqS6hc-unsplash.jpg";
const imageSrc = imageSrc_Brown;
const alt = "Arctic Fox by Jonatan Pie";

const meta: Meta = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
  args: {
    image: (
      <img
        src={imageSrc}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
  },
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {};

export const WithHeader: Story = {
  args: {
    children: <PageHeader>Arctic Fox</PageHeader>,
  },
};
