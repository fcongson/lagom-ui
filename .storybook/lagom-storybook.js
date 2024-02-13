import * as dark from "@fcongson/lagom-tokens/js/theme/dark";
import * as light from "@fcongson/lagom-tokens/js/theme/light";
import * as core from "@fcongson/lagom-tokens/js/variables/core";
import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  // Typography
  fontBase: core.lagomCoreFontFamiliesBody,
  fontCode: core.lagomCoreFontFamiliesMonospace,

  brandTitle: "Lagom UI",
  brandUrl: "https://lagom-ui.netlify.app",
  brandImage: "/logo.png",
  brandTarget: "_self",

  //
  // colorPrimary: light.lagomSemanticColorBrandPrimary,
  // colorSecondary: light.lagomSemanticColorBrandSecondary,

  // UI
  appBg: light.lagomSemanticColorBgDefault,
  appContentBg: light.lagomSemanticColorBgDefault,
  appPreviewBg: light.lagomSemanticColorBgDefault,
  appBorderColor: light.lagomSemanticColorBorderMuted,
  // appBorderRadius: 4,

  // Text colors
  textColor: light.lagomSemanticColorFgDefault,
  textInverseColor: dark.lagomSemanticColorFgDefault,

  // Toolbar default and active colors
  barTextColor: light.lagomSemanticColorFgDefault,
  // barSelectedColor: light.lagomSemanticColorBrandPrimary,
  barBg: light.lagomSemanticColorBgDefault,

  // Form colors
  inputBg: light.lagomSemanticColorBgDefault,
  inputBorder: light.lagomSemanticColorBorderDefault,
  inputTextColor: light.lagomSemanticColorFgDefault,
  // inputBorderRadius: 2,
});
