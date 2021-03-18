module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nikhil Rustagi`,
        short_name: `Folio`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#7F00FF`,
        display: `fullscreen`,
        icon: 'src/images/nlogo.png',
        description: 'responsive one-page portfolio',
      },
    },
  ],
};
