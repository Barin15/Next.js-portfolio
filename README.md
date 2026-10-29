# Alex Morgan — Portfolio

A responsive portfolio built with the Next.js App Router. Pages are server-rendered
by default and use local SVG artwork with the Next.js Image component.

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — introduction and selected projects
- `/about` — background and services
- `/projects` — project gallery
- `/contact` — contact details

## Customize

Update the example name, copy, and contact details in `app/` and `app/components/`.
Project titles and artwork references live in `app/data/projects.ts`; replace the
illustrations in `public/images/` with your own portfolio images as needed.

Before deploying, run:

```bash
npm run lint
npm run build
```

Deploy to [Vercel](https://vercel.com/) by importing the repository, or use any
hosting platform that supports Next.js. See the [deployment guide](https://nextjs.org/docs/app/getting-started/deploying).
