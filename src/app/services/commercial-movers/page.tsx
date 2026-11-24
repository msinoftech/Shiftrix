import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
//import ContactForm from "@/components/ContactForm";
import { FaqSection } from "@/components/FaqSection";
import PageHeader from "@/components/PageHeader";
import MovingForm from "@/components/movingForm";

export const metadata: Metadata = {
    title: "Office and Commercial Movers in Calgary",
    description: "Trust Shiftrix for Calgary's leading commercial moving service to handle your office, retail, clinic, or warehouse relocation with unmatched attention to detail and expertise.",
    keywords: [ "Commercial Movers", "commercial moving companies", "commercial office movers", "commercial relocation services", "local commercial movers", "best commercial movers", "commercial moving solutions"],
    alternates: {
        canonical: `${BASE_URL}/services/commercial-movers`,
      },
    openGraph: {
      title: "Office and Commercial Movers in Calgary",
      description: "Trust Shiftrix for Calgary's leading commercial moving service to handle your office, retail, clinic, or warehouse relocation with unmatched attention to detail and expertise.",
      url: `${BASE_URL}/services/commercial-movers`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/trusted-commercial-moving-company.jpg`,
          width: 1200,
          height: 630,
          alt: "Office and Commercial Movers in Calgary",
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Office and Commercial Movers in Calgary",
      description: "Trust Shiftrix for Calgary's leading commercial moving service to handle your office, retail, clinic, or warehouse relocation with unmatched attention to detail and expertise.",
      images: [`${BASE_URL}/trusted-commercial-moving-company.jpg`],
    }, 
};

const { phone } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;

const faqItems = [
    {
        title: "How much do commercial movers charge in Calgary?",
        content: "Most Calgary commercial moves are priced on an hourly basis or as a fixed project rate, based on an on-site assessment. Rates vary with crew size, access requirements, and timeline. Contact us for a free, no-obligation quote.",
    },
    {
        title: "How far in advance should I book a commercial move?",
        content: "We recommend booking at least 4–6 weeks in advance for office or multi-floor moves. For warehouse and industrial relocations, 6–8 weeks allow proper logistics planning. Last-minute availability may be possible — call us to check.",
    },
    {
        title: "Can you move us over the weekend to avoid disrupting staff?",
        content: "Yes — after-hours and weekend commercial moves are one of our most-requested services. We coordinate with your building manager to secure elevator access and loading bay reservations in advance.",
    },
    {
        title: "Do you handle IT equipment and server moves?",
        content: "Our crew is trained in safe disconnection, secure packing, and careful transport of servers, workstations, and network hardware. We recommend that your IT team supervise reconnection at the destination.",
    },
    {
        title: "What Calgary neighbourhoods do you serve?",
        content: "We serve all Calgary business districts, including Downtown Core, Beltline, Bridgeland, Inglewood, Kensington, Mission, Eau Claire, Marda Loop, University District, Currie Barracks, Quarry Park, and surrounding suburban commercial zones."
    },
    {
        title: "Are you insured for commercial moves?",
        content: "Yes. Shiftrix carries full commercial liability insurance. Details are available on request before your move.",
    },
];

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": `${BASE_URL}/services/commercial-movers/#webpage`,
            "url": `${BASE_URL}/services/commercial-movers`,
            "name": "Office and Commercial Movers in Calgary",
            "description": "Trust Shiftrix for Calgary's leading commercial moving service to handle your office, retail, clinic, or warehouse relocation with unmatched attention to detail and expertise.",
            "isPartOf": {
              "@id": `${BASE_URL}/#website`
            },
            "about": {
              "@id": `${BASE_URL}/#business`
            },
            "mainEntity": {
              "@id": `${BASE_URL}/services/commercial-movers/#service`
            },
            "breadcrumb": {
              "@id": `${BASE_URL}/services/commercial-movers/#breadcrumb`
            },
            "hasPart": {
              "@id": `${BASE_URL}/services/commercial-movers/#faq`
            },
            "inLanguage": "en-CA"
        },
        {
            "@type": "Service",
            "@id": `${BASE_URL}/services/commercial-movers/#service`,
            "name": "Office and Commercial Movers in Calgary",
            "serviceType": "Commercial Moving",
            "description": "Trust Shiftrix for Calgary's leading commercial moving service to handle your office, retail, clinic, or warehouse relocation with unmatched attention to detail and expertise.",
            "url": `${BASE_URL}/services/commercial-movers`,
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
            "category": "Commercial Moving",
            "mainEntityOfPage": {
              "@id": `${BASE_URL}/services/commercial-movers/#webpage`
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${BASE_URL}/services/commercial-movers/#breadcrumb`,
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
                "name": "Commercial Movers",
                "item": `${BASE_URL}/services/commercial-movers`
              }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${BASE_URL}/services/commercial-movers/#faq`,
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

export default function CommercialmoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="commercial-moving-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <PageHeader
        eyebrow={{ from: "Calgary", to: "Commercial Movers" }}
        heading="Commercial Moving Services in Calgary"
        paragraphs={[
            <strong key="lead" className="font-semibold text-gray-900">Trusted Commercial Movers for Office & Business Relocations</strong>,
            "We know what's at stake when your business moves — because we've completed over 100 commercial moves across Calgary.",
            "At Shiftrix, we understand that a commercial move is far more than shifting desks and boxes. It is a careful transition that can define the future of your operations, your team's productivity, and your reputation with clients. That is why Calgary businesses — from marketing studios in Kensington to multi-floor corporate headquarters in the Downtown Core — trust Shiftrix to execute their commercial relocation services with precision, discretion, and zero drama. Our professional crew has more than 5 years of hands-on experience in commercial moves across Calgary, giving us an unmatched understanding of the unique challenges that business relocations present: tight building access windows, IT infrastructure sensitivities, staff communication, and the relentless pressure to get back to business fast. When you choose Shiftrix as your commercial office movers, you are choosing a team that plans every detail so you don't have to.",
        ]}
        cta={{
            href: `${BASE_URL}/contact-us`,
            label: "Get a free quote",
            ariaLabel: "Get a Free Quote commercial movers",
        }}
        image={{
            src: "/trusted-commercial-moving-company.jpg",
            alt: "Commercial Movers",
            width: 600,
            height: 400,
        }}
    />

     <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            {/* Heading Section */}
            <div className="text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Complete Commercial Relocation Services — Benefits Every Calgary Business</h2>
                <p>Our end-to-end commercial relocation services are designed to minimise downtime, protect your assets, and allow your team to focus on keeping your business running. Every move is managed by a dedicated coordinator who works with your team, your building manager, and our crew to synchronise every moving part.</p>
                <p>From the first on-site assessment to the final furniture placement at your new address, Shiftrix delivers a commercial moving experience that is structured, transparent, and built around your schedule.</p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/commercial-moving-company-3.jpg" alt="commercial moving companies" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>

                {/* Right Content */}
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Our commercial services include:</h3>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Pre-move consultation</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>On-site assessments of both locations and a detailed logistics plan.​​</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Professional packing and labelling, inventory management.​</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Disassembly, reassembly, and placement of office furniture, shelving, and workstations.​</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Careful handling of IT systems, servers, and electronics.​</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Secure transport and handling of all files, samples, and sensitive materials.​​</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Short- and long-term storage options for surplus items.​</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p>Post-move setup, placement, and walkthrough to confirm everything is in order Whether you are relocating a corporate office, storefront, or industrial space, Shiftrix positions your business to get back to work fast.​</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-10 md:py-20">
        <div className="container mx-auto px-4 space-y-10 md:space-y-18">
            
            <div className="text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Specialists in Diverse Commercial Relocation Services</h2>
                <p>Every business is different — and so is every move. Shiftrix has developed specialised workflows for each type of commercial relocation we handle in Calgary, so your move benefits from a process refined across dozens of similar projects.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex-1 space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold">Office Moves — Corporate & Small Business</h3>
                    <p>Whether you are relocating a 10-person creative agency or a 200-person corporate office, our commercial office movers have the planning depth and crew capacity to handle it. We coordinate floor plans in advance, label all workstations and equipment to a numbered inventory, and manage the physical move in phases — so your team can start work at the new location with minimal adjustment time.</p>
                    <p>We work with office building management across Calgary's business districts — Beltline, Eau Claire, Bridgeland, and the Downtown Core — to coordinate elevator bookings, loading bay reservations, and after-hours access, ensuring the move stays on schedule.</p>
                </div>
                <div className="flex-1">
                    <Image src="/commercial-moving-company.jpg" alt="commercial office movers" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/commercial-moving-company-1.jpg" alt="commercial relocation services" width={600} height={400} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1 space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold">Retail Store Moves — Display Fixtures, Inventory & Fit-Out</h3>
                    <p>Retail relocations demand speed and precision. You are losing revenue every hour the store is closed. Shiftrix retail move teams are experienced in dismantling and reassembling display fixtures, moving product inventory without damage or loss, and coordinating the full fit-out at your new location so you can open to customers as quickly as possible.</p>
                    <p>From clothing boutiques in Marda Loop to electronics retailers in McKenzie Towne, we understand retail timelines and work around your trading schedule to execute a seamless transition.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex-1 space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold">Warehouse & Industrial Facility Moves</h3>
                    <p>Industrial relocations involve racking systems, heavy machinery, and large-volume inventory — all of which require specialised equipment, rigorous safety planning, and an experienced crew. Our warehouse move teams are equipped with the tools and training to handle these challenges systematically.</p>
                    <p>We develop a phased relocation plan that keeps your supply chain operational throughout the move, where possible, minimises disruption to your distribution network, and ensures all racking, pallet systems, and industrial equipment are reinstalled correctly and safely at the destination.</p>
                </div>
                <div className="flex-1">
                    <Image src="/commercial-moving-company-2.1.jpg" alt="local commercial movers" width={1000} height={600} className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

        </div>
    </section>

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Why Move Your Calgary Office or Commercial Space With Us?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Packing, Storing, and Protecting</h3>
                    <p>We offer secure solutions for your office furniture, retail fixtures, warehouse equipment, and important files, all tailored to your business needs.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Estimates and Plan Your Move</h3>
                    <p>With on-site estimates, we develop detailed logistics plans for offices, retail shops, and industrial spaces, ensuring accurate evaluations and a smooth transition.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">No Move is Too Big for Us</h3>
                    <p>We have the equipment and expertise to handle moves of any size, from small offices to large corporate headquarters, warehouses, or heavy machinery.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Professional, Reliable & Friendly</h3>
                    <p className="text-gray-700">Our movers are skilled in both office and commercial relocations, combining expertise, efficiency, and customer service for a positive experience every time.</p>
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
                            <p className="text-sm font-semibold text-indigo-200 uppercase">Free Commercial Movers quote</p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Get a Free and No-Obligation Quote</h2>
                            <p>Move with a clear, guaranteed price instead of an estimate. Send us the details, and we will reach out to you soon, usually within one hour.</p>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Final price sealed in writing with details before you okay.",
                                "Calgary commercial movers are willing to talk it through.",
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

                        <Link href={phoneHref} aria-label="Call Shiftrix for a commercial movers quote" className="inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm transition hover:bg-white/15">
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
                            <MovingForm service="commercial-movers" />
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
