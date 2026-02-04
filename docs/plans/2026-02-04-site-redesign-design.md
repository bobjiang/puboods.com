# Puboods.com Full Site Redesign

## Overview

Full visual redesign of puboods.com — a B2B software development company site built with Hugo and Tailwind CSS. The redesign replaces the default pehtheme-hugo appearance with a bold, colorful identity anchored by a cyan-to-emerald gradient palette. Blog posts are reframed as portfolio case studies. All pages share a consistent component library.

## Visual Identity

### Color Palette

| Token              | Value       | Usage                                      |
|--------------------|-------------|---------------------------------------------|
| `cyan`             | `#06b6d4`   | Gradient start, links, icon accents         |
| `emerald`          | `#10b981`   | Gradient end, success states                |
| `amber`            | `#f59e0b`   | Secondary accent, highlights, badges        |
| `dark`             | `#0a0a0a`   | Headings, hero dark backgrounds             |
| `body`             | `#404040`   | Body text                                   |
| `surface`          | `#ffffff`   | Cards, primary backgrounds                  |
| `surface-alt`      | `#f9fafb`   | Alternating section backgrounds             |

Primary gradient: `bg-gradient-to-r from-cyan-500 to-emerald-500`

### Typography

- **Headings:** Inter or Space Grotesk, weights 700-800. Hero: 5xl-7xl desktop, scaling down responsively.
- **Body:** Inter, weight 400-500. Base size 16px, generous line-height.
- **Loaded via:** Google Fonts CDN in `<head>`.

### Shared Components

**Card** — White surface, subtle shadow (`shadow-md`), `rounded-2xl`. On hover: lift (`-translate-y-1`) with a soft gradient border glow (`ring-1 ring-cyan-500/20`). Transition 300ms.

**CTA Button (primary)** — Gradient fill (cyan-to-emerald), `rounded-full`, white bold text, `px-8 py-3`. Hover: slight scale (`scale-105`) and brightness increase.

**CTA Button (secondary/ghost)** — Transparent background, gradient text (`bg-clip-text text-transparent`), gradient border. Same rounded-full shape.

**Section Block** — Alternating white / `surface-alt` backgrounds. Consistent `py-20 lg:py-24` vertical padding. Content constrained to `max-w-6xl mx-auto px-4`.

**Section Heading** — Large bold text with a short gradient underline accent (a small `div` with the gradient, ~60px wide, centered or left-aligned).

**Browser Mockup** — Rounded-xl frame with three dot controls (red/yellow/green circles) at top-left. Subtle shadow. Contains project screenshot. Used in hero and portfolio sections.

**Tech Pill Badge** — Small rounded-full tags (`px-3 py-1 text-sm`) with light cyan/emerald background for tech stack labels.

## Homepage Layout

### 1. Hero Section

Full-width, dark background with subtle gradient mesh (radial gradient glows of cyan and emerald at low opacity).

Two-column layout (`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`):

- **Left:** Headline "Build Better Software. Faster." (5xl-7xl, white). Subtitle: 2 lines from company bio. Two buttons: primary "Book a Call" + ghost "View Our Work".
- **Right:** Browser mockup of ApeX Omni project screenshot, slightly rotated with a colored drop shadow for depth. Sits on a subtle gradient glow.

Vertical padding: `py-20 lg:py-32`.

### 2. Social Proof Bar

Slim horizontal section below the hero. Light background. Row of muted tech/partner logos (Ethereum, React, TypeScript, etc.) with label "Trusted technologies we build with." Logos at ~40% opacity, full opacity on hover.

### 3. Services Overview

White background section. Heading: "What We Build."

Grid of 8 service cards (`grid grid-cols-2 md:grid-cols-4 gap-6`). Each card: gradient-accented icon at top, bold service name, one-line description. Cards use the shared card component with hover-lift effect.

Services: AI Agents, Blockchain/DApps, Web Apps, Mobile Apps, Cloud Infrastructure, MVP Development, UI/UX Design, QA & Testing.

### 4. Portfolio / Case Studies

`surface-alt` background. Heading: "Our Work."

Two large featured project cards side-by-side (`grid grid-cols-1 lg:grid-cols-2 gap-8`). Each card:
- Browser mockup image (left/top)
- Project name (bold, xl)
- One-line description
- Tech stack pills (React, Solidity, etc.)
- "View Case Study" gradient text link

Additional project cards can be added below as content grows.

### 5. Testimonials

Dark or gradient background section (cyan-to-emerald at low opacity over dark). Heading: "What Our Clients Say."

2-3 testimonial cards: large italic quote text, client name, role, company. Displayed as a static grid (`grid grid-cols-1 md:grid-cols-3 gap-8`) or a simple carousel.

### 6. Final CTA

Full-width gradient section (cyan-to-emerald). Centered text: "Ready to build something great?" with a white CTA button ("Get in Touch"). Clean, single-purpose section.

## Inner Pages

All inner pages share the same base layout and component library.

### Compact Hero (shared pattern)

Used on all inner pages. Gradient background (same as homepage hero but shorter, `py-16 lg:py-20`). Page title (4xl-5xl, white) + short subtitle. No mockup image.

### Services Page (`/services/`)

Compact hero with title "Our Services."

Body: Same 8 service cards from homepage, but each links to an anchor section below. Each anchor section has:
- Gradient-accented icon
- Service heading
- 2-3 paragraphs of detail (existing markdown content)
- CTA link to Contact page

Sections alternate white / `surface-alt` backgrounds.

### Portfolio Page (`/portfolio/`)

Compact hero with title "Our Work."

All projects as large cards, alternating image-left / image-right layout per row. Each card:
- Browser mockup image (one side)
- Project name, description, tech stack pills, key metrics
- "Read Case Study" link leading to the full post

Case study posts from `content/posts/` render as portfolio entries. The `projects` category and `feature` tag continue to work for filtering and homepage featuring.

### Industries Page (`/industries/`)

Compact hero with title "Industries We Serve."

2x2 grid of industry cards (FinTech, Healthcare, eCommerce, Blockchain). Each card:
- Gradient-accented icon
- Industry name
- Description of relevant Puboods experience
- Link to related portfolio projects

### Contact Page (`/contact/`)

Split two-column layout:
- **Left:** "Let's Talk" heading, subtitle, email (hi@puboods.com), social links
- **Right:** Calendly embed or simple contact form

Gradient accent divider between columns on desktop.

### Footer (all pages)

Dark background (`#0a0a0a`). Gradient top-border accent (2-4px). Content:
- Logo + tagline ("Build Better Software. Faster.")
- Site description
- Navigation links (same as header menu)
- Social media icons
- Copyright line

## Implementation

### Strategy

Override the `pehtheme-hugo` theme entirely with project-level layouts. The submodule remains untouched as a fallback. All visual output comes from `layouts/` in the project root.

### New/Modified Files

```
layouts/
  _default/
    baseof.html         -- New base template (fonts, meta, header/footer)
    home.html           -- Replace existing (full landing page)
    single.html         -- Case study / project detail pages
    list.html           -- Portfolio listing page
  page/
    single.html         -- Services, Industries, Contact
  partials/
    header.html         -- New site header with gradient accents
    footer.html         -- Replace existing (dark footer with gradient border)
    hero.html           -- Compact hero (reused on inner pages)
    hero-home.html      -- Full homepage hero with mockup
    card.html           -- Shared card component
    service-card.html   -- Service icon card
    project-card.html   -- Portfolio project card with mockup
    testimonial.html    -- Testimonial quote card
    cta-section.html    -- Full-width gradient CTA block
    browser-mockup.html -- Browser frame wrapper for screenshots
    social-proof.html   -- Tech/partner logo bar
```

### Tailwind Config Changes

Extend `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      cyan: { 500: '#06b6d4' },
      emerald: { 500: '#10b981' },
      amber: { 500: '#f59e0b' },
      dark: '#0a0a0a',
      body: '#404040',
      surface: '#ffffff',
      'surface-alt': '#f9fafb',
    },
    fontFamily: {
      heading: ['Space Grotesk', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
  },
},
```

### Custom CSS (`assets/input.css`)

Add gradient utility classes and glow effects after the `@tailwind` directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-emerald-500;
  }
  .glow-card {
    @apply hover:ring-1 hover:ring-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5;
  }
}
```

### Content Changes

- No new content files needed. Existing markdown in `content/posts/` and static pages is preserved.
- Testimonials and social proof data can be added to `hugo.toml` under `[params]` or as a `data/testimonials.toml` data file.
- The `feature` tag and `projects` category continue to drive homepage featuring and portfolio filtering.

### Files Deleted/Replaced

- `layouts/_default/home.html` — replaced with new landing page layout
- `layouts/partials/footer.html` — replaced with new dark footer

No theme submodule files are modified.
