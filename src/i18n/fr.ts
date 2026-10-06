import type { Messages } from './locales';

export const fr: Messages = {
    meta: {
        title: 'Taneship — Starter kit Laravel sur Inertia et React',
        description:
            'Un starter kit Laravel 13 sur Inertia, React, TypeScript et shadcn/ui. Larastan niveau 10, tests d’architecture et conventions pour agents. Gratuit, MIT.',
        socialImageAlt: 'Taneship, le starter kit Laravel sur Inertia et React',
    },
    header: {
        skipToContent: 'Aller au contenu',
        navigationLabel: 'Sections',
        languagesLabel: 'Langues',
        quality: 'Qualité',
        comparison: 'Comparatif',
        editions: 'Éditions',
        faq: 'FAQ',
    },
    hero: {
        stack: 'Laravel 13 · Inertia 3 · React 19 · TypeScript · shadcn/ui',
        title: 'Le starter kit Laravel React qui reste propre quand des agents écrivent le code',
        lead: 'Taneship repose sur Inertia, React, TypeScript et shadcn/ui, avec un rendu côté serveur. La logique métier vit dans des actions, l’analyse statique tourne à son niveau maximal et des tests d’architecture maintiennent la structure : pour vous, et pour vos agents de code.',
        useTemplate: 'Utiliser le template gratuit',
        joinWaitlist: 'Être prévenu pour Pro et Teams',
        reassurances: ['Licence MIT', 'Sans inscription', 'Sans clé tierce'],
        terminalLabel: 'Créer un projet',
        terminalCaption:
            'Une application fonctionnelle, avec des données de démonstration, en moins de cinq minutes.',
    },
    gates: {
        title: 'Les contrôles qualité, en chiffres',
        items: [
            { value: '10', label: 'niveau Larastan, le maximum' },
            { value: '100 %', label: 'de couverture de types' },
            { value: '90 %', label: 'de couverture de tests au minimum' },
            { value: '0', label: 'baseline, commentaire d’exclusion ou seuil abaissé' },
        ],
    },
    problems: {
        title: 'Un starter kit se juge sur son code, pas sur sa page de vente',
        lead: 'Vous lirez chaque fichier, puis vous vivrez avec pendant des années. Trois choses tournent mal le plus souvent.',
        items: [
            {
                title: 'Du code que vous n’auriez pas écrit',
                text: 'Des classes publiées dans votre application par un package, un comportement piloté par la configuration, des noms qui ne disent rien. Vous héritez de décisions que personne n’explique.',
            },
            {
                title: 'Une qualité qui s’efface',
                text: 'Un kit est propre le premier jour. Quelques milliers de lignes plus tard, dont beaucoup écrites par un agent, plus rien ne maintient la structure.',
            },
            {
                title: 'Une stack qui n’est pas la vôtre',
                text: 'Les kits Laravel payants reposent sur Livewire ou Vue. Avec Inertia et React, vous assemblez vous-même la facturation, l’administration et les pages marketing.',
            },
        ],
    },
    guardrails: {
        title: 'Des garde-fous livrés avec le code',
        lead: 'Chaque règle est vérifiée par un outil, avant chaque commit et en CI. La relecture ne les remplace pas, et aucun contrôle ne reçoit de baseline.',
        items: [
            {
                title: 'La logique métier dans des actions',
                text: 'Une opération métier par classe, dans un dossier app/ à plat qui suit les conventions de Laravel. Aucune couche supplémentaire à apprendre.',
            },
            {
                title: 'L’analyse statique au maximum',
                text: 'Larastan au niveau 10, Rector et Pint côté PHP. Oxlint, Oxfmt et la vérification des types TypeScript côté React.',
            },
            {
                title: 'Des tests d’architecture',
                text: 'Pest vérifie les couches, le nommage, les types stricts, les classes finales et le code inutilisé. Un écart fait échouer le build.',
            },
            {
                title: 'Des conventions écrites pour les agents',
                text: 'AGENTS.md contient les règles du projet. Claude Code, Codex, Cursor, Copilot, Gemini CLI et Junie le lisent.',
            },
            {
                title: 'Une authentification sans Fortify',
                text: 'Inscription, vérification de l’e-mail, réinitialisation du mot de passe, double authentification et passkeys, écrites dans des actions que vous lisez et modifiez.',
            },
            {
                title: 'Chaque page testée dans un navigateur',
                text: 'Rendue côté serveur, en mode clair et en mode sombre, sans problème d’accessibilité ni message dans la console.',
            },
        ],
        codeTitle: 'Le code, tel qu’il est livré',
        codeLead: 'Une action, et le test d’architecture qui garde chaque action ainsi.',
        actionCaption: 'Une opération métier par classe.',
        architectureTestCaption: 'La règle fait échouer le build quand une action s’en écarte.',
    },
    comparison: {
        title: 'Tout le starter kit React officiel de Laravel, avec une exigence plus élevée',
        lead: 'Taneship Free reprend chaque fonctionnalité du starter kit React officiel de Laravel. La différence tient à la façon dont le code est écrit et vérifié.',
        criterion: 'Critère',
        taneship: 'Taneship Free',
        official: 'Starter kit React officiel de Laravel',
        rows: [
            {
                criterion: 'Fonctionnalités',
                taneship: 'Chaque fonctionnalité du kit officiel',
                official: 'Authentification, double authentification, passkeys, réglages du profil',
            },
            {
                criterion: 'Code de l’authentification',
                taneship: 'Des actions et des contrôleurs de votre application',
                official: 'Laravel Fortify',
            },
            {
                criterion: 'Analyse statique',
                taneship: 'Larastan niveau 10',
                official: 'Larastan niveau 7',
            },
            {
                criterion: 'Tests',
                taneship: 'Pest, avec tests d’architecture et seuil de couverture de 90 %',
                official: 'PHPUnit par défaut',
            },
        ],
        note: 'Comparaison du {date}, sur la branche main de chaque dépôt.',
        fullComparison: 'Lire le comparatif complet',
    },
    editions: {
        title: 'Trois éditions, trois bases de code indépendantes',
        lead: 'Commencez par Free. Pro et Teams ajoutent ce qu’il faut à un SaaS pour vendre. Chaque édition est un dépôt à partir duquel vous créez votre projet, et dont chaque fichier vous appartient.',
        available: 'Disponible',
        comingSoon: 'Bientôt disponible',
        joinWaitlist: 'Rejoindre la liste d’attente',
        free: {
            name: 'Free',
            tagline: 'L’authentification et le compte, faits correctement.',
            priceNote: 'Licence MIT',
            cta: 'Utiliser le template sur GitHub',
            features: [
                'Inscription, connexion, vérification de l’e-mail, réinitialisation du mot de passe',
                'Double authentification et passkeys',
                'Profil, mot de passe et suppression du compte',
                'Thème clair, sombre ou système, enregistré sur le compte',
                'Textes de l’interface dans des fichiers de traduction, prêts pour d’autres langues, y compris de droite à gauche',
                'Contrôles qualité, CI et conventions pour les agents',
            ],
        },
        pro: {
            name: 'Pro',
            tagline: 'Tout pour vendre un SaaS à des clients individuels.',
            priceNote: 'paiement unique, HT',
            features: [
                'Tout le contenu de Free',
                'Facturation avec Stripe et Paddle : abonnements, achats uniques, essais, coupons, portail client',
                'Administration sous Filament : utilisateurs, emprunt d’identité, MRR, churn et ARPU',
                'Connexion par lien magique, Google et GitHub',
                'Articles, changelog et roadmap publique avec votes',
                'Pages marketing, pages légales, SEO et liste d’attente',
                'Anglais et français, avec la langue enregistrée sur le compte',
            ],
        },
        teams: {
            name: 'Teams',
            tagline: 'Pour les produits vendus à des équipes et à des organisations.',
            priceNote: 'paiement unique, HT',
            features: [
                'Tout le contenu de Free',
                'Équipes et multi-tenant',
                'Liste complète des fonctionnalités publiée après la sortie de Pro',
            ],
        },
        includedTitle: 'Inclus dans Pro et Teams',
        included: [
            'Projets illimités, y compris pour vos clients',
            'Mises à jour à vie : l’accès à toutes les versions à venir',
            'Accès en lecture au dépôt GitHub privé et à ses Discussions',
        ],
        bundle: 'Pro et Teams ensemble : {price}, paiement unique, HT.',
    },
    delivery: {
        title: 'Du paiement au code en quelques secondes',
        lead: 'Le fonctionnement de l’accès, dès l’ouverture des ventes de Pro et Teams.',
        steps: [
            {
                title: 'Payez une fois',
                text: 'Le paiement demande votre nom d’utilisateur GitHub. Paddle gère l’encaissement, la TVA et votre facture.',
            },
            {
                title: 'Recevez l’invitation',
                text: 'Une invitation au dépôt privé arrive sur votre compte GitHub en quelques secondes.',
            },
            {
                title: 'Créez votre projet',
                text: 'Utilisez le dépôt comme template. Votre projet part d’un seul commit et chaque fichier lui appartient.',
            },
        ],
    },
    waitlist: {
        title: 'Soyez prévenu le jour où Pro et Teams sont en vente',
        lead: 'Laissez votre adresse et recevez un e-mail à la sortie de chaque édition.',
        emailLabel: 'Adresse e-mail',
        emailPlaceholder: 'vous@exemple.fr',
        consent: 'J’accepte de recevoir un e-mail de Taneship à la sortie de Pro et de Teams.',
        submit: 'Me prévenir',
        notice: 'Votre adresse est transmise à Brevo, notre prestataire d’e-mail, hébergé dans l’Union européenne. Vous la confirmez par e-mail et vous vous désinscrivez en un clic.',
        privacy: 'Confidentialité',
    },
    faq: {
        title: 'Questions fréquentes',
        items: [
            {
                question: 'Taneship Free est-il vraiment gratuit ?',
                answer: 'Oui. Il est public sur GitHub sous licence MIT, sans inscription ni formulaire à remplir. Vous pouvez construire des produits commerciaux avec.',
            },
            {
                question: 'Que faut-il pour le faire tourner ?',
                answer: 'PHP 8.5, Composer et Node.js 24. Aucune clé tierce : l’application tourne sur SQLite, la file d’attente en base de données et le mailer log. En production, elle tourne sur SQLite, PostgreSQL ou MySQL.',
            },
            {
                question: 'Fonctionne-t-il avec des agents de code ?',
                answer: 'Oui. AGENTS.md contient les conventions du projet, et Claude Code, Codex, Cursor, Copilot, Gemini CLI et Junie le lisent. Laravel Boost donne aux agents un serveur MCP qui lit les routes, le schéma de la base de données et les logs. Les contrôles qualité rejettent ensuite ce qui enfreint une règle, quel qu’en soit l’auteur.',
            },
            {
                question: 'Pourquoi pas Laravel Fortify ?',
                answer: 'Fortify publie des classes d’action dans votre application et pilote le comportement par la configuration. Dans Taneship, l’authentification est écrite dans des actions et des contrôleurs que vous lisez et modifiez comme le reste de votre code.',
            },
            {
                question: 'Puis-je faire passer un projet de Free à Pro ?',
                answer: 'Non. Les trois éditions sont des bases de code indépendantes : Pro et Teams partent chacun d’une copie de Free, puis évoluent seuls. Un projet reste sur l’édition dont il est parti. Utilisez Free pour juger le code, puis démarrez votre produit sur l’édition dont il a besoin.',
            },
            {
                question: 'Comment recevoir les mises à jour ?',
                answer: 'Chaque édition tague ses versions, avec des notes qui décrivent les changements et renvoient à leur diff. Tout le code de votre projet vous appartient : vous reportez à la main ce que vous voulez d’une version. Les mises à jour à vie donnent accès à toutes les versions à venir.',
            },
            {
                question: 'Que permet la licence de Pro ou de Teams ?',
                answer: 'Une licence par acheteur, pour un compte GitHub. Elle couvre un nombre illimité de projets, y compris des produits réalisés pour des clients. Vos collaborateurs travaillent sur le code de votre projet sans accès au dépôt privé. Vous ne pouvez ni revendre ni republier le kit en tant que kit.',
            },
            {
                question: 'Les achats sont-ils remboursés ?',
                answer: 'Non, une fois l’accès au dépôt accordé : le code est livré immédiatement. Free existe pour que vous puissiez juger la qualité avant de payer.',
            },
            {
                question: 'Quand Pro et Teams seront-ils disponibles ?',
                answer: 'Pro sort d’abord, Teams ensuite. Il n’y a pas de date : la qualité et le périmètre passent avant le calendrier. Rejoignez la liste d’attente pour être prévenu.',
            },
        ],
    },
    closing: {
        title: 'Jugez le code avant de payer quoi que ce soit',
        text: 'Free est la base dont partent Pro et Teams. Ouvrez le dépôt et lisez-le.',
        cta: 'Ouvrir Taneship sur GitHub',
    },
    footer: {
        tagline: 'Un starter kit Laravel sur Inertia et React.',
        privacy: 'Confidentialité',
        trademark:
            'Laravel est une marque de Laravel Holdings Inc. Taneship n’est pas affilié à Laravel.',
    },
    officialKitComparison: {
        meta: {
            title: 'Taneship ou starter kit React de Laravel : le comparatif',
            description:
                'Taneship Free et le starter kit React officiel de Laravel comparés ligne à ligne : code de l’authentification, Larastan, tests, rendu, CI et agents de code.',
        },
        breadcrumbLabel: 'Fil d’Ariane',
        title: 'Taneship Free face au starter kit React officiel de Laravel',
        lead: 'Les deux kits sont gratuits, sous licence MIT, et livrent les mêmes fonctionnalités sur Laravel 13, Inertia 3 et React 19. Ils diffèrent par l’endroit où vit le code de l’authentification, et par la part du code qu’un outil vérifie. Cette page les compare fichier par fichier.',
        note: 'Comparaison du {date} : commit {commit} du kit officiel, et branche main de Taneship Free.',
        sources: {
            official: 'Le starter kit React de Laravel sur GitHub',
            taneship: 'Taneship Free sur GitHub',
        },
        verdict: {
            title: 'Lequel choisir',
            official: {
                title: 'Choisissez le kit officiel si',
                items: [
                    'Vous voulez un kit maintenu par l’équipe de Laravel et documenté sur laravel.com.',
                    'Vous préférez une authentification qui reste dans un package : composer update apporte les correctifs de Laravel Fortify.',
                    'Vous voulez sélectionner les fonctionnalités d’authentification quand laravel new crée le projet.',
                    'Vous êtes en PHP 8.3 ou 8.4.',
                    'Vous voulez un choix de mises en page : barre latérale ou en-tête, et trois designs pour les pages de connexion.',
                ],
            },
            taneship: {
                title: 'Choisissez Taneship Free si',
                items: [
                    'Vous voulez lire et modifier chaque ligne de l’authentification, sans package entre vous et le code.',
                    'Vous voulez l’analyse statique à son maximum dès le premier commit : Larastan niveau 10, sans baseline.',
                    'Des agents de code écrivent une partie de votre code, et vous voulez que des outils rejettent ce qui enfreint une règle.',
                    'Vous voulez que chaque page soit rendue côté serveur et testée dans un navigateur.',
                    'Vous envisagez Taneship Pro ou Teams : Free est le code dont ils partent.',
                ],
            },
        },
        shared: {
            title: 'Ce que les deux kits vous donnent',
            lead: 'Taneship Free a été construit pour reprendre le kit officiel fonctionnalité par fonctionnalité. Avec l’un comme avec l’autre, votre projet démarre avec :',
            items: [
                'Inscription, connexion avec limitation des tentatives, déconnexion',
                'Vérification de l’e-mail et réinitialisation du mot de passe',
                'Confirmation du mot de passe avant les pages sensibles',
                'Double authentification avec codes de récupération',
                'Passkeys, pour se connecter et pour confirmer un mot de passe',
                'Profil, changement de mot de passe et suppression du compte',
                'Un thème clair, sombre ou système',
                'Un tableau de bord derrière une barre latérale, construit avec shadcn/ui',
                'Des routes typées avec Laravel Wayfinder, et le React Compiler',
                'La licence MIT',
            ],
        },
        details: {
            title: 'Le comparatif détaillé',
            lead: 'Sept domaines, de la stack à l’intégration continue. Chaque ligne vient des fichiers des deux dépôts.',
            groups: [
                {
                    title: 'Stack et création du projet',
                    text: 'Les fondations sont les mêmes. Taneship fixe des versions plus récentes et demande un PHP plus récent. Le kit officiel s’installe avec l’installeur de Laravel et propose plus de mises en page.',
                    rows: [
                        {
                            criterion: 'Framework',
                            taneship: 'Laravel 13, Inertia 3, React 19',
                            official: 'Laravel 13, Inertia 3, React 19',
                        },
                        {
                            criterion: 'PHP',
                            taneship: '8.5',
                            official: '8.3 ou plus récent',
                        },
                        {
                            criterion: 'TypeScript',
                            taneship: 'TypeScript 7',
                            official: 'TypeScript 5',
                        },
                        {
                            criterion: 'Outillage',
                            taneship: 'Vite+ 1 : Vite, Vitest, Oxlint, Oxfmt',
                            official: 'Vite+ 0.3 : Vite, Oxlint, Oxfmt',
                        },
                        {
                            criterion: 'Composants',
                            taneship: 'shadcn/ui sur Base UI',
                            official: 'shadcn/ui sur Radix UI',
                        },
                        {
                            criterion: 'Création d’un projet',
                            taneship: 'Un template GitHub : gh repo create --template',
                            official: 'L’installeur de Laravel : laravel new',
                        },
                        {
                            criterion: 'Retrait d’une fonctionnalité',
                            taneship: 'Vous supprimez son code',
                            official: 'Une question à l’installation retire les fonctionnalités d’authentification que vous ne sélectionnez pas',
                        },
                        {
                            criterion: 'Mises en page',
                            taneship: 'Une mise en page d’application avec barre latérale, une mise en page d’authentification',
                            official: 'Barre latérale ou en-tête, et trois mises en page d’authentification',
                        },
                    ],
                },
                {
                    title: 'Code de l’authentification',
                    text: 'C’est la plus grande différence. Le kit officiel délègue l’authentification à Laravel Fortify : les routes, les contrôleurs et la logique vivent dans vendor/, et votre application les configure par config/fortify.php et un service provider. Taneship n’a pas de Fortify : chaque opération est une action de votre application, appelée par un contrôleur que vous pouvez lire.',
                    rows: [
                        {
                            criterion: 'Emplacement de la logique',
                            taneship: 'app/Actions, une classe par opération : RegisterUser, VerifyEmail, ResetPassword',
                            official: 'Le package laravel/fortify, complété par deux classes dans app/Actions/Fortify',
                        },
                        {
                            criterion: 'Routes',
                            taneship: 'routes/identity.php, dans votre application',
                            official: 'Enregistrées par le package',
                        },
                        {
                            criterion: 'Contrôleurs',
                            taneship: 'app/Http/Controllers/Auth, avec les seules méthodes de ressource',
                            official: 'Dans le package',
                        },
                        {
                            criterion: 'Modifier un comportement',
                            taneship: 'Vous modifiez l’action',
                            official: 'Par la configuration, les callbacks et les contrats de Fortify',
                        },
                        {
                            criterion: 'Double authentification',
                            taneship: 'Des actions de votre application, sur pragmarx/google2fa',
                            official: 'Fortify',
                        },
                        {
                            criterion: 'Passkeys',
                            taneship: 'Des actions de votre application, sur web-auth/webauthn-lib et @simplewebauthn/browser',
                            official: 'Fortify et @laravel/passkeys',
                        },
                        {
                            criterion: 'Correctifs de sécurité',
                            taneship: 'Vous les reportez à la main depuis les versions de Taneship',
                            official: 'composer update apporte les correctifs de Fortify',
                        },
                    ],
                },
                {
                    title: 'Analyse statique et règles de code',
                    text: 'Les deux kits utilisent Larastan et Pint. Taneship monte Larastan à son maximum, ajoute Rector, et transforme ses conventions en règles qui font échouer le build.',
                    rows: [
                        {
                            criterion: 'Niveau Larastan',
                            taneship: '10, le maximum',
                            official: '7',
                        },
                        {
                            criterion: 'Baselines et commentaires d’exclusion',
                            taneship: 'Aucun, et un test les rejette',
                            official: 'Aucune règle',
                        },
                        {
                            criterion: 'Refactoring automatisé',
                            taneship: 'Rector, avec les règles Laravel',
                            official: 'Aucun',
                        },
                        {
                            criterion: 'Formatage du PHP',
                            taneship: 'Pint',
                            official: 'Pint',
                        },
                        {
                            criterion: 'Types stricts et classes finales',
                            taneship: 'Exigés dans chaque fichier, vérifiés par un test',
                            official: 'Non exigés',
                        },
                        {
                            criterion: 'Couverture de types',
                            taneship: '100 % exigés',
                            official: 'Non mesurée',
                        },
                        {
                            criterion: 'Lint TypeScript',
                            taneship: 'Oxlint avec analyse des types : any, les assertions non nulles et @ts-ignore sont des erreurs',
                            official: 'Oxlint avec analyse des types, et ses règles par défaut',
                        },
                        {
                            criterion: 'Hooks Git',
                            taneship: 'Ils corrigent les fichiers indexés et vérifient le message de commit',
                            official: 'Aucun',
                        },
                    ],
                },
                {
                    title: 'Tests',
                    text: 'Le kit officiel livre des tests fonctionnels pour ses pages d’authentification et de réglages. Taneship ajoute des tests d’architecture, des tests dans un navigateur et des seuils de couverture.',
                    rows: [
                        {
                            criterion: 'Framework',
                            taneship: 'Pest 5',
                            official: 'PHPUnit 12 par défaut',
                        },
                        {
                            criterion: 'Tests fonctionnels',
                            taneship: 'Chaque action et chaque route',
                            official: 'Les pages d’authentification et de réglages',
                        },
                        {
                            criterion: 'Tests d’architecture',
                            taneship: 'Couches, nommage, types stricts, classes finales, code inutilisé, clés de traduction',
                            official: 'Aucun',
                        },
                        {
                            criterion: 'Tests dans un navigateur',
                            taneship: 'Chaque page en mode clair et en mode sombre, et les parcours critiques, avec Playwright',
                            official: 'Aucun',
                        },
                        {
                            criterion: 'Accessibilité',
                            taneship: 'axe analyse chaque page : aucun problème, quel que soit son niveau d’impact',
                            official: 'Non testée',
                        },
                        {
                            criterion: 'Couverture de tests',
                            taneship: '90 % au minimum, sinon le build échoue',
                            official: 'Non mesurée',
                        },
                        {
                            criterion: 'Tests unitaires du front-end',
                            taneship: 'Vitest',
                            official: 'Aucun',
                        },
                        {
                            criterion: 'Bases de données testées',
                            taneship: 'SQLite, PostgreSQL et MySQL',
                            official: 'SQLite',
                        },
                    ],
                },
                {
                    title: 'Rendu, thème et textes de l’interface',
                    text: 'Les deux kits affichent des pages React à travers Inertia. Taneship les rend côté serveur par défaut, enregistre le thème sur le compte, garde chaque texte dans un fichier de traduction et se lit aussi de droite à gauche.',
                    rows: [
                        {
                            criterion: 'Rendu côté serveur',
                            taneship: 'Actif par défaut : un seul build produit les bundles client et serveur, et les tests dans un navigateur vérifient que chaque page a été rendue côté serveur',
                            official: 'En option : un script build:ssr séparé produit le bundle serveur',
                        },
                        {
                            criterion: 'Thème',
                            taneship: 'Enregistré sur le compte : il suit l’utilisateur d’un appareil à l’autre',
                            official: 'Enregistré dans le navigateur : un cookie et localStorage',
                        },
                        {
                            criterion: 'Textes de l’interface',
                            taneship: 'Dans des fichiers de traduction, prêts pour d’autres langues',
                            official: 'Écrits dans les composants, en anglais',
                        },
                        {
                            criterion: 'Langues de droite à gauche',
                            taneship: 'Prêt : le sens de la page suit la langue, les composants utilisent des classes CSS logiques, et la navigation au clavier comme les menus suivent ce sens',
                            official: 'Non prévu : les composants utilisent des classes gauche et droite',
                        },
                        {
                            criterion: 'En-têtes de sécurité',
                            taneship: 'Envoyés par un middleware de l’application',
                            official: 'À votre charge',
                        },
                        {
                            criterion: 'Lighthouse',
                            taneship: 'Au moins 95 sur mobile pour les pages publiques, vérifié en CI',
                            official: 'Non mesuré',
                        },
                    ],
                },
                {
                    title: 'Agents de code',
                    text: 'Les deux kits fonctionnent avec des agents de code. Taneship écrit ses règles pour eux, puis laisse les outils rejeter ce qui en enfreint une.',
                    rows: [
                        {
                            criterion: 'Conventions',
                            taneship: 'AGENTS.md : stack, structure, nommage, tests et limites',
                            official: 'Aucun fichier de conventions dans le dépôt',
                        },
                        {
                            criterion: 'Laravel Boost',
                            taneship: 'Inclus, pour son serveur MCP',
                            official: 'Absent du dépôt : l’installeur de Laravel peut l’ajouter',
                        },
                        {
                            criterion: 'Ce qui arrête une dérive',
                            taneship: 'Larastan niveau 10, les tests d’architecture et les seuils de couverture font échouer le build',
                            official: 'Larastan niveau 7 et les tests fonctionnels',
                        },
                    ],
                },
                {
                    title: 'Intégration continue',
                    text: 'Chaque kit livre ses workflows GitHub Actions. Le kit officiel en a un, qui lance le lint, les vérifications de types et les tests. Taneship en a quatre.',
                    rows: [
                        {
                            criterion: 'Workflows',
                            taneship: 'Quatre : contrôles qualité, Lighthouse, messages de commit, audits des dépendances',
                            official: 'Un : lint, vérifications de types et tests',
                        },
                        {
                            criterion: 'Environnement',
                            taneship: 'PHP 8.5 et Node.js 24',
                            official: 'PHP 8.3 et Node.js 22',
                        },
                        {
                            criterion: 'Dépendances',
                            taneship: 'composer audit et npm audit à chaque push, et chaque semaine',
                            official: 'Dependabot, pour les GitHub Actions',
                        },
                        {
                            criterion: 'Messages de commit',
                            taneship: 'Conventional Commits, vérifiés à chaque commit et en CI',
                            official: 'Aucune règle',
                        },
                    ],
                },
            ],
        },
        signUp: {
            title: 'Un exemple : l’inscription',
            official: 'Dans le kit officiel, les routes et le contrôleur de Fortify reçoivent la requête. Ils appellent app/Actions/Fortify/CreateNewUser, une classe qui implémente un contrat de Fortify : elle valide un tableau de données et crée l’utilisateur. Fortify connecte ensuite l’utilisateur et le redirige.',
            taneship: 'Dans Taneship, routes/identity.php envoie la requête à RegistrationController. RegisterUserRequest la valide et renvoie un objet RegistrationData, l’action RegisterUser crée l’utilisateur, et le contrôleur le connecte. Quatre fichiers courts, tous dans votre application.',
            caption: 'L’action d’inscription de Taneship Free, telle qu’elle est livrée.',
        },
        tryBoth: {
            title: 'Essayez les deux en cinq minutes',
            lead: 'Aucun des deux kits ne demande de clé tierce. Installez-les côte à côte, puis lisez leur code.',
            official: 'Le kit officiel de Laravel',
            officialCaption: 'L’installeur demande un starter kit : choisissez React.',
            taneship: 'Taneship Free',
            taneshipCaption: 'Les seeders créent un utilisateur de démonstration pour vous connecter.',
        },
        faq: {
            title: 'Questions sur ce comparatif',
            items: [
                {
                    question: 'Taneship est-il un fork du starter kit React de Laravel ?',
                    answer: 'Non. Taneship Free est écrit de zéro. Il reprend les fonctionnalités du kit officiel et partage sa stack : Laravel 13, Inertia 3, React 19, Wayfinder et shadcn/ui.',
                },
                {
                    question: 'Taneship Free a-t-il toutes les fonctionnalités du kit officiel ?',
                    answer: 'Oui : inscription, connexion, vérification de l’e-mail, réinitialisation du mot de passe, confirmation du mot de passe, double authentification, passkeys, profil, changement de mot de passe, suppression du compte et choix du thème. Deux choses sont laissées de côté volontairement : les mises en page alternatives, qui sont des choix de présentation, et la question de l’installeur sur les fonctionnalités. Dans Taneship, vous supprimez le code dont vous ne voulez pas.',
                },
                {
                    question: 'Pourquoi Taneship n’utilise-t-il pas Laravel Fortify ?',
                    answer: 'Fortify garde la logique de l’authentification dans un package et la pilote par la configuration et des callbacks. Taneship écrit l’authentification dans des actions et des contrôleurs de votre application, pour que vous la lisiez et la modifiiez comme le reste de votre code. La contrepartie : vous reportez à la main les correctifs de sécurité des versions de Taneship, là où composer update apporte ceux de Fortify.',
                },
                {
                    question: 'Le starter kit React de Laravel gère-t-il le rendu côté serveur ?',
                    answer: 'Oui, en option : son script build:ssr produit le bundle serveur. Dans Taneship, le rendu côté serveur est actif par défaut : le build standard produit les deux bundles, et chaque test dans un navigateur vérifie que la page a été rendue côté serveur.',
                },
                {
                    question: 'Larastan niveau 10 est-il plus contraignant que le niveau 7 ?',
                    answer: 'Il demande plus au code que vous écrivez : les niveaux 8 à 10 rejettent les appels sur des valeurs qui peuvent être nulles, et les opérations sur des valeurs dont le type est inconnu. Taneship passe le niveau 10 sans baseline : votre projet part de zéro erreur, et chaque erreur que vous rencontrez désigne une ligne de votre propre code.',
                },
                {
                    question: 'Lequel des deux kits convient le mieux aux agents de code ?',
                    answer: 'Les deux fonctionnent avec Claude Code, Codex, Cursor et les autres. Taneship donne aux agents des conventions écrites dans AGENTS.md, puis vérifie ce qu’ils écrivent : Larastan niveau 10, les tests d’architecture, un seuil de couverture de 90 % et les tests dans un navigateur rejettent le code qui enfreint une règle, quel que soit son auteur.',
                },
                {
                    question: 'Puis-je passer un projet du kit officiel à Taneship ?',
                    answer: 'Pas automatiquement : les deux kits organisent leur code différemment, et Taneship n’a ni installeur ni commande de mise à jour. Pour un projet à peine commencé, créez-en un nouveau depuis le template Taneship et déplacez-y votre code. Pour un projet plus ancien, prenez ce dont vous avez besoin : les contrôles qualité, les tests d’architecture et AGENTS.md se copient un par un.',
                },
                {
                    question: 'Combien coûte Taneship ?',
                    answer: 'Taneship Free est gratuit et open source, sous licence MIT, comme le kit officiel. Taneship Pro et Taneship Teams, qui ajoutent ce qu’il faut à un SaaS pour vendre, sont des éditions payantes, annoncées comme bientôt disponibles.',
                },
            ],
        },
        closing: {
            title: 'Lisez les deux, puis décidez',
            text: 'Le kit officiel s’installe en une commande, et Taneship Free est un dépôt public. Le code est le meilleur argument de chacun.',
            cta: 'Ouvrir Taneship sur GitHub',
            home: 'Découvrir Taneship et ses éditions',
        },
    },
    privacy: {
        title: 'Confidentialité',
        description: 'Ce que ce site collecte, pourquoi, et comment le faire supprimer.',
        back: 'Retour à l’accueil',
        sections: [
            {
                title: 'Le responsable',
                text: '{publisher} édite ce site et est responsable des données décrites sur cette page. Contact : {email}.',
            },
            {
                title: 'Ce que ce site collecte',
                text: 'Ce site ne dépose aucun cookie et n’exécute aucun script de mesure d’audience. La seule donnée personnelle qu’il collecte est l’adresse e-mail que vous saisissez dans le formulaire de la liste d’attente, avec la langue de la page où vous l’avez saisie.',
            },
            {
                title: 'La finalité',
                text: 'Vous envoyer un e-mail à la sortie de Taneship Pro et de Taneship Teams. La base légale est votre consentement, donné par la case à cocher du formulaire.',
            },
            {
                title: 'Les destinataires',
                text: 'Brevo, société française et notre prestataire d’e-mail, conserve la liste sur des serveurs situés dans l’Union européenne. Personne d’autre ne reçoit votre adresse. Netlify héberge ce site et, comme tout hébergeur, traite l’adresse IP de vos requêtes pour servir les pages.',
            },
            {
                title: 'La durée de conservation',
                text: 'Jusqu’à votre désinscription. Chaque e-mail contient un lien de désinscription, et vous pouvez aussi écrire à {email}.',
            },
            {
                title: 'Vos droits',
                text: 'Vous pouvez accéder à vos données, les rectifier ou les faire supprimer, et retirer votre consentement à tout moment, en écrivant à {email}. Vous pouvez aussi introduire une réclamation auprès de votre autorité de protection des données : en France, la CNIL.',
            },
        ],
    },
};
