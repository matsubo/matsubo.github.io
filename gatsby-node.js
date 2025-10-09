/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Delete Japanese language pages to prevent /ja/ paths
  if (page.context.language === 'ja') {
    deletePage(page)
    return
  }

  // Ensure all pages have access to both language resources
  if (page.context.language === 'en') {
    deletePage(page)
    createPage({
      ...page,
      context: {
        ...page.context,
        // Make both languages available in the page context
        languages: ['en', 'ja']
      }
    })
  }
}
