![lagom-ui](public/lagom-logo.png)

[**Lagom**](https://en.wikipedia.org/wiki/Lagom) (pronounced [ˈlɑ̂ːɡɔm]) is a Swedish and Norwegian word meaning "just the right amount".

This component library provides just the right amount of components for my own personal projects. Primarily driven by FrankCongson.com. With theme support for individually styled projects.

Styled with plain CSS and [design tokens](https://github.com/fcongson/lagom-tokens).

Ships as dual ESM + CJS (Node >= 20), with `react`/`react-dom` (18 or 19) as peer dependencies.

## Install

`@fcongson/lagom-ui` and its `@fcongson/lagom-tokens` dependency are published to GitHub Packages, so point the `@fcongson` scope at that registry (e.g. in your project's `.npmrc`) with a token that can read packages:

```
@fcongson:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${TOKEN}
```

```
npm install @fcongson/lagom-ui @fcongson/lagom-tokens
```

## Usage

```jsx
import { Button, ThemeProvider } from "@fcongson/lagom-ui";
import "@fcongson/lagom-ui/style.css"; // once, anywhere in your app entry
import "@fcongson/lagom-tokens/css/theme/_light.css"; // default token values
import "@fcongson/lagom-tokens/css/theme/_dark.css"; // optional, see below

export const App = () => (
  <ThemeProvider>
    <Button primary>Hello</Button>
  </ThemeProvider>
);
```

Component styling isn't CSS-in-JS, so it isn't auto-injected - import lagom-ui's stylesheet once alongside your first component import. lagom-ui doesn't bundle a [lagom-tokens](https://github.com/fcongson/lagom-tokens) theme for you either: `_light.css` defines the token values on `:root`, and `_dark.css` applies dark values to anything inside an element with `data-lagom-theme="dark"`.

Render components inside `ThemeProvider`. It supplies the theme context read by `useTheme`, toggles the keyboard-only focus outline, and provides the GrowthBook context that gates experimental features - `Button` (and `LinkButton`, which renders one) throws "Missing or invalid GrowthBookProvider" without it.

### Theming

Components read `--themed-*` CSS custom properties first and fall back to the `--lagom-*` tokens, so you can override them globally on `:root` or per-instance on a wrapping element:

```css
.my-cta {
  --themed-component-button-color-primary-background: rebeccapurple;
}
```

`createTheme()` is a JS helper for the font, header-scale, and button overrides: it returns `{ theme, GlobalStyle }`, where rendering `<GlobalStyle />` writes the corresponding `--themed-*` properties onto `:root`.

## Development

Uses pnpm. Building requires Node >= 22.18 (tsdown's requirement), even though the published package supports Node >= 20.

```
pnpm install
pnpm storybook        # Storybook on http://localhost:6006
pnpm lint
pnpm typecheck
pnpm test
pnpm build            # tsdown -> build/lib
```

Releases use [Changesets](.changeset/README.md).

## Inspiration

[Customization vs. Configuration in Evolving Design Systems](https://engineering.atspotify.com/2021/04/28/customization-vs-configuration-in-evolving-design-systems/)

[Open Design Systems](https://www.designsystems.com/open-design-systems/)

[Design Systems Repo](https://designsystemsrepo.com/design-systems)
