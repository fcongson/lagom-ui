import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";

/**
 * A layout element that defines a section in a document.
 */
export const Section = styled.section<
  SpaceProps & LayoutProps & ColorProps & BorderProps
>`
  /* Fallback */
  padding: 0 1rem;

  /* iOS 11 */
  padding-left: calc(max(1rem, constant(safe-area-inset-left)));
  padding-right: calc(max(1rem, constant(safe-area-inset-right)));

  /* iOS 11.2+ */
  padding-left: calc(max(1rem, env(safe-area-inset-left)));
  padding-right: calc(max(1rem, env(safe-area-inset-right)));

  max-width: var(--sizes-max-width-section);
  margin: 0 auto;

  ${space}
  ${layout}
  ${color}
  ${border}
`;

// Section.defaultProps = {
//   maxWidth: "maxWidthSection",
//   margin: "0 auto",
// };

// export const Section: React.FunctionComponent<
//   React.ComponentProps<"div"> & SpaceProps & LayoutProps & ColorProps
// > = ({ children, ref, color, ...restProps }) => {
//   const mergedTheme = useMergedTheme();
//   return (
//     <StyledSection theme={mergedTheme} {...restProps}>
//       {children}
//     </StyledSection>
//   );
// };
