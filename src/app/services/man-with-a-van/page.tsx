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
    title: `Man With a Van Moving Service in Calgary | ${APP_NAME}`,
    description: "Need a man with a van in Calgary? Shiftrix handles single items, small loads & student studio moves — fast, affordable & always on time. Book today.",
    keywords: ["man with a van moving service in Calgary", "man and van moving service Calgary", "man with a van", "man with a truck moving company"],
    alternates: {
        canonical: `${BASE_URL}/services/man-with-a-van`,
    },
    openGraph: {
      title: `Man With a Van Moving Service in Calgary | ${APP_NAME}`,
      description: "Need a man with a van in Calgary? Shiftrix handles single items, small loads & student studio moves — fast, affordable & always on time. Book today.",
      url: `${BASE_URL}/services/man-with-a-van`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/man-with-van-mover.jpg`,
          width: 1200,
          height: 630,
          alt: `Man With a Van Moving Service in Calgary | ${APP_NAME}`,
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Man With a Van Moving Service in Calgary | ${APP_NAME}`,
      description: "Need a man with a van in Calgary? Shiftrix handles single items, small loads & student studio moves — fast, affordable & always on time. Book today.",
      images: [`${BASE_URL}/man-with-van-mover.jpg`],
    },
    
};

const faqItems = [
    {
        title: "What is a man with a van moving service?",
        content: "Collectively, a driver, a van, or a small truck is known as man with a van. It is typically a flexible, budget-friendly moving option for smaller jobs, such as moving a few pieces of furniture, a single room, or a small apartment. They also offer a workforce for loading and unloading on your demand.",
    },
    {
        title:"Do I have to prepare for a man with a van?",
        content: "Yes, if you hire only a driver and a loading truck. Although Man with a Van Service, like Shifrix, charges an additional fee for its workforce. Otherwise, a 2-mover and a van service is the best choice. They can manage everything, including disassembling, packing, loading, unloading, and reassembling your belongings, or assisting you with this.",
    },
];

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${BASE_URL}/services/man-with-a-van/#webpage`,
            "url": `${BASE_URL}/services/man-with-a-van`,
            "name": `Man With a Van Moving Service in Calgary | ${APP_NAME}`,
            "description": "Need a man with a van in Calgary? Shiftrix handles single items, small loads & student studio moves — fast, affordable & always on time. Book today.",
            "isPartOf": {
              "@id": `${BASE_URL}/#website`
            },
            "about": {
              "@id": `${BASE_URL}/#business`
            },
            "mainEntity": {
              "@id": `${BASE_URL}/services/man-with-a-van/#service`
            },
            "breadcrumb": {
              "@id": `${BASE_URL}/services/man-with-a-van/#breadcrumb`
            },
            "hasPart": {
              "@id": `${BASE_URL}/services/man-with-a-van/#faq`
            },
            "inLanguage": "en-CA"
        },
        {
            "@type": "Service",
            "@id": `${BASE_URL}/services/man-with-a-van/#service`,
            "name": `Man With a Van Moving Service in Calgary | ${APP_NAME}`,
            "serviceType": "Man with a Van",
            "description": "Need a man with a van in Calgary? Shiftrix handles single items, small loads & student studio moves — fast, affordable & always on time. Book today.",
            "url": `${BASE_URL}/services/man-with-a-van`,
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
            "category": "Man with a Van",
            "mainEntityOfPage": {
              "@id": `${BASE_URL}/services/man-with-a-van/#webpage`
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${BASE_URL}/services/man-with-a-van/#breadcrumb`,
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
                "name": "Man With a Van",
                "item": `${BASE_URL}/services/man-with-a-van`
              }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${BASE_URL}/services/man-with-a-van/#faq`,
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
 
export default function ManWithVanPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="man-with-a-van-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <PageHeader
      eyebrow={{ from: "Calgary", to: "Man With a Van" }}
      heading="Man With a Van Moving Service in Calgary"
      paragraphs={[
        <strong key="lead" className="font-semibold text-gray-900">When One Van Is All the Move You Need</strong>,
        "Calgary is always moving. But sometimes people don't need a full-scale operation and shouldn't have to pay for one, such as upgrading the space and passing heirlooms from one home to another.",
        "For that, Shiftrix's man with a van moving service in Calgary is special for these moments. We come, we handle your items with care, and we get the job done — cleanly, quickly, and without the overhead of a large crew you don't need.",
        "Whether you're moving a single sectional sofa, hauling a heavy dining table across the city, or setting up your very first studio space, our man and van moving service in Calgary gives you the exact level of support your situation calls for — nothing more, nothing less.",
      ]}
      cta={{
        href: `${BASE_URL}/contact-us`,
        label: "Get a free quote",
        ariaLabel: "Get a Free Quote furniture movers",
      }}
      image={{
        src: "/man-with-van-mover.jpg",
        alt: "man with a van moving service in Calgary",
        width: 600,
        height: 400,
      }}
    />

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Content */}
                <div className="relative">
                    <Image src="/man-with-van-mover-1.jpg" alt="man with a van moving" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* Right Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">When Does Our Man With A Van Service Actually Cover You?</h2>
                    <p>Think of it as your on-demand moving muscle for the moments that don't fit neatly into any other category. Here's where our service genuinely shines</p>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Single-Item Pickups & Transport</h3>
                            <p>Ordered a custom piece from a local retailer or marketplace that doesn't deliver? Then the man with a truck moving company handles all logistics - picking it up, strapping it in safely, and delivering it exactly where you need it, without a scratch.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Student & Studio Moves</h3>
                            <p>Our van-and-moving-specialist combo is perfectly matched to the scale of a studio setup. We handle the heavy lifting so you can focus on what matters — getting settled in a new place, on day one.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Heavy & Awkward Items</h3>
                            <p>Our team arrives equipped with <strong>moving blankets, padded wraps, dollies, sliders, Heavy-duty straps, and loading ramps</strong> for pieces that aren't designed to be moved by hand. We regularly handle the kind of awkward, bulky pickups that won't fit in your car and cost too much to ship, such as <strong>Sectional sofas, modular couches, Oversized bed frames, and headboards.</strong> Just tell us the address.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <section className="relative py-10 md:py-20">
        <div className="container mx-auto px-4 space-y-10 md:space-y-18">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Content */}
                <div className="order-2 md:order-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">A Service Scoped to What You Actually Need</h2>
                    <p>We know, not every service is the right fit for every move — and we'll be honest with you about that. If you're looking for the entire household relocation, residential movers are the right solution. Similarly, choose the furniture movers for your valuable furniture. But for the in-between moments — the single pickups, the awkward furniture deliveries that stress you out for no reason — this is exactly what we built.</p>
                    <p>Calgary deserves a man with a van moving service that actually shows up like a professional. That's the standard Shiftrix holds itself to, every single time.</p>
                </div>
                
                {/* Right Image */}
                <div className="relative order-1 md:order-2">
                    <Image src="/man-with-van-mover-2.jpg" alt="man and van services" width={700} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex-1">
                    <Image src="/man-with-van-mover-3.jpg" alt="Reliable man with a van Services" width={700} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* Right Content */}
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Simple Process, When You Book</h2>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <p><strong>Just call and tell us what to move</strong> — Item type, pickup location, drop-off address, and preferred time.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <p><strong>Get a clear quote</strong> — No faint estimates. You'll know exactly what to pay, when.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <p><strong>We show up ready</strong> — On time, with the right equipment and a can-do approach.</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <p><strong>Your item arrives safely</strong> — Placed exactly where you want it, inspected together.</p>
                        </div>
                    </div>

                    <p>No confusion, no drama, from first call to final placement.</p>

                </div>
            </div>
        </div>
    </section>

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            
            <div className="text-center space-y-3 pb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Moving With A Trusted Man with A Van Service</h2>
                <p>Moving shouldn&apos;t be too stressful or too expensive with Man with A Van Service in Calgary. We are committed to excellence, better pricing, and friendly service. Book your next move with our skilled movers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Item 1 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="font-semibold">Transparent Pricing</h3>
                    <p>Precise, upfront estimates to avoid surprise charges.​ So you can plan your move confidently with us.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="font-semibold">Flexibility With Requirements</h3>
                    <p>Our services scale to your needs, whether for small or large loads, without wasting space or budget.​</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="font-semibold">Professional packing and protection</h3>
                    <p>Our skilled team use proven techniques and quality materials to safeguard furniture, electronics, and fragile items in transit.​</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="font-semibold">Scheduling and Communication</h3>
                    <p>We focus on on-time delivery and route planning, and provide tracking and proactive updates throughout your move.​</p>
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
                            <p className="text-sm font-semibold text-indigo-200 uppercase">Free Man With A Van quote</p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Get a Free and No-Obligation Quote</h2>
                            <p>Move with a clear, guaranteed price instead of an estimate. Send us the details, and we will reach out to you soon, usually within one hour.</p>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Final price sealed in writing with details before you okay.",
                                "Calgary man with a van are willing to talk it through.",
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

                        <Link href={phoneHref} aria-label="Call Shiftrix for a man with a van quote" className="inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm transition hover:bg-white/15">
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
                            <MovingForm service="man-with-van" />
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