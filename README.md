# Ahmad Awada — Developer Portfolio

A professional, responsive portfolio presenting Ahmad Awada's Angular specialization, enterprise frontend experience, technical capabilities, and selected projects.

## Stack

- Angular 22 with standalone components, Signals, strict TypeScript, SSR, hydration, and prerendering
- TypeScript 6
- Tailwind CSS 4
- Netlify static deployment

## Development

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Production build

```bash
npm run build
```

The `/**` server route uses Angular's `RenderMode.Prerender`. The build generates search-engine-friendly HTML in `dist/my-portfolio/browser`; the optional Node SSR server is available with `npm run serve:ssr:my-portfolio` after building.

## Portfolio content

Update `src/app/data/portfolio.data.ts` to change personal information, navigation, skills, experience, projects, technical highlights, resume URL, social links, and the production site URL. Models are defined in `src/app/models/portfolio.model.ts`.

Project links are omitted automatically when their values are `null`. Contact links are omitted when empty.

## Resume

Place the PDF at `public/assets/resume/Ahmad-Awada-Resume.pdf`, or update the centralized `resumeUrl` value.

## Project screenshots

Place optimized AVIF or WebP images in `public/assets/projects/`, then set the relevant project's `image` value in the portfolio data. Cards remain intentionally polished without images until real screenshots are supplied.

## Deployment

Connect the repository to Netlify. `netlify.toml` runs `npm run build` and publishes `dist/my-portfolio/browser`. The portfolio currently has one prerendered public route, so no SPA catch-all redirect is needed. If separate routes are added, include them in Angular's prerender configuration and verify their generated HTML paths.

## TODO before publishing

- Replace company, location, and employment date placeholders.
- Add LinkedIn, GitHub, and email values in `socialLinks`.
- Add the production domain in `siteUrl`, canonical metadata, Open Graph URL, and sitemap.
- Add the actual resume PDF.
- Add real project URLs and screenshots only where they are available and shareable.
- Review whether the availability badge should remain enabled.
