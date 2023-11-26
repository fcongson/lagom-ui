import clsx from "clsx";
import React from "react";
import styled, { css } from "styled-components";
import { Container } from "../../layouts/Container";
import { Section } from "../../layouts/Section";

const imageCaptionCss = css`
  /* .lagom-image-caption */
  &.lagom-section {
    overflow: hidden;
  }

  .lagom-image-caption__block-img {
    margin-bottom: 2rem;
  }

  .lagom-image-caption__block-img img {
    width: 100%;
    height: auto;
  }

  .lagom-image-caption__image-label {
    display: block;
    text-align: center;
    font-style: italic;
    font-size: 14px;
    color: var(--lagom-semantic-color-fg-subtle);
  }
`;

type ImageProps = {
  className?: string;
  image: React.ReactNode;
  caption?: string;
};

const DefaultImageSection = styled(Section)`
  ${imageCaptionCss}
`;

const DefaultImage: React.FunctionComponent<ImageProps> = ({
  className,
  image,
  caption,
}) => {
  return (
    <DefaultImageSection className={clsx("lagom-image-caption", className)}>
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
    </DefaultImageSection>
  );
};

const EmphasizedImageSection = styled(Section)`
  ${imageCaptionCss}

  .lagom-image-caption--emphasized {
    ${({ theme }) => theme.mediaQueries.emphasized} {
      width: 130%;
      margin: 0 -15% 2rem -15%;
    }
  }
`;

const EmphasizedImage: React.FunctionComponent<ImageProps> = ({
  className,
  image,
  caption,
}) => {
  return (
    <EmphasizedImageSection className={clsx("lagom-image-caption", className)}>
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
    </EmphasizedImageSection>
  );
};

const FullWidthImageFigure = styled.figure`
  ${imageCaptionCss}

  &.lagom-image-caption--full-width {
    max-height: 100vh;
    margin-bottom: 8rem;

    ${({ theme }) => theme.mediaQueries.small} {
      margin-bottom: 4rem;
    }
  }

  &.lagom-image-caption--full-width div {
    max-height: 100vh;
  }
`;

const FullWidthImage: React.FunctionComponent<ImageProps> = ({
  className,
  image,
  caption,
}) => {
  return (
    <FullWidthImageFigure
      className={clsx(
        "lagom-image-caption lagom-image-caption__block-img lagom-image-caption--full-width",
        className,
      )}
    >
      <div>{image}</div>
      {caption && caption !== "" ? (
        <figcaption className="lagom-image-caption__image-label">
          {caption}
        </figcaption>
      ) : null}
    </FullWidthImageFigure>
  );
};

export const ImageCaption: React.FunctionComponent<
  { emphasized?: boolean; fullwidth?: boolean } & ImageProps
> = ({ emphasized, fullwidth, image, ...restProps }) => {
  if (!image) return null;

  if (emphasized) return <EmphasizedImage {...restProps} image={image} />;
  if (fullwidth) return <FullWidthImage {...restProps} image={image} />;
  return <DefaultImage {...restProps} image={image} />;
};
