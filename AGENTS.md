# AGENTS.md

Instructions for AI agents working in or with **lagom-ui**, Frank Congson's React component library. Components are styled with plain CSS and [lagom-tokens](https://github.com/fcongson/lagom-tokens) design tokens. Storybook is the single source of truth for documentation.

## Use the Storybook MCP server

Lagom's docs are exposed through the Storybook MCP server (`@storybook/addon-mcp`):

- **Locally:** run `pnpm storybook`, then connect to `http://localhost:6006/mcp`.
- **Hosted:** every Chromatic build serves the same endpoint at `<build URL>/mcp`.

When answering questions about components or building UI with Lagom:

1. Call `docs-list` to see what exists. Only recommend components that appear there. It also lists guides. Read **Getting Started** for setup questions, **Theming** for overrides and dark mode, **Using Tokens** before writing CSS, and **Patterns** before laying out a page.
2. Call `docs-show` for a component before using it. Answer questions about props, usage, and variants from the docs, not by guessing from source.
3. Before writing or editing stories, call `get-storybook-story-instructions`. After a visual change, use `stories-preview` to check it.

If the docs don't answer a question, say so instead of inventing an answer. Missing docs are a bug to fix in this repo.

## Rules for building UI with Lagom

- **Only use exported components.** Import from `@fcongson/lagom-ui`. Don't recreate a component that already exists.
- **Page structure:** pages are built from `PageHeader` or `Hero` at the top, then `Section` (full-width, max 1800px) containing `Container` (max 1120px) for content. Full-bleed components (`Hero`, `FeaturedSection`, full-width `ImageCaption`) go directly in the page, not in a Container. See **Patterns/Page Structure**.
- **Use tokens, never raw values.** Use `--lagom-semantic-*` custom properties for colour (e.g. `--lagom-semantic-color-fg-secondary`), and `--lagom-core-*` for spacing, type, and radii. Never use palette colours (`--lagom-grey-55`, `--fern-olive-45`) in components: they don't follow brand, mode, or contrast. Don't hard-code hex values, px spacing, or font stacks.
- **Theming:** everything visual comes from lagom-tokens. Brands override `--lagom-*` tokens on a `[data-lagom-brand~="…"]` selector; `data-lagom-theme="dark"` and `data-lagom-contrast="more"` switch mode and contrast. There are no `--themed-*` hooks (removed in 2.0). Don't override component class styles. See **Theming**.
- **Setup:** apps must import `@fcongson/lagom-ui/style.css` and `@fcongson/lagom-tokens/css/lagom.css` (plus their brand's CSS), and render inside `ThemeProvider`.
- **Focus:** `ThemeProvider` loads the brand's `:focus-visible` ring (three bands over images) and forced-colours rules. Don't add your own focus styles to components.
- **Experimental props** are gated by GrowthBook feature flags (e.g. Button's experimental icon). Don't recommend them as stable API.
- **Accessibility is non-negotiable.** Use semantic elements, give every meaningful image `alt` text, keep link and button text descriptive, and don't remove focus styles.

## Working in this repo

- **Package manager:** pnpm 12 (pinned by `packageManager`). Building needs Node >= 22.18.
- **Installing:** `pnpm install` fetches `@fcongson/lagom-tokens` and `@fcongson/lagom-brands` (Fern and Waypoint, dev only, for Storybook) from GitHub Packages. It needs a token with `read:packages` in the user-level `~/.npmrc` (`//npm.pkg.github.com/:_authToken=...`). pnpm 12 ignores the `${TOKEN}` in the committed `.npmrc`. If install fails with 401 or 403, ask the maintainer for a token. Don't edit `.npmrc`.
- **Commands:**
  - `pnpm storybook`: Storybook on port 6006, with the MCP server at `/mcp`
  - `pnpm lint`
  - `pnpm typecheck`
  - `pnpm test`: Jest snapshot and unit tests
  - `pnpm build`: tsdown, output in `build/lib`
- **Component layout:** `src/components/<Name>/` contains:
  - `<Name>.tsx`
  - `<Name>.css`, with classes prefixed `lagom-<name>`
  - `<Name>.stories.tsx`
  - `<Name>.docs.mdx`
  - `<Name>.test.tsx`
  - `index.ts`
- **Documenting components:**
  - Give every component and prop a JSDoc comment. These feed the Controls table and the MCP manifest. Start each component description with a one-line summary (Storybook drops `@summary` tags with react-docgen-typescript).
  - Set `component` in each story file's `meta`, so the component's docs and props are picked up.
  - Pass components to a story through `render`, not as JSX in `args`. JSX in `args` leaks relative imports into the manifest.
  - Each component's `<Name>.docs.mdx` uses the same sections: summary, `<Primary />`, When to use, When not to use, Variants (each with `<Canvas>`), Accessibility (what the component handles, and what's the consumer's responsibility), Do and don't, Props (`<Controls />`), Related. Don't also add the `autodocs` tag.
  - Give each story a one-line JSDoc (60 characters or fewer) saying why you'd use it. Tag stories that show an anti-pattern (like inline `style` overrides) with `!manifest`.
- **Docs pages:** guides live in `src/docs/*.docs.mdx`. Give each one `<Meta title="…" summary="…" />`, and write values out in the MDX: the manifest can't see values imported from modules. Use lists, not Markdown tables: Storybook's MDX doesn't render GitHub-style tables without `remark-gfm`, which isn't installed.
- **Manifest exclusions:** stories with no component (visual references like the token galleries) use `tags: ["!manifest"]`, so they don't show up as broken entries for agents.
- **Global CSS order matters:** `resetr.css` must load before `GlobalStyle.css` (see `src/styles/GlobalStyle.tsx`).
- **Releases:**
  - Add a changeset (`pnpm changeset`) for any change that affects the published package. Dev-only changes don't need one.
  - Versioning (`pnpm version-packages`) and `v*` tags are handled by the maintainer.
- **Visual tests:** Chromatic runs on every PR. Visual changes are reviewed and accepted in Chromatic. Every story is snapshotted in Fern light. Stories whose look depends on brand, mode, or contrast (focus states, for example) also set `parameters: { chromatic: { modes: keyModes } }` from `src/stories/utils/modes.ts`, which snapshots them in every combination.
- **Storybook toolbar:** Brand (Fern by default, Waypoint, Base), Mode, and Contrast set `data-lagom-*` attributes on `<html>`, as an app would. Fern and Waypoint are Frank's brands from `@fcongson/lagom-brands` (not licensed for reuse); docs must say that an app with no brand set gets Base.
- **Docs Q&A eval:** after changing docs, JSDoc, or this file, run `pnpm eval` (with `pnpm storybook` running). It checks that an agent using only the MCP server answers real questions correctly. See `evals/README.md`. When a question fails, fix the docs, not the question.
