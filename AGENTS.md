# AGENTS.md - Development Guidelines

This document provides guidelines for agentic coding tools operating in this Astro-based documentation site project.

## Build & Development Commands

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start dev server (http://localhost:3000) |
| `pnpm build` | Build for production (SSR + static) |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Check code with Biome linter |
| `pnpm lint:fix` | Fix linting issues automatically |
| `pnpm astro` | Run Astro CLI commands directly |

**No test runner is configured.** Testing must be done manually via `pnpm dev` or `pnpm preview`.

## Project Structure

```
src/
  ├── components/     # Astro components (.astro files)
  ├── pages/          # Page routes (Astro routing)
  ├── layouts/        # Layout templates
  ├── styles/         # Global CSS
  ├── scripts/        # TypeScript utilities
  ├── assets/         # Images, fonts, media
  ├── content/        # MDX blog content
  └── content.config.ts    # Content collection config
```

## Code Style Guidelines

### General Rules (Biome-enforced)

- **Line width:** 100 characters max
- **Indentation:** Tabs (not spaces)
- **Line endings:** LF (Unix)
- **Quotes:** Single quotes (`'`) for JavaScript
- **Trailing commas:** ES5 compatible (no trailing commas in function params)
- **Imports:** Group by: external deps, then internal imports (sorted alphabetically)

### TypeScript & Type Safety

- **Strict mode enabled** via `astro/tsconfigs/strict`
- Use `type` keyword for type imports: `import type { Foo } from 'bar'`
- Avoid `any` types; use `unknown` or specific types instead
- Use `interface` for object types, `type` for unions/aliases
- All public functions must have explicit return type annotations
- Disable `any` only with `// biome-ignore lint/suspicious/noExplicitAny` comment when unavoidable

### Imports

- External packages first, then internal imports
- Use relative imports for local modules
- Import type definitions with `import type` syntax
- Alphabetically sort imports within groups
- Path aliases via `spectre:` prefix work in config (e.g., `spectre:globals`)

### Error Handling

- Use `AstroError` for Astro-specific errors (from `astro/errors`)
- Validate props and inputs early; throw descriptive errors
- Never silently fail; always surface errors to the user
- Use template literals for error messages with context

### Naming Conventions

- **Components:** PascalCase (e.g., `Icon.astro`, `Card.astro`)
- **Functions/variables:** camelCase (e.g., `getIconData`, `renderAttribsHTML`)
- **Types/Interfaces:** PascalCase (e.g., `Props`, `SVGAttributes`, `LucideProps`)
- **Constants:** SCREAMING_SNAKE_CASE (e.g., `MAX_WIDTH = 1200`)
- **Files:** kebab-case for multi-word files (e.g., `image-glow.astro`)

### Biome Linter Rules

**Enabled & Strict:**
- `recommended` ruleset enabled
- `noUnusedImports` & `noUnusedVariables` disabled in `.astro` files (temporary)
- `useHookAtTopLevel` disabled (not applicable to Astro)

**Warning Severity:**
- `noExplicitAny` (warn)
- `noImplicitAnyLet` (info)

**Disabled (intentional):**
- `noNonNullAssertion` (off)
- `noParameterAssign` (off)
- `noForEach` (off)
- `noImportantStyles` (off)
- `noAssignInExpressions` (off)

### Astro-Specific

- Component props defined via `interface Props`
- Destructure props from `Astro.props` in frontmatter
- Separate frontmatter (---) from HTML template
- Use `set:html` for sanitized HTML injection (only trusted content)
- Add `data-pagefind-ignore` to skip search indexing

### Comments & Biome Ignores

Use `// biome-ignore lint/[rule-path]: [reason]` when suppressing linter warnings.
Keep suppress comments minimal; fix root causes when possible.

## Development Workflow

1. Run `pnpm lint` before committing
2. Use `pnpm lint:fix` to auto-correct formatting
3. Test changes with `pnpm dev` or `pnpm build`
4. Follow conventional commit messages (lowercase, present tense)
5. Keep commits focused and atomic

## Key Dependencies

- **Astro 5.16.6** – Static site generator with SSR support
- **Biome 2.3.10** – Fast linter & formatter
- **TypeScript 5.9.2** – Type safety
- **Shiki 1.26.1** – Syntax highlighting
- **Astro Expressive Code** – Enhanced code blocks
- **Iconify** – Icon library (Lucide + Simple Icons)

## Deployment

- Build output: `dist/` directory
- Server entry: `dist/server/entry.mjs`
- Static site: `dist/client/`
- Search indexing: Pagefind processes `dist/client/` post-build
