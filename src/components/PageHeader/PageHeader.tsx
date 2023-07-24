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

const StyledHeader = styled.h1<TypographyProps & SpaceProps & ColorProps>`
  color: var(--lagom-semantic-color-fg-default);

  ${typography}
  ${space}
  ${color}
`;

StyledHeader.defaultProps = {
  fontFamily: "sansSerif",
  fontWeight: "header",
  fontSize: [6, null, 7, null, 8],
  lineHeight: [6, null, 7, null, 8],
  textAlign: "center",
  margin: "0 auto",
  marginBottom: [4, null, null, null, 5],
};

export const PageHeader: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"h1"> & TypographyProps & SpaceProps
> = ({ children, ...restProps }) => {
  const mergedTheme = useMergedTheme();
  return (
    <StyledHeader theme={mergedTheme} {...restProps}>
      {children}
    </StyledHeader>
  );
};
