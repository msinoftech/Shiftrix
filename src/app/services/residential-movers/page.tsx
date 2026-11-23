import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import { FaqSection } from "@/components/FaqSection";
import PageHeader from "@/components/PageHeader";
import MovingForm from "@/components/movingForm";

const { phone } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

const homeTypes = [
  {
    title: "Apartment & Condo Moves",
    description: "Calgary high-rises, low-rises, and inner-city condos.",
    points: [
      "Elevator booking coordination",
      "Lobby & corridor protection",
      "Pre-move parking permission",
      "Lift scheduling",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 21h16M6 21V6.2A1.2 1.2 0 017.2 5h5.6A1.2 1.2 0 0114 6.2V21" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 21V10.2A1.2 1.2 0 0115.2 9H19a1 1 0 011 1V21" />
        <path strokeLinecap="round" d="M8 9h2M8 13h2M8 17h2M16.5 13h1.5M16.5 17h1.5" />
      </svg>
    ),
  },
  {
    title: "Townhouse & Semi-Detached",
    description: "Calgary's growing townhouse communities, inside and out.",
    points: [
      "Narrow staircase expertise",
      "Balcony & patio item protection",
      "Move-day rule compliance",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 20.5V11.2L7.2 7.6 12 11.2v9.3M12 20.5V11.2l4.8-3.6 4.7 3.6v9.3M2.5 20.5h19" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.2 20.5v-3.2h2.2v3.2M15.6 20.5v-3.2H17.8v3.2" />
      </svg>
    ),
  },
  {
    title: "Detached House Moves",
    description: "From starter homes to large family estates across Calgary.",
    points: [
      "Full driveway access & loading",
      "Large furniture & appliances",
      "Garage & storage handling",
      "Garden & outdoor equipment",
      "Custom layout planning",
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 11.2 12 4l8.5 7.2V20a1 1 0 01-1 1h-5.2v-5.6H9.7V21H4.5a1 1 0 01-1-1v-8.8z" />
      </svg>
    ),
  },
];

export const metadata: Metadata = {
    title: `Residential Movers Calgary | Apartment, Condo & House Moves | ${APP_NAME}`,
    description: "Shiftrix provides professional residential moving services across Calgary — apartments, condos, and houses. Fully insured, transparent pricing, same-day availability. Free quote.",
    keywords: ["residential movers in Calgary", "Trusted residential moving services in Calgary for smooth relocation", "residential relocation services for house to move in calgary"],
    alternates: {
        canonical: `${BASE_URL}/services/residential-movers`,
    },
    openGraph: {
      title: `Residential Movers Calgary | Apartment, Condo & House Moves | ${APP_NAME}`,
      description: "Shiftrix provides professional residential moving services across Calgary — apartments, condos, and houses. Fully insured, transparent pricing, same-day availability. Free quote.",
      url: `${BASE_URL}/services/residential-movers`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/condo-movers.jpg`,
          width: 1200,
          height: 630,
          alt: `Residential Movers Calgary | Apartment, Condo & House Moves | ${APP_NAME}`,
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Residential Movers Calgary | Apartment, Condo & House Moves | ${APP_NAME}`,
      description: "Shiftrix provides professional residential moving services across Calgary — apartments, condos, and houses. Fully insured, transparent pricing, same-day availability. Free quote.",
      images: [`${BASE_URL}/condo-movers.jpg`],
    },  
};

const faqItems = [
    {
        title: "How far in advance should I book residential movers in Calgary?",
        content: "For a hassle-free and budget-friendly move, especially during peak season (May–September), we recommend booking your residential movers at least 2–4 weeks in advance. That said, Shiftrix welcome last-minute and same-week residential moves whenever capacity allows — call us to check availability.",
    },
    {
        title: "Do you move condos with elevator restrictions in Calgary?",
        content: "Yes — this is one of our specialties. We coordinate elevator bookings, manage lobby access, and work within your building's move-in/move-out hours. Just let us know your building's requirements when you book.",
    },
    {
        title: "What is the average cost of residential moving services in Calgary?",
        content: "Costs vary based on home size, floors, distance, and access conditions. As a guide, a 1-bedroom apartment move starts around $350–$550 locally, while a 4-bedroom house move can range from $1,400–$2,800. Shiftrix provides detailed upfront quotes — no surprises.",
    },
    {
        title: "Do you offer residential relocation services outside Calgary?",
        content: "Yes. While our residential moving services are centred in Calgary, we regularly serve surrounding communities including Airdrie, Chestermere, Cochrane, Okotoks, and Strathmore. Contact us for availability and pricing.",
    },
    {
        title: "Are your movers trained to handle fragile or high-value items?",
        content: "Absolutely. Our residential movers are trained in proper packing and handling techniques for fragile items, including artwork, mirrors, antiques, and electronics. We use protective materials throughout every residential move.",
    },
    {
        title: "What neighbourhoods in Calgary do your residential movers cover?",
        content: "We cover all Calgary neighbourhoods — including Beltline, Mission, Kensington, Inglewood, Tuscany, Evanston, Panorama Hills, Auburn Bay, Mahogany, Sage Hill, and all communities in between. We also serve Airdrie, Chestermere, and Okotoks.",
    },

];

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${BASE_URL}/services/residential-movers/#webpage`,
            "url": `${BASE_URL}/services/residential-movers`,
            "name": `Residential Movers Calgary | Apartment, Condo & House Moves | ${APP_NAME}`,
            "description": "Shiftrix provides professional residential moving services across Calgary — apartments, condos, and houses. Fully insured, transparent pricing, same-day availability. Free quote.",
            "isPartOf": {
              "@id": `${BASE_URL}/#website`
            },
            "about": {
              "@id": `${BASE_URL}/#business`
            },
            "mainEntity": {
              "@id": `${BASE_URL}/services/residential-movers/#service`
            },
            "breadcrumb": {
              "@id": `${BASE_URL}/services/residential-movers/#breadcrumb`
            },
            "hasPart": {
              "@id": `${BASE_URL}/services/residential-movers/#faq`
            },
            "inLanguage": "en-CA"
        },
        {
            "@type": "Service",
            "@id": `${BASE_URL}/services/residential-movers/#service`,
            "name": `Residential Movers Calgary | Apartment, Condo & House Moves | ${APP_NAME}`,
            "serviceType": "Residential Moving",
            "description": "Shiftrix provides professional residential moving services across Calgary — apartments, condos, and houses. Fully insured, transparent pricing, same-day availability. Free quote.",
            "url": `${BASE_URL}/services/residential-movers`,
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
            "category": "Residential Moving",
            "mainEntityOfPage": {
              "@id": `${BASE_URL}/services/residential-movers/#webpage`
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${BASE_URL}/services/residential-movers/#breadcrumb`,
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
                "name": "Residential Movers",
                "item": `${BASE_URL}/services/residential-movers`
              }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${BASE_URL}/services/residential-movers/#faq`,
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

export default function ResidentialMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="residential-movers-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <PageHeader
      eyebrow={{ from: "Calgary", to: "Residential Movers" }}
      heading="Calgary's Trusted Moving Partner For Residential Relocation"
      paragraphs={[
        <em key="lead" className="font-bold text-gray-900">Your Home Deserves More Than Just a Moving Truck</em>,
        "Apartment, Condo & House Relocations — Handled with Care, Every Single Time. Moving is one of the most significant events in a person's life — and we treat it that way. At Shiftrix, our residential movers in Calgary understand that behind every box is a memory, and behind every doorstep is a fresh beginning.",
        "Whether you're leaving a downtown condo in Beltline, upgrading to a family home in Tuscany, or relocating within the same block in Kensington — our residential relocation services are built around you. Not around a clipboard. Not around a cookie-cutter process.",
        "We show up prepared, we work efficiently, and we leave you feeling settled. That's the Shiftrix promise.",
      ]}
      cta={{
        href: `${BASE_URL}/contact-us`,
        label: "Get a free quote",
        ariaLabel: "Get a Free Quote residential movers",
      }}
      image={{
        src: "/condo-movers.jpg",
        alt: "residential movers in Calgary",
        width: 600,
        height: 400,
      }}
    />

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center space-y-3 pb-8">
                <h2 className="text-2xl md:text-3xl font-bold">We Move Every Type of Calgary Home</h2>
                <p>Calgary's residential landscape is wonderfully diverse — from high-rise condos on 17th Ave to spacious detached homes in Evanston. Each property type presents its own set of challenges, and our residential moving team is trained to handle them all.</p>
            </div>
            
            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {homeTypes.map((home) => (
                <article
                  key={home.title}
                  className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-indigo-100 bg-white p-6 shadow-[0_24px_50px_-32px_rgba(49,46,129,0.55)] transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_30px_60px_-30px_rgba(49,46,129,0.6)] sm:p-7"
                >
                  <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-800 to-indigo-500" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-800 to-indigo-500 text-white shadow-lg shadow-indigo-500/25">
                    {home.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">{home.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{home.description}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-indigo-100 pt-5">
                    {home.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                          <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.8} viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="mt-8">No matter where you live or where you're headed, Shiftrix provides residential moving services tailored to your property type — so you never have to worry about logistics on moving day.</p>              
        </div>
    </section>

    <section className="relative py-10 md:py-20">
        <div className="container mx-auto px-4 space-y-10 md:space-y-18">
            <div className="text-center space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold">What to Do Before Your Residential Movers Arrive</h2>
                <p>A little preparation goes a long way. Here's your room-by-room checklist to make your residential move in Calgary as smooth as possible:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> 
                <div className="flex-1 space-y-3"> 
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Confirm elevator booking (condos):</strong>  Contact your building manager at least 5 business days before moving day to reserve the elevator and freight lift. Most Calgary condo buildings require written notice.</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Obtain parking permits:</strong>  Check with the City of Calgary if you need a temporary no-parking zone in front of your home. Some inner-city areas like Kensington and Mission require permits.</p>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Declutter & donate:</strong>  Moving is the perfect time to part with items you no longer need. The less you move, the more affordable and efficient your residential relocation will be.</p>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Pack an essentials box:</strong>  Keep a separate, clearly labelled box with everything you'll need in the first 24 hours — phone charger, toiletries, a change of clothes, snacks, and important documents.</p>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Defrost the fridge:</strong>  At least 24 hours before your move, empty and defrost your refrigerator to prevent water damage during transport.</p>
                    </div>
                </div>

                <div className="relative">
                    <Image src="/condo-movers-2.jpg" alt="Trusted residential moving services in Calgary for smooth relocation" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 relative">
                    <Image src="/apartment-mover-1.jpg" alt="residential relocation services for house to move in calgary" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 space-y-3">
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Label every box by room:</strong> Clear labels speed up unloading dramatically. Colour-coded labels by room work best — your movers will know exactly where each box belongs.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Protect valuables & paperwork:</strong> Keep jewellery, passports, financial documents, and irreplaceable items with you during the move, not in the truck.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Measure doorways & staircases:</strong> For large furniture pieces, confirm measurements in advance. Our team can advise on disassembly if needed — just let us know ahead of time.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Notify your building of move-out:</strong> Give your current building management official written notice of your move-out date. Most Calgary landlords require 30–60 days.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Confirm your moving window:</strong> Many Calgary condo buildings restrict moves to specific hours (e.g., 8 AM–6 PM). Verify your window so there are no surprises on moving day.</p>
                    </div>
                </div>
            </div>
            
            <div className="text-center">
                <p><i>Pro tip: Share this checklist with your household. The more everyone is prepared, the faster — and more affordable — your residential move 0will be.</i></p>
            </div>
        </div>
    </section>

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why Calgary Residents Choose Shiftrix</h2>
                <p className="text-gray-600">There's no shortage of residential moving companies in Calgary. What separates Shiftrix is simple: professionalism, affordability, and customer satisfaction.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Transparent Pricing, Zero Surprises</h3>
                    <p>Before moving day, we provide detailed quotes that include all costs up front, with no hidden fees.</p>
                </div>
                {/* Item 2 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Fully Insured & Certified Professional Movers</h3>
                    <p>Our trained team is fully insured and protects your household valuables, providing complete peace of mind throughout your residential move.</p>
                </div>
                {/* Item 3 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Local Expertise Meets Efficiency</h3>
                    <p>With years of experience in Calgary&apos;s neighbourhoods, traffic patterns, and building access requirements, we deliver residential moves that stay on schedule and on budget.</p>
                </div>
                {/* Item 4 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Available When You Need Us</h3>
                    <p>Same-day and last-minute moves, evening and weekend scheduling, plus flexible booking options ensure your residential moving service works around your life, not the other way around.</p>
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
                            <p className="text-sm font-semibold text-indigo-200 uppercase">Free Residential Movers quote</p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Get a Free and No-Obligation Quote</h2>
                            <p>Move with a clear, guaranteed price instead of an estimate. Send us the details, and we will reach out to you soon, usually within one hour.</p>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Final price sealed in writing with details before you okay.",
                                "Calgary residential movers are willing to talk it through.",
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

                        <Link href={phoneHref} aria-label="Call Shiftrix for a residential movers quote" className="inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm transition hover:bg-white/15">
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
                            <MovingForm service="residential-movers" />
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
