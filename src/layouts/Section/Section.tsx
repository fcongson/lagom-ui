import clsx from "clsx";
import "./Section.css";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  /**
   * Class name(s) added to the `<section>`.
   */
  className?: string;
  /**
   * Background colour for the section. Use a token, e.g.
   * `var(--lagom-semantic-color-bg-secondary)`.
   */
  backgroundColor?: string;
}

/**
 * Outer page band (max 1800px). Wrap content in a Container.
 *
 * The outer layout band for a page region: a `<section>` up to 1800px wide,
 * with side padding that respects device safe areas. Put a `Container` inside
 * it for the content column. Accepts all `<section>` attributes.
 *
 * @summary Outer page band (max 1800px). Wrap content in a Container.
 */
export const Section: React.FunctionComponent<SectionProps> = ({
  children,
  className,
  backgroundColor,
  ...restProps
}) => {
  return (
    <section
      className={clsx(
        "lagom-section",
        className,
        backgroundColor && "lagom-section--background-color",
      )}
      style={backgroundColor ? { backgroundColor: backgroundColor } : null}
      {...restProps}
    >
      {children}
    </section>
  );
};
