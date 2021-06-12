import styled from "styled-components";
import {
  buttonStyle,
  ButtonStyleProps,
  typography,
  TypographyProps,
} from "styled-system";

const StyledButton = styled.button<ButtonStyleProps & TypographyProps>`
  ${typography}
  ${buttonStyle}

  display: flex;
  justify-content: center;
  align-items: center;

  height: 48px;
  width: fit-content;
  border: 1px solid black;
  border-radius: 24px;
  padding: 8px 24px;
  cursor: pointer;

  transition: transform 200ms ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
    transition: transform 100ms ease-in-out;
  }
`;

StyledButton.defaultProps = {
  fontFamily: "sansSerif",
  fontWeight: "link",
  fontSize: "body",
  lineHeight: 2,
};

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
