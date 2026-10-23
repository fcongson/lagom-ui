import clsx from "clsx";
import "./Quote.css";

/**
 * Quotation set apart from body text (blockquote).
 *
 * A quotation set apart from body text, in an italic serif with a left border.
 * Renders a `<blockquote>` and accepts all `<blockquote>` attributes (e.g.
 * `cite`). Put the quote in `<p>` elements. Headings inside are allowed.
 *
 * @summary Quotation set apart from body text (blockquote).
 */
export const Quote: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"blockquote">
> = ({ children, className, ...restProps }) => {
  return (
    <blockquote className={clsx("lagom-quote", className)} {...restProps}>
      {children}
    </blockquote>
  );
};
