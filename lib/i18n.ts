export type Lang = "en" | "pt";
export type Theme = "dark" | "light";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  status: string;
  desc: string;
  stack: string;
  links?: ProjectLink[];
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface Dictionary {
  langBtn: string;
  /** Label of the theme toggle for each *current* theme. */
  themeBtn: Record<Theme, string>;
  heroKicker: string;
  heroSub: string;
  aboutTitle: string;
  aboutBody: string;
  prodTitle: string;
  prodBadge: string;
  prodBody: string;
  prodTracks: StackGroup[];
  prodNote: string;
  roadTitle: string;
  roadSub: string;
  projects: Project[];
  stackTitle: string;
  stackGroups: StackGroup[];
  contactTitle: string;
  contactBody: string;
  footer: string;
}

export const LINKS = {
  github: "https://github.com/Luckyx128",
  githubLabel: "github.com/Luckyx128",
  linkedin: "https://www.linkedin.com/in/lucas-de-amorim-773929240",
} as const;

const REPO = {
  githalls: { label: "macOS", href: `${LINKS.github}/githalls` },
  githallsWin: { label: "Windows", href: `${LINKS.github}/gitHallsWind` },
  vigia: { label: "GitHub", href: `${LINKS.github}/Vigia` },
} as const;

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    langBtn: "PT",
    themeBtn: { dark: "LIGHT", light: "DARK" },
    heroKicker: "Senior Fullstack Analyst — Brazil",
    heroSub:
      "I build web and mobile products end to end — from the push notification on the server to the OTA patch on the user's phone.",
    aboutTitle: "About",
    aboutBody:
      "Day to day I ship a Flutter app to the App Store and Google Play, with Shorebird code push for same-day fixes; write the Node.js/Fastify backend behind it — push notifications with Firebase, real-time updates over SSE, PDF and Excel reports; and build the React web app that talks to the same API. Outside work I go native: SwiftUI on macOS, WinUI on Windows, Kotlin on Android — and I self-host my own projects on a VPS with Docker and Traefik. I also study game development, which keeps me sharp on performance and real-time logic.",
    prodTitle: "In production",
    prodBadge: "iOS · Android · Web · Live",
    prodBody:
      "Environmental and waste-management platform used daily in the field and in the office. I work across the whole product: the Flutter app, the Node.js services and the React web app.",
    prodTracks: [
      {
        label: "Mobile · Flutter",
        items: [
          "OTA patches with Shorebird",
          "FCM push with image & PDF attachments",
          "Offline-first: SQLite + batched sync",
          "Biometric login, secure storage",
          "Geolocation & background services",
          "Releases on App Store & Google Play",
        ],
      },
      {
        label: "Backend · Node.js",
        items: [
          "Push worker with Firebase Admin",
          "Real-time notifications over SSE",
          "PDF rendering (Puppeteer) & queued e-mail",
          "Excel report API (ExcelJS)",
          "Fastify + Zod + OpenAPI, Prisma",
          "Integrations with government systems",
        ],
      },
      {
        label: "Web · React",
        items: [
          "Notification center: bell, modals, attachments",
          "Virtualized lists for large datasets",
          "MUI, Redux Toolkit, React Query",
          "Data grids, calendars, maps",
        ],
      },
    ],
    prodNote:
      "Proprietary codebase — architecture and details available on request.",
    roadTitle: "Side projects",
    roadSub: "Built end to end on my own time. Public repos are linked.",
    projects: [
      {
        name: "PDV",
        status: "Going live",
        desc: "Multi-store point of sale for a clothing retailer. API with RBAC, rotating refresh tokens, idempotent payments and presigned photo uploads; Next.js cashier front end; Kotlin Android stock app with barcode scanner and offline queue. 370+ automated tests, deployed with Docker Compose on a VPS.",
        stack: "Fastify · Prisma · PostgreSQL · Next.js · Kotlin · Docker",
      },
      {
        name: "GitHalls",
        status: "Active",
        desc: "Native git client: colored diffs with syntax highlighting, staging, history graph, branches, merge preview and Jira card → branch. Built from scratch in SwiftUI for macOS, then ported to WinUI 3 for Windows.",
        stack: "Swift · SwiftUI · C# · WinUI 3 · .NET",
        links: [REPO.githalls, REPO.githallsWin],
      },
      {
        name: "Vigia",
        status: "Active",
        desc: "Black Friday price radar: scrapes hardware stores hourly, keeps multi-store price history and flags fake discounts. Built to run unattended on a VPS.",
        stack: "Python · FastAPI · Next.js · Linux",
        links: [REPO.vigia],
      },
      {
        name: "Transmissor",
        status: "In progress",
        desc: "Desktop app for small-group screen sharing with Discord login (OAuth2 + PKCE). A small backend issues the LiveKit tokens and decides who streams and who watches.",
        stack: "Electron · React · LiveKit · Docker",
      },
    ],
    stackTitle: "Stack",
    stackGroups: [
      {
        label: "Mobile",
        items: ["Flutter", "Dart", "Shorebird", "FCM", "SQLite", "Kotlin", "Store publishing"],
      },
      {
        label: "Backend",
        items: ["Node.js", "TypeScript", "Fastify", "Zod", "Prisma", "PostgreSQL", "SQL Server", "Firebase Admin", "SSE", "Puppeteer", "FastAPI"],
      },
      {
        label: "Frontend",
        items: ["React", "Next.js", "MUI", "Redux Toolkit", "React Query", "shadcn/ui", "Tailwind"],
      },
      {
        label: "Native & desktop",
        items: ["Swift", "SwiftUI", "C#", "WinUI 3", "Electron"],
      },
      {
        label: "Infra & tools",
        items: ["Docker", "Docker Compose", "Traefik", "Linux VPS", "OpenAPI", "Git & GitHub"],
      },
    ],
    contactTitle: "Let's talk",
    contactBody:
      "Open to fullstack and mobile opportunities — remote or in Brazil. The fastest way to reach me is LinkedIn.",
    footer: "built with Next.js + TypeScript, self-hosted",
  },
  pt: {
    langBtn: "EN",
    themeBtn: { dark: "CLARO", light: "ESCURO" },
    heroKicker: "Analista Fullstack Sênior — Brasil",
    heroSub:
      "Construo produtos web e mobile de ponta a ponta — do push notification no servidor ao patch OTA no celular do usuário.",
    aboutTitle: "Sobre",
    aboutBody:
      "No dia a dia publico um app Flutter na App Store e no Google Play, com code push via Shorebird para corrigir no mesmo dia; escrevo o backend Node.js/Fastify por trás dele — push notifications com Firebase, atualizações em tempo real via SSE, relatórios em PDF e Excel; e construo o web em React que consome a mesma API. Fora do trabalho vou para o nativo: SwiftUI no macOS, WinUI no Windows, Kotlin no Android — e hospedo meus próprios projetos numa VPS com Docker e Traefik. Também estudo desenvolvimento de jogos, o que me mantém afiado em performance e lógica em tempo real.",
    prodTitle: "Em produção",
    prodBadge: "iOS · Android · Web · No ar",
    prodBody:
      "Plataforma de gestão ambiental e de resíduos usada todo dia em campo e no escritório. Atuo no produto inteiro: o app Flutter, os serviços Node.js e o web em React.",
    prodTracks: [
      {
        label: "Mobile · Flutter",
        items: [
          "Patches OTA com Shorebird",
          "Push FCM com imagem e PDF anexos",
          "Offline-first: SQLite + sync em lote",
          "Login biométrico, armazenamento seguro",
          "Geolocalização e serviços em segundo plano",
          "Releases na App Store e Google Play",
        ],
      },
      {
        label: "Backend · Node.js",
        items: [
          "Worker de push com Firebase Admin",
          "Notificações em tempo real via SSE",
          "PDF com Puppeteer e e-mail em fila",
          "API de relatórios Excel (ExcelJS)",
          "Fastify + Zod + OpenAPI, Prisma",
          "Integrações com sistemas de órgãos públicos",
        ],
      },
      {
        label: "Web · React",
        items: [
          "Central de notificações: sino, modais, anexos",
          "Listas virtualizadas para grandes volumes",
          "MUI, Redux Toolkit, React Query",
          "Data grids, calendários, mapas",
        ],
      },
    ],
    prodNote: "Código proprietário — arquitetura e detalhes sob demanda.",
    roadTitle: "Projetos pessoais",
    roadSub:
      "Feitos de ponta a ponta no meu tempo livre. Os repositórios públicos têm link.",
    projects: [
      {
        name: "PDV",
        status: "Indo pro ar",
        desc: "Ponto de venda multi-loja para uma loja de roupas. API com RBAC, refresh token rotativo, pagamento idempotente e upload de fotos pré-assinado; front de caixa em Next.js; app Android de estoque em Kotlin com leitor de código de barras e fila offline. Mais de 370 testes automatizados, deploy com Docker Compose numa VPS.",
        stack: "Fastify · Prisma · PostgreSQL · Next.js · Kotlin · Docker",
      },
      {
        name: "GitHalls",
        status: "Ativo",
        desc: "Cliente git nativo: diffs coloridos com syntax highlighting, stage, grafo de histórico, branches, prévia de merge e card do Jira → branch. Feito do zero em SwiftUI para macOS e depois portado para WinUI 3 no Windows.",
        stack: "Swift · SwiftUI · C# · WinUI 3 · .NET",
        links: [REPO.githalls, REPO.githallsWin],
      },
      {
        name: "Vigia",
        status: "Ativo",
        desc: "Radar de preços da Black Friday: raspa lojas de hardware de hora em hora, guarda histórico multi-loja e denuncia a \"metade do dobro\". Feito para rodar sozinho numa VPS.",
        stack: "Python · FastAPI · Next.js · Linux",
        links: [REPO.vigia],
      },
      {
        name: "Transmissor",
        status: "Em andamento",
        desc: "App desktop para transmitir a tela para grupos pequenos com login pelo Discord (OAuth2 + PKCE). Um backend próprio emite os tokens do LiveKit e decide quem transmite e quem assiste.",
        stack: "Electron · React · LiveKit · Docker",
      },
    ],
    stackTitle: "Stack",
    stackGroups: [
      {
        label: "Mobile",
        items: ["Flutter", "Dart", "Shorebird", "FCM", "SQLite", "Kotlin", "Publicação nas lojas"],
      },
      {
        label: "Backend",
        items: ["Node.js", "TypeScript", "Fastify", "Zod", "Prisma", "PostgreSQL", "SQL Server", "Firebase Admin", "SSE", "Puppeteer", "FastAPI"],
      },
      {
        label: "Frontend",
        items: ["React", "Next.js", "MUI", "Redux Toolkit", "React Query", "shadcn/ui", "Tailwind"],
      },
      {
        label: "Nativo e desktop",
        items: ["Swift", "SwiftUI", "C#", "WinUI 3", "Electron"],
      },
      {
        label: "Infra e ferramentas",
        items: ["Docker", "Docker Compose", "Traefik", "VPS Linux", "OpenAPI", "Git & GitHub"],
      },
    ],
    contactTitle: "Vamos conversar",
    contactBody:
      "Aberto a oportunidades fullstack e mobile — remoto ou no Brasil. O jeito mais rápido de falar comigo é pelo LinkedIn.",
    footer: "feito com Next.js + TypeScript, auto-hospedado",
  },
};
