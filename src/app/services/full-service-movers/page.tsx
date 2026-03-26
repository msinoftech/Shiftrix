import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
    title: `Full Service Moving Company in Calgary | ${APP_NAME}`,
    description: "Shiftrix is one of the best full-service moving companies in Calgary. We handle packing, loading, transport, and unpacking — so you don't have to. Get a free quote today.",
    keywords: ["full-service packing and moving company", "Full Service Moving Company in Calgary", "full-service moving and packing service in Calgary", "best full-service moving companies", "full-service moving and packing service in Calgary"],
    alternates: {
        canonical: `${BASE_URL}/services/full-service-movers`,
      },
    openGraph: {
      title: `Full Service Moving Company in Calgary | ${APP_NAME}`,
      description: "Shiftrix is one of the best full-service moving companies in Calgary. We handle packing, loading, transport, and unpacking — so you don't have to. Get a free quote today.",
      url: `${BASE_URL}/services/full-service-movers`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/full-service-mover.jpg`,
          width: 1200,
          height: 630,
          alt: `Full Service Moving Company in Calgary | ${APP_NAME}`,
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Full Service Moving Company in Calgary | ${APP_NAME}`,
      description: "Shiftrix is one of the best full-service moving companies in Calgary. We handle packing, loading, transport, and unpacking — so you don't have to. Get a free quote today.",
      images: [`${BASE_URL}/full-service-mover.jpg`],
    },
    
};

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
        "@type": "WebPage",
        "@id": `${BASE_URL}/services/full-service-movers#webpage`,
        "url": `${BASE_URL}/services/full-service-movers`,
        "name": `Full Service Moving Company in Calgary | ${APP_NAME}`,
        "description": "Shiftrix is one of the best full-service moving companies in Calgary. We handle packing, loading, transport, and unpacking — so you don't have to. Get a free quote today.",
        "keywords": "full-service packing and moving company, Full Service Moving Company in Calgary, full-service moving and packing service in Calgary, best full-service moving companies, full-service moving and packing service in Calgary",
        "isPartOf": {
            "@id": `${BASE_URL}/#website`
        },
        "about": {
            "@id": `${BASE_URL}/#organization`
        },
        "breadcrumb": {
            "@id": `${BASE_URL}/services/full-service-movers#breadcrumb`
        },
        "mainEntity": {
            "@id": `${BASE_URL}/services/full-service-movers#faq`
        }
        },
        {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/full-service-movers#breadcrumb`,
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
            "name": "Full Service Movers",
            "item": `${BASE_URL}/services/full-service-movers`
            }
        ]
        },
        {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/services/full-service-movers#faq`,
        "mainEntity": [
            {
            "@type": "Question",
            "name": "What does a full-service moving company actually do?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A full-service moving company manages the entire relocation process, including packing, loading, transportation, unloading, and unpacking. This allows customers to move without handling the physical and logistical challenges themselves."
            }
            },
            {
            "@type": "Question",
            "name": "Is hiring a full-service packing and moving company worth it?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. When you factor in the time, physical effort, risk of damage, and cost of sourcing your own materials, engaging a full-service packing and moving company typically delivers better value and a significantly smoother experience — particularly for large or complex moves."
            }
            },
            {
            "@type": "Question",
            "name": "Is Shiftrix a full-service moving company in Calgary?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Shiftrix provides full-service moving in Calgary and the surrounding areas. Whether you are relocating to a single-bedroom apartment, a large family home, or a corporate space, we deliver end-to-end moving solutions customised to your needs."
            }
            },
            {
            "@type": "Question",
            "name": "How far in advance should I book a full-service moving solution?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "It is recommended to book at least two to four weeks in advance, especially during peak moving seasons (spring and summer). Planning ahead ensures better availability and a smoother moving experience, although last-minute bookings may still be accommodated depending on availability."
            }
            }
        ]
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
            <h1 className="text-3xl md:text-4xl font-bold pb-12 text-gray-900">Full Service Moving Solution</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/full-service-mover.jpg" alt="full-service packing and moving company" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Full Service Moving Company in Calgary</h2>
                    <p className="text-gray-700 leading-relaxed font-bold"><i>Complete, End-to-End Moving — All Under One Roof</i></p>
                    <p className="text-gray-700 leading-relaxed">When it comes to relocating your home or office, nothing beats the convenience of a true full-service moving experience. At Shiftrix, we take complete ownership of your move — from carefully packing every item to delivering and setting it up at your new location. Whether you're moving a single room or an entire property, our team delivers a seamless, stress-free relocation tailored precisely to your needs in Calgary and the surrounding areas.</p>
                    <p className="text-gray-700 leading-relaxed">As one of the leading full-service moving companies in Calgary, Shiftrix combines trained professionals, premium packing materials, and reliable transport to ensure your belongings arrive safely and on schedule — every time.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why Choose a Full-Service Packing and Moving Company?</h2>
                    <p className="text-xl font-semibold mb-4">Choosing a full-service packing and moving company over a partial or self-managed move offers clear advantages:</p>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700"><strong>Completely Stress-Free:</strong> The team manages every logistical detail. You are not required to lift a box, source packing supplies, or coordinate transport.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700"><strong>Significant Time Savings:</strong> Professional packers work efficiently and systematically, completing in hours what may take you days on your own.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700"><strong>Safer Handling of Your Belongings:</strong> Crews are trained in proper packing techniques and use quality materials to protect fragile, heavy, and high-value items.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700"><strong>Fully Insured and Accountable:</strong> Reliable companies like Shiftrix carry full liability coverage, giving you peace of mind throughout the relocation journey.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700"><strong>Customised to Your Timeline and Budget:</strong> No two moves are alike. Moving plan built around your specific schedule, property size, and budget — no unnecessary extras.</p>
                    </div>

                </div>

                {/* Right Content */}
                <div className="flex justify-center">
                    <Image src="/full-service-mover-4.jpg" alt="Full Service Moving Company in Calgary" width={600} height={400} className="w-full rounded-2xl shadow-lg max-w-full object-cover h-auto"/>
                </div>
                
            </div>
        </div>
    </section>

    <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 space-y-18">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Content */}
                <div className="flex-1">
                    <Image src="/full-service-mover-1.jpg" alt="full-service moving and packing service in Calgary" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* Right Content */}
                <div className="flex-1 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">What Is Full Service Moving?</h2>
                    <p className="text-gray-700 leading-relaxed">Full-service moving means you hand off every stage of the relocation to a dedicated team of experts. Unlike standard transport-only options, a full-service packing and moving company handles the entire process on your behalf:</p>
                    
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700"><strong>Packing</strong> — All items are carefully wrapped and packed using industry-grade materials</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700"><strong>Loading</strong> — Trained movers securely load belongings</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700"><strong>Transportation</strong> — Secure, clean, insured transport to your new location</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700"><strong>Unloading</strong> — No rushing, expertly offloading at your destination</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-2 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p className="text-sm text-gray-700"><strong>Unpacking & Setup</strong> — Items are placed and assembled as directed</p>
                    </div>

                    <p>This comprehensive approach means zero disruption to your daily routine. You focus on your new beginning — Your team handles everything else.</p>

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Content */}
                <div className="flex-1 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Full Service Moving vs. Partial Moving: What's the Difference?</h2>
                    <p className="text-gray-700 leading-relaxed">Many customers assume all moving companies offer the same scope of work. In reality, there is a significant difference between partial and full-service moving.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200 overflow-hidden text-sm">
                            <thead className="bg-gray-100">
                                <tr className="bg-gray-300">
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Service</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Full Service Moving</th>
                                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Partial / Standard Moving</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr className="bg-gray-100">
                                    <td className="px-4 py-3 font-medium text-gray-800">Packing</td>
                                    <td className="px-4 py-3 text-gray-700">✅ Included</td>
                                    <td className="px-4 py-3 text-gray-700">❌ Customer responsibility</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="px-4 py-3 font-medium text-gray-800">Loading</td>
                                    <td className="px-4 py-3 text-gray-700">✅ Included</td>
                                    <td className="px-4 py-3 text-gray-700">✅ Included</td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="px-4 py-3 font-medium text-gray-800">Transport</td>
                                    <td className="px-4 py-3 text-gray-700">✅ Included</td>
                                    <td className="px-4 py-3 text-gray-700">✅ Included</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="px-4 py-3 font-medium text-gray-800">Unloading</td>
                                    <td className="px-4 py-3 text-gray-700">✅ Included</td>
                                    <td className="px-4 py-3 text-gray-700">✅ Included</td>
                                </tr>
                                <tr className="bg-gray-100">
                                    <td className="px-4 py-3 font-medium text-gray-800">Unpacking & Setup</td>
                                    <td className="px-4 py-3 text-gray-700">✅ Included</td>
                                    <td className="px-4 py-3 text-gray-700">❌ Customer responsibility</td>
                                </tr>
                                <tr className="bg-gray-200">
                                    <td className="px-4 py-3 font-medium text-gray-800">Supplies Provided</td>
                                    <td className="px-4 py-3 text-gray-700">✅ Yes</td>
                                    <td className="px-4 py-3 text-gray-700">❌ No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>With a full-service moving company like Shiftrix, you receive a truly hands-off experience. Partial services require you to invest your own time and effort — often with greater risk of damage and delays.</p>
                </div>

                {/* Right Content */}
                <div className="flex-1">
                    <Image src="/full-service-mover-3.jpg" alt="best full-service moving companies" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
        </div>
    </section>

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why Shiftrix Is One of the Best Full-Service Moving Companies in Calgary?</h2>
                <p className="text-gray-600">When evaluating the best full-service moving companies, customers consistently look for reliability, transparency, and genuine care for their belongings. Shiftrix delivers on all three.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Expert End-to-End Management</h3>
                    <p className="text-gray-700">We oversee every phase of your move with precision and accountability. Nothing is left to chance — from the first box packed to the final item placed in your new space.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Trained, Professional Crews</h3>
                    <p className="text-gray-700">Our movers are background-checked, experienced, and committed to treating your home and possessions with the utmost respect.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Premium Packing Materials, Safe and Reliable</h3>
                    <p className="text-gray-700">We rely on quality packing materials. Such as boxes, tape, bubble wrap, furniture blankets, and specialty materials to protect every delicate item and keep your belongings safe throughout the move.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-indigo-600 mb-2">Transparent, Upfront Pricing</h3>
                    <p className="text-gray-700">No broker fee, no commission, we provide detailed quotes with no hidden fees. What you see is what you pay.</p>
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
                        <div className="text-2xl text-gray-900 md:text-4xl font-bold">Plan Your Move with Shiftrix — Request a Free Quote Today</div>
                        <p className="mt-3">Ready to experience why Shiftrix is trusted as one of the best full-service moving companies in Calgary? Our crew is ready to build a custom moving plan around your timeline and requirements.</p>
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
              title="What does a full-service moving company actually do?"
              content={`A full-service moving company manages the entire relocation process on your behalf — including packing, loading, transportation, unloading, and unpacking. You are not required to handle any part of the move yourself.`}
            />
            <FaqSection
              title="Is Shiftrix a full-service moving company in Calgary?"
              content={`Yes. Shiftrix provides full-service moving in Calgary and the surrounding areas. Whether you are relocating to a single-bedroom apartment, a large family home, or a corporate space, we deliver end-to-end moving solutions customised to your needs.`}
            />
            <FaqSection
              title="Is hiring a full-service packing and moving company worth it?"
              content={`Absolutely. When you factor in the time, physical effort, risk of damage, and cost of sourcing your own materials, engaging a full-service packing and moving company typically delivers better value and a significantly smoother experience — particularly for large or complex moves.`}
            />
            <FaqSection
              title="How far in advance should I book a full-service moving solution?"
              content={`At least two to four weeks in advance, especially during peak moving seasons (spring and summer).  A grace period for planning and preparation always leads to a smoother move, and it is also budget-friendly. However, we accommodate last-minute requests whenever possible.`}
            />
        </div>
    </section>

    </>
  );
}
