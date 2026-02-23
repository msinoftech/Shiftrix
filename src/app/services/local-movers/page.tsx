import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Reliable Local Mover on a Budget",
  description: "Looking for local movers with a truck? Choose Shiftrix; we manage every detail, ensuring fast, efficient service for small loads or complete moves.",
  keywords: ["local movers in my area", "local movers with a truck", "affordable local movers", "Find local movers", "professional local movers", "local movers small loads", "looking for local movers", "professional local movers", "best local movers"],
  alternates: {
    canonical: `${BASE_URL}/services/local-movers`,
  },
  openGraph: {
    title: "Reliable Local Mover on a Budget",
    description: "Looking for local movers with a truck? Choose Shiftrix; we manage every detail, ensuring fast, efficient service for small loads or complete moves.",
    url: `${BASE_URL}/services/local-movers`,
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}/local-mover-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Reliable Local Mover on a Budget",
      },
    ],
    locale: "en-CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Local Mover on a Budget",
    description: "Looking for local movers with a truck? Choose Shiftrix; we manage every detail, ensuring fast, efficient service for small loads or complete moves.",
    images: [`${BASE_URL}/local-mover-1.jpg`],
  },
  
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
    {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`
    },
    {
        "@type": "WebPage",
        "@id": `${BASE_URL}/services/local-movers/#webpage`,
        "url": `${BASE_URL}/services/local-movers`,
        "name": "Reliable Local Mover on a Budget",
        "isPartOf": {"@id": `${BASE_URL}/services/local-movers/#website`},
        "description": "Looking for local movers with a truck? Choose Shiftrix; we manage every detail, ensuring fast, efficient service for small loads or complete moves.",
        "inLanguage": "en-CA",
        "breadcrumb": {"@id": `${BASE_URL}/services/local-movers/#breadcrumb`}
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
            "name": "local movers"
        }
        ]
    },
    {
        "@type": "Service",
        "serviceType": "Local Movers",
        "name": "Reliable Local Mover on a Budget",
        "description": "Looking for local movers with a truck? Choose Shiftrix; we manage every detail, ensuring fast, efficient service for small loads or complete moves.",
        "url": `${BASE_URL}/services/local-movers`,
        "provider": {
        "@type": "MovingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}/services/local-movers`,
        "logo": `${BASE_URL}/shiftrix-logo.png`
        },
        "areaServed": [
        {"@type": "City", "name": "Calgary"},
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Local Movers Offerings",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Office Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Retail Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Warehouse Moving"}}
        ]
        }
    }
    ]
};

export default function LocalMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="localmover-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-6 md:pt-6 lg:pt-6">
            <h1 className="text-3xl md:text-4xl font-bold pb-12 text-gray-900">Local Movers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/local-mover-1.jpg" alt="local movers in my area" width={600} height={350} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold pb-6 text-gray-900">Professional Local Mover on a Budget</h2>
                    <p className="text-gray-700 leading-relaxed">Shiftrix makes local moving easy and stress-free, whether it&apos;s moving to a new home across town or relocating the office. Our Experienced local movers manage every detail, ensuring fast, efficient service for small loads or complete moves.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* left Content */}
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Hire the Best Local Movers in Your Area With Packing and Transport Services</h2>
                    <p className="text-gray-600">To relocate home or office, you may require packing, loading, transport or reassembly of your belongings. You can hire a mover to assist you with the move, but it is time-consuming and requires your personal involvement. Or you can hire us; our skilled local movers handle everything with attention and care from start to finish.</p>

                    <h3 className="text-xl font-bold text-gray-800 mb-3">Benefits of finding local movers with us:</h3>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Deep knowledge of local routes to avoid traffic delays​</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Friendly and skilled movers</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Clean and well-maintained Transport</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Top-quality packing materials to protect your things.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Dependable scheduling and flexible timelines</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Responsive customer support</p>
                    </div>
                </div>
                {/* right Image */}
                <div className="flex justify-center">
                    <Image src="/local-mover.jpg" alt="local movers with a truck" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-18">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/local-movers-with-a-truck.jpg" alt="Find local movers" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Looking for Local Movers with a truck</h2>
                    <p className="text-gray-700 leading-relaxed">Moving doesn’t have to be expensive or time-consuming. When you book local movers with a truck, you get skilled help, a well-equipped truck, and full support for a smooth move—whether it’s your apartment, home, office, or just a few items. Our team brings packing materials like straps and padding to keep your belongings safe, and our trucks are always clean and spacious. With our experienced movers, your local move will be easy and stress-free.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" className="max-w-7xl mx-auto px-4 py-12">
        <div className="rounded-3xl bg-white drop-shadow-lg py-12 px-4 sm:px-6 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="relative">
                    <div>
                        <div className="text-2xl text-gray-900 md:text-4xl font-bold">Plan Your Next Move with our team | Book Today</div>
                        <p className="mt-3">Plan your next move with our expert team and get a customised moving service that fits your schedule and budget.</p>
                    </div>
                </div>
                {/* Right Form */}
                <div className="relative">
                    <ContactForm />
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative text-center pb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center">Frequently Asked Questions</h2>
            </div>
            <FaqSection
              title="What does being a local mover mean?"
              content={`Being a local mover means secure transport via familiar routes to dodge traffic. They provide specialised short-distance relocation services within the city and its metropolitan area. When booking a local mover in Calgary, look for licensed, insured experts who offer packing supplies, workforce, and flexible scheduling—ideal for stress-free transitions without the complexities of long-haul moves. They ensure efficiency, safety, and affordability for neighbourhood shifts.`}
            />
            <FaqSection
              title="How much does it cost to hire a local mover?"
              content={`In Calgary, hiring a local mover typically costs $100–$150 per hour for a standard 2-mover crew with a truck, depending on time, stairs, and extras like packing. Prices may vary by season and may include add-ons such as disassembly.`}
            />
        </div>
    </section>
    </>
  );
}