// Resolved token values for the brand, mode, and contrast chosen in the
// Storybook toolbar, for the token gallery stories. Each module is a brand's
// fully resolved tokens for one variant (lagom-tokens' JS output), so the
// gallery shows what the selected brand actually renders.
import * as baseDark from "@fcongson/lagom-tokens/js/dark.js";
import * as baseLight from "@fcongson/lagom-tokens/js/light.js";
import * as baseMoreDark from "@fcongson/lagom-tokens/js/more-dark.js";
import * as baseMore from "@fcongson/lagom-tokens/js/more.js";
import * as fernDark from "@fcongson/lagom-brands/fern/js/dark.js";
import * as fernLight from "@fcongson/lagom-brands/fern/js/light.js";
import * as fernMoreDark from "@fcongson/lagom-brands/fern/js/more-dark.js";
import * as fernMore from "@fcongson/lagom-brands/fern/js/more.js";
import * as waypointDark from "@fcongson/lagom-brands/waypoint/js/dark.js";
import * as waypointLight from "@fcongson/lagom-brands/waypoint/js/light.js";
import * as waypointMoreDark from "@fcongson/lagom-brands/waypoint/js/more-dark.js";
import * as waypointMore from "@fcongson/lagom-brands/waypoint/js/more.js";

export type Brand = "fern" | "waypoint" | "base";
type Tokens = Record<string, string>;

const MODULES: Record<Brand, Record<string, Tokens>> = {
  base: {
    light: baseLight,
    dark: baseDark,
    more: baseMore,
    "more-dark": baseMoreDark,
  },
  fern: {
    light: fernLight,
    dark: fernDark,
    more: fernMore,
    "more-dark": fernMoreDark,
  },
  waypoint: {
    light: waypointLight,
    dark: waypointDark,
    more: waypointMore,
    "more-dark": waypointMoreDark,
  },
};

/** JS export prefix of each brand's palette (`fernOlive45`). */
export const PALETTE_PREFIX: Record<Brand, string> = {
  base: "lagom",
  fern: "fern",
  waypoint: "waypoint",
};

/** The selected brand's tokens, from the Storybook toolbar globals. */
export const brandTokens = (globals: {
  brand?: string;
  mode?: string;
  contrast?: string;
}): { brand: Brand; tokens: Tokens } => {
  const brand = (
    globals.brand && globals.brand in MODULES ? globals.brand : "fern"
  ) as Brand;
  const dark = globals.mode === "dark";
  const more = globals.contrast === "more";
  const variant = more
    ? dark
      ? "more-dark"
      : "more"
    : dark
      ? "dark"
      : "light";
  return { brand, tokens: MODULES[brand][variant] };
};

/**
 * Palette families in a brand's tokens, in source order, each with its
 * stops sorted by tone: `{ olive: [["fernOlive5", "#101110"], …] }`.
 */
export const paletteFamilies = (brand: Brand, tokens: Tokens) => {
  const pattern = new RegExp(`^${PALETTE_PREFIX[brand]}([A-Z][a-z]+)(\\d+)$`);
  const families: Record<string, Array<[string, string, number]>> = {};
  for (const [key, value] of Object.entries(tokens)) {
    const match = key.match(pattern);
    if (!match) continue;
    const family = match[1].toLowerCase();
    (families[family] ??= []).push([key, value, Number(match[2])]);
  }
  return Object.fromEntries(
    Object.entries(families).map(([family, stops]) => [
      family,
      stops.sort((a, b) => a[2] - b[2]).map(([key, value]) => [key, value]),
    ]),
  ) as Record<string, Array<[string, string]>>;
};
