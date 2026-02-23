import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Office and Commercial Movers in Calgary",
    description: "Trust Shiftrix for Calgary's leading commercial moving service to handle your office, retail, clinic, or warehouse relocation with unmatched attention to detail and expertise.",
    keywords: [ "Commercial Movers", "commercial moving companies", "commercial office movers", "commercial relocation services", "local commercial movers", "best commercial movers", "commercial moving solutions"],
    alternates: {
        canonical: `${BASE_URL}/services/commercial-movers`,
      },
    openGraph: {
      title: "Office and Commercial Movers in Calgary",
      description: "Trust Shiftrix for Calgary's leading commercial moving service to handle your office, retail, clinic, or warehouse relocation with unmatched attention to detail and expertise.",
      url: `${BASE_URL}/services/commercial-movers`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/trusted-commercial-moving-company.jpg`,
          width: 1200,
          height: 630,
          alt: "Office and Commercial Movers in Calgary",
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Office and Commercial Movers in Calgary",
      description: "Trust Shiftrix for Calgary's leading commercial moving service to handle your office, retail, clinic, or warehouse relocation with unmatched attention to detail and expertise.",
      images: [`${BASE_URL}/trusted-commercial-moving-company.jpg`],
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
        "@id": `${BASE_URL}/services/commercial-movers/#webpage`,
        "url": `${BASE_URL}/services/commercial-movers`,
        "name": "Office and Commercial Movers in Calgary",
        "isPartOf": {"@id": `${BASE_URL}/services/commercial-movers/#website`},
        "description": "Trust Shiftrix for Calgary's leading commercial moving service to handle your office, retail, clinic, or warehouse relocation with unmatched attention to detail and expertise.",
        "inLanguage": "en-CA",
        "breadcrumb": {"@id": `${BASE_URL}/services/commercial-movers/#breadcrumb`}
    },
    {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/commercial-movers/#breadcrumb`,
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
            "name": "commercial movers"
        }
        ]
    },
    {
        "@type": "Service",
        "serviceType": "Commercial Movers",
        "name": "Office and Commercial Movers in Calgary",
        "description": "Trust Shiftrix for Calgary's leading commercial moving service to handle your office, retail, clinic, or warehouse relocation with unmatched attention to detail and expertise.",
        "url": `${BASE_URL}/services/commercial-movers`,
        "provider": {
        "@type": "MovingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}/services/commercial-movers`,
        "logo": `${BASE_URL}/shiftrix-logo.png`
        },
        "areaServed": [
          {"@type": "City", "name": "Calgary"},
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Commercial Movers Offerings",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Office Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Retail Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Warehouse Moving"}}
        ]
        }
    }
    ]
};

export default function CommercialmoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="commercial-moving-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-6 md:pt-6 lg:pt-6">
            <h1 className="text-3xl md:text-4xl font-bold pb-12 text-gray-900">Commercial Movers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/trusted-commercial-moving-company.jpg" alt="Commercial Movers" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold pb-6 text-gray-900">Our office and commercial moving services</h2>
                    <p className="text-gray-700 leading-relaxed">Let us handle your office, retail, clinic, or warehouse move with unmatched attention and expertise when it&apos;s time to relocate your business. Trust Shiftrix for Calgary&apos;s leading commercial moving experience. Our team works behind the scenes so your business keeps running smoothly.</p>
                </div>
            </div>
        </div>
    </section>

     <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Complete Commercial Moving Solution</h2>
                <p className="text-gray-600">Shiftrix delivers seamless business moving solutions, thoughtfully customised to fit your company’s unique size, space, and workflow. From planning and packing to relocation and setup, our local team manages every step to ensure a smooth, efficient move.</p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/commercial-moving-company-3.jpg" alt="commercial moving companies" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>

                {/* Right Content */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-2">Our commercial services include:</h3>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Pre-move consultation</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">On-site assessments of both locations and a detailed move plan.​</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Professional packing and labelling, inventory management.​</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Furniture disassembly, reassembly, and placement.​</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Careful handling of IT systems, servers, and electronics.​</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Secure transport and handling of all files, samples, and sensitive materials.​​</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Short- and long-term storage options for surplus items.​</p>
                    </div>
                    <p>Whether you are relocating a corporate office, storefront, or industrial space, Shiftrix positions your business to get back to work fast.​</p>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-18">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">What to Consider Before Booking a Commercial Moving Company?</h2>
                    <p className="text-gray-700 leading-relaxed">Before booking a commercial moving company, define the level of support your business needs during and after the move, including storage, packing, timing, and document security. Consider whether you require temporary storage, special packing for fragile or oversized items, furniture disassembly and reassembly, recycling or disposal of old equipment, and evening or weekend scheduling to reduce downtime. Shiftrix can help evaluate these needs and create a tailored commercial relocation plan that protects your assets and keeps operations running smoothly.</p>
                </div>
                <div className="flex-1">
                    <Image src="/commercial-moving-company.jpg" alt="commercial office movers" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/commercial-moving-company-1.jpg" alt="commercial relocation services" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">We make commercial relocation easier.</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">Shiftrix is committed to being one of Calgary’s top commercial movers by combining skilled crews, transparent pricing, and responsive communication. Our trained office movers and modern equipment ensure fast, careful moves that respect your timelines and budget. From your first call to the final walkthrough, we prioritise reliability, punctuality, and service to deliver effective commercial moving solutions.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why choose Experienced Commercial Office Movers for Seamless Relocation?</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">Booking professional movers is a key part of any move. They help make the process simple, so you get what you need on time. With a free relocation estimate, you can also plan your budget more easily. At Shiftrix, you can feel confident when you hire our commercial movers. When you contact us, our team guides you through a simple booking process, gives you a precise, no-obligation estimate, and explains each step. We take care of the details for you.</p>
                </div>
                <div className="flex-1">
                    <Image src="/commercial-moving-company-2.jpg" alt="local commercial movers" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why Move Your Calgary Office or Commercial Space With Us?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Packing, Storing, and Protecting</h3>
                    <p className="text-gray-700">We offer secure solutions for your office furniture, retail fixtures, warehouse equipment, and important files, all tailored to your business needs.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Estimates and Plan Your Move</h3>
                    <p className="text-gray-700">With on-site estimates, we develop detailed logistics plans for offices, retail shops, and industrial spaces, ensuring accurate evaluations and a smooth transition.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">No Move is Too Big for Us</h3>
                    <p className="text-gray-700">We have the equipment and expertise to handle moves of any size, from small offices to large corporate headquarters, warehouses, or heavy machinery.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Professional, Reliable & Friendly</h3>
                    <p className="text-gray-700">Our movers are skilled in both office and commercial relocations, combining expertise, efficiency, and customer service for a positive experience every time.</p>
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
              title="Does Shiftrix offer commercial moving services?"
              content={`Yes, our professional team prioritises efficiency and care with end-to-end logistics solutions for small offices, retail spaces, clinics, and warehouses, ensuring a seamless transition with minimal downtime and allowing your operations to resume quickly.`}
            />
            <FaqSection
              title="Should you trust unprofessional commercial movers?"
              content={`No, unprofessional movers can pose the risks of costly delays, damage, and liability due to a lack of specialised equipment and strategic planning. So entrusting business assets to professional commercial movers is safer.`}
            />
            <FaqSection
              title="How can you book a commercial mover in Calgary at a reasonable price?"
              content={`Hiring commercial movers directly is more cost-effective than using a middleman or marketplace. Local Calgary movers typically charge $130 to $150 per hour for a two-mover, one-truck service.`}
            />
        </div>
    </section>
    </>
  );
}
