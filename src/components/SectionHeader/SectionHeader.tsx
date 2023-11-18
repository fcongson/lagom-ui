import styled from "styled-components";
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import { useMergedTheme } from "../../hooks/useMergedTheme";

const StyledHeader = styled.h2<TypographyProps & SpaceProps & ColorProps>`
  color: var(--lagom-semantic-color-fg-default);
  font: var(--lagom-component-section-header-typography);
  text-align: center;
  margin: 0 auto;
  margin-bottom: var(--lagom-core-spacing-xxl);

  ${typography}
  ${space}
  ${color}
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
  React.ComponentPropsWithoutRef<"h2"> & TypographyProps & SpaceProps
> = ({ children, ...restProps }) => {
  const mergedTheme = useMergedTheme();
  return (
    <StyledHeader theme={mergedTheme} {...restProps}>
      {children}
    </StyledHeader>
  );
};
