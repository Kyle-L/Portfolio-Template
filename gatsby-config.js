require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const {spaceId, accessToken} = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
      'Contentful spaceId and the access token need to be provided.',
  );
}

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
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/styles/theme`).lightTheme,
        dark: require(`${__dirname}/src/styles/theme`).darkTheme,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
};
