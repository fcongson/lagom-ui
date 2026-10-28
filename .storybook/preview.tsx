import "@fcongson/lagom-brands/fern/css/fern.css";
import "@fcongson/lagom-brands/waypoint/css/waypoint.css";
import "@fcongson/lagom-tokens/css/lagom.css";

// Fonts for every brand in the toolbar, bundled with Storybook from
// Fontsource rather than fetched from Google Fonts, so Chromatic snapshots
// never catch a font mid-load. They're imported here, not from a separate
// module, because package.json's sideEffects would let webpack drop an
// import-only .ts file. Weights match the tokens: 400 body, 600
// semi-bold, 700 bold, and italic for Quote's serif.

// Fern (silkamono, its monospace, is self-hosted in style.css)
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/domine/400.css";
import "@fontsource/domine/700.css";

// Base
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/600.css";
import "@fontsource/lexend/700.css";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/400-italic.css";
import "@fontsource/source-serif-4/700.css";
import "@fontsource/dm-mono/400.css";

// Waypoint
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/600.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/ibm-plex-mono/400.css";

import { Decorator, Preview } from "@storybook/react-webpack5";
import { ThemeProvider } from "../src/themes/ThemeProvider";
import { defaultModes } from "../src/stories/utils/modes";
import "./style.css";

// [Toolbars & globals](https://storybook.js.org/docs/essentials/toolbars-and-globals)
//
// Three toolbar switches set the same attributes an app would:
//   brand     data-lagom-brand on <html> (Base: no attribute)
//   mode      data-lagom-theme="dark" on <html>, or on each half of a
//             side-by-side or stacked view
//   contrast  data-lagom-contrast="more" on <html>

const setAttribute = (name: string, value?: string) => {
  const root = document.documentElement;
  if (value) root.setAttribute(name, value);
  else root.removeAttribute(name);
};

const withLagom: Decorator = (Story, context) => {
  const {
    globals: { brand, mode, contrast },
    viewMode,
  } = context;
  setAttribute("data-lagom-brand", brand === "base" ? undefined : brand);
  setAttribute("data-lagom-contrast", contrast === "more" ? "more" : undefined);
  setAttribute("data-lagom-theme", mode === "dark" ? "dark" : undefined);

  const height = viewMode === "story" ? "100vh" : "100%";
  const split = mode === "side-by-side" || mode === "stacked";
  const flexDirection = mode === "stacked" ? "column" : "row";

  return (
    <ThemeProvider>
      <div
        className="lagom-story-container"
        style={{ flexDirection, minHeight: height }}
      >
        {split ? (
          <>
            <div className="lagom-story-block">
              <Story />
            </div>
            <div className="lagom-story-block" data-lagom-theme="dark">
              <Story />
            </div>
          </>
        ) : (
          <div className="lagom-story-block">
            <Story />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

const globalTypes = {
  brand: {
    description: "Brand",
    toolbar: {
      title: "Brand",
      icon: "paintbrush",
      items: [
        { value: "fern", title: "Fern" },
        { value: "waypoint", title: "Waypoint" },
        { value: "base", title: "Base" },
      ],
      dynamicTitle: true,
    },
  },
  mode: {
    description: "Light or dark mode",
    toolbar: {
      title: "Mode",
      icon: "sun",
      items: [
        { value: "light", icon: "sun", title: "Light" },
        { value: "dark", icon: "moon", title: "Dark" },
        { value: "side-by-side", icon: "sidebyside", title: "Side-by-side" },
        { value: "stacked", icon: "stacked", title: "Stacked" },
      ],
      dynamicTitle: true,
    },
  },
  contrast: {
    description: "Increased contrast",
    toolbar: {
      title: "Contrast",
      icon: "contrast",
      items: [
        { value: "normal", title: "Normal contrast" },
        { value: "more", title: "Increased contrast" },
      ],
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chromatic: { modes: defaultModes },
    options: {
      storySort: {
        order: [
          "About",
          "Getting Started",
          "Theming",
          "Patterns",
          [
            "Page Structure",
            "Landing Page",
            "Article",
            "Content Page",
            "Examples",
          ],
          "Style Guide",
          "Design Tokens",
          ["About", "Using Tokens", "Tokens"],
          "Components",
          "Layouts",
        ],
      },
    },
  },
  initialGlobals: { brand: "fern", mode: "light", contrast: "normal" },
  decorators: [withLagom],
  globalTypes,
};

export default preview;
