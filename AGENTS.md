# AGENTS.md

Instructions for AI agents working in or with **lagom-ui**, Frank Congson's React component library. Components are styled with plain CSS and [lagom-tokens](https://github.com/fcongson/lagom-tokens) design tokens. Storybook is the single source of truth for documentation.

## Use the Storybook MCP server

Lagom's docs are exposed through the Storybook MCP server (`@storybook/addon-mcp`):

- **Locally:** run `pnpm storybook`, then connect to `http://localhost:6006/mcp`.
- **Hosted:** every Chromatic build serves the same endpoint at `<build URL>/mcp`.

When answering questions about components or building UI with Lagom:

1. Call `docs-list` to see what exists. Only recommend components that appear there. It also lists guides. Read **Getting Started** for setup questions, **Theming** for overrides and dark mode, and **Using Tokens** before writing CSS.
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

- **Package manager:** pnpm 12 (pinned by `packageManager`). Building needs Node >= 22.18.
- **Installing:** `pnpm install` fetches `@fcongson/lagom-tokens` from GitHub Packages. It needs a token with `read:packages` in the user-level `~/.npmrc` (`//npm.pkg.github.com/:_authToken=...`). pnpm 12 ignores the `${TOKEN}` in the committed `.npmrc`. If install fails with 401 or 403, ask the maintainer for a token. Don't edit `.npmrc`.
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
- **Docs pages:** guides live in `src/docs/*.docs.mdx`. Give each one `<Meta title="…" summary="…" />`, and write values out in the MDX: the manifest can't see values imported from modules. Use lists, not Markdown tables: Storybook's MDX doesn't render GitHub-style tables without `remark-gfm`, which isn't installed.
- **Manifest exclusions:** stories with no component (visual references like the token galleries) use `tags: ["!manifest"]`, so they don't show up as broken entries for agents.
- **Global CSS order matters:** `resetr.css` must load before `GlobalStyle.css` (see `src/styles/GlobalStyle.tsx`).
- **Releases:**
  - Add a changeset (`pnpm changeset`) for any change that affects the published package. Dev-only changes don't need one.
  - Versioning (`pnpm version-packages`) and `v*` tags are handled by the maintainer.
- **Visual tests:** Chromatic runs on every PR. Visual changes are reviewed and accepted in Chromatic.
