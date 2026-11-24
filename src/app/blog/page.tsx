import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import BlogClient from "@/app/blog/BlogClient";
import { contactInfo } from "@/lib/config";
const { logo } = contactInfo;
import Link from "next/link";
import MovingForm from "@/components/movingForm";

const { phone } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

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

      <section className="sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-10 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <h1 className="text-2xl md:text-4xl font-bold">Before the Boxes, Plan Your Move</h1>
            <p>Find packing tips, moving checklists, and budgeting advice from Shiftrix’s Calgary movers. Whether you’re moving across town or relocating your office, get practical guidance for every step.</p>
          </div>
        </div>
      </section>

      <BlogClient />

      <section className="pb-10 md:pb-20">
        <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl dark-sec bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-700 text-white shadow-xl">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 items-center">
                    {/* left Content */}
                    <div className="space-y-6 max-w-xl">
                        <div className="space-y-3 text-white">
                            <p className="text-sm font-semibold text-indigo-200 uppercase">Free Relocation Services quote</p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Get a Free and No-Obligation Quote</h2>
                            <p>Move with a clear, guaranteed price instead of an estimate. Send us the details, and we will reach out to you soon, usually within one hour.</p>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Final price sealed in writing with details before you okay.",
                                "Calgary relocation services are willing to talk it through.",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-indigo-50">
                                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href={phoneHref} aria-label="Call Shiftrix for a relocation services quote" className="inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm transition hover:bg-white/15">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-indigo-400 text-white">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                </svg>
                            </span>
                            <span className="flex flex-col text-left">
                                <span className="text-xs text-indigo-200">Prefer to talk?</span>
                                <span className="text-sm font-semibold tracking-wide">+1 (403) 472-9110</span>
                            </span>
                        </Link>
                    </div>
                    
                    {/* right Content */}
                    <div className="w-full lg:max-w-md lg:ml-auto">
                        <div className="rounded-xl bg-white text-slate-900 shadow-2xl px-5 py-6 sm:px-6 sm:py-7">
                            <div className="mb-5 space-y-1">
                                <h3 className="text-xl font-bold leading-tight">Request your free quote</h3>
                                <p className="text-sm text-slate-600">Quick form. No hidden charges.</p>
                            </div>
                            <MovingForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>;
}
