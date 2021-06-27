import styled from "styled-components";
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";

/**
 * Primarily used as a child of `Section`. Provides a container for the section contents.
 */
export const Container = styled.div<
  SpaceProps & LayoutProps & ColorProps & FlexboxProps
>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`;

Container.defaultProps = {
  maxWidth: "maxWidthContainer",
  margin: "0 auto",
  marginBottom: [5, null, 6, null],
};

// export const Container: React.FunctionComponent<
//   React.ComponentProps<"div"> &
//     SpaceProps &
//     LayoutProps &
//     ColorProps &
//     FlexboxProps
// > = ({ children, ref, color, ...restProps }) => {
//   const mergedTheme = useMergedTheme();
//   return (
//     <StyledContainer theme={mergedTheme} {...restProps}>
//       {children}
//     </StyledContainer>
//   );
// };
