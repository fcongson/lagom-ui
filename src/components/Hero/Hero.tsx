import clsx from "clsx";
import styled from "styled-components";
import { useTheme } from "../../hooks/useTheme";

const HeroContainer = styled.div`
  &.lagom-hero {
    width: 100%;
    height: var(--hero-height, 100vh);
    display: grid;
    margin: 0 auto 8rem auto;

    ${({ theme }) => theme.mediaQueries.small} {
      margin: 0 auto 4rem auto;
    }
  }
`;

const HeroImage = styled.div`
  &.lagom-hero__image {
    width: 100%;
    height: var(--hero-height, 100vh);
    grid-area: 1/1;
  }
`;

const HeroImageOverlay = styled.div`
  &.lagom-hero__image-overlay {
    grid-area: 1 / 1;
    background-color: var(--lagom-semantic-color-overlay-background);
    opacity: var(--lagom-semantic-opacity-overlay);
  }
`;

const HeroContent = styled.div`
  &.lagom-hero__content {
    grid-area: 1/1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
`;

export const Hero: React.FunctionComponent<{
  image: React.ReactElement;
  children?: React.ReactNode;
  className?: string;
}> = ({ image, children, className, ...restProps }) => {
  const mergedTheme = useTheme();
  return (
    <HeroContainer
      theme={mergedTheme}
      className={clsx("lagom-hero", className)}
      {...restProps}
    >
      {!!image ? (
        <>
          <HeroImage className="lagom-hero__image">{image}</HeroImage>
        </>
      ) : null}
      {!!children ? (
        <>
          <HeroImageOverlay className="lagom-hero__image-overlay" />
          <HeroContent className="lagom-hero__content">{children}</HeroContent>
        </>
      ) : null}
    </HeroContainer>
  );
};
