const MAX_WIDTH_SECTION = 1800;
const MAX_WIDTH_CONTAINER = 1120;
const MAX_WIDTH_CONTENT = 800;
const sizes: { [key: string]: string } = {
  maxWidthSection: `${MAX_WIDTH_SECTION}px`,
  maxWidthContainer: `${MAX_WIDTH_CONTAINER}px`,
  maxWidthContent: `${MAX_WIDTH_CONTENT}px`,
  minWidthEmph: `${MAX_WIDTH_CONTAINER * 1.3}px`,
};

const breakpoints: { [key: string]: string } = {
  mobilePortrait: "320px",
  mobileLandscape: "568px",
  tabletPortrait: "768px",
  tabletLandscape: "992px",
};

const mediaQueries: { [key: string]: string } = {
  xsmall: `@media screen and (max-width: ${breakpoints.mobilePortrait})`,
  small: `@media screen and (max-width: ${breakpoints.mobileLandscape})`,
  medium: `@media screen and (max-width: ${breakpoints.tabletPortrait})`,
  large: `@media screen and (max-width: ${breakpoints.tabletLandscape})`,
  emphasized: `@media screen and (min-width: ${sizes.minWidthEmph})`,
};

export type ThemeType = {
  sizes?: { [key: string]: string };
  breakpoints?: { [key: string]: string };
  mediaQueries?: { [key: string]: string };
};

export const theme: ThemeType = {
  sizes,
  breakpoints,
  mediaQueries,
};
