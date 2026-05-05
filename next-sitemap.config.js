/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://matsubo.github.io",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  outDir: "./out",
  exclude: ["/icon.png", "/apple-icon.png", "/favicon.ico", "/manifest.webmanifest"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://matsubo.github.io/sota-peak-finder/sitemap-index.xml",
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
