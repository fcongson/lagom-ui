import { createElement } from "react";
import { ButtonTheme } from "../components/Button";

/**
 * Typography overrides for `createTheme()`. Each value is written to a
 * `--themed-core-*` or `--themed-header-scale-*` custom property on `:root`.
 */
export type CoreTheme = {
  /** Font stacks, as CSS `font-family` values. */
  fontFamilies?: {
    /**
     * Serif stack. Written to `--themed-core-font-families-serif`, but no
     * Lagom component reads it yet, so it has no visible effect.
     */
    serif?: string;
    /** Sans-serif stack. Currently only applied to `Button` text. */
    sansSerif?: string;
    /**
     * Monospace stack. Written to `--themed-core-font-families-monospace`,
     * but no Lagom style reads it yet, so it has no visible effect.
     */
    monospace?: string;
  };
  /** Font sizes, as CSS lengths. */
  fontSizes?: {
    /** Body text size. Currently only applied to `Button` text. */
    body?: string;
  };
  /**
   * Heading sizes, from 1 (largest) to 6, as CSS lengths. Headings step down
   * the scale on smaller screens (e.g. `PageHeader` uses 1, then 2, then 3).
   */
  headerScale?: {
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
  };
};

/**
 * The theme object. Pass it to `ThemeProvider`, and read it with `useTheme()`.
 * Layout values (sizes, breakpoints, media queries) are exposed to JavaScript
 * only. CSS layout widths come from lagom-tokens. `core` and `button` are
 * applied as CSS custom properties by `createTheme()`'s `GlobalStyle`.
 */
export type ThemeType = {
  /** Section max width in px (default 1800). JS only. */
  MAX_WIDTH_SECTION?: number;
  /** Container max width in px (default 1120). JS only. */
  MAX_WIDTH_CONTAINER?: number;
  /** Max width of centred text content in px (default 800). JS only. */
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
  /** Typography overrides. */
  core?: CoreTheme;
  /** Button overrides. */
  button?: ButtonTheme;
};

/**
 * Builds a theme from overrides. Returns the `theme` object (for
 * `ThemeProvider`) and a `GlobalStyle` component. Render `<GlobalStyle />`
 * once to write the `core` and `button` overrides as `--themed-*` custom
 * properties on `:root`. Omitted fields keep their lagom-tokens defaults.
 *
 * For one-off overrides, you can set `--themed-*` properties in your own CSS
 * instead.
 *
 * @example
 * const { theme, GlobalStyle } = createTheme({
 *   core: { fontFamilies: { serif: "Georgia, serif" } },
 *   button: { borderRadius: "999px" },
 * });
 */
export const createTheme = ({
  MAX_WIDTH_SECTION = 1800,
  MAX_WIDTH_CONTAINER = 1120,
  MAX_WIDTH_CONTENT = 800,
  core,
  button,
}: ThemeType): {
  theme: ThemeType;
  GlobalStyle: React.FunctionComponent;
} => {
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

  // Only emit declarations for values the caller provided. An omitted field
  // must leave its --themed-* property unset so components'
  // var(--themed-x, var(--lagom-x)) fallbacks resolve to the lagom token;
  // interpolating it would write the literal string "undefined" instead.
  const themedProperties: Record<string, string | undefined> = {
    // font families
    "--themed-core-font-families-monospace": core?.fontFamilies?.monospace,
    "--themed-core-font-families-serif": core?.fontFamilies?.serif,
    "--themed-core-font-families-sans-serif": core?.fontFamilies?.sansSerif,
    "--themed-core-font-sizes-body": core?.fontSizes?.body,

    // header scale
    "--themed-header-scale-1": core?.headerScale?.[1],
    "--themed-header-scale-2": core?.headerScale?.[2],
    "--themed-header-scale-3": core?.headerScale?.[3],
    "--themed-header-scale-4": core?.headerScale?.[4],
    "--themed-header-scale-5": core?.headerScale?.[5],
    "--themed-header-scale-6": core?.headerScale?.[6],

    // button theme
    "--themed-component-button-border-radius": button?.borderRadius,
    "--themed-component-button-color-primary-background":
      button?.primary?.backgroundColor,
    "--themed-component-button-color-primary-text": button?.primary?.color,
    "--themed-component-button-color-primary-border":
      button?.primary?.borderColor,
    "--themed-component-button-color-secondary-background":
      button?.secondary?.backgroundColor,
    "--themed-component-button-color-secondary-text": button?.secondary?.color,
    "--themed-component-button-color-secondary-border":
      button?.secondary?.borderColor,
  };

  const declarations = Object.entries(themedProperties)
    .filter(([, value]) => value !== undefined)
    .map(([property, value]) => `  ${property}: ${value};`)
    .join("\n");

  // Renders as a plain <style> tag rather than styled-components'
  // createGlobalStyle. Placement in the DOM doesn't matter for :root custom
  // properties, so an inline tag works the same as a <head>-injected one.
  const globalStyleCss = `:root {\n${declarations}\n}`;

  const GlobalStyle: React.FunctionComponent = () =>
    createElement("style", undefined, globalStyleCss);

  return {
    theme: {
      MAX_WIDTH_SECTION,
      MAX_WIDTH_CONTAINER,
      MAX_WIDTH_CONTENT,
      sizes,
      breakpoints,
      mediaQueries,
    },
    GlobalStyle,
  };
};
