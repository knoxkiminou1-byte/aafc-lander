# aafc-lander

The **AAFC landing page platform** — a full-stack React + Express + TypeScript app with portfolio preview cards, built under the KNOX LAB Builds & Products work. Forked from [marchitectsio/aafc-lander](https://github.com/marchitectsio/aafc-lander). Live at https://aafc-lander.vercel.app.

## What's inside

- `client/` — React 18 + TypeScript frontend (Vite, Tailwind CSS, Framer Motion, Radix UI / shadcn components, React Query).
- `server/` — Express API server.
- `shared/` — shared TypeScript schema.
- `docs/` — project docs, including the KNOX LAB recovery master prompt.
- `ops/`, `sales/dealership-data/` — operations and CRM data notes.
- `design_guidelines.md`, `drizzle.config.ts`, `vite.config.ts`, `vercel.json` — configs.

## How to run

```bash
npm install
npm run dev      # dev server (Express + Vite)
npm run build    # production build
npm start        # serve the production build
npm run db:push  # sync Drizzle schema to the database
```

The live site is deployed on Vercel at https://aafc-lander.vercel.app.

---

*Part of Kiminou Knox's AAFC web portfolio.*
