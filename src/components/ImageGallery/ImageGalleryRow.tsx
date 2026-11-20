type ImageGalleryRowProps = {
  /** The row's `ImageGalleryItem`s. The row has as many images as items. */
  children?: React.ReactNode;
};

/**
 * A row of images in an ImageGallery.
 *
 * Groups `ImageGalleryItem`s into one row. The row has as many images as it
 * has items: up to 3, or up to 4 in a full-width gallery. It doesn't render an
 * element of its own; the gallery puts every row in one list.
 *
 * @summary A row of images in an ImageGallery.
 */
export const ImageGalleryRow: React.FunctionComponent<ImageGalleryRowProps> = ({
  children,
}) => {
  return <>{children}</>;
};
