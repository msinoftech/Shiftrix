import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import BlogClient from "@/app/blog/BlogClient";
import { contactInfo } from "@/lib/config";
const { logo } = contactInfo;

// Static metadata (server-only)
export const metadata: Metadata = {
  title: `${APP_NAME} - Insights, News & Analysis`,
  description: "Updated transport market insights. Must reading for every professional managing freight, mover, or dispatching services.",
  keywords: [ "mover", "shiftrix",],
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: `${APP_NAME} - Insights, News & Analysis`,
    description: "Updated transport market insights. Must reading for every professional managing freight, mover, or dispatching services.",
    url: `${BASE_URL}/blog`,
    type: "website",
    siteName: `${APP_NAME}`,
    locale: "en-CA",
    images: [
      {
        url: `${BASE_URL}/blog-og.jpg`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} - Insights, News & Analysis`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `${BASE_URL}`,
    creator: `${BASE_URL}`,
    title: `${APP_NAME} - Insights, News & Analysis`,
    description: "Updated transport market insights. Must reading for every professional managing freight, mover, or dispatching services.",
    images: `${BASE_URL}/blog-og.jpg`,
  },
};

const blogSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": `${BASE_URL}`,
      "name": `Blog - ${APP_NAME}`,
      "description": "Updated transport market insights. Must reading for every professional managing freight, mover, or dispatching services.",
      "publisher": {
        "@id": `${BASE_URL}/#organization`
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": `${APP_NAME}`,
      "url": `${BASE_URL}`,
      "logo": {
        "@type": "ImageObject",
        "url": `${logo}`,
        "width": 512,
        "height": 512
      },
      "sameAs": [
        "https://www.facebook.com/shiftrix",
        "https://x.com/infoShiftrix",
        "https://www.instagram.com/shiftrix_movers",
        "https://www.youtube.com/@infoShiftrix"
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/#webpage`,
      "url": `${BASE_URL}/blog`,
      "name": `Blog - ${APP_NAME}`,
      "description": "Updated transport market insights. Must reading for every professional managing freight, mover, or dispatching services.",
      "isPartOf": {
        "@id": `${BASE_URL}/blog/#website`
      },
      "about": {
        "@id": `${BASE_URL}/blog/#blog`
      },
      "breadcrumb": {
        "@id": `${BASE_URL}/blog/#breadcrumb`
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/blog/#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${BASE_URL}`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${BASE_URL}/blog`
        }
      ]
    },
    {
      "@type": "Blog",
      "@id": `${BASE_URL}/blog/#blog`,
      "url": `${BASE_URL}/blog`,
      "name": `${APP_NAME} - Insights, News & Analysis`,
      "description": "Updated transport market insights. Must reading for every professional managing freight, mover, or dispatching services.",
      "publisher": {
        "@id": `${BASE_URL}/#organization`
      },
      "mainEntityOfPage": {
        "@id": `${BASE_URL}/blog/#webpage`
      }
    }
  ]
};

export default function BlogPage() {
  return <>
      {/* Add schema JSON-LD to <head> */}
      <Script id="blog-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchemaData) }}/>

      <BlogClient />
    </>;
}
