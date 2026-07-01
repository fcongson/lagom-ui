import clsx from "clsx";
import { Button } from "../Button";
import "./LinkButton.css";

interface LinkButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * Classname(s) applied to this component
   */
  className?: string;
  /**
   * Choose between the primary and secondary variants
   */
  primary?: boolean;
  /**
   * Where to navigate to
   */
  to: string;
  /**
   * A framework specific link component
   */
  Component?: React.ComponentType<{
    to: string;
    className?: string;
    children?: React.ReactNode;
  }>;
}

export const LinkButton: React.FunctionComponent<LinkButtonProps> = ({
  children,
  className,
  primary = false,
  to,
  Component,
  ...restProps
}) => {
  if (Component) {
    return (
      <Component className={clsx("lagom-link-button", className)} to={to}>
        <Button primary={primary} {...restProps}>
          {children}
        </Button>
      </Component>
    );
  }

  return (
    <a className={clsx("lagom-link-button", className)} href={to}>
      <Button primary={primary} {...restProps}>
        {children}
      </Button>
    </a>
  );
};
