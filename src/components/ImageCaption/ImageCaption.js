import { clsx } from "clsx";
import React from "react";
import { Container } from "../../layouts/Container/Container.js";
import { Section } from "../../layouts/Section/Section.js";

import "./ImageCaption.css";

export const ImageCaption = ({
  emphasized,
  fullwidth,
  image,
  caption,
  ...restProps
}) => {
  if (emphasized)
    return <Emphasized {...restProps} image={image} caption={caption} />;
  if (fullwidth)
    return <FullWidth {...restProps} image={image} caption={caption} />;
  return <Default {...restProps} image={image} caption={caption} />;
};

const Emphasized = ({ className, image, caption }) => (
  <Section className={clsx("lagom-image-caption", className)}>
    <Container>
      <figure className="lagom-image-caption__block-img lagom-image-caption--emphasized">
        {image}
        {caption && caption !== "" ? (
          <figcaption className="lagom-image-caption__image-label">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Container>
  </Section>
);

const FullWidth = ({ className, image, caption }) => (
  <figure
    className={clsx(
      "lagom-image-caption lagom-image-caption__block-img lagom-image-caption--full-width",
      className
    )}
  >
    <div>{image}</div>
    {caption && caption !== "" ? (
      <figcaption className="lagom-image-caption__image-label">
        {caption}
      </figcaption>
    ) : null}
  </figure>
);

const Default = ({ className, image, caption }) => (
  <Section
    className={clsx(
      "lagom-image-caption lagom-image-caption--emphaiszed",
      className
    )}
  >
    <Container>
      <figure className="lagom-image-caption__block-img">
        {image}
        {caption && caption !== "" ? (
          <figcaption className="lagom-image-caption__image-label">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Container>
  </Section>
);
