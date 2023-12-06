import clsx from "clsx";
import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";

const StyledHeader = styled.h1`
  /* .lagom-page-header */
  color: var(--lagom-semantic-color-fg-default);
  font: var(--lagom-component-page-header-typography);
  font-size: var(--header-scale-1);
  text-align: center;
  text-wrap: balance;
  margin: 0 auto;
  margin-bottom: calc(2 * var(--lagom-core-spacing-xxl));

  ${({ theme }) => theme.mediaQueries.large} {
    font-size: var(--header-scale-2);
  }
  ${({ theme }) => theme.mediaQueries.small} {
    font-size: var(--header-scale-3);
    margin-bottom: var(--lagom-core-spacing-xxl);
  }
`;

export const PageHeader: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"h1">
> = ({ children, className, ...restProps }) => {
  const mergedTheme = useTheme();
  return (
    <StyledHeader
      theme={mergedTheme}
      className={clsx("lagom-page-header", className)}
      {...restProps}
    >
      {children}
    </StyledHeader>
  );
};
