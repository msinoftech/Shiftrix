import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo  } from "@/lib/config";
import ContactForm from "@/components/ContactForm";
import { FaqSection } from "@/components/FaqSection";
import Link from "next/link";

const { address, phone, logo } = contactInfo;

export const metadata: Metadata = {
    title: "Piano Mover in Calgary | Grand, Upright & Baby Grand Piano Moving – Shiftrix",
    description: "Your trusted piano mover in Calgary? Shiftrix offers insured, precision piano-moving services for grand, upright, and baby grand pianos across all Calgary neighbourhoods. Transparent pricing, no surprises. Get a free quote.",
    keywords: ["piano moving service in Calgary", "piano moving company in Calgary", "piano transport Calgary", "piano relocation Calgary", "move a piano in Calgary"],
    alternates: {
        canonical: `${BASE_URL}/services/piano-movers`,
    },
    openGraph: {
      title: "Piano Mover in Calgary | Grand, Upright & Baby Grand Piano Moving – Shiftrix",
      description: "Your trusted piano mover in Calgary? Shiftrix offers insured, precision piano-moving services for grand, upright, and baby grand pianos across all Calgary neighbourhoods. Transparent pricing, no surprises. Get a free quote.",
      url: `${BASE_URL}/services/piano-movers`,
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}/piano-mover-2.jpg`,
          width: 1200,
          height: 630,
          alt: "Piano Mover in Calgary | Grand, Upright & Baby Grand Piano Moving – Shiftrix",
        },
      ],
      locale: "en-CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Piano Mover in Calgary | Grand, Upright & Baby Grand Piano Moving – Shiftrix",
      description: "Your trusted piano mover in Calgary? Shiftrix offers insured, precision piano-moving services for grand, upright, and baby grand pianos across all Calgary neighbourhoods. Transparent pricing, no surprises. Get a free quote.",
      images: [`${BASE_URL}/piano-mover-2.jpg`],
    },  
};

const faqItems = [
    {
        title: "How far in advance of moving day should I book a piano mover in Calgary?",
        content: "At least 5–7 business days. Most of the buildings require a freight elevator booking or have a restricted move-in window — common in Calgary condos and apartment buildings. Earlier notice allows piano movers to coordinate that on your behalf.",
    },
    {
        title: "Do I need to tune my piano after it is moved?",
        content: "Yes — every piano should be tuned after a move. Strings shift pitch during transport due to vibration, temperature change, and humidity transition. At least wait 3 weeks from the moving day to allow the piano to acclimate to its new environment t before scheduling a tuning appointment.",
    },
    {
        title: "What types of pianos does Shiftrix move in Calgary?",
        content: "We move upright pianos, studio pianos, console pianos, baby grand pianos, parlor grand pianos, and digital pianos throughout Calgary and surrounding communities, including Chestermere, Airdrie, Cochrane, and Okotoks.",
    },
    {
        title: "Is Shiftrix insured for piano moves in Calgary?",
        content: "Yes. Every piano move includes comprehensive cargo insurance coverage. We also document the condition of your instrument with photos at pickup and delivery as a standard part of every job.",
    },
    {
        title: "Will you disassemble and reassemble my grand piano?",
        content: "Yes. Baby grand and grand piano moves require full disassembly — legs, lyre, pedal assembly, lid, and music desk are all removed, individually wrapped, and transported separately. Reassembly and level check at the destination are included in every grand piano move.",
    },
];

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
        "@id": `${BASE_URL}/services/piano-movers/#webpage`,
        "url": `${BASE_URL}/services/piano-movers`,
        "name": "Piano Mover in Calgary | Grand, Upright & Baby Grand Piano Moving – Shiftrix",
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "description": "Your trusted piano mover in Calgary? Shiftrix offers insured, precision piano-moving services for grand, upright, and baby grand pianos across all Calgary neighbourhoods. Transparent pricing, no surprises. Get a free quote.",
        "inLanguage": "en-CA",
        "breadcrumb": {"@id": `${BASE_URL}/services/piano-movers/#breadcrumb`}
    },
    {
        "@type": "BreadcrumbList",
        "@id": `${BASE_URL}/services/piano-movers/#breadcrumb`,
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
            "name": "piano movers",
            "item": `${BASE_URL}/services/piano-movers`
        }
        ]
    },
    {
        "@type": "Service",
        "serviceType": "Piano Moving Service",
        "provider": {
            "@type": "LocalBusiness",
            "name": `${APP_NAME}`,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": `${address}`,
                "addressLocality": "Chestermere",
                "addressRegion": "AB",
                "addressCountry": "CA"
            },
            "telephone": `${phone}`,
            "areaServed": "Calgary, AB",
            "logo": `${logo}`
        },
        "name": "Piano Mover in Calgary",
        "description": "Insured, precision piano moving service for upright, baby grand, and grand pianos across all Calgary neighbourhoods.",
        "areaServed": {
            "@type": "City",
            "name": "Calgary"
        }
    },
    {
        "@type": "FAQPage",
        "@id": `${BASE_URL}/services/piano-movers/#faq`,
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

export default function PianoMoversPage() {
  return (
    <>
    <Script id="piano-movers-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    <section className="relative sm:pt-40 md:pt-40 lg:pt-40 pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold pb-12">Calgary's Piano Moving Service — Protecting What Matters Most</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                    <Image src="/piano-mover-2.jpg" alt="piano moving service in Calgary" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                <div className="space-y-3">
                    <p>Tight condo hallways in the Beltline, century-old staircases in Kensington, steep driveways in Tuscany, and temperature swings from +12°C to -20°C in a single day pose the challenge to move a piano in Calgary, which demands more than a basic truck and a dolly.</p>
                    <p>Shiftrix is a dedicated piano moving company in Calgary that plans every move around your instrument's specific needs. We have moved pianos across NW, SW, SE, and NE Calgary — from Auburn Bay to Panorama Hills, from Mahogany to Varsity — and we bring that local experience to every single job.</p>

                    <Link href={`${BASE_URL}/contact-us`} className="inline-flex items-center gap-2 bg-gradient-to-br from-indigo-800 to-indigo-500 text-white px-6 py-3 rounded-md font-medium shadow-lg transition-transform transform">Get a free quote</Link>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* left Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Why Your Piano Deserves a Specialist, Not a Generalist</h2>
                    <p>A piano can't be addressed as a heavy piece of furniture-it is a cherished instrument. With hundreds of moving parts, insubstantial strings, and a finish that scratches in seconds, moving a piano demands expertise from the moment it leaves the room to the moment it arrives in its new home.</p>

                    <p className="font-semibold">Attempting a piano move without an expert exposes you to:</p>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Structural damage</strong> — cracked soundboard, loosened pin blocks, misaligned hammers</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Cosmetic damage</strong> — scratched lacquer, chipped legs, compressed felt</p>
                    </div>

                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Property damage</strong> — without the DIY equipment, damage the gouged hardwood floors, scraped elevator walls, and staircase banisters</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Personal injury</strong> — pianos weigh between 136 and 540+ kg; unprofessional lifting causes serious injuries.</p>
                    </div>

                    <p>Choosing Shiftrix's piano moving service in Calgary means eliminating every risk. Our crew arrives prepared.</p>
                </div>

                {/* right Image */}
                <div className="relative">
                    <Image src="/piano-mover-3.jpg" alt="piano moving company in Calgary" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* left Image */}
                <div className="relative">
                    <Image src="/piano-movers.jpg" alt="piano movers cost" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>
                {/* right Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">What Does It Cost to Move a Piano in Calgary?</h2>
                    <p>Piano moving costs in Calgary are calculated differently than standard transport — and rightly so. Shiftrix provides a custom quote based on every relevant factor, explained clearly before you commit.</p>

                    <p className="font-semibold">What affects your piano moving cost:</p>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Piano type and size</strong> — an upright requires different equipment and crew than a baby grand or full grand</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Origin and destination access</strong> — ground-floor moves are simpler than third-floor walk-ups or condos with freight elevator requirements.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Staircase count and configuration</strong> — each flight is assessed individually; narrow heritage staircases require additional crew and time</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Distance</strong> — moves across Calgary are quoted based on actual drive time and route.</p>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <p><strong>Building requirements</strong> — elevator bookings, move-in time windows, parking restrictions, and superintendent coordination all factor in</p>
                    </div>

                    <p>What is different at Shiftrix? Trust, there will be no surprises on moving day. Your final quote is your final price - no hidden labor fees, no surprise equipment charges, no vague line items. Get a free, no-obligation quote today.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* left Content */}
                <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Step by Step - How We Move Your Piano</h2>
                    
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Step 1 — Quote & Assessment</h3>
                            <p>Starts with a conversation from the piano type and brand, then builds access at both origin and destination, staircase details, elevator availability, parking, and any known access restrictions.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Step 2 — Show Up & Protection</h3>
                            <p>We arrive with key piano equipment: quilted blankets, stretch wrap, piano dollies, piano boards, stair-climbing equipment, floor runners, and wall corner guards to protect your space before the piano moves a single centimeter.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Step 3 — Careful Disassembly (where applicable)</h3>
                            <p>Where needed, every component is labeled, wrapped individually, and secured.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Step 4 — Secure Transport</h3>
                            <p>Your piano is loaded into a padded, clean vehicle. It is secured against movement.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Step 5 — Delivery & Reassembly</h3>
                            <p>At the destination, the piano is reassembled, placed exactly where you direct it, and inspected before we leave.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 px-3 py-4 bg-white rounded-xl shadow hover:shadow-md transition">
                        <div className="w-2 h-2 min-w-2 min-h-2 bg-blue-600 mt-2 rounded-sm"></div>
                        <div>
                            <h3 className="font-semibold">Step 6 — Documentation</h3>
                            <p>Photo documentation of your instrument's pre- and post-move condition is your record—and ours. or-to-ground-floor is cheaper than moving a grand piano across multiple floors. This requires disassembly and reassembly. Shiftrix provides a custom, transparent quote based on your piano type and building details for an accurate estimate—contact us.</p>
                        </div>
                    </div>
                </div>

                {/* right Image */}
                <div className="relative">
                    <Image src="/piano-mover-1.jpg" alt="piano movers cost" width={600} height={400} className="w-full h-full rounded-xl shadow-md object-cover"/>
                </div>

            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center space-y-3 pb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Why Choose Shiftrix for Your Piano Move?</h2>
                <p>Hiring Shiftrix means you can focus on the excitement of your new space while your piano is protected in the trusted hands of Calgary&apos;s best piano movers. We communicate clearly, plan, and execute with precision.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Item 1 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Expertise in Piano Moving</h3>
                    <p>Experienced team to handle and move each type of piano safely using proper techniques, equipment, and protective methods.</p>
                </div>

                {/* Item 2 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Condo & Apartment Specialists</h3>
                    <p>We navigate elevators, tight hallways, and loading docks smoothly without disrupting your living community.</p>
                </div>

                {/* Item 3 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">Fully Insured & Documented</h3>
                    <p>Every move includes comprehensive insurance coverage for clients&apos; needs and documentation of conditions with photos before and after.</p>
                </div>

                {/* Item 4 */}
                <div className="bg-gray-100 border border-gray-200 hover:border-indigo-200 rounded-2xl shadow p-6 sm:p-8 md:p-10 lg:p-12 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-3">
                    <h3 className="text-xl font-semibold">No-Surprise Pricing</h3>
                    <p>We always offer transparent pricing based on your specific piano type, access location, and building requirements, with no hidden fees.</p>
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
                <FaqSection items={faqItems} />
            </div>
            
        </div>
    </section>
    </>
  );
}