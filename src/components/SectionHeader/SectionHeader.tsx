import clsx from "clsx";
import styled from "styled-components";
import { useMergedTheme } from "../../hooks/useMergedTheme";

const StyledHeader = styled.h2`
  &.lagom-section-header {
    color: var(--lagom-semantic-color-fg-default);
    font: var(--lagom-component-section-header-typography);
    text-align: center;
    text-wrap: balance;
    margin: 0 auto;
    margin-bottom: var(--lagom-core-spacing-xxl);

    ${({ theme }) => theme.mediaQueries.large} {
      font-size: var(--header-scale-3);
    }
    ${({ theme }) => theme.mediaQueries.small} {
      font-size: var(--header-scale-4);
      margin-bottom: var(--lagom-core-spacing-xl);
    }
  }
`;

export const SectionHeader: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"h2">
> = ({ children, className, ...restProps }) => {
  const mergedTheme = useMergedTheme();
  return (
    <StyledHeader
      theme={mergedTheme}
      className={clsx("lagom-section-header", className)}
      {...restProps}
    >
      {children}
    </StyledHeader>
  );
};
