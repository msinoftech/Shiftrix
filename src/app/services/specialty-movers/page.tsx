import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { APP_NAME, BASE_URL, contactInfo } from "@/lib/config";
import { FaqSection } from "@/components/FaqSection";
import PageHeader from "@/components/PageHeader";
import MovingForm from "@/components/movingForm";

const { phone } = contactInfo;
const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;


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
            "@type": "WebPage",
            "@id": `${BASE_URL}/services/specialty-movers/#webpage`,
            "url": `${BASE_URL}/services/specialty-movers`,
            "name": "Most Reliable Specialty Movers in Calgary | Shiftrix",
            "description": "Calgary's trusted specialty movers for fine art, antiques, safes, pool tables & industrial equipment.Professional crew. Secured and climate-controlled transport. Get a free quote.",
            "isPartOf": {
              "@id": `${BASE_URL}/#website`
            },
            "about": {
              "@id": `${BASE_URL}/#business`
            },
            "mainEntity": {
              "@id": `${BASE_URL}/services/specialty-movers/#service`
            },
            "breadcrumb": {
              "@id": `${BASE_URL}/services/specialty-movers/#breadcrumb`
            },
            "hasPart": {
              "@id": `${BASE_URL}/services/specialty-movers/#faq`
            },
            "inLanguage": "en-CA"
        },
        {
            "@type": "Service",
            "@id": `${BASE_URL}/services/specialty-movers/#service`,
            "name": "Most Reliable Specialty Movers in Calgary | Shiftrix",
            "serviceType": "Specialty Moving",
            "description": "Calgary's trusted specialty movers for fine art, antiques, safes, pool tables & industrial equipment.Professional crew. Secured and climate-controlled transport. Get a free quote.",
            "url": `${BASE_URL}/services/specialty-movers`,
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
            "category": "Specialty Moving",
            "mainEntityOfPage": {
              "@id": `${BASE_URL}/services/specialty-movers/#webpage`
            }
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

    <PageHeader
      eyebrow={{ from: "Calgary", to: "Specialty Movers" }}
      heading="What Is Specialty Moving? Guide for Calgary Homeowners"
      paragraphs={[
        "Specialty moving is a custom relocation service that handles items beyond standard dimensions, of extraordinary weight, highly fragile, and incomparable. - \"One-size-fits-all\" moving simply doesn't work there. Such items require trained hands, specialist tools, and detailed planning before a single item leaves your home or business. Shiftrix offers precision specialty relocation services tailored to your specific item, address, and timeline.",
        <>Specialty items we move include: fine art and paintings, antique furniture and heirlooms, heavy safes and vault installations, pool tables and billiard sets, and large industrial or commercial equipment. Moving a piano? See our <Link href={`${BASE_URL}/services/piano-movers`} className="text-blue-600 hover:underline">dedicated piano movers</Link> for specialist piano relocation across Calgary.</>,
      ]}
      cta={{
        href: `${BASE_URL}/contact-us`,
        label: "Get a free quote",
        ariaLabel: "Get a Free Quote furniture movers",
      }}
      image={{
        src: "/special-item-mover.jpg",
        alt: "Specialty Movers in Calgary",
        width: 600,
        height: 400,
      }}
    />

    <section className="relative">
        <div className="container mx-auto px-4">            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="relative">
                    <Image src="/special-item-mover-2.jpg" alt="specialty movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                
                {/* Right Content */}
                <div className="space-y-3 relative">
                    <h2 className="text-2xl md:text-3xl font-bold">Why Hire Specialty Movers in Calgary?</h2>
                    <p>Standard moving crews are trained for boxes and furniture — not for memorable and high-value items. The consequences of the wrong move go beyond the cost of hiring the right people from the start, meaning an irreplaceable loss or a structural repair bill. Whether you're relocating within communities like Brentwood, Mahogany, or Springbank Hill — or moving high-value items across the city — hire the right specialty moving company. Shiftrix delivers the precision your possessions deserve. Our every move begins with a site assessment, continues with a protection plan, and ends only when your item is confirmed safe and in position at its destination.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-10 md:py-20">
        <div className="container mx-auto px-4 space-y-10 md:space-y-18">
            <div className="text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Specialist Moves, Done Perfectly—Every Time</h2>
                <p> We show up our skills every time for every specialty, moving - Professional crew, concrete plan, no room for error.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">                
                {/* Left Content */}
                <div className="relative space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Fine Art & Painting Moving </h2>
                    <p>Artwork is not cargo — it's a legacy. Shiftrix's fine art movers in Calgary use museum-standard protection protocols: acid-free tissue wrapping, custom foam-lined crates, padded corner guards, and temperature-controlled transport to prevent humidity damage. Whether you're moving a single canvas from a Mount Royal gallery wall or an entire private collection from Aspen Woods, our team handles every piece as if it were their own. We conduct pre-move condition reports and photograph each item before transit, giving you a complete record and genuine peace of mind from the moment we arrive.</p>
                </div>
                
                {/* Right Image */}
                <div className="relative">
                    <Image src="/special-item-mover-3.jpg" alt="Specialty Movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="order-2 md:order-1 relative">
                    <Image src="/special-item-mover-1.jpg" alt="Speciality moving" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* Right Content */}
                <div className="order-1 md:order-2 space-y-3 relative">
                    <h2 className="text-2xl md:text-3xl font-bold">Safe moving & installation Calgary</h2>
                    <p>A floor safe or vault can easily weigh between 200 and 2,000 kilograms — far beyond what standard movers are equipped or insured to handle. Shiftrix's safe movers in Calgary use hydraulic dollies, stair-climbing equipment, and engineered rigging to relocate safes of any size without damage to the unit, your floors, or your staircase. We handle residential safe installation across communities like Saddleridge and Signal Hill, as well as commercial vault relocation in downtown Calgary and surrounding business districts. All lifts are conducted by trained, insured specialists who assess access routes before any movement begins.</p>
                </div>                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Content */}
                <div className="relative space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Moving A Pool Table </h2>
                    <p>Pool tables are deceptively complex: the slate bed alone can weigh over 400 kg, and the precise level of the playing surface must be preserved, or the table becomes unplayable. Shiftrix's pool table movers in Calgary disassemble every component — felt, slate, frame, and legs — transport each piece individually, and professionally reassemble and re-level the table at your new address. We serve homeowners throughout Auburn Bay, Evergreen, and Silverado, as well as commercial venues and recreation rooms across the city. Our team brings the tools, the know-how, and the patience to get your table playing perfectly again.</p>
                </div>
                {/* Right Image */}
                <div className="relative">
                    <Image src="/special-item-mover-4.jpg" alt="Specialty Movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

        </div>
    </section>

    <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
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

    <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl dark-sec bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-700 text-white shadow-xl">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12 items-center">
                    {/* left Content */}
                    <div className="space-y-6 max-w-xl">
                        <div className="space-y-3 text-white">
                            <p className="text-sm font-semibold text-indigo-200 uppercase">Free Specialty Movers quote</p>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Get a Free and No-Obligation Quote</h2>
                            <p>Move with a clear, guaranteed price instead of an estimate. Send us the details, and we will reach out to you soon, usually within one hour.</p>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Final price sealed in writing with details before you okay.",
                                "Calgary specialty movers are willing to talk it through.",
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

                        <Link href={phoneHref} aria-label="Call Shiftrix for a specialty movers quote" className="inline-flex items-center gap-3 rounded-md border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-sm transition hover:bg-white/15">
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
                            <MovingForm service="specialty-movers" />
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