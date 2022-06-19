import styled, { css } from "styled-components";
import {
  BorderProps,
  ColorProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";
import { Button } from "../Button";

const linkCss = css`
  text-decoration: none;
  display: contents;
`;

const StyledLink = styled.a`
  ${linkCss}
`;

interface LinkButtonProps extends React.ComponentProps<"button"> {
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
  Component?: React.ComponentType<{ to: string; children?: React.ReactNode }>;
}

export const LinkButton: React.FunctionComponent<
  LinkButtonProps & TypographyProps & BorderProps & SpaceProps & ColorProps
> = ({ children, ref, primary = false, to, Component, ...restProps }) => {
  if (Component) {
    const StyledComponent = styled(Component)`
      ${linkCss}
    `;
    return (
      <StyledComponent to={to}>
        <Button primary={primary} {...restProps}>
          {children}
        </Button>
      </StyledComponent>
    );
  }

  return (
    <StyledLink href={to}>
      <Button primary={primary} {...restProps}>
        {children}
      </Button>
    </StyledLink>
  );
};
