import { en } from './en';
import { es } from './es';
import { fr } from './fr';

export const locales = ['en', 'fr', 'es'] as const;

export type Locale = (typeof locales)[number];

export type Messages = typeof en;

export const defaultLocale: Locale = 'en';

const messages: Record<Locale, Messages> = { en, fr, es };

export function messagesOf(locale: Locale): Messages {
    return messages[locale];
}

/** The name of each language, written in that language. */
export const languageNames: Record<Locale, string> = {
    en: 'English',
    fr: 'Français',
    es: 'Español',
};

/** The locale as Open Graph writes it. */
export const openGraphLocales: Record<Locale, string> = {
    en: 'en_US',
    fr: 'fr_FR',
    es: 'es_ES',
};

/** The paths of every page, one per locale: the default locale has no prefix. */
export function localeStaticPaths() {
    return locales.map((locale) => ({
        params: { locale: locale === defaultLocale ? undefined : locale },
        props: { locale },
    }));
}

export function formatPrice(locale: Locale, euros: number): string {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
    }).format(euros);
}

export function formatDate(locale: Locale, date: Date): string {
    return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(date);
}
