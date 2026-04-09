import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

export const metadata: Metadata = {
  title: "Professional Furniture Moving Service Calgary | Shiftrix Movers",
  description: "Looking for professional furniture movers in Calgary? Relocate or reshuffle within space, house or office - Shiftrix handles sofas, office desks, antiques & more. Get a free quote today",
  keywords: ["furniture moving service in calgary", "professional furniture movers in calgary", "calgary office furniture movers", "house furniture movers"],
  alternates: {
    canonical: `${BASE_URL}/services/furniture-movers`,
  },
  openGraph: {
    title: "Professional Furniture Moving Service Calgary | Shiftrix Movers",
    description: "Looking for professional furniture movers in Calgary? Relocate or reshuffle within space, house or office - Shiftrix handles sofas, office desks, antiques & more. Get a free quote today",
    url: `${BASE_URL}/services/furniture-movers`,
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}/furniture-mover.jpg`,
        width: 1200,
        height: 630,
        alt: "Professional Furniture Moving Service Calgary | Shiftrix Movers",
      },
    ],
    locale: "en-CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Furniture Moving Service Calgary | Shiftrix Movers",
    description: "Looking for professional furniture movers in Calgary? Relocate or reshuffle within space, house or office - Shiftrix handles sofas, office desks, antiques & more. Get a free quote today",
    images: [`${BASE_URL}/furniture-mover.jpg`],
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
        "@id": `${BASE_URL}/services/furniture-movers/#webpage`,
        "url": `${BASE_URL}/services/furniture-movers`,
        "name": "Professional Furniture Moving Service Calgary | Shiftrix Movers",
        "isPartOf": {"@id": `${BASE_URL}/services/furniture-movers/#website`},
        "description": "Looking for professional furniture movers in Calgary? Relocate or reshuffle within space, house or office - Shiftrix handles sofas, office desks, antiques & more. Get a free quote today",
        "inLanguage": "en-CA",
        "breadcrumb": {"@id": `${BASE_URL}/services/furniture-movers/#breadcrumb`}
    },
    {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/furniture-movers/#breadcrumb`,
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
            "name": "furniture movers"
        }
        ]
    },
    {
        "@type": "Service",
        "serviceType": "Furniture Movers",
        "name": "Professional Furniture Moving Service Calgary | Shiftrix Movers",
        "description": "Looking for professional furniture movers in Calgary? Relocate or reshuffle within space, house or office - Shiftrix handles sofas, office desks, antiques & more. Get a free quote today",
        "url": `${BASE_URL}/services/furniture-movers`,
        "provider": {
        "@type": "MovingCompany",
        "name": `${APP_NAME}`,
        "url": `${BASE_URL}/services/furniture-movers`,
        "logo": `${BASE_URL}/shiftrix-logo.png`
        },
        "areaServed": [
        {"@type": "City", "name": "Calgary"},
        ],
        "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Furniture Movers Offerings",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Office Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Retail Moving"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Warehouse Moving"}}
        ]
        }
    },
    {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/services/furniture-movers#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do you protect furniture during a move?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every item is wrapped in thick moving blankets, secured with stretch film, and fitted with corner protectors before loading. Floors and doorframes at both locations are protected with runners and padding. Nothing goes on the truck unprotected."
            }
          },
          {
            "@type": "Question",
            "name": "Can you move just one or two pieces of furniture?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Shiftrix handles single-item furniture moves — a sofa, a dining table, a wardrobe — with the same professionalism as a full-home relocation. Contact us for a quick, transparent quote."
            }
          },
          {
            "@type": "Question",
            "name": "Who is offer in-home furniture rearrangement in Calgary?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shiftrix, we provide in-home furniture rearrangement across Calgary — ideal when you're renovating, redecorating, or simply need heavy pieces moved between rooms or floors."
            }
          },
          {
            "@type": "Question",
            "name": "Do your furniture movers disassemble and reassemble?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — disassembly and reassembly of beds, wardrobes, modular desks, cubicles, and sectional sofas is included as standard. We keep all hardware organised and accounted for throughout."
            }
          },
          {
            "@type": "Question",
            "name": "Are you able to move office furniture and commercial workstations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Shiftrix provides dedicated commercial office movers and commercial relocation services for Calgary businesses of all sizes. We coordinate around your operational hours to minimise disruption."
            }
          },
        ]
    }
    ]
};


export default function FurnitureMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="furnituremover-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold pb-12">Furniture Movers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1">
                    <Image src="/furniture-mover.jpg" alt="furniture moving service in calgary" width={600} height={350} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Professional Furniture Moving Service in Calgary</h2>
                    <p>Moving furniture — whether a single oversized sectional or an entire office floor — demands technique, expertise, DIY, and tools over muscle power.</p>
                    <p>At Shiftrix, our professional furniture movers bring trained technique, purpose-built equipment, and genuine care to every move across Calgary, for both residential and commercial clients. Our crew members have years of experience handling every type of furniture, in all shapes, sizes, and materials. We deliver a furniture-moving service that protects what matters, respects your timeline, and eliminates stress.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            {/* Heading Section */}
            <div className="text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Furniture We Move — Room by Room, Piece by Piece</h2>
                <p>Not all furniture is equal, and neither is the approach to moving it. Our house furniture movers and office furniture movers are trained across every furniture category that Calgary homes and businesses rely on.</p>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                {/* Left Image */}
                <div className="flex justify-center">
                    <Image src="/furniture-mover-1.jpg" alt="professional furniture movers in calgary" width={600} height={400} className="w-full h-full rounded-2xl object-cover shadow-lg max-w-full"/>
                </div>

                {/* Right Content */}
                <div className="space-y-3">
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Heavy Sofas, Sectionals & Living Room Furniture</h3>
                            <p>Our team uses furniture sliders, shoulder dollies, and stair-climbing equipment to move large sectionals, L-shaped sofas, and modular couches through narrow hallways, multi-level townhomes, and high-rise elevators.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Wardrobe, Dresser & Bedroom Furniture Moving</h3>
                            <p>Our furniture movers carefully disassemble bed frames and wardrobe carcasses, wrap all components (g. E.g., Mirrors, glass panels, and attached hardware) individually, protect them separately, and rebuild everything precisely at your destination.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Glass, Antique & High-Value Furniture</h3>
                            <p>Custom corner protectors, acid-free tissue wrap, and rigid crating are used as a priority for moving Antique sideboards, glass-top dining tables, vintage armoires, and high-value accent pieces. Our team assesses each item individually.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Office Desks, Cubicles & Workstation Moving</h3>
                            <p>As experienced commercial office movers, Shiftrix plans every office furniture move to minimise operational downtime — for Modular workstations, standing desks, ergonomic chairs, filing cabinets, and server racks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-18">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">How Shiftrix Protected Your Furniture During the Move?</h2>
                    <p>Shiftrix's every step is for protection as a Calgary homeowner and office manager expects.</p>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Furniture blankets & moving pads</strong> — thick quilted blankets wrap every surface before anything is loaded, preventing scratches and dents in transit. ( 2nd option: thick quilted blankets wrap to prevent scratches and dents in transit.)</p>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Stretch wrap & shrink film</strong> — used over blankets to lock them in place and add a waterproof moisture barrier.</p>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Corner protectors</strong> — foam and cardboard corner guards shield edges on desks, cabinets, and appliances throughout the move.</p>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Furniture dollies & straps</strong> — weight-rated equipment designed for safe, controlled lifting — not improvised handling.</p>
                    </div>

                    <p>Shiftrix Furniture Moves applies the same standard of care to each item, whether it is a single item, as in complete <Link href={`${BASE_URL}/services/residential-movers`} className="text-blue-600 hover:text-blue-700">residential moving</Link> or <Link href={`${BASE_URL}/services/commercial-movers`} className="text-blue-600 hover:text-blue-700">commercial office moving</Link>.</p>
                </div>
                <div className="flex-1">
                    <Image src="/furniture-mover-2.jpg" alt="calgary office furniture movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="order-2 md:order-1 flex-1">
                    <Image src="/furniture-mover-3.jpg" alt="house furniture movers" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="order-1 md:order-2 flex-1 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">We Also Rearrange Furniture Within Your Home</h2>
                    <p>When you need to move things around — a sofa into a different room, a bookshelf to another wall, or a bedroom swap between floors.</p>
                    <p>Shiftrix offers in-home furniture rearrangement services for Calgary residents who want the job done safely, without lifting a finger or risking injury. We handle heavy, awkward, or oversized pieces with the same professionalism as any full relocation. It's the same expert team — just a shorter distance.</p>
                    
                    <p><strong>But As furniture movers, we do not handle:</strong></p>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Pianos </strong> — upright pianos, grand pianos, and digital stage pianos require specialist rigging, weight distribution expertise, and dedicated equipment. Call our <Link href={`${BASE_URL}/services/piano-movers`} className="text-blue-600 hover:text-blue-700">Piano Movers</Link>.</p>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Safes & gun cabinets </strong> — heavy-vault items require certified handling outside our standard furniture service.</p>
                    </div>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Industrial machinery or commercial kitchen equipment </strong> — For you can look at our <Link href={`${BASE_URL}/services/specialty-movers`} className="text-blue-600 hover:text-blue-700">specialty moving services in Calgary.</Link></p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Hazardous or regulated materials </strong> — regardless of what furniture contains or is attached to.</p>
                    </div>

                </div>

            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center space-y-3 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Why Choose Shiftrix for Furniture Moving?</h2>
                <p>We deliver comprehensive solutions for seamless furniture relocations with flexible scheduling and transparent pricing. Our skilled furniture movers have the expertise to manage every type of furniture, from heavy pianos to delicate desks.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Item 1 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Comprehensive Solutions</h3>
                    <p>Tailored services for full offices or homes, from one piece of furniture to complete relocations—no matter the scale.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Secure Packaging and Handling</h3>
                    <p>Specialised Handling: Office desks, cubicles, electronics, or home pianos—precision packing protects every item.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Disassembly & Reassembly</h3>
                    <p>Expert teams safely dismantle complex furniture such as beds, desks, and cubicles, then reassemble them at your new space for a perfect setup.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Skilled Team</h3>
                    <p>With years of experience, we plan, organise, and look after the entire move, relieve stress and ensure your peace of mind.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="rounded-3xl bg-white drop-shadow-lg py-12 px-4 sm:px-6 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
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
                <h2 className="text-2xl md:text-4xl font-bold">Frequently Asked Questions — Furniture Moving Service Calgary</h2>
            </div>

            <div className="space-y-3">
                <FaqSection
                title="How do you protect furniture during a move?"
                content={`Every item is wrapped in thick moving blankets, secured with stretch film, and fitted with corner protectors before loading. Floors and doorframes at both locations are protected with runners and padding. Nothing goes on the truck unprotected.`}
                />
                <FaqSection
                title="Can you move just one or two pieces of furniture?"
                content={`Absolutely. Shiftrix handles single-item furniture moves — a sofa, a dining table, a wardrobe — with the same professionalism as a full-home relocation. Contact us for a quick, transparent quote.`}
                />
                <FaqSection
                title="Who is offer in-home furniture rearrangement in Calgary?"
                content={`Shiftrix, we provide in-home furniture rearrangement across Calgary — ideal when you're renovating, redecorating, or simply need heavy pieces moved between rooms or floors.`}
                />
                <FaqSection
                title="Do your furniture movers disassemble and reassemble?"
                content={`Yes — disassembly and reassembly of beds, wardrobes, modular desks, cubicles, and sectional sofas is included as standard. We keep all hardware organised and accounted for throughout.`}
                />
                <FaqSection
                title="Are you able to move office furniture and commercial workstations?"
                content={`Yes. Shiftrix provides dedicated commercial office movers and commercial relocation services for Calgary businesses of all sizes. We coordinate around your operational hours to minimise disruption.`}
                />
            </div>
        </div>
    </section>

    </>
  );
}
