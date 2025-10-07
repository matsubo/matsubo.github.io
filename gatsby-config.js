module.exports = {
  siteMetadata: {
    title: `MATSUBO ON GITHUB`,
    description: `web site of matsubo's public resource. Old archives.`,
    author: `@matsubo`,
    siteUrl: `https://matsubo.github.io/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M2JT5C2T",
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        sitemap: `https://matsubo.github.io/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sitemap`,
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
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `matsubo on github`,
        short_name: `matsubo`,
        start_url: `/`,
        background_color: `#071952`,
        theme_color: `#071952`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
