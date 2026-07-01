import clsx from "clsx";
import "./SectionHeader.css";

export const SectionHeader: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"h2">
> = ({ children, className, ...restProps }) => {
  return (
    <h2 className={clsx("lagom-section-header", className)} {...restProps}>
      {children}
    </h2>
  );
};
