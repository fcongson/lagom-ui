import clsx from "clsx";
import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";

const StyledHeader = styled.h2`
  /* .lagom-section-header */
  color: var(--lagom-semantic-color-fg-default);
  font: var(--lagom-component-section-header-typography);
  font-size: var(--header-scale-2);
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
`;

export const SectionHeader: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"h2">
> = ({ children, className, ...restProps }) => {
  const mergedTheme = useTheme();
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
