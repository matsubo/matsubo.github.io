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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `ja`],
        defaultLanguage: `en`,
        siteUrl: `https://matsubo.github.io/`,
        redirect: true,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: ".",
          nsSeparator: false,
          returnObjects: true,
          detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupLocalStorage: 'language',
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        sitemap: `https://matsubo.github.io/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => `https://matsubo.github.io`,
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: `monthly`,
            priority: path === "/" ? 0.7 : 0.3,
          }
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
          quality: 75,
          breakpoints: [750, 1080, 1366, 1920],
        },
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
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
