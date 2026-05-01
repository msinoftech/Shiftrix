import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import { FaqSection } from "@/components/FaqSection";


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
            "@type": "WebSite",
            "@id": `${BASE_URL}/#website`,
            "name": `${APP_NAME}`,
            "url": `${BASE_URL}`,
        },
        {
        "@type": "WebPage",
        "@id": `${BASE_URL}/services/local-movers/#webpage`,
        "url": `${BASE_URL}/services/local-movers`,
        "name": `Local Movers Calgary | Reliable Same-Day Service | ${APP_NAME}`,
        "description": "Searching for reliable local movers in Calgary? Shiftrix provides professional, customized local moving services with 5+ years of experience in Calgary, Chestermere, and surrounding areas.",
        "isPartOf": {
            "@id": `${BASE_URL}/#website`
        },
        "about": {
            "@id": `${BASE_URL}/#organization`
        },
        "breadcrumb": {
            "@id": `${BASE_URL}/services/local-movers/#breadcrumb`
        },
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

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold pb-12">Trusted Local Movers for Homes and Businesses Around Calgary</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* left Image */}
                <div className="flex-1">
                    <Image src="/local-mover-1.jpg" alt="Same-Day local moving Service in calgary" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* right Content */}
                <div className="flex-1 space-y-3">
                    <p>Opposing your worries, relocating within the city is neither complicated nor expensive if you have found a reliable, professional crew. At Shiftrix, we deliver exceptional moving services that exceed the expectations of homeowners, renters, and businesses throughout Calgary and the surrounding areas. Your requirements may differ with a shift to a new neighbourhood, upsizing, downsizing, or choosing a better location for your office. But our team's aim always remains the same: to handle everything with care from start to finish.</p>
                    <p>We bring the local crew, the truck, the supply material, and the essential tools. You show up at the new place.</p>

                    <Link href={`${BASE_URL}/contact-us`} className="inline-flex items-center gap-2 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-6 py-3 rounded-md font-medium shadow-lg transition-transform transform">Get a free quote</Link>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* left Content */}
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
                {/* right Image */}
                <div className="flex justify-center flex-1">
                    <Image src="/local-mover.jpg" alt="Trusted Local Movers in calgary" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* left Image */}
                <div className="relative">
                    <Image src="/local-movers-with-a-truck.jpg" alt="Affordable calgary local mover" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* right Content */}
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
            </div>
        </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="rounded-3xl bg-white drop-shadow-lg py-12 px-4 sm:px-6 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="relative space-y-3">
                    <div className="text-2xl text-gray-900 md:text-4xl font-bold">Plan Your Next Move with our team | Book Today</div>
                    <p>Plan your next move with our expert team and get a customised moving service that fits your schedule and budget.</p>
                </div>
                {/* Right Form */}
                <div className="relative">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="relative text-center space-y-3 pb-8">
                <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
                <FaqSection items={faqItems} />
            </div>
        </div>
    </section>
    </>
  );
}