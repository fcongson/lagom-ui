import clsx from "clsx";
import "./PageHeader.css";

/**
 * The page's single main heading (h1).
 *
 * The page's main heading. Renders an `<h1>`, so use exactly one per page.
 * Accepts all `<h1>` attributes.
 *
 * For headings within the page, use `SectionHeader`.
 *
 * @summary The page's single main heading (h1).
 */
export const PageHeader: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"h1">
> = ({ children, className, ...restProps }) => {
  return (
    <h1 className={clsx("lagom-page-header", className)} {...restProps}>
      {children}
    </h1>
  );
};
