import styled, { css } from "styled-components";
import { buttonStyle, ButtonStyleProps } from "styled-system";

const ButtonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 48px;
  width: fit-content;
  border: 1px solid black;
  border-radius: 24px;
  padding: 8px 24px;
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;

  transition: transform 200ms ease-in-out;

  &:hover {
    border: 1px solid black;
    transform: translateY(-2px);
  }

  &:active {
    border: 1px solid black;
    transform: translateY(1px);
    transition: transform 100ms ease-in-out;
  }
`;

const StyledButton = styled.button<ButtonStyleProps>`
  ${buttonStyle}
  ${ButtonStyles}
`;

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * Choose between the primary and secondary variants
   */
  primary?: boolean;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  primary = false,
  ...restProps
}) => (
  <StyledButton variant={primary ? "primary" : "secondary"} {...restProps}>
    {children}
  </StyledButton>
);
