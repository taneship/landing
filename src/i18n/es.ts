import type { Messages } from './locales';

export const es: Messages = {
    meta: {
        title: 'Taneship — Starter kit de Laravel con Inertia y React',
        description:
            'Un starter kit de Laravel 13 con Inertia, React, TypeScript y shadcn/ui. Larastan nivel 10, tests de arquitectura y convenciones para agentes. Gratis, MIT.',
        socialImageAlt: 'Taneship, el starter kit de Laravel con Inertia y React',
    },
    header: {
        skipToContent: 'Ir al contenido',
        navigationLabel: 'Secciones',
        languagesLabel: 'Idiomas',
        quality: 'Calidad',
        comparison: 'Comparativa',
        editions: 'Ediciones',
        faq: 'FAQ',
    },
    hero: {
        stack: 'Laravel 13 · Inertia 3 · React 19 · TypeScript · shadcn/ui',
        title: 'El starter kit de Laravel y React que sigue limpio cuando los agentes escriben el código',
        lead: 'Taneship funciona con Inertia, React, TypeScript y shadcn/ui, renderizado en el servidor. La lógica de negocio vive en acciones, el análisis estático se ejecuta en su nivel máximo y los tests de arquitectura mantienen la estructura: para ti y para tus agentes de código.',
        useTemplate: 'Usar la plantilla gratuita',
        joinWaitlist: 'Avisarme de Pro y Teams',
        reassurances: ['Licencia MIT', 'Sin registro', 'Sin claves de terceros'],
        terminalLabel: 'Crear un proyecto',
        terminalCaption: 'Una aplicación funcional, con datos de demostración, en menos de cinco minutos.',
    },
    gates: {
        title: 'Los controles de calidad, en cifras',
        items: [
            { value: '10', label: 'nivel de Larastan, el máximo' },
            { value: '100 %', label: 'de cobertura de tipos' },
            { value: '90 %', label: 'de cobertura de tests como mínimo' },
            { value: '0', label: 'baselines, comentarios de exclusión o umbrales rebajados' },
        ],
    },
    problems: {
        title: 'Un starter kit se juzga por su código, no por su página de ventas',
        lead: 'Leerás cada archivo y después vivirás con ellos durante años. Tres cosas suelen salir mal.',
        items: [
            {
                title: 'Código que no habrías escrito',
                text: 'Clases publicadas en tu aplicación por un paquete, comportamiento dirigido por la configuración, nombres que no dicen nada. Heredas decisiones que nadie explica.',
            },
            {
                title: 'Una calidad que se desvanece',
                text: 'Un kit está limpio el primer día. Unos miles de líneas después, muchas escritas por un agente, nada mantiene la estructura.',
            },
            {
                title: 'Un stack que no es el tuyo',
                text: 'Los kits de pago para Laravel se basan en Livewire o Vue. Con Inertia y React, montas tú mismo la facturación, la administración y las páginas de marketing.',
            },
        ],
    },
    guardrails: {
        title: 'Salvaguardas que se entregan con el código',
        lead: 'Una herramienta comprueba cada regla, antes de cada commit y en CI. La revisión no las sustituye, y ningún control recibe una baseline.',
        items: [
            {
                title: 'La lógica de negocio en acciones',
                text: 'Una operación de negocio por clase, en una carpeta app/ plana que sigue las convenciones de Laravel. Sin capas adicionales que aprender.',
            },
            {
                title: 'El análisis estático al máximo',
                text: 'Larastan en el nivel 10, Rector y Pint en el lado de PHP. Oxlint, Oxfmt y la comprobación de tipos de TypeScript en el lado de React.',
            },
            {
                title: 'Tests de arquitectura',
                text: 'Pest comprueba las capas, los nombres, los tipos estrictos, las clases finales y el código sin usar. Una desviación hace fallar el build.',
            },
            {
                title: 'Convenciones escritas para los agentes',
                text: 'AGENTS.md contiene las reglas del proyecto. Claude Code, Codex, Cursor, Copilot, Gemini CLI y Junie lo leen.',
            },
            {
                title: 'Autenticación sin Fortify',
                text: 'Registro, verificación del correo, restablecimiento de la contraseña, autenticación en dos pasos y passkeys, escritos en acciones que puedes leer y modificar.',
            },
            {
                title: 'Cada página probada en un navegador',
                text: 'Renderizada en el servidor, en modo claro y en modo oscuro, sin problemas de accesibilidad ni mensajes en la consola.',
            },
        ],
        codeTitle: 'El código, tal como se entrega',
        codeLead: 'Una acción, y el test de arquitectura que mantiene así cada acción.',
        actionCaption: 'Una operación de negocio por clase.',
        architectureTestCaption: 'La regla hace fallar el build cuando una acción se desvía.',
    },
    comparison: {
        title: 'Todo el starter kit oficial de React de Laravel, con un listón más alto',
        lead: 'Taneship Free incluye cada funcionalidad del starter kit oficial de React de Laravel. La diferencia está en cómo se escribe y se comprueba el código.',
        criterion: 'Criterio',
        taneship: 'Taneship Free',
        official: 'Starter kit oficial de React de Laravel',
        rows: [
            {
                criterion: 'Funcionalidades',
                taneship: 'Cada funcionalidad del kit oficial',
                official: 'Autenticación, autenticación en dos pasos, passkeys, ajustes del perfil',
            },
            {
                criterion: 'Código de la autenticación',
                taneship: 'Acciones y controladores de tu aplicación',
                official: 'Laravel Fortify',
            },
            {
                criterion: 'Análisis estático',
                taneship: 'Larastan nivel 10',
                official: 'Larastan nivel 7',
            },
            {
                criterion: 'Tests',
                taneship: 'Pest, con tests de arquitectura y un umbral de cobertura del 90 %',
                official: 'PHPUnit por defecto',
            },
        ],
        note: 'Comparación del {date}, en la rama main de cada repositorio.',
        fullComparison: 'Leer la comparativa completa',
    },
    editions: {
        title: 'Tres ediciones, tres bases de código independientes',
        lead: 'Empieza con Free. Pro y Teams añaden lo que un SaaS necesita para vender. Cada edición es un repositorio a partir del cual creas tu proyecto, y cada archivo te pertenece.',
        available: 'Disponible',
        comingSoon: 'Próximamente',
        joinWaitlist: 'Unirme a la lista de espera',
        free: {
            name: 'Free',
            tagline: 'La autenticación y la cuenta, bien hechas.',
            priceNote: 'Licencia MIT',
            cta: 'Usar la plantilla en GitHub',
            features: [
                'Registro, inicio de sesión, verificación del correo, restablecimiento de la contraseña',
                'Autenticación en dos pasos y passkeys',
                'Perfil, contraseña y eliminación de la cuenta',
                'Tema claro, oscuro o del sistema, guardado en la cuenta',
                'Controles de calidad, CI y convenciones para agentes',
            ],
        },
        pro: {
            name: 'Pro',
            tagline: 'Todo para vender un SaaS a clientes individuales.',
            priceNote: 'pago único, sin IVA',
            features: [
                'Todo lo que incluye Free',
                'Facturación con Stripe y Paddle: suscripciones, compras únicas, pruebas, cupones, portal del cliente',
                'Administración con Filament: usuarios, suplantación de identidad, MRR, churn y ARPU',
                'Inicio de sesión con enlace mágico, Google y GitHub',
                'Artículos, changelog y roadmap público con votos',
                'Páginas de marketing, páginas legales, SEO y lista de espera',
                'Inglés y francés, con el idioma guardado en la cuenta',
            ],
        },
        teams: {
            name: 'Teams',
            tagline: 'Para productos vendidos a equipos y organizaciones.',
            priceNote: 'pago único, sin IVA',
            features: [
                'Todo lo que incluye Free',
                'Equipos y multi-tenancy',
                'Lista completa de funcionalidades publicada tras el lanzamiento de Pro',
            ],
        },
        includedTitle: 'Incluido en Pro y Teams',
        included: [
            'Proyectos ilimitados, también para tus clientes',
            'Actualizaciones de por vida: acceso a todas las versiones futuras',
            'Acceso de lectura al repositorio privado de GitHub y a sus Discussions',
        ],
        bundle: 'Pro y Teams juntos: {price}, pago único, sin IVA.',
    },
    delivery: {
        title: 'Del pago al código en segundos',
        lead: 'Así funcionará el acceso cuando Pro y Teams salgan a la venta.',
        steps: [
            {
                title: 'Paga una vez',
                text: 'El pago te pide tu nombre de usuario de GitHub. Paddle gestiona el cobro, el IVA y tu factura.',
            },
            {
                title: 'Recibe la invitación',
                text: 'Una invitación al repositorio privado llega a tu cuenta de GitHub en segundos.',
            },
            {
                title: 'Crea tu proyecto',
                text: 'Usa el repositorio como plantilla. Tu proyecto parte de un solo commit y cada archivo le pertenece.',
            },
        ],
    },
    waitlist: {
        title: 'Entérate el día en que Pro y Teams salgan a la venta',
        lead: 'Deja tu dirección y recibe un correo cuando se publique cada edición.',
        emailLabel: 'Correo electrónico',
        emailPlaceholder: 'tu@ejemplo.es',
        consent: 'Acepto recibir un correo de Taneship cuando se publiquen Pro y Teams.',
        submit: 'Avisarme',
        notice: 'Tu dirección se envía a Brevo, nuestro proveedor de correo, alojado en la Unión Europea. La confirmas por correo y te das de baja con un clic.',
        privacy: 'Privacidad',
    },
    faq: {
        title: 'Preguntas frecuentes',
        items: [
            {
                question: '¿Taneship Free es realmente gratuito?',
                answer: 'Sí. Es público en GitHub bajo licencia MIT, sin registro ni formulario que rellenar. Puedes construir productos comerciales con él.',
            },
            {
                question: '¿Qué necesito para ejecutarlo?',
                answer: 'PHP 8.5, Composer y Node.js 24. Ninguna clave de terceros: la aplicación funciona con SQLite, la cola en base de datos y el mailer log. En producción funciona con SQLite, PostgreSQL o MySQL.',
            },
            {
                question: '¿Funciona con agentes de código?',
                answer: 'Sí. AGENTS.md contiene las convenciones del proyecto, y Claude Code, Codex, Cursor, Copilot, Gemini CLI y Junie lo leen. Laravel Boost da a los agentes un servidor MCP que lee las rutas, el esquema de la base de datos y los logs. Después, los controles de calidad rechazan lo que incumple una regla, sea quien sea el autor.',
            },
            {
                question: '¿Por qué no usa Laravel Fortify?',
                answer: 'Fortify publica clases de acción en tu aplicación y dirige el comportamiento mediante la configuración. En Taneship, la autenticación está escrita en acciones y controladores que lees y modificas como el resto de tu código.',
            },
            {
                question: '¿Puedo pasar un proyecto de Free a Pro?',
                answer: 'No. Las tres ediciones son bases de código independientes: Pro y Teams parten cada una de una copia de Free y después evolucionan por su cuenta. Un proyecto se queda en la edición de la que partió. Usa Free para juzgar el código y empieza tu producto en la edición que necesite.',
            },
            {
                question: '¿Cómo recibo las actualizaciones?',
                answer: 'Cada edición etiqueta sus versiones, con notas que describen los cambios y enlazan a su diff. Todo el código de tu proyecto es tuyo: trasladas a mano lo que quieras de una versión. Las actualizaciones de por vida dan acceso a todas las versiones futuras.',
            },
            {
                question: '¿Qué permite la licencia de Pro o de Teams?',
                answer: 'Una licencia por comprador, para una cuenta de GitHub. Cubre proyectos ilimitados, incluidos los productos hechos para clientes. Tus colaboradores trabajan en el código de tu proyecto sin acceso al repositorio privado. No puedes revender ni volver a publicar el kit como kit.',
            },
            {
                question: '¿Se reembolsan las compras?',
                answer: 'No, una vez concedido el acceso al repositorio: el código se entrega de inmediato. Free existe para que puedas juzgar la calidad antes de pagar.',
            },
            {
                question: '¿Cuándo estarán disponibles Pro y Teams?',
                answer: 'Primero sale Pro y después Teams. No hay fecha: la calidad y el alcance van antes que el calendario. Únete a la lista de espera para enterarte.',
            },
        ],
    },
    closing: {
        title: 'Juzga el código antes de pagar nada',
        text: 'Free es la base de la que parten Pro y Teams. Abre el repositorio y léelo.',
        cta: 'Abrir Taneship en GitHub',
    },
    footer: {
        tagline: 'Un starter kit de Laravel con Inertia y React.',
        privacy: 'Privacidad',
        trademark:
            'Laravel es una marca de Laravel Holdings Inc. Taneship no está afiliado a Laravel.',
    },
    officialKitComparison: {
        meta: {
            title: 'Taneship o el starter kit React de Laravel: comparativa',
            description:
                'Taneship Free y el starter kit oficial de React de Laravel comparados línea a línea: código de autenticación, Larastan, tests, renderizado, CI y agentes.',
        },
        breadcrumbLabel: 'Ruta de navegación',
        title: 'Taneship Free frente al starter kit oficial de React de Laravel',
        lead: 'Los dos kits son gratuitos, con licencia MIT, y ofrecen las mismas funcionalidades sobre Laravel 13, Inertia 3 y React 19. Se diferencian en dónde vive el código de la autenticación, y en cuánta parte del código comprueba una herramienta. Esta página los compara archivo por archivo.',
        note: 'Comparación del {date}: commit {commit} del kit oficial, y rama main de Taneship Free.',
        sources: {
            official: 'El starter kit de React de Laravel en GitHub',
            taneship: 'Taneship Free en GitHub',
        },
        verdict: {
            title: 'Cuál elegir',
            official: {
                title: 'Elige el kit oficial si',
                items: [
                    'Quieres un kit mantenido por el equipo de Laravel y documentado en laravel.com.',
                    'Prefieres una autenticación que se queda en un paquete: composer update trae las correcciones de Laravel Fortify.',
                    'Quieres seleccionar las funcionalidades de autenticación cuando laravel new crea el proyecto.',
                    'Trabajas con PHP 8.3 u 8.4.',
                    'Quieres elegir entre varios diseños: barra lateral o cabecera, y tres diseños para las páginas de inicio de sesión.',
                ],
            },
            taneship: {
                title: 'Elige Taneship Free si',
                items: [
                    'Quieres leer y modificar cada línea de la autenticación, sin ningún paquete entre tú y el código.',
                    'Quieres el análisis estático al máximo desde el primer commit: Larastan nivel 10, sin baseline.',
                    'Agentes de código escriben parte de tu código, y quieres que las herramientas rechacen lo que incumple una regla.',
                    'Quieres que cada página se renderice en el servidor y se pruebe en un navegador.',
                    'Te planteas Taneship Pro o Teams: Free es el código del que parten.',
                ],
            },
        },
        shared: {
            title: 'Lo que te dan los dos kits',
            lead: 'Taneship Free se construyó para igualar el kit oficial funcionalidad por funcionalidad. Con cualquiera de los dos, tu proyecto empieza con:',
            items: [
                'Registro, inicio de sesión con límite de intentos, cierre de sesión',
                'Verificación del correo y restablecimiento de la contraseña',
                'Confirmación de la contraseña antes de las páginas sensibles',
                'Autenticación en dos pasos con códigos de recuperación',
                'Passkeys, para iniciar sesión y para confirmar una contraseña',
                'Perfil, cambio de contraseña y eliminación de la cuenta',
                'Un tema claro, oscuro o del sistema',
                'Un panel detrás de una barra lateral, construido con shadcn/ui',
                'Rutas tipadas con Laravel Wayfinder, y el React Compiler',
                'La licencia MIT',
            ],
        },
        details: {
            title: 'La comparativa detallada',
            lead: 'Siete áreas, del stack a la integración continua. Cada línea sale de los archivos de los dos repositorios.',
            groups: [
                {
                    title: 'Stack y creación del proyecto',
                    text: 'Los cimientos son los mismos. Taneship fija versiones más recientes y pide un PHP más reciente. El kit oficial se instala con el instalador de Laravel y ofrece más diseños.',
                    rows: [
                        {
                            criterion: 'Framework',
                            taneship: 'Laravel 13, Inertia 3, React 19',
                            official: 'Laravel 13, Inertia 3, React 19',
                        },
                        {
                            criterion: 'PHP',
                            taneship: '8.5',
                            official: '8.3 o posterior',
                        },
                        {
                            criterion: 'TypeScript',
                            taneship: 'TypeScript 7',
                            official: 'TypeScript 5',
                        },
                        {
                            criterion: 'Herramientas',
                            taneship: 'Vite+ 1: Vite, Vitest, Oxlint, Oxfmt',
                            official: 'Vite+ 0.3: Vite, Oxlint, Oxfmt',
                        },
                        {
                            criterion: 'Componentes',
                            taneship: 'shadcn/ui sobre Base UI',
                            official: 'shadcn/ui sobre Radix UI',
                        },
                        {
                            criterion: 'Creación de un proyecto',
                            taneship: 'Una plantilla de GitHub: gh repo create --template',
                            official: 'El instalador de Laravel: laravel new',
                        },
                        {
                            criterion: 'Quitar una funcionalidad',
                            taneship: 'Borras su código',
                            official: 'Una pregunta en la instalación quita las funcionalidades de autenticación que no seleccionas',
                        },
                        {
                            criterion: 'Diseños',
                            taneship: 'Un diseño de aplicación con barra lateral, un diseño de autenticación',
                            official: 'Barra lateral o cabecera, y tres diseños de autenticación',
                        },
                    ],
                },
                {
                    title: 'Código de la autenticación',
                    text: 'Es la mayor diferencia. El kit oficial delega la autenticación en Laravel Fortify: las rutas, los controladores y la lógica viven en vendor/, y tu aplicación los configura con config/fortify.php y un service provider. Taneship no tiene Fortify: cada operación es una acción de tu aplicación, llamada por un controlador que puedes leer.',
                    rows: [
                        {
                            criterion: 'Dónde vive la lógica',
                            taneship: 'app/Actions, una clase por operación: RegisterUser, VerifyEmail, ResetPassword',
                            official: 'El paquete laravel/fortify, completado por dos clases en app/Actions/Fortify',
                        },
                        {
                            criterion: 'Rutas',
                            taneship: 'routes/identity.php, en tu aplicación',
                            official: 'Registradas por el paquete',
                        },
                        {
                            criterion: 'Controladores',
                            taneship: 'app/Http/Controllers/Auth, solo con métodos de recurso',
                            official: 'En el paquete',
                        },
                        {
                            criterion: 'Cambiar un comportamiento',
                            taneship: 'Modificas la acción',
                            official: 'Con la configuración, los callbacks y los contratos de Fortify',
                        },
                        {
                            criterion: 'Autenticación en dos pasos',
                            taneship: 'Acciones de tu aplicación, sobre pragmarx/google2fa',
                            official: 'Fortify',
                        },
                        {
                            criterion: 'Passkeys',
                            taneship: 'Acciones de tu aplicación, sobre web-auth/webauthn-lib y @simplewebauthn/browser',
                            official: 'Fortify y @laravel/passkeys',
                        },
                        {
                            criterion: 'Correcciones de seguridad',
                            taneship: 'Las aplicas a mano desde las versiones de Taneship',
                            official: 'composer update trae las correcciones de Fortify',
                        },
                    ],
                },
                {
                    title: 'Análisis estático y reglas de código',
                    text: 'Los dos kits usan Larastan y Pint. Taneship sube Larastan a su máximo, añade Rector y convierte sus convenciones en reglas que hacen fallar el build.',
                    rows: [
                        {
                            criterion: 'Nivel de Larastan',
                            taneship: '10, el máximo',
                            official: '7',
                        },
                        {
                            criterion: 'Baselines y comentarios de exclusión',
                            taneship: 'Ninguno, y un test los rechaza',
                            official: 'Ninguna regla',
                        },
                        {
                            criterion: 'Refactorización automatizada',
                            taneship: 'Rector, con las reglas de Laravel',
                            official: 'Ninguna',
                        },
                        {
                            criterion: 'Formato del PHP',
                            taneship: 'Pint',
                            official: 'Pint',
                        },
                        {
                            criterion: 'Tipos estrictos y clases finales',
                            taneship: 'Obligatorios en cada archivo, comprobados por un test',
                            official: 'No obligatorios',
                        },
                        {
                            criterion: 'Cobertura de tipos',
                            taneship: '100 % obligatorio',
                            official: 'No se mide',
                        },
                        {
                            criterion: 'Lint de TypeScript',
                            taneship: 'Oxlint con análisis de tipos: any, las aserciones no nulas y @ts-ignore son errores',
                            official: 'Oxlint con análisis de tipos, y sus reglas por defecto',
                        },
                        {
                            criterion: 'Hooks de Git',
                            taneship: 'Corrigen los archivos preparados y comprueban el mensaje del commit',
                            official: 'Ninguno',
                        },
                    ],
                },
                {
                    title: 'Tests',
                    text: 'El kit oficial incluye tests funcionales de sus páginas de autenticación y de ajustes. Taneship añade tests de arquitectura, tests en un navegador y umbrales de cobertura.',
                    rows: [
                        {
                            criterion: 'Framework',
                            taneship: 'Pest 5',
                            official: 'PHPUnit 12 por defecto',
                        },
                        {
                            criterion: 'Tests funcionales',
                            taneship: 'Cada acción y cada ruta',
                            official: 'Las páginas de autenticación y de ajustes',
                        },
                        {
                            criterion: 'Tests de arquitectura',
                            taneship: 'Capas, nombres, tipos estrictos, clases finales, código sin usar, claves de traducción',
                            official: 'Ninguno',
                        },
                        {
                            criterion: 'Tests en un navegador',
                            taneship: 'Cada página en modo claro y en modo oscuro, y los recorridos críticos, con Playwright',
                            official: 'Ninguno',
                        },
                        {
                            criterion: 'Accesibilidad',
                            taneship: 'axe analiza cada página: ningún problema, sea cual sea su nivel de impacto',
                            official: 'No se prueba',
                        },
                        {
                            criterion: 'Cobertura de tests',
                            taneship: '90 % como mínimo, o el build falla',
                            official: 'No se mide',
                        },
                        {
                            criterion: 'Tests unitarios del front-end',
                            taneship: 'Vitest',
                            official: 'Ninguno',
                        },
                        {
                            criterion: 'Bases de datos probadas',
                            taneship: 'SQLite, PostgreSQL y MySQL',
                            official: 'SQLite',
                        },
                    ],
                },
                {
                    title: 'Renderizado, tema y textos de la interfaz',
                    text: 'Los dos kits muestran páginas de React a través de Inertia. Taneship las renderiza en el servidor por defecto, guarda el tema en la cuenta y mantiene cada texto en un archivo de traducción.',
                    rows: [
                        {
                            criterion: 'Renderizado en el servidor',
                            taneship: 'Activo por defecto: un solo build genera los bundles de cliente y de servidor, y los tests en un navegador comprueban que cada página se renderizó en el servidor',
                            official: 'Opcional: un script build:ssr aparte genera el bundle de servidor',
                        },
                        {
                            criterion: 'Tema',
                            taneship: 'Guardado en la cuenta: sigue al usuario de un dispositivo a otro',
                            official: 'Guardado en el navegador: una cookie y localStorage',
                        },
                        {
                            criterion: 'Textos de la interfaz',
                            taneship: 'En archivos de traducción, listos para otros idiomas',
                            official: 'Escritos en los componentes, en inglés',
                        },
                        {
                            criterion: 'Cabeceras de seguridad',
                            taneship: 'Enviadas por un middleware de la aplicación',
                            official: 'A tu cargo',
                        },
                        {
                            criterion: 'Lighthouse',
                            taneship: 'Al menos 95 en móvil en las páginas públicas, comprobado en CI',
                            official: 'No se mide',
                        },
                    ],
                },
                {
                    title: 'Agentes de código',
                    text: 'Los dos kits funcionan con agentes de código. Taneship escribe sus reglas para ellos, y después deja que las herramientas rechacen lo que incumple alguna.',
                    rows: [
                        {
                            criterion: 'Convenciones',
                            taneship: 'AGENTS.md: stack, estructura, nombres, tests y límites',
                            official: 'Ningún archivo de convenciones en el repositorio',
                        },
                        {
                            criterion: 'Laravel Boost',
                            taneship: 'Incluido, por su servidor MCP',
                            official: 'No está en el repositorio: el instalador de Laravel puede añadirlo',
                        },
                        {
                            criterion: 'Qué frena una desviación',
                            taneship: 'Larastan nivel 10, los tests de arquitectura y los umbrales de cobertura hacen fallar el build',
                            official: 'Larastan nivel 7 y los tests funcionales',
                        },
                    ],
                },
                {
                    title: 'Integración continua',
                    text: 'Cada kit incluye sus workflows de GitHub Actions. El kit oficial tiene uno, que ejecuta el lint, las comprobaciones de tipos y los tests. Taneship tiene cuatro.',
                    rows: [
                        {
                            criterion: 'Workflows',
                            taneship: 'Cuatro: controles de calidad, Lighthouse, mensajes de commit, auditorías de dependencias',
                            official: 'Uno: lint, comprobaciones de tipos y tests',
                        },
                        {
                            criterion: 'Entorno',
                            taneship: 'PHP 8.5 y Node.js 24',
                            official: 'PHP 8.3 y Node.js 22',
                        },
                        {
                            criterion: 'Dependencias',
                            taneship: 'composer audit y npm audit en cada push, y cada semana',
                            official: 'Dependabot, para las GitHub Actions',
                        },
                        {
                            criterion: 'Mensajes de commit',
                            taneship: 'Conventional Commits, comprobados en cada commit y en CI',
                            official: 'Ninguna regla',
                        },
                    ],
                },
            ],
        },
        signUp: {
            title: 'Un ejemplo: el registro',
            official: 'En el kit oficial, las rutas y el controlador de Fortify reciben la petición. Llaman a app/Actions/Fortify/CreateNewUser, una clase que implementa un contrato de Fortify: valida un array de datos y crea el usuario. Después, Fortify inicia la sesión del usuario y lo redirige.',
            taneship: 'En Taneship, routes/identity.php envía la petición a RegistrationController. RegisterUserRequest la valida y devuelve un objeto RegistrationData, la acción RegisterUser crea el usuario, y el controlador inicia su sesión. Cuatro archivos cortos, todos en tu aplicación.',
            caption: 'La acción de registro de Taneship Free, tal como se entrega.',
        },
        tryBoth: {
            title: 'Prueba los dos en cinco minutos',
            lead: 'Ninguno de los dos kits necesita claves de terceros. Instálalos uno al lado del otro, y después lee su código.',
            official: 'El kit oficial de Laravel',
            officialCaption: 'El instalador pregunta por un starter kit: elige React.',
            taneship: 'Taneship Free',
            taneshipCaption: 'Los seeders crean un usuario de demostración para iniciar sesión.',
        },
        faq: {
            title: 'Preguntas sobre esta comparativa',
            items: [
                {
                    question: '¿Es Taneship un fork del starter kit de React de Laravel?',
                    answer: 'No. Taneship Free está escrito desde cero. Reproduce las funcionalidades del kit oficial y comparte su stack: Laravel 13, Inertia 3, React 19, Wayfinder y shadcn/ui.',
                },
                {
                    question: '¿Tiene Taneship Free todas las funcionalidades del kit oficial?',
                    answer: 'Sí: registro, inicio de sesión, verificación del correo, restablecimiento de la contraseña, confirmación de la contraseña, autenticación en dos pasos, passkeys, perfil, cambio de contraseña, eliminación de la cuenta y elección del tema. Dos cosas se dejan fuera a propósito: los diseños alternativos, que son decisiones de presentación, y la pregunta del instalador sobre las funcionalidades. En Taneship, borras el código que no quieres.',
                },
                {
                    question: '¿Por qué Taneship no usa Laravel Fortify?',
                    answer: 'Fortify mantiene la lógica de la autenticación en un paquete y la dirige con configuración y callbacks. Taneship escribe la autenticación en acciones y controladores de tu aplicación, para que la leas y la modifiques como el resto de tu código. La contrapartida: aplicas a mano las correcciones de seguridad de las versiones de Taneship, mientras que composer update trae las de Fortify.',
                },
                {
                    question: '¿Admite el starter kit de React de Laravel el renderizado en el servidor?',
                    answer: 'Sí, como opción: su script build:ssr genera el bundle de servidor. En Taneship, el renderizado en el servidor está activo por defecto: el build estándar genera los dos bundles, y cada test en un navegador comprueba que la página se renderizó en el servidor.',
                },
                {
                    question: '¿Es Larastan nivel 10 más exigente que el nivel 7?',
                    answer: 'Pide más al código que escribes: los niveles 8 a 10 rechazan las llamadas sobre valores que pueden ser nulos, y las operaciones sobre valores de tipo desconocido. Taneship pasa el nivel 10 sin baseline: tu proyecto parte de cero errores, y cada error que encuentras señala una línea de tu propio código.',
                },
                {
                    question: '¿Cuál de los dos kits es mejor para los agentes de código?',
                    answer: 'Los dos funcionan con Claude Code, Codex, Cursor y los demás. Taneship da a los agentes convenciones escritas en AGENTS.md, y después comprueba lo que escriben: Larastan nivel 10, los tests de arquitectura, un umbral de cobertura del 90 % y los tests en un navegador rechazan el código que incumple una regla, lo escriba quien lo escriba.',
                },
                {
                    question: '¿Puedo pasar un proyecto del kit oficial a Taneship?',
                    answer: 'No de forma automática: los dos kits organizan su código de manera distinta, y Taneship no tiene instalador ni comando de actualización. Para un proyecto recién empezado, crea uno nuevo desde la plantilla de Taneship y mueve tu código a él. Para un proyecto más antiguo, toma lo que necesites: los controles de calidad, los tests de arquitectura y AGENTS.md se copian uno a uno.',
                },
                {
                    question: '¿Cuánto cuesta Taneship?',
                    answer: 'Taneship Free es gratuito y de código abierto, con licencia MIT, como el kit oficial. Taneship Pro y Taneship Teams, que añaden lo que un SaaS necesita para vender, son ediciones de pago, anunciadas como próximamente.',
                },
            ],
        },
        closing: {
            title: 'Lee los dos, y después decide',
            text: 'El kit oficial se instala con un comando, y Taneship Free es un repositorio público. El código es el mejor argumento de cada uno.',
            cta: 'Abrir Taneship en GitHub',
            home: 'Descubrir Taneship y sus ediciones',
        },
    },
    privacy: {
        title: 'Privacidad',
        description: 'Qué recoge este sitio, por qué y cómo pedir que se elimine.',
        back: 'Volver al inicio',
        sections: [
            {
                title: 'El responsable',
                text: '{publisher} publica este sitio y es responsable de los datos descritos en esta página. Contacto: {email}.',
            },
            {
                title: 'Qué recoge este sitio',
                text: 'Este sitio no instala cookies ni ejecuta scripts de analítica. El único dato personal que recoge es la dirección de correo que introduces en el formulario de la lista de espera, con el idioma de la página en la que la introdujiste.',
            },
            {
                title: 'La finalidad',
                text: 'Enviarte un correo cuando se publiquen Taneship Pro y Taneship Teams. La base legal es tu consentimiento, dado con la casilla del formulario.',
            },
            {
                title: 'Los destinatarios',
                text: 'Brevo, empresa francesa y nuestro proveedor de correo, conserva la lista en servidores situados en la Unión Europea. Nadie más recibe tu dirección. Netlify aloja este sitio y, como cualquier alojamiento, trata la dirección IP de tus peticiones para servir las páginas.',
            },
            {
                title: 'El plazo de conservación',
                text: 'Hasta que te des de baja. Cada correo incluye un enlace de baja, y también puedes escribir a {email}.',
            },
            {
                title: 'Tus derechos',
                text: 'Puedes acceder a tus datos, rectificarlos o pedir su eliminación, y retirar tu consentimiento en cualquier momento, escribiendo a {email}. También puedes presentar una reclamación ante tu autoridad de protección de datos: en Francia, la CNIL; en España, la AEPD.',
            },
        ],
    },
};
