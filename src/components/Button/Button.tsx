import { useFeatureIsOn } from "@growthbook/growthbook-react";
import clsx from "clsx";
import "./Button.css";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * Class name(s) added to the `<button>`.
   */
  className?: string;
  /**
   * Use the primary variant for the main action in a view. Defaults to the
   * secondary variant.
   * @default false
   */
  primary?: boolean;
  /**
   * The button's label. Make it describe the action (e.g. "Save changes",
   * not "Click here").
   */
  children?: React.ReactNode;
}

interface ButtonPropsExperimental {
  /**
   * Experimental: an icon rendered before the label. Only shown when the
   * `icon-button` GrowthBook feature flag is on. Not stable API.
   * @ignore
   */
  icon?: React.ReactNode;
}

/**
 * Triggers an in-page action. Use LinkButton to navigate.
 *
 * Triggers an action on the current page, such as submitting a form or opening
 * a dialog. Renders a native `<button>` and accepts all button attributes.
 *
 * For navigation to another page, use `LinkButton`.
 *
 * @summary Triggers an in-page action. Use LinkButton to navigate.
 */
export const Button: React.FunctionComponent<
  ButtonProps & ButtonPropsExperimental
> = ({ children, className, primary = false, icon, ...restProps }) => {
  const enabled = useFeatureIsOn("icon-button");

  return (
    <button
      className={clsx(
        "lagom-button",
        className,
        primary ? "lagom-button--primary" : "lagom-button--secondary",
      )}
      {...restProps}
    >
      {enabled && icon && <span className="lagom-button__icon">{icon}</span>}
      {children}
    </button>
  );
};
