import styled from "styled-components";
import { useMergedTheme } from "../../hooks/useMergedTheme";

const StyledBlockquote = styled.blockquote`
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 4px solid ${(props) => props.theme.colors.greys[0]};
  display: inline-block;
  font-family: ${(props) => props.theme.fonts.serif};
  font-style: italic;
  font-size: ${(props) => props.theme.fontSizes[4]}px;
  color: ${(props) => props.theme.colors.greys[1]};

  ${(props) => props.theme.mediaQueries.large} {
    border-left: 2px solid ${(props) => props.theme.colors.greys[0]};
    font-size: ${(props) => props.theme.fontSizes.body}px;
  }

  ${(props) => props.theme.mediaQueries.emphasized} {
    width: 130%;
    margin: 0 -15% 2rem -15%;
    padding-left: 2rem;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

export const Quote: React.FunctionComponent<
  React.ComponentPropsWithoutRef<"blockquote">
> = ({ children, ...restProps }) => {
  const mergedTheme = useMergedTheme();
  return (
    <StyledBlockquote theme={mergedTheme} {...restProps}>
      {children}
    </StyledBlockquote>
  );
};
