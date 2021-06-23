import React from "react";
import styled from "styled-components";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import { useMergedTheme } from "../../hooks/useMergedTheme";

const StyledContainer = styled.div<SpaceProps & LayoutProps & ColorProps>`
  ${space}
  ${layout}
  ${color}
`;

StyledContainer.defaultProps = {
  maxWidth: "maxWidthContainer",
  margin: "0 auto",
  marginBottom: [5, null, 6, null],
};

/**
 * Primarily used as a child of `Section`. Provides a container for the section contents.
 */
export const Container: React.FunctionComponent<ColorProps> = ({
  children,
  color,
  ...restProps
}) => {
  const mergedTheme = useMergedTheme();
  return (
    <StyledContainer theme={mergedTheme} {...restProps}>
      {children}
    </StyledContainer>
  );
};
