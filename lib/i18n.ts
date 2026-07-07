export type Lang = "en" | "pt";
export type Theme = "dark" | "light";

export interface Project {
  name: string;
  status: string;
  desc: string;
  stack: string;
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
  prodBullets: string[];
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

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    langBtn: "PT",
    themeBtn: { dark: "LIGHT", light: "DARK" },
    heroKicker: "Senior Fullstack Analyst — Brazil",
    heroSub:
      "I build web and mobile products end to end — from the API to the app store.",
    aboutTitle: "About",
    aboutBody:
      "On the web I work with TypeScript, React and Node.js; on mobile I ship Flutter apps to both the App Store and Google Play. Day to day that means push notifications, PDF generation, digital signatures on canvas and OTA hotfixes — in production, not tutorials. Off the clock I study game development, which keeps me sharp on performance and real-time logic.",
    prodTitle: "In production",
    prodBadge: "iOS + Android · Live",
    prodBody:
      "Flutter app in production for iOS and Android. I own the mobile side: features, releases and maintenance on both stores.",
    prodBullets: [
      "Push notifications (FCM)",
      "PDF generation",
      "Digital signature on canvas",
      "Publishing on App Store & Google Play",
      "OTA hotfixes with Shorebird",
      "Ongoing maintenance & releases",
    ],
    prodNote: "Proprietary codebase — architecture and details available on request.",
    roadTitle: "Building now",
    roadSub: "Personal projects in progress — public on GitHub as they ship.",
    projects: [
      {
        name: "Churras",
        status: "In progress",
        desc: "Barbecue planner: guest count in, meat & drinks math, shopping list and cost split out. One backend serving web and mobile.",
        stack: "Node.js · TypeScript · React · Flutter",
      },
      {
        name: "PDF Report Service",
        status: "In progress",
        desc: "Report generation as a service — template-driven, queued rendering. Built on the PDF experience I use professionally.",
        stack: "Node.js · TypeScript · Puppeteer",
      },
      {
        name: "Backlog",
        status: "Planned",
        desc: "A small game-backlog tracker, published under my own name on both stores.",
        stack: "Flutter · Dart",
      },
      {
        name: "Swift Projects",
        status: "Studying",
        desc: "Native iOS studies — small apps in Swift and SwiftUI exploring platform APIs beyond Flutter.",
        stack: "Swift · SwiftUI",
      },
    ],
    stackTitle: "Stack",
    stackGroups: [
      { label: "Web", items: ["TypeScript", "React", "Node.js", "REST APIs"] },
      {
        label: "Mobile",
        items: ["Flutter", "Dart", "Swift", "FCM", "Shorebird", "Store publishing"],
      },
      { label: "Tools", items: ["Git & GitHub", "Puppeteer / PDF", "CI/CD"] },
    ],
    contactTitle: "Let's talk",
    contactBody:
      "Open to fullstack and mobile opportunities — remote or in Brazil. The fastest way to reach me is LinkedIn.",
    footer: "built with Next.js + TypeScript",
  },
  pt: {
    langBtn: "EN",
    themeBtn: { dark: "CLARO", light: "ESCURO" },
    heroKicker: "Analista Fullstack Sênior — Brasil",
    heroSub:
      "Construo produtos web e mobile de ponta a ponta — da API até a loja de apps.",
    aboutTitle: "Sobre",
    aboutBody:
      "No web trabalho com TypeScript, React e Node.js; no mobile publico apps Flutter na App Store e no Google Play. No dia a dia isso significa push notifications, geração de PDF, assinatura digital em canvas e hotfix OTA — em produção, não em tutorial. Nas horas vagas estudo desenvolvimento de jogos, o que me mantém afiado em performance e lógica em tempo real.",
    prodTitle: "Em produção",
    prodBadge: "iOS + Android · No ar",
    prodBody:
      "App Flutter em produção para iOS e Android. Sou responsável pelo lado mobile: features, releases e manutenção nas duas lojas.",
    prodBullets: [
      "Push notifications (FCM)",
      "Geração de PDF",
      "Assinatura digital em canvas",
      "Publicação na App Store e Google Play",
      "Hotfix OTA com Shorebird",
      "Manutenção e releases contínuos",
    ],
    prodNote: "Código proprietário — arquitetura e detalhes sob demanda.",
    roadTitle: "Construindo agora",
    roadSub:
      "Projetos pessoais em andamento — públicos no GitHub conforme forem lançados.",
    projects: [
      {
        name: "Churras",
        status: "Em andamento",
        desc: "Planejador de churrasco: número de convidados entra, cálculo de carne e bebida, lista de compras e divisão de custos saem. Um backend servindo web e mobile.",
        stack: "Node.js · TypeScript · React · Flutter",
      },
      {
        name: "PDF Report Service",
        status: "Em andamento",
        desc: "Geração de relatórios como serviço — templates e renderização em fila. Baseado na experiência com PDF que uso profissionalmente.",
        stack: "Node.js · TypeScript · Puppeteer",
      },
      {
        name: "Backlog",
        status: "Planejado",
        desc: "Um pequeno tracker de backlog de jogos, publicado em meu nome nas duas lojas.",
        stack: "Flutter · Dart",
      },
      {
        name: "Swift Projects",
        status: "Estudando",
        desc: "Estudos de iOS nativo — apps pequenos em Swift e SwiftUI explorando APIs da plataforma além do Flutter.",
        stack: "Swift · SwiftUI",
      },
    ],
    stackTitle: "Stack",
    stackGroups: [
      { label: "Web", items: ["TypeScript", "React", "Node.js", "REST APIs"] },
      {
        label: "Mobile",
        items: ["Flutter", "Dart", "Swift", "FCM", "Shorebird", "Publicação nas lojas"],
      },
      { label: "Ferramentas", items: ["Git & GitHub", "Puppeteer / PDF", "CI/CD"] },
    ],
    contactTitle: "Vamos conversar",
    contactBody:
      "Aberto a oportunidades fullstack e mobile — remoto ou no Brasil. O jeito mais rápido de falar comigo é pelo LinkedIn.",
    footer: "feito com Next.js + TypeScript",
  },
};

export const LINKS = {
  github: "https://github.com/Luckyx128",
  githubLabel: "github.com/Luckyx128",
  linkedin: "https://www.linkedin.com/in/lucas-de-amorim-773929240",
} as const;
