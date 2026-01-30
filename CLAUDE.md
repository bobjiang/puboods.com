# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hugo static site for puboods.com — a software development company website. Uses the `hugo-universal-theme` and is hosted on Cloudflare.

## Development Commands

- `hugo server` — Dev server with live reload
- `hugo server -D` — Dev server including draft content
- `hugo` — Production build (outputs to `public/`)
- `hugo --minify` — Minified production build

## Architecture

### Two Configuration Files

- **hugo.toml** — Primary config: theme, menus, params, section toggles (carousel, features, projects, testimonials, see_more). Each homepage section can be enabled/disabled via `[params.<section>].enable`.
- **config.toml** — Production overrides: sets `baseURL = 'https://puboods.com/'` and meta description. Values here override hugo.toml.

### Homepage: Data-Driven Sections

`layouts/index.html` assembles the homepage by calling theme partials in order: carousel → features → projects → testimonials → see_more → recent_posts → clients → footer. Each partial reads from YAML files in `data/`:

| Section | Data directory | Files |
|---------|---------------|-------|
| Hero carousel | `data/carousel/` | `hero.yaml` |
| Service features | `data/features/` | 6 files (web-development, ai-ml, blockchain, cloud-solutions, mvp-development, ui-ux) |
| Featured projects | `data/projects/` | `apex.yaml`, `hyperindex.yaml` |
| Testimonials | `data/testimonials/` | `client1.yaml`, `client2.yaml` |

To add/edit homepage content, modify these YAML files — no template changes needed.

### Custom Layouts

Pages with unique designs have custom layout templates in `layouts/_default/`:

- **services.html** — Services page with hero, card grid, benefits section (used by `content/services.md` via `layout: services` frontmatter)
- **industries.html** — Industries page with industry cards and compliance badges
- **portfolio.html** — Portfolio page with project showcases
- **single.html** — Generic single-page layout (default for content pages)

The one custom partial is `layouts/partials/projects.html` (homepage project showcase grid).

### Content Pages

Standard markdown content lives in `content/`:
- `_index.md` — Homepage
- `services.md`, `industries.md`, `contact.md` — Top-level pages
- `portfolio/_index.md` — Portfolio section

Pages select their layout via frontmatter `layout:` field (e.g., `layout: services`).

### Theme

Git submodule at `themes/hugo-universal-theme` (from `github.com/devcows/hugo-universal-theme`). Update with:
```bash
git submodule update --remote themes/hugo-universal-theme
```

### Static Assets

- `static/img/` — Logo (`logo.svg`), favicons, portfolio screenshots
- `static/css/` — FontAwesome CSS
- `static/js/` — FontAwesome JS
- `static/webfonts/` — FontAwesome web fonts

### Deployment

Hosted on Cloudflare. Build output goes to `public/`. The `hugo.toml` uses `baseURL = "/"` (relative) for local dev; `config.toml` sets the production URL.