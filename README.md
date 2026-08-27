# azhary-ai-market

A marketplace web app to browse, compare, and deploy AI models, agents, and tools. Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

Live site: https://azharyai.github.io/azhary-ai-market/

## Features

- Curated catalog of AI products (language, image, audio, video, agents, data)
- Live search and category filtering (runs client-side over the catalog)
- Product detail pages with capabilities, pricing, and ratings

## Deployment

The app is a static export (`output: "export"`) deployed to **GitHub Pages** via the workflow in `.github/workflows/deploy-pages.yml`. Every push to `main` builds the site and publishes it to `https://azharyai.github.io/azhary-ai-market/`.

The Pages sub-path is injected at build time through `PAGES_BASE_PATH` (set automatically by `actions/configure-pages`), so local builds default to serving from the root.

## Getting started

Install dependencies and start the dev server:

```bash
npm ci        # or: npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server on port 3000 |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

- `src/app` — App Router pages (`/`, `/product/[id]`) and the `/api/products` route
- `src/components` — UI components (`Marketplace`, `ProductCard`)
- `src/lib/products.ts` — catalog data and search helpers
