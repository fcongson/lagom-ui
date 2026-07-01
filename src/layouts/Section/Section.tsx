import clsx from "clsx";
import "./Section.css";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  /**
   * Classname(s) applied to this component
   */
  className?: string;
  /**
   * Background color applied to this section
   */
  backgroundColor?: string;
}

/**
 * A layout element that defines a section in a document.
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
        !!backgroundColor && "lagom-section--background-color",
      )}
      style={!!backgroundColor ? { backgroundColor: backgroundColor } : null}
      {...restProps}
    >
      {children}
    </section>
  );
};
