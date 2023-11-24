const MAX_WIDTH_CONTAINER = 1120;
const sizes: { [key: string]: string } = {
  maxWidthSection: "1800px",
  maxWidthContainer: `${MAX_WIDTH_CONTAINER}px`,
  minWidthEmph: `${MAX_WIDTH_CONTAINER * 1.3}px`,
  maxWidthContent: "800px",
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
  breakpoints: { [key: string]: string };
  mediaQueries: { [key: string]: string };
};

export const theme: ThemeType = {
  breakpoints,
  mediaQueries,
};
