/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

exports.onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: "en" })

  // Inject script to set theme before page renders (prevents flash)
  setPreBodyComponents([
    <script
      key="theme-init"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            function getTheme() {
              // Check localStorage first
              const savedTheme = localStorage.getItem('theme');
              if (savedTheme) {
                return savedTheme;
              }
              
              // Fall back to system preference
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              return prefersDark ? 'dark' : 'cupcake';
            }
            
            document.documentElement.setAttribute('data-theme', getTheme());
          })();
        `,
      }}
    />,
  ])
}
