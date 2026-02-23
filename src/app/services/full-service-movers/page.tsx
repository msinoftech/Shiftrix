import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Full-Service Moving Company in Calgary",
    description: "Shiftrix, one of the leading full-service moving companies, provide custom solutions tailored to your needs for a single piece of furniture, a small apartment, or a large home.",
    keywords: ["full-service moving companies", "full service movers", "best full-service moving companies", "full-service packing and moving companies", "local full-service movers", "full-service local moving companies", "full service movers and packers", "full service relocation"],
    alternates: {
        canonical: `${BASE_URL}/services/full-service-movers`,
      },
    openGraph: {
      title: "Full-Service Moving Company in Calgary",
      description: "Shiftrix, one of the leading full-service moving companies, provide custom solutions tailored to your needs for a single piece of furniture, a small apartment, or a large home.",
      url: `${BASE_URL}/services/full-service-movers`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/full-service-mover.jpg`,
          width: 1200,
          height: 630,
          alt: "Full-Service Moving Company in Calgary",
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Full-Service Moving Company in Calgary",
      description: "Shiftrix, one of the leading full-service moving companies, provide custom solutions tailored to your needs for a single piece of furniture, a small apartment, or a large home.",
      images: [`${BASE_URL}/full-service-mover.jpg`],
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
        "@id": `${BASE_URL}/services/full-service-movers/#webpage`,
        "url": `${BASE_URL}/services/full-service-movers`,
        "name": "Full-Service Moving Company in Calgary",
        "isPartOf": {"@id": `${BASE_URL}/services/full-service-movers/#website`},
        "description": "Shiftrix, one of the leading full-service moving companies, provide custom solutions tailored to your needs for a single piece of furniture, a small apartment, or a large home.",
        "inLanguage": "en-CA",
        "breadcrumb": {"@id": `${BASE_URL}/services/full-service-movers/#breadcrumb`}
    },
    {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/full-service-movers/#breadcrumb`,
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
            "name": "full services movers"
        }
        ]
    },
    {
        "@type": "Service",
        "serviceType": "Full-Service Moving Company",
        "name": "Full-Service Moving Company in Calgary",
        "description": "Shiftrix, one of the leading full-service moving companies, provide custom solutions tailored to your needs for a single piece of furniture, a small apartment, or a large home.",
        "url": `${BASE_URL}/services/full-service-movers`,
        "provider": {
        "@type": "MovingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}/services/full-service-movers`,
        "logo": `${BASE_URL}/shiftrix-logo.png`
        },
        "areaServed": [
          {"@type": "City", "name": "Calgary"},
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Full-Service Moving Company Offerings",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Office Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Retail Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Warehouse Moving"}}
        ]
        }
    }
    ]
};

export default function FullServiceMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="full-service-movers-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-6 md:pt-6 lg:pt-6">
            <h1 className="text-3xl md:text-4xl font-bold pb-12 text-gray-900">Full Service Movers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/full-service-mover.jpg" alt="full-service moving companies" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold pb-6 text-gray-900">Full-Service Moving Company - All in One Place</h2>
                    <p className="text-gray-700 leading-relaxed">Whether you’re relocating a single piece of furniture, a small apartment, or a large home, Shiftrix, one of the leading full-service moving companies, offers custom solutions tailored to your needs in Calgary. With our friendly, professional team, you’ll experience a smooth, stress-free relocation that stands out from the rest.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            {/* Heading Section */}
            <div className="mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why Are Full-Service Packing and Moving Companies More Friendly?</h2>
                <p className="text-gray-600">Since they manage every stage of the move—from packing and transportation to unpacking—they spend more time understanding your needs and easing your stress.  Their teams often handle belongings as if they were their own, offering advice, reassurance, and helpful coordination along the way.</p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/full-service-mover-4.jpg" alt="best full-service moving companies" width={600} height={400} className="w-full rounded-2xl shadow-lg max-w-full object-cover h-auto"/>
                </div>

                {/* Right Content */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Reasons to Hire Full-Service Movers and Packers in Calgary:</h3>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Stress-Free Moving Experience</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Time Savings</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Safe and Secure Packing</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Reliable Transport for Local and Long Distance</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Insurance and Liability Protection</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Flexible and customised to your requirements</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Convenience for Every Situation</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-18">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Hiring of A Local Full-Service Mover</h2>
                    <p className="text-gray-700 leading-relaxed">The smartest way to enjoy a smooth and stress-free relocation is to hire a professional who knows your area well, ensuring quick routes, safe handling, and timely delivery of your belongings. Additionally, if he is a Local Full-Service Mover, you can focus on settling into your new home. He will handle every aspect of your move, including all necessary supplies (boxes, tape, packing materials, etc.).​</p>
                </div>
                <div className="flex-1">
                    <Image src="/full-service-mover-1.jpg" alt="full-service packing and moving companies" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/full-service-mover-3.jpg" alt="full-service local moving companies" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">How Differ from the Partial or Other Moving Services</h2>
                    <p className="text-gray-700 leading-relaxed">Partial or standard moving services may be limited to transport, loading, or unloading. That means they handle only transport; you pack your belongings. Or you hire them only for loading and unloading. They work for you or with your assistance.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why choose Shiftrix?</h2>
                <p className="text-gray-600">Choose Shiftrix for the confidence of working with one of the best full-service moving companies, focused on safe, seamless, and stress-free relocations. Our expert team handles everything for a smooth moving experience, from packing to delivery.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Expertly End-to-End Handling</h3>
                    <p className="text-gray-700">We manage every stage of your move with perfection, from packing and loading to transportation, unloading, and setup.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Time-Savvy and Hassle-Free</h3>
                    <p className="text-gray-700">Save hours of packing and planning with us; you can focus on work, family, and your new beginning.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Safe and Reliable</h3>
                    <p className="text-gray-700">We use quality packing materials, trained crews, and secure transport to protect your belongings and keep your move on schedule.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Customised Services for Every Move</h3>
                    <p className="text-gray-700">Shiftrix customises moving solutions for small apartments, large homes, and offices to fit your needs, budget, and timeline.</p>
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
              title="What do you mean by a full-service mover?"
              content={`Full-service movers manage every stage of the move—from packing and transportation to unpacking and reassembly. They allow you focus just on settling into your new home.`}
            />
            <FaqSection
              title="Is Shiftrix a full-service moving company in Calgary?"
              content={`Yes, Shiftrix is one of the leading full-service moving companies in Calgary, offering custom solutions tailored to your needs, whether you’re relocating a single piece of furniture, a small apartment, an office or a large home.`}
            />
            <FaqSection
              title="Is it a good idea to book a full-service mover?"
              content={`Yes, hiring a full-service mover is often a good idea, especially if you need to move quickly. These moving companies handle packing, loading, moving your things, unloading, and sometimes even unpacking. This saves you time and effort and reduces the risk of things breaking or someone getting hurt.`}
            />
        </div>
    </section>

    </>
  );
}
