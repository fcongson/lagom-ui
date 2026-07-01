import { useFeatureIsOn } from "@growthbook/growthbook-react";
import clsx from "clsx";
import "./Button.css";

export type ButtonTheme = {
  borderRadius?: string;
  primary?: {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
  };
  secondary?: {
    backgroundColor?: string;
    color?: string;
    borderColor?: string;
  };
};

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * Classname(s) applied to this component
   */
  className?: string;
  /**
   * Choose between the primary and secondary variants
   */
  primary?: boolean;
}

interface ButtonPropsExperimental {
  /**
   * @ignore
   */
  icon?: React.ReactNode;
}

export const Button: React.FunctionComponent<
  ButtonProps & ButtonPropsExperimental
> = ({ children, className, primary = false, ...restProps }) => {
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
      {enabled && restProps.icon && (
        <span className="lagom-button__icon">{restProps.icon}</span>
      )}
      {children}
    </button>
  );
};
