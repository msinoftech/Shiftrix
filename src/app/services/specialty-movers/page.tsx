import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import { FaqSection } from "@/components/FaqSection";

const { logo } = contactInfo;

export const metadata: Metadata = {
    title: "Most Reliable Specialty Movers in Calgary | Shiftrix",
    description: "Calgary's trusted specialty movers for fine art, antiques, safes, pool tables & industrial equipment.Professional crew. Secured and climate-controlled transport. Get a free quote.",
    keywords: ["Specialty Movers in Calgary", "Specialty moving service Calgary", "affordable speciality movers"],
    alternates: {
        canonical: `${BASE_URL}/services/specialty-movers`,
    },
    openGraph: {
      title: "Most Reliable Specialty Movers in Calgary | Shiftrix",
      description: "Calgary's trusted specialty movers for fine art, antiques, safes, pool tables & industrial equipment.Professional crew. Secured and climate-controlled transport. Get a free quote.",
      url: `${BASE_URL}/services/specialty-movers`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/specialty-movers.jpg`,
          width: 1200,
          height: 630,
          alt: "Most Reliable Specialty Movers in Calgary | Shiftrix",
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Most Reliable Specialty Movers in Calgary | Shiftrix",
      description: "Calgary's trusted specialty movers for fine art, antiques, safes, pool tables & industrial equipment.Professional crew. Secured and climate-controlled transport. Get a free quote.",
      images: [`${BASE_URL}/specialty-movers.jpg`],
    },
    
};

const faqItems = [
    {
        title: "What Makes Us One of the Best Speciality Moving Companies?",
        content: "Shiftrix is one of the leading moving companies, recognised for expertise, certified professionals, and specialised equipment for safely handling delicate items. We provide transparent pricing, comprehensive insurance, climate-controlled transport, and personalised service to meet your needs.",
    },
    {
        title: "What items should I set aside during a move?",
        content: "Always keep essential items, such as medicines, keys, and Valuable items like necessary documents, jewellery, and laptops, with you. Items that require special handling, such as perishable foods that can spoil and contaminate other items, and liquids, including fuel, motor oil, and kerosene, can pose fire and safety risks.",
    },
];

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
        "@id": `${BASE_URL}/services/specialty-movers/#webpage`,
        "url": `${BASE_URL}/services/specialty-movers`,
        "name": "Most Reliable Specialty Movers in Calgary | Shiftrix",
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "description": "Calgary's trusted specialty movers for fine art, antiques, safes, pool tables & industrial equipment.Professional crew. Secured and climate-controlled transport. Get a free quote.",
        "inLanguage": "en-CA",
        "breadcrumb": {"@id": `${BASE_URL}/services/specialty-movers/#breadcrumb`}
    },
    {
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
            "name": "Specialty Movers",
            "item": `${BASE_URL}/services/specialty-movers`
        }
        ]
    },
    {
        "@type": "Service",
        "serviceType": "Specialty Movers",
        "name": `Most Reliable Specialty Movers in Calgary | ${APP_NAME}`,
        "description": "Calgary's trusted specialty movers for fine art, antiques, safes, pool tables & industrial equipment.Professional crew. Secured and climate-controlled transport. Get a free quote.",
        "url": `${BASE_URL}/services/specialty-movers`,
        "provider": {
        "@type": "MovingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}/services/specialty-movers`,
        "logo": `${logo}`
        },
        "areaServed": [
          { "@type": "City", name: "Calgary" },
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `Most Reliable Specialty Movers in Calgary | ${APP_NAME}`,
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Piano Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fine Art & Antiques Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Heavy Machinery & Industrial Equipment Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Fragile Collections & Heirlooms Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pool Tables & Billiard Equipment Moving"}},
        ]
        }
    },
    {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/services/specialty-movers/#faq`,
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

export default function SpecialtyMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="specialty-movers-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold pb-12">What Is Specialty Moving? Guide for Calgary Homeowners</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                    <Image src="/special-item-mover.jpg" alt="Specialty Movers in Calgary" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="space-y-3">
                    <p>Specialty moving is a custom relocation service that handles items beyond standard dimensions, of extraordinary weight, highly fragile, and incomparable. - "One-size-fits-all" moving simply doesn't work there. Such items require trained hands, specialist tools, and detailed planning before a single item leaves your home or business. Shiftrix offers precision specialty relocation services tailored to your specific item, address, and timeline.</p>
                    <p>Specialty items we move include: fine art and paintings, antique furniture and heirlooms, heavy safes and vault installations, pool tables and billiard sets, and large industrial or commercial equipment. Moving a piano? See our <Link href={`${BASE_URL}/services/piano-movers`} className="text-blue-600 hover:underline">dedicated piano movers</Link> for specialist piano relocation across Calgary.</p>

                    <Link href={`${BASE_URL}/contact-us`} className="inline-flex items-center gap-2 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-6 py-3 rounded-md font-medium shadow-lg transition-transform transform">Get a free quote</Link>
                </div>
            </div>
        </div>
    </section>

    <section className="relative">
        <div className="max-w-7xl mx-auto px-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="space-y-3 relative">
                    <h2 className="text-2xl md:text-3xl font-bold">Why Hire Specialty Movers in Calgary?</h2>
                    <p>Standard moving crews are trained for boxes and furniture — not for memorable and high-value items. The consequences of the wrong move go beyond the cost of hiring the right people from the start, meaning an irreplaceable loss or a structural repair bill. Whether you're relocating within communities like Brentwood, Mahogany, or Springbank Hill — or moving high-value items across the city — hire the right specialty moving company. Shiftrix delivers the precision your possessions deserve. Our every move begins with a site assessment, continues with a protection plan, and ends only when your item is confirmed safe and in position at its destination.</p>
                </div>
                <div className="relative">
                    <Image src="/special-item-mover-2.jpg" alt="specialty movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-18">
            <div className="text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Specialist Moves, Done Perfectly—Every Time</h2>
                <p> We show up our skills every time for every specialty, moving - Professional crew, concrete plan, no room for error.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="order-2 md:order-1">
                    <Image src="/special-item-mover-3.jpg" alt="Specialty Movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 relative space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Fine Art & Painting Moving </h2>
                    <p>Artwork is not cargo — it's a legacy. Shiftrix's fine art movers in Calgary use museum-standard protection protocols: acid-free tissue wrapping, custom foam-lined crates, padded corner guards, and temperature-controlled transport to prevent humidity damage. Whether you're moving a single canvas from a Mount Royal gallery wall or an entire private collection from Aspen Woods, our team handles every piece as if it were their own. We conduct pre-move condition reports and photograph each item before transit, giving you a complete record and genuine peace of mind from the moment we arrive.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3 relative">
                    <h2 className="text-2xl md:text-3xl font-bold">Safe moving & installation Calgary</h2>
                    <p>A floor safe or vault can easily weigh between 200 and 2,000 kilograms — far beyond what standard movers are equipped or insured to handle. Shiftrix's safe movers in Calgary use hydraulic dollies, stair-climbing equipment, and engineered rigging to relocate safes of any size without damage to the unit, your floors, or your staircase. We handle residential safe installation across communities like Saddleridge and Signal Hill, as well as commercial vault relocation in downtown Calgary and surrounding business districts. All lifts are conducted by trained, insured specialists who assess access routes before any movement begins.</p>
                </div>
                <div className="relative">
                    <Image src="/special-item-mover-1.jpg" alt="Speciality moving" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="order-2 md:order-1">
                    <Image src="/special-item-mover-4.jpg" alt="Specialty Movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 relative space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Moving A Pool Table </h2>
                    <p>Pool tables are deceptively complex: the slate bed alone can weigh over 400 kg, and the precise level of the playing surface must be preserved, or the table becomes unplayable. Shiftrix's pool table movers in Calgary disassemble every component — felt, slate, frame, and legs — transport each piece individually, and professionally reassemble and re-level the table at your new address. We serve homeowners throughout Auburn Bay, Evergreen, and Silverado, as well as commercial venues and recreation rooms across the city. Our team brings the tools, the know-how, and the patience to get your table playing perfectly again.</p>
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
                <FaqSection items={faqItems} />
            </div>
        </div>
    </section>
    </>
  );
}