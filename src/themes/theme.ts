import { ThemeType } from "./createTheme";

const MAX_WIDTH_SECTION = 1800;
const MAX_WIDTH_CONTAINER = 1120;
const MAX_WIDTH_CONTENT = 800;

const sizes: ThemeType["sizes"] = {
  maxWidthSection: `${MAX_WIDTH_SECTION}px`,
  maxWidthContainer: `${MAX_WIDTH_CONTAINER}px`,
  maxWidthContent: `${MAX_WIDTH_CONTENT}px`,
  minWidthEmph: `${MAX_WIDTH_CONTAINER * 1.3}px`,
};

const breakpoints: ThemeType["breakpoints"] = {
  mobilePortrait: "320px",
  mobileLandscape: "568px",
  tabletPortrait: "768px",
  tabletLandscape: "992px",
};

const mediaQueries: ThemeType["mediaQueries"] = {
  xsmall: `@media screen and (max-width: ${breakpoints.mobilePortrait})`,
  small: `@media screen and (max-width: ${breakpoints.mobileLandscape})`,
  medium: `@media screen and (max-width: ${breakpoints.tabletPortrait})`,
  large: `@media screen and (max-width: ${breakpoints.tabletLandscape})`,
  emphasized: `@media screen and (min-width: ${sizes.minWidthEmph})`,
};

export const theme: ThemeType = {
  MAX_WIDTH_SECTION,
  MAX_WIDTH_CONTAINER,
  MAX_WIDTH_CONTENT,
  sizes,
  breakpoints,
  mediaQueries,
};
