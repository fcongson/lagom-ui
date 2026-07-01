import clsx from "clsx";
import { Container } from "../../layouts/Container";
import { Section } from "../../layouts/Section";
import "./FeaturedSection.css";

type FeaturedSectionProps = {
  children?: React.ReactNode;
  className?: string;
  framed?: boolean;
};

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

export const FeaturedSection: React.FunctionComponent<
  { imageAsBackground?: boolean } & ImageBackgroundProps & ColorBackgroundProps
> = ({ imageAsBackground, image, backgroundColor, ...restProps }) => {
  if (image && imageAsBackground)
    return <ImageBackground image={image} {...restProps} />;
  return <ColorBackground backgroundColor={backgroundColor} {...restProps} />;
};
