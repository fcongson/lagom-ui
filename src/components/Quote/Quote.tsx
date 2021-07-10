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

  & > :first-child:before {
    content: open-quote;
    font-size: 2em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  & > :last-child:after {
    content: close-quote;
    font-size: 2em;
    line-height: 0.1em;
    margin-left: 0.025em;
    vertical-align: -0.4em;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

export const Quote: React.FunctionComponent<
  React.ComponentProps<"blockquote">
> = ({ children, ref, ...restProps }) => {
  const mergedTheme = useMergedTheme();
  return (
    <StyledBlockquote theme={mergedTheme} {...restProps}>
      {children}
    </StyledBlockquote>
  );
};
