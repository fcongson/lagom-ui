import clsx from "clsx";
import { Button } from "../Button";
import "./LinkButton.css";

interface LinkButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * Class name(s) added to the link element.
   */
  className?: string;
  /**
   * Use the primary variant for the main destination in a view. Defaults to
   * the secondary variant.
   * @default false
   */
  primary?: boolean;
  /**
   * The URL or route to navigate to.
   */
  to: string;
  /**
   * The link's label. Make it describe the destination (e.g. "View all
   * posts"), not "Click here".
   */
  children?: React.ReactNode;
  /**
   * A framework link component (e.g. Gatsby's or Next's `Link`) to render
   * instead of a plain `<a>`, for client-side routing. It receives `to`,
   * `className`, and `children`.
   */
  Component?: React.ComponentType<{
    to: string;
    className?: string;
    children?: React.ReactNode;
  }>;
}

/**
 * Navigates to a page or route, styled as a button.
 *
 * A link styled as a button, for navigating to another page or route. Renders
 * an `<a>` by default, or your framework's link component via `Component`.
 *
 * For actions that don't navigate, use `Button`.
 *
 * @summary Navigates to a page or route, styled as a button.
 */
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
