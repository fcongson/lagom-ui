import clsx from "clsx";
import styled from "styled-components";
import { useMergedTheme } from "../../hooks/useMergedTheme";

const StyledHeader = styled.h1`
  &.lagom-page-header {
    color: var(--lagom-semantic-color-fg-default);
    font: var(--lagom-component-page-header-typography);
    text-align: center;
    text-wrap: balance;
    margin: 0 auto;
    margin-bottom: var(--lagom-core-spacing-xxl);

    ${({ theme }) => theme.mediaQueries.large} {
      font-size: var(--header-scale-2);
    }
    ${({ theme }) => theme.mediaQueries.small} {
      font-size: var(--header-scale-3);
      margin-bottom: var(--lagom-core-spacing-xl);
    }
  }
`;

export const PageHeader: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"h1">
> = ({ children, className, ...restProps }) => {
  const mergedTheme = useMergedTheme();
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
