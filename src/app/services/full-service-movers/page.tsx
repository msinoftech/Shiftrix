import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import { FaqSection } from "@/components/FaqSection";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import MovingForm from "@/components/movingForm";
const { phone } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

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

const faqItems = [
    {
        title: "What does a full-service moving company actually do?",
        content: "A full-service moving company manages the entire relocation process on your behalf — including packing, loading, transportation, unloading, and unpacking. You are not required to handle any part of the move yourself.",
    },
    {
        title: "Is Shiftrix a full-service moving company in Calgary?",
        content: "Yes. Shiftrix provides full-service moving in Calgary and the surrounding areas. Whether you are relocating to a single-bedroom apartment, a large family home, or a corporate space, we deliver end-to-end moving solutions customised to your needs.",
    },
    {
        title: "Is hiring a full-service packing and moving company worth it?",
        content: "Absolutely. When you factor in the time, physical effort, risk of damage, and cost of sourcing your own materials, engaging a full-service packing and moving company typically delivers better value and a significantly smoother experience — particularly for large or complex moves.",
    },
    {
        title: "How far in advance should I book a full-service moving solution?",
        content: "At least two to four weeks in advance, especially during peak moving seasons (spring and summer).  A grace period for planning and preparation always leads to a smoother move, and it is also budget-friendly. However, we accommodate last-minute requests whenever possible.",
    },
];

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${BASE_URL}/services/full-service-movers/#webpage`,
            "url": `${BASE_URL}/services/full-service-movers`,
            "name": `Full Service Moving Company in Calgary | ${APP_NAME}`,
            "description": "Shiftrix is one of the best full-service moving companies in Calgary. We handle packing, loading, transport, and unpacking — so you don't have to. Get a free quote today.",
            "isPartOf": {
              "@id": `${BASE_URL}/#website`
            },
            "about": {
              "@id": `${BASE_URL}/#business`
            },
            "mainEntity": {
              "@id": `${BASE_URL}/services/full-service-movers/#service`
            },
            "breadcrumb": {
              "@id": `${BASE_URL}/services/full-service-movers/#breadcrumb`
            },
            "hasPart": {
              "@id": `${BASE_URL}/services/full-service-movers/#faq`
            },
            "inLanguage": "en-CA"
        },
        {
            "@type": "Service",
            "@id": `${BASE_URL}/services/full-service-movers/#service`,
            "name": `Full Service Moving Company in Calgary | ${APP_NAME}`,
            "serviceType": "Full Service Moving",
            "description": "Shiftrix is one of the best full-service moving companies in Calgary. We handle packing, loading, transport, and unpacking — so you don't have to. Get a free quote today.",
            "url": `${BASE_URL}/services/full-service-movers`,
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
            "category": "Full Service Moving",
            "mainEntityOfPage": {
              "@id": `${BASE_URL}/services/full-service-movers/#webpage`
            }
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
                "name": "Full Service Movers",
                "item": `${BASE_URL}/services/full-service-movers`
              }
            ]
        },

        {
            "@type": "FAQPage",
            "@id": `${BASE_URL}/services/full-service-movers/#faq`,
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

export default function FullServiceMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="full-service-movers-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <PageHeader
      eyebrow={{ from: "Calgary", to: "Full Service Movers" }}
      heading="Full Service Moving Company in Calgary"
      paragraphs={[
        <em key="lead" className="font-bold text-gray-900">Complete, End-to-End Moving — All Under One Roof</em>,
        "When it comes to relocating your home or office, nothing beats the convenience of a true full-service moving experience. At Shiftrix, we take complete ownership of your move — from carefully packing every item to delivering and setting it up at your new location. Whether you're moving a single room or an entire property, our team delivers a seamless, stress-free relocation tailored precisely to your needs in Calgary and the surrounding areas.",
        "As one of the leading full-service moving companies in Calgary, Shiftrix combines trained professionals, premium packing materials, and reliable transport to ensure your belongings arrive safely and on schedule — every time.",
      ]}
      cta={{
        href: `${BASE_URL}/contact-us`,
        label: "Get a free quote",
        ariaLabel: "Get a Free Quote full-service movers",
      }}
      image={{
        src: "/full-service-mover.jpg",
        alt: "full-service packing and moving company",
        width: 600,
        height: 400,
      }}
    />

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Content */}
                <div className="relative">
                    <Image src="/full-service-mover-4.jpg" alt="Full Service Moving Company in Calgary" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>

                {/* Right Image */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Why Choose a Full-Service Packing and Moving Company?</h2>
                    <p><strong>Choosing a full-service packing and moving company over a partial or self-managed move offers clear advantages:</strong></p>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Completely Stress-Free:</strong> The team manages every logistical detail. You are not required to lift a box, source packing supplies, or coordinate transport.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Significant Time Savings:</strong> Professional packers work efficiently and systematically, completing in hours what may take you days on your own.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Safer Handling of Your Belongings:</strong> Crews are trained in proper packing techniques and use quality materials to protect fragile, heavy, and high-value items.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Fully Insured and Accountable:</strong> Reliable companies like Shiftrix carry full liability coverage, giving you peace of mind throughout the relocation journey.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Customised to Your Timeline and Budget:</strong> No two moves are alike. Moving plan built around your specific schedule, property size, and budget — no unnecessary extras.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <section className="relative py-10 md:py-20">
        <div className="container mx-auto px-4 space-y-10 md:space-y-18">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Content */}
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">What Is Full Service Moving?</h2>
                    <p>Full-service moving means you hand off every stage of the relocation to a dedicated team of experts. Unlike standard transport-only options, a full-service packing and moving company handles the entire process on your behalf:</p>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Packing</strong> — All items are carefully wrapped and packed using industry-grade materials</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Loading</strong> — Trained movers securely load belongings</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Transportation</strong> — Secure, clean, insured transport to your new location</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Unloading</strong> — No rushing, expertly offloading at your destination</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Unpacking & Setup</strong> — Items are placed and assembled as directed</p>
                    </div>

                    <p>This comprehensive approach means zero disruption to your daily routine. You focus on your new beginning — Your team handles everything else.</p>

                </div>
                {/* Right Content */}
                <div className="flex-1">
                    <Image src="/full-service-mover-1.jpg" alt="full-service moving and packing service in Calgary" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Content */}
                <div className="relative">
                    <Image src="/full-service-mover-3.jpg" alt="best full-service moving companies" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* Right Content */}
                <div className="flex-1 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold">Full Service Moving vs. Partial Moving: What's the Difference?</h2>
                    <p>Many customers assume all moving companies offer the same scope of work. In reality, there is a significant difference between partial and full-service moving.</p>
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
            </div>
        </div>
    </section>

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Why Shiftrix Is One of the Best Full-Service Moving Companies in Calgary?</h2>
                <p>When evaluating the best full-service moving companies, customers consistently look for reliability, transparency, and genuine care for their belongings. Shiftrix delivers on all three.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Expert End-to-End Management</h3>
                    <p>We oversee every phase of your move with precision and accountability. Nothing is left to chance — from the first box packed to the final item placed in your new space.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Trained, Professional Crews</h3>
                    <p>Our movers are background-checked, experienced, and committed to treating your home and possessions with the utmost respect.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Premium Packing Materials, Safe and Reliable</h3>
                    <p>We rely on quality packing materials. Such as boxes, tape, bubble wrap, furniture blankets, and specialty materials to protect every delicate item and keep your belongings safe throughout the move.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Transparent, Upfront Pricing</h3>
                    <p>No broker fee, no commission, we provide detailed quotes with no hidden fees. What you see is what you pay.</p>
                </div>
                
            </div>
        </div>
    </section>

    <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl dark-sec bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-700 text-white shadow-xl">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 items-center">
                    {/* left Content */}
                    <div className="space-y-6 max-w-xl">
                        <div className="space-y-3 text-white">
                            <p className="text-sm font-semibold text-indigo-200 uppercase">Free Full Service Movers quote</p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Get a Free and No-Obligation Quote</h2>
                            <p>Move with a clear, guaranteed price instead of an estimate. Send us the details, and we will reach out to you soon, usually within one hour.</p>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Final price sealed in writing with details before you okay.",
                                "Calgary full service movers are willing to talk it through.",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-indigo-50">
                                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="leading-snug">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href={phoneHref} aria-label="Call Shiftrix for a full service movers quote" className="inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm transition hover:bg-white/15">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-indigo-400 text-white">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                </svg>
                            </span>
                            <span className="flex flex-col text-left">
                                <span className="text-xs text-indigo-200">Prefer to talk?</span>
                                <span className="text-sm font-semibold tracking-wide">+1 (403) 472-9110</span>
                            </span>
                        </Link>
                    </div>
                    
                    {/* right Content */}
                    <div className="w-full lg:max-w-md lg:ml-auto">
                        <div className="rounded-xl bg-white text-slate-900 shadow-2xl px-5 py-6 sm:px-6 sm:py-7">
                            <div className="mb-5 space-y-1">
                                <h3 className="text-xl font-bold leading-tight">Request your free quote</h3>
                                <p className="text-sm text-slate-600">Quick form. No hidden charges.</p>
                            </div>
                            <MovingForm service="full-service-movers" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                <div className="relative text-center pb-8 space-y-3">
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
