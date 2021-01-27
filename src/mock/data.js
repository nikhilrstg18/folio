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
  subtitle: 'Solutions Architect | Web Developer | Qaulity Analyst | Blogger',
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
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
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
