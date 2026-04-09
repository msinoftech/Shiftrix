import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Long-distance Movers and Packers On A Budget",
    description: "At Shiftrix, you will find what you are looking for in long-distance movers, whether you are a professional, a family, or a business, with packing, loading, and transport for even small loads.",
    keywords: ["long distance movers", "best long distance movers", "affordable long distance movers", "top long distance movers", "moving companies long distance movers", "long distance movers for small loads", "full service long distance movers", "long distance movers and packers", "budget long distance movers", "one way long distance movers", "most reliable long distance movers"],
    alternates: {
        canonical: `${BASE_URL}/services/long-distance-movers`,
    },
    openGraph: {
      title: "Long-distance Movers and Packers On A Budget",
      description: "At Shiftrix, you will find what you are looking for in long-distance movers, whether you are a professional, a family, or a business, with packing, loading, and transport for even small loads.",
      url: `${BASE_URL}/services/long-distance-movers`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/long-distance-movers.jpg`,
          width: 1200,
          height: 630,
          alt: "Long-distance Movers and Packers On A Budget",
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Long-distance Movers and Packers On A Budget",
      description: "At Shiftrix, you will find what you are looking for in long-distance movers, whether you are a professional, a family, or a business, with packing, loading, and transport for even small loads.",
      images: [`${BASE_URL}/long-distance-movers.jpg`],
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
            "@id": `${BASE_URL}/services/long-distance-movers/#webpage`,
            "url": `${BASE_URL}/services/long-distance-movers`,
            "name": "Long-distance Movers and Packers On A Budget",
            "isPartOf": {"@id": `${BASE_URL}/services/long-distance-movers/#website`},
            "description": "At Shiftrix, you will find what you are looking for in long-distance movers, whether you are a professional, a family, or a business, with packing, loading, and transport for even small loads.",
            "inLanguage": "en-CA",
            "breadcrumb": {"@id": `${BASE_URL}/services/long-distance-movers/#breadcrumb`}
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${BASE_URL}/services/long-distance-movers/#breadcrumb`,
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
                "name": "long distance movers"
            }
          ]
      },
      {
          "@type": "Service",
          "serviceType": "Long Distance Movers",
          "name": "Long-distance Movers and Packers On A Budget",
          "description": "At Shiftrix, you will find what you are looking for in long-distance movers, whether you are a professional, a family, or a business, with packing, loading, and transport for even small loads.",
          "url": `${BASE_URL}/services/long-distance-movers`,
          "provider": {
          "@type": "MovingCompany",
          "name": `${APP_NAME}`,
          "url": `${BASE_URL}/services/long-distance-movers`,
          "logo": `${BASE_URL}/shiftrix-logo.png`
          },
          "areaServed": [
          {"@type": "City", "name": "Calgary"},
          ],
          "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Long Distance Movers Offerings",
          "itemListElement": [
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Office Moving"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Retail Moving"}},
              {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Warehouse Moving"}}
          ]
          }
      }
    ]
};

export default function LongDistanceMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="long-distance-movers-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold pb-12">Long Distance Movers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* left Image */}
                <div className="flex-1">
                    <Image src="/long-distance-movers.jpg" alt="long distance movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* right Content */}
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Long-distance Movers and Packers On A Budget</h2>
                    <p>Shiftrix provides affordable long-distance moving services for everyone who needs value without sacrificing quality. We handle your packing with care, load your belongings securely, and transport them safely anywhere in Canada at a price you can afford. Whether you need to move your entire home or just a few important things, our team works to make your move smooth and stress-free.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Why Choose the Most Reliable Long-Distance Movers?</h2>
                <p>Shiftrix positions itself among the most reliable long distance movers by combining professional crews, modern trucks, and proven processes.​</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="relative">
                    <Image src="/long-distance-movers-1.jpg" alt="best long distance movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>

                {/* Right Content */}
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Reasons to hire the best movers</h3>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Reduced risk of damage through trained packing and handling.​​</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Time savings with efficient planning, loading, and routing.​​</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Lower stress thanks to clear communication and tracking options.​</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Better value from optimized routes and competitive, transparent pricing.​</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-18">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* left Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Affordable One-Way Long-Distance Movers for Small Loads</h2>
                    <p>Not every move fills a truck, so Shiftrix offers one way long distance movers options ideal for condos, students, and downsizing clients. Long distance movers for small loads can significantly reduce costs by consolidating shipments while still maintaining clear schedules and professional handling. These affordable long distance movers services are perfect when you only need to move a few rooms, seasonal items, or select furniture across provinces. Shiftrix structures these routes to keep prices low, making us a smart choice among budget long distance movers for one-way moves.​</p>
                </div>
                {/* right Image */}
                <div className="relative">
                    <Image src="/long-distance-movers-2.jpg" alt="affordable long distance movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* left Image */}
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/long-distance-movers-3.jpg" alt="top long distance movers" width={600} height={400} className="w-full h-full object-center rounded-xl shadow-md object-cover"/>
                </div>
                {/* right Content */}
                <div className="order-1 md:order-2 flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Experience with Full-Service Long-distance Movers</h2>
                    <p>Full service long distance movers handle everything: packing, loading, transportation, unloading, and optional storage. Shiftrix mirrors leading providers by offering long distance movers and packers who bring materials, protect your furniture, and set items in place at your new home. This approach is ideal for busy professionals and families who want most reliable long distance movers capable of managing complex timelines, elevators, and multi-stop moves. With a single coordinated team, you avoid juggling multiple vendors or doing heavy lifting yourself.​</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Why Rely on Shiftrix?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Item 1 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Transparent, budget-conscious pricing</h3>
                    <p>Clear, upfront estimates tailored to your inventory and route so you can plan confidently with affordable long distance movers and avoid surprise charges.​</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Flexible options for small and large loads</h3>
                    <p>From long distance movers for small loads to full household relocations, services scale to your needs without wasting space or budget.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Professional packing and protection</h3>
                    <p>Trained long distance movers and packers use proven techniques and quality materials to safeguard furniture, electronics, and fragile items in transit.​</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Reliable scheduling and communication</h3>
                    <p>As one of the most reliable long distance movers, Shiftrix focuses on on-time delivery, route planning, and proactive updates throughout your move.​</p>
                </div>
            </div>
        </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="rounded-3xl bg-white drop-shadow-lg py-12 px-4 sm:px-6 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="relative text-center space-y-3 pb-8">
                <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
                <FaqSection
                title="Approximately how much does it cost to book a long-distance mover?"
                content={`The average cost for long-distance moves (100 kilometres) in Calgary is $4,000-$5,500, depending on distance, weight, services provided, and any additional fees. Local, small moves can cost as little as $400 in, while long, significant moves can cost over $ 5,000.`}
                />
                <FaqSection
                title="How to move household items hassle-free across Canada?"
                content={`Apart from creating a simple checklist for decluttering and packing, and setting key deadlines, such as utility changes and address updates, you should look for a trusted long-distance moving service, as professional movers use secure packing methods, organised inventories, and confirmed schedules to move your belongings safely and on time anywhere in Canada.`}
                />
            </div>
        </div>
    </section>
    </>
  );
}
