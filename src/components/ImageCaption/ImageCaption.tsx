import React from "react";
import styled from "styled-components";
import { Container } from "../../layouts/Container";
import { Section } from "../../layouts/Section";

const Image = styled.div`
  .block-img {
    margin-bottom: 2rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  .emphasized {
    ${(props) => props.theme.mediaQueries.emphasized} {
      width: 130%;
      margin: 0 -15% 2rem -15%;
    }
  }

  .full-width {
    max-height: 100vh;
    margin-bottom: 8rem;

    div {
      max-height: 100vh;
    }

    ${(props) => props.theme.mediaQueries.small} {
      margin-bottom: 4rem;
    }
  }

  .image-label {
    display: block;
    text-align: center;
    font-style: italic;
    font-size: 14px;
    color: ${(props) => props.theme.colors.greys[1]};
  }
`;

type ImageProps = {
  image: React.ReactNode;
  caption?: string;
};

const DefaultImage: React.FunctionComponent<ImageProps> = ({
  image,
  caption,
}) => {
  return (
    <Image>
      <Section>
        <Container>
          <figure className="block-img">
            {image}
            {caption && caption !== "" ? (
              <figcaption className="image-label">{caption}</figcaption>
            ) : null}
          </figure>
        </Container>
      </Section>
    </Image>
  );
};

const EmphasizedImage: React.FunctionComponent<ImageProps> = ({
  image,
  caption,
}) => {
  return (
    <Image>
      <Section>
        <Container>
          <figure className="block-img emphasized">
            {image}
            {caption && caption !== "" ? (
              <figcaption className="image-label">{caption}</figcaption>
            ) : null}
          </figure>
        </Container>
      </Section>
    </Image>
  );
};

const FullWidthImage: React.FunctionComponent<ImageProps> = ({
  image,
  caption,
}) => {
  return (
    <Image>
      <figure className="block-img full-width">
        <div>{image}</div>
        {caption && caption !== "" ? (
          <figcaption className="image-label">{caption}</figcaption>
        ) : null}
      </figure>
    </Image>
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
