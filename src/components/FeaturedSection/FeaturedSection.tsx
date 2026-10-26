import clsx from "clsx";
import { Container } from "../../layouts/Container";
import { Section } from "../../layouts/Section";
import "./FeaturedSection.css";

type FeaturedSectionProps = {
  /** Content, centred in a column up to 800px wide. */
  children?: React.ReactNode;
  /** Class name(s) added to the outer element. */
  className?: string;
  /** Insets the section from the page edges and rounds its corners. */
  framed?: boolean;
};

type ImageBackgroundProps = FeaturedSectionProps & {
  /**
   * An image element (e.g. `<img>`) used as the background. Only used when
   * `imageAsBackground` is set. It's stretched to cover the section (crop
   * controlled by `--lagom-component-featured-section-image-fit`), with an
   * overlay so text stays readable. Give it `alt` text, or `alt=""` if it's
   * purely decorative.
   */
  image?: React.ReactNode;
};

const ImageBackground: React.FunctionComponent<ImageBackgroundProps> = ({
  children,
  className,
  image,
  framed,
}) => {
  return (
    <div
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
    </div>
  );
};

type ColorBackgroundProps = FeaturedSectionProps & {
  /**
   * Background colour for the colour variant. Use a token, e.g.
   * `var(--lagom-semantic-color-accent-bg)`. Defaults to
   * `--lagom-component-featured-section-color-background` (`bg-secondary`
   * in Base).
   */
  backgroundColor?: string;
};

const ColorBackground: React.FunctionComponent<ColorBackgroundProps> = ({
  children,
  className,
  backgroundColor,
  framed,
}) => {
  return (
    <Section
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
    </Section>
  );
};

type ImageAsBackgroundProps = {
  /**
   * Use `image` as a full-bleed background behind the content. Without this,
   * `image` is ignored and the section uses a colour background.
   */
  imageAsBackground?: boolean;
};

/**
 * Full-width highlighted band with a colour or image background.
 *
 * A full-width band that highlights content, with either a colour background
 * (the default) or an image background (`image` + `imageAsBackground`).
 * Content is centred. Use it to break up long pages or to frame a
 * `CallToAction`.
 *
 * @summary Full-width highlighted band with a colour or image background.
 */
export const FeaturedSection: React.FunctionComponent<
  ImageAsBackgroundProps & ImageBackgroundProps & ColorBackgroundProps
> = ({ imageAsBackground, image, backgroundColor, ...restProps }) => {
  if (image && imageAsBackground)
    return <ImageBackground image={image} {...restProps} />;
  return <ColorBackground backgroundColor={backgroundColor} {...restProps} />;
};
