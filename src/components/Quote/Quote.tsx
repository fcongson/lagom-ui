import styled from "styled-components";
import { useMergedTheme } from "../../hooks/useMergedTheme";

const StyledBlockquote = styled.blockquote`
  margin-bottom: 2rem;
  padding-left: 1rem;
  border-left: 4px solid var(--lagom-semantic-color-border-default);
  display: inline-block;
  font-family: var(--lagom-core-font-families-sans-serif);
  font-style: italic;
  font-size: var(--lagom-core-font-sizes-xl);
  color: var(--lagom-semantic-color-fg-muted);

  ${(props) => props.theme.mediaQueries.large} {
    border-left: 2px solid var(--lagom-semantic-color-border-default);
    font-size: var(--lagom-core-font-sizes-body);
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
