# Portfolio-Template

- [Portfolio-Template](#portfolio-template)
  - [Overview](#overview)
  - [Core Tech Stack](#core-tech-stack)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Useful Commands](#useful-commands)
  - [License](#license)

<a name="overview"/></a>

## Overview

This is the repository for the development of a portfolio website template. This current branch of the repository is for the development of the new version of my website which uses NodeJS, React, Gatsby, and GraphQL. I have also provided information how this new version of my website is built and how you can setup and modify it as you see fit.

<a name="tech"/></a>

## Core Tech Stack

- [ ] [NodeJS](https://nodejs.org/)
- [ ] [React](https://reactjs.org/)
- [ ] [Gatsby](https://www.gatsbyjs.com/)
- [ ] [GraphQL](https://graphql.org/)

<a name="prereq"/></a>

## Prerequisites

- [ ] NodeJS
- [ ] NPM
- [ ] An IDE of your choice ([Visual Studio Code](https://code.visualstudio.com/) recommended)
- [ ] [Contentful](https://www.contentful.com/) account and space.

<a name="setup"/></a>

## Setup

1. Fork the repository or use the `Use Template` button.
   
2. Clone the repository.

```
git clone git@github.com:your-username/Portfolio.git
```

3. Check into the cloned repository.

```
cd Portfolio/
```

4. Install dependencies.

```
npm install
```

5. Setup environmental variables and update contentful space model.

```
npm run setup
```

6. Update `modules.export` in `gatsby-config.js` with your information. So change...
```
module.exports = {
  siteMetadata: {
    siteUrl: '[Insert url here]',
    title: `[Insert title here]`,
    titleSubheading: '[Insert subheading here]',
    description: `[Insert description here]`,
    author: `[Insert author of site here]`,
    lang: 'en',
    locale: 'en_US',
    type: 'website',
    social: {
      facebook: '',
      twitter: '',
      youtube: '',
      instagram: '',
      linkedin: '',
      github: '',
      email: '',
    },
  },
```
to something like...
```
module.exports = {
  siteMetadata: {
    siteUrl: 'https://kylelierer.com',
    title: `My Website`,
    titleSubheading: 'This is the subheading of my website.',
    description: `This is my website!`,
    author: `Kyle Lierer`,
    lang: 'en',
    locale: 'en_US',
    type: 'website',
    social: {
      facebook: 'https://facebook.com/my-profile',
      twitter: 'https://twitter.com/my-profile',
      youtube: 'https://youtube.com/my-profile',
      instagram: 'https://instagram.com/my-profile',
      linkedin: 'https://linkedin.com/my-profile',
      github: 'https://github.com/my-profile',
      email: 'myemail@mail.com',
    },
  },
```

7. (Optional) Update the favicon at `src/assets/images/favicon.png` if you want.

8. (Optional) Update the CSS and styles if you want at in `src/styles`.

9. Finally, run in development mode.

```
npm run dev
```

<a name="useful"/></a>

## Useful Commands

- `npm run start` or `npm run dev`

  - Starts a development server accessible by default at http://localhost:8000. Gatsby will start a hot-reloading development environment.

- `npm run test`

  - Runs all test cases. Currently there are no that have been written yet.

- `npm run build`
  - Builds the app for production to the build folder.
    It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

<a name="license"/></a>

## License

The underlying source code is licensed under an [MIT LICENSE](LICENSE.md)

[![LICENSE](https://img.shields.io/github/license/Kyle-L/Portfolio-Template)](LICENSE.md)

The graphics used are licensed under a [CC BY-NC 4.0 License](https://licensebuttons.net/l/by-nc/4.0/80x15.png).

[![license: CC BY-NC 4.0](https://img.shields.io/badge/license-CC%20BY--NC%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc/4.0/)
