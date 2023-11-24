import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CallToAction } from "../CallToAction";
import { FeaturedSection } from "./FeaturedSection";

const imageSrc_White = "/jonatan-pie-d7ZBAPEuXGc-unsplash.jpg";
const imageSrc_Grey = "/jonatan-pie-RMAKCQmu-gI-unsplash.jpg";
const imageSrc_Brown = "/jonatan-pie-swG0ojqS6hc-unsplash.jpg";
const imageSrc = imageSrc_Brown;
const alt = "Arctic Fox by Jonatan Pie";

const meta: Meta = {
  title: "Components/Featured Section",
  component: FeaturedSection,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FeaturedSection>;

export const ImageAsBackground: Story = {
  args: {
    image: (
      <img
        src={imageSrc}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
    imageAsBackground: true,
    children: (
      <p>
        Image Background. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
    ),
  },
};

export const ImageAsBackgroundFramed: Story = {
  args: {
    image: (
      <img
        src={imageSrc}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ),
    imageAsBackground: true,
    children: (
      <p>
        Image Background. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
    ),
    framed: true,
  },
};

export const ColorBackground: Story = {
  args: {
    children: (
      <p>
        Color Background. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
    ),
  },
};

export const ColorBackgroundFramed: Story = {
  args: {
    children: (
      <p>
        Color Background. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
    ),
    framed: true,
  },
};

export const ColorBackgroundWithImage: Story = {
  args: {
    backgroundColor: "var(--lagom-semantic-color-accent-bg)",
    children: (
      <>
        <img
          src={imageSrc}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <p>
          Color Background with Image. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>
      </>
    ),
  },
};

export const WithCallToAction: Story = {
  args: {
    children: (
      <CallToAction
        header="Lorem Ipsum."
        text="With Call To Action. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        actionLink="#featured-section"
        actionText="Lorem ipsum dolor sit amet"
      />
    ),
  },
};
