// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';

// Netlify sets URL to the site's main address. Canonical URLs, hreflang and the sitemap use it.
const site = process.env.URL ?? 'http://localhost:4321';

export default defineConfig({
    site,
    trailingSlash: 'always',
    // One request per page: the stylesheet is small enough to travel in the HTML.
    build: { inlineStylesheets: 'always' },
    i18n: {
        locales: ['en', 'fr', 'es'],
        defaultLocale: 'en',
        routing: { prefixDefaultLocale: false },
    },
    env: {
        schema: {
            BREVO_FORM_ACTION: envField.string({
                context: 'server',
                access: 'public',
                optional: true,
                url: true,
            }),
            PUBLISHER_NAME: envField.string({ context: 'server', access: 'public', optional: true }),
            CONTACT_EMAIL: envField.string({ context: 'server', access: 'public', optional: true }),
        },
    },
    integrations: [
        sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: { en: 'en', fr: 'fr', es: 'es' },
            },
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
