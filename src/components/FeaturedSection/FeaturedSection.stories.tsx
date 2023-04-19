import React from "react";
import { theme } from "../../themes/theme";
import { CallToAction } from "../CallToAction";
import { FeaturedSection } from "./FeaturedSection";

export default {
  title: "Components/Featured Section",
  component: FeaturedSection,
  tags: ["autodocs"],
};

const imageSrc_White = "/jonatan-pie-d7ZBAPEuXGc-unsplash.jpg";
const imageSrc_Grey = "/jonatan-pie-RMAKCQmu-gI-unsplash.jpg";
const imageSrc_Brown = "/jonatan-pie-swG0ojqS6hc-unsplash.jpg";
const imageSrc = imageSrc_Brown;
const alt = "Arctic Fox by Jonatan Pie";

export const ImageAsBackground = () => (
  <FeaturedSection
    image={
      <img
        src={imageSrc}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    }
    imageAsBackground
  >
    <p>
      Image Background. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </FeaturedSection>
);

export const ColorBackground = () => (
  <FeaturedSection>
    <p>
      Color Background. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </FeaturedSection>
);

export const ColorBackgroundWithImage = () => (
  <FeaturedSection backgroundColor={theme.colors.olives[2]}>
    <img
      src={imageSrc}
      alt={alt}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
    <p>
      Color Background with Image. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit.
    </p>
  </FeaturedSection>
);

export const WithCallToAction = () => (
  <FeaturedSection>
    <CallToAction
      header="Lorem Ipsum."
      text="With Call To Action. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      actionLink="#featured-section"
      actionText="Lorem ipsum dolor sit amet"
    />
  </FeaturedSection>
);
