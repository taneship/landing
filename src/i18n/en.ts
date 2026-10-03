export const en = {
    meta: {
        title: 'Taneship — Laravel starter kit on Inertia and React',
        description:
            'A Laravel 13 starter kit on Inertia, React, TypeScript and shadcn/ui. Larastan level 10, architecture tests and conventions for coding agents. Free, MIT.',
        socialImageAlt: 'Taneship, the Laravel starter kit on Inertia and React',
    },
    header: {
        skipToContent: 'Skip to content',
        navigationLabel: 'Sections',
        languagesLabel: 'Languages',
        quality: 'Quality',
        comparison: 'Comparison',
        editions: 'Editions',
        faq: 'FAQ',
    },
    hero: {
        stack: 'Laravel 13 · Inertia 3 · React 19 · TypeScript · shadcn/ui',
        title: 'The Laravel React starter kit that stays clean when agents write the code',
        lead: 'Taneship runs on Inertia, React, TypeScript and shadcn/ui, rendered on the server. Business logic lives in actions, static analysis runs at its highest level, and architecture tests hold the structure in place: for you, and for your coding agents.',
        useTemplate: 'Use the free template',
        joinWaitlist: 'Get notified for Pro and Teams',
        reassurances: ['MIT license', 'No sign-up', 'No third-party key'],
        terminalLabel: 'Create a project',
        terminalCaption: 'A working application with demo data in under five minutes.',
    },
    gates: {
        title: 'The quality gates, in numbers',
        items: [
            { value: '10', label: 'Larastan level, the maximum' },
            { value: '100%', label: 'type coverage' },
            { value: '90%', label: 'minimum test coverage' },
            { value: '0', label: 'baselines, ignore comments or lowered thresholds' },
        ],
    },
    problems: {
        title: 'A starter kit is judged on its code, not on its sales page',
        lead: 'You will read every file, then live with them for years. Three things usually go wrong.',
        items: [
            {
                title: 'Code you would not have written',
                text: 'Classes published into your application by a package, behavior driven by configuration, names that say nothing. You inherit decisions nobody explains.',
            },
            {
                title: 'Quality that fades',
                text: 'A kit is clean on its first day. A few thousand lines later, many of them written by an agent, nothing holds the structure in place.',
            },
            {
                title: 'A stack that is not yours',
                text: 'Paid Laravel kits are built on Livewire or Vue. With Inertia and React, you assemble billing, admin and marketing pages yourself.',
            },
        ],
    },
    guardrails: {
        title: 'Guardrails that ship with the code',
        lead: 'Every rule is checked by a tool, before each commit and in CI. Review does not replace them, and no gate ever gets a baseline.',
        items: [
            {
                title: 'Business logic in actions',
                text: 'One business operation per class, in a flat app/ folder that follows Laravel’s conventions. No extra layers to learn.',
            },
            {
                title: 'Static analysis at its maximum',
                text: 'Larastan at level 10, Rector and Pint on the PHP side. Oxlint, Oxfmt and the TypeScript type check on the React side.',
            },
            {
                title: 'Architecture tests',
                text: 'Pest checks the layering, the naming, strict types, final classes and unused code. A drift fails the build.',
            },
            {
                title: 'Conventions written for agents',
                text: 'AGENTS.md holds the rules of the project. Claude Code, Codex, Cursor, Copilot, Gemini CLI and Junie read it.',
            },
            {
                title: 'Authentication without Fortify',
                text: 'Sign-up, email verification, password reset, two-factor authentication and passkeys, written in actions you can read and change.',
            },
            {
                title: 'Every page tested in a browser',
                text: 'Rendered on the server, in light and in dark mode, with no accessibility issue and no console message.',
            },
        ],
        codeTitle: 'The code, as it ships',
        codeLead: 'An action, and the architecture test that keeps every action that way.',
        actionCaption: 'One business operation per class.',
        architectureTestCaption: 'The rule fails the build when an action drifts.',
    },
    comparison: {
        title: 'Everything in Laravel’s official React starter kit, held to a stricter bar',
        lead: 'Taneship Free has every feature of Laravel’s official React starter kit. The difference is in how the code is written and checked.',
        criterion: 'Criterion',
        taneship: 'Taneship Free',
        official: 'Laravel’s official React starter kit',
        rows: [
            {
                criterion: 'Features',
                taneship: 'Every feature of the official kit',
                official: 'Authentication, two-factor authentication, passkeys, profile settings',
            },
            {
                criterion: 'Authentication code',
                taneship: 'Actions and controllers of your application',
                official: 'Laravel Fortify',
            },
            {
                criterion: 'Static analysis',
                taneship: 'Larastan level 10',
                official: 'Larastan level 7',
            },
            {
                criterion: 'Tests',
                taneship: 'Pest, with architecture tests and a 90% coverage gate',
                official: 'PHPUnit by default',
            },
        ],
        note: 'Compared on {date}, from the main branch of each repository.',
    },
    editions: {
        title: 'Three editions, three independent codebases',
        lead: 'Start with Free. Pro and Teams add what a SaaS needs to sell. Each edition is a repository you create your project from, and whose every file you own.',
        available: 'Available now',
        comingSoon: 'Coming soon',
        joinWaitlist: 'Join the waitlist',
        free: {
            name: 'Free',
            tagline: 'Authentication and account, done properly.',
            priceNote: 'MIT license',
            cta: 'Use the template on GitHub',
            features: [
                'Sign-up, sign-in, email verification, password reset',
                'Two-factor authentication and passkeys',
                'Profile, password and account deletion',
                'Light, dark or system theme, stored on the account',
                'Quality gates, CI and conventions for agents',
            ],
        },
        pro: {
            name: 'Pro',
            tagline: 'Everything to sell a SaaS to individual customers.',
            priceNote: 'one-time payment, excl. VAT',
            features: [
                'Everything in Free',
                'Billing with Stripe and Paddle: subscriptions, one-time purchases, trials, coupons, customer portal',
                'Admin panel on Filament: users, impersonation, MRR, churn and ARPU',
                'Sign-in by magic link, Google and GitHub',
                'Articles, changelog and public roadmap with votes',
                'Marketing pages, legal pages, SEO and waitlist',
                'English and French, with the language stored on the account',
            ],
        },
        teams: {
            name: 'Teams',
            tagline: 'For products sold to teams and organizations.',
            priceNote: 'one-time payment, excl. VAT',
            features: [
                'Everything in Free',
                'Teams and multi-tenancy',
                'Full feature list published after the release of Pro',
            ],
        },
        includedTitle: 'Included in Pro and Teams',
        included: [
            'Unlimited projects, client work included',
            'Lifetime updates: access to every future release',
            'Read access to the private GitHub repository and its Discussions',
        ],
        bundle: 'Pro and Teams together: {price}, one-time payment, excl. VAT.',
    },
    delivery: {
        title: 'From payment to code in seconds',
        lead: 'How access will work when Pro and Teams go on sale.',
        steps: [
            {
                title: 'Pay once',
                text: 'The checkout asks for your GitHub username. Paddle handles the payment, the VAT and your invoice.',
            },
            {
                title: 'Receive the invitation',
                text: 'An invitation to the private repository reaches your GitHub account within seconds.',
            },
            {
                title: 'Create your project',
                text: 'Use the repository as a template. Your project starts from a single commit and owns every file.',
            },
        ],
    },
    waitlist: {
        title: 'Know the day Pro and Teams go on sale',
        lead: 'Leave your address and receive an email when each edition is released.',
        emailLabel: 'Email address',
        emailPlaceholder: 'you@example.com',
        consent: 'I agree to receive an email from Taneship when Pro and Teams are released.',
        submit: 'Notify me',
        notice: 'Your address goes to Brevo, our email provider, hosted in the European Union. You confirm it by email and unsubscribe in one click.',
        privacy: 'Privacy',
    },
    faq: {
        title: 'Frequently asked questions',
        items: [
            {
                question: 'Is Taneship Free really free?',
                answer: 'Yes. It is public on GitHub under the MIT license, with no sign-up and no form to fill in. You may build commercial products on it.',
            },
            {
                question: 'What do I need to run it?',
                answer: 'PHP 8.5, Composer and Node.js 24. No third-party key: the application runs on SQLite, the database queue and the log mailer. In production, it runs on SQLite, PostgreSQL or MySQL.',
            },
            {
                question: 'Does it work with coding agents?',
                answer: 'Yes. AGENTS.md holds the conventions of the project, and Claude Code, Codex, Cursor, Copilot, Gemini CLI and Junie read it. Laravel Boost gives agents an MCP server that reads the routes, the database schema and the logs. The quality gates then reject what breaks a rule, whoever wrote it.',
            },
            {
                question: 'Why is there no Laravel Fortify?',
                answer: 'Fortify publishes action classes into your application and drives behavior through configuration. In Taneship, authentication is written in actions and controllers that you read and change like the rest of your code.',
            },
            {
                question: 'Can I move a project from Free to Pro?',
                answer: 'No. The three editions are independent codebases: Pro and Teams each start from a copy of Free, then evolve on their own. A project stays on the edition it was created from. Use Free to judge the code, then start your product on the edition it needs.',
            },
            {
                question: 'How do I receive updates?',
                answer: 'Each edition tags its releases, with notes that describe the changes and link to their diff. Your project owns all its code, so you take what you want from a release by hand. Lifetime updates mean access to every future release.',
            },
            {
                question: 'What does the Pro or Teams license allow?',
                answer: 'One license per buyer, for one GitHub account. It covers unlimited projects, including products built for clients. Your collaborators work on the code of your project without access to the private repository. You may not resell or republish the kit as a kit.',
            },
            {
                question: 'Are purchases refunded?',
                answer: 'No, once access to the repository has been granted: the code is delivered at once. Free exists so that you can judge the quality before you pay.',
            },
            {
                question: 'When will Pro and Teams be available?',
                answer: 'Pro comes first, then Teams. There is no date: quality and scope come before the calendar. Join the waitlist to be told.',
            },
        ],
    },
    closing: {
        title: 'Judge the code before you pay for anything',
        text: 'Free is the foundation Pro and Teams start from. Open the repository and read it.',
        cta: 'Open Taneship on GitHub',
    },
    footer: {
        tagline: 'A Laravel starter kit on Inertia and React.',
        privacy: 'Privacy',
        trademark:
            'Laravel is a trademark of Laravel Holdings Inc. Taneship is not affiliated with Laravel.',
    },
    privacy: {
        title: 'Privacy',
        description: 'What this site collects, why, and how to have it deleted.',
        back: 'Back to the home page',
        sections: [
            {
                title: 'Who is responsible',
                text: '{publisher} publishes this site and is responsible for the data described on this page. Contact: {email}.',
            },
            {
                title: 'What this site collects',
                text: 'This site sets no cookie and runs no analytics script. The only personal data it collects is the email address you enter in the waitlist form, with the language of the page you entered it on.',
            },
            {
                title: 'Why',
                text: 'To send you an email when Taneship Pro and Taneship Teams are released. The legal basis is your consent, given with the checkbox of the form.',
            },
            {
                title: 'Who receives it',
                text: 'Brevo, a French company and our email provider, stores the list on servers in the European Union. Nobody else receives your address. Netlify hosts this site and, like any host, processes the IP address of your requests to serve the pages.',
            },
            {
                title: 'How long',
                text: 'Until you unsubscribe. Every email has an unsubscribe link, and you may also write to {email}.',
            },
            {
                title: 'Your rights',
                text: 'You may access, correct or delete your data, and withdraw your consent at any time, by writing to {email}. You may also lodge a complaint with your data protection authority: in France, the CNIL.',
            },
        ],
    },
};
