import { BREVO_FORM_ACTION, CONTACT_EMAIL, PUBLISHER_NAME } from 'astro:env/server';

export const site = {
    name: 'Taneship',
    repositoryUrl: 'https://github.com/taneship/taneship',
    /** Prices in euros, excluding VAT. */
    prices: { pro: 199, teams: 229, bundle: 249 },
    /** The date the comparison with Laravel's official starter kit was made. */
    comparedOn: new Date('2026-09-28'),
} as const;

/**
 * The values that differ per deployment. A production build fails without them,
 * so that the page never goes live with a form that leads nowhere.
 */
export const deployment = {
    waitlistFormAction: required('BREVO_FORM_ACTION', BREVO_FORM_ACTION),
    publisherName: required('PUBLISHER_NAME', PUBLISHER_NAME),
    contactEmail: required('CONTACT_EMAIL', CONTACT_EMAIL),
};

function required(name: string, value: string | undefined): string {
    if (value !== undefined) {
        return value;
    }

    if (import.meta.env.PROD) {
        throw new Error(`${name} is not set. See "Before going live" in README.md.`);
    }

    return `[${name}]`;
}
