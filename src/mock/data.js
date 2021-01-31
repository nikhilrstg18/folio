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
    img: 'project.jpg',
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

export const skillsData = [
  {
    id: nanoid(),
    name: 'Language',
    items: [
      {
        altName: 'JavaScript',
        iconClass: 'fab fa-js',
        percent: '75',
        color: '#ffc107',
        itemId: nanoid(),
      },
      {
        altName: 'C#',
        iconClass: '',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png',
        percent: '60',
        color: '#0b9e0b',
        itemId: nanoid(),
      },
      {
        altName: 'TypeScript',
        iconClass: '',
        logo: 'https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png',
        percent: '60',
        color: '#2f74c0',
        itemId: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Framework / Runtime',
    items: [
      {
        altName: 'Angular',
        iconClass: 'fab fa-angular',
        percent: '75',
        color: '#df0030',
        itemId: nanoid(),
      },
      {
        altName: 'ASP.NET Core',
        iconClass: '',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png',
        percent: '60',
        color: '#7e1b96',
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
        altName: 'Cypress',
        iconClass: '',
        logo: 'https://pbs.twimg.com/profile_images/1044345247440896001/pXI1GDHW_400x400.jpg',
        percent: '50',
        color: '#47474a',
        itemId: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Library / APIs',
    items: [
      {
        altName: 'NgRx',
        iconClass: '',
        logo: 'https://ngrx.io/assets/images/badge.svg',
        percent: '60',
        color: '#ba2bd2',
        itemId: nanoid(),
      },
      {
        altName: 'ReactJS',
        iconClass: 'fab fa-react',
        percent: '60',
        color: '#61dafb',
        itemId: nanoid(),
      },
      {
        altName: 'React Redux',
        iconClass: '',
        logo: 'https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png',
        percent: '60',
        color: '#61dafb',
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
        percent: '50',
        color: '#ffc107',
        itemId: nanoid(),
      },
      {
        altName: 'Azure',
        iconClass: '',
        logo: 'https://dzone.com/storage/temp/12165862-azurelogo-1.png',
        percent: '30',
        color: '#ffc107',
        itemId: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Storage',
    items: [
      {
        altName: 'MS SQL Server',
        iconClass: '',
        logo: 'https://img.icons8.com/color/452/microsoft-sql-server.png',
        percent: '45',
        color: '#facc41',
        itemId: nanoid(),
      },
      {
        altName: 'PostgreSQL',
        iconClass: '',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png',
        percent: '45',
        color: '#facc41',
        itemId: nanoid(),
      },
    ],
  },
  {
    id: nanoid(),
    name: 'Platform / Tools',
    items: [
      {
        altName: 'Windows',
        iconClass: 'fab fa-windows',
        percent: '60',
        color: '#61dafb',
        itemId: nanoid(),
      },
      {
        altName: 'Visual Studio 2019',
        iconClass: '',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1200px-Visual_Studio_Icon_2019.svg.png',
        percent: '60',
        color: '#61dafb',
        itemId: nanoid(),
      },
      {
        altName: 'Visual Studio Code',
        iconClass: '',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png',
        percent: '60',
        color: '#61dafb',
        itemId: nanoid(),
      },
    ],
  },
];
