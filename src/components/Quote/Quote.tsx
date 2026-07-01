import clsx from "clsx";
import "./Quote.css";

export const Quote: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"blockquote">
> = ({ children, className, ...restProps }) => {
  return (
    <blockquote className={clsx("lagom-quote", className)} {...restProps}>
      {children}
    </blockquote>
  );
};
