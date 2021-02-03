import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nikhil Rustagi', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio folio software engineer react', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nikhil Rustagi',
  subtitle: 'Solutions Architect | Web Developer | Quality Analyst | Blogger',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.webp',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.webp',
    title: 'Insights',
    info: 'Angular | Clarity Fx',
    info2: 'comming soon...',
    url: 'https://github.io/nikhilrstg18/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'atom',
    info: 'C# | Selenium | API / UI Automation Fx',
    info2: 'comming soon...',
    url: 'https://github.io/nikhilrstg18/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'oShop',
    info: 'Angular | Firebase',
    info2: 'comming soon...',
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

export const educationData = [
  {
    id: nanoid(),
    title: '2008 - 2009',
    cardTitle: 'A.I.S.C.E. | CBSE',
    cardSubtitle: 'Nutan Vidya Mandir Sr. Sec. School, Delhi',
    cardDetailedText: ['Aggregate Scored : 86%'],
  },
  {
    id: nanoid(),
    title: '2009 - 2011',
    cardTitle: 'A.I.S.S.C.E. | CBSE',
    cardSubtitle: 'Nutan Vidya Mandir Sr. Sec. School, Delhi',
    cardDetailedText: ['Aggregate Scored : 73%'],
  },
  {
    id: nanoid(),
    title: '2012 - 2016',
    cardTitle: 'B.Tech in ECE | AKTU ',
    cardSubtitle: 'HRIT Group of Institutions, Ghaziabad, U.P.',
    cardDetailedText: ['Aggregate Scored : 71.4%, 1st Division'],
  },
];

export const skillsData = [
  {
    id: nanoid(),
    name: 'UI',
    items: [
      {
        altName: 'HTML/CSS',
        iconClass: '',
        logo: 'html-css.webp',
        percent: '60',
        color: '#ffc107',
        itemId: nanoid(),
      },
      {
        altName: 'JavaScript/TypeScript',
        iconClass: '',
        logo: 'js-ts.webp',
        percent: '70',
        color: '#ffc107',
        itemId: nanoid(),
      },
      {
        altName: 'Angular',
        iconClass: 'fab fa-angular',
        percent: '75',
        color: '#df0030',
        itemId: nanoid(),
      },
      {
        altName: 'NgRx',
        iconClass: '',
        logo: 'ngrx.webp',
        percent: '50',
        color: '#ba2bd2',
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
        altName: 'RxJS',
        iconClass: '',
        logo: 'rxjs.webp',
        percent: '50',
        color: '#61dafb',
        itemId: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Server',
    items: [
      {
        altName: 'C#',
        iconClass: '',
        logo: 'csharp.webp',
        percent: '70',
        color: '#0b9e0b',
        itemId: nanoid(),
      },
      {
        altName: 'ASP.NET Core',
        iconClass: '',
        logo: `net-core.webp`,
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
        logo: 'graph-ql.webp',
        percent: '30',
        color: '#83cd29',
        itemId: nanoid(),
      },
      {
        altName: 'Python',
        iconClass: '',
        logo: 'python.webp',
        percent: '30',
        color: '#2f74c0',
        itemId: nanoid(),
      },
      {
        altName: 'Java',
        iconClass: '',
        logo: 'java.webp',
        percent: '50',
        color: '#2f74c0',
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
        altName: 'Azure',
        iconClass: '',
        logo: 'azure.webp',
        percent: '40',
        color: '#ffc107',
        itemId: nanoid(),
      },
      {
        altName: 'GCP',
        iconClass: '',
        logo: 'gcp.webp',
        percent: '30',
        color: '#ffc107',
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
        logo: 'cypress.webp',
        percent: '50',
        color: '#47474a',
        itemId: nanoid(),
      },
      {
        altName: 'Selenium',
        iconClass: '',
        logo: 'selenium.webp',
        percent: '50',
        color: '#47474a',
        itemId: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Storage',
    items: [
      {
        altName: 'MS SQLServer',
        iconClass: '',
        logo: 'ssms.webp',
        percent: '55',
        color: '#facc41',
        itemId: nanoid(),
      },
      {
        altName: 'PostgreSQL',
        iconClass: '',
        logo: 'postgresql.webp',
        percent: '45',
        color: '#facc41',
        itemId: nanoid(),
      },
      {
        altName: 'MongoDb',
        iconClass: '',
        logo: 'mongo-db.webp',
        percent: '30',
        color: '#facc41',
        itemId: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Tools',
    items: [
      {
        altName: 'Visual Studio 2019',
        iconClass: '',
        logo: 'visual-studio.webp',
        percent: '60',
        color: '#61dafb',
        itemId: nanoid(),
      },
      {
        altName: 'Visual Studio Code',
        iconClass: '',
        logo: 'visual-studio-code.webp',
        percent: '75',
        color: '#61dafb',
        itemId: nanoid(),
      },
      {
        altName: 'Dokcer',
        iconClass: '',
        logo: 'docker.webp',
        percent: '45',
        color: '#61dafb',
        itemId: nanoid(),
      },
    ],
  },
];
