# Folio 🌹 [![GitHub](https://img.shields.io/github/license/nikhilrstg18/folio?color=blue)](https://github.com/nikhilrstg18/folio/blob/master/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/nikhilrstg18/folio) ![GitHub forks](https://img.shields.io/github/forks/nikhilrstg18/folio)

## A clean, beautiful and responsive one-page portfolio template for developers

<h2 align="center">
  <img src="https://github.com/nikhilrstg18/folio/blob/main/src/images/folio.gif" alt="Folio" width="600px" />
  <br>
</h2>

## Features

🌹 Modern UI Design + Reveal Animations\
🌹 One Page Layout built with React\
🌹 Styled with Bootstrap v4.3 + Custom SCSS\
🌹 Fully Responsive\
🌹 Configurable color scheme\
🌹 Image optimization with Gatsby\
🌹 Easy site customization\
🌹 Well organized documentation

To view a demo example, **[click here](https://gatsby-simplefolio.netlify.com/)**\
To view a live example, **[click here](https://nikhilrstg18.netlify.app/)**

---

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.\
Also you need to have installed [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/)

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
gatsby-cli@2.8.22 or higher
```

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

```
yarn@v1.21.1 or higher
```

---

## How To Use 🔧

From your command line, first clone Folio:

```bash
# Clone this repository
$ git clone https://github.com/nikhilrstg18/folio

# Go into the repository
$ cd folio

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm run develop
```

Using Yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn develop
```

**NOTE**:
If your run into issues installing the dependencies with NPM, use this command:

```bash
# Install dependencies with all permissions
$ sudo npm install --unsafe-perm=true --allow-root
```

Once your server has started, go to this url `http://localhost:8000/` and you will see the website running on a Development Server:

<h2 align="center">
  <img src="https://github.com/nikhilrstg18/folio/blob/main/src/images/folio.webp" alt="Folio" width="100%">
</h2>

---

## Instructions:👇

### Step 1 - STRUCTURE

Go to `/src/mock/data.js` and fill your information, they are 8 objects:

### Head Section

```javascript
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website or SEO keywords
};
```

### Hero Section

```javascript
export const heroData = {
  title: '', // Hello, my name is
  name: '', // John
  subtitle: '', // I'm the Unknown Developer.
  cta: '', // Know more
};
```

### About Section

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

```javascript
export const aboutData = {
  title: '', // if no title, title and subTitle will not be rendered
  subTitle: '', // if no subTitle, title and subTitle will not be rendered
  img: 'profile.webp', // aspect ratio square
  positions: [
    {
      id: nanoid(),
      name: '',
      positionLink: '',
      positionAbout: '', // if no positionAbout, positionAbout will not be rendered
    },
    ...
  ],
  city: '', // Delhi
  cityAround: '', // NCR, India
  quickSkills: {
    para: ``// one liner,
    skills: [
      {
        id: nanoid(),
        group: '', // Back-end | Font-End | Storage | Cloud
        groupAbout: '',
      },
      ...
    ],
  },
  currentOrg: {
    name: '',
    link: '',
    paraOne: ``, // if no paraOne, paraOne will not be rendered
    paraTwo: ``, // if no paraTwo, paraTwo will not be rendered
  },
  cta: 'Skills',
};
```

### Skills Section

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

```javascript
export const skillsData = [
  {
    id: nanoid(),
    name: '', // skill group name
    items: [
      {
        altName: '', // skill
        iconClass: '', //is no iconClass, then logo will be rendered
        logo: 'html-css.webp',
        percent: '60',
        color: '', //theme color
        itemId: nanoid(),
      },
      ...
    ],
  },
  ...
];
```

### Work Experience & Education Section

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

```javascript
export const educationData = [
  {
    id: nanoid(),
    startDate: '', //start year  of latest experience
    endDate: '', //end year  of latest experience
    title: '', // role / position
    org: '', // organization name with brief address
    titleDesc: '', // one line description of role/position
    icon: '', // work | education
    bgColor: '',  // bgcolor for work | education
  },
  ...
];
```

### Projects Section

**_Important Note_**: All the images must live inside the `src/images/` folder in order for Gatsby to show the images correctly.

Put as many projects object you want inside the `array`.

```javascript
export const projectsData = [
  {
    id: nanoid(),
    imgs: [
      {
        imgId: nanoid(),
        img: 'project.webp', // recommended formats webp | use jpg for app to run in safari
        caption: '', // if no caption, the caption will not show up
        interval: 1000, // interval for bootstrap carousal
      },
      ...
    ],
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/nikhilrstg18/folio', // if no repo, the button will not show up
  },
  ...
];
```

### Contact Section

```javascript
export const contactData = {
  cta: '', // call to action text for the contact section
  btn: '', // text inside the button
  email: '',
};
```

### Footer Section

You can remove or add as many you social-media icons you want.\
Just put an object with the corresponding values inside the networks `array` or remove it from there.

```javascript
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '', // your twitter url
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '', // your codepen url
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '', // your linkedin url
    },
    {
      id: nanoid(),
      name: 'github',
      url: '', // your github url
    },
  ],
};
```

### Required - Disable GitHub buttons

Set `isEnabled` to `false` once you finish setup your portfolio.\
By setting to `false` it will hide the GitHub stars/fork buttons

```javascript
export const githubButtons = {
  isEnabled: true, // true is the default value
};
```

### Step 2 - STYLES

Change the color theme of the website ( choose 2 colors to create a gradient ):

Go to `src/styles/abstracts/_variables.scss` and only change the values on this classes `$main-color` and `$secondary-color` to your prefered HEX color

```scss
// Default values
$main-color: #02aab0;
$secondary-color: #00cdac;
```

**_Note_**: I highly recommend to checkout gradients variations on [UI Gradient](https://uigradients.com/#BrightVault)

---

## PWA capabilities 👇

change PWA capabilities in gatsby-config.js

```javascript
module.exports = {
  plugins: [
    ...{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: ``, // name of your PWA
        short_name: `folio`, // short name of your PWA
        start_url: `/`,
        background_color: `#fafafa`, // splash screen background color of your PWA
        theme_color: `#7F00FF`, // theme color of your PWA
        display: `fullscreen`, // fullscreen | standalone | browser | minimla-ui
        icon: 'src/images/favicon.png',
        description: 'responsive one-page portfolio',
      },
    },
  ],
};
```

## Deployment 📦

Once you have done with your setup. You need to put your website online!

I highly recommend to use [Netlify](https://netlify.com) to achieve this on the EASIEST WAY

## Technologies used 🛠️

- [Gatsby](https://www.gatsbyjs.org/) - Static Site Generator
- [GraphQL](https://graphql.org/) - Query language for APIs
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Front-End UI library
- [Sass](https://sass-lang.com/documentation) - CSS extension language

## Authors

- **Nikhil Rustagi** - [https://github.com/nikhilrstg18](https://github.com/nikhilrstg18)

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/d79e0177-7801-46a5-bfe6-ebb366b86f63/deploy-status)](https://app.netlify.com/sites/nikhilrustagi/deploys)

## Acknowledgments 🎁

I was motivated to create this project because I wanted to contribute on something useful for the dev community, thanks to [ZTM Community](https://github.com/zero-to-mastery) and [Andrei](https://github.com/aneagoie)
