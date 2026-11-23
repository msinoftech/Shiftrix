import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import { FaqSection } from "@/components/FaqSection";
import Link from "next/link";

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

const faqItems = [
    {
        title: "Approximately how much does it cost to book a long-distance mover?",
        content: "The average cost for long-distance moves (100 kilometres) in Calgary is $4,000-$5,500, depending on distance, weight, services provided, and any additional fees. Local, small moves can cost as little as $400 in, while long, significant moves can cost over $ 5,000.",
    },
    {
        title: "How to move household items hassle-free across Canada?",
        content: "Apart from creating a simple checklist for decluttering and packing, and setting key deadlines, such as utility changes and address updates, you should look for a trusted long-distance moving service, as professional movers use secure packing methods, organised inventories, and confirmed schedules to move your belongings safely and on time anywhere in Canada.",
    },
];

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${BASE_URL}/services/long-distance-movers/#webpage`,
            "url": `${BASE_URL}/services/long-distance-movers`,
            "name": "Long-distance Movers and Packers On A Budget",
            "description": "At Shiftrix, you will find what you are looking for in long-distance movers, whether you are a professional, a family, or a business, with packing, loading, and transport for even small loads.",
            "isPartOf": {
              "@id": `${BASE_URL}/#website`
            },
            "about": {
              "@id": `${BASE_URL}/#business`
            },
            "mainEntity": {
              "@id": `${BASE_URL}/services/long-distance-movers/#service`
            },
            "breadcrumb": {
              "@id": `${BASE_URL}/services/long-distance-movers/#breadcrumb`
            },
            "hasPart": {
              "@id": `${BASE_URL}/services/long-distance-movers/#faq`
            },
            "inLanguage": "en-CA"
        },
        {
            "@type": "Service",
            "@id": `${BASE_URL}/services/long-distance-movers/#service`,
            "name": "Long-distance Movers and Packers On A Budget",
            "serviceType": "Long-distance Moving",
            "description": "At Shiftrix, you will find what you are looking for in long-distance movers, whether you are a professional, a family, or a business, with packing, loading, and transport for even small loads.",
            "url": `${BASE_URL}/services/long-distance-movers`,
            "provider": {
              "@id": `${BASE_URL}/#business`
            },
            "areaServed": {
              "@type": "City",
              "name": "Calgary",
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": "Alberta"
              }
            },
            "category": "Long-distance Moving",
            "mainEntityOfPage": {
              "@id": `${BASE_URL}/services/long-distance-movers/#webpage`
            }
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
                "name": "Long-distance Movers",
                "item": `${BASE_URL}/services/long-distance-movers`
              }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${BASE_URL}/services/long-distance-movers/#faq`,
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

export default function LongDistanceMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="long-distance-movers-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-10 md:pb-20">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold pb-12">Long Distance Mover You Can Trust In Calgary</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* left Image */}
                <div className="flex-1">
                    <Image src="/long-distance-movers.jpg" alt="long distance movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* right Content */}
                <div className="flex-1 space-y-3">
                    <p>Whether you move a whole home or a business, or its part, out of Calgary. But managing the timelines, logistics, packing, and coordination across destinations becomes crucial. Why it matters to you to move with a skilled crew.</p>

                    <p>Shiftrix is a professional long-distance mover trusted by Calgary residents and businesses for full-service support, clear communication, transparent fees, and dependable delivery.</p>

                    <p>From Calgary to anywhere in Canada, our team handles your packing with care, loads your belongings securely, and transports them safely.</p>
                    <p>Choose Shiftrix and stay hassle-free.</p>

                    <Link href={`${BASE_URL}/contact-us`} className="inline-flex items-center gap-2 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-6 py-3 rounded-md font-medium shadow-lg transition-transform transform">Get a free quote</Link>
                </div>
            </div>
        </div>
    </section>

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="relative">
                    <Image src="/long-distance-movers-1.jpg" alt="best long distance movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>

                {/* Right Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Why We’re the Trusted Long-Distance Movers in Calgary.</h2>
                    <p>It is more than just delivering the boxes.  Our team makes a plan with demands, ensuring that the protection is high, and stays in touch for clear communication. At every step of the move, Calgarians feel how we are treating their belongings.</p>

                    <p>We shared every update from pickup to delivery, so the move stays predictable. </p>

                    <p>Shifrix's crew is known for professional packing, disassembly, reassembly, and secure loading for the miles ahead. </p>

                    <p>A clean estimate and clear timelines maintain trust throughout the journey; we do that.</p>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Trained Crews: Our team is fully prepared for long routes, handling each item with care from pickup to delivery.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Hassle-Free Throughout Moving: Our full-service includes disassembling, wrapping, protecting, loading, and reassembling your belongings, so setup at your new home is simple.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Ensuring Protection for Every Item: We pad, wrap, and secure everything professionally—for peace of mind throughout the journey.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Load Plans: We size the vehicle correctly, stack smartly, and unload carefully to help avoid delays and extra costs on long hauls.</p>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Packing Options: We choose the supply materials and methods that fit your move.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Scheduling That's Convenient for You: When availability allows, we accommodate tight windows and keep you updated at every step.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-10 md:py-20">
        <div className="container mx-auto px-4 space-y-18">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* left Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Long Distance Moving Services to Meet Your Budget and Time Requirements:</h2>
                    <p>When you choose Shiftrix, look at these options. We make it affordable and convenient for you.</p>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Shared Load</h3>
                            <p>A cost-effective option for smaller loads, maybe slower, where you share transportation space and costs.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Dedicated Long-Distance Moving</h3>
                            <p>When you reserve an entire truck for your belongings only. Find greater control over pickup schedules, transportation arrangements, and delivery timelines throughout the move.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Full-Service Long-Distance Moving</h3>
                            <p>This service simplifies long-distance moving for households and businesses, with our skilled team handling disassembly, packing, loading, transportation, unloading, and reassembly.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Partial Load Long-Distance Moving</h3>
                            <p>When your need is to move only selected items, such as furniture, appliances, and other boxes, rather than an entire household. It means you're paying only for the truck space that you need.</p>
                        </div>
                    </div>

                </div>
                {/* right Image */}
                <div className="relative">
                    <Image src="/long-distance-movers-2.jpg" alt="affordable long distance movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* left Image */}
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/alberta-pickup-areas-map.webp" alt="top long distance movers" width={600} height={400} className="w-full h-full object-center rounded-xl shadow-md object-cover"/>
                </div>
                {/* right Content */}
                <div className="order-1 md:order-2 flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">The Key Routes We Cover from Calgary</h2>
                    <p><b>Swiftly, speedily, and affordably,</b></p>
                    <p>We build a personalised plan and estimate tailored to specific needs, timeline, and budget for any household or business, from Calgary to any location in Canada!</p>
                    <p>No Way! Moving shouldn’t be a hassle—do it the smart way with Trusted Movers!</p>

                    <p><b>Pick Up Area:</b></p>
                    <ul className="flex flex-wrap gap-1">
                        <li className="bg-gray-100 rounded-md px-2 py-1">Calgary</li>
                        <li className="bg-gray-100 rounded-md px-2 py-1">Airdrie</li>
                        <li className="bg-gray-100 rounded-md px-2 py-1">Chestermere</li>
                        <li className="bg-gray-100 rounded-md px-2 py-1">Strathmore</li>
                        <li className="bg-gray-100 rounded-md px-2 py-1">Okotoks</li>
                        <li className="bg-gray-100 rounded-md px-2 py-1">Cochrane</li>
                        <li className="bg-gray-100 rounded-md px-2 py-1">Red Deer</li>
                        <li className="bg-gray-100 rounded-md px-2 py-1">Lethbridge</li>
                        <li className="bg-gray-100 rounded-md px-2 py-1">Edmonton</li>
                        <li className="bg-gray-100 rounded-md px-2 py-1">Medicine Hat</li>
                    </ul>

                    <p><b>Delivery Area:</b></p>
                    <ul className="flex flex-wrap gap-1">
                        <li className="bg-gray-100 rounded-md px-2 py-1">Edmonton</li>
                        <li className="bg-gray-100 rounded-md px-2 py-1">Toronto</li>
                        <li className="bg-gray-100 rounded-md px-2 py-1">Vancouver</li>
                        <li className="bg-gray-100 rounded-md px-2 py-1">Winnipeg</li>
                    </ul>  
                </div>
            </div>
        </div>
    </section>

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Calgaryian Rely on Us for Moving Long Distance </h2>
                <p>Whether it is a move to a nearby city or an interprovincial move, we make our comprehensive services convenient and affordable for individuals, families, and businesses. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Item 1 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Local and Full-Service Operation</h3>
                    <p>Our local crew offers everything you need, whether moving, packing, disassembling, loading, or more. If availability allows, we provide same-day long-distance moving service at no extra fee.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Transparent Pricing</h3>
                    <p>Clear, upfront estimates tailored to your inventory and route so you can plan confidently, with no surprise charges once finalized.​</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Flexible Options for Small and Large Loads</h3>
                    <p>For a few items to full household relocations, our long-distance moving service covers you. Pay only for the space your belongings have covered.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Reliable scheduling</h3>
                    <p>Our team follows the timelines and ensures the delivery within the deadline. And share updates to make the move process more predictable so that you can schedule your things as planned at the new location.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
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
            </div>
        </div>
    </section>

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="relative text-center space-y-3 pb-8">
                    <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-3">
                    <FaqSection items={faqItems} />
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
