# AGENTS.md

## Project

Assessitonium marketing site. React 19 SPA built with Vite 8, Tailwind CSS v4 (CSS-based config, no `tailwind.config.js`), and Oxlint. No TypeScript — plain JSX with `jsconfig.json` path aliases.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run lint` — run Oxlint (NOT ESLint)
- `npm run deploy` — builds then publishes `dist/` to GitHub Pages via `gh-pages`

There are no tests, no typecheck, and no CI workflows in this repo.

## Architecture

- **Routing:** `BrowserRouter` from `react-router-dom` (no `#` in URLs). `public/404.html` + an inline redirect-restore script in `index.html` handle GitHub Pages deep links
- **Entry:** `src/main.jsx` → `src/App.jsx` (defines all routes and `TopBar` inline)
- **Pages:** `src/pages/{About,Pricing,Features,FeatureDetail,Why}.jsx`. Flat pages: `About`, `Pricing`, `Features`, `Why`. Nested subpages: `/features/:slug` → `FeatureDetail`. `/products` redirects to `/features`; `/why` answers marketing objections (chatbots, security)
- **Components:** `src/components/{WebThreads,GradientWaves}.jsx` — canvas/WebGL visual effects. WebThreads uses [Ogl](https://github.com/oframe/ogl); GradientWaves is a separate canvas component. Each has a co-located `.css` file. `GhostFibers.jsx`, `Hyperspeed.jsx` also used for page heroes
- **UI:** `src/components/ui/UI.jsx` exports shared primitives (`Icon`, `Card`, `Button`, `Feature`, `Step`, `Stat`, `Quote`) plus `Reveal` — an IntersectionObserver wrapper that adds `is-visible` for the CSS scroll-reveal (defined in `src/styles/ui.css`; `.ds-reveal`)
- **Data:** `src/lib/siteData.js` exports `SITE` (mission, values, stats); `src/lib/features.js` exports `FEATURES`, `FEATURE_CARDS`, `getFeature(slug)` — shared by the Features hub and detail pages
- **Utils:** `src/lib/utils.js` exports `cn()` (clsx + tailwind-merge). Use this for conditional class merging
- **Path alias:** `@/*` → `src/*` (configured in `jsconfig.json`, resolved by Vite)

## Styling

- Tailwind v4 imported via `@import "tailwindcss"` in `src/index.css` — no `tailwind.config.js` file exists
- Global CSS variables defined in `:root` in `src/index.css` (dark emerald palette sourced from the Assessitonium Django app's `base.html`: `--bg-canvas`, `--accent-default: #10B981`, etc.)
- BEM-style class names for the topbar (`topbar__brand`, `topbar__link`, etc.) defined in `src/index.css`
- Tailwind utility classes used inline in JSX for layout/typography
- **shadcn/ui is partially configured** (`components.json` exists) but no shadcn components are installed yet. The `components.json` references a nonexistent `tailwind.config.js` and a `@react-bits` registry

## Gotchas

- The `backup/` directory contains legacy pre-React HTML files — ignore them
- The `components.json` `tailwind.config` path is stale (no such file). Don't regenerate or "fix" it unless the user asks
- The `"Get Started"` button links to `/buy` which has no route — it's a placeholder
- WebGL canvas components (WebThreads, GradientWaves) are performance-sensitive and use raw canvas APIs — be cautious modifying them
- `dist/` is gitignored; `npm run build` must be run before deploying
