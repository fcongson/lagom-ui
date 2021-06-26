import styled from "styled-components";
import { space, SpaceProps, typography, TypographyProps } from "styled-system";
import { useMergedTheme } from "../../hooks/useMergedTheme";

const StyledHeader = styled.h2<TypographyProps & SpaceProps>`
  ${typography}
  ${space}
`;

StyledHeader.defaultProps = {
  fontFamily: "sansSerif",
  fontWeight: "header",
  fontSize: [5, null, 6, null, 7],
  lineHeight: [5, null, 6, null, 7],
  textAlign: "center",
  margin: "0 auto",
  marginBottom: [4, null, null, null, 5],
};

export const SectionHeader: React.FunctionComponent<
  React.ComponentProps<"h2"> & TypographyProps & SpaceProps
> = ({ children, ref, ...restProps }) => {
  const mergedTheme = useMergedTheme();
  return (
    <StyledHeader theme={mergedTheme} {...restProps}>
      {children}
    </StyledHeader>
  );
};
