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
    background-color: ${props.backgroundColor || props.theme.colors.greys[4]};
    
    div.image {
      padding-bottom: 4rem;
    }
    
    ${Container} {
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

  ${Section} {
    grid-area: 1 / 1;
    align-self: center;
  }

  ${Container} {
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
  }
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
