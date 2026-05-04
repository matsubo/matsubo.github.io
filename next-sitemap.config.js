/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://matsubo.github.io",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: "./out",
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://matsubo.github.io/sotea-peak-finder/sitemap-index.xml",
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "monthly",
      priority: path === "/" ? 0.7 : 0.3,
      lastmod: new Date().toISOString(),
    }
  },
}
