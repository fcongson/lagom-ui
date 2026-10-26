![lagom-ui](public/lagom-logo.png)

[**Lagom**](https://en.wikipedia.org/wiki/Lagom) (pronounced [ˈlɑ̂ːɡɔm]) is a Swedish and Norwegian word meaning "just the right amount".

This component library provides just the right amount of components for my own personal projects. Primarily driven by FrankCongson.com. With theme support for individually styled projects.

Styled with plain CSS and [design tokens](https://github.com/fcongson/lagom-tokens).

Ships as dual ESM + CJS (Node >= 20), with `react`/`react-dom` (18 or 19) as peer dependencies.

## Install

`@fcongson/lagom-ui` and its `@fcongson/lagom-tokens` dependency are published to GitHub Packages. Point the `@fcongson` scope at that registry in your project's `.npmrc`:

```
@fcongson:registry=https://npm.pkg.github.com
```

Then add a GitHub token with `read:packages` to your **user-level** `~/.npmrc`. pnpm 12 ignores credentials in a project's `.npmrc`, including `${TOKEN}`-style variables.

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

```
pnpm add @fcongson/lagom-ui @fcongson/lagom-tokens
```

The Storybook's **Getting Started** page also covers CI and hosting (GitHub Actions, Netlify).

## Usage

```jsx
import { Button, ThemeProvider } from "@fcongson/lagom-ui";
import "@fcongson/lagom-ui/style.css"; // once, anywhere in your app entry
import "@fcongson/lagom-tokens/css/lagom.css"; // token values: Base brand, light, dark, increased contrast

export const App = () => (
  <ThemeProvider>
    <Button primary>Hello</Button>
  </ThemeProvider>
);
```

Component styling isn't CSS-in-JS, so it isn't auto-injected - import lagom-ui's stylesheet once alongside your first component import. lagom-ui doesn't bundle [lagom-tokens](https://github.com/fcongson/lagom-tokens)' stylesheet for you either. `lagom.css` gives you Base, Lagom's neutral default brand, with dark mode on any element with `data-lagom-theme="dark"` and increased contrast with `data-lagom-contrast="more"` (or `prefers-contrast: more`).

Render components inside `ThemeProvider`. It supplies the theme context read by `useTheme`, loads the global styles (including the brand's focus ring for keyboard users, and forced-colours support), and provides the GrowthBook context that gates experimental features - `Button` throws "Missing or invalid GrowthBookProvider" without it.

### Theming

Everything visual comes from lagom-tokens' custom properties. To make your own brand, override tokens on a `data-lagom-brand` selector, in CSS loaded after `lagom.css`, then check it with `npx check-brand your-brand.css`:

```css
[data-lagom-brand~="rouge"] {
  --lagom-semantic-color-accent-default: #b4281f;
  --lagom-component-button-border-radius: 999px;
}
```

See the Storybook's **Theming** page for the rules (both modes, increased contrast) and every token you can override. `createTheme()` only builds the JS layout values for `useTheme()`; it doesn't change styles.

## Development

Uses pnpm 12 (pinned by `packageManager`). Building requires Node >= 22.18 (tsdown's requirement), even though the published package supports Node >= 20.

`pnpm install` fetches lagom-tokens and lagom-brands (Fern and Waypoint, for the Storybook brand switcher) from GitHub Packages, so it needs the same user-level token as [Install](#install). CI supplies it via `actions/setup-node` and `NODE_AUTH_TOKEN`, and Netlify via `NPM_CONFIG_USERCONFIG` (see `netlify.toml`).

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
