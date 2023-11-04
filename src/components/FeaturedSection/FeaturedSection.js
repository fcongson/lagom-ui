import { clsx } from "clsx";
import React from "react";
import { Container } from "../../layouts/Container/Container.js";
import { Section } from "../../layouts/Section/Section.js";

import "./FeaturedSection.css";

export const FeaturedSection = ({ image, backgroundColor, ...restProps }) => {
  if (image) return <ImageBackground image={image} {...restProps} />;
  return <ColorBackground backgroundColor={backgroundColor} {...restProps} />;
};

const ImageBackground = ({ children, className, image, framed }) => {
  return (
    <div
      className={clsx(
        "lagom-featured-section lagom-featured-section--image-background",
        className,
        framed && "lagom-featured-section--framed"
      )}
    >
      <div className="lagom-featured-section__image">{image}</div>
      <div className="lagom-featured-section__image-overlay" />
      <Section>
        <Container>
          <div className="lagom-featured-section__content">{children}</div>
        </Container>
      </Section>
    </div>
  );
};

const ColorBackground = ({ children, className, backgroundColor, framed }) => {
  return (
    <Section
      className={clsx(
        "lagom-featured-section lagom-featured-section--color-background",
        className,
        framed && "lagom-featured-section--framed"
      )}
      style={{ backgroundColor: backgroundColor }}
    >
      <Container>
        <div className="lagom-featured-section__content">{children}</div>
      </Container>
    </Section>
  );
};
