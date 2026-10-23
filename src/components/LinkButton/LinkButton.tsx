import clsx from "clsx";
import "../Button/Button.css";
import "./LinkButton.css";

/**
 * Props a framework link component receives from `LinkButton`.
 */
export type LinkButtonComponentProps = {
  to: string;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<"a">, "href">;

interface LinkButtonProps extends Omit<
  React.ComponentPropsWithoutRef<"a">,
  "href"
> {
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
   * A framework link component (e.g. Gatsby's `Link`) to render instead of a
   * plain `<a>`, for client-side routing. It receives `to`, `className`,
   * `children`, and any other props passed to `LinkButton`.
   */
  Component?: React.ComponentType<LinkButtonComponentProps>;
}

/**
 * Navigates to a page or route, styled as a button.
 *
 * A link styled as a button. Renders a single `<a>` by default, or your
 * framework's link component via `Component`. It's announced as a link and
 * takes one tab stop. Accepts all `<a>` attributes except `href` (use `to`).
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
  const classNames = clsx(
    "lagom-link-button",
    "lagom-button",
    primary ? "lagom-button--primary" : "lagom-button--secondary",
    className,
  );

  if (Component) {
    return (
      <Component className={classNames} to={to} {...restProps}>
        {children}
      </Component>
    );
  }

  return (
    <a className={classNames} href={to} {...restProps}>
      {children}
    </a>
  );
};
