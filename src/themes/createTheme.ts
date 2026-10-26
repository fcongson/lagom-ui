/**
 * The theme object. Pass it to `ThemeProvider`, and read it with `useTheme()`.
 *
 * It holds layout values (sizes, breakpoints, media queries) for JavaScript,
 * such as CSS-in-JS or `matchMedia`. It doesn't change how components look:
 * colours, fonts, radii, spacing, and borders all come from lagom-tokens
 * custom properties. To change those, override the tokens in CSS (see
 * Theming).
 */
export type ThemeType = {
  /** Section max width in px (default 1800). */
  MAX_WIDTH_SECTION?: number;
  /** Container max width in px (default 1120). */
  MAX_WIDTH_CONTAINER?: number;
  /** Max width of centred text content in px (default 800). */
  MAX_WIDTH_CONTENT?: number;
  /** The max widths above as CSS lengths, plus the emphasized-image breakpoint. */
  sizes?: {
    maxWidthSection: string;
    maxWidthContainer: string;
    maxWidthContent: string;
    minWidthEmph: string;
  };
  /** Breakpoint widths used by Lagom's CSS media queries. */
  breakpoints?: {
    mobilePortrait: string;
    mobileLandscape: string;
    tabletPortrait: string;
    tabletLandscape: string;
  };
  /** Ready-made `@media` query strings for each breakpoint, for CSS-in-JS. */
  mediaQueries?: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    emphasized: string;
  };
};

/**
 * Builds the theme object for `ThemeProvider` from your layout widths.
 * Returns `{ theme }`. The values are for your JavaScript only: Lagom's CSS
 * doesn't read them.
 *
 * @example
 * const { theme } = createTheme({ MAX_WIDTH_CONTAINER: 960 });
 * <ThemeProvider theme={theme}>…</ThemeProvider>
 */
export const createTheme = ({
  MAX_WIDTH_SECTION = 1800,
  MAX_WIDTH_CONTAINER = 1120,
  MAX_WIDTH_CONTENT = 800,
}: Pick<
  ThemeType,
  "MAX_WIDTH_SECTION" | "MAX_WIDTH_CONTAINER" | "MAX_WIDTH_CONTENT"
> = {}): { theme: ThemeType } => {
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

  return {
    theme: {
      MAX_WIDTH_SECTION,
      MAX_WIDTH_CONTAINER,
      MAX_WIDTH_CONTENT,
      sizes,
      breakpoints,
      mediaQueries,
    },
  };
};
