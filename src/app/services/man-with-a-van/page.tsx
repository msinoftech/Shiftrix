import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Reliable man with a van Services for Owner Operators",
    description: "Work with our experienced man with a van dispatcher for mover management, rate negotiation, and back-office support to help grow your fleet.",
    keywords: ["man with a truck moving company", "man with a van moving", "man and van services"],
    alternates: {
        canonical: `${BASE_URL}/services/man-with-a-van`,
    },
    openGraph: {
      title: "Reliable man with a van Services for Owner Operators",
      description: "Work with our experienced man with a van dispatcher for mover management, rate negotiation, and back-office support to help grow your fleet.",
      url: `${BASE_URL}/services/man-with-a-van`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/man-with-van-mover.jpg`,
          width: 1200,
          height: 630,
          alt: "Reliable man with a van Services for Owner Operators",
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Reliable man with a van Services for Owner Operators",
      description: "Work with our experienced man with a van dispatcher for mover management, rate negotiation, and back-office support to help grow your fleet.",
      images: [`${BASE_URL}/man-with-van-mover.jpg`],
    },
    
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
    {
        // 1. WebSite Definition
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": `${BASE_URL}`,
        "name": `${APP_NAME}`
    },
    {
        // 2. WebPage Definition for the Subpage
        "@type": "WebPage",
        "@id": `${BASE_URL}/services/man-with-a-van/#webpage`,
        "url": `${BASE_URL}/services/man-with-a-van`,
        "name": "Reliable man with a van Services for Owner Operators",
        "isPartOf": {"@id": `${BASE_URL}/services/man-with-a-van/#website`},
        "description": "Work with our experienced man with a van dispatcher for mover management, rate negotiation, and back-office support to help grow your fleet.",
        "inLanguage": "en-CA",
        "breadcrumb": {"@id": `${BASE_URL}/services/man-with-a-van/#breadcrumb`}
    },
    {
        // 3. Breadcrumb List
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/man-with-a-van/#breadcrumb`,
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
            "name": "man with a van"
        }
        ]
    },
    {
        // 4. Specific Service Definition (Man with a van)
        "@type": "Service",
        "serviceType": "Man With A Van",
        "name": "Reliable man with a van Services for Owner Operators",
        "description": "Work with our experienced man with a van dispatcher for mover management, rate negotiation, and back-office support to help grow your fleet.",
        "url": `${BASE_URL}/services/man-with-a-van`,
        "provider": {
        "@type": "MovingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}/services/man-with-a-van`,
        "logo": `${BASE_URL}/shiftrix-logo.png`
        },
        "areaServed": [
          {"@type": "Place", name: "Calgary" },
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Man with a van service offerings",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "same-day or scheduled moves"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "packing and unpacking"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "furniture assembly and disassembly"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "single-item delivery"}}
        ]
        }
    }
    ]
};

export default function ManWithVanPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="man-with-a-van-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-6 md:pt-6 lg:pt-6">
            <h1 className="text-3xl md:text-4xl font-bold pb-12 text-gray-900">Man With A Van</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/man-with-van-mover.jpg" alt="man with a truck moving company" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold pb-6 text-gray-900">Man with a Van Services for Easy Moves</h2>
                    <p className="text-gray-700 leading-relaxed">Shiftrix helps families, students, professionals, and businesses move. You can book our man with a van service for same-day or scheduled moves, whether you need to move one item, a small apartment, or make business deliveries.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">How do our Man and Van Services Meet Your Needs?</h2>
                <p className="text-gray-600">We understand that every move is unique. We customise our service to match your specific requirements: full packing and unpacking, furniture assembly and disassembly, or single-item delivery.</p>
            </div>
            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/man-with-van-mover-1.jpg" alt="man with a van moving" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>

                {/* Right Content */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Shiftrix for Man and Van Services</h3>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Team of Professional movers with years of experience</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Transparent Pricing with Clear Upfront Quotes</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Flexible booking for same-day and scheduled services on your timeline</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Secure loading and handling of your items</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Comprehensive Solutions from packing materials to furniture assembly</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Friendly Customer Support</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-18">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why Choose Shiftrix for Your Every Move in Calgary?</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">With a man-and-a-van moving service, you should get more than just a truck and a driver. Shiftrix has helped hundreds of happy customers in Calgary by using skill, up-to-date tools, and friendly service to make your move go smoothly. For small moves, single pieces of furniture, and apartment moves, we are available on weekends, holidays, and for last-minute moves, always with the same care and dedication.</p>
                </div>
                <div className="flex-1">
                    <Image src="/man-with-van-mover-2.jpg" alt="man and van services" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/man-with-van-mover-3.jpg" alt="Reliable man with a van Services" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">What is our comprehensive moving service?</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">At Shiftrix, we provide professional packing with quality materials, secure loading, insured transport, unloading, and reassembly at your destination. Need to move a piano, antique wardrobe, or oversized furniture? Our team carries protective gear, secure straps, and loading ramps to handle awkward, heavy, or valuable items.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Moving With A Trusted Man with A Van Service</h2>
                <p className="text-gray-600">Moving shouldn&apos;t be too stressful or too expensive with Man with A Van Service in Calgary. We are committed to excellence, better pricing, and friendly service. Book your next move with our skilled movers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Transparent Pricing</h3>
                    <p className="text-gray-700">Precise, upfront estimates to avoid surprise charges.​ So you can plan your move confidently with us.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Flexibility With Requirements</h3>
                    <p className="text-gray-700">Our services scale to your needs, whether for small or large loads, without wasting space or budget.​</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Professional packing and protection</h3>
                    <p className="text-gray-700">Our skilled team use proven techniques and quality materials to safeguard furniture, electronics, and fragile items in transit.​</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Scheduling and Communication</h3>
                    <p className="text-gray-700">We focus on on-time delivery and route planning, and provide tracking and proactive updates throughout your move.​</p>
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
              title="What is a man with a van moving service?"
              content={`Collectively, a driver, a van, or a small truck is known as "man with a van". It is typically a flexible, budget-friendly moving option for smaller jobs, such as moving a few pieces of furniture, a single room, or a small apartment. They also offer a workforce for loading and unloading on your demand.`}
            />
            <FaqSection
              title="Do I have to prepare for &apos;a man with a van&apos;?"
              content={`Yes, if you hire only a driver and a loading truck. Although Man with a Van Service, like Shifrix, charges an additional fee for its workforce. Otherwise, a 2-mover and a van service is the best choice. They can manage everything, including disassembling, packing, loading, unloading, and reassembling your belongings, or assisting you with this.`}
            />
        </div>
    </section>
    </>
  );
}