import clsx from "clsx";
import styled, { css } from "styled-components";
import { Button } from "../Button";

const linkCss = css`
  &.lagom-link-button {
    display: contents;
  }
`;

const StyledLink = styled.a`
  ${linkCss}
`;

interface LinkButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * Classname(s) applied to this component
   */
  className?: string;
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

export const LinkButton: React.FunctionComponent<LinkButtonProps> = ({
  children,
  className,
  primary = false,
  to,
  Component,
  ...restProps
}) => {
  if (Component) {
    const StyledComponent = styled(Component)<{ className?: string }>`
      ${linkCss}
    `;
    return (
      <StyledComponent className={clsx(`lagom-link-button`, className)} to={to}>
        <Button primary={primary} {...restProps}>
          {children}
        </Button>
      </StyledComponent>
    );
  }

  return (
    <StyledLink className={clsx(`lagom-link-button`, className)} href={to}>
      <Button primary={primary} {...restProps}>
        {children}
      </Button>
    </StyledLink>
  );
};
