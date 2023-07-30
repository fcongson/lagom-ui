import styled from "styled-components";
import { useMergedTheme } from "../../hooks/useMergedTheme";

const HeroContainer = styled.div`
  display: grid;
  overflow: hidden;
  margin: 0 auto 8rem auto;

  ${(props) => props.theme.mediaQueries.small} {
    margin: 0 auto 4rem auto;
  }
`;

const HeroImage = styled.div`
  grid-area: 1 / 1;
  width: 100%;
  height: 100vh;
`;

const HeroImageOverlay = styled.div`
  grid-area: 1 / 1;
  width: 100%;
  height: 100vh;
  background-color: var(--lagom-semantic-color-overlay-background);
  opacity: var(--lagom-semantic-opacity-overlay);
`;

const HeroContent = styled.div`
  grid-area: 1 / 1;
  justify-self: center;
  align-self: center;
  z-index: 1;
  overflow: hidden;
  color: var(--lagom-semantic-color-fg-default);
`;

export const Hero: React.FunctionComponent<{
  image: React.ReactElement;
  children?: React.ReactNode;
}> = ({ image, children, ...restProps }) => {
  const mergedTheme = useMergedTheme();
  return (
    <HeroContainer theme={mergedTheme} {...restProps}>
      {!!image ? (
        <>
          <HeroImage>{image}</HeroImage>
        </>
      ) : null}
      {!!children ? (
        <>
          <HeroImageOverlay />
          <HeroContent>{children}</HeroContent>
        </>
      ) : null}
    </HeroContainer>
  );
};
