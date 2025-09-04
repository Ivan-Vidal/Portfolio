// Mock data for Ivan Vidal's portfolio
export const personalInfo = {
  name: "Ivan Vidal",
  title: "Desenvolvedor Fullstack",
  // subtitle: "5 anos de experiência no setor bancário",
  location: "Cotia, São Paulo - Brazil",
  email: "ivanvidal.dev@gmail.com",
  phone: "+55 (11) 9 6834-4811",
  website: "www.ivanvidal.com.br",
  github: "https://github.com/ivanvidal",
  linkedin: "https://linkedin.com/in/ivanvidal",
  resumeUrl: "/ivan-vidal.pdf"
};

export const about = {
  summary: "Desenvolvedor Fullstack com 5 anos de experiência no setor bancário, especializado em criar soluções de software eficientes, seguras e escaláveis. Expertise em Angular (versões 8 a 14), Node.js e Java, com forte atuação na integração front-end e back-end. Profundo domínio de TypeScript, JavaScript, HTML e CSS, garantindo código de fácil manutenção e interfaces responsivas, acessíveis e amigáveis ao usuário, alinhadas a ambientes altamente regulamentados.",
  focus: [
    "Desenvolvimento de soluções escaláveis",
    "Integração front-end e back-end",
    "Ambientes regulamentados bancários",
    "Interfaces acessíveis e responsivas"
  ]
};

export const skills = {
  frontend: [
    "Angular (8-14)",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "Responsive Design",
    "Accessibility (WCAG)"
  ],
  backend: [
    "Node.js",
    "Java",
    "RESTful APIs",
    "Microservices",
    "Database Design"
  ],
  tools: [
    "Git & GitFlow",
    "CI/CD",
    "Jest Testing",
    "SonarQube",
    "Google Analytics",
    "Agile/Scrum"
  ],
  methodologies: [
    "Test-Driven Development",
    "Clean Code",
    "Design Patterns",
    "Agile Development",
    "Code Review"
  ]
};

export const experience = [
  {
    id: 1,
    company: "Forsys Sistemas de Informação",
    position: "Desenvolvedor Front-end - Angular",
    period: "2022 - Atual",
    description: "Desenvolvimento de aplicações Angular com foco em acessibilidade, usabilidade e performance.",
    achievements: [
      "Desenvolvimento de aplicações Angular (versões 8, 10, 12 e 14) com foco em acessibilidade, usabilidade e performance",
      "Implementação de recursos de acessibilidade utilizando práticas compatíveis com TalkBack (Android) e VoiceOver (iOS)",
      "Desenvolvimento de interfaces responsivas baseadas em mockups Adobe XD e Figma, seguindo Design System proprietário",
      "Configuração e otimização do fluxo de tagueamento com Google Analytics para coleta precisa de eventos",
      "Processo de CI/CD automatizado com deploy em esteiras, aplicando correções e melhorias de código com foco em qualidade"
    ]
  },
  {
    id: 2,
    company: "ACT Digital",
    position: "Desenvolvedor Front-end - Angular",
    period: "2021 - 2022",
    description: "Desenvolvimento de ferramentas internas para o setor bancário utilizando Angular 9+ e Node.js com TypeScript.",
    achievements: [
      "Desenvolvimento de ferramentas internas para o setor bancário utilizando Angular 9+ e Node.js com TypeScript",
      "Implementação de sistemas de gerenciamento de perfis de usuários com foco em usabilidade e eficiência",
      "Aplicação de metodologias ágeis como Scrum e Kanban em cerimônias e colaboração em times multidisciplinares",
      "Desenvolvimento e manutenção de testes unitários com Jest para garantir qualidade e confiabilidade do código",
      "Utilização de Git com Bitbucket (fluxo GitFlow) para versionamento e integração contínua"
    ]
  },
  {
    id: 3,
    company: "7COMM - Autônomo",
    position: "Desenvolvedor Front-end - Angular",
    period: "2021 - 2021",
    description: "Desenvolvimento de ferramentas para uso interno de um banco, usando Angular CLI e NodeJS com Typescript.",
    achievements: [
      "Desenvolvimento de ferramentas para uso interno de um banco usando Angular CLI e NodeJS com TypeScript",
      "Desenvolvimento ágil com Scrum e Kanban",
      "Testes unitários e controle de versionamento com Git e Bitbucket como sistema de hospedagem de projetos"
    ]
  },
  {
    id: 4,
    company: "iDigital - Autônomo",
    position: "Desenvolvedor Front-end - Angular",
    period: "2021 - 2021",
    description: "Análise de sistemas internos da Samsung e desenvolvimento com Angular.",
    achievements: [
      "Análise de sistemas internos da Samsung feitos em Angular",
      "Auxílio em utilização de API's do Google",
      "Repositórios no Microsoft Azure",
      "Auxílio nas configurações do Google My Business (GMB) e Google Tag Manager (GTM)",
      "Assistência em Design de fotos para integração com o GMB",
      "Metodologias ágeis e auxílio em demais tarefas pertinentes"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Sistema de Autoatendimento Bancário",
    description: "Portal web para autoatendimento bancário com recursos de acessibilidade avançados e integração com sistemas legados.",
    technologies: ["Angular 14", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    features: [
      "Interface acessível compatível com leitores de tela",
      "Autenticação multifator",
      "Integração com sistemas bancários core",
      "Dashboard em tempo real"
    ],
    status: "Produção"
  },
  {
    id: 2,
    title: "Aplicativo de Pagamentos Móveis",
    description: "Aplicação mobile-first para processamento de pagamentos com tecnologia de geolocalização e notificações push.",
    technologies: ["Angular 12", "PWA", "WebRTC", "Google Analytics", "Jest"],
    features: [
      "Progressive Web App (PWA)",
      "Geolocalização e mapas integrados",
      "Notificações push personalizadas",
      "Analytics detalhado de uso"
    ],
    status: "Produção"
  },
  {
    id: 3,
    title: "Dashboard de Monitoramento",
    description: "Sistema de monitoramento em tempo real para acompanhamento de métricas bancárias e alertas automáticos.",
    technologies: ["Angular 10", "D3.js", "WebSocket", "Node.js", "MongoDB"],
    features: [
      "Visualizações interativas de dados",
      "Alertas automáticos configuráveis",
      "Exportação de relatórios",
      "Interface responsiva multiplataforma"
    ],
    status: "Desenvolvimento"
  },
  {
    id: 4,
    title: "Sistema de Gestão de Faturas",
    description: "Plataforma para gerenciamento de faturamento empresarial com recursos de parcelamento e integração fiscal.",
    technologies: ["Angular 8", "Java Spring", "MySQL", "Apache Kafka"],
    features: [
      "Processamento de faturas em lote",
      "Integração com sistemas fiscais",
      "Relatórios gerenciais avançados",
      "APIs RESTful documentadas"
    ],
    status: "Manutenção"
  }
];

export const education = {
  degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  institution: "UNICID - Universidade da Cidade de São Paulo",
  period: "2019 - 2021",
  status: "Concluído"
};

export const languages = [
  {
    language: "Português",
    level: "Nativo"
  },
  {
    language: "Inglês",
    level: "Intermediário"
  },
  {
    language: "Espanhol",
    level: "Básico"
  }
];

export const contactInfo = {
  title: "Vamos trabalhar juntos?",
  subtitle: "Estou sempre aberto a novos desafios e oportunidades interessantes.",
  email: "ivanvidal.dev@gmail.com",
  phone: "+55 (11) 9 6834-4811",
  location: "Cotia, São Paulo - Brazil"
};