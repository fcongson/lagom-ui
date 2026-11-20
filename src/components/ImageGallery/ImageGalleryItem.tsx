import clsx from "clsx";
import { isValidElement } from "react";
import { devWarning } from "../../utils/devWarning";
import { CaptionedFigure } from "../ImageCaption/CaptionedFigure";
import "./ImageGallery.css";

type ImageGalleryItemProps = {
  /** Class name(s) added to the `<li>`. */
  className?: string;
  /**
   * The image element (e.g. `<img>`). Nothing renders without it. Give it
   * `alt` text, and `width` and `height` so the gallery knows its shape.
   */
  image: React.ReactNode;
  /** Optional caption, rendered as a `<figcaption>` below the image. */
  caption?: string;
  /**
   * The image's width divided by its height (e.g. `1.5` for 3:2). Only needed
   * when the image has no `width` and `height`. Takes precedence over them.
   */
  ratio?: number;
};

const toPositiveNumber = (value: unknown): number | undefined => {
  const number = typeof value === "string" ? Number(value) : value;
  return typeof number === "number" && Number.isFinite(number) && number > 0
    ? number
    : undefined;
};

/**
 * Works out an image's shape (width / height) from the `ratio` prop, or from
 * the `width` and `height` on the image element. Falls back to 1 (square).
 */
const getImageRatio = (image: React.ReactNode, ratio?: number): number => {
  const fromProp = toPositiveNumber(ratio);
  if (fromProp) return fromProp;

  if (isValidElement<{ width?: unknown; height?: unknown }>(image)) {
    const width = toPositiveNumber(image.props.width);
    const height = toPositiveNumber(image.props.height);
    if (width && height) return width / height;
  }

  devWarning(
    "ImageGalleryItem: add `width` and `height` to the image (or pass `ratio`) so the gallery knows its shape. Showing it as a square.",
  );
  return 1;
};

/**
 * One image in an ImageGallery, with an optional caption.
 *
 * Use inside an `ImageGalleryRow`. Renders an `<li>` holding a `<figure>`,
 * the image, and an optional `<figcaption>`, styled like `ImageCaption`. The
 * gallery sizes each image by its shape, so images in a row share a height
 * and aren't cropped.
 *
 * @summary One image in an ImageGallery, with an optional caption.
 */
export const ImageGalleryItem: React.FunctionComponent<
  ImageGalleryItemProps
> = ({ className, image, caption, ratio }) => {
  if (!image) return null;

  const imageRatio = getImageRatio(image, ratio);

  return (
    <li
      className={clsx("lagom-image-gallery__item", className)}
      style={
        { "--lagom-image-gallery-ratio": imageRatio } as React.CSSProperties
      }
    >
      <CaptionedFigure
        className="lagom-image-gallery__figure"
        image={image}
        caption={caption}
        imageWrapper="lagom-image-gallery__image"
      />
    </li>
  );
};
