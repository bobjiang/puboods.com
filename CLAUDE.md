# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo static site for puboods.com, a software development company website. The site uses the hugo-universal-theme and is hosted on Cloudflare.

## Development Commands

- `hugo server` - Start development server with live reload
- `hugo` - Build the site for production (outputs to /public)
- `hugo server -D` - Start server including draft content
- `hugo --minify` - Build with minified output

## Architecture

### Core Structure
- **hugo.toml** - Main Hugo configuration file
- **config.toml** - Additional configuration (local/remote baseURL settings)
- **layouts/index.html** - Main page template that assembles data-driven sections
- **data/*.yml** - YAML files containing page content (banner.yml, spotlight1.yml, spotlight2.yml, spotlight3.yml)
- **themes/hugo-story/** - Git submodule containing the hugo-story theme

### Content Management
The site uses a data-driven approach where the homepage content is managed through YAML files in the /data directory rather than traditional markdown content files. The main template (layouts/index.html) pulls content from these data files to build the page sections.

### Theme Integration
The site uses the hugo-story theme as a git submodule. To update the theme:
```bash
git submodule update --remote themes/hugo-story
```

### Deployment
The site is configured for Cloudflare hosting with relative URLs enabled. The build output goes to the /public directory.

## Configuration Notes
- Uses relativeURLs for flexible deployment
- Disables taxonomy and section kinds since this is a single-page site
- Content structure is minimal as the site uses data files for content management