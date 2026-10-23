import clsx from "clsx";
import { Container } from "../../layouts/Container";
import { Section } from "../../layouts/Section";
import "./ImageCaption.css";

type ImageProps = {
  /** Class name(s) added to the outer element. */
  className?: string;
  /**
   * The image element (e.g. `<img>`). Nothing renders without it. Give it
   * `alt` text that describes the image. The caption doesn't replace alt text.
   */
  image: React.ReactNode;
  /** Optional caption, rendered as a `<figcaption>` below the image. */
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

type ImageCaptionVariantProps = {
  /**
   * Widens the image to 130% of the content column on large screens (1456px
   * and up), so it extends past the surrounding text. Takes precedence over
   * `fullwidth`.
   */
  emphasized?: boolean;
  /**
   * Spans the full viewport width (capped at the viewport height), outside
   * the content column.
   */
  fullwidth?: boolean;
};

/**
 * Image with optional caption: contained, emphasized, or full-width.
 *
 * An image in a `<figure>`, with an optional caption. By default it sits
 * inside the content column. `emphasized` and `fullwidth` make it wider.
 *
 * @summary Image with optional caption: contained, emphasized, or full-width.
 */
export const ImageCaption: React.FunctionComponent<
  ImageCaptionVariantProps & ImageProps
> = ({ emphasized, fullwidth, image, ...restProps }) => {
  if (!image) return null;

  if (emphasized) return <EmphasizedImage {...restProps} image={image} />;
  if (fullwidth) return <FullWidthImage {...restProps} image={image} />;
  return <DefaultImage {...restProps} image={image} />;
};
