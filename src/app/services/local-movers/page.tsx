import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import { FaqSection } from "@/components/FaqSection";
import PageHeader from "@/components/PageHeader";
import MovingForm from "@/components/movingForm";

const { phone } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;


export const metadata: Metadata = {
  title: `Local Movers Calgary | Reliable Same-Day Service | ${APP_NAME}`,
  description: "Need local movers in Calgary? Shiftrix provides professional, affordable local moving services with a crew and truck. $100–$150/hr. Same-day availability. Get a free quote.",
  keywords: ["Same-Day local moving Service in calgary", "Trusted Local Movers in calgary", "Affordable calgary local mover"],
  alternates: {
    canonical: `${BASE_URL}/services/local-movers`,
  },
  openGraph: {
    title: `Local Movers Calgary | Reliable Same-Day Service | ${APP_NAME}`,
    description: "Need local movers in Calgary? Shiftrix provides professional, affordable local moving services with a crew and truck. $100–$150/hr. Same-day availability. Get a free quote.",
    url: `${BASE_URL}/services/local-movers`,
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}/local-mover-1.jpg`,
        width: 1200,
        height: 630,
        alt: `Local Movers Calgary | Reliable Same-Day Service | ${APP_NAME}`,
      },
    ],
    locale: "en-CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Local Movers Calgary | Reliable Same-Day Service | ${APP_NAME}`,
    description: "Need local movers in Calgary? Shiftrix provides professional, affordable local moving services with a crew and truck. $100–$150/hr. Same-day availability. Get a free quote.",
    images: [`${BASE_URL}/local-mover-1.jpg`],
  },
  
};

const faqItems = [
    {
        title: "What does being a local mover mean?",
        content: "Those professional movers who are familiar with the local route, traffic hours, and local rules. Local movers can save a lot of time by avoiding traffic jams, getting permission from local authorities, or taking a shorter route. Also, they can quickly arrange support, such as extra crew for loading or unloading, packing supplies, etc. They are an ideal choice for moving locally to a nearby city or within the city.",
    },
    {
        title: "How much does it cost to hire local movers per hour?",
        content: "In Calgary, the starting price of hiring a local mover is around $120 per hour for a standard 2-mover crew with a truck. It can vary depending on the region, location, scheduling time (likely higher on the weekend), and included services (deassemble, loading, unloading, reassemble, etc.), but all is negotiable.",
    },
    {
        title: "How much experience does Shiftrix have in providing local moving services in Calgary?",
        content: "With almost 5 years of hands-on experience serving Calgary residents, we are now providing a full-package local moving service with an experienced crew and secure transport, including deassembly, packing, loading, and unloading, etc., for home and office relocation.",
    },
    {
        title: "Can you actually trust local movers in Calgary?",
        content: "Yes, Shiftrix is one of those who has established a strong reputation among Calgary residents for delivering high-quality local moving services. Over the past five years, we have successfully relocated more than 1,000 clients, many of whom came to us through referrals, recommendations, and trusted relationships.",
    },
];

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${BASE_URL}/services/local-movers/#webpage`,
            "url": `${BASE_URL}/services/local-movers`,
            "name": `Local Movers Calgary | Reliable Same-Day Service | ${APP_NAME}`,
            "description": "Need local movers in Calgary? Shiftrix provides professional, affordable local moving services with a crew and truck. $100–$150/hr. Same-day availability. Get a free quote.",
            "isPartOf": {
              "@id": `${BASE_URL}/#website`
            },
            "about": {
              "@id": `${BASE_URL}/#business`
            },
            "mainEntity": {
              "@id": `${BASE_URL}/services/local-movers/#service`
            },
            "breadcrumb": {
              "@id": `${BASE_URL}/services/local-movers/#breadcrumb`
            },
            "hasPart": {
              "@id": `${BASE_URL}/services/local-movers/#faq`
            },
            "inLanguage": "en-CA"
        },
        {
            "@type": "Service",
            "@id": `${BASE_URL}/services/local-movers/#service`,
            "name": `Local Movers Calgary | Reliable Same-Day Service | ${APP_NAME}`,
            "serviceType": "Local Moving",
            "description": "Need local movers in Calgary? Shiftrix provides professional, affordable local moving services with a crew and truck. $100–$150/hr. Same-day availability. Get a free quote.",
            "url": `${BASE_URL}/services/local-movers`,
            "provider": {
              "@id": `${BASE_URL}/#business`
            },
            "areaServed": {
              "@type": "City",
              "name": "Calgary",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Alberta"
              }
            },
            "category": "Local Moving",
            "mainEntityOfPage": {
              "@id": `${BASE_URL}/services/local-movers/#webpage`
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${BASE_URL}/services/local-movers/#breadcrumb`,
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
                "name": "Services",
                "item": `${BASE_URL}/services`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Local Movers",
                "item": `${BASE_URL}/services/local-movers`
              }
            ]
        },

        {
            "@type": "FAQPage",
            "@id": `${BASE_URL}/services/local-movers/#faq`,
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.title,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.content
              }
            }))
        }
    ]
};

export default function LocalMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="localmover-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <PageHeader
      eyebrow={{ from: "Calgary", to: "Local Movers" }}
      heading="Trusted Local Movers for Homes and Businesses Around Calgary"
      paragraphs={[
        "Opposing your worries, relocating within the city is neither complicated nor expensive if you have found a reliable, professional crew. At Shiftrix, we deliver exceptional moving services that exceed the expectations of homeowners, renters, and businesses throughout Calgary and the surrounding areas. Your requirements may differ with a shift to a new neighbourhood, upsizing, downsizing, or choosing a better location for your office. But our team's aim always remains the same: to handle everything with care from start to finish.",
        "We bring the local crew, the truck, the supply material, and the essential tools. You show up at the new place.",
      ]}
      cta={{
        href: `${BASE_URL}/contact-us`,
        label: "Get a free quote",
        ariaLabel: "Get a Free Quote local movers",
      }}
      image={{
        src: "/local-mover-1.jpg",
        alt: "Same-Day local moving Service in calgary",
        width: 600,
        height: 400,
      }}
    />

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">                
                {/* Left Image */}
                <div className="flex justify-center flex-1">
                    <Image src="/local-mover.jpg" alt="Trusted Local Movers in calgary" width={700} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* Right Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Why Calgary Residents Choose Shiftrix?</h2>
                    <p>When trust matters, Calgary residents hire local moving services first. Over 5 years of hands-on experience, we have moved countless homes and businesses. Our skilled local movers handle everything with attention and care.</p>

                    <h3 className="text-xl font-bold">Here's what sets us apart:</h3>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Local route knowledge</strong> — Calgary's roads, traffic patterns, and shortcuts. Your belongings arrive on time.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Transparent pricing</strong> — No hidden fees. You know the cost before we show up.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Careful handling</strong> — Every item is treated with the same care we'd give our own.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Clean, well-equipped trucks</strong> — Properly maintained vehicles with the right gear for safe transport.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Responsive support</strong> — You can reach us before, during, and after your move.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-10 md:py-20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">                
                {/* Left Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Serving Calgary and the Surrounding Communities</h2>
                    <p>Wherever we are, we provide local moving services, including:</p>
                    <h3 className="text-xl font-bold">Calgary Neighbourhoods</h3>
                    <p>From the northwest communities of Tuscany and Kincora to the southeast neighbourhoods of Mahogany and Auburn Bay — we move Calgarians across every corner of the city. We're equally comfortable with downtown condos, suburban homes, and commercial units in the business districts.</p>
                    <h3 className="text-xl font-bold">Beyond Calgary</h3>
                    <p>Our local moving coverage also extends to:</p>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Chestermere</strong> — Just east of Calgary, we regularly serve Chestermere homeowners and renters.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Airdrie</strong> — North of the city, Airdrie residents count on us for smooth, efficient moves.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Cochrane</strong> — Whether you're moving within Cochrane or relocating from Calgary, we've got you covered.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Okotoks</strong> — South Calgary and Okotoks moves are well within our range.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Langdon and Strathmore</strong> — We serve growing communities east of Calgary as well.</p>
                    </div>
                </div>
                {/* Right Image */}
                <div className="relative">
                    <Image src="/local-movers-with-a-truck.jpg" alt="Affordable calgary local mover" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
        </div>
    </section>

    <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl dark-sec bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-700 text-white shadow-xl">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 items-center">
                    {/* left Content */}
                    <div className="space-y-6 max-w-xl">
                        <div className="space-y-3 text-white">
                            <p className="text-sm font-semibold text-indigo-200 uppercase">Free Local Movers quote</p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Get a Free and No-Obligation Quote</h2>
                            <p>Move with a clear, guaranteed price instead of an estimate. Send us the details, and we will reach out to you soon, usually within one hour.</p>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Final price sealed in writing with details before you okay.",
                                "Calgary local movers are willing to talk it through.",
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

                        <Link href={phoneHref} aria-label="Call Shiftrix for a local movers quote" className="inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm transition hover:bg-white/15">
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
                            <MovingForm service="local-movers" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-10 md:py-20 relative bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="relative text-center space-y-3 pb-8">
                    <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-3">
                    <FaqSection items={faqItems} />
                </div>
            </div>
        </div>
    </section>
    </>
  );
}