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
        fullComparison: 'Read the full comparison',
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
    officialKitComparison: {
        meta: {
            title: 'Taneship vs Laravel React starter kit: full comparison',
            description:
                'Taneship Free and Laravel’s official React starter kit compared line by line: authentication code, Larastan level, tests, rendering, CI and coding agents.',
        },
        breadcrumbLabel: 'Breadcrumb',
        title: 'Taneship Free vs Laravel’s official React starter kit',
        lead: 'Both kits are free, under the MIT license, and ship the same features on Laravel 13, Inertia 3 and React 19. They differ in where the authentication code lives, and in how much of the code a tool checks. This page compares them file by file.',
        note: 'Compared on {date}: commit {commit} of the official kit, and the main branch of Taneship Free.',
        sources: {
            official: 'Laravel’s React starter kit on GitHub',
            taneship: 'Taneship Free on GitHub',
        },
        verdict: {
            title: 'Which one to choose',
            official: {
                title: 'Choose the official kit if',
                items: [
                    'You want a kit maintained by the Laravel team and documented on laravel.com.',
                    'You prefer authentication that stays in a package: composer update brings the fixes of Laravel Fortify.',
                    'You want to select the authentication features when laravel new creates the project.',
                    'You run PHP 8.3 or 8.4.',
                    'You want a choice of layouts: sidebar or header, and three designs for the sign-in pages.',
                ],
            },
            taneship: {
                title: 'Choose Taneship Free if',
                items: [
                    'You want to read and change every line of the authentication, with no package between you and the code.',
                    'You want static analysis at its maximum from the first commit: Larastan level 10, with no baseline.',
                    'Coding agents write part of your code, and you want tools to reject what breaks a rule.',
                    'You want every page rendered on the server and tested in a browser.',
                    'You are considering Taneship Pro or Teams: Free is the code they start from.',
                ],
            },
        },
        shared: {
            title: 'What both kits give you',
            lead: 'Taneship Free was built to match the official kit feature for feature. With either one, your project starts with:',
            items: [
                'Sign-up, sign-in with rate-limited attempts, sign-out',
                'Email verification and password reset',
                'Password confirmation before sensitive pages',
                'Two-factor authentication with recovery codes',
                'Passkeys, to sign in and to confirm a password',
                'Profile, password change and account deletion',
                'A light, dark or system theme',
                'A dashboard behind a sidebar, built with shadcn/ui',
                'Typed routes with Laravel Wayfinder, and the React Compiler',
                'The MIT license',
            ],
        },
        details: {
            title: 'The detailed comparison',
            lead: 'Seven areas, from the stack to continuous integration. Every line comes from the files of the two repositories.',
            groups: [
                {
                    title: 'Stack and project setup',
                    text: 'The foundations are the same. Taneship pins newer versions and asks for a newer PHP. The official kit installs through the Laravel installer and offers more layouts.',
                    rows: [
                        {
                            criterion: 'Framework',
                            taneship: 'Laravel 13, Inertia 3, React 19',
                            official: 'Laravel 13, Inertia 3, React 19',
                        },
                        {
                            criterion: 'PHP',
                            taneship: '8.5',
                            official: '8.3 or later',
                        },
                        {
                            criterion: 'TypeScript',
                            taneship: 'TypeScript 7',
                            official: 'TypeScript 5',
                        },
                        {
                            criterion: 'Toolchain',
                            taneship: 'Vite+ 1: Vite, Vitest, Oxlint, Oxfmt',
                            official: 'Vite+ 0.3: Vite, Oxlint, Oxfmt',
                        },
                        {
                            criterion: 'Components',
                            taneship: 'shadcn/ui on Base UI',
                            official: 'shadcn/ui on Radix UI',
                        },
                        {
                            criterion: 'Creating a project',
                            taneship: 'A GitHub template: gh repo create --template',
                            official: 'The Laravel installer: laravel new',
                        },
                        {
                            criterion: 'Removing a feature',
                            taneship: 'You delete its code',
                            official: 'A prompt at installation removes the authentication features you do not select',
                        },
                        {
                            criterion: 'Layouts',
                            taneship: 'One application layout with a sidebar, one authentication layout',
                            official: 'Sidebar or header layout, and three authentication layouts',
                        },
                    ],
                },
                {
                    title: 'Authentication code',
                    text: 'This is the largest difference. The official kit delegates authentication to Laravel Fortify: the routes, the controllers and the logic live in vendor/, and your application configures them through config/fortify.php and a service provider. Taneship has no Fortify: each operation is an action of your application, called by a controller you can read.',
                    rows: [
                        {
                            criterion: 'Where the logic lives',
                            taneship: 'app/Actions, one class per operation: RegisterUser, VerifyEmail, ResetPassword',
                            official: 'The laravel/fortify package, completed by two classes in app/Actions/Fortify',
                        },
                        {
                            criterion: 'Routes',
                            taneship: 'routes/identity.php, in your application',
                            official: 'Registered by the package',
                        },
                        {
                            criterion: 'Controllers',
                            taneship: 'app/Http/Controllers/Auth, with resourceful methods only',
                            official: 'In the package',
                        },
                        {
                            criterion: 'Changing a behavior',
                            taneship: 'You edit the action',
                            official: 'Through the configuration, the callbacks and the contracts of Fortify',
                        },
                        {
                            criterion: 'Two-factor authentication',
                            taneship: 'Actions of your application, on pragmarx/google2fa',
                            official: 'Fortify',
                        },
                        {
                            criterion: 'Passkeys',
                            taneship: 'Actions of your application, on web-auth/webauthn-lib and @simplewebauthn/browser',
                            official: 'Fortify and @laravel/passkeys',
                        },
                        {
                            criterion: 'Security fixes',
                            taneship: 'You port them by hand from the releases of Taneship',
                            official: 'composer update brings the fixes of Fortify',
                        },
                    ],
                },
                {
                    title: 'Static analysis and code rules',
                    text: 'Both kits run Larastan and Pint. Taneship raises Larastan to its maximum, adds Rector, and turns its conventions into rules that fail the build.',
                    rows: [
                        {
                            criterion: 'Larastan level',
                            taneship: '10, the maximum',
                            official: '7',
                        },
                        {
                            criterion: 'Baselines and ignore comments',
                            taneship: 'None, and a test rejects them',
                            official: 'No rule',
                        },
                        {
                            criterion: 'Automated refactoring',
                            taneship: 'Rector, with the Laravel rules',
                            official: 'None',
                        },
                        {
                            criterion: 'PHP formatting',
                            taneship: 'Pint',
                            official: 'Pint',
                        },
                        {
                            criterion: 'Strict types and final classes',
                            taneship: 'Required in every file, checked by a test',
                            official: 'Not required',
                        },
                        {
                            criterion: 'Type coverage',
                            taneship: '100% required',
                            official: 'Not measured',
                        },
                        {
                            criterion: 'TypeScript lint',
                            taneship: 'Type-aware Oxlint: any, non-null assertions and @ts-ignore are errors',
                            official: 'Type-aware Oxlint, with its default rules',
                        },
                        {
                            criterion: 'Git hooks',
                            taneship: 'They fix the staged files and check the commit message',
                            official: 'None',
                        },
                    ],
                },
                {
                    title: 'Tests',
                    text: 'The official kit ships feature tests for its authentication and settings pages. Taneship adds architecture tests, browser tests and coverage thresholds.',
                    rows: [
                        {
                            criterion: 'Framework',
                            taneship: 'Pest 5',
                            official: 'PHPUnit 12 by default',
                        },
                        {
                            criterion: 'Feature tests',
                            taneship: 'Every action and every route',
                            official: 'The authentication and settings pages',
                        },
                        {
                            criterion: 'Architecture tests',
                            taneship: 'Layering, naming, strict types, final classes, unused code, translation keys',
                            official: 'None',
                        },
                        {
                            criterion: 'Browser tests',
                            taneship: 'Every page in light and in dark mode, and the critical journeys, on Playwright',
                            official: 'None',
                        },
                        {
                            criterion: 'Accessibility',
                            taneship: 'axe runs on every page: no issue at any impact level',
                            official: 'Not tested',
                        },
                        {
                            criterion: 'Test coverage',
                            taneship: '90% minimum, or the build fails',
                            official: 'Not measured',
                        },
                        {
                            criterion: 'Front-end unit tests',
                            taneship: 'Vitest',
                            official: 'None',
                        },
                        {
                            criterion: 'Databases tested',
                            taneship: 'SQLite, PostgreSQL and MySQL',
                            official: 'SQLite',
                        },
                    ],
                },
                {
                    title: 'Rendering, theme and interface text',
                    text: 'Both kits render React pages through Inertia. Taneship renders them on the server by default, stores the theme on the account and keeps every text in a translation file.',
                    rows: [
                        {
                            criterion: 'Server-side rendering',
                            taneship: 'On by default: one build produces the client and server bundles, and the browser tests check that each page was rendered on the server',
                            official: 'Optional: a separate build:ssr script produces the server bundle',
                        },
                        {
                            criterion: 'Theme',
                            taneship: 'Stored on the account: it follows the user from one device to another',
                            official: 'Stored in the browser: a cookie and localStorage',
                        },
                        {
                            criterion: 'Interface text',
                            taneship: 'In translation files, ready for other languages',
                            official: 'Written in the components, in English',
                        },
                        {
                            criterion: 'Security headers',
                            taneship: 'Sent by a middleware of the application',
                            official: 'Left to you',
                        },
                        {
                            criterion: 'Lighthouse',
                            taneship: 'At least 95 on mobile for the public pages, checked in CI',
                            official: 'Not measured',
                        },
                    ],
                },
                {
                    title: 'Coding agents',
                    text: 'Both kits work with coding agents. Taneship writes its rules down for them, then lets the tools reject what breaks one.',
                    rows: [
                        {
                            criterion: 'Conventions',
                            taneship: 'AGENTS.md: stack, structure, naming, tests and boundaries',
                            official: 'No conventions file in the repository',
                        },
                        {
                            criterion: 'Laravel Boost',
                            taneship: 'Included, for its MCP server',
                            official: 'Not in the repository: the Laravel installer can add it',
                        },
                        {
                            criterion: 'What stops a drift',
                            taneship: 'Larastan level 10, the architecture tests and the coverage thresholds fail the build',
                            official: 'Larastan level 7 and the feature tests',
                        },
                    ],
                },
                {
                    title: 'Continuous integration',
                    text: 'Each kit ships its GitHub Actions workflows. The official kit has one, which runs the lint, the type checks and the tests. Taneship has four.',
                    rows: [
                        {
                            criterion: 'Workflows',
                            taneship: 'Four: quality gates, Lighthouse, commit messages, dependency audits',
                            official: 'One: lint, type checks and tests',
                        },
                        {
                            criterion: 'Runtime',
                            taneship: 'PHP 8.5 and Node.js 24',
                            official: 'PHP 8.3 and Node.js 22',
                        },
                        {
                            criterion: 'Dependencies',
                            taneship: 'composer audit and npm audit on every push, and every week',
                            official: 'Dependabot, for the GitHub Actions',
                        },
                        {
                            criterion: 'Commit messages',
                            taneship: 'Conventional Commits, checked on every commit and in CI',
                            official: 'No rule',
                        },
                    ],
                },
            ],
        },
        signUp: {
            title: 'One example: the sign-up',
            official: 'In the official kit, the routes and the controller of Fortify receive the request. They call app/Actions/Fortify/CreateNewUser, a class that implements a contract of Fortify: it validates an array of input and creates the user. Fortify then signs the user in and redirects.',
            taneship: 'In Taneship, routes/identity.php sends the request to RegistrationController. RegisterUserRequest validates it and returns a RegistrationData object, the RegisterUser action creates the user, and the controller signs them in. Four short files, all in your application.',
            caption: 'The sign-up action of Taneship Free, as it ships.',
        },
        tryBoth: {
            title: 'Try both in five minutes',
            lead: 'Neither kit needs a third-party key. Install them side by side, then read their code.',
            official: 'Laravel’s official kit',
            officialCaption: 'The installer asks for a starter kit: choose React.',
            taneship: 'Taneship Free',
            taneshipCaption: 'The seeders create a demo user to sign in with.',
        },
        faq: {
            title: 'Questions about this comparison',
            items: [
                {
                    question: 'Is Taneship a fork of Laravel’s React starter kit?',
                    answer: 'No. Taneship Free is written from scratch. It reproduces the features of the official kit and shares its stack: Laravel 13, Inertia 3, React 19, Wayfinder and shadcn/ui.',
                },
                {
                    question: 'Does Taneship Free have every feature of the official kit?',
                    answer: 'Yes: sign-up, sign-in, email verification, password reset, password confirmation, two-factor authentication, passkeys, profile, password change, account deletion and the choice of theme. Two things are left out on purpose: the alternative layouts, which are presentation choices, and the feature prompt of the installer. In Taneship, you delete the code you do not want.',
                },
                {
                    question: 'Why does Taneship not use Laravel Fortify?',
                    answer: 'Fortify keeps the authentication logic in a package and drives it through configuration and callbacks. Taneship writes authentication in actions and controllers of your application, so that you read and change it like the rest of your code. The trade-off: you port security fixes from the releases of Taneship by hand, where composer update brings those of Fortify.',
                },
                {
                    question: 'Does Laravel’s React starter kit support server-side rendering?',
                    answer: 'Yes, as an option: its build:ssr script produces the server bundle. In Taneship, server-side rendering is on by default: the standard build produces both bundles, and each browser test checks that the page was rendered on the server.',
                },
                {
                    question: 'Is Larastan level 10 harder to live with than level 7?',
                    answer: 'It asks more of the code you write: levels 8 to 10 reject calls on values that may be null, and operations on values whose type is unknown. Taneship passes level 10 with no baseline, so your project starts from zero errors, and each error you meet points to a line of your own code.',
                },
                {
                    question: 'Which of the two kits suits coding agents better?',
                    answer: 'Both work with Claude Code, Codex, Cursor and the others. Taneship gives agents written conventions in AGENTS.md, then checks what they write: Larastan level 10, the architecture tests, a 90% coverage threshold and the browser tests reject code that breaks a rule, whoever wrote it.',
                },
                {
                    question: 'Can I move a project from the official kit to Taneship?',
                    answer: 'Not automatically: the two kits organize their code differently, and Taneship has no installer and no upgrade command. For a project that has barely started, create a new one from the Taneship template and move your code into it. For an older project, take what you need: the quality gates, the architecture tests and AGENTS.md can be copied one by one.',
                },
                {
                    question: 'What does Taneship cost?',
                    answer: 'Taneship Free is free and open source under the MIT license, like the official kit. Taneship Pro and Taneship Teams, which add what a SaaS needs to sell, are paid editions, announced as coming soon.',
                },
            ],
        },
        closing: {
            title: 'Read both, then decide',
            text: 'The official kit is one command away, and Taneship Free is a public repository. The code is the best argument either of them has.',
            cta: 'Open Taneship on GitHub',
            home: 'Discover Taneship and its editions',
        },
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
