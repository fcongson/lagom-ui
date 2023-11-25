import clsx from "clsx";
import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";

const StyledButton = styled.button`
  &.lagom-button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 48px;
    width: fit-content;
    border: 1px solid;
    padding: 8px 24px;
    cursor: pointer;

    transition: transform 200ms ease-in-out;

    border-radius: var(--lagom-component-button-border-radius);
    font-family: var(--lagom-core-font-families-sans-serif);
    font-weight: var(--lagom-core-font-weights-semi-bold);
    font-size: var(--lagom-core-font-sizes-body);
  }

  &.lagom-button--primary {
    background-color: var(--lagom-component-button-color-primary-background);
    color: var(--lagom-component-button-color-primary-text);
    border-color: var(--lagom-component-button-color-primary-border);
  }

  &.lagom-button--secondary {
    background-color: var(--lagom-component-button-color-secondary-background);
    color: var(--lagom-component-button-color-secondary-text);
    border-color: var(--lagom-component-button-color-secondary-border);
  }

  &.lagom-button:hover {
    transform: translateY(-2px);
  }

  &.lagom-button:active {
    transform: translateY(1px);
    transition: transform 100ms ease-in-out;
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

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  className,
  primary = false,
  ...restProps
}) => {
  const mergedTheme = useTheme();
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
      {children}
    </StyledButton>
  );
};
