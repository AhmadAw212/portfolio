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

The repository is ready for continuous deployment on Netlify. The committed `netlify.toml`:

- builds the production Angular configuration with Node 22;
- publishes `dist/my-portfolio/browser`;
- applies long-lived caching only to hashed JavaScript and CSS bundles;
- adds baseline browser security headers; and
- falls back to the prerendered `index.html` for future client-side routes.

To deploy:

1. Push this directory to a Git repository.
2. In Netlify, choose **Add new project** and import that repository.
3. Netlify will read the build command and publish directory from `netlify.toml`; leave the detected values unchanged.
4. Deploy the site. No environment variables or secrets are required.
5. After assigning the final domain, update `siteUrl`, the canonical/Open Graph metadata in `src/index.html`, and `public/sitemap.xml`, then deploy again.

Deploy previews and branch deploys use the same production build configuration.

## Optional content improvements

- Add the production domain in `siteUrl`, canonical metadata, Open Graph URL, and sitemap.
- Add real project URLs and screenshots only where they are available and shareable.
- Review whether the availability badge should remain enabled.
