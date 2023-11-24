import styled from "styled-components";
import { useMergedTheme } from "../../hooks/useMergedTheme";

const StyledHeader = styled.h2`
  color: var(--lagom-semantic-color-fg-default);
  font: var(--lagom-component-section-header-typography);
  text-align: center;
  margin: 0 auto;
  margin-bottom: var(--lagom-core-spacing-xxl);

  ${(props) => props.theme.mediaQueries.large} {
    font-size: var(--header-scale-3);
  }
  ${(props) => props.theme.mediaQueries.small} {
    font-size: var(--header-scale-4);
    margin-bottom: var(--lagom-core-spacing-xl);
  }
`;

// StyledHeader.defaultProps = {
//   fontFamily: "sansSerif",
//   fontWeight: "header",
//   fontSize: [5, null, 6, null, 7],
//   lineHeight: [5, null, 6, null, 7],
//   textAlign: "center",
//   margin: "0 auto",
//   marginBottom: [4, null, null, null, 5],
// };

export const SectionHeader: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"h2">
> = ({ children, ...restProps }) => {
  const mergedTheme = useMergedTheme();
  return (
    <StyledHeader theme={mergedTheme} {...restProps}>
      {children}
    </StyledHeader>
  );
};
