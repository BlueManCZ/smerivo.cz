# smerivo.cz

Personal portfolio website, built with Next.js 16 and React 19.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Motion (Framer Motion)
- **Analytics:** DataBuddy SDK
- **Linting & Formatting:** Biome
- **Optimization:** React Compiler

## Features

- Internationalization (Czech & English) with automatic locale detection via `Accept-Language` header
- Scroll-triggered animations and staggered hero transitions
- Responsive dark-themed design with custom typography (Instrument Serif, DM Mono, Geist)
- Analytics with web vitals, error tracking, scroll depth, and outgoing link tracking

## Getting Started

```bash
pnpm install
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_DATABUDDY_CLIENT_ID=your-client-id
```

## Project Structure

```
app/
├── [locale]/          # Locale-based dynamic routing (cs, en)
├── components/        # React components (Hero, Navigation, Skills, etc.)
├── i18n/              # Internationalization config, context, and translation files
├── layout.tsx         # Root layout with analytics and fonts
└── page.tsx           # Root page with locale detection redirect
```

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `pnpm dev`    | Start development server |
| `pnpm build`  | Production build         |
| `pnpm start`  | Start production server  |
| `pnpm lint`   | Run Biome linter         |
| `pnpm format` | Format code with Biome   |

## Deployment

The project is configured with `standalone` output and includes Docker support via `Dockerfile` and `docker-compose.yml`.
