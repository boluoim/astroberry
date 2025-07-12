# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Astroberry is an accessible, SEO-friendly blog theme for Astro built with TailwindCSS. The project uses TypeScript and follows a component-based architecture.

## Development Commands

```bash
# Install dependencies (using pnpm)
pnpm install

# Start development server
pnpm dev
# or
pnpm start

# Build for production (includes TypeScript checking)
pnpm build

# Preview production build locally
pnpm preview

# Run Astro CLI commands
pnpm astro
```

## Architecture

### Project Structure

- **`src/components/`**: Astro components for UI elements (Article, Avatar, Header, Footer, etc.)
- **`src/layouts/`**: Layout templates (currently Layout.astro for base page structure)
- **`src/pages/`**: File-based routing with Astro pages
  - `index.astro`: Homepage
  - `posts/[...slug].astro`: Dynamic blog post pages
  - `posts/index.astro`: Blog listing page
- **`src/content/`**: Content collections for structured data
  - `posts/`: Markdown blog posts
  - `authors/`: Author data in JSON format
- **`src/config/`**: Site configuration (brand, social links, analytics)
- **`src/schemas/`**: Zod schemas for content validation

### Key Technologies

- **Astro 5.0**: Static site generator with partial hydration
- **TailwindCSS**: Utility-first CSS framework with custom theme colors
- **TypeScript**: Type safety with path aliases (`~*` maps to `src/*`)
- **Zod**: Schema validation for content and configuration

### Content Management

The site uses Astro's content collections for managing blog posts and authors:

- Posts are defined with frontmatter including title, author (reference), tags, dates, and optional hero image
- Authors are stored as JSON data with name, portfolio URL, and optional avatar
- Content is validated using Zod schemas defined in `src/schemas/index.ts`

### Styling

- Dark/Light mode support via `[data-theme="dark"]` selector
- Custom CSS variables for theme colors (brand, content, tahiti, selection)
- Typography plugin for prose content styling
- Custom font: Space Grotesk Variable

### Configuration

Site configuration is centralized in `src/config/index.ts`:
- Brand name
- Author name
- Social media links
- Google Analytics ID (optional)

### Path Aliases

TypeScript is configured with a path alias:
- `~*` maps to `src/*` for cleaner imports

## Git Workflow

1. Create a new `preview` branch for each feature/fix
2. Push changes to `origin/preview`
3. Create a Pull Request to merge into `main`
4. Manual approval required for merging to `main`
5. Each change should have a corresponding changelog entry in `changelog/[YYYY-MM-DD]-[summary].md`

## Important Notes

- The build command runs `astro check` before building to ensure type safety
- View Transitions are enabled for smooth page navigation
- The site includes Google Analytics integration (configurable in config)
- All components use `.astro` format (no React/Vue/Svelte components currently)
- All changelog entries must be written in English