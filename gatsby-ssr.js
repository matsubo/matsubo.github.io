/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: "en" })

  // Inject script to set theme before page renders (prevents flash)
  setPreBodyComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              // Check localStorage first
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light' || savedTheme === 'cupcake')) {
                document.documentElement.setAttribute('data-theme', savedTheme);
                return;
              }

              // Fall back to system preference
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const systemTheme = prefersDark ? 'dark' : 'cupcake';
              document.documentElement.setAttribute('data-theme', systemTheme);
            } catch (e) {
              // Fallback to light theme if any error occurs
              document.documentElement.setAttribute('data-theme', 'cupcake');
            }
          })();
        `,
      }}
    />,
  ])
}

// Match wrapPageElement in gatsby-browser.js
exports.wrapPageElement = ({ element }) => {
  return element
}
