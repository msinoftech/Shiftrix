import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { blogs } from "@/lib/data";
import { APP_NAME, BASE_URL } from "@/lib/config";
import BlogDetails from "./BlogDetails";

// Define page props for this dynamic route
type PageProps = { params: Promise<{ slug: string }> };

// Metadata generation
export async function generateMetadata( { params }: PageProps ): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: `Post Not Found | ${APP_NAME}`,
      description: "Sorry, the post you're looking for does not exist.",
    };
  }

  const url = `${BASE_URL}/blog/${slug}`;
  const ogImageSource = post.image || `${BASE_URL}/blog-og.jpg`;
  const ogImage = ogImageSource.startsWith("http") ? ogImageSource : `${BASE_URL}${ogImageSource}`;

  return {
    title: `${post.metaTitle} - ${APP_NAME}`,
    description: post.metaDesc,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      url: url,
      siteName: `${APP_NAME}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDesc,
      images: [ogImage],
    },
  };
}

// Page component
export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${slug}`;
  const imageUrl = post.image?.startsWith("http") ? post.image : `${BASE_URL}/${post.image}`;


  // Dynamic Schema Data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      // Website Definition
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        "name": `${APP_NAME} - ${post.title}`,
        "url": `${url}`,
      },
      // WebPage for the Blog Post
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        "url": `${url}`,
        "name": `${APP_NAME} - ${post.title}`,
        "isPartOf": { "@id": `${url}/#website` },
        "description": `${post.excerpt}`,
        "inLanguage": "en-CA",
        "breadcrumb": { "@id": `${url}/#breadcrumb` },
      },
      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${BASE_URL}`,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": `${BASE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${post.title}`,
            "item": `${url}`,
          },
        ],
      },
      // BlogPosting
      {
        "@type": "BlogPosting",
        "@id": `${url}/#blogposting`,
        "headline": `${post.metaTitle}`,
        "description": post.metaDesc,
        "articleBody": post.excerpt,
        "url": url,
        "mainEntityOfPage": { "@id": `${url}/#webpage` },
        "image": {
          "@type": "ImageObject",
          "url": imageUrl,
        },
        "datePublished": post.published_at,
        "dateModified": post.updated_at,
        "author": {
          "@type": "Person",
          "name": post.author,
        },
        "publisher": {
          "@type": "Organization",
          "name": `${APP_NAME}`,
          "url": `${BASE_URL}`,
          "logo": {
            "@type": "ImageObject",
            "url": `${BASE_URL}/shiftrix-logo.png`,
          },
        },
      },
    ],
  };

  return <>
      {/* Inject Schema in Head */}
      <Script id="blogpost-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

      <BlogDetails post={post} blogs={blogs} />
    </>;
}

// Enable static generation for all known blog slugs
export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}
