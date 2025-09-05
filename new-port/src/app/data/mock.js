// Mock data for Ivan Vidal's portfolio
export const personalInfo = {
  name: "Ivan Vidal",
  title: "Desenvolvedor Fullstack",
  location: "Cotia, São Paulo - Brazil",
  email: "ivanvidal.dev@gmail.com",
  phone: "+55 (11) 9 6834-4811",
  website: "www.ivanvidal.com.br",
  github: "https://github.com/Ivan-Vidal",
  linkedin: "https://www.linkedin.com/in/ivan-vidal-b7485a138/",
  resumeUrl: "/ivan-vidal.pdf"
};

export const about = {
  summary: "Desenvolvedor Fullstack com mais de 5 anos de experiência no setor bancário, especializado em criar soluções de software eficientes, seguras e escaláveis. Expertise em Angular CLI, Node.js e Java, com forte atuação na integração front-end e back-end. Profundo domínio de TypeScript, JavaScript, HTML e CSS, garantindo código de fácil manutenção e interfaces responsivas, acessíveis e amigáveis ao usuário, alinhadas a ambientes altamente regulamentados.",
  focus: [
    "Desenvolvimento de soluções escaláveis",
    "Integração front-end e back-end",
    "Ambientes regulamentados bancários",
    "Interfaces acessíveis e responsivas"
  ]
};

export const skills = {
  frontend: [
    "Angular CLI",
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
    title: "Feedback Widget",
    description: "Aplicação que pode ser usada em qualquer site ou App mobile, para possibilitar o feedback do usuário.",
    technologies: ["ReactJS", "TypeScript", "Node.js", "SQLite", "Tailwind CSS", "Vite"],
    features: [
      "Interface amigável para feedback do usuário",
      "Armazenamento de feedback em banco de dados",
      "Fácil integração com qualquer site ou app mobile",
    ],
    status: "Produção",
    url: "https://nlw-return-web-nine-mocha.vercel.app",
    githubLink: "https://github.com/Ivan-Vidal/nlw-return"
  },
  {
    id: 2,
    title: "Aplicativo PlantManager",
    description: "Aplicativo para lhe ajudar a lembrar de cuidar de suas plantas de forma fácil de acordo com cada tipo de plantinha.",
    technologies: ["React Native", "TypeScript", "Node.js", "SQLite", "Expo"],
    features: [
      "Notificações de cuidados com as plantas",
      "Reconhecimento de espécies de plantas",
      "Integração com APIs de clima",
      "Interface amigável e responsiva"
    ],
    status: "Manutenção",
    url: "",
    githubLink: "https://github.com/Ivan-Vidal/nlw5-plantManager"
  },
  {
    id: 3,
    title: "CRUD Angular CLI",
    description: "Aplicação com as funções de Create, Read, Update e Delete, o famoso CRUD.",
    technologies: ["Angular 9", "Bootstrap", "WebSocket", "Node.js",],
    features: [
      "Interface amigável para gerenciamento de dados",
      "Operações de CRUD completas",
      "Comunicação em tempo real com WebSocket",
      "Fácil de personalizar e expandir"
    ],
    status: "Manutenção",
    url: "",
    githubLink: "https://github.com/Ivan-Vidal/CRUD-Angular-CLI"
  },
  {
    id: 4,
    title: "Money Saver",
    description: "Aplicação para o controle de sua vida financeira.",
    technologies: ["Angular 8", "Java Spring", "MySQL", "Apache Kafka"],
    features: [
      "Dashboard financeiro interativo",
      "Categorias personalizáveis de despesas e receitas",
      "Relatórios gráficos de gastos futuramente"
    ],
    status: "Produção",
    url: "https://money-saver-c81wwz3ed-ivan-vidal.vercel.app/",
    appLink: "https://github.com/Ivan-Vidal/Money-Saver"
  },
  {
    id: 5,
    title: "StopLittle",
    description: "Aplicação para melhorar a organização de tempo de foco em estudos ou tarefas em frente ao computador.",
    technologies: ["ReactJS", "Java Spring", "MySQL", "Apache Kafka"],
    features: [
      "Temporizador personalizável",
      "Estatísticas de produtividade",
      "Notificações sonoras e visuais",
      "Modo escuro"
    ],
    status: "Produção",
    url: "hhttps://stoplittle.vercel.app/",
    appLink: "https://github.com/Ivan-Vidal/Move.it-React-JS"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Meu site pessoal para mostrar meus projetos e habilidades.",
    technologies: ["ReactJS", "Tailwind CSS", "Vite", "Framer Motion"],
    features: [
      "Design responsivo e moderno",
      "Animações suaves com Framer Motion",
      "SEO otimizado",
      "Fácil de atualizar e manter"
    ],
    status: "Produção",
    url: "https://www.ivanvidal.com.br",
    githubLink: "https://github.com/Ivan-Vidal/Portfolio",
  },
  {
    id: 7,
    title: "Weekly Meal Planner",
    description: "Um planejador semanal de refeições desenvolvido com Angular, Node.js e SQLite.",
    technologies: ["Angular", "Node.js", "SQLite", "Express", "TypeScript", "Bootstrap", "Jest", "Git", "GitHub", "CI/CD"],
    features: [
      "Interface amigável para planejar refeições semanais",
      "Banco de dados SQLite para armazenamento local",
      "Backend em Node.js com Express para gerenciamento de dados",
      "Testes unitários com Jest para garantir a qualidade do código"
    ],
    status: "Produção",
    url: "https://meal-planner-front-hazel.vercel.app/meals",
    githubLink: "https://github.com/Ivan-Vidal/meal-planner-front"
  },
  {
    id: 8,
    title: "Angular JWT Auth",
    description: "Uma aplicação de autenticação JWT desenvolvida com Angular e Node.js.",
    technologies: ["Angular", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS", "Jest", "Git", "GitHub", "CI/CD"],
    features: [
      "Login e registro de usuários",
      "Proteção de rotas com JWT",
      "Backend em Node.js com Express para gerenciamento de autenticação",
      "Testes unitários com Jest para garantir a qualidade do código"
    ],
    status: "Manutenção",
    url: "",
    githubLink: "https://github.com/Ivan-Vidal/jwt-angular-front"
  },
  // {
  //   id: 8,
  //   title: "E-commerce Store",
  //   description: "Uma loja de e-commerce completa desenvolvida com ReactJS, Node.js e MongoDB.",
  //   technologies: ["ReactJS", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS", "Jest", "Git", "GitHub", "CI/CD"],
  //   features: [
  //     "Catálogo de produtos com filtros e pesquisa",
  //     "Carrinho de compras e checkout seguro",
  //     "Backend em Node.js com Express para gerenciamento de produtos e pedidos",
  //     "Testes unitários com Jest para garantir a qualidade do código"
  //   ],
  //   status: "Produção",
  //   url: "https://e-commerce-store-ivory.vercel.app/",
  //   githubLink: "https://github.com/Ivan-Vidal/e-commerce-store"
  // },
  {
    id: 9,
    title: "Charts JS",
    description: "Esse projeto tem como objetivo aprimorar meus conhecimentos em Front end com o framework Angular, monstrando as melhores formas de utilizar gráficos na web com o ChartsJS.",
    technologies: ["Angular", "TypeScript", "ChartsJS", "Tailwind CSS", "Jest", "Git", "GitHub", "CI/CD"],
    features: [
      "Gráficos interativos e responsivos",
      "Vários tipos de gráficos (linha, barra, pizza, etc.)",
      "Fácil de integrar em qualquer aplicação web",
      "Testes unitários com Jest para garantir a qualidade do código"
    ],
    status: "Produção",
    url: "https://test-chartsjs-cqiv0k0ud-ivan-vidal.vercel.app/",
    githubLink: "https://github.com/Ivan-Vidal/test-chartsjs"
  },
  {
    id: 10,
    title: "Task Manager",
    description: "Um gerenciador de tarefas simples e eficiente desenvolvido com ReactJS, Node.js e MongoDB.",
    technologies: ["ReactJS", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS", "Jest", "Git", "GitHub", "CI/CD"],
    features: [
      "Interface intuitiva para gerenciamento de tarefas",
      "Banco de dados MongoDB para armazenamento de tarefas",
      "Backend em Node.js com Express para operações CRUD",
      "Testes unitários com Jest para garantir a qualidade do código"
    ],
    status: "Desenvolvimento",
    url: "",
    githubLink: "https://github.com/Ivan-Vidal/task-manager"
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