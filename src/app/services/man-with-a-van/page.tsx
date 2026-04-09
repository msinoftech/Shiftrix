import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

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
        "@id": `${BASE_URL}/services/man-with-a-van/#webpage`,
        "url": `${BASE_URL}/services/man-with-a-van`,
        "name": `Man With a Van Moving Service in Calgary | ${APP_NAME}`,
        "isPartOf": {"@id": `${BASE_URL}/services/man-with-a-van/#website`},
        "description": "Need a man with a van in Calgary? Shiftrix handles single items, small loads & student studio moves — fast, affordable & always on time. Book today.",
        "inLanguage": "en-CA",
        "breadcrumb": {"@id": `${BASE_URL}/services/man-with-a-van/#breadcrumb`}
    },
    {
        // 3. Breadcrumb List
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
            "name": "man with a van"
        }
        ]
    },
    {
        // 4. Specific Service Definition (Man with a van)
        "@type": "Service",
        "serviceType": "Man With A Van",
        "name": `Man With a Van Moving Service in Calgary | ${APP_NAME}`,
        "description": "Need a man with a van in Calgary? Shiftrix handles single items, small loads & student studio moves — fast, affordable & always on time. Book today.",
        "url": `${BASE_URL}/services/man-with-a-van`,
        "provider": {
        "@type": "MovingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}/services/man-with-a-van`,
        "logo": `${BASE_URL}/shiftrix-logo.png`
        },
        "areaServed": [
          {"@type": "Place", name: "Calgary" },
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Man with a van service offerings",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "same-day or scheduled moves"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "packing and unpacking"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "furniture assembly and disassembly"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "single-item delivery"}}
        ]
        }
    },
    {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/services/man-with-a-van#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a man with a van moving service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Collectively, a driver, a van, or a small truck is known as &apos;man with a van&apos;. It is typically a flexible, budget-friendly moving option for smaller jobs, such as moving a few pieces of furniture, a single room, or a small apartment. They also offer a workforce for loading and unloading on your demand."
            }
          },
          {
            "@type": "Question",
            "name": "Do I have to prepare for 'a man with a van'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if you hire only a driver and a loading truck. Although Man with a Van Service, like Shifrix, charges an additional fee for its workforce. Otherwise, a 2-mover and a van service is the best choice. They can manage everything, including disassembling, packing, loading, unloading, and reassembling your belongings, or assisting you with this."
            }
          },
        ]
    }
    ]
};
 
export default function ManWithVanPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="man-with-a-van-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold pb-12">Man With A Van</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="relative">
                    <Image src="/man-with-van-mover.jpg" alt="man with a van moving service in Calgary" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="space-y-3">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">Man With a Van Moving Service in Calgary</div> 
                    <h2 className="text-xl md:text-2xl font-bold">When One Van Is All the Move You Need</h2>
                    <p>Calgary is always moving. But sometimes people don't need a full-scale operation and shouldn't have to pay for one, such as upgrading the space and passing heirlooms from one home to another.</p>
                    <p>For that, Shiftrix's man with a van moving service in Calgary is special for these moments. We come, we handle your items with care, and we get the job done — cleanly, quickly, and without the overhead of a large crew you don't need.</p>
                    <p>Whether you're moving a single sectional sofa, hauling a heavy dining table across the city, or setting up your very first studio space, our man and van moving service in Calgary gives you the exact level of support your situation calls for — nothing more, nothing less.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Content */}
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

                {/* Right Content */}
                <div className="relative">
                    <Image src="/man-with-van-mover-1.jpg" alt="man with a van moving" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>

            </div>
        </div>
    </section>

    <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-18">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                    <Image src="/man-with-van-mover-2.jpg" alt="man and van services" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">A Service Scoped to What You Actually Need</h2>
                    <p>We know, not every service is the right fit for every move — and we'll be honest with you about that. If you're looking for the entire household relocation, residential movers are the right solution. Similarly, choose the furniture movers for your valuable furniture. But for the in-between moments — the single pickups, the awkward furniture deliveries that stress you out for no reason — this is exactly what we built.</p>
                    <p>Calgary deserves a man with a van moving service that actually shows up like a professional. That's the standard Shiftrix holds itself to, every single time.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-1 md:order-2 flex-1">
                    <Image src="/man-with-van-mover-3.jpg" alt="Reliable man with a van Services" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-2 md:order-1 flex-1 space-y-3">
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

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            
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

    <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="rounded-3xl bg-white drop-shadow-lg py-12 px-4 sm:px-6 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="relative text-center space-y-3 pb-8">
                <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
                <FaqSection
                title="What is a man with a van moving service?"
                content={`Collectively, a driver, a van, or a small truck is known as "man with a van". It is typically a flexible, budget-friendly moving option for smaller jobs, such as moving a few pieces of furniture, a single room, or a small apartment. They also offer a workforce for loading and unloading on your demand.`}
                />
                <FaqSection
                title="Do I have to prepare for &apos;a man with a van&apos;?"
                content={`Yes, if you hire only a driver and a loading truck. Although Man with a Van Service, like Shifrix, charges an additional fee for its workforce. Otherwise, a 2-mover and a van service is the best choice. They can manage everything, including disassembling, packing, loading, unloading, and reassembling your belongings, or assisting you with this.`}
                />
            </div>           
        </div>
    </section>
    </>
  );
}