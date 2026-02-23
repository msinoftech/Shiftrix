import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Smart Residential Moving Services in Calgary",
    description: "Whether you're moving locally or long-distance across the province, our residential movers combine affordability and expertise to ensure a seamless relocation.",
    keywords: ["residential moving companies", "residential movers", "residential moving services", "long-distance residential moving companies", "local residential movers", "best residential movers", "residential relocation services"],
    alternates: {
        canonical: `${BASE_URL}/services/residential-movers`,
    },
    openGraph: {
      title: "Smart Residential Moving Services in Calgary",
      description: "Whether you're moving locally or long-distance across the province, our residential movers combine affordability and expertise to ensure a seamless relocation.",
      url: `${BASE_URL}/services/residential-movers`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/condo-movers.jpg`,
          width: 1200,
          height: 630,
          alt: "Smart Residential Moving Services in Calgary",
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Smart Residential Moving Services in Calgary",
      description: "Whether you're moving locally or long-distance across the province, our residential movers combine affordability and expertise to ensure a seamless relocation.",
      images: [`${BASE_URL}/condo-movers.jpg`],
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
        "@id": `${BASE_URL}/services/residential-movers/#webpage`,
        "url": `${BASE_URL}/services/residential-movers`,
        "name": "Smart Residential Moving Services in Calgary",
        "isPartOf": {"@id": `${BASE_URL}/services/residential-movers/#website`},
        "description": "Whether you're moving locally or long-distance across the province, our residential movers combine affordability and expertise to ensure a seamless relocation.",
        "inLanguage": "en-CA",
        "breadcrumb": {"@id": `${BASE_URL}/services/residential-movers/#breadcrumb`}
    },
    {
        // 3. Breadcrumb List
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/residential-movers/#breadcrumb`,
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
            "name": "Residential Movers"
        }
        ]
    },
    {
        // 4. Specific Service Definition (Residential Movers)
        "@type": "Service",
        "serviceType": "Smart Residential Moving Services in Calgary",
        "name": "Smart Residential Moving Services in Calgary",
        "description": "Whether you're moving locally or long-distance across the province, our residential movers combine affordability and expertise to ensure a seamless relocation.",
        "url": `${BASE_URL}/services/residential-movers`,
        "provider": {
        "@type": "MovingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}/services/residential-movers`,
        "logo": `${BASE_URL}/shiftrix-logo.png`
        },
        "areaServed": [
          { "@type": "Place", name: "Calgary" },
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Smart Residential Moving Services in Calgary",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Apartment & Condo Relocations"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Full-Service Residential Moves"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Packing & Unpacking Services"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Furniture Disassembly & Reassembly"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Flexible Scheduling Options - Local & Long-Distance Residential Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Packing and Storage Solutions"}}
        ]
        }
    }
    ]
};

export default function ResidentialMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="residential-movers-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-6 md:pt-6 lg:pt-6">
            <h1 className="text-3xl md:text-4xl font-bold pb-12 text-gray-900">Residential Movers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/condo-movers.jpg" alt="residential moving companies" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold pb-6 text-gray-900">A Seamless Experience With Smart Residential Moving Services</h2>
                    <p className="text-gray-700 leading-relaxed">Moving to a new apartment, condo, or house doesn&apos;t have to be a waste of your time or out of your budget. At Shiftrix, we bring affordability and expertise together for residential relocation. Our certified residential movers handle your belongings with the same care we&apos;d show our own families—whether you&apos;re moving local or long-distance across the province.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Our Customised Residential Moving Solutions For You</h2>
                <p className="text-gray-600">We know that every residential move can have unique requirements, whether it is downsizing into a cosy condo or expanding into a spacious family home. Our experienced residential movers offer tailored services to meet your specific needs.</p>
            </div>
            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/condo-movers-1.jpg" alt="residential movers" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>

                {/* Right Content */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Our Residential Moving Services are:</h3>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Apartment & Condo Relocations</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Full-Service Residential Moves</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Packing & Unpacking Services</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Furniture Disassembly & Reassembly</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Flexible Scheduling Options - Local & Long-Distance Residential Moving</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Packing and Storage Solutions</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-18">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Proven Residential Movers You Can Trust</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">When it comes to residential moving companies in Calgary, choosing the right partner makes all the difference. Professional movers who understand the complexities of residential relocations, not just lifting boxes. At Shiftrix, our experienced residential movers team brings years of expertise in handling unique apartment relocation challenges.  We use modern equipment, proper lifting techniques, and protective materials to ensure your household arrives intact. So you can settle into your new home feeling confident and relaxed.</p>
                </div>
                <div className="flex-1">
                    <Image src="/condo-movers-2.jpg" alt="residential moving services" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/apartment-mover-1.jpg" alt="long-distance residential moving companies" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Your Professional Movers for Apartments and Condos Across Calgary</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">We bring local expertise and personalised residential relocation services to your specific Calgary neighbourhood, ensuring a smooth, efficient, and stress-free transition to your new home. In addition to deep knowledge of each area&apos;s unique layout, access challenges, and building requirements, our local movers are familiar with traffic patterns, parking regulations, and building access procedures.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why Choose Shiftrix?</h2>
                <p className="text-gray-600">Our commitment to professionalism, affordability, and customer satisfaction sets us apart from other residential moving companies in Calgary.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Transparent Pricing, Zero Surprises</h3>
                    <p className="text-gray-700">Before moving day, we provide detailed quotes that include all costs up front, with no hidden fees.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Fully Insured & Certified Professional Movers</h3>
                    <p className="text-gray-700">Our trained team is fully insured and protects your household valuables, providing complete peace of mind throughout your residential move.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Local Expertise Meets Efficiency</h3>
                    <p className="text-gray-700">With years of experience in Calgary&apos;s neighbourhoods, traffic patterns, and building access requirements, we deliver residential moves that stay on schedule and on budget.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Available When You Need Us</h3>
                    <p className="text-gray-700">Same-day and last-minute moves, evening and weekend scheduling, plus flexible booking options ensure your residential moving service works around your life, not the other way around.</p>
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
              title="What is the average cost to move a house in Calgary?"
              content={`Typically, the average cost of moving a house in Calgary varies with home size, distance, number of movers, and services such as packing, loading, reassembly, etc., ranging from $500 for a small apartment to over $3,000 for larger homes.`}
            />
            <FaqSection
              title="What is the affordable way to move a house?"
              content={`Hiring local experts with sufficient experience in moving house is more cost-effective than hiring through marketplaces, where broker fees and commissions are included. If it is not urgent, you can request a quote from residential moving companies, including Shiftrix, and choose one based on affordability and the service that best suits you.`}
            />
        </div>
    </section>
    </>
  );
}
