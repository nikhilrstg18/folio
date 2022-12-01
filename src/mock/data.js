import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nikhil Rustagi', // e.g: 'Name • Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `Welcome to Nikhil Rustagi's one page portfolio`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nikhil Rustagi',
  subtitle: 'Solutions Architect • Web Developer • Quality Analyst • Blogger',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  title: 'About Me',
  subTitle: 'Recreating best of myself',
  img: 'profile.png',
  positions: [
    {
      id: nanoid(),
      name: 'Web Developer',
      positionLink: 'https://dotnet.microsoft.com/apps/aspnet',
      positionAbout: 'Web Apps • APIs • µ-services',
    },
    {
      id: nanoid(),
      name: 'Certified AWS Solutions Architect - Associate®',
      positionLink:
        'https://www.youracclaim.com/badges/8987c8e4-cd70-48f2-9017-9af4188c841d?source=linked_in_profile',
      positionAbout: '',
    },
    {
      id: nanoid(),
      name: 'Certified Scrum Master®',
      positionLink: 'https://bcert.me/szliglrhu',
      positionAbout: '',
    },
  ],
  city: 'Delhi',
  cityAround: 'NCR, India',
  quickSkills: {
    para: `I'm passionate about web development and spend workdays with my hands in below areas of web development`,
    skills: [
      {
        id: nanoid(),
        group: 'Back-end',
        groupAbout: 'C# • Asp.Net • NodeJS',
      },
      {
        id: nanoid(),
        group: 'Front-end ',
        groupAbout: 'Angular • React',
      },
      {
        id: nanoid(),
        group: 'Cloud',
        groupAbout: 'AWS • Azure',
      },
    ],
  },
  currentOrg: {
    name: 'Dell Technologies',
    link: 'https://www.dell.com/',
    paraOne: `I'm not looking for any full-time position as of now`,
    paraTwo: `I'm always open to ideas and projects that excite me`,
  },
  cta: 'Skills',
};

// SKILLS DATA
export const skillsData = [
  {
    id: nanoid(),
    name: 'Frontend',
    items: [
      {
        altName: 'HTML | CSS | JS',
        iconClass: '',
        logo: 'htmlcssjs.png',
        percent: '75',
        color: '#ffc107',
        itemId: nanoid(),
      },
      {
        altName: 'Angular | Typescript | NgRx',
        iconClass: '',
        logo: 'ngtsngrx.png',
        percent: '75',
        color: '#df0030',
        itemId: nanoid(),
      },
      {
        altName: 'React',
        iconClass: 'fab fa-react',
        percent: '60',
        color: '#61dafb',
        itemId: nanoid(),
      },
      {
        altName: 'Clarity Design System',
        iconClass: '',
        logo: 'claritydesign-logo.png',
        percent: '50',
        color: '#61dafb',
        itemId: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Backend',
    items: [
      {
        altName: 'C#',
        iconClass: '',
        logo: 'csharp.png',
        percent: '70',
        color: '#0b9e0b',
        itemId: nanoid(),
      },
      {
        altName: 'ASP.NET Core',
        iconClass: '',
        logo: `net-core.png`,
        percent: '60',
        color: '#47474a',
        itemId: nanoid(),
      },
      {
        altName: 'NodeJS',
        iconClass: 'fab fa-node-js',
        percent: '30',
        color: '#83cd29',
        itemId: nanoid(),
      },
      {
        altName: 'GraphQL',
        iconClass: '',
        logo: 'graph-ql.png',
        percent: '30',
        color: '#83cd29',
        itemId: nanoid(),
      },
      {
        altName: 'Python',
        iconClass: '',
        logo: 'python.png',
        percent: '30',
        color: '#2f74c0',
        itemId: nanoid(),
      },
      {
        altName: 'Java',
        iconClass: '',
        logo: 'java.png',
        percent: '50',
        color: '#2f74c0',
        itemId: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Database',
    items: [
      {
        altName: 'MS SQL Server',
        iconClass: '',
        logo: 'ssms.png',
        percent: '55',
        color: '#facc41',
        itemId: nanoid(),
      },
      {
        altName: 'PostgreSQL',
        iconClass: '',
        logo: 'postgresql.png',
        percent: '45',
        color: '#facc41',
        itemId: nanoid(),
      },
      {
        altName: 'MongoDb',
        iconClass: '',
        logo: 'mongo-db.png',
        percent: '30',
        color: '#facc41',
        itemId: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Automation / Testing',
    items: [
      {
        altName: 'Cypress',
        iconClass: '',
        logo: 'cypress.png',
        percent: '50',
        color: '#47474a',
        itemId: nanoid(),
      },
      {
        altName: 'Selenium',
        iconClass: '',
        logo: 'selenium.png',
        percent: '50',
        color: '#47474a',
        itemId: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Cloud',
    items: [
      {
        altName: 'AWS',
        iconClass: 'fab fa-aws',
        percent: '55',
        color: '#ffc107',
        itemId: nanoid(),
      },
      {
        altName: 'Pivotal CF',
        iconClass: '',
        logo: 'pcf.png',
        percent: '40',
        color: '#ffc107',
        itemId: nanoid(),
      },
      // {
      //   altName: 'GCP',
      //   iconClass: '',
      //   logo: 'gcp.png',
      //   percent: '30',
      //   color: '#ffc107',
      //   itemId: nanoid(),
      // },
    ],
  },

  {
    id: nanoid(),
    name: 'Tools',
    items: [
      {
        altName: 'Visual Studio 2022',
        iconClass: '',
        logo: 'visual-studio.png',
        percent: '60',
        color: '#61dafb',
        itemId: nanoid(),
      },
      {
        altName: 'Visual Studio Code',
        iconClass: '',
        logo: 'visual-studio-code.png',
        percent: '75',
        color: '#61dafb',
        itemId: nanoid(),
      },
      {
        altName: 'Docker',
        iconClass: '',
        logo: 'docker.png',
        percent: '45',
        color: '#61dafb',
        itemId: nanoid(),
      },
    ],
  },
];

// EDUCATION DATA
export const educationData = [
  {
    id: nanoid(),
    startDate: '2021',
    endDate: 'present',
    title: 'Sr. Software Engineer - Dev',
    org: 'Dell Technologies, BLR',
    titleDesc:
      'Architecting Microservices & UI • Preformance & Security • Cloud Solutions with PCF',
    icon: 'work',
    bgColor: '#E100FF',
  },
  {
    id: nanoid(),
    startDate: '2018',
    endDate: '2021',
    title: 'Software Engineer - Dev',
    org: 'Cyber Group India (P) Ltd, Noida, UP',
    titleDesc:
      'Web App Development • Creation of new features • Proactive in agile team events • e2e ownership for epics',
    icon: 'work',
    bgColor: '#E100FF',
  },
  {
    id: nanoid(),
    startDate: '2016',
    endDate: '2018',
    title: 'Associate Software Engineer - QA',
    org: 'Cyber Group India (P) Ltd, Noida, UP',
    titleDesc:
      'Web App Support • Test-Plan & Test-Case Design • Designing and maintaining automation framework • Reporting',
    icon: 'work',
    bgColor: '#E100FF',
  },
  {
    id: nanoid(),
    startDate: '2012',
    endDate: '2016',
    title: 'B.Tech in ECE • AKTU',
    org: 'HRIT Group of Institution, Ghaziabad, U.P.',
    titleDesc: 'Aggregate Score - 71.4% • I-division',
    icon: 'education',
    bgColor: '#7F00FF',
  },
  {
    id: nanoid(),
    startDate: '2009',
    endDate: '2011',
    title: 'A.I.S.S.C.E. • CBSE',
    org: 'Nutan Vidya Mandir Sr. Sec. School, Delhi',
    titleDesc: 'Aggregate Score - 73%',
    icon: 'education',
    bgColor: '#7F00FF',
  },
  {
    id: nanoid(),
    startDate: '2008',
    endDate: '2009',
    title: 'A.I.S.C.E. • CBSE',
    org: 'Nutan Vidya Mandir Sr. Sec. School, Delhi',
    titleDesc: 'Aggregate Score - 86%',
    icon: 'education',
    bgColor: '#7F00FF',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    imgs: [
      {
        imgId: nanoid(),
        img: 'wisdomSnapshot.png',
        caption: '',
        interval: 2500,
      },
      {
        imgId: nanoid(),
        img: 'wisdomGridFilters.png',
        caption: '',
        interval: 2500,
      },
      {
        imgId: nanoid(),
        img: 'wisdomGrid.png',
        caption: '',
        interval: 2500,
      },
      {
        imgId: nanoid(),
        img: 'wisdomSummary.png',
        caption: '',
        interval: 2500,
      },
    ],
    title: 'PC Wisdom',
    info: 'Angular • Clarity Design System • Sass',
    info2: `PC Wisdom, a demonstration of large data drill-down feature from Snapshot -> server driven Grid -> Summary of the business subject (eg. PC).`,
    url: 'https://nikhilrstg18.github.io/insights/',
    repo: 'https://github.com/nikhilrstg18/insights', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    imgs: [
      {
        imgId: nanoid(),
        img: 'folio1.png',
        caption: '',
        interval: 2000,
      },
      {
        imgId: nanoid(),
        img: 'folio2.png',
        caption: '',
        interval: 2000,
      },
      {
        imgId: nanoid(),
        img: 'folio3.png',
        caption: '',
        interval: 2000,
      },
      {
        imgId: nanoid(),
        img: 'folio4.png',
        caption: '',
        interval: 2000,
      },
      {
        imgId: nanoid(),
        img: 'folio5.png',
        caption: '',
        interval: 2000,
      },
      {
        imgId: nanoid(),
        img: 'folio6.png',
        caption: '',
        interval: 2000,
      },
    ],
    title: 'Folio',
    info: 'React • Gatsby • GraphQL • Bootstrap 4 • Sass • Fontawesome',
    info2:
      'A clean, beautiful and responsive portfolio template for developers. Completely content driven and configurable makes it easy to spin up your portfolio website within 30 minutes',
    url: 'https://nikhilrustagi.netlify.app',
    repo: 'https://github.com/nikhilrstg18/folio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    imgs: [
      {
        imgId: nanoid(),
        img: 'project.png',
        caption: 'coming soon...',
        interval: 1000,
      },
      {
        imgId: nanoid(),
        img: 'project.png',
        caption: 'coming soon...',
        interval: 1000,
      },
      {
        imgId: nanoid(),
        img: 'project.png',
        caption: 'coming soon...',
        interval: 1000,
      },
    ],
    title: 'Boutique Central',
    info: 'Angular • Material UI',
    info2: 'coming soon...',
    url: 'https://github.io/nikhilrstg18/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nikhilrstg18@gmail.com',
};

// FOOTER DATA
export const footerData = {
  gitHub: 'https://github.com/nikhilrstg18',
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/rustagi_nikhil',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nikhil-rustagi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nikhilrstg18',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
