import "./ImageCaption.css";

type CaptionedFigureProps = {
  /** Class name(s) for the `<figure>`. */
  className?: string;
  /** The image element (e.g. `<img>`). */
  image: React.ReactNode;
  /** Optional caption, rendered as a `<figcaption>` below the image. */
  caption?: string;
  /**
   * Wraps the image in a `<div>`. Pass a string to give the wrapper a class.
   */
  imageWrapper?: boolean | string;
};

/**
 * Internal: an image in a `<figure>`, with an optional `<figcaption>`.
 *
 * Shared by `ImageCaption` and `ImageGalleryItem`, so captions look the same
 * in both. Not exported from the package.
 */
export const CaptionedFigure: React.FunctionComponent<CaptionedFigureProps> = ({
  className,
  image,
  caption,
  imageWrapper,
}) => {
  return (
    <figure className={className}>
      {imageWrapper ? (
        <div
          className={
            typeof imageWrapper === "string" ? imageWrapper : undefined
          }
        >
          {image}
        </div>
      ) : (
        image
      )}
      {caption && caption !== "" ? (
        <figcaption className="lagom-image-caption__image-label">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
};
