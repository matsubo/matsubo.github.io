import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({ title, description, pathname, image, children }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        siteUrl,
        image: defaultImage,
        twitterUsername,
        author,
        keywords,
    } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
        image: `${siteUrl}${image || defaultImage}`,
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={seo.url} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:site_name" content={defaultTitle} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:site" content={twitterUsername} />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />

            {/* Additional SEO tags */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <link rel="canonical" href={seo.url} />

            {/* Font preconnect for system fonts optimization */}
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* DNS prefetch for external resources */}
            <link rel="dns-prefetch" href="https://github.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

            {children}
        </>
    )
}