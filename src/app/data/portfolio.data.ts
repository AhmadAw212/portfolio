import { PortfolioData } from '../models/portfolio.model';

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: 'Ahmad Awada',
    title: 'Front-End Developer',
    specialization: 'Angular / TypeScript Specialist',
    introduction:
      'I build scalable frontend applications and enterprise Angular systems, with a focus on maintainable architecture, complex business workflows, and dependable user experiences.',
    about: [
      'I am a Front-End Developer focused on Angular, TypeScript, and enterprise web application development. I turn complex, API-driven business requirements into clear, maintainable user experiences.',
      'My work includes standalone Angular architecture, micro frontends, shared libraries, authentication, multilingual and RTL interfaces, and complex forms and dashboards. I also bring practical experience maintaining React Native applications and collaborating across Spring Boot and PostgreSQL-backed systems.',
    ],
    availability: { enabled: true, label: 'Available for new opportunities' },
  },
  navigation: [
    { label: 'Home', sectionId: 'home' },
    { label: 'About', sectionId: 'about' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Work', sectionId: 'projects' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Contact', sectionId: 'contact' },
  ],
  skills: [
    {
      title: 'Frontend',
      description: 'Production interfaces built for clarity, resilience, and scale.',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'RxJS',
        'HTML5',
        'CSS3',
        'SCSS',
        'Tailwind CSS',
        'PrimeNG',
        'PrimeFlex',
        'Responsive Design',
        'Reactive Forms',
      ],
    },
    {
      title: 'Architecture',
      description: 'Maintainable systems that support evolving teams and workflows.',
      skills: [
        'Standalone Components',
        'Micro Frontends',
        'Native Federation',
        'Reusable Components',
        'Shared Libraries',
        'State Management',
        'API-driven Applications',
      ],
    },
    {
      title: 'Mobile',
      description: 'Cross-platform product maintenance and delivery workflows.',
      skills: ['React Native', 'TypeScript', 'Expo', 'Android Builds', 'iOS Publishing Workflow'],
    },
    {
      title: 'Backend & APIs',
      description: 'End-to-end understanding of application data and services.',
      skills: ['Spring Boot', 'REST APIs', 'PostgreSQL'],
    },
    {
      title: 'DevOps & Tools',
      description: 'Practical production delivery and infrastructure experience.',
      skills: ['Git', 'Docker', 'Nginx', 'Netlify'],
    },
  ],
  experience: [
    {
      role: 'Front-End Developer',
      company: 'Claims Express',
      location: 'Lebanon · On-site · Full-time',
      startDate: 'Jan 2023',
      endDate: 'Present',
      description:
        'Engineering enterprise Angular applications that support complex operational workflows and long-lived product requirements.',
      responsibilities: [
        'Designed maintainable features with standalone components, reusable UI patterns, shared Angular libraries, RxJS, and Reactive Forms.',
        'Delivered micro frontend capabilities with Angular Architects Native Federation across independently evolving application areas.',
        'Implemented REST-integrated dashboards, data tables, filtering, dialog workflows, file uploads, and Google Maps experiences.',
        'Built authentication and authorization flows using JWT, refresh tokens, HTTP interceptors, session timeout handling, and role-based permissions.',
        'Supported multilingual and RTL interfaces while improving performance, resolving production defects, and maintaining Docker and Nginx delivery environments.',
      ],
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Native Federation',
        'REST APIs',
        'Docker',
        'Nginx',
      ],
    },
    {
      role: 'Mobile Application Developer',
      company: 'Claims Express',
      location: 'Lebanon · On-site · Full-time',
      startDate: 'Jan 2023',
      endDate: 'Present',
      description:
        'Maintained existing React Native applications and supported reliable mobile release workflows.',
      responsibilities: [
        'Implemented application changes and resolved bugs in established React Native codebases.',
        'Built Android application packages and worked with the iOS App Store publishing workflow.',
        'Maintained TypeScript and Expo-based features while preserving production stability.',
      ],
      technologies: ['React Native', 'TypeScript', 'Expo', 'Android', 'iOS'],
    },
  ],
  projects: [
    {
      title: 'TravelShield Insurance Platform',
      type: 'Frontend architecture & application development',
      description:
        'A feature-rich insurance operations platform for managing travel and ticket-cancellation products, quotes, policies, claims, companies, users, and reporting workflows.',
      technologies: [
        'Angular 22',
        'TypeScript',
        'Signals',
        'RxJS',
        'Reactive Forms',
        'Angular CDK',
        'Tailwind CSS',
        'REST APIs',
      ],
      responsibilities: [
        'Architected a feature-first standalone Angular application with lazy-loaded domains, typed data-access layers, and reusable UI and form primitives.',
        'Built multi-step quote, product, policy, and claim workflows with reactive forms, signal-based state, validation, pricing logic, and document generation.',
        'Implemented authentication, route guards, role-aware administration, responsive navigation, dashboards, search, notifications, and light/dark themes.',
      ],
      highlights: [
        'Travel and ticket-cancellation insurance domains',
        'Reusable design system and complex form controls',
        'PDF and Excel document generation',
        'Responsive, accessible enterprise interface',
      ],
      githubUrl: null,
      liveUrl: null,
      image: null,
      featured: true,
    },
    {
      title: 'Enterprise Insurance & Claims Platform',
      type: 'Enterprise application experience',
      description:
        'Contributed to a confidential, large-scale insurance platform spanning claims, assessments, operational dashboards, and partner workflows.',
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Reactive Forms',
        'Native Federation',
        'REST APIs',
      ],
      responsibilities: [
        'Built micro frontend modules and shared UI architecture.',
        'Implemented API-driven forms, advanced filters, complex tables, dialogs, and permission-aware workflows.',
        'Delivered multilingual and RTL experiences for varied operational roles.',
      ],
      highlights: [
        'Claims and assessment workflows',
        'Call center and repair shop operations',
        'Recovery, document reception, and survey flows',
        'Damage assessment and cost estimation interfaces',
      ],
      githubUrl: null,
      liveUrl: null,
      image: null,
      featured: true,
    },
    {
      title: 'Political News Platform',
      type: 'Full-stack freelance project',
      description:
        'A full-stack publishing platform for browsing political news and securely managing editorial content.',
      technologies: ['Angular', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
      responsibilities: [
        'Developed the Angular frontend and integrated Spring Boot REST services.',
        'Implemented authorized article creation, editing, and deletion with role-based access.',
        'Built newsletter subscriptions and publish-time email notification workflows.',
      ],
      highlights: [
        'Public news browsing',
        'Role-based article management',
        'Newsletter subscriptions',
        'New-article email notifications',
      ],
      githubUrl: null,
      liveUrl: null,
      image: null,
      featured: true,
    },
    {
      title: 'Med Vending Machine Platform',
      type: 'Production application',
      market: 'UAE',
      description:
        'Frontend development for a production vending platform serving domain-specific business workflows in the UAE market.',
      technologies: ['Angular', 'TypeScript', 'REST APIs'],
      responsibilities: [
        'Implemented responsive application interfaces and business workflows.',
        'Integrated REST APIs and translated product requirements into maintainable UI features.',
        'Supported ongoing maintenance, bug fixes, and production application improvements.',
      ],
      highlights: ['Business workflow implementation', 'API-driven UI', 'Production maintenance'],
      githubUrl: null,
      liveUrl: null,
      image: null,
      featured: false,
    },
  ],
  technicalHighlights: [
    {
      title: 'Modular frontend architecture',
      description:
        'Independent Angular domains connected through Native Federation, shared libraries, and deliberate component boundaries.',
      technologies: ['Micro Frontends', 'Native Federation', 'Shared Libraries'],
    },
    {
      title: 'Complex application workflows',
      description:
        'Reliable forms and interfaces for multi-step, permission-aware business processes.',
      technologies: ['Reactive Forms', 'RxJS', 'Enterprise UI'],
    },
    {
      title: 'Secure API integration',
      description:
        'Authentication lifecycle design covering access tokens, refresh flows, interceptors, sessions, and authorization.',
      technologies: ['REST APIs', 'JWT', 'Role-based Access'],
    },
    {
      title: 'Inclusive product delivery',
      description:
        'Responsive, multilingual interfaces with internationalization, RTL support, and mobile application experience.',
      technologies: ['i18n', 'RTL', 'React Native'],
    },
  ],
  resumeUrl: '/assets/resume/Ahmad-Awada-Resume.pdf',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/ahmad-awada-6252431a1',
    github: 'https://github.com/AhmadAw212',
    email: 'awadaahmad791@gmail.com',
  },
  siteUrl: '', // TODO: Add the production origin, e.g. https://example.com, before publishing.
};
