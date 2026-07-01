import clsx from "clsx";
import "./PageHeader.css";

export const PageHeader: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"h1">
> = ({ children, className, ...restProps }) => {
  return (
    <h1 className={clsx("lagom-page-header", className)} {...restProps}>
      {children}
    </h1>
  );
};
