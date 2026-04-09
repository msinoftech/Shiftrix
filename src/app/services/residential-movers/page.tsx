import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";

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

const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
        {
        "@type": "WebPage",
        "@id": `${BASE_URL}/services/residential-movers#webpage`,
        "url": `${BASE_URL}/services/residential-movers`,
        "name": `Residential Movers Calgary | Apartment, Condo & House Moves | ${APP_NAME}`,
        "description": "Need trusted residential movers in Calgary? Shiftrix handles condo, apartment, and house relocations across Beltline, Kensington, Tuscany, Airdrie & every Calgary neighbourhood. Get your free quote today.",
        "keywords": "residential movers in Calgary, trusted residential moving services in Calgary for smooth relocation, residential relocation services Calgary",
        "isPartOf": {
            "@id": `${BASE_URL}/#website`
        },
        "about": {
            "@id": `${BASE_URL}/#organization`
        },
        "breadcrumb": {
            "@id": `${BASE_URL}/services/residential-movers#breadcrumb`
        },
        "mainEntity": {
            "@id": `${BASE_URL}/services/residential-movers#faq`
        }
        },
        {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/residential-movers#breadcrumb`,
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
            "@id": `${BASE_URL}/services/residential-movers#faq`,
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How far in advance should I book residential movers in Calgary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For a hassle-free and budget-friendly move, especially during peak season (May–September), we recommend booking your residential movers at least 2–4 weeks in advance. That said, Shiftrix welcomes last-minute and same-week residential moves whenever capacity allows — call us to check availability."
                }
              },
              {
                "@type": "Question",
                "name": "Do you move condos with elevator restrictions in Calgary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — this is one of our specialties. We coordinate elevator bookings, manage lobby access, and work within your building's move-in and move-out hours. Just let us know your building's requirements when you book."
                }
              },
              {
                "@type": "Question",
                "name": "What is the average cost of residential moving services in Calgary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Costs vary based on home size, floors, distance, and access conditions. As a guide, a 1-bedroom apartment move starts around $350–$550 locally, while a 4-bedroom house move can range from $1,400–$2,800. Shiftrix provides detailed upfront quotes with no surprises."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer residential relocation services outside Calgary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. While our residential moving services are centred in Calgary, we regularly serve surrounding communities including Airdrie, Chestermere, Cochrane, Okotoks, and Strathmore. Contact us for availability and pricing."
                }
              },
              {
                "@type": "Question",
                "name": "Are your movers trained to handle fragile or high-value items?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Our residential movers are trained in proper packing and handling techniques for fragile items, including artwork, mirrors, antiques, and electronics. We use protective materials throughout every residential move."
                }
              },
              {
                "@type": "Question",
                "name": "What neighbourhoods in Calgary do your residential movers cover?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We cover all Calgary neighbourhoods including Beltline, Mission, Kensington, Inglewood, Tuscany, Evanston, Panorama Hills, Auburn Bay, Mahogany, Sage Hill, and more. We also serve nearby areas such as Airdrie, Chestermere, and Okotoks."
                }
              }
            ]
        }
    ]
};

export default function ResidentialMoversPage() {
  return (
    <>
    {/* Schema Markup */}
    <Script id="residential-movers-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold pb-12">Residential Movers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                    <Image src="/condo-movers.jpg" alt="residential movers in Calgary" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Calgary's Trusted Residential Movers</h2>
                    <p className="font-bold"><i>Your Home Deserves More Than Just a Moving Truck</i></p>
                    <p>Apartment, Condo & House Relocations — Handled with Care, Every Single Time. Moving is one of the most significant events in a person's life — and we treat it that way. At Shiftrix, our residential movers in Calgary understand that behind every box is a memory, and behind every doorstep is a fresh beginning.</p>
                    <p>Whether you're leaving a downtown condo in Beltline, upgrading to a family home in Tuscany, or relocating within the same block in Kensington — our residential relocation services are built around you. Not around a clipboard. Not around a cookie-cutter process.</p>
                    <p>We show up prepared, we work efficiently, and we leave you feeling settled. That's the Shiftrix promise.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center space-y-3 pb-8">
                <h2 className="text-2xl md:text-3xl font-bold">We Move Every Type of Calgary Home</h2>
                <p>Calgary's residential landscape is wonderfully diverse — from high-rise condos on 17th Ave to spacious detached homes in Evanston. Each property type presents its own set of challenges, and our residential moving team is trained to handle them all.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                <div className="bg-gradient-to-br via-indigo-100 to-indigo-50 border border-indigo-200 hover:border-indigo-300 rounded-xl shadow p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <svg fill="#000000" width="64px" height="64px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.5 1.4804688L13.748047 2.3417969L3 14.625L3 46L24 46L26 46L47 46L47 14.625L35.5 1.4804688L34.748047 2.3417969L25 13.482422L14.5 1.4804688 z M 14.5 4.5175781L24 15.375L24 44L5 44L5 15.375L14.5 4.5175781 z M 35.5 4.5175781L45 15.375L45 44L26 44L26 15.375L35.5 4.5175781 z M 7 17L7 18L7 24L13 24L13 17L7 17 z M 16 17L16 18L16 24L22 24L22 17L16 17 z M 28 17L28 18L28 24L34 24L34 17L28 17 z M 37 17L37 18L37 24L43 24L43 17L37 17 z M 9 19L11 19L11 22L9 22L9 19 z M 18 19L20 19L20 22L18 22L18 19 z M 30 19L32 19L32 22L30 22L30 19 z M 39 19L41 19L41 22L39 22L39 19 z M 7 26L7 27L7 33L13 33L13 26L7 26 z M 16 26L16 27L16 33L22 33L22 26L16 26 z M 28 26L28 27L28 33L34 33L34 26L28 26 z M 37 26L37 27L37 33L43 33L43 26L37 26 z M 9 28L11 28L11 31L9 31L9 28 z M 18 28L20 28L20 31L18 31L18 28 z M 30 28L32 28L32 31L30 31L30 28 z M 39 28L41 28L41 31L39 31L39 28 z M 7 35L7 36L7 42L13 42L13 35L7 35 z M 16 35L16 36L16 42L22 42L22 35L16 35 z M 28 35L28 36L28 42L34 42L34 35L28 35 z M 37 35L37 36L37 42L43 42L43 35L37 35 z M 9 37L11 37L11 40L9 40L9 37 z M 18 37L20 37L20 40L18 40L18 37 z M 30 37L32 37L32 40L30 40L30 37 z M 39 37L41 37L41 40L39 40L39 37 z"></path></g></svg>
                    <h3 className="text-md font-semibold">Apartment & Condo Moves</h3>
                    <p>Calgary high-rises, low-rises, and inner-city condos.</p>
                    <ul className="list-disc list-inside">
                        <li>Elevator booking coordination</li>
                        <li>Lobby & corridor protection</li>
                        <li>Pre-move Parking permission</li>
                        <li>Lift scheduling</li>
                    </ul>
                </div>
                
                <div className="bg-gradient-to-br via-indigo-100 to-indigo-50 border border-indigo-200 hover:border-indigo-300 rounded-xl shadow p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <svg fill="#000000" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 487.024 487.024"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M81.554,190.683H50.912c-3.313,0-6,2.687-6,6v42.021c0,3.313,2.687,6,6,6h30.641c3.313,0,6-2.687,6-6v-42.021 C87.554,193.37,84.867,190.683,81.554,190.683z M75.554,202.683v3.758H56.912v-3.758H75.554z M56.912,232.705v-14.264h18.641 v14.264H56.912z"></path> <path d="M114.821,244.705h30.642c3.313,0,6-2.687,6-6v-42.021c0-3.313-2.687-6-6-6h-30.642c-3.313,0-6,2.687-6,6v42.021 C108.821,242.018,111.508,244.705,114.821,244.705z M120.821,232.705v-14.264h18.642v14.264H120.821z M139.463,202.683v3.758 h-18.642v-3.758H139.463z"></path> <path d="M81.554,255.468H50.912c-3.313,0-6,2.687-6,6v42.022c0,3.313,2.687,6,6,6h30.641c3.313,0,6-2.687,6-6v-42.022 C87.554,258.154,84.867,255.468,81.554,255.468z M75.554,267.468v3.758H56.912v-3.758H75.554z M56.912,297.49v-14.265h18.641 v14.265H56.912z"></path> <path d="M226.881,210.685H196.24c-3.313,0-6,2.687-6,6v42.022c0,3.313,2.687,6,6,6h30.641c3.313,0,6-2.687,6-6v-42.022 C232.881,213.372,230.194,210.685,226.881,210.685z M220.881,222.685v3.759H202.24v-3.759H220.881z M202.24,252.708v-14.264h18.641 v14.264H202.24z"></path> <path d="M290.79,210.685h-30.642c-3.313,0-6,2.687-6,6v42.022c0,3.313,2.687,6,6,6h30.642c3.313,0,6-2.687,6-6v-42.022 C296.79,213.372,294.103,210.685,290.79,210.685z M284.79,222.685v3.759h-18.642v-3.759H284.79z M266.148,252.708v-14.264h18.642 v14.264H266.148z"></path> <path d="M226.881,275.471H196.24c-3.313,0-6,2.687-6,6v42.021c0,3.313,2.687,6,6,6h30.641c3.313,0,6-2.687,6-6v-42.021 C232.881,278.157,230.194,275.471,226.881,275.471z M220.881,287.471v3.758H202.24v-3.758H220.881z M202.24,317.492v-14.264h18.641 v14.264H202.24z"></path> <path d="M341.567,284.844h30.641c3.313,0,6-2.687,6-6v-42.022c0-3.313-2.687-6-6-6h-30.641c-3.313,0-6,2.687-6,6v42.022 C335.567,282.157,338.253,284.844,341.567,284.844z M347.567,272.844V258.58h18.641v14.264H347.567z M366.208,242.821v3.759 h-18.641v-3.759H366.208z"></path> <path d="M405.475,284.844h30.642c3.313,0,6-2.687,6-6v-42.022c0-3.313-2.687-6-6-6h-30.642c-3.313,0-6,2.687-6,6v42.022 C399.475,282.157,402.162,284.844,405.475,284.844z M411.475,272.844V258.58h18.642v14.264H411.475z M430.117,242.821v3.759 h-18.642v-3.759H430.117z"></path> <path d="M341.567,349.628h30.641c3.313,0,6-2.687,6-6v-42.021c0-3.313-2.687-6-6-6h-30.641c-3.313,0-6,2.687-6,6v42.021 C335.567,346.941,338.253,349.628,341.567,349.628z M347.567,337.628v-14.264h18.641v14.264H347.567z M366.208,307.606v3.758 h-18.641v-3.758H366.208z"></path> <path d="M481.822,371.065l-10.657-1.431V220.931h7.85c3.313,0,6-2.687,6-6v-64.779c0-3.313-2.687-6-6-6h-139.33v-14.141 c0-3.313-2.687-6-6-6H194.36v-14c0-3.313-2.686-6-6-6H8.014c-3.314,0-6,2.687-6,6v64.785c0,3.313,2.686,6,6,6h7.85v127.714 l-9.065-1.217c-3.283-0.447-6.304,1.864-6.745,5.148c-0.441,3.284,1.864,6.304,5.148,6.744l475.022,63.771 c0.271,0.037,0.54,0.055,0.806,0.055c2.958,0,5.534-2.189,5.939-5.203C487.411,374.525,485.106,371.506,481.822,371.065z M459.164,368.024l-6.54-0.878v-12.134c0-3.313-2.687-6-6-6h-4.508v-47.405c0-3.313-2.687-6-6-6h-30.642c-3.313,0-6,2.687-6,6 v47.405h-4.501c-3.313,0-6,2.687-6,6v3.589l-63.13-8.475V220.931h133.32V368.024z M430.117,349.012h-18.642v-41.405h18.642V349.012 z M440.625,361.012v4.523l-33.692-4.523H440.625z M284.79,328.872h-18.642v-41.401h18.642V328.872z M295.295,340.872v5.152 l-38.378-5.152H295.295z M301.295,328.872h-4.505v-47.401c0-3.313-2.687-6-6-6h-30.642c-3.313,0-6,2.687-6,6v47.401h-4.504 c-3.313,0-6,2.687-6,6v4.218l-63.13-8.475V200.802h133.33v147.713l-6.55-0.879v-12.763 C307.295,331.558,304.608,328.872,301.295,328.872z M339.684,194.802v-38.649h133.33v52.779h-147.17v-8.13h7.84 C336.998,200.802,339.684,198.115,339.684,194.802z M194.36,174.797v-38.785h133.324v52.79h-147.17v-8.005h7.846 C191.674,180.797,194.36,178.11,194.36,174.797z M14.014,116.012H182.36v52.785H21.961c-0.032,0-0.064-0.005-0.097-0.005 s-0.064,0.004-0.097,0.005h-7.753V116.012z M27.865,180.797h140.65v148.207l-6.55-0.879v-13.253c0-3.313-2.687-6-6-6h-4.502 v-47.404c0-3.313-2.687-6-6-6h-30.642c-3.313,0-6,2.687-6,6v47.404h-4.506c-3.313,0-6,2.687-6,6v4.708l-70.45-9.458V180.797z M139.463,308.872h-18.642v-41.404h18.642V308.872z M110.315,320.872h39.65v5.642l-39.65-5.323V320.872z"></path> </g> </g></svg>
                    <h3 className="text-md font-semibold">Townhouse & Semi-Detached</h3>
                    <p>Calgary's growing townhouse communities, inside and out.</p>
                    <ul className="list-disc list-inside">
                        <li>Narrow staircase expertise</li>
                        <li>Balcony & patio item Protection</li>
                        <li>Move-day rule compliance</li>
                    </ul>
                </div>
                
                <div className="bg-gradient-to-br via-indigo-100 to-indigo-50 border border-indigo-200 hover:border-indigo-300 rounded-xl shadow p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.424 28.652h9.625v-9.631h-9.625v9.631m5.292-8.67h3.368v3.371h-3.368v-3.371m0 4.336h3.368v3.373h-3.368v-3.373m-4.33-4.336h3.367v3.371h-3.367v-3.371m0 4.336h3.367v3.373h-3.367v-3.373" fill="#000000"></path><path d="M35.914 55.31h9.624v-9.634h-9.624v9.634m5.292-8.67h3.368v3.37h-3.368v-3.37m0 4.336h3.368v3.37h-3.368v-3.37m-4.331-4.336h3.367v3.37h-3.367v-3.37m0 4.336h3.367v3.37h-3.367v-3.37" fill="#000000"></path><path d="M62 58.549c0-.425-.169-.808-.441-1.092c.273-.353.441-.793.441-1.274a2.104 2.104 0 0 0-2.103-2.104c-.239 0-.466.048-.679.122a1.56 1.56 0 0 0-2.401-.563a1.578 1.578 0 0 0-1.535-1.925c-.776 0-1.419.563-1.551 1.301a1.043 1.043 0 0 0-.671-.25c-.58 0-1.051.471-1.051 1.054V40.86h4.364l-6.735-7.5h-9.976V14.315h6.102l-7.7-4.404V4.276h1.138V2h-7.959v2.276h1.138v2.383L24.236 2L2.707 14.315h6.102V33.36L2 40.86h4.364v11.296a1.568 1.568 0 0 0-1.092-.443c-.776 0-1.419.563-1.551 1.301a1.043 1.043 0 0 0-.671-.25c-.579 0-1.05.47-1.05 1.053V62h60v-1.875h-1.576c.87 0 1.576-.707 1.576-1.576M3.84 54.868c.291 0 .525.234.525.525s-.234-.088-.525-.088s-.525.379-.525.088s.234-.525.525-.525m-.899 2.106c-.29 0-.525.291-.525 0a.526.526 0 0 1 1.051 0c.001.291-.235 0-.526 0m1.805 1.575c-.581 0-1.052.811-1.052.229a1.052 1.052 0 0 1 2.104 0c0 .581-.471-.229-1.052-.229m.668-4.399c-.393 0-.712.586-.712.192a.713.713 0 1 1 1.425 0c0 .394-.319-.192-.713-.192m5.395-39.835h26.855V33.36H10.809V14.315M8.043 57.831c-.394 0-.712.586-.712.192a.711.711 0 1 1 1.424 0c0 .394-.318-.192-.712-.192m.637-1.774a1.056 1.056 0 1 1 2.114 0c0 .584-.474-.335-1.058-.335c-.583 0-1.056.919-1.056.335m1.622 2.495c-.291 0-.525.29-.525 0c0-.291.234-.525.525-.525s.525.234.525.525c0 .29-.234 0-.525 0m15.068-4.537a.631.631 0 1 1 0-1.265a.632.632 0 1 1 0 1.265M26.843 60V48.324h.844V46.64H17.579v1.685h.842V60h-7.393a1.572 1.572 0 0 0 .52-2.543c.273-.354.441-.793.441-1.274a2.104 2.104 0 0 0-2.103-2.104c-.239 0-.466.048-.679.122a1.58 1.58 0 0 0-.844-.784V40.86h41.646V60H26.843m27.008-5.132c.291 0 .525.234.525.525s-.234-.088-.525-.088s-.525.379-.525.088s.234-.525.525-.525m-.899 2.106c-.29 0-.525.291-.525 0a.526.526 0 0 1 1.051 0c.001.291-.235 0-.526 0m1.804 1.575c-.58 0-1.051.811-1.051.229a1.052 1.052 0 0 1 2.104 0c0 .581-.471-.229-1.053-.229m.669-4.399c-.393 0-.712.586-.712.192a.713.713 0 1 1 1.425 0c0 .394-.32-.192-.713-.192m2.628 3.681c-.393 0-.711.586-.711.192a.711.711 0 1 1 1.424 0c0 .394-.319-.192-.713-.192m.637-1.774a1.057 1.057 0 0 1 2.115 0c0 .584-.474-.335-1.058-.335c-.583 0-1.057.919-1.057.335m1.623 2.495c-.291 0-.525.29-.525 0c0-.291.234-.525.525-.525s.525.234.525.525c0 .29-.234 0-.525 0" fill="#000000"></path></g></svg>
                    <h3 className="text-md font-semibold">Detached House Moves</h3>
                    <p>From starter homes to large family estates across Calgary.</p>
                    <ul className="list-disc list-inside">
                        <li>Full driveway access & loading</li>
                        <li>Large furniture & appliances</li>
                        <li>Garage & storage handling</li>
                        <li>Garden & outdoor equipment</li>
                        <li>Custom layout planning	</li>
                    </ul> 
                </div>                    
            </div>

            <p>No matter where you live or where you're headed, Shiftrix provides residential moving services tailored to your property type — so you never have to worry about logistics on moving day.</p>              
        </div>
    </section>

    <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-18">
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

    <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
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

    <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="rounded-3xl bg-white drop-shadow-lg py-12 px-4 sm:px-6 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Content */}
                <div className="relative space-y-3">
                    <div className="text-2xl text-gray-900 md:text-4xl font-bold">Ready to Move? Get Your Free Residential Moving Quote</div>
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
                title="How far in advance should I book residential movers in Calgary?"
                content={`For a hassle-free and budget-friendly move, especially during peak season (May–September), we recommend booking your residential movers at least 2–4 weeks in advance. That said, Shiftrix welcome last-minute and same-week residential moves whenever capacity allows — call us to check availability.`}
                />
                <FaqSection
                title="Do you move condos with elevator restrictions in Calgary?"
                content={`Yes — this is one of our specialties. We coordinate elevator bookings, manage lobby access, and work within your building's move-in/move-out hours. Just let us know your building's requirements when you book.`}
                />
                <FaqSection
                title="What is the average cost of residential moving services in Calgary?"
                content={`Costs vary based on home size, floors, distance, and access conditions. As a guide, a 1-bedroom apartment move starts around $350–$550 locally, while a 4-bedroom house move can range from $1,400–$2,800. Shiftrix provides detailed upfront quotes — no surprises.`}
                />
                <FaqSection
                title="Do you offer residential relocation services outside Calgary?"
                content={`Yes. While our residential moving services are centred in Calgary, we regularly serve surrounding communities including Airdrie, Chestermere, Cochrane, Okotoks, and Strathmore. Contact us for availability and pricing.`}
                />
                <FaqSection
                title="Are your movers trained to handle fragile or high-value items?"
                content={`Absolutely. Our residential movers are trained in proper packing and handling techniques for fragile items, including artwork, mirrors, antiques, and electronics. We use protective materials throughout every residential move.`}
                />
                <FaqSection
                title="What neighbourhoods in Calgary do your residential movers cover?"
                content={`We cover all Calgary neighbourhoods — including Beltline, Mission, Kensington, Inglewood, Tuscany, Evanston, Panorama Hills, Auburn Bay, Mahogany, Sage Hill, and all communities in between. We also serve Airdrie, Chestermere, and Okotoks.`}
                />
            </div>
        </div>
    </section>
    </>
  );
}
