// The Storybook UI around the stories uses Fern, the default brand.
import * as dark from "@fcongson/lagom-brands/fern/js/dark.js";
import * as light from "@fcongson/lagom-brands/fern/js/light.js";
import { create } from "storybook/theming/create";

export default create({
  base: "light",
  // Typography
  fontBase: light.lagomCoreFontFamiliesBody,
  fontCode: light.lagomCoreFontFamiliesMonospace,

  brandTitle: "Lagom UI",
  brandUrl: "https://lagom-ui.netlify.app",
  brandImage: "/logo.png",
  brandTarget: "_self",

  //
  colorPrimary: light.lagomSemanticColorAccentDefault,
  colorSecondary: light.lagomSemanticColorAccentDefault,

  // UI
  appBg: light.lagomSemanticColorBgDefault,
  appContentBg: light.lagomSemanticColorBgDefault,
  appPreviewBg: light.lagomSemanticColorBgDefault,
  appBorderColor: light.lagomSemanticColorBorderSecondary,
  appBorderRadius: 0,

  // Text colors
  textColor: light.lagomSemanticColorFgDefault,
  textInverseColor: dark.lagomSemanticColorFgDefault,

  // Toolbar default and active colors
  barTextColor: light.lagomSemanticColorFgDefault,
  barHoverColor: light.lagomSemanticColorAccentDefault,
  barSelectedColor: light.lagomSemanticColorAccentDefault,
  barBg: light.lagomSemanticColorBgDefault,

  // Form colors
  inputBg: light.lagomSemanticColorBgDefault,
  inputBorder: light.lagomSemanticColorBorderDefault,
  inputTextColor: light.lagomSemanticColorFgDefault,
  // inputBorderRadius: 2,
});
