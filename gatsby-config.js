module.exports = {
  siteMetadata: {
    title: `Go Digital Design`,
    description: `Welcome to Go Digital Design website! We're a talented group of digital enthusiasts, and we'll help you boost your sales and reputation by creating powerful marketing campaigns, design and create engaging content for your social media presence, and build a better fruitful future for your company!`,
    author: `@iamshour`,
    siteUrl: `https://godigitaldesign.com/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-loadable-components-ssr`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `go-digital-design`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, 
      },
    }
  ],
}
