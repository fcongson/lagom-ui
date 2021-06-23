import styled from "styled-components";
import {
  border,
  BorderProps,
  buttonStyle,
  ButtonStyleProps,
  typography,
  TypographyProps,
} from "styled-system";
import { useMergedTheme } from "../../hooks/useMergedTheme";
import { theme } from "../../themes/theme";

const StyledButton = styled.button<
  ButtonStyleProps & TypographyProps & BorderProps
>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 48px;
  width: fit-content;
  border: 1px solid;
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

  ${typography}
  ${border}
  ${buttonStyle}
`;

StyledButton.defaultProps = {
  theme,
  fontFamily: "sansSerif",
  fontWeight: "link",
  fontSize: "body",
  lineHeight: 2,
  borderColor: "black",
  borderRadius: 24,
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
}) => {
  const mergedTheme = useMergedTheme();
  return (
    <StyledButton
      theme={mergedTheme}
      variant={primary ? "primary" : "secondary"}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};
