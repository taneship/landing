import { BREVO_FORM_ACTION, CONTACT_EMAIL, PUBLISHER_NAME } from 'astro:env/server';

export const site = {
    name: 'Taneship',
    repositoryUrl: 'https://github.com/taneship/taneship',
    /** Prices in euros, excluding VAT. */
    prices: { pro: 199, teams: 229, bundle: 249 },
    /** The date the comparison with Laravel's official starter kit was made. */
    comparedOn: new Date('2026-09-28'),
    /** Laravel's official React starter kit, and the commit of its main branch the comparison read. */
    officialKit: {
        repositoryUrl: 'https://github.com/laravel/react-starter-kit',
        comparedCommit: '717b8f5',
        /** The path of the page that compares the two kits, inside its locale. */
        comparisonPath: 'vs-laravel-react-starter-kit',
    },
    /** The commands that create a project from Taneship Free and start it. */
    createProjectCommands: [
        'gh repo create my-app --template taneship/taneship --private --clone',
        'cd my-app',
        'composer setup',
        'composer dev',
    ],
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
