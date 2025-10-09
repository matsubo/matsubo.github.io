import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const StructuredData = () => {
  const { title, description, siteUrl, author } = useSiteMetadata()

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yuki Matsukura",
    url: siteUrl,
    image: "https://github.com/matsubo.png",
    jobTitle: "CTO & Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Minedia Inc.",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Keio University",
        department: "Shonan Fujisawa Campus",
      },
      {
        "@type": "EducationalOrganization",
        name: "UCLA Extension",
      },
    ],
    sameAs: [
      "https://github.com/matsubo",
      "https://x.com/matsubokkuri",
      "https://www.linkedin.com/in/yukimatsukura/",
      "https://zenn.dev/matsubokkuri",
      "https://blog.teraren.com/",
    ],
    knowsAbout: [
      "Software Engineering",
      "System Architecture",
      "Ruby on Rails",
      "React",
      "Cloud Infrastructure",
      "Team Leadership",
      "Startup Technology",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    description: description,
    url: siteUrl,
    author: {
      "@type": "Person",
      name: "Yuki Matsukura",
    },
  }

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: title,
    description: description,
    url: siteUrl,
    mainEntity: {
      "@type": "Person",
      name: "Yuki Matsukura",
      jobTitle: "CTO & Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Minedia Inc.",
      },
    },
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(profilePageSchema)}
      </script>
    </>
  )
}

export default StructuredData
