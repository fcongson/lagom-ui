import clsx from "clsx";
import { Container } from "../../layouts/Container";
import { Section } from "../../layouts/Section";
import "./ImageCaption.css";

type ImageProps = {
  className?: string;
  image: React.ReactNode;
  caption?: string;
};

const DefaultImage: React.FunctionComponent<ImageProps> = ({
  className,
  image,
  caption,
}) => {
  return (
    <Section className={clsx("lagom-image-caption", className)}>
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
};

const EmphasizedImage: React.FunctionComponent<ImageProps> = ({
  className,
  image,
  caption,
}) => {
  return (
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
};

const FullWidthImage: React.FunctionComponent<ImageProps> = ({
  className,
  image,
  caption,
}) => {
  return (
    <figure
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
    </figure>
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
