import clsx from "clsx";
import "./SectionHeader.css";

/**
 * Centred heading for a page section (h2).
 *
 * A centred heading for a section of a page. Renders an `<h2>` and accepts all
 * `<h2>` attributes.
 *
 * For the page's main heading, use `PageHeader`.
 *
 * @summary Centred heading for a page section (h2).
 */
export const SectionHeader: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"h2">
> = ({ children, className, ...restProps }) => {
  return (
    <h2 className={clsx("lagom-section-header", className)} {...restProps}>
      {children}
    </h2>
  );
};
