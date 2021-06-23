import { Button } from "components/Button";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
`;

interface LinkButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * Choose between the primary and secondary variants
   */
  primary?: boolean;
  /**
   * Where to navigate to
   */
  to?: string;
}

export const LinkButton: React.FunctionComponent<LinkButtonProps> = ({
  children,
  primary = false,
  to,
  ...restProps
}) => (
  <StyledLink href={to}>
    <Button primary={primary} {...restProps}>
      {children}
    </Button>
  </StyledLink>
);
