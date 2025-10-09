import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
            title
            description
            author
            siteUrl
            image
            twitterUsername
            keywords
          }
      }
    }
  `)

    return data.site.siteMetadata
}