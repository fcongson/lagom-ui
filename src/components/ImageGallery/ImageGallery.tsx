import clsx from "clsx";
import { Children, Fragment, isValidElement } from "react";
import { Container } from "../../layouts/Container";
import { Section } from "../../layouts/Section";
import { devWarning } from "../../utils/devWarning";
import { ImageGalleryRow } from "./ImageGalleryRow";
import "./ImageGallery.css";

type ImageGalleryProps = Omit<
  React.ComponentPropsWithoutRef<"ul">,
  "children" | "className"
> & {
  /**
   * Class name(s) added to the outer element: the `<section>`, or the `<ul>`
   * in a full-width gallery.
   */
  className?: string;
  /**
   * The gallery's `ImageGalleryRow`s, top to bottom. Each row has as many
   * images as it has items.
   */
  children?: React.ReactNode;
  /**
   * Widens the gallery to 130% of the content column on large screens (1456px
   * and up), so it extends past the surrounding text. Takes precedence over
   * `fullwidth`.
   */
  emphasized?: boolean;
  /**
   * Spans the full viewport width, outside the content column, and allows up
   * to 4 images per row instead of 3.
   */
  fullwidth?: boolean;
};

/** Most images per row: 3 in the content column, 4 at full width. */
const MAX_PER_ROW = { contained: 3, fullwidth: 4 };

/** The largest row size with its own stacking breakpoint in the CSS. */
const MAX_STACK_CLASS = 4;

const countItems = (row: React.ReactNode): number => {
  if (isValidElement<{ children?: React.ReactNode }>(row)) {
    if (row.type === ImageGalleryRow) {
      return Children.toArray(row.props.children).length;
    }
  }
  return 1;
};

/**
 * Rows of captioned images that share a height in each row, without cropping.
 *
 * Lays out `ImageGalleryRow`s of `ImageGalleryItem`s. Each row has as many
 * images as it has items, and each image is sized by its shape, so the images
 * in a row are the same height and fill the width. On narrow screens the
 * gallery stacks to one image per line. The layout is CSS only: the same rows
 * always reflow the same way.
 *
 * @summary Rows of captioned images that share a height in each row, without cropping.
 */
export const ImageGallery: React.FunctionComponent<ImageGalleryProps> = ({
  className,
  children,
  emphasized,
  fullwidth,
  ...listProps
}) => {
  const rows = Children.toArray(children).filter((row) => row !== "");
  if (rows.length === 0) return null;

  const isFullWidth = Boolean(fullwidth) && !emphasized;
  const maxPerRow = isFullWidth ? MAX_PER_ROW.fullwidth : MAX_PER_ROW.contained;

  rows.forEach((row) => {
    if (!isValidElement(row) || row.type !== ImageGalleryRow) {
      devWarning(
        "ImageGallery: put images in an ImageGalleryRow. Other children each get a row of their own.",
      );
    }
  });

  const counts = rows.map(countItems);
  const largestRow = Math.max(...counts);
  if (largestRow > maxPerRow) {
    devWarning(
      `ImageGallery: rows hold up to ${maxPerRow} images${
        isFullWidth ? " at full width" : " (4 with `fullwidth`)"
      }. A row has ${largestRow}.`,
    );
  }

  const list = (
    // `role="list"`: Safari drops list semantics from a <ul> with
    // `list-style: none`.
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul
      role="list"
      {...listProps}
      className={clsx(
        "lagom-image-gallery__list",
        largestRow > 1 &&
          `lagom-image-gallery__list--stack-${Math.min(largestRow, MAX_STACK_CLASS)}`,
        emphasized && "lagom-image-gallery--emphasized",
        isFullWidth && "lagom-image-gallery lagom-image-gallery--full-width",
        isFullWidth && className,
      )}
    >
      {rows.map((row, index) => (
        <Fragment key={isValidElement(row) && row.key ? row.key : index}>
          {index > 0 ? (
            <li aria-hidden="true" className="lagom-image-gallery__break" />
          ) : null}
          {row}
        </Fragment>
      ))}
    </ul>
  );

  if (isFullWidth) return list;

  return (
    <Section className={clsx("lagom-image-gallery", className)}>
      <Container>{list}</Container>
    </Section>
  );
};
