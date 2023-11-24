import styled from "styled-components";
import { useMergedTheme } from "../../hooks/useMergedTheme";

const StyledHeader = styled.h1`
  color: var(--lagom-semantic-color-fg-default);
  font: var(--lagom-component-page-header-typography);
  text-align: center;
  margin: 0 auto;
  margin-bottom: var(--lagom-core-spacing-xxl);

  ${(props) => props.theme.mediaQueries.large} {
    font-size: var(--header-scale-2);
  }
  ${(props) => props.theme.mediaQueries.small} {
    font-size: var(--header-scale-3);
    margin-bottom: var(--lagom-core-spacing-xl);
  }
`;

// StyledHeader.defaultProps = {
//   fontFamily: "sansSerif",
//   fontWeight: "header",
//   fontSize: [6, null, 7, null, 8],
//   lineHeight: [6, null, 7, null, 8],
//   textAlign: "center",
//   margin: "0 auto",
//   marginBottom: [4, null, null, null, 5],
// };

export const PageHeader: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"h1">
> = ({ children, ...restProps }) => {
  const mergedTheme = useMergedTheme();
  return (
    <StyledHeader theme={mergedTheme} {...restProps}>
      {children}
    </StyledHeader>
  );
};
