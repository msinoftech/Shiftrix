import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Trusted Furniture Movers with 10+ Years of Experience",
  description: "Our furniture moving services have covered residential and commercial moves, local and long-distance, and even a single piece of furniture.",
  keywords: ["furniture moving companies", "movers to move furniture", "furniture moving service", "office furniture movers", "local furniture movers", "house furniture movers", "movers to move one piece of furniture", "long-distance furniture movers", "cheap furniture movers", "professional furniture movers", "commercial furniture movers", "furniture movers in my area"],
  alternates: {
    canonical: `${BASE_URL}/services/furniture-movers`,
  },
  openGraph: {
    title: "Trusted Furniture Movers with 10+ Years of Experience",
    description: "Our furniture moving services have covered residential and commercial moves, local and long-distance, and even a single piece of furniture.",
    url: `${BASE_URL}/services/furniture-movers`,
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}/furniture-mover.jpg`,
        width: 1200,
        height: 630,
        alt: "Trusted Furniture Movers with 10+ Years of Experience",
      },
    ],
    locale: "en-CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Furniture Movers with 10+ Years of Experience",
    description: "Our furniture moving services have covered residential and commercial moves, local and long-distance, and even a single piece of furniture.",
    images: [`${BASE_URL}/furniture-mover.jpg`],
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
        "@id": `${BASE_URL}/services/furniture-movers/#webpage`,
        "url": `${BASE_URL}/services/furniture-movers`,
        "name": "Trusted Furniture Movers with 10+ Years of Experience",
        "isPartOf": {"@id": `${BASE_URL}/services/furniture-movers/#website`},
        "description": "Our furniture moving services have covered residential and commercial moves, local and long-distance, and even a single piece of furniture.",
        "inLanguage": "en-CA",
        "breadcrumb": {"@id": `${BASE_URL}/services/furniture-movers/#breadcrumb`}
    },
    {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/furniture-movers/#breadcrumb`,
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
            "name": "furniture movers"
        }
        ]
    },
    {
        "@type": "Service",
        "serviceType": "Furniture Movers",
        "name": "Trusted Furniture Movers with 10+ Years of Experience",
        "description": "Our furniture moving services have covered residential and commercial moves, local and long-distance, and even a single piece of furniture.",
        "url": `${BASE_URL}/services/furniture-movers`,
        "provider": {
        "@type": "MovingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}/services/furniture-movers`,
        "logo": `${BASE_URL}/shiftrix-logo.png`
        },
        "areaServed": [
        {"@type": "City", "name": "Calgary"},
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Furniture Movers Offerings",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Office Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Retail Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Warehouse Moving"}}
        ]
        }
    }
    ]
};


export default function FurnitureMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="furnituremover-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-6 md:pt-6 lg:pt-6">
            <h1 className="text-3xl md:text-4xl font-bold pb-12 text-gray-900">Furniture Movers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/furniture-mover.jpg" alt="furniture moving companies" width={600} height={350} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold pb-6 text-gray-900">Professional Movers to Move Furniture, You Can Trust</h2>
                    <p className="text-gray-700 leading-relaxed">At Shiftrix, we provide professional furniture moving services for both residential and commercial. With advanced equipment and expert packing techniques, our teams have years of industry experience handling furniture of all shapes, sizes, and materials. You can easily get a free quote for a stress-free experience.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            {/* Heading Section */}
            <div className="mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Your Expectation from One of the Best Furniture Moving Companies</h2>
                <p className="text-gray-600">Expect one of the best furniture moving companies to demonstrate the same professionalism, precision, and customer care for both local and long-distance moves. They are time-bound,  handle every item with care and protect even one piece of furniture with proper padding and equipment.</p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/furniture-mover-1.jpg" alt="movers to move furniture" width={600} height={400} className="w-full rounded-2xl object-cover shadow-lg max-w-full h-auto"/>
                </div>

                {/* Right Content */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Why professional furniture movers:</h3>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Skilled and Trained Movers​</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Protective Packing and Handling</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Specialised in Office and House furniture moving</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Flexible Scheduling</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Local and Long-Distance Service</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Transparent Pricing with No Hidden Fees</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-18">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Local Vs Long Distance Furniture Movers</h2>
                    <p className="text-gray-700 leading-relaxed">Local furniture movers are best suited for moves within the same city, including home renovations, furniture replacement, or rearranging your space. They provide same-day service and can navigate tight spaces or stairs.</p>
                    <p className="text-gray-700 leading-relaxed">Long-distance furniture movers are best for moving your home across Canada, whether you are going to another province or city. They can pack your things safely, provide insurance, and let you track your move with GPS if you want. They also help take apart and put together furniture, pack fragile items in special boxes, and offer storage if you need it.​</p>
                </div>
                <div className="flex-1">
                    <Image src="/furniture-mover-2.jpg" alt="furniture moving service" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/furniture-mover-3.jpg" alt="office furniture movers" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Home  Vs Office Furniture Moving Service</h2>
                    <p className="text-gray-700 leading-relaxed">Office furniture moving services differ from home in scale, logistics, and operational requirements. They require expertise to handle bulky desks, filing cabinets, servers, sensitive electronics, and modular workstations. They also involve tight timelines, minimal workflow disruption, and specific permissions or certifications. In contrast, home movers focus on protecting fragile items, providing personalised packing, and accommodating family schedules. At Shiftrix, we manage both office and home furniture moves.</p>
                </div>

            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why Choose Shiftrix for Furniture Moving?</h2>
                <p className="text-gray-600">We deliver comprehensive solutions for seamless furniture relocations with flexible scheduling and transparent pricing. Our skilled furniture movers have the expertise to manage every type of furniture, from heavy pianos to delicate desks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <div className="text-xl font-semibold text-indigo-600 mb-2">Comprehensive Solutions</div>
                    <p className="text-gray-700">Tailored services for full offices or homes, from one piece of furniture to complete relocations—no matter the scale.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <div className="text-xl font-semibold text-indigo-600 mb-2">Secure Packaging and Handling</div>
                    <p className="text-gray-700">Specialised Handling: Office desks, cubicles, electronics, or home pianos—precision packing protects every item.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <div className="text-xl font-semibold text-indigo-600 mb-2">Disassembly & Reassembly</div>
                    <p className="text-gray-700">Expert teams safely dismantle complex furniture such as beds, desks, and cubicles, then reassemble them at your new space for a perfect setup.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <div className="text-xl font-semibold text-indigo-600 mb-2">Skilled Team</div>
                    <p className="text-gray-700">With years of experience, we plan, organise, and look after the entire move, relieve stress and ensure your peace of mind.</p>
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
              title="How do you move heavy furniture safely?"
              content={`The safest way is to hire a professional to move your heavy furniture. Because trained movers use proper techniques, tools, and equipment to protect both your furniture and your home, they arrive with dollies, sliders, lifting straps, and padded blankets to move items efficiently and prevent damage. They also plan the route, clear obstacles, and coordinate team lifting to move bulky pieces smoothly through tight spaces, stairs, and doorways.`}
            />
            <FaqSection
              title="Can you book movers to move furniture around your house in Calgary?"
              content={`Yes, you can book to rearrange furniture within your house, such as moving items between rooms or levels. Like Shiftrix and others, moving companies offer in-home or intra-building furniture-moving services, including disassembly, safe handling of heavy items through stairs/doorways, and reassembly. These services are also flexible, often available same-day, and focus on protecting floors and walls during short-distance rearrangements.`}
            />
        </div>
    </section>

    </>
  );
}
