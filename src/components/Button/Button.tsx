import { useFeatureIsOn } from "@growthbook/growthbook-react";
import clsx from "clsx";
import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";

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

const StyledButton = styled.button`
  /* .lagom-button */
  display: flex;
  justify-content: center;
  align-items: center;

  height: 48px;
  width: fit-content;
  border: 1px solid;
  padding: 8px 24px;
  cursor: pointer;

  transition: transform 200ms ease-in-out;

  border-radius: var(
    --themed-component-button-border-radius,
    var(--lagom-component-button-border-radius)
  );
  font-family: var(
    --themed-core-font-families-sans-serif,
    var(--lagom-core-font-families-sans-serif)
  );
  font-weight: var(
    --themed-core-font-weights-semi-bold,
    var(--lagom-core-font-weights-semi-bold)
  );
  font-size: var(
    --themed-core-font-sizes-body,
    var(--lagom-core-font-sizes-body)
  );

  &.lagom-button--primary {
    background-color: var(
      --themed-component-button-color-primary-background,
      var(--lagom-component-button-color-primary-background)
    );
    color: var(
      --themed-component-button-color-primary-text,
      var(--lagom-component-button-color-primary-text)
    );
    border-color: var(
      --themed-component-button-color-primary-border,
      var(--lagom-component-button-color-primary-border)
    );
  }

  &.lagom-button--secondary {
    background-color: var(
      --themed-component-button-color-secondary-background,
      var(--lagom-component-button-color-secondary-background)
    );
    color: var(
      --themed-component-button-color-secondary-text,
      var(--lagom-component-button-color-secondary-text)
    );
    border-color: var(
      --themed-component-button-color-secondary-border,
      var(--lagom-component-button-color-secondary-border)
    );
  }

  &.lagom-button:hover {
    transform: translateY(-2px);
  }

  &.lagom-button:active {
    transform: translateY(1px);
    transition: transform 100ms ease-in-out;
  }

  .lagom-button__icon {
    padding-right: var(--lagom-core-dimension-md);
  }
`;

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
  const mergedTheme = useTheme();
  const enabled = useFeatureIsOn("icon-button");

  return (
    <StyledButton
      theme={mergedTheme}
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
    </StyledButton>
  );
};
