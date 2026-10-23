import { Meta, StoryObj } from "@storybook/react-webpack5";
import { CallToAction } from "../CallToAction";
import { FeaturedSection } from "./FeaturedSection";

const meta: Meta = {
  title: "Components/Featured Section",
  component: FeaturedSection,
};

export default meta;

type Story = StoryObj<typeof FeaturedSection>;

/** Opens part of a page with an image behind short content. */
export const ImageAsBackground: Story = {
  args: {
    image: (
      <img
        src="/jonatan-pie-swG0ojqS6hc-unsplash.jpg"
        alt="Arctic Fox by Jonatan Pie"
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

/** An image band inset from the page edges, for a softer break. */
export const ImageAsBackgroundFramed: Story = {
  args: {
    image: (
      <img
        src="/jonatan-pie-swG0ojqS6hc-unsplash.jpg"
        alt="Arctic Fox by Jonatan Pie"
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

/** Highlights a short message on the default muted background. */
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

/** A coloured band inset from the page edges. */
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

/** A custom token background, with an image in the content. */
export const ColorBackgroundWithImage: Story = {
  args: {
    backgroundColor: "var(--lagom-semantic-color-accent-bg)",
    children: (
      <>
        <img
          src="/jonatan-pie-swG0ojqS6hc-unsplash.jpg"
          alt="Arctic Fox by Jonatan Pie"
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

/** The most common use: a highlighted prompt for the next step. */
export const WithCallToAction: Story = {
  render: (args) => (
    <FeaturedSection {...args}>
      <CallToAction
        header="Lorem Ipsum."
        text="With Call To Action. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        actionLink="#featured-section"
        actionText="Lorem ipsum dolor sit amet"
      />
    </FeaturedSection>
  ),
};
