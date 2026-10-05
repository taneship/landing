# Taneship — landing page

The static site that presents Taneship and its three editions, in English, French and Spanish. Free links to its GitHub repository; Pro and Teams are announced as coming soon, with a waitlist.

Built with Astro and Tailwind CSS. The pages ship no JavaScript.

## Requirements

- Node.js 24, with npm 11.16 or later

## Commands

```bash
npm install
npm run dev       # start the dev server on http://localhost:4321
npm run check     # type-check the Astro and TypeScript files
npm run build     # type-check, then build the site into dist/
npm run preview   # serve dist/
npm run images    # write the social images and the raster icons into public/
```

## Structure

```
src/
├── site.ts                 Name, repository, prices, and the values set per deployment
├── i18n/
│   ├── locales.ts          The locales, their messages, price and date formats
│   └── en.ts, fr.ts, es.ts The text of every page: en.ts gives the others their type
├── layouts/Page.astro      HTML shell: meta tags, hreflang, Open Graph, structured data
├── components/             Header, footer, language switcher, buttons, and the blocks that pages share
├── components/home/        The sections of the home page, in the order index.astro lists them
├── pages/[...locale]/      One file per page, built once per locale: /, /fr/, /es/
├── pages/robots.txt.ts
└── styles/global.css       The design tokens of the kit
public/og/                  One social image per language, written by npm run images
scripts/generate-images.mjs
netlify.toml                Build settings, security headers, cache
```

To change a text, edit it in the three files of `src/i18n/`. To change a price, edit `src/site.ts`.

The home page and `/vs-laravel-react-starter-kit/` compare Taneship Free with Laravel's official React starter kit. When either kit changes, read both again, update the rows in the three files of `src/i18n/`, then set `comparedOn` and `officialKit.comparedCommit` in `src/site.ts`.

## Before going live

A production build fails until these three variables are set, in Netlify under Site configuration > Environment variables, or in a local `.env` copied from `.env.example`:

| Variable | Value |
|---|---|
| `BREVO_FORM_ACTION` | The `action` of the HTML form Brevo generates for the waitlist |
| `PUBLISHER_NAME` | The legal name of the publisher, shown on the privacy page |
| `CONTACT_EMAIL` | The address visitors write to about their data |

The waitlist form posts straight to Brevo. In Brevo, create a subscription form with double opt-in and a consent checkbox, then copy the `action` of its HTML version. The form assumes the field names of Brevo's HTML forms: `EMAIL`, `OPT_IN`, `locale`, `html_type` and the `email_address_check` honeypot. Compare them with the form Brevo generates, and fix `src/components/home/Waitlist.astro` if one differs.

The canonical URLs, the hreflang links and the sitemap use the `URL` variable, which Netlify sets to the site's main address.

Two more checks:

- The page links to `https://github.com/taneship/taneship`: the repository must be public.
- The privacy page (`src/i18n/*.ts`, `privacy`) must match what the publisher really does with the addresses.
