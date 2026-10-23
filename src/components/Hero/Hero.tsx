import clsx from "clsx";
import "./Hero.css";

type HeroProps = {
  /**
   * The background image element (e.g. `<img>`), stretched to fill the hero
   * (crop controlled by `--themed-component-hero-image-fit`). Give it `alt`
   * text, or `alt=""` if it's purely decorative.
   */
  image: React.ReactElement;
  /**
   * Content centred over the image, usually a `PageHeader`. When set, an
   * overlay darkens the image so the content stays readable.
   */
  children?: React.ReactNode;
  /** Class name(s) added to the wrapper `<div>`. */
  className?: string;
};

/**
 * Full-height image banner for the top of a page.
 *
 * A full-viewport-height image at the top of a page, optionally with content
 * (usually a `PageHeader`) centred over it. Height is set by `--hero-height`
 * (default `100vh`).
 *
 * Use it instead of a plain `PageHeader` when the page opens with a strong
 * image.
 *
 * @summary Full-height image banner for the top of a page.
 */
export const Hero: React.FunctionComponent<HeroProps> = ({
  image,
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={clsx("lagom-hero", className)} {...restProps}>
      {image ? (
        <>
          <div className="lagom-hero__image">{image}</div>
        </>
      ) : null}
      {children ? (
        <>
          <div className="lagom-hero__image-overlay" />
          <div className="lagom-hero__content">{children}</div>
        </>
      ) : null}
    </div>
  );
};
