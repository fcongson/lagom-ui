import { useMergedTheme } from "hooks/useMergedTheme";
import styled from "styled-components";
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";

const StyledSection = styled.section<SpaceProps & LayoutProps & ColorProps>`
  ${space}
  ${layout}
  ${color}

  /* Fallback */
  padding: 0 1rem;

  /* iOS 11 */
  padding-left: calc(max(1rem, constant(safe-area-inset-left)));
  padding-right: calc(max(1rem, constant(safe-area-inset-right)));

  /* iOS 11.2+ */
  padding-left: calc(max(1rem, env(safe-area-inset-left)));
  padding-right: calc(max(1rem, env(safe-area-inset-right)));
`;

StyledSection.defaultProps = {
  maxWidth: "maxWidthSection",
  margin: "0 auto",
};

/**
 * A layout element that defines a section in a document.
 */
export const Section: React.FunctionComponent<ColorProps> = ({
  children,
  color,
  ...restProps
}) => {
  const mergedTheme = useMergedTheme();
  return (
    <StyledSection theme={mergedTheme} {...restProps}>
      {children}
    </StyledSection>
  );
};
