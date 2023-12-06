import { ButtonTheme } from "components/Button";
import { ExecutionProps, createGlobalStyle } from "styled-components";

export type CoreTheme = {
  fontFamilies?: {
    serif?: string;
    sansSerif?: string;
    monospace?: string;
  };
  fontSizes?: {
    body?: string;
  };
  headerScale?: {
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
  };
};

export type ThemeType = {
  MAX_WIDTH_SECTION?: number;
  MAX_WIDTH_CONTAINER?: number;
  MAX_WIDTH_CONTENT?: number;
  sizes?: {
    maxWidthSection: string;
    maxWidthContainer: string;
    maxWidthContent: string;
    minWidthEmph: string;
  };
  breakpoints?: {
    mobilePortrait: string;
    mobileLandscape: string;
    tabletPortrait: string;
    tabletLandscape: string;
  };
  mediaQueries?: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    emphasized: string;
  };
  core?: CoreTheme;
  button?: ButtonTheme;
};

export const createTheme = ({
  MAX_WIDTH_SECTION = 1800,
  MAX_WIDTH_CONTAINER = 1120,
  MAX_WIDTH_CONTENT = 800,
  core,
  button,
}: ThemeType): {
  theme: ThemeType;
  GlobalStyle: React.NamedExoticComponent<ExecutionProps & object>;
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

  const GlobalStyle = createGlobalStyle`
    :root {
      /* font families */
      --themed-core-font-families-monospace: ${core?.fontFamilies?.monospace};
      --themed-core-font-families-serif: ${core?.fontFamilies?.serif};
      --themed-core-font-families-sans-serif: ${core?.fontFamilies?.sansSerif};
      --themed-core-font-sizes-body: ${core?.fontSizes?.body};

      /* header scale */
      --themed-header-scale-1: ${core?.headerScale?.[1]};
      --themed-header-scale-2: ${core?.headerScale?.[2]};
      --themed-header-scale-3: ${core?.headerScale?.[3]};
      --themed-header-scale-4: ${core?.headerScale?.[4]};
      --themed-header-scale-5: ${core?.headerScale?.[5]};
      --themed-header-scale-6: ${core?.headerScale?.[6]};

      /* button theme */
      --themed-component-button-border-radius: ${button?.borderRadius};
      --themed-component-button-color-primary-background: ${button?.primary?.backgroundColor};
      --themed-component-button-color-primary-text: ${button?.primary?.color};
      --themed-component-button-color-primary-border: ${button?.primary?.borderColor};
      --themed-component-button-color-secondary-background: ${button?.secondary?.backgroundColor};
      --themed-component-button-color-secondary-text: ${button?.secondary?.color};
      --themed-component-button-color-secondary-border: ${button?.secondary?.borderColor};
    }
  `;

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
