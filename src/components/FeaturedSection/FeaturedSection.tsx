import React from "react";
import styled from "styled-components";
import { Container } from "../../layouts/Container";
import { Section } from "../../layouts/Section";

const FeaturedSectionContainer = styled.div<{
  imageAsBackground?: boolean;
  colorAsBackground?: boolean;
  backgroundColor?: string;
}>`
  display: grid;

  ${(props) =>
    props.imageAsBackground &&
    `
      div.image {
        grid-area: 1 / 1;
      }

      ${Section} {
        z-index: 1;
      }
      `}

  ${(props) =>
    props.colorAsBackground &&
    `
    background-color: ${
      props.backgroundColor || "var(--lagom-semantic-color-bg-muted)"
    };
    
    div.image {
      padding-bottom: 4rem;
    }
    
    .lagom-container {
      padding-top: 12rem;
      padding-bottom: 12rem;
      
      ${props.theme.mediaQueries.large} {
        padding-top: 8rem;
        padding-bottom: 8rem;
      }

      div:not(:last-of-type) {
        margin-bottom: 8rem;

        ${props.theme.mediaQueries.small} {
          margin-bottom: 4rem;
        }
      }
    }
    `}

  .lagom-section {
    grid-area: 1 / 1;
    align-self: center;
  }

  .lagom-container {
    margin-bottom: 0;
  }

  div.image {
    width: 100%;
  }

  div.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    p {
      max-width: var(--sizes-max-width-content);
    }
  }
`;

const ImageOverlay = styled.div`
  grid-area: 1 / 1;
  background-color: var(--lagom-semantic-color-overlay-background);
  opacity: var(--lagom-semantic-opacity-overlay);
`;

type ImageBackgroundProps = {
  image?: React.ReactNode;
  children?: React.ReactNode;
};

const ImageBackground: React.FunctionComponent<ImageBackgroundProps> = ({
  image,
  children,
}) => {
  return (
    <FeaturedSectionContainer imageAsBackground>
      {!!image && <div className="image">{image}</div>}
      <ImageOverlay />
      <Section>
        <Container>
          <div className="content">{children}</div>
        </Container>
      </Section>
    </FeaturedSectionContainer>
  );
};

type ColorBackgroundProps = {
  backgroundColor?: string;
  children?: React.ReactNode;
};

const ColorBackground: React.FunctionComponent<ColorBackgroundProps> = ({
  backgroundColor,
  children,
}) => {
  return (
    <FeaturedSectionContainer
      colorAsBackground
      backgroundColor={backgroundColor}
    >
      <Section>
        <Container>
          <div className="content">{children}</div>
        </Container>
      </Section>
    </FeaturedSectionContainer>
  );
};

export const FeaturedSection: React.FunctionComponent<
  { imageAsBackground?: boolean } & ImageBackgroundProps & ColorBackgroundProps
> = ({ imageAsBackground, image, ...restProps }) => {
  if (image && imageAsBackground)
    return <ImageBackground image={image} {...restProps} />;
  return <ColorBackground {...restProps} />;
};
