# AGENTS.md

Instructions for AI agents working in or with **lagom-ui**, Frank Congson's React component library. Components are styled with plain CSS and [lagom-tokens](https://github.com/fcongson/lagom-tokens) design tokens. Storybook is the single source of truth for documentation.

## Use the Storybook MCP server

Lagom's docs are exposed through the Storybook MCP server (`@storybook/addon-mcp`):

- **Locally:** run `pnpm storybook`, then connect to `http://localhost:6006/mcp`.
- **Hosted:** every Chromatic build serves the same endpoint at `<build URL>/mcp`.

When answering questions about components or building UI with Lagom:

1. Call `docs-list` to see what exists. Only recommend components that appear there.
2. Call `docs-show` for a component before using it. Answer questions about props, usage, and variants from the docs, not by guessing from source.
3. Before writing or editing stories, call `get-storybook-story-instructions`. After a visual change, use `stories-preview` to check it.

If the docs don't answer a question, say so instead of inventing an answer. Missing docs are a bug to fix in this repo.

## Rules for building UI with Lagom

- **Only use exported components.** Import from `@fcongson/lagom-ui`. Don't recreate a component that already exists.
- **Page structure:** pages are built from `PageHeader` or `Hero` at the top, then `Section` (full-width, max 1800px) containing `Container` (max 1120px) for content.
- **Use tokens, never raw values.** Use `--lagom-semantic-*` custom properties for colour (e.g. `--lagom-semantic-color-fg-muted`), and `--lagom-core-*` for spacing, type, and radii. Don't hard-code hex values, px spacing, or font stacks.
- **Theming:** components read `--themed-*` custom properties first and fall back to `--lagom-*` tokens. Override `--themed-*` on `:root` or a wrapping element; don't override component class styles.
- **Setup:** apps must import `@fcongson/lagom-ui/style.css` and a lagom-tokens theme (`css/theme/_light.css`, optionally `_dark.css`), and render inside `ThemeProvider`.
- **Experimental props** are gated by GrowthBook feature flags (e.g. Button's experimental icon). Don't recommend them as stable API.
- **Accessibility is non-negotiable.** Use semantic elements, give every meaningful image `alt` text, keep link and button text descriptive, and don't remove focus styles.

## Working in this repo

- **Package manager:** pnpm. Building needs Node >= 22.18.
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
  - Give every prop a JSDoc comment. These feed the Controls table and the MCP manifest.
  - Set `component` in each story file's `meta`, so the component's docs and props are picked up.
- **Global CSS order matters:** `resetr.css` must load before `GlobalStyle.css` (see `src/styles/GlobalStyle.tsx`).
- **Releases:**
  - Add a changeset (`pnpm changeset`) for any change that affects the published package. Dev-only changes don't need one.
  - Versioning (`pnpm version-packages`) and `v*` tags are handled by the maintainer.
- **Visual tests:** Chromatic runs on every PR. Visual changes are reviewed and accepted in Chromatic.
