import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: "Best Piano Moving Services in Calgary",
    description: "Our professional piano movers ensure safe, efficient moves in condos, apartments, and homes while using specialised equipment and secure transport.",
    keywords: ["piano movers", "professional piano movers", "local piano movers", "piano movers cost"],
    alternates: {
        canonical: `${BASE_URL}/services/piano-movers`,
    },
    openGraph: {
      title: "Best Piano Moving Services in Calgary",
      description: "Our professional piano movers ensure safe, efficient moves in condos, apartments, and homes while using specialised equipment and secure transport.",
      url: `${BASE_URL}/services/piano-movers`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/piano-mover-2.jpg`,
          width: 1200,
          height: 630,
          alt: "Best Piano Moving Services in Calgary",
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Piano Moving Services in Calgary",
      description: "Our professional piano movers ensure safe, efficient moves in condos, apartments, and homes while using specialised equipment and secure transport.",
      images: [`${BASE_URL}/piano-mover-2.jpg`],
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
        "@id": `${BASE_URL}/services/piano-movers/#webpage`,
        "url": `${BASE_URL}/services/piano-movers`,
        "name": "Best Piano Moving Services in Calgary",
        "isPartOf": {"@id": `${BASE_URL}/services/piano-movers/#website`},
        "description": "Our professional piano movers ensure safe, efficient moves in condos, apartments, and homes while using specialised equipment and secure transport.",
        "inLanguage": "en-CA",
        "breadcrumb": {"@id": `${BASE_URL}/services/piano-movers/#breadcrumb`}
    },
    {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/piano-movers/#breadcrumb`,
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
            "name": "piano movers"
        }
        ]
    },
    {
        "@type": "Service",
        "serviceType": "Piano Movers",
        "name": "Best Piano Moving Services in Calgary",
        "description": "Our professional piano movers ensure safe, efficient moves in condos, apartments, and homes while using specialised equipment and secure transport.",
        "url": `${BASE_URL}/services/piano-movers`,
        "provider": {
        "@type": "MovingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}/services/piano-movers`,
        "logo": `${BASE_URL}/shiftrix-logo.png`
        },
        "areaServed": [
          {"@type": "City", "name": "Calgary"},
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Best Piano Moving Services in Calgary Offerings",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Office Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Retail Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Warehouse Moving"}}
        ]
        }
    }
    ]
};

export default function PianoMoversPage() {
  return (
    <>
    <Script id="piano-movers-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-12">
        <div className="max-w-7xl mx-auto px-4 pt-6 sm:pt-6 md:pt-6 lg:pt-6">
            <h1 className="text-3xl md:text-4xl font-bold pb-12 text-gray-900">Piano Movers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/piano-mover-2.jpg" alt="piano movers" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold pb-6 text-gray-900">Expert Piano Movers in Calgary</h2>
                    <p className="text-gray-700 leading-relaxed">We use specialised equipment and secure transport to safely and efficiently move pianos in condos, apartments, and homes in Calgary and nearby areas. Our professional movers coordinate with your building access, parking, and schedule to ensure your instrument is protected at every stage.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why Choose Professional Piano Moving Services</h2>
                <p className="text-gray-600">Moving a piano is fundamentally different from standard furniture relocation—it requires specialised knowledge, precision equipment, and a team trained specifically for these delicate, heavy instruments. That Shiftrix brings to your piano&apos;s safety and your moving day success. </p>
            </div>
            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/piano-mover-3.jpg" alt="professional piano movers" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* Right Content */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">What Makes Our Piano Moving Service Complete</h3>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Both pickup and delivery locations assessment</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Wrapping & Protection</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Equipment & Tools</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Careful Disassembly & Reassembly</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700">Secure and Clean Transport </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-18">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">The Hidden Risks of Moving Pianos Without Professionals</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">Pianos are among the most challenging items to move safely, especially in tight homes or apartments. Instruments weighing 300–1,200 pounds require specialised care; otherwise, this can lead to cracked cases, misaligned mechanisms, damaged strings, and damage to property (walls, floors, and elevators).</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">Shiftrix professional piano movers eliminate these dangers using proper weight distribution, strategic padding, and stable transport.</p>
                </div>
                <div className="flex-1">
                    <Image src="/piano-movers.jpg" alt="local piano movers" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/piano-mover-1.jpg" alt="piano movers cost" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Shiftrix&apos;s Transparent Approach for Piano Moving in Calgary</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">In addition to the distance moved, the cost of moving a piano is estimated based on several key factors, including its type and weight, building type and access, parking access, etc. Unlike other companies&apos; low rates and hidden fees on moving day, Shiftrix commit to upfront transparency. We provide customised quotes that explain exactly what drives your piano movers&apos; cost—labour hours, equipment rental if needed, protective materials, elevator bookings, and travel distance—so you understand where your money goes.</p>
                </div>

            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why Choose Shiftrix for Your Piano Move?</h2>
                <p className="text-gray-600">Hiring Shiftrix means you can focus on the excitement of your new space while your piano is protected in the trusted hands of Calgary&apos;s best piano movers. We communicate clearly, plan, and execute with precision.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Expertise in Piano Moving</h3>
                    <p className="text-gray-700">Experienced team to handle and move each type of piano safely using proper techniques, equipment, and protective methods.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Condo & Apartment Specialists</h3>
                    <p className="text-gray-700">We navigate elevators, tight hallways, and loading docks smoothly without disrupting your living community.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Fully Insured & Documented</h3>
                    <p className="text-gray-700">Every move includes comprehensive insurance coverage for clients&apos; needs and documentation of conditions with photos before and after.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">No-Surprise Pricing</h3>
                    <p className="text-gray-700">We always offer transparent pricing based on your specific piano type, access location, and building requirements, with no hidden fees.</p>
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
              title="Is it expensive to move a piano?"
              content={`Yes, moving a piano is typically more expensive than moving other furniture because it is heavy, delicate, and requires specialised equipment and trained movers—piano movers charge based on the type, access difficulty, distance, and insurance coverage in Calgary.`}
            />
            <FaqSection
              title="Should you hire only a professional to move your piano?"
              content={`Yes, because pianos are incredibly heavy, delicate, and contain thousands of precise components. Trying can damage the piano, your house, or yourself. It is strongly recommended to hire professional piano movers rather than treating it as regular furniture.`}
            />
        </div>
    </section>
    </>
  );
}