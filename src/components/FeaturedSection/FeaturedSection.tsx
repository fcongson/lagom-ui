import clsx from "clsx";
import React from "react";
import styled, { css } from "styled-components";
import { Container } from "../../layouts/Container";
import { Section } from "../../layouts/Section";

type FeaturedSectionProps = {
  children?: React.ReactNode;
  className?: string;
  framed?: boolean;
};

const featuredSectionCss = css`
  /* .lagom-featured-section */
  max-width: 100%;

  & .lagom-container {
    margin-bottom: 0;
  }

  &.lagom-featured-section--framed {
    max-height: calc(100vh - (2 * var(--framed-margin)));
    margin: var(--framed-margin);
    border-radius: var(--lagom-core-border-radius-sm);
    overflow: hidden;
  }

  & .lagom-featured-section__content {
    max-width: ${({ theme }) => theme.sizes.maxWidthContent};
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    text-wrap: pretty;
  }
`;

const ImageBackgroundContainer = styled.div`
  ${featuredSectionCss}

  &.lagom-featured-section--image-background {
    display: grid;
  }

  &.lagom-featured-section--image-background .lagom-featured-section__image {
    grid-area: 1 / 1;
  }
  &.lagom-featured-section--image-background
    .lagom-featured-section__image-overlay {
    grid-area: 1 / 1;
    background-color: var(--lagom-semantic-color-overlay-background);
    opacity: var(--lagom-semantic-opacity-overlay);
  }

  &.lagom-featured-section--image-background .lagom-section {
    grid-area: 1 / 1;
    align-self: center;
  }

  &.lagom-featured-section--image-background .lagom-section {
    z-index: 1;
  }
`;

type ImageBackgroundProps = FeaturedSectionProps & {
  image?: React.ReactNode;
};

const ImageBackground: React.FunctionComponent<ImageBackgroundProps> = ({
  children,
  className,
  image,
  framed,
}) => {
  return (
    <ImageBackgroundContainer
      className={clsx(
        "lagom-featured-section lagom-featured-section--image-background",
        className,
        framed && "lagom-featured-section--framed",
      )}
    >
      {!!image && (
        <>
          <div className="lagom-featured-section__image">{image}</div>
          <div className="lagom-featured-section__image-overlay" />
        </>
      )}
      <Section>
        <Container>
          <div className="lagom-featured-section__content">{children}</div>
        </Container>
      </Section>
    </ImageBackgroundContainer>
  );
};

const ColorBackgroundSection = styled(Section)`
  ${featuredSectionCss}

  &.lagom-featured-section--color-background {
    background-color: var(--lagom-semantic-color-bg-muted);
  }

  &.lagom-featured-section--color-background .lagom-container {
    padding-top: 12rem;
    padding-bottom: 12rem;

    ${({ theme }) => theme.mediaQueries.large} {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }

    div:not(:last-of-type) {
      margin-bottom: 8rem;

      ${({ theme }) => theme.mediaQueries.small} {
        margin-bottom: 4rem;
      }
    }
  }
`;

type ColorBackgroundProps = FeaturedSectionProps & {
  backgroundColor?: string;
};

const ColorBackground: React.FunctionComponent<ColorBackgroundProps> = ({
  children,
  className,
  backgroundColor,
  framed,
}) => {
  return (
    <ColorBackgroundSection
      className={clsx(
        "lagom-featured-section lagom-featured-section--color-background",
        className,
        framed && "lagom-featured-section--framed",
      )}
      style={{ backgroundColor: backgroundColor }}
    >
      <Container>
        <div className="lagom-featured-section__content">{children}</div>
      </Container>
    </ColorBackgroundSection>
  );
};

export const FeaturedSection: React.FunctionComponent<
  { imageAsBackground?: boolean } & ImageBackgroundProps & ColorBackgroundProps
> = ({ imageAsBackground, image, backgroundColor, ...restProps }) => {
  if (image && imageAsBackground)
    return <ImageBackground image={image} {...restProps} />;
  return <ColorBackground backgroundColor={backgroundColor} {...restProps} />;
};
