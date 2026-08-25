# azhary-ai-market

A marketplace web app to browse, compare, and deploy AI models, agents, and tools. Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Features

- Curated catalog of AI products (language, image, audio, video, agents, data)
- Live search and category filtering powered by a `/api/products` route
- Product detail pages with capabilities, pricing, and ratings

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
