# Conventions

This repository holds the landing page of Taneship: a static site that presents the three editions, in English, French and Spanish. This file holds its conventions, for the developers and the coding agents who work on it.

## Stack

| Concern            | Choice                                            |
| ------------------ | ------------------------------------------------- |
| Site generator     | Astro 7, static output                            |
| Styling            | Tailwind CSS 4, with the design tokens of the kit |
| Language           | TypeScript, strict                                |
| Hosting            | Netlify                                           |
| Waitlist           | Brevo, through a plain HTML form                  |
| JavaScript runtime | Node.js 24, with npm 11.16 or later               |

- **No JavaScript in the pages.** Every page is HTML and CSS. Interactions use what HTML provides: links, `<details>`, forms that post.
- **No framework component.** No React, Vue or Svelte island: Astro components only.
- **Dependencies are justified.** Every package earns its place.

## Commands

```bash
npm run dev       # start the dev server on http://localhost:4321
npm run check     # type-check the Astro and TypeScript files
npm run build     # type-check, then build the site into dist/
npm run preview   # serve dist/
npm run images    # write the social images and the raster icons into public/
```

A production build fails until `BREVO_FORM_ACTION`, `PUBLISHER_NAME` and `CONTACT_EMAIL` are set. To build locally, copy `.env.example` to `.env` and fill it in.

## Structure

```
src/
├── site.ts                 Name, repository, prices, and the values set per deployment
├── i18n/
│   ├── locales.ts          The locales, their messages, price and date formats
│   └── en.ts, fr.ts, es.ts The text of every page
├── layouts/Page.astro      HTML shell: meta tags, hreflang, Open Graph, structured data
├── components/             Header, footer, language switcher, buttons
├── components/home/        The sections of the home page, in the order index.astro lists them
├── pages/[...locale]/      One file per page, built once per locale: /, /fr/, /es/
├── pages/robots.txt.ts
└── styles/global.css       The design tokens of the kit
public/og/                  One social image per language, written by npm run images
scripts/generate-images.mjs
```

## Text and languages

- Every text lives in `src/i18n/`. A component never holds a sentence.
- `en.ts` defines the shape; `fr.ts` and `es.ts` are typed against it, so a missing key fails the type check. A change to a text is made in the three files at once.
- Placeholders are written `{name}` and replaced where the text is used.
- Prices and dates go through `formatPrice` and `formatDate`, never written by hand.
- A new page is a file in `src/pages/[...locale]/` that exports `getStaticPaths = localeStaticPaths` and renders `Page` with its `path`.
- After changing a title of the social images or `public/favicon.svg`, run `npm run images` and commit the files it writes.

## Content

- The page says only what is decided in Taneship's own documents: features, prices, licence, refunds, delivery. It invents no feature, testimonial or figure.
- The code excerpts in `src/components/home/code-excerpts.ts` are copied from Taneship Free as it ships.
- The only competitor the page names is Laravel's official React starter kit, with the date of the comparison.

## Quality

- `npm run build` passes with no error, warning or hint.
- On mobile, every page scores at least 95 in Lighthouse's performance, accessibility, best practices and SEO categories.
- Every page renders in light and in dark mode, follows the system theme, and has no horizontal scroll at 375 pixels.

## Commits

- One commit per logical change, in the Conventional Commits format, in English.
- No secret is ever committed: the values set per deployment live in Netlify's environment variables.
