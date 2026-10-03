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
