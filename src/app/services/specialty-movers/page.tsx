import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Your Trusted Specialty Moving Services",
    description: "With over a decade of experience handling delicate instruments, fine art, and high-value belongings, Shiftrix is one of Calgary's leading professional speciality movers.",
    keywords: ["moving specialist", "specialty movers", "Specialty moving services", "Specialty moving company"],
    alternates: {
        canonical: `${BASE_URL}/services/specialty-movers`,
    },
    openGraph: {
      title: "Your Trusted Specialty Moving Services",
      description: "With over a decade of experience handling delicate instruments, fine art, and high-value belongings, Shiftrix is one of Calgary's leading professional speciality movers.",
      url: `${BASE_URL}/services/specialty-movers`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/specialty-movers.jpg`,
          width: 1200,
          height: 630,
          alt: "Your Trusted Specialty Moving Services",
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Your Trusted Specialty Moving Services",
      description: "With over a decade of experience handling delicate instruments, fine art, and high-value belongings, Shiftrix is one of Calgary's leading professional speciality movers.",
      images: [`${BASE_URL}/specialty-movers.jpg`],
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
        "@id": `${BASE_URL}/services/specialty-movers/#webpage`,
        "url": `${BASE_URL}/services/specialty-movers`,
        "name": "Your Trusted Specialty Moving Services",
        "isPartOf": {"@id": `${BASE_URL}/services/specialty-movers/#website`},
        "description": "With over a decade of experience handling delicate instruments, fine art, and high-value belongings, Shiftrix is one of Calgary's leading professional speciality movers.",
        "inLanguage": "en-CA",
        "breadcrumb": {"@id": `${BASE_URL}/services/specialty-movers/#breadcrumb`}
    },
    {
        // 3. Breadcrumb List
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/specialty-movers/#breadcrumb`,
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
            "name": "Specialty Movers"
        }
        ]
    },
    {
        // 4. Specific Service Definition (Specialty Movers)
        "@type": "Service",
        "serviceType": "Specialty Movers",
        "name": "Your Trusted Specialty Moving Services",
        "description": "With over a decade of experience handling delicate instruments, fine art, and high-value belongings, Shiftrix is one of Calgary's leading professional speciality movers.",
        "url": `${BASE_URL}/services/specialty-movers`,
        "provider": {
        "@type": "MovingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}/services/specialty-movers`,
        "logo": `${BASE_URL}/shiftrix-logo.png`
        },
        "areaServed": [
          { "@type": "City", name: "Calgary" },
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Your Trusted Specialty Moving Services",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Piano Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fine Art & Antiques Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Heavy Machinery & Industrial Equipment Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fragile Collections & Heirlooms Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pool Tables & Billiard Equipment Moving"}},
        ]
        }
    }
    ]
};

export default function SpecialtyMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="specialty-movers-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold pb-12">Specialty Movers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                    <Image src="/special-item-mover.jpg" alt="moving specialist" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Trusted Specialty Moving Services</h2>
                    <p>With over a decade of experience handling delicate instruments, fine art, and high-value belongings, Shiftrix is one of Calgary&apos;s leading professional speciality movers. Our team specialises in climate-controlled transport, expert padding, and safe handling to protect your instrument&apos;s integrity.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-18">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="space-y-3 relative">
                    <h2 className="text-2xl md:text-3xl font-bold">What is Speciality Moving?</h2>
                    <p>Speciality moving is a custom relocation service for items that require extra care, expertise, planning, handling methods or equipment. These items can be too fragile, heavy, valuable, or uniquely shaped for standard movers, such as pianos, antiques, artwork, safes, and sensitive equipment. Shiftrix has the experience, tools, and resources necessary to manage these unique moving requirements.</p>
                </div>
                <div className="relative">
                    <Image src="/special-item-mover-1.jpg" alt="specialty movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1">
                    <Image src="/special-item-mover-3.jpg" alt="Specialty moving services" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 relative space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Why Specialty Movers?</h2>
                    <p>Specialty movers use their experience, skilled teams, and the right tools to move delicate or complicated items safely and efficiently. This helps you avoid the stress, risk, and hard work of moving on your own. They pack and handle your fragile belongings with care, use the right equipment, and make sure everything arrives on time. Even the most challenging moves become smooth and easy.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                    <Image src="/special-item-mover-2.jpg" alt="Specialty moving company" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="space-y-3 relative">
                    <h2 className="text-2xl md:text-3xl font-bold">Comprehensive Specialty Moving Solutions in Calgary</h2>
                    <p>At Shiftrix, we&apos;re full-service speciality moving experts serving the Calgary community. Our process begins with a detailed consultation to understand your specific needs, followed by custom planning and professional execution.</p>
                    <h3 className="text-xl font-semibold">We have specialised equipment and climate-controlled transport for moving:</h3>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Piano</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Fine Art & Antiques</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Heavy Machinery & Industrial Equipment</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Fragile Collections & Heirlooms.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Pool Tables & Billiard Equipment, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3 relative">
                    <h2 className="text-2xl md:text-3xl font-bold">What is Speciality Moving?</h2>
                    <p>Speciality moving is a custom relocation service for items that require extra care, expertise, planning, handling methods or equipment. These items can be too fragile, heavy, valuable, or uniquely shaped for standard movers, such as pianos, antiques, artwork, safes, and sensitive equipment. Shiftrix has the experience, tools, and resources necessary to manage these unique moving requirements.</p>
                </div>
                <div className="relative">
                    <Image src="/special-item-mover-1.jpg" alt="Speciality moving" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="order-2 md:order-1">
                    <Image src="/special-item-mover-3.jpg" alt="Specialty Movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 relative space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Why Specialty Movers?</h2>
                    <p>Specialty movers use their experience, skilled teams, and the right tools to move delicate or complicated items safely and efficiently. This helps you avoid the stress, risk, and hard work of moving on your own. They pack and handle your fragile belongings with care, use the right equipment, and make sure everything arrives on time. Even the most challenging moves become smooth and easy.</p>
                </div>

            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center space-y-3 pb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Why Choose Shiftrix?</h2>
                <p>When you choose Shiftrix, you&apos;re hiring Calgary&apos;s most reliable professional movers to move your items. Our team combines decades of experience, specialised training, and genuine care for your possessions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Item 1 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Certification & Training</h3>
                    <p>Our team of movers holds specialised certifications in fine art and instrument transport and training in the latest handling techniques.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Climate-Controlled Protection</h3>
                    <p>All long-distance and speciality moves include temperature and humidity-controlled vehicles, protecting your belongings during relocation.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Customised Services for Every Move</h3>
                    <p>Shiftrix customises moving solutions for small apartments, large homes, and offices to fit your needs, budget, and timeline.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Skilled Team</h3>
                    <p>With years of experience, we plan, organise, and look after the entire move, relieve stress and ensure your peace of mind. </p>
                </div>
            </div>
        </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="rounded-3xl bg-white drop-shadow-lg py-12 px-4 sm:px-6 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Content */}
                <div className="relative space-y-3">
                    <div className="text-2xl md:text-3xl text-gray-900 font-bold">Plan Your Next Move with our team | Book Today</div>
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
                title="What Makes Us One of the Best Speciality Moving Companies?"
                content={`Shiftrix is one of the leading moving companies, recognised for expertise, certified professionals, and specialised equipment for safely handling delicate items. We provide transparent pricing, comprehensive insurance, climate-controlled transport, and personalised service to meet your needs.`}
                />
                <FaqSection
                title="What items should I set aside during a move?"
                content={`Always keep essential items, such as medicines, keys, and Valuable items like necessary documents, jewellery, and laptops, with you. Items that require special handling, such as perishable foods that can spoil and contaminate other items, and liquids, including fuel, motor oil, and kerosene, can pose fire and safety risks.`}
                />
            </div>
        </div>
    </section>
    </>
  );
}